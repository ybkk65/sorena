"use client";

import { useEffect, useRef } from "react";

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  "https://calendly.com/sofya-sorenaagency/30min";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

export function Calendar() {
  const widgetRef = useRef<HTMLDivElement>(null);

  const widgetUrl = `${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=4a1620`;

  useEffect(() => {
    const scriptId = "calendly-widget-script";
    const scriptSrc = "https://assets.calendly.com/assets/external/widget.js";

    // On s'assure que le script est présent (une seule fois pour toute la page).
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    }

    // On NE se fie PAS à l'événement "load" : quand le navigateur sert
    // widget.js depuis son cache (une fois sur deux au refresh), "load" peut
    // partir avant qu'on attache l'écouteur -> le widget ne s'initialise
    // jamais. On poll donc jusqu'à ce que l'API Calendly ET le conteneur
    // soient prêts, puis on initialise une seule fois.
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    const tryInit = () => {
      if (cancelled) return;

      const parent = widgetRef.current;

      if (parent && window.Calendly) {
        // Garde idempotent basé sur le DOM réel : si un iframe est déjà
        // injecté (Strict Mode en dev), on n'en recrée pas un second.
        if (parent.childElementCount === 0) {
          window.Calendly.initInlineWidget({
            url: widgetUrl,
            parentElement: parent,
          });
        }
        return;
      }

      timer = setTimeout(tryInit, 100);
    };

    tryInit();

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [widgetUrl]);

  return (
    <section id="agenda" className="section calendar-section">
      <div className="calendar-bg" aria-hidden="true" />

      <div className="wrap">
        <div className="calendar-head reveal">

          <span className="kicker">
            30 MINUTES • SANS ENGAGEMENT
          </span>

          <h2 className="calendar-title">
            Choisissez votre <em>créneau.</em>
          </h2>

          <p className="calendar-sub">
            Confirmation immédiate • Reprogrammable facilement
          </p>

        </div>

        <div
          className="calendly-frame reveal"
          style={{ "--rd": ".15s" } as React.CSSProperties}
        >
          <div
            ref={widgetRef}
            className="calendly-embed"
            style={{
              minWidth: 320,
              height: 720,
              width: "100%",
            }}
          />
        </div>
      </div>
    </section>
  );
}
