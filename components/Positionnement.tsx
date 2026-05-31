const PILLARS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M16 8l-4.5 4.5L10 11l-2 5 5-2-1.5-1.5L16 8z" />
      </svg>
    ),
    label: "Conçu pour des centres axés sur la",
    accent: "QUALITÉ",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 7c0-1.5 1-3 3-3s3 1.5 3 3" />
        <path d="M5 8h14l-1.5 11a2 2 0 0 1-2 1.8h-9a2 2 0 0 1-2-1.8L5 8z" />
        <path d="M10 13v3M14 13v3" />
      </svg>
    ),
    label: "Axé sur la",
    accent: "RENTABILITÉ cliente",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 8l4 3 5-6 5 6 4-3v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8z" />
      </svg>
    ),
    label: "Pour un positionnement",
    accent: "PREMIUM",
  },
];

const FOR_YOU = [
  "Vous facturez vos cures premium 800 € et plus",
  "Vous avez déjà une équipe et un protocole solides",
  "Vous voulez vendre plus de cures, pas plus de séances unitaires",
  "Vous refusez de casser vos prix pour remplir l'agenda",
];

const NOT_FOR_YOU = [
  "Vous démarrez votre activité sans clientèle existante",
  "Vous misez tout sur les promos -50 % permanentes",
  "Vous voulez un coup marketing ponctuel, pas un système durable",
  "Vous n'êtes pas prête à confirmer un budget pub minimum",
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

        <ul className="pillar-bullets reveal" style={{ "--rd": ".1s" } as React.CSSProperties}>
          {PILLARS.map((p) => (
            <li key={p.accent}>
              <span className="pillar-icon" aria-hidden="true">{p.icon}</span>
              <span className="pillar-text">
                {p.label} <strong>{p.accent}</strong>.
              </span>
            </li>
          ))}
        </ul>

        <div className="qualify-grid">
          <div className="qualify-card qualify-yes reveal">
            <div className="qualify-head">
              <span className="qualify-badge qualify-badge-yes">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M3 8l3.5 3.5L13 5" />
                </svg>
              </span>
              <h3>C'est pour vous si&nbsp;:</h3>
            </div>
            <ul>
              {FOR_YOU.map((it) => (
                <li key={it}>
                  <span className="li-icon" aria-hidden="true">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8l3 3 7-7" />
                    </svg>
                  </span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="qualify-card qualify-no reveal" style={{ "--rd": ".15s" } as React.CSSProperties}>
            <div className="qualify-head">
              <span className="qualify-badge qualify-badge-no">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M4 4l8 8M12 4l-8 8" />
                </svg>
              </span>
              <h3>Ce n'est pas pour vous si&nbsp;:</h3>
            </div>
            <ul>
              {NOT_FOR_YOU.map((it) => (
                <li key={it}>
                  <span className="li-icon" aria-hidden="true">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M4 4l8 8M12 4l-8 8" />
                    </svg>
                  </span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
