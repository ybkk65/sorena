import { Arrow } from "./Arrow";

const QUESTIONS = [
  {
    q: "En quoi vous êtes différents des autres agences ?",
    a: "Les autres vous livrent du volume : des leads, des chasseuses de promo, des no-shows. Nous, on vous amène les bonnes : qualifiées, à plein tarif, qui se présentent, via une offre de valeur et jamais une braderie. Le résultat que vous cherchez, sans cramer votre image.",
  },
  {
    q: "J'ai déjà essayé la pub (ou une agence), sans résultat.",
    a: "Le problème vient rarement de la pub, mais de ce qui se passe après le premier message : répondre vite, qualifier, relancer, garantir la présence. C'est précisément là qu'on travaille, là où les autres vous lâchent.",
  },
  {
    q: "Est-ce que ça marche dans ma ville ?",
    a: "Oui, des clientes prêtes à payer pour de beaux soins, il y en a partout. Ce qui compte, c'est l'offre et le ciblage, pas la taille de la ville. On vérifie votre zone précisément au diagnostic avant de s'engager.",
  },
  {
    q: "Je ne suis pas marketeuse et je n'ai pas le temps de gérer ça.",
    a: "Justement, vous ne gérez rien. On installe le système et on le fait tourner : pub, qualification, relances, acompte. De votre côté, vous voyez les bonnes clientes arriver dans votre agenda et vous faites vos soins.",
  },
  {
    q: "Combien ça coûte ?",
    a: "On en parle sans détour au diagnostic, aucun tarif caché, et le diagnostic est offert. Ce qui coûte vraiment cher, c'est un agenda à moitié vide et des cures bradées mois après mois.",
  },
  {
    q: "Vous travaillez avec d'autres centres de ma zone ?",
    a: "Non. Un seul centre par zone, rayon 10 km. Quand on s'engage avec vous, vos concurrentes locales n'ont pas accès au même système, vous n'investissez pas pour armer la boutique d'en face.",
  },
  {
    q: "Comment vous engagez-vous sur les résultats ?",
    a: "On continue de travailler sans frais supplémentaires jusqu'à atteindre les objectifs fixés ensemble. On ne gagne que si vous gagnez, c'est aussi pour ça qu'on ne prend que les centres pour lesquels on est convaincus d'y arriver.",
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
            Vos questions, <em>avant qu&apos;on se parle.</em>
          </h2>
        </div>

        <div className="faq-grid">
          <aside className="faq-aside reveal">
            <div className="faq-aside-card">

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
                En parler à Sofya
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