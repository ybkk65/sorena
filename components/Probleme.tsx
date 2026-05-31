import { Arrow } from "./Arrow";

const CARDS = [
  {
    kicker: "LE PROBLÈME DES DM",
    title: "7 sur 10 ne signent pas",
    desc: "Vos équipes s'épuisent à filtrer des comparatrices de prix.",
  },
  {
    kicker: "LE PIÈGE DES PROMOS",
    title: "Le volume monte, la marge fond",
    desc: "Les remises remplissent l'agenda mais fragilisent votre image premium.",
  },
  {
    kicker: "LES CURES OUBLIÉES",
    title: "1 cure premium vendue sur 4",
    desc: "Sans système d'éducation, vos protocoles haute valeur dorment dans la brochure.",
  },
];

export function Probleme() {
  return (
    <section className="section section-deep grain probleme-section">
      <div className="wrap">
        <div className="section-head-v2 reveal on-dark">
          <span className="kicker">LE CONSTAT</span>
          <h2 className="section-title on-dark" style={{ color: "var(--off-white)" }}>
            Vous remplissez vos cabines.
            <br />
            Pas votre <em>compte en banque.</em>
          </h2>
        </div>

        <div className="info-cards-grid">
          {CARDS.map((c, i) => (
            <article
              key={c.kicker}
              className="info-card reveal"
              style={{ "--rd": `${0.05 + i * 0.07}s` } as React.CSSProperties}
            >
              <span className="info-card-kicker">{c.kicker}</span>
              <h3 className="info-card-title">{c.title}</h3>
              <p className="info-card-desc">{c.desc}</p>
            </article>
          ))}
        </div>

        <div className="problem-bridge reveal">
          <h3 className="problem-bridge-h">
            On installe une <em>machine à rendez-vous qualifiés.</em>
          </h3>
          <a className="btn btn-rose" href="#methode">
            Voir la méthode
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
