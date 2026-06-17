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
              <span className="dot" /> Offert · places limitées
            </span>

            <h3>Un regard extérieur sur votre situation actuelle.</h3>
          </div>

          <ol className="cta-steps">
            <li>
              <span aria-hidden="true">1</span>
              Vous réservez votre créneau (30 min, offert).
            </li>
            <li>
              <span aria-hidden="true">2</span>
              On analyse votre centre, votre marché et vos cures.
            </li>
            <li>
              <span aria-hidden="true">3</span>
              Vous repartez avec un plan d’action clair — même si nous ne
              travaillons pas ensemble.
            </li>
          </ol>

          <a className="btn btn-primary full-btn cta-big-btn" href="#agenda">
            Réserver mon audit
            <Arrow />
          </a>

          <p className="cta-reassure">
            Sans engagement · réponse sous 24h
          </p>
        </div>
      </div>
    </section>
  );
}