"use client";

import { useEffect, useRef, useState } from "react";
import { Arrow } from "./Arrow";

const NODES = [
  {
    word: "Attirer",
    cap: "Des campagnes ciblées font venir les bonnes clientes pour vos cures premium, dans votre zone.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 4v6a7 7 0 0 0 14 0V4" />
        <path d="M3 4h4M17 4h4M5 13h4M15 13h4" />
      </svg>
    ),
  },
  {
    word: "Qualifier",
    cap: "Une IA répond en quelques secondes, 24/7, et pré-qualifie chaque demande avant qu'elle atteigne votre agenda.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 5h18l-7 8v6l-4-2v-4z" />
      </svg>
    ),
  },
  {
    word: "Convertir",
    cap: "L'IA relance au bon moment les clientes qui hésitent, jusqu'au rendez-vous confirmé — sans que vous interveniez.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
        <path d="M3.5 9.5h17M8 3v4M16 3v4M8.5 14.5l2.5 2.5 4-4.5" />
      </svg>
    ),
  },
  {
    word: "Préserver",
    cap: "Un ton premium et humain, fidèle à votre image. Vous gardez la main dès que ça compte.",
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
            LA SOLUTION
          </span>
          <h2 className="methode-h2">
            Un système IA qui remplit votre agenda, <em>étape par étape.</em>
          </h2>
          <p className="methode-sub">
            Chaque demande est captée, qualifiée et relancée automatiquement — jour
            et nuit — jusqu&apos;au rendez-vous. Voici ce qui se passe en coulisses.
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
