"use client";

import { useEffect, useRef, useState } from "react";
import { Arrow } from "./Arrow";

const NODES = [
  {
    word: "Attirer",
    cap: "Les bonnes clientes",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 4v6a7 7 0 0 0 14 0V4" />
        <path d="M3 4h4M17 4h4M5 13h4M15 13h4" />
      </svg>
    ),
  },
  {
    word: "Qualifier",
    cap: "Filtrées avant l'agenda",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 5h18l-7 8v6l-4-2v-4z" />
      </svg>
    ),
  },
  {
    word: "Convertir",
    cap: "Des rendez-vous honorés",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
        <path d="M3.5 9.5h17M8 3v4M16 3v4M8.5 14.5l2.5 2.5 4-4.5" />
      </svg>
    ),
  },
  {
    word: "Préserver",
    cap: "Votre image intacte",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
        <path d="M9 12l2 2 4-4.5" />
      </svg>
    ),
  },
];

export function Methode() {
  const parcoursRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = parcoursRef.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setActive(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="methode" className="section section-cream methode-editorial">
      <div className="wrap">
        <div className="methode-intro reveal">
          <span className="kicker" style={{ color: "var(--bordeaux-warm)" }}>
            LA MÉTHODE
          </span>
          <h2 className="methode-h2">
            Le système derrière vos <em>clientes qualifiées.</em>
          </h2>
          <p className="methode-sub">
            Vous réalisez les soins, on remplit votre agenda. Un parcours continu —
            attirer, filtrer puis convertir les bonnes clientes, sans jamais diluer
            votre image.
          </p>
        </div>

        <div
          ref={parcoursRef}
          className={`parcours${active ? " is-active" : ""}`}
          role="list"
          aria-label="Les quatre étapes de la méthode Sorena"
        >
          <div className="parcours-line" aria-hidden="true">
            <span className="parcours-line-fill" />
          </div>

          {NODES.map((n, i) => (
            <div
              key={n.word}
              className="parcours-node"
              role="listitem"
              style={{ "--i": i } as React.CSSProperties}
            >
              <span className="parcours-dot" aria-hidden="true">
                {n.icon}
              </span>
              <span className="parcours-body">
                <span className="parcours-word">{n.word}</span>
                <span className="parcours-cap">{n.cap}</span>
              </span>
            </div>
          ))}
        </div>

        <p className="parcours-summary reveal">
          Un système continu qui attire les bonnes clientes, filtre les demandes et
          les transforme en rendez-vous honorés — sans jamais diluer votre image.
        </p>

        <div className="methode-foot reveal">
          <a className="methode-link" href="#agenda">
            Réserver mon audit
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
