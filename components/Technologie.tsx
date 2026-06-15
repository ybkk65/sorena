import { Arrow } from "./Arrow";

const POINTS = [
  {
    title: "Réponse en quelques secondes, 24/7",
    text: "Chaque demande reçoit une réponse en quelques secondes, à toute heure — même quand vous êtes en cabine, le soir ou le week-end.",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M8.5 1.5 3 9h4l-1.5 5.5L13 7H9z" />
      </svg>
    ),
  },
  {
    title: "Pré-qualifie et relance au bon moment",
    text: "L'IA trie les demandes, écarte le hors-cible et relance celles qui hésitent — jour et nuit — jusqu'au rendez-vous pris.",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M13.5 8a5.5 5.5 0 1 1-1.6-3.9" />
        <path d="M13.5 2v3h-3" />
      </svg>
    ),
  },
  {
    title: "Zéro charge mentale",
    text: "Vous ne gérez aucun échange. L'IA travaille en coulisses, votre agenda se remplit pendant que vous réalisez les soins.",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 8.5l3.5 3.5L13 4.5" />
      </svg>
    ),
  },
];

export function Technologie() {
  return (
    <section id="technologie" className="section section-cream approche-section">
      <div className="approche-bg" aria-hidden="true" />

      <div className="wrap">
        <div className="approche-head reveal">
          <span className="kicker" style={{ color: "var(--bordeaux-warm)" }}>
            VOTRE SYSTÈME IA
          </span>

          <h2 className="approche-h2">
            Une IA qui qualifie et relance{" "}
            <em>pendant que vous travaillez.</em>
          </h2>

          <div className="approche-lead">
            <p>
              Le même objectif — un agenda rempli de clientes qualifiées — mais un
              système qui ne dort jamais. En coulisses, une IA répond, pré-qualifie
              et relance chaque demande, jour et nuit, pour qu’aucune cliente
              potentielle ne vous échappe.
            </p>
          </div>
        </div>

        <div className="approche-grid">
          {POINTS.map((p) => (
            <article key={p.title} className="approche-card reveal">
              <span className="approche-card-icon" aria-hidden="true">
                {p.icon}
              </span>

              <h3 className="approche-card-title">{p.title}</h3>

              <p className="approche-card-text">{p.text}</p>
            </article>
          ))}
        </div>

        <p
          className="reveal"
          style={{
            maxWidth: 640,
            margin: "48px auto 0",
            textAlign: "center",
            fontStyle: "italic",
            color: "var(--bordeaux-soft)",
            fontSize: "clamp(15px, 1.6vw, 18px)",
            lineHeight: 1.6,
          }}
        >
          Une IA discrète, jamais au détriment de la relation : le ton reste premium
          et humain, fidèle à l’image de votre centre. Vous gardez la main dès que ça
          compte.
        </p>

        <div className="methode-foot reveal" style={{ textAlign: "center" }}>
          <a className="methode-link" href="#agenda">
            Réserver mon audit
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
