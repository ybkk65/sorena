import { Arrow } from "./Arrow";

const QUESTIONS = [
  {
    q: "Quel budget publicitaire faut-il prévoir ?",
    a: "Le budget dépend de votre offre, votre zone géographique et vos objectifs. Nous définissons cela ensemble lors du diagnostic.",
  },
  {
    q: "En combien de temps peut-on lancer le système ?",
    a: "Une fois l'onboarding terminé, nous pouvons généralement lancer le système en 7 jours.",
  },
  {
    q: "Est-ce adapté à mon centre ?",
    a: "Nous travaillons principalement avec les centres proposant des soins premium à forte valeur (anti-âge, minceur, remodelage corporel, soins experts, etc.).",
  },
  {
    q: "Et si j'ai déjà essayé la publicité sans résultats ?",
    a: "Oui. La plupart de nos clientes ont déjà testé différentes approches avant nous. Bien souvent, le problème ne vient pas uniquement de la publicité, mais de la stratégie, de la qualification ou du parcours de conversion derrière.",
  },
  {
    q: "Quel niveau d'implication est attendu de notre côté ?",
    a: "Nous construisons ce système avec vous. Une collaboration réactive et une implication minimale dans le process sont nécessaires pour obtenir les meilleurs résultats.",
  },
  {
    q: "Est-ce une IA qui parle à mes clientes à ma place ?",
    a: "L'IA travaille en coulisses pour répondre vite et relancer au bon moment — toujours dans un ton premium et humain, fidèle à votre image. Vos clientes vivent une expérience fluide et soignée, jamais robotique. Et vous gardez la main dès que ça compte.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="section section-light">
      <div className="wrap">
        <div className="section-head-v2 reveal">
          <span
            className="kicker"
            style={{ color: "var(--bordeaux-warm)" }}
          >
            FAQ
          </span>

          <h2 className="section-title">
            Vous vous demandez <em>peut-être…</em>
          </h2>
        </div>

        <div className="faq-grid">
          <aside className="faq-aside reveal">
            <div className="faq-aside-card">

              <div className="faq-aside-status">
                <span className="dot" />
                Équipe Sorena en ligne
              </div>

              <h3>
                Besoin d’un avis sur <em>votre centre&nbsp;?</em>
              </h3>

              <p>
                Si vous vous demandez si l’approche est adaptée à votre activité,
                vos cures premium ou votre marché local, posez-nous simplement la question.
              </p>

              <a
                className="btn btn-dark full-btn"
                href="mailto:contact@sorenaagency.com"
                style={{
                  background: "var(--bordeaux)",
                  marginTop: 8,
                }}
              >
                Parler à l’équipe
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

                <div className="faq-a">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}