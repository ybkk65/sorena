"use client";

import { useState } from "react";
import { Arrow } from "./Arrow";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav" id="nav">
      <div className="nav-inner">
        <a className="brand" href="#top" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-name">SORENA</span>
        </a>

        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <a href="#methode" onClick={() => setMenuOpen(false)}>Méthode</a>
          <a href="#resultats" onClick={() => setMenuOpen(false)}>Résultats</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href="#agenda" onClick={() => setMenuOpen(false)}>Agenda</a>
        </div>

        <div className="nav-actions">
          <a className="btn btn-primary" href="#agenda">
            <span className="dot dot-mini" aria-hidden="true" />
            Réserver un créneau
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
