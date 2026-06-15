import { Arrow } from "./Arrow";

export function Hero() {
  return (
    <section id="top" className="hero grain">
      <div className="hero-visual" aria-hidden="true">
        <img src="/assets/image_salon.png" alt="" />
      </div>

      <div className="hero-glow" aria-hidden="true" />

      <div className="wrap hero-inner">
        <span className="hero-availability">
          <span className="only-desktop">
            Pour les centres spécialisés en cures premium
          </span>
          <span className="only-mobile">Centres de cures premium</span>
        </span>

        <h1 className="hero-h1">
          <span className="reveal-line">
            <span style={{ "--i": 0 } as React.CSSProperties}>
              Vous réalisez les soins.
            </span>
          </span>

          <span className="reveal-line">
            <span style={{ "--i": 1 } as React.CSSProperties}>
              Nous remplissons votre <em>agenda.</em>
            </span>
          </span>
        </h1>

        <p className="hero-sub">
          Un système IA qui répond aux demandes en quelques secondes, les
          pré-qualifie et relance au bon moment — jour et nuit — pour faire venir
          les bonnes clientes pour vos cures premium, sans dépendre uniquement
          d’Instagram ou du bouche-à-oreille.
        </p>

        <div className="hero-cta">
          <a className="btn btn-primary" href="#agenda">
            Réserver mon audit
            <Arrow />
          </a>
        </div>

        <p className="hero-reassurance">
          Audit offert · sans engagement · réponse sous 24h
        </p>
      </div>
    </section>
  );
}