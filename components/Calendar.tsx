"use client";

import { useEffect } from "react";

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  "https://calendly.com/sofya-sorenaagency/30min";

export function Calendar() {
  useEffect(() => {
    const id = "calendly-widget-script";
    if (document.getElementById(id)) return;
    const script = document.createElement("script");
    script.id = id;
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const widgetUrl = `${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=4a1620`;

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
            <span>
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8l3 3 7-7" />
              </svg>{" "}
              Confirmation immédiate
            </span>
            <span>
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8l3 3 7-7" />
              </svg>{" "}
              Rappel SMS la veille
            </span>
            <span>
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8l3 3 7-7" />
              </svg>{" "}
              Reprogrammable en 1 clic
            </span>
          </div>
        </div>

        <div
          className="calendly-frame reveal"
          style={{ "--rd": ".15s" } as React.CSSProperties}
        >
          <div
            className="calendly-inline-widget"
            data-url={widgetUrl}
            style={{ minWidth: 320, height: 720, width: "100%" }}
          />
        </div>
      </div>
    </section>
  );
}
