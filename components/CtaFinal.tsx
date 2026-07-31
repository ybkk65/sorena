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
            DIAGNOSTIC · 20 MIN · OFFERT
          </span>

          <h2 className="cta-h2">
            Repartez avec un plan clair
            <br />
            pour <em>remplir votre agenda.</em>
          </h2>

          <p className="cta-desc">
            Nous identifions ce qui empêche aujourd’hui les bonnes clientes de
            venir jusqu’à vous, et nous vous montrons le levier concret pour y
            remédier. Vous repartez avec une direction précise, applicable
            immédiatement, même si nous ne travaillons pas ensemble.
          </p>

          <p className="cta-desc cta-desc-accent">
            <strong>C’est offert, et sans engagement.</strong>
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
              Vous réservez votre créneau (20 min, offert).
            </li>
            <li>
              <span aria-hidden="true">2</span>
              Nous étudions votre structure, votre marché et vos cures.
            </li>
            <li>
              <span aria-hidden="true">3</span>
              Vous repartez avec un plan d’action clair, même si nous ne
              travaillons pas ensemble.
            </li>
          </ol>

          <a className="btn btn-primary full-btn cta-big-btn" href="#agenda">
            Réserver mon diagnostic offert
            <Arrow />
          </a>

          <p className="cta-reassure">
            Sans engagement · places limitées
          </p>
        </div>
      </div>
    </section>
  );
}