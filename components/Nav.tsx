"use client";

import { useEffect, useState } from "react";
import { Arrow } from "./Arrow";

const SECTIONS = [
  { id: "methode", label: "Méthode" },
  { id: "technologie", label: "Système IA" },
  { id: "approche", label: "Approche" },
  { id: "faq", label: "FAQ" },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  // Scrollspy : met en surbrillance le lien de la section visible.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="nav" id="nav" aria-label="Navigation principale">
      <div className="nav-inner">
        <a className="brand" href="#top" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-name">SORENA</span>
        </a>

        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : ""}
              aria-current={active === id ? "true" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a className="btn btn-primary" href="#agenda" onClick={() => setMenuOpen(false)}>
            Diagnostic offert
            <Arrow />
          </a>
          <button
            className={`nav-burger ${menuOpen ? "is-open" : ""}`}
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
