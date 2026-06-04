const APPROACH = [
  {
    title: "Qualité avant volume",
    text: "Des clientes plus pertinentes, plutôt qu'un volume de demandes peu qualifiées.",
  },
  {
    title: "Des rendez-vous qui se présentent",
    text: "Attirer des clientes plus engagées et réduire la dépendance aux rendez-vous qui ne se présentent jamais.",
  },
  {
    title: "Pensé pour les cures premium & la récurrence",
    text: "Une acquisition conçue pour soutenir la vente de cures, la fidélisation et une activité plus stable dans le temps.",
  },
];

function Check() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 8.5l3.5 3.5L13 4.5" />
    </svg>
  );
}

export function Approche() {
  return (
    <section id="approche" className="section section-cream approche-section">
      <div className="approche-bg" aria-hidden="true" />

      <div className="wrap">
        <div className="approche-head reveal">
          <span className="kicker" style={{ color: "var(--bordeaux-warm)" }}>
            NOTRE APPROCHE
          </span>

          <h2 className="approche-h2">
            Une acquisition pensée pour les centres qui veulent enfin{" "}
            <em>un vrai système.</em>
          </h2>

          <div className="approche-lead">
            <p>
              Après Instagram, le bouche-à-oreille, les solutions irrégulières
              ou les promesses d’agences décevantes… beaucoup de centres se
              retrouvent sans flux prévisible de clientes.
            </p>

            <p>
              Notre approche vise à attirer des clientes qualifiées pour vos
              cures premium {" "}
              <strong>qui se présentent, démarrent et reviennent.</strong>
            </p>
          </div>
        </div>

        <div className="approche-grid">
          {APPROACH.map((a) => (
            <article key={a.title} className="approche-card reveal">
              <span className="approche-card-icon" aria-hidden="true">
                <Check />
              </span>

              <h3 className="approche-card-title">{a.title}</h3>

              <p className="approche-card-text">{a.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
