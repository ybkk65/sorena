"use client";

import { useEffect } from "react";

// Lien Cal.com (remplace l'ancienne intégration Calendly).
const CAL_LINK =
  process.env.NEXT_PUBLIC_CAL_LINK ||
  "sofya-dvdulm/votre-plan-d-acquisition-personnalise-offert";

// Namespace Cal.com (identifiant interne de l'embed sur la page).
const CAL_NS = "sorena-agenda";

// Conteneur ciblé par l'embed inline.
const CAL_ELEMENT_ID = "cal-inline-sorena";

declare global {
  interface Window {
    Cal?: {
      (...args: unknown[]): void;
      ns?: Record<string, (...args: unknown[]) => void>;
      loaded?: boolean;
    };
  }
}

export function Calendar() {
  useEffect(() => {
    // Loader officiel Cal.com : injecte embed.js une seule fois et expose
    // l'API globale window.Cal (il se garde lui-même contre les doublons).
    (function (C: Window, A: string, L: string) {
      const p = (a: { q: unknown[] }, ar: unknown) => {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function (...args: unknown[]) {
          const cal = C.Cal!;
          if (!cal.loaded) {
            cal.ns = {};
            (cal as unknown as { q: unknown[] }).q =
              (cal as unknown as { q: unknown[] }).q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (args[0] === L) {
            const api = function (...a: unknown[]) {
              p(api as unknown as { q: unknown[] }, a);
            };
            const namespace = args[1];
            (api as unknown as { q: unknown[] }).q = [];
            if (typeof namespace === "string") {
              cal.ns![namespace] = cal.ns![namespace] || (api as never);
              p(cal.ns![namespace] as unknown as { q: unknown[] }, args);
              p(cal as unknown as { q: unknown[] }, ["initNamespace", namespace]);
            } else {
              p(cal as unknown as { q: unknown[] }, args);
            }
            return;
          }
          p(cal as unknown as { q: unknown[] }, args);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const Cal = window.Cal!;

    Cal("init", CAL_NS, { origin: "https://cal.com" });

    const ns = Cal.ns![CAL_NS];

    // Garde idempotent : en dev (React Strict Mode) l'effet s'exécute deux
    // fois ; on évite d'injecter deux iframes dans le même conteneur.
    const target = document.getElementById(CAL_ELEMENT_ID);
    if (target && target.childElementCount === 0) {
      ns("inline", {
        elementOrSelector: `#${CAL_ELEMENT_ID}`,
        config: { layout: "month_view", theme: "light" },
        calLink: CAL_LINK,
      });

      ns("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: { light: { "cal-brand": "#4a1620" } },
      });
    }
  }, []);

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
          className="cal-frame reveal"
          style={{ "--rd": ".15s" } as React.CSSProperties}
        >
          <div
            id={CAL_ELEMENT_ID}
            className="cal-embed"
            style={{
              minWidth: 320,
              height: 720,
              width: "100%",
              overflow: "auto",
            }}
          />
        </div>
      </div>
    </section>
  );
}
