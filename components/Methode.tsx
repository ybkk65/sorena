import { Arrow } from "./Arrow";

const STEPS = [
  {
    num: "01",
    word: "ATTIRER",
    text: "Des campagnes pensées pour faire venir une clientèle cohérente avec vos cures premium, votre zone géographique et votre positionnement.",
  },
  {
    num: "02",
    word: "QUALIFIER",
    text: "Toutes les demandes ne méritent pas un créneau. Notre système filtre, pré-qualifie et structure avant d'atteindre votre agenda.",
  },
  {
    num: "03",
    word: "CONVERTIR",
    text: "Relances, confirmations et suivi transforment les demandes qualifiées en rendez-vous réellement honorés.",
  },
  {
    num: "04",
    word: "PRÉSERVER",
    text: "Votre acquisition reste alignée avec votre image, votre branding et la perception premium de votre centre.",
  },
];

export function Methode() {
  return (
    <section id="methode" className="section section-cream methode-editorial">
      <div className="wrap">
        <div className="methode-intro reveal">
          <span className="kicker" style={{ color: "var(--bordeaux-warm)" }}>
            LA MÉTHODE
          </span>
          <h2 className="methode-h2">
            Le système derrière vos <em>clientes qualifiées.</em>
          </h2>
          <p className="methode-sub">
            Quatre étapes pensées comme un système d'acquisition continu — attirer, filtrer puis
            convertir les bonnes clientes, sans jamais diluer votre image.
          </p>
        </div>

        <div className="methode-steps">
          {STEPS.map((s, i) => (
            <div
              key={s.num}
              className="methode-step reveal"
              style={{ "--rd": `${i * 0.08}s` } as React.CSSProperties}
            >
              <span className="methode-step-num" aria-hidden="true">{s.num}</span>
              <div className="methode-step-body">
                <span className="methode-step-word">{s.word}</span>
                <p className="methode-step-text">{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="methode-foot reveal">
          <a className="methode-link" href="#agenda">
            Réserver mon diagnostic stratégique
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
