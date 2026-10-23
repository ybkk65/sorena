"use client";

import { useEffect, useState } from "react";

/**
 * Barre d'action collée en bas d'écran (téléphone). Elle se retire tant
 * qu'un élément portant déjà l'action est visible : bouton du hero,
 * calculateur (la barre recouvrirait ses curseurs), agenda, pied de page.
 */
const MASQUER_SUR = ["#cta-hero", "#calcul", "#agenda", "footer"] as const;

export function MobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const cibles = MASQUER_SUR.flatMap((s) => Array.from(document.querySelectorAll(s)));
    if (cibles.length === 0) {
      setVisible(true);
      return;
    }

    let enVue: ReadonlySet<Element> = new Set();
    const observer = new IntersectionObserver((entries) => {
      enVue = entries.reduce<ReadonlySet<Element>>(
        (courant, e) =>
          e.isIntersecting
            ? new Set([...courant, e.target])
            : new Set([...courant].filter((el) => el !== e.target)),
        enVue
      );
      setVisible(enVue.size === 0);
    });

    cibles.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`mobile-cta${visible ? "" : " is-hidden"}`} aria-hidden={!visible}>
      <span className="mobile-cta-texte">
        <strong>Diagnostic offert de votre zone</strong>
        <small>Sans engagement</small>
      </span>
      <a
        className="mobile-cta-btn"
        href="#agenda"
        data-cta="barre-collante"
        tabIndex={visible ? undefined : -1}
      >
        Réserver
      </a>
    </div>
  );
}
