import { NextResponse } from "next/server";

interface CalendlySlot {
  start_time: string;
  scheduling_url?: string;
}

interface DayAvailability {
  date: string;
  status: "available" | "unavailable";
  spots: CalendlySlot[];
}

const CALENDLY_TOKEN = process.env.CALENDLY_API_TOKEN;
const CALENDLY_EVENT_TYPE = process.env.CALENDLY_EVENT_TYPE_URI;

function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

function isoDate(d: Date): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function getDaysInMonth(year: number, month0: number): number {
  return new Date(year, month0 + 1, 0).getDate();
}

function mockDay(date: Date): DayAvailability {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const isWeekend = date.getDay() === 0 || date.getDay() === 6;
  if (date < today || isWeekend) {
    return { date: isoDate(date), status: "unavailable", spots: [] };
  }
  const baseTimes = ["09:00", "10:30", "11:30", "14:00", "15:30", "17:00", "18:30"];
  const count = 3 + ((date.getDate() + date.getMonth()) % 4);
  return {
    date: isoDate(date),
    status: "available",
    spots: baseTimes.slice(0, count).map((t) => ({
      start_time: `${isoDate(date)}T${t}:00+02:00`,
    })),
  };
}

async function fetchCalendlyMonth(year: number, month1: number): Promise<DayAvailability[]> {
  if (!CALENDLY_TOKEN || !CALENDLY_EVENT_TYPE) {
    throw new Error("Calendly credentials not configured");
  }

  const start = new Date(year, month1 - 1, 1);
  const end = new Date(year, month1, 0);
  const startIso = start.toISOString();
  const endIso = new Date(end.getTime() + 24 * 60 * 60 * 1000 - 1).toISOString();

  const url = new URL("https://api.calendly.com/event_type_available_times");
  url.searchParams.set("event_type", CALENDLY_EVENT_TYPE);
  url.searchParams.set("start_time", startIso);
  url.searchParams.set("end_time", endIso);

  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${CALENDLY_TOKEN}`,
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`Calendly API error: ${res.status}`);
  }

  const data = (await res.json()) as {
    collection: { start_time: string; scheduling_url: string }[];
  };

  const byDay = new Map<string, CalendlySlot[]>();
  for (const slot of data.collection) {
    const d = new Date(slot.start_time);
    const key = isoDate(d);
    if (!byDay.has(key)) byDay.set(key, []);
    byDay.get(key)!.push({
      start_time: slot.start_time,
      scheduling_url: slot.scheduling_url,
    });
  }

  const daysInMonth = getDaysInMonth(year, month1 - 1);
  const days: DayAvailability[] = [];
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month1 - 1, d);
    const key = isoDate(date);
    const spots = byDay.get(key) || [];
    days.push({
      date: key,
      status: spots.length > 0 ? "available" : "unavailable",
      spots,
    });
  }
  return days;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const year = parseInt(searchParams.get("year") || "0", 10);
  const month = parseInt(searchParams.get("month") || "0", 10);

  if (!year || !month || month < 1 || month > 12) {
    return NextResponse.json({ error: "Invalid year or month" }, { status: 400 });
  }

  try {
    const days = await fetchCalendlyMonth(year, month);
    return NextResponse.json({ days, source: "calendly" });
  } catch {
    const daysInMonth = getDaysInMonth(year, month - 1);
    const days: DayAvailability[] = [];
    for (let d = 1; d <= daysInMonth; d++) {
      days.push(mockDay(new Date(year, month - 1, d)));
    }
    return NextResponse.json({ days, source: "mock" });
  }
}
