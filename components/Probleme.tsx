import { Arrow } from "./Arrow";

const WITHOUT = [
  "7 leads sur 10 partent comparer",
  "Promos qui rongent la marge",
  "1 cure premium vendue sur 4",
  "1 RDV sur 5 en no-show",
  "Agenda subi, pas piloté",
];

const WITH = [
  "Leads pré-qualifiés, prêts à signer",
  "Tarif premium tenu, sans remise",
  "Cures expliquées et vendues en flux",
  "Acompte + rappels = no-show < 5%",
  "Agenda piloté, créneaux choisis",
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

        <div className="compare-grid">
          <article className="compare-col compare-col-bad reveal from-left">
            <header className="compare-head">
              <span className="compare-tag compare-tag-bad">SANS NOTRE SYSTÈME</span>
              <h3 className="compare-h">Cabines pleines, marge qui fond.</h3>
            </header>
            <ul className="compare-list">
              {WITHOUT.map((item, i) => (
                <li
                  key={item}
                  className="compare-item compare-item-bad"
                  style={{ "--ci": i } as React.CSSProperties}
                >
                  <span className="compare-mark compare-mark-bad" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                  </span>
                  <span className="compare-text">{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <div className="compare-vs" aria-hidden="true">
            <span>VS</span>
          </div>

          <article className="compare-col compare-col-good reveal from-right">
            <header className="compare-head">
              <span className="compare-tag compare-tag-good">AVEC NOTRE SYSTÈME</span>
              <h3 className="compare-h">Agenda premium, marge protégée.</h3>
            </header>
            <ul className="compare-list">
              {WITH.map((item, i) => (
                <li
                  key={item}
                  className="compare-item compare-item-good"
                  style={{ "--ci": i } as React.CSSProperties}
                >
                  <span className="compare-mark compare-mark-good" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </span>
                  <span className="compare-text">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="problem-bridge problem-bridge-v3 reveal">
          <div className="problem-bridge-left">
            <span className="problem-bridge-tag">
              <span className="dot" /> LA SOLUTION
            </span>
            <h3 className="problem-bridge-h">
              On installe une <em>machine à rendez-vous qualifiés.</em>
            </h3>
          </div>
          <a className="btn btn-rose problem-bridge-cta" href="#methode">
            Voir la méthode
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
