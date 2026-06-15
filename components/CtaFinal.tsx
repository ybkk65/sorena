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

        <div className="cta-col">
        <div className="cta-guarantee reveal" role="note">
          <span className="cta-guarantee-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
              <path d="M9 12l2 2 4-4.5" />
            </svg>
          </span>
          <div className="cta-guarantee-body">
            <strong>Notre garantie</strong>
            <p>
              [GARANTIE] — Vous savez exactement à quoi vous attendre, sans risque.
              Si le système ne tient pas ses promesses, vous n’avez rien à perdre :
              vous repartez au minimum avec un plan d’action clair pour votre centre.
            </p>
          </div>
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
            Réserver mon audit
            <Arrow />
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}