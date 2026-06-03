import { Arrow } from "./Arrow";

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
    label: "Clientes qualifiées",
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
      <div className="hero-visual" aria-hidden="true">
        <img src="/assets/image_salon.png" alt="" />
      </div>
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />

      <div className="wrap hero-inner">
        <span className="hero-availability">
          <span className="dot" />
          <span>Pour les centres esthétiques qui proposent des cures premium</span>
        </span>

        <h1 className="hero-h1">
          <span className="reveal-line">
            <span style={{ "--i": 0 } as React.CSSProperties}>Vous réalisez les soins.</span>
          </span>
          <span className="reveal-line">
            <span style={{ "--i": 1 } as React.CSSProperties}>
              Nous remplissons votre <em>agenda.</em>
            </span>
          </span>
        </h1>

        <p className="hero-sub">
          Pendant que votre équipe se concentre sur les soins, notre système remplit votre agenda
          de <strong>demandes de rendez-vous qualifiées</strong> pour vos cures premium.
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
            Réserver mon diagnostic stratégique
            <Arrow />
          </a>
          <a className="btn btn-ghost" href="#methode">
            <span className="play-icon" aria-hidden="true">
              <svg viewBox="0 0 12 12" fill="currentColor"><path d="M3 2v8l7-4z"/></svg>
            </span>
            Voir la méthode
          </a>
        </div>

      </div>

      <a href="#methode" className="hero-scroll" aria-label="Faire défiler">
        <span className="scroll-line" />
        <span className="scroll-text">Découvrir</span>
      </a>
    </section>
  );
}

