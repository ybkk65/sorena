import { Arrow } from "./Arrow";

const STEPS = [
  {
    num: "01",
    tag: "Jour 1 → 7",
    title: "On vous attire les bonnes clientes",
    desc: "Campagnes Meta ciblées sur votre zone, vos cures phares et le profil exact de votre cliente idéale. Visuels, copies, audiences : on s'occupe de tout.",
    bullets: ["Ciblage géo + comportement", "Visuels conformes à votre image", "Budget 100 % maîtrisé"],
  },
  {
    num: "02",
    tag: "Jour 8 → 14",
    title: "On qualifie avant votre agenda",
    desc: "Tunnel de pré-qualification avec questionnaire intelligent : on ne laisse passer que les profils alignés avec votre positionnement et vos cures premium.",
    bullets: ["Tunnel de qualification", "Filtrage automatique", "Score d'intention"],
  },
  {
    num: "03",
    tag: "Jour 15 → 30",
    title: "On convertit en rendez-vous",
    desc: "SMS automatisés, séquences email et relances stratégiques. Vos prospects qualifiés deviennent des consultations confirmées dans votre agenda.",
    bullets: ["SMS + email automatisés", "Relances no-show", "Confirmation 24 h avant"],
  },
  {
    num: "04",
    tag: "Toujours",
    title: "On protège votre marque premium",
    desc: "Pas de promo cassée, pas de communication discount. On vend la valeur de vos protocoles, pas la remise. Votre positionnement reste intact, votre rentabilité grimpe.",
    bullets: ["Image premium préservée", "Vente par la valeur", "Reporting transparent"],
  },
];

export function Methode() {
  return (
    <section id="methode" className="section section-cream">
      <div className="wrap">
        <div className="section-head-v2 reveal">
          <span className="kicker" style={{ color: "var(--bordeaux-warm)" }}>
            LA MÉTHODE — 4 ÉTAPES
          </span>
          <h2 className="section-title">
            30 jours pour tout <em>changer.</em>
          </h2>
        </div>

        <div className="method-grid">
          {STEPS.map((s, i) => (
            <div
              key={s.num}
              className="method-step reveal"
              style={{ "--rd": `${i * 0.1}s` } as React.CSSProperties}
            >
              <div className="method-step-top">
                <span className="method-num">{s.num}</span>
                <span className="method-tag">{s.tag}</span>
              </div>
              <h3 className="method-title">{s.title}</h3>
              <p className="method-desc">{s.desc}</p>
              <ul className="method-bullets">
                {s.bullets.map((b) => (
                  <li key={b}>
                    <span aria-hidden="true">→</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="method-cta reveal">
          <div>
            <div className="method-cta-kicker">Lancement en 7 jours</div>
            <h3 className="method-cta-h">
              Prêt à voir votre agenda <em>se remplir</em> ?
            </h3>
            <p className="method-cta-p">
              30 minutes de diagnostic offert. On analyse votre situation, on vous montre la
              projection chiffrée pour votre centre — sans engagement.
            </p>
          </div>
          <a className="btn btn-dark" href="#agenda">
            Choisir mon créneau
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
