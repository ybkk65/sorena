"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Lien Cal.com (remplace l'ancienne intégration Calendly).
const CAL_LINK =
  process.env.NEXT_PUBLIC_CAL_LINK ||
  "sofya-dvdulm/votre-plan-d-acquisition-personnalise-offert";

// Namespace Cal.com (identifiant interne de l'embed sur la page).
const CAL_NS = "sorena-agenda";

// Conteneur ciblé par l'embed inline.
const CAL_ELEMENT_ID = "cal-inline-sorena";

/** Variables de thème Cal.com (thème sombre) : bordeaux, rose et crème de Sorena. */
const CAL_THEME_SORENA: Record<string, string> = {
  "cal-brand": "#f0c8c0",
  "cal-brand-emphasis": "#f7dcd6",
  "cal-brand-text": "#1f070d",
  "cal-bg": "#1f070d",
  "cal-bg-muted": "#2a0c13",
  "cal-bg-subtle": "#2a0c13",
  "cal-bg-emphasis": "#3a1420",
  "cal-border": "rgba(240, 200, 192, 0.18)",
  "cal-border-subtle": "rgba(240, 200, 192, 0.1)",
  "cal-text": "#f6efe6",
  "cal-text-emphasis": "#fdf9f3",
  "cal-text-subtle": "#d9c2bb",
  "cal-text-muted": "#b39b95",
};

// L'embed (~2 Mo + cookies tiers) n'est chargé qu'à l'approche de l'agenda.
const PRELOAD_MARGIN = "600px 0px";

declare global {
  interface Window {
    Cal?: {
      (...args: unknown[]): void;
      ns?: Record<string, (...args: unknown[]) => void>;
      loaded?: boolean;
    };
  }
}

/** Loader officiel Cal.com : injecte embed.js une seule fois et expose window.Cal. */
function installCalLoader(C: Window, A: string, L: string): void {
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
}

function mountCalEmbed(): void {
  installCalLoader(window, "https://app.cal.com/embed/embed.js", "init");
  const Cal = window.Cal!;
  Cal("init", CAL_NS, { origin: "https://cal.com" });
  const ns = Cal.ns![CAL_NS];

  // Garde idempotent : en dev (React Strict Mode) l'effet s'exécute deux
  // fois ; on évite d'injecter deux iframes dans le même conteneur.
  const target = document.getElementById(CAL_ELEMENT_ID);
  if (!target || target.dataset.mounted === "true") return;
  target.dataset.mounted = "true";

  ns("inline", {
    elementOrSelector: `#${CAL_ELEMENT_ID}`,
    config: { layout: "month_view", theme: "dark" },
    calLink: CAL_LINK,
  });

  // Thème sombre aux couleurs de la maison : l'agenda se fond dans la
  // section de clôture (fond bordeaux), sans cadre autour.
  ns("ui", {
    theme: "dark",
    hideEventTypeDetails: false,
    layout: "month_view",
    cssVarsPerTheme: { dark: CAL_THEME_SORENA },
  });
}

export function Calendar() {
  const sectionRef = useRef<HTMLElement>(null);
  const [requested, setRequested] = useState(false);

  // Déclencheurs : arrivée directe sur #agenda, clic sur un CTA "#agenda",
  // ou section qui approche du viewport.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const request = () => setRequested(true);
    if (window.location.hash === "#agenda") request();

    const onHash = () => {
      if (window.location.hash === "#agenda") request();
    };
    window.addEventListener("hashchange", onHash);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          request();
          io.disconnect();
        }
      },
      { rootMargin: PRELOAD_MARGIN }
    );
    io.observe(section);

    return () => {
      window.removeEventListener("hashchange", onHash);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    if (requested) mountCalEmbed();
  }, [requested]);

  return (
    <section id="agenda" ref={sectionRef} className="section calendar-section calendar-dark">
      <div className="calendar-bg" aria-hidden="true" />

      <div className="wrap">
        {/* Clôture de page : la promesse du diagnostic, puis l'agenda juste dessous
            (l'ancien bloc « CTA final » faisait doublon avec cette section). */}
        <div className="calendar-head reveal">
          <div className="calendar-head-main">
            <span className="cv-label">Diagnostic offert</span>
            <h2 className="calendar-title">
              Votre zone est‑elle <em>encore libre&nbsp;?</em>
            </h2>
          </div>

          <div className="calendar-head-aside">
            <p className="calendar-sub">
              Nous étudions votre zone, vos soins et votre agenda. Vous
              repartez avec un plan clair, même si nous ne travaillons pas ensemble.
            </p>
            <p className="calendar-sofya">
              <Image src="/assets/sofya-full.jpg" alt="" width={88} height={88} />
              <span>
                Vous échangez directement avec <strong>Sofya</strong>, fondatrice de Sorena.
              </span>
            </p>
            <p className="calendar-reassure">Sans engagement · Une maison par zone de 10 km</p>
          </div>
        </div>

        <div
          className="cal-frame reveal"
          style={{ "--rd": ".15s" } as React.CSSProperties}
        >
          <div id={CAL_ELEMENT_ID} className="cal-embed" style={{ width: "100%" }} />
          <p className="cal-fallback">
            L&apos;agenda ne s&apos;affiche pas ?{" "}
            <a href={`https://cal.com/${CAL_LINK}`} target="_blank" rel="noopener">
              Ouvrir l&apos;agenda dans un nouvel onglet
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
