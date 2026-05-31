import { NextResponse } from "next/server";

interface BookingPayload {
  slot: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  center: string;
}

function parseBody(body: unknown): BookingPayload | null {
  if (typeof body !== "object" || body === null) return null;
  const b = body as Record<string, unknown>;
  if (
    typeof b.slot !== "string" ||
    typeof b.firstname !== "string" ||
    typeof b.lastname !== "string" ||
    typeof b.email !== "string" ||
    typeof b.phone !== "string" ||
    typeof b.center !== "string"
  ) {
    return null;
  }
  return b as unknown as BookingPayload;
}

export async function POST(request: Request) {
  try {
    const raw = (await request.json()) as unknown;
    const payload = parseBody(raw);
    if (!payload) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    // When Calendly v2 PAT + webhook are configured, the actual scheduling is
    // performed by the Calendly scheduling page or by a webhook subscription.
    // Here we capture the lead intent so it lands in the CRM/email immediately,
    // and the real Calendly confirmation arrives via webhook.

    // TODO: wire to CRM / email provider (Resend, Postmark, Formspree, ...).

    return NextResponse.json({ ok: true, queued: true });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
