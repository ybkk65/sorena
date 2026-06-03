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
            Voyons ce qui freine aujourd’hui
            <br />
            <em>vos rendez-vous.</em>
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

            <h3>Faisons le point sur votre centre.</h3>
          </div>

          <p className="cta-card-note">
            En 30 minutes, nous analysons votre situation actuelle, vos points
            de blocage et vos opportunités d’amélioration.
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
