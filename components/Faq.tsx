import { Arrow } from "./Arrow";

const QUESTIONS = [
  {
    q: "Comment savoir si ça marchera vraiment pour mon centre ?",
    a: "C'est exactement ce qu'on regarde ensemble pendant l'audit offert : votre centre, vos cures, votre zone et la façon dont vos clientes arrivent aujourd'hui. Si on ne voit pas de levier clair pour remplir votre agenda, on vous le dit franchement — vous ne vous engagez sur rien.",
  },
  {
    q: "J'ai déjà essayé la pub (ou une agence), sans résultats. Pourquoi ce serait différent ?",
    a: "La plupart des centres qu'on accompagne ont déjà été déçus avant nous. Le problème vient rarement de la pub elle-même : c'est ce qui se passe APRÈS le premier message qui fait tout — qui répond vite ? qui qualifie ? qui relance celles qui hésitent ? C'est là que 80 % des clientes se perdent. Notre système récupère précisément celles que vous laissiez filer.",
  },
  {
    q: "Est-ce que l'IA va parler à mes clientes comme un robot ?",
    a: "Non, et c'est non négociable. L'IA répond en quelques secondes et relance au bon moment, mais avec un ton premium et humain, écrit pour ressembler à votre centre — pas à un chatbot. Vos clientes vivent un échange fluide et soigné. Et dès qu'un message mérite votre touche personnelle, vous reprenez la main.",
  },
  {
    q: "Je n'ai pas le temps de gérer un outil de plus.",
    a: "Justement : vous ne gérez rien. Le système tourne en arrière-plan, répond et relance à votre place, jour et nuit. De votre côté, vous voyez simplement les rendez-vous tomber dans votre agenda. On s'occupe de tout mettre en place pour vous.",
  },
  {
    q: "Combien ça coûte ?",
    a: "Ça dépend de votre situation et de vos objectifs — on en parle sans détour pendant l'audit. Ce qui est certain : l'audit est offert, et vous repartez avec des recommandations concrètes même si on ne travaille pas ensemble. Vous savez exactement où vous mettez les pieds avant toute décision.",
  },
  {
    q: "Et si ce n'est pas fait pour mon centre ?",
    a: "On vous le dira. On ne travaille qu'avec les centres pour lesquels on est convaincus d'obtenir des résultats. Si après l'audit ce n'est pas le cas, on vous orientera honnêtement — sans vous faire perdre votre temps ni votre argent.",
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
            Est-ce vraiment fait <em>pour votre centre&nbsp;?</em>
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
                Une question qui n’est pas <em>dans la liste&nbsp;?</em>
              </h3>

              <p>
                Dites-nous où vous en êtes avec votre centre, vos cures et votre
                agenda. On vous répond directement, sans langue de bois.
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