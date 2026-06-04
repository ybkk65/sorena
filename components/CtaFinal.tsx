import { Arrow } from "./Arrow";

export function CtaFinal() {
  return (
    <section id="contact" className="section cta-section grain">
      <div className="cta-orb cta-orb-1" aria-hidden="true" />
      <div className="cta-orb cta-orb-2" aria-hidden="true" />

      <div className="wrap cta-inner">
        <div className="reveal">
          <span
            className="kicker"
            style={{
              color: "var(--rose)",
              marginBottom: 20,
              display: "inline-flex",
            }}
          >
            30 MINUTES • SANS ENGAGEMENT
          </span>

          <h2 className="cta-h2">
            Faisons le point sur ce qui freine
            <br />
            <em>vos résultats.</em>
          </h2>

          <p className="cta-desc">
            Audit offert. Sans engagement.
            <br />
            Vous repartez avec des recommandations concrètes même si nous ne
            travaillons pas ensemble.
          </p>
        </div>

        <div className="cta-card reveal">
          <div className="cta-card-header">
            <span className="cta-card-tag">
              <span className="dot" /> Offert
            </span>

            <h3>Un regard extérieur sur votre situation actuelle.</h3>
          </div>

          <p className="cta-card-note">
            En 30 minutes, nous identifions ensemble ce qui mérite d’être
            optimisé et les prochaines étapes possibles pour votre centre.
          </p>

          <a className="btn btn-primary full-btn cta-big-btn" href="#agenda">
            Obtenir mon plan personnalisé
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}