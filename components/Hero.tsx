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
          Vous n’avez pas ouvert votre centre esthétique pour passer vos journées sur
          Instagram à chercher des clientes.
          <br />
          Notre système IA s’en charge pour vous.
        </p>

        <div className="hero-cta">
          <a className="btn btn-primary" href="#agenda">
            Réserver mon audit
            <Arrow />
          </a>
        </div>

        <p className="hero-reassurance">
          Audit offert · sans engagement
        </p>
      </div>
    </section>
  );
}