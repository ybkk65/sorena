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

    // Initialise explicitement le widget dans notre conteneur, plutôt que de
    // compter sur le scan automatique de Calendly (qui ne s'exécute qu'une
    // seule fois au chargement du script -> bug "une fois sur deux").
    const initWidget = () => {
      const parent = widgetRef.current;
      if (!parent || !window.Calendly) return;

      // Idempotent : en dev (React Strict Mode) l'effet s'exécute deux fois.
      // Sans ce garde, deux iframes Calendly se chargent en concurrence et
      // l'un affiche "calendrier indisponible" -> bug "une fois sur deux".
      if (parent.dataset.calendlyInit === "true") return;
      parent.dataset.calendlyInit = "true";

      window.Calendly.initInlineWidget({
        url: widgetUrl,
        parentElement: parent,
      });
    };

    // Si le script est déjà chargé et l'API dispo, on initialise tout de suite.
    if (window.Calendly) {
      initWidget();
      return;
    }

    const existing = document.getElementById(
      scriptId
    ) as HTMLScriptElement | null;

    if (existing) {
      existing.addEventListener("load", initWidget);
      return () => existing.removeEventListener("load", initWidget);
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = scriptSrc;
    script.async = true;
    script.addEventListener("load", initWidget);
    document.body.appendChild(script);

    return () => script.removeEventListener("load", initWidget);
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
