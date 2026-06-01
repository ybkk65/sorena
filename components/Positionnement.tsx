import { Arrow } from "./Arrow";

const FOR_YOU = [
  "Cures premium à 800 € et plus",
  "Équipe et protocole déjà solides",
  "Vendre des cures, pas des séances",
  "Refus catégorique des promos",
];

const NOT_FOR_YOU = [
  "Démarrage sans clientèle existante",
  "Modèle 100 % promos -50 %",
  "Coup ponctuel, pas un système",
  "Pas de budget pub à confirmer",
];

export function Positionnement() {
  return (
    <section className="section section-light qualify-section">
      <div className="wrap">
        <div className="section-head-v2 reveal">
          <span className="kicker" style={{ color: "var(--bordeaux-warm)" }}>POSITIONNEMENT</span>
          <h2 className="section-title">
            On ne travaille pas avec <em>tout le monde.</em>
          </h2>
        </div>

        <div className="qualify-grid qualify-grid-v3">
          <div className="qualify-card qualify-yes qualify-card-v3 reveal from-left">
            <div className="qualify-head">
              <span className="qualify-badge qualify-badge-yes">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8l3.5 3.5L13 5" />
                </svg>
              </span>
              <h3>C'est pour vous</h3>
            </div>
            <ul>
              {FOR_YOU.map((it, i) => (
                <li
                  key={it}
                  className="qualify-li"
                  style={{ "--qi": i } as React.CSSProperties}
                >
                  <span className="li-icon" aria-hidden="true">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8l3 3 7-7" />
                    </svg>
                  </span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="qualify-card qualify-no qualify-card-v3 reveal from-right">
            <div className="qualify-head">
              <span className="qualify-badge qualify-badge-no">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M4 4l8 8M12 4l-8 8" />
                </svg>
              </span>
              <h3>Ce n'est pas pour vous</h3>
            </div>
            <ul>
              {NOT_FOR_YOU.map((it, i) => (
                <li
                  key={it}
                  className="qualify-li"
                  style={{ "--qi": i } as React.CSSProperties}
                >
                  <span className="li-icon" aria-hidden="true">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M4 4l8 8M12 4l-8 8" />
                    </svg>
                  </span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="qualify-cta reveal">
          <p className="qualify-cta-text">
            Vous vous reconnaissez à gauche ?
          </p>
          <a className="btn btn-dark qualify-cta-btn" href="#agenda">
            Réserver mon diagnostic
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
