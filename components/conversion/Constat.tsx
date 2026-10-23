import { SectionHead } from "./SectionHead";

/**
 * Le constat : trois situations, chacune MONTRÉE par un schéma, puis la
 * bascule vers le système.
 *
 * ⚠️ DES SCHÉMAS, PAS DES DONNÉES : aucune valeur, aucun axe chiffré. Rose
 * pour ce qui ne va pas ; la bascule seule annonce la suite de la page.
 */

const JOURS = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
const HEURES = ["10h", "12h", "15h", "17h"];
/** Créneaux pris ; « absente » = rendez-vous non honoré. */
const PRIS = new Set(["Lun-15h", "Mar-10h", "Mer-17h", "Jeu-12h", "Ven-10h", "Ven-15h", "Sam-10h", "Sam-12h", "Sam-15h"]);
const ABSENTES = new Set(["Mar-15h", "Jeu-17h", "Sam-17h"]);

function SchemaMessages() {
  return (
    <div className="cs-dm" aria-hidden="true">
      <p className="cs-bulle is-in">Bonjour, c&apos;est combien le soin visage ?</p>
      <p className="cs-bulle is-out">Bonjour ! Le soin signature dure 75 minutes, je vous envoie le détail…</p>
      <p className="cs-vu">Vu</p>
      <p className="cs-silence">
        <span />
        <span />
        <span />
      </p>
    </div>
  );
}

function SchemaAbsences() {
  return (
    <div className="cs-agenda" aria-hidden="true">
      <span />
      {JOURS.map((j) => (
        <span key={j} className="cs-jour">
          {j}
        </span>
      ))}
      {HEURES.map((h) => (
        <div key={h} className="cs-ligne">
          <span className="cs-heure">{h}</span>
          {JOURS.map((j) => {
            const k = `${j}-${h}`;
            const etat = ABSENTES.has(k) ? "is-absente" : PRIS.has(k) ? "is-pris" : "";
            return <span key={k} className={`cs-slot ${etat}`} />;
          })}
        </div>
      ))}
    </div>
  );
}

function SchemaPromo() {
  return (
    <div className="cs-courbe" aria-hidden="true">
      <span className="cs-courbe-tag">Mois de la promo</span>
      <svg viewBox="0 0 300 90" preserveAspectRatio="none">
        <path d="M0 74 L95 72 C120 70 128 12 146 12 C164 12 172 66 196 70 L300 72" />
      </svg>
      <span className="cs-courbe-legende">Rendez-vous, semaine après semaine</span>
    </div>
  );
}

const SITUATIONS = [
  {
    visuel: <SchemaMessages />,
    titre: "Des demandes sans suite",
    detail: "Elles demandent vos tarifs en message privé, puis disparaissent.",
  },
  {
    visuel: <SchemaAbsences />,
    titre: "Des rendez-vous qui ne viennent pas",
    detail: "Chaque absence, c'est une cabine vide et une heure perdue.",
  },
  {
    visuel: <SchemaPromo />,
    titre: "Des promos qui ne durent pas",
    detail: "Une remise remplit un mois, puis l'agenda redescend.",
  },
];

const REGLAGES = [
  { libelle: "Invitation", valeur: "Bilan de peau" },
  { libelle: "Zone", valeur: "10 km, rien qu'à vous" },
  { libelle: "Réponse", valeur: "Assistante IA, 24 h/24" },
  { libelle: "Réservation", valeur: "Avec acompte" },
];

export function Constat() {
  return (
    <section id="constat" className="cv-section cv-dark" aria-labelledby="constat-titre">
      <div className="wrap">
        <SectionHead
          id="constat-titre"
          num="02"
          surFonce
          label="Le constat"
          titre={
            <>
              Vous ne manquez pas de demandes. <em>Vous manquez de bonnes clientes.</em>
            </>
          }
          sousTitre="Si l'une de ces situations vous parle, la suite est pour vous."
        />

        <ol className="cs-grille">
          {SITUATIONS.map((s, i) => (
            <li key={s.titre} className="cs-carte reveal" style={{ "--rd": `${i * 0.08}s` } as React.CSSProperties}>
              <div className="cs-visuel">{s.visuel}</div>
              <div className="cs-texte">
                <span className="cs-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.titre}</h3>
                <p>{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="cs-bascule reveal">
          <div className="cs-bascule-texte">
            <span className="cs-bascule-kicker">Ce qui change</span>
            <h3>C&apos;est vous qui choisissez qui remplit votre agenda</h3>
            <p>
              Une invitation qui donne envie, une réponse immédiate, un acompte à la
              réservation.
            </p>
            <a className="cs-bascule-lien" href="#methode">
              Voir le système
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M8 3v10M4 9l4 4 4-4" />
              </svg>
            </a>
          </div>

          <div className="cs-reglages" aria-label="Exemple de système">
            <div className="cs-reglages-tete">
              <span>Votre système</span>
              <span className="cs-actif">
                Actif <span className="cs-toggle" aria-hidden="true" />
              </span>
            </div>
            {REGLAGES.map((r) => (
              <div key={r.libelle} className="cs-reglage">
                <span>{r.libelle}</span>
                <strong>{r.valeur}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
