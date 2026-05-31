import { Arrow } from "./Arrow";

const TRUST_INITIALS = ["L", "S", "K", "M"];

const HERO_BULLETS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
    label: "Lancement en 7 jours",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 7l8-3 8 3-8 3-8-3z" />
        <path d="M4 12l8 3 8-3M4 17l8 3 8-3" />
      </svg>
    ),
    label: "Clientes premium qualifiées",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2l2.6 5.3 5.9.9-4.2 4.1 1 5.9L12 15.4l-5.3 2.8 1-5.9-4.2-4.1 5.9-.9L12 2z" />
      </svg>
    ),
    label: "Image premium préservée",
  },
];

export function Hero() {
  return (
    <section id="top" className="hero grain">
      <div className="hero-monogram" id="heroMono" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />

      <div className="wrap hero-inner">
        <span className="hero-availability">
          <span className="dot" />
          <span>2 nouveaux centres acceptés en {currentMonth()}</span>
          <span className="sep" aria-hidden="true">·</span>
          <span className="muted">Diagnostic offert</span>
        </span>

        <h1 className="hero-h1">
          <span className="reveal-line">
            <span style={{ "--i": 0 } as React.CSSProperties}>Remplissez vos cabines</span>
          </span>
          <span className="reveal-line">
            <span style={{ "--i": 1 } as React.CSSProperties}>
              avec des clientes <em>premium.</em>
            </span>
          </span>
        </h1>

        <p className="hero-sub">
          Un système d'acquisition clé en main qui attire, qualifie et convertit en
          rendez-vous confirmés — <strong>en moins de 30 jours</strong>.
        </p>

        <ul className="hero-bullets">
          {HERO_BULLETS.map((b) => (
            <li key={b.label}>
              <span className="hero-bullet-icon" aria-hidden="true">{b.icon}</span>
              {b.label}
            </li>
          ))}
        </ul>

        <div className="hero-cta">
          <a className="btn btn-primary" href="#agenda">
            Réserver mon créneau
            <Arrow />
          </a>
          <a className="btn btn-ghost" href="#methode">
            <span className="play-icon" aria-hidden="true">
              <svg viewBox="0 0 12 12" fill="currentColor"><path d="M3 2v8l7-4z"/></svg>
            </span>
            Voir la méthode
          </a>
        </div>

        <div className="hero-trust">
          <div className="trust-avatars" aria-hidden="true">
            {TRUST_INITIALS.map((i, idx) => (
              <span key={i} className={`avatar avatar-${idx + 1}`}>{i}</span>
            ))}
          </div>
          <div className="trust-content">
            <div className="trust-stars" aria-label="Note 5 sur 5">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <div className="trust-text">
              <strong>38 centres accompagnés</strong>
              <span className="trust-sep">·</span>
              <span>Note 4,9/5</span>
            </div>
          </div>
        </div>

        <div className="hero-stats">
          <Stat i={0} num={147} prefix="+" unit="%">
            Croissance moyenne en 90&nbsp;jours
          </Stat>
          <Stat i={1} num={38}>
            Maisons premium accompagnées
          </Stat>
          <Stat i={2} num={42} divide={10} unit="×">
            Panier moyen par cliente
          </Stat>
          <Stat i={3} num={7} unit="jours">
            Pour lancer le système
          </Stat>
        </div>
      </div>

      <a href="#methode" className="hero-scroll" aria-label="Faire défiler">
        <span className="scroll-line" />
        <span className="scroll-text">Découvrir</span>
      </a>
    </section>
  );
}

function currentMonth(): string {
  const months = [
    "janvier", "février", "mars", "avril", "mai", "juin",
    "juillet", "août", "septembre", "octobre", "novembre", "décembre",
  ];
  return months[new Date().getMonth()];
}

function Stat({
  i,
  num,
  prefix,
  unit,
  divide,
  children,
}: {
  i: number;
  num: number;
  prefix?: string;
  unit?: string;
  divide?: number;
  children: React.ReactNode;
}) {
  return (
    <div className="stat" style={{ "--si": i } as React.CSSProperties}>
      <div
        className="stat-num"
        data-num={num}
        {...(prefix ? { "data-prefix": prefix } : {})}
        {...(divide ? { "data-divide": divide } : {})}
      >
        <span className="stat-val">0</span>
        {unit && <span className="unit">{unit}</span>}
      </div>
      <div className="stat-label">{children}</div>
    </div>
  );
}
