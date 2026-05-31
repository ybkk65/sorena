import { Arrow } from "./Arrow";

const QUESTIONS = [
  {
    q: "Combien ça coûte vraiment ?",
    a: "Forfait fixe mensuel, sans engagement, à partir de 1 490 €/mois. Le budget publicitaire (10-30 €/jour minimum) est séparé et réglé directement par vous à Meta. Vous gardez 100 % de visibilité sur chaque euro dépensé. Le détail exact dépend de votre situation et est calculé pendant le diagnostic.",
  },
  {
    q: "En combien de temps je vois des résultats ?",
    a: "Premier rendez-vous qualifié sous 7-14 jours après le lancement. Système optimisé et stabilisé en 30 jours. Les meilleurs résultats arrivent à partir du 2ᵉ mois, une fois que les audiences sont calibrées sur votre clientèle.",
  },
  {
    q: "Travaillez-vous avec tous les centres esthétiques ?",
    a: "Non. On accepte uniquement les centres positionnés sur des cures premium (panier moyen 800 €+), avec un protocole et une équipe déjà en place. On refuse environ 60 % des demandes pour garantir l'efficacité du système.",
  },
  {
    q: "Et si les promos marchent déjà pour moi ?",
    a: "Tant mieux à court terme. Le problème ? Elles cassent votre positionnement et vous rendent dépendante des remises. Notre système est conçu pour vous sortir de cette boucle et reconstruire votre rentabilité par la valeur, pas par le prix.",
  },
  {
    q: "Je n'ai pas de compte Meta Ads, c'est un problème ?",
    a: "Aucun. On crée et configure tout : Business Manager, pixel, conversions API, audiences. Vous gardez la pleine propriété de vos comptes et de vos données — toujours. Si vous nous quittez, vous repartez avec tout.",
  },
  {
    q: "Qui s'occupe vraiment de mon compte ?",
    a: "Lorena (fondatrice) supervise chaque compte personnellement. Vous avez un point de contact unique, jamais de chargé de compte junior. Reporting hebdo, point stratégique mensuel inclus.",
  },
  {
    q: "Mes concurrents ne risquent-ils pas de me copier ?",
    a: "On travaille avec un seul centre par zone géographique (rayon de 30 km). Une fois engagée, votre exclusivité est verrouillée. C'est pour ça que les places sont limitées.",
  },
  {
    q: "Comment se passe la résiliation ?",
    a: "Sans engagement. Préavis de 30 jours, par simple email. Vous récupérez intégralement vos comptes pub, audiences, créatifs et tunnels. Aucune clause cachée.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="section section-light">
      <div className="wrap">
        <div className="section-head-v2 reveal">
          <span className="kicker" style={{ color: "var(--bordeaux-warm)" }}>
            ON RÉPOND CASH
          </span>
          <h2 className="section-title">
            Les questions qu'on nous pose <em>vraiment.</em>
          </h2>
        </div>

        <div className="faq-grid">
          <aside className="faq-aside reveal">
            <div className="faq-aside-card">
              <div className="faq-aside-status">
                <span className="dot" />
                Lorena en ligne
              </div>
              <h3>
                Une autre question&nbsp;? <em>Demandez-lui.</em>
              </h3>
              <p>Réponse personnelle sous 24h — pas un bot, pas un assistant. Lorena vous lit.</p>
              <a
                className="btn btn-dark full-btn"
                href="mailto:contact@sorenaagency.com"
                style={{ background: "var(--bordeaux)", marginTop: 8 }}
              >
                Lui écrire
                <Arrow />
              </a>
              <a className="faq-call-link" href="#agenda">
                Préférez réserver un appel direct →
              </a>
            </div>
          </aside>

          <div className="faq-list">
            {QUESTIONS.map((item, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-q">
                  <span>{item.q}</span>
                  <span className="plus">+</span>
                </summary>
                <div className="faq-a">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
