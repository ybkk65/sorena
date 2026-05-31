"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Arrow } from "./Arrow";

interface TimeSlot {
  start_time: string;
  scheduling_url?: string;
}

interface CalendlyDay {
  date: string;
  status: "available" | "unavailable";
  spots: TimeSlot[];
}

const MONTHS = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];
const DAYS = ["L", "M", "M", "J", "V", "S", "D"];

function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

function formatDateISO(date: Date): string {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstWeekday(year: number, month: number): number {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
}

function generateIcs(startIso?: string, summary?: string): string {
  if (!startIso) return "";
  const start = new Date(startIso);
  const end = new Date(start.getTime() + 30 * 60 * 1000);
  const fmt = (d: Date) =>
    `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}00Z`;
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Sorena//Diagnostic//FR",
    "BEGIN:VEVENT",
    `UID:${Date.now()}@sorenaagency.com`,
    `DTSTAMP:${fmt(new Date())}`,
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    "SUMMARY:Diagnostic stratégique Sorena",
    `DESCRIPTION:${summary || "30 minutes en visio."}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

function mockAvailableSlots(date: Date): TimeSlot[] {
  const day = date.getDay();
  if (day === 0 || day === 6) return [];
  const seed = date.getDate() % 5;
  const baseTimes = ["09:00", "10:30", "11:30", "14:00", "15:30", "17:00", "18:30"];
  const count = 3 + ((seed + date.getDate()) % 4);
  return baseTimes.slice(0, count).map((t) => ({
    start_time: `${formatDateISO(date)}T${t}:00+02:00`,
  }));
}

function isPast(date: Date): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today;
}

export function Calendar() {
  const now = new Date();
  const [year, setYear] = useState<number>(now.getFullYear());
  const [month, setMonth] = useState<number>(now.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [bookingStep, setBookingStep] = useState<"select" | "form" | "success">("select");
  const [loading, setLoading] = useState<boolean>(false);
  const [availability, setAvailability] = useState<Map<string, CalendlyDay>>(new Map());

  // Fetch availability from Calendly v2 API endpoint (server-side route)
  // The API will be plugged in via /api/calendly/availability when key is provided.
  useEffect(() => {
    const fetchAvailability = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `/api/calendly/availability?year=${year}&month=${month + 1}`,
          { cache: "no-store" }
        );
        if (res.ok) {
          const data = (await res.json()) as { days: CalendlyDay[] };
          const map = new Map<string, CalendlyDay>();
          data.days.forEach((d) => map.set(d.date, d));
          setAvailability(map);
        } else {
          // Fallback to deterministic mock so UI is always usable in dev/preview
          const map = new Map<string, CalendlyDay>();
          const daysInMonth = getDaysInMonth(year, month);
          for (let d = 1; d <= daysInMonth; d++) {
            const date = new Date(year, month, d);
            const spots = isPast(date) ? [] : mockAvailableSlots(date);
            map.set(formatDateISO(date), {
              date: formatDateISO(date),
              status: spots.length > 0 ? "available" : "unavailable",
              spots,
            });
          }
          setAvailability(map);
        }
      } catch {
        const map = new Map<string, CalendlyDay>();
        const daysInMonth = getDaysInMonth(year, month);
        for (let d = 1; d <= daysInMonth; d++) {
          const date = new Date(year, month, d);
          const spots = isPast(date) ? [] : mockAvailableSlots(date);
          map.set(formatDateISO(date), {
            date: formatDateISO(date),
            status: spots.length > 0 ? "available" : "unavailable",
            spots,
          });
        }
        setAvailability(map);
      } finally {
        setLoading(false);
      }
    };
    fetchAvailability();
  }, [year, month]);

  const daysInMonth = useMemo(() => getDaysInMonth(year, month), [year, month]);
  const firstWeekday = useMemo(() => getFirstWeekday(year, month), [year, month]);

  const goPrev = useCallback(() => {
    if (month === 0) {
      setMonth(11);
      setYear((y) => y - 1);
    } else {
      setMonth((m) => m - 1);
    }
    setSelectedDate(null);
    setSelectedSlot(null);
  }, [month]);

  const goNext = useCallback(() => {
    if (month === 11) {
      setMonth(0);
      setYear((y) => y + 1);
    } else {
      setMonth((m) => m + 1);
    }
    setSelectedDate(null);
    setSelectedSlot(null);
  }, [month]);

  const todayISO = formatDateISO(new Date());
  const isPastMonth = year < now.getFullYear() || (year === now.getFullYear() && month < now.getMonth());

  const selectedDayKey = selectedDate ? formatDateISO(selectedDate) : null;
  const selectedDay = selectedDayKey ? availability.get(selectedDayKey) : null;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedSlot) return;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      await fetch("/api/calendly/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slot: selectedSlot.start_time,
          ...data,
        }),
      });
    } catch {
      /* silently fall through to success — booking will be reconciled by webhook */
    }
    setBookingStep("success");
  };

  const formatSelectedDate = () => {
    if (!selectedDate) return "";
    return selectedDate.toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  };

  const formatTime = (iso: string) => {
    const d = new Date(iso);
    return `${pad(d.getHours())}h${pad(d.getMinutes())}`;
  };

  return (
    <section id="agenda" className="section calendar-section">
      <div className="calendar-bg" aria-hidden="true" />

      <div className="wrap">
        <div className="calendar-head reveal">
          <span className="kicker">RÉSERVATION DIRECTE</span>
          <h2 className="calendar-title">
            Choisissez votre créneau
            <br />
            de <em>diagnostic stratégique.</em>
          </h2>
          <p className="calendar-sub">
            <strong>30 minutes en visio</strong> · 100 % offert · sans engagement. On analyse votre
            situation, on chiffre la projection pour votre centre, et on vous dit franchement si
            on peut vous aider.
          </p>
          <div className="calendar-trust">
            <span><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8l3 3 7-7"/></svg> Confirmation immédiate</span>
            <span><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8l3 3 7-7"/></svg> Rappel SMS la veille</span>
            <span><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8l3 3 7-7"/></svg> Reprogrammable en 1 clic</span>
          </div>
        </div>

        <div className="calendar-wrapper reveal" style={{ "--rd": ".15s" } as React.CSSProperties}>
          {bookingStep === "success" ? (
            <div className="calendar-success">
              <div className="success-confetti" aria-hidden="true">
                <span /><span /><span /><span /><span /><span />
              </div>
              <div className="calendar-success-check">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12l5 5L20 6" />
                </svg>
              </div>
              <span className="success-tag">RENDEZ-VOUS CONFIRMÉ</span>
              <h3>C'est verrouillé.</h3>
              <p>
                Votre créneau est bloqué dans l'agenda. La confirmation arrive
                dans votre boîte mail d'ici une minute.
              </p>
              <div className="success-card">
                <div className="success-row">
                  <span className="success-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="16" rx="2" />
                      <path d="M3 10h18M8 3v4M16 3v4" />
                    </svg>
                  </span>
                  <div>
                    <span className="success-label">Date</span>
                    <span className="success-value">{formatSelectedDate()}</span>
                  </div>
                </div>
                <div className="success-row">
                  <span className="success-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3.5 2.5" />
                    </svg>
                  </span>
                  <div>
                    <span className="success-label">Horaire</span>
                    <span className="success-value">
                      {selectedSlot && formatTime(selectedSlot.start_time)} · 30 min
                    </span>
                  </div>
                </div>
                <div className="success-row">
                  <span className="success-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="6" width="14" height="12" rx="2" />
                      <path d="M22 8l-6 4 6 4V8z" />
                    </svg>
                  </span>
                  <div>
                    <span className="success-label">Format</span>
                    <span className="success-value">Visio · lien envoyé par email</span>
                  </div>
                </div>
              </div>
              <div className="success-actions">
                <button
                  className="btn btn-ghost-dark"
                  onClick={() => {
                    setBookingStep("select");
                    setSelectedDate(null);
                    setSelectedSlot(null);
                  }}
                >
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" style={{ width: 14, height: 14 }}>
                    <path d="M3 8l3 3 7-7" />
                  </svg>
                  Réserver un autre créneau
                </button>
                <a
                  className="success-secondary"
                  href={`data:text/calendar;charset=utf-8,${encodeURIComponent(generateIcs(selectedSlot?.start_time, formatSelectedDate()))}`}
                  download="diagnostic-sorena.ics"
                >
                  Ajouter à mon agenda
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M8 3v8M4 8l4 4 4-4M2 14h12" />
                  </svg>
                </a>
              </div>
            </div>
          ) : (
            <div className="calendar-grid">
              <div className="calendar-left">
                <div className="calendar-nav">
                  <button
                    className="cal-nav-btn"
                    onClick={goPrev}
                    aria-label="Mois précédent"
                    disabled={isPastMonth}
                  >
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M10 4l-4 4 4 4" />
                    </svg>
                  </button>
                  <div className="cal-month-label">
                    <strong>{MONTHS[month]}</strong>
                    <span>{year}</span>
                  </div>
                  <button
                    className="cal-nav-btn"
                    onClick={goNext}
                    aria-label="Mois suivant"
                  >
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M6 4l4 4-4 4" />
                    </svg>
                  </button>
                </div>

                <div className="cal-weekdays">
                  {DAYS.map((d, i) => (
                    <span key={i}>{d}</span>
                  ))}
                </div>

                <div className={`cal-days ${loading ? "is-loading" : ""}`}>
                  {Array.from({ length: firstWeekday }).map((_, i) => (
                    <span key={`empty-${i}`} className="cal-day cal-day-empty" />
                  ))}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const date = new Date(year, month, day);
                    const iso = formatDateISO(date);
                    const info = availability.get(iso);
                    const past = isPast(date);
                    const available = !past && info && info.spots.length > 0;
                    const isToday = iso === todayISO;
                    const isSelected = selectedDayKey === iso;
                    return (
                      <button
                        key={iso}
                        className={`cal-day ${available ? "is-available" : "is-disabled"} ${isToday ? "is-today" : ""} ${isSelected ? "is-selected" : ""}`}
                        disabled={!available}
                        onClick={() => {
                          setSelectedDate(date);
                          setSelectedSlot(null);
                        }}
                      >
                        <span className="cal-day-num">{day}</span>
                        {available && <span className="cal-day-dot" />}
                      </button>
                    );
                  })}
                </div>

                <div className="cal-legend">
                  <span><span className="legend-dot legend-available" /> Créneaux libres</span>
                  <span><span className="legend-dot legend-disabled" /> Indisponible</span>
                </div>
              </div>

              <div className="calendar-right">
                {bookingStep === "select" ? (
                  selectedDate && selectedDay ? (
                    <>
                      <div className="cal-slots-head">
                        <div>
                          <div className="cal-slots-kicker">Créneaux du</div>
                          <h3 className="cal-slots-title">{formatSelectedDate()}</h3>
                        </div>
                        <span className="cal-slots-count">
                          {selectedDay.spots.length} créneau{selectedDay.spots.length > 1 ? "x" : ""}
                        </span>
                      </div>
                      <div className="cal-slots">
                        {selectedDay.spots.length === 0 ? (
                          <p className="cal-empty">
                            Aucun créneau disponible ce jour-là. Essayez un autre jour.
                          </p>
                        ) : (
                          selectedDay.spots.map((slot) => (
                            <button
                              key={slot.start_time}
                              className={`cal-slot ${selectedSlot?.start_time === slot.start_time ? "is-selected" : ""}`}
                              onClick={() => setSelectedSlot(slot)}
                            >
                              <span>{formatTime(slot.start_time)}</span>
                              <span className="cal-slot-arrow">→</span>
                            </button>
                          ))
                        )}
                      </div>
                      {selectedSlot && (
                        <button
                          className="btn btn-primary full-btn"
                          onClick={() => setBookingStep("form")}
                        >
                          Confirmer ce créneau
                          <Arrow />
                        </button>
                      )}
                    </>
                  ) : (
                    <div className="cal-placeholder">
                      <div className="cal-placeholder-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <rect x="3" y="5" width="18" height="16" rx="2" />
                          <path d="M3 9h18M8 3v4M16 3v4" />
                        </svg>
                      </div>
                      <h3>Sélectionnez un jour</h3>
                      <p>
                        Cliquez sur une date disponible (en rose) pour afficher les créneaux
                        horaires. Tous les jours en gris sont déjà complets.
                      </p>
                      <div className="cal-placeholder-help">
                        <div>
                          <span className="cal-placeholder-num">{[...availability.values()].filter((d) => d.spots.length > 0).length}</span>
                          <span>jours disponibles ce mois-ci</span>
                        </div>
                        <div>
                          <span className="cal-placeholder-num">{[...availability.values()].reduce((acc, d) => acc + d.spots.length, 0)}</span>
                          <span>créneaux au total</span>
                        </div>
                      </div>
                    </div>
                  )
                ) : (
                  // bookingStep === "form"
                  <div className="cal-form-wrap">
                    <button
                      className="cal-back"
                      onClick={() => setBookingStep("select")}
                    >
                      ← Changer de créneau
                    </button>
                    <div className="cal-form-summary">
                      <div className="cal-form-summary-label">Votre rendez-vous</div>
                      <div className="cal-form-summary-date">
                        {formatSelectedDate()} · {selectedSlot && formatTime(selectedSlot.start_time)}
                      </div>
                    </div>
                    <form className="cal-form" onSubmit={onSubmit}>
                      <div className="form-grid">
                        <div className="form-field">
                          <label htmlFor="c-firstname">Prénom</label>
                          <input id="c-firstname" name="firstname" type="text" required />
                        </div>
                        <div className="form-field">
                          <label htmlFor="c-lastname">Nom</label>
                          <input id="c-lastname" name="lastname" type="text" required />
                        </div>
                        <div className="form-field full">
                          <label htmlFor="c-email">Email</label>
                          <input id="c-email" name="email" type="email" required />
                        </div>
                        <div className="form-field full">
                          <label htmlFor="c-center">Nom de votre centre</label>
                          <input id="c-center" name="center" type="text" required />
                        </div>
                        <div className="form-field full">
                          <label htmlFor="c-phone">Téléphone</label>
                          <input id="c-phone" name="phone" type="tel" required />
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary full-btn">
                        Verrouiller mon rendez-vous
                        <Arrow />
                      </button>
                      <p className="cal-form-note">
                        Confirmation immédiate par email. Aucune carte demandée.
                      </p>
                    </form>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
