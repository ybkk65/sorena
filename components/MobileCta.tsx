"use client";

import { useEffect, useState } from "react";

/**
 * Barre d'action fixe en bas d'écran, visible uniquement en mode mobile/tel.
 * Met en avant la prise de rendez-vous en permanence pendant le scroll.
 * Se masque automatiquement quand l'agenda (le calendrier de réservation)
 * est à l'écran : la barre devient redondante à cet endroit.
 */
export function MobileCta() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = document.getElementById("agenda");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { rootMargin: "0px 0px -35% 0px", threshold: 0 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      className={`mobile-cta ${hidden ? "is-hidden" : ""}`}
      href="#agenda"
      aria-hidden={hidden}
    >
      <span className="mobile-cta-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
          <path d="M3 9h18M8 2.5v4M16 2.5v4" />
        </svg>
      </span>

      <span className="mobile-cta-label">Diagnostic offert</span>

      <svg className="mobile-cta-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M3 8h10M9 4l4 4-4 4" />
      </svg>
    </a>
  );
}
