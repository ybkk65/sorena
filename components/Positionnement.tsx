import { Arrow } from "./Arrow";

const BLOCKS = [
  {
    label: "Clientèle",
    text: "Sorena est pensé pour les centres qui veulent attirer une clientèle plus qualifiée, vendre davantage de cures premium et un flux régulier de clientes sans diluer leur image.",
  },
  {
    label: "Approche",
    text: "Mais un bon système ne repose jamais uniquement sur la publicité. Il demande aussi une offre claire, un parcours de rendez-vous solide et une vraie collaboration tout au long du process.",
  },
  {
    label: "Fit",
    text: "Si votre objectif est simplement d'avoir plus de demandes, nous ne sommes probablement pas le bon partenaire.",
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
    <section className="section section-light posi-section">
      <div className="wrap">
        <div className="posi-split reveal">
          <div className="posi-head-col">
            <span className="kicker posi-eyebrow" style={{ color: "var(--bordeaux-warm)" }}>
              POSITIONNEMENT
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
            Si vous cherchez des clientes plus qualifiées, un flux régulier de clientes et une
            approche cohérente avec votre positionnement, l’audit offert est
            probablement la prochaine étape.
          </p>
          <a className="btn btn-dark posi-cta" href="#agenda">
            Réserver mon audit
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
