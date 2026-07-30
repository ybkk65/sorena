import { Arrow } from "./Arrow";

const BLOCKS = [
  {
    label: "Pour vous si",
    text: "Vous cherchez une clientèle qui paie le juste prix et qui revient, un flux régulier, et une image préservée.",
  },
  {
    label: "Notre exigence",
    text: "Un système durable ne repose jamais sur la seule publicité. Il demande une offre claire, un parcours de réservation solide et une vraie collaboration. Nous le bâtissons avec vous.",
  },
  {
    label: "Pas pour vous si",
    text: "Vous cherchez du volume, peu importe la qualité. D'autres le feront mieux que nous.",
  },
];

function Check() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 8.5l3.5 3.5L13 4.5" />
    </svg>
  );
}

export function Positionnement() {
  return (
    <section id="positionnement" className="section section-light posi-section">
      <div className="wrap">
        <div className="posi-split reveal">
          <div className="posi-head-col">
            <span className="kicker posi-eyebrow" style={{ color: "var(--bordeaux-warm)" }}>
              LA SÉLECTION
            </span>
            <h2 className="posi-h2">
              Nous ne travaillons pas avec <em>tous les centres.</em>
            </h2>
          </div>

          <div className="posi-blocks">
            {BLOCKS.map((b) => (
              <div key={b.label} className="posi-block">
                <div className="posi-block-head">
                  <span className="posi-block-mark" aria-hidden="true">
                    <Check />
                  </span>
                  <span className="posi-block-label">{b.label}</span>
                </div>
                <p className="posi-block-text">{b.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="posi-foot reveal">
          <p className="posi-closing">
            Si vous préférez les bonnes clientes au volume, le diagnostic offert
            est votre prochaine étape.
          </p>
          <a className="btn btn-dark posi-cta" href="#agenda">
            Réserver mon diagnostic offert
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
