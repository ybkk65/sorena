import { Arrow } from "./Arrow";

const POINTS = [
  {
    title: "Réponse immédiate",
    text: "Chaque demande reçoit une réponse en quelques secondes, à toute heure, même quand vous êtes en cabine.",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M8.5 1.5 3 9h4l-1.5 5.5L13 7H9z" />
      </svg>
    ),
  },
  {
    title: "Relance au bon moment",
    text: "Une cliente qui hésite n'est jamais oubliée. Le système relance avec justesse, jusqu'au rendez-vous.",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M13.5 8a5.5 5.5 0 1 1-1.6-3.9" />
        <path d="M13.5 2v3h-3" />
      </svg>
    ),
  },
  {
    title: "Zéro charge mentale",
    text: "Vous ne gérez rien. L'IA travaille en arrière-plan, votre agenda se remplit.",
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
            LA TECHNOLOGIE
          </span>

          <h2 className="approche-h2">
            Une acquisition augmentée par{" "}
            <em>l&apos;intelligence artificielle.</em>
          </h2>

          <div className="approche-lead">
            <p>
              Le même objectif — un agenda rempli de clientes qualifiées — mais un
              système qui ne dort jamais. En coulisses, l&apos;IA qualifie et relance
              chaque demande, instantanément, pour qu&apos;aucune cliente potentielle
              ne vous échappe.
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
          Une technologie discrète, jamais au détriment de la relation : le ton reste
          premium et humain, fidèle à l&apos;image de votre centre.
        </p>

        <div className="methode-foot reveal">
          <a className="methode-link" href="#agenda">
            Obtenir mon plan personnalisé
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
