import { Arrow } from "./Arrow";

const METRICS = [
  {
    num: "+147",
    unit: "%",
    label: "de CA additionnel généré",
    sub: "Moyenne sur 90 jours, données 2024-2025",
  },
  {
    num: "4,2",
    unit: "×",
    label: "panier moyen multiplié",
    sub: "Vs. acquisition organique classique",
  },
  {
    num: "<7",
    unit: "jours",
    label: "pour lancer le système",
    sub: "De la signature au premier rendez-vous qualifié",
  },
  {
    num: "92",
    unit: "%",
    label: "de centres reconduisent",
    sub: "Taux de renouvellement après 6 mois",
  },
];

const CASES = [
  {
    name: "Léa M.",
    role: "Spa Cryo, Lyon",
    cure: "Cryolipolyse + HIFU",
    quote:
      "On a doublé le nombre de cures vendues en 6 semaines. Et surtout : on a arrêté les promos. L'agenda est plein, mais avec les bonnes clientes.",
    result: "+82 cures premium en 90 j",
  },
  {
    name: "Sophie R.",
    role: "Maison esthétique, Bordeaux",
    cure: "Anti-âge premium",
    quote:
      "Avant Sorena, mes DM Insta étaient saturés de comparatrices de prix. Aujourd'hui, je reçois 2-3 demandes/jour de profils alignés. Ma rentabilité a explosé.",
    result: "Panier moyen ×3,8",
  },
  {
    name: "Karima B.",
    role: "Head Spa concept, Paris",
    cure: "Rituels capillaires premium",
    quote:
      "L'image est restée premium, le système tourne tout seul. Mon équipe ne perd plus de temps à filtrer. On se concentre sur les soins, c'est notre métier.",
    result: "+38 RDV/mois qualifiés",
  },
];

export function Resultats() {
  return (
    <section id="resultats" className="section section-light results-section">
      <div className="wrap">
        <div className="section-head-v2 reveal">
          <span className="kicker" style={{ color: "var(--bordeaux-warm)" }}>
            RÉSULTATS RÉELS
          </span>
          <h2 className="section-title">
            Pas de promesses. <em>Des chiffres.</em>
          </h2>
        </div>

        <div className="metrics-grid">
          {METRICS.map((m, i) => (
            <div
              key={m.label}
              className="metric-card reveal"
              style={{ "--rd": `${i * 0.08}s` } as React.CSSProperties}
            >
              <div className="metric-num">
                <span className="metric-val">{m.num}</span>
                <span className="metric-unit">{m.unit}</span>
              </div>
              <div className="metric-label">{m.label}</div>
              <div className="metric-sub">{m.sub}</div>
            </div>
          ))}
        </div>

        <div className="cases-head reveal">
          <span className="kicker" style={{ color: "var(--bordeaux-warm)" }}>
            ELLES NOUS ONT CONFIÉ LEUR CENTRE
          </span>
          <h3 className="cases-h">
            Témoignages de fondatrices qui ont
            <br />
            <em>changé la donne</em> avec Sorena.
          </h3>
        </div>

        <div className="cases-grid">
          {CASES.map((c, i) => (
            <article
              key={c.name}
              className="case-card reveal"
              style={{ "--rd": `${i * 0.1}s` } as React.CSSProperties}
            >
              <div className="case-stars" aria-label="5 sur 5">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <blockquote className="case-quote">
                « {c.quote} »
              </blockquote>
              <div className="case-result">
                <span className="case-result-arrow" aria-hidden="true">↗</span>
                {c.result}
              </div>
              <div className="case-author">
                <div className="case-avatar" aria-hidden="true">{c.name.charAt(0)}</div>
                <div>
                  <div className="case-name">{c.name}</div>
                  <div className="case-role">{c.role} · {c.cure}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="results-cta reveal">
          <p>
            <strong>Envie de voir vos propres chiffres bouger ?</strong> On vous fait une
            projection personnalisée lors du diagnostic.
          </p>
          <a className="btn btn-dark" href="#agenda">
            Voir mes créneaux disponibles
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
