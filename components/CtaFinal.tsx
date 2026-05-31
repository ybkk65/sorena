import { Arrow } from "./Arrow";

export function CtaFinal() {
  return (
    <section id="contact" className="section cta-section grain">
      <div className="cta-orb cta-orb-1" aria-hidden="true" />
      <div className="cta-orb cta-orb-2" aria-hidden="true" />

      <div className="wrap cta-inner">
        <div className="reveal">
          <span className="kicker" style={{ color: "var(--rose)", marginBottom: 20, display: "inline-flex" }}>
            DERNIÈRE ÉTAPE
          </span>
          <h2 className="cta-h2">
            On a 2 places.
            <br />
            <em>Plus pour ce mois.</em>
          </h2>
          <p className="cta-desc">
            Sorena travaille avec un seul centre par zone géographique. Si la vôtre est encore
            libre, c'est maintenant qu'il faut bouger. Diagnostic offert, projection chiffrée,
            décision en 30 minutes.
          </p>

          <div className="cta-perks">
            <div className="cta-perk">
              <span className="cta-perk-num">01</span>
              <div>
                <strong>Audit complet de votre acquisition</strong>
                <p>On regarde votre Insta, vos pubs actuelles, vos cures phares.</p>
              </div>
            </div>
            <div className="cta-perk">
              <span className="cta-perk-num">02</span>
              <div>
                <strong>Projection chiffrée sur 90 jours</strong>
                <p>Combien de RDV qualifiés, à quel CTR, pour quel CA attendu.</p>
              </div>
            </div>
            <div className="cta-perk">
              <span className="cta-perk-num">03</span>
              <div>
                <strong>Réponse franche : oui / non</strong>
                <p>Si on n'est pas faits pour bosser ensemble, on vous le dit.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-card reveal" style={{ "--rd": ".1s" } as React.CSSProperties}>
          <div className="cta-card-header">
            <span className="cta-card-tag">
              <span className="dot" /> 2 places restantes
            </span>
            <h3>Diagnostic stratégique</h3>
            <div className="cta-price">
              <span className="cta-price-old">350 €</span>
              <span className="cta-price-new">Offert</span>
            </div>
          </div>

          <div className="cta-card-rows">
            <div className="row">
              <Check />
              <span>30 minutes en visio (Zoom ou Google Meet)</span>
            </div>
            <div className="row">
              <Check />
              <span>Confirmation immédiate dans votre agenda</span>
            </div>
            <div className="row">
              <Check />
              <span>Audit Insta, Meta Ads et tunnel actuel</span>
            </div>
            <div className="row">
              <Check />
              <span>Projection chiffrée personnalisée</span>
            </div>
            <div className="row">
              <Check />
              <span>Forfait fixe, sans engagement</span>
            </div>
          </div>

          <a className="btn btn-primary full-btn cta-big-btn" href="#agenda">
            Choisir mon créneau maintenant
            <Arrow />
          </a>
          <a className="cta-secondary" href="#contact" data-open-form>
            Ou recevoir une proposition par email →
          </a>
        </div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <span className="cta-check" aria-hidden="true">
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M3 8l3 3 7-7" />
      </svg>
    </span>
  );
}
