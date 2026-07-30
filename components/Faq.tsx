import { Arrow } from "./Arrow";

const QUESTIONS = [
  {
    q: "En quoi êtes-vous différents des autres agences ?",
    a: "La plupart livrent du volume : des contacts froids, des chercheuses de promotion, des rendez-vous manqués. Nous vous adressons les bonnes clientes, qualifiées, au juste prix et présentes, par une offre de valeur, jamais par la remise. Le résultat, sans jamais compromettre votre image.",
  },
  {
    q: "J'ai déjà essayé la publicité, ou une agence, sans résultat.",
    a: "Le problème vient rarement de la publicité, mais de ce qui suit le premier message : répondre vite, qualifier, relancer, garantir la présence. C'est précisément là que nous intervenons, là où les autres s'arrêtent.",
  },
  {
    q: "Est-ce que cela fonctionne dans ma ville ?",
    a: "Oui. Une clientèle prête à investir dans de beaux soins existe partout. Ce qui compte, c'est l'offre et le ciblage, non la taille de la ville. Nous étudions votre zone précisément lors du diagnostic, avant tout engagement.",
  },
  {
    q: "Je ne suis pas marketeuse et je n'ai pas le temps de gérer cela.",
    a: "C'est précisément notre rôle : vous ne gérez rien. Nous installons le système et le faisons vivre : publicité, qualification, relances, acompte. De votre côté, vous voyez les bonnes clientes arriver, et vous vous consacrez à vos soins.",
  },
  {
    q: "Combien cela coûte-t-il ?",
    a: "Nous en parlons ouvertement lors du diagnostic, sans tarif caché, et le diagnostic est offert. Ce qui coûte vraiment cher, c'est un agenda à moitié vide et des cures bradées, mois après mois.",
  },
  {
    q: "Travaillez-vous avec d'autres centres de ma zone ?",
    a: "Non. Une seule maison par zone, dans un rayon de 10 km. Lorsque nous nous engageons à vos côtés, vos concurrentes n'ont pas accès au même système. Votre investissement reste le vôtre.",
  },
  {
    q: "Comment vous engagez-vous sur les résultats ?",
    a: "Nous poursuivons notre travail, sans frais supplémentaires, jusqu'à atteindre les objectifs fixés ensemble. Nous ne réussissons que si vous réussissez ; c'est pourquoi nous ne retenons que les maisons pour lesquelles nous sommes convaincus d'y parvenir.",
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
            QUESTIONS FRÉQUENTES
          </span>

          <h2 className="section-title">
            Vos questions, <em>avant de nous rencontrer.</em>
          </h2>
        </div>

        <div className="faq-grid">
          <aside className="faq-aside reveal">
            <div className="faq-aside-card">

              <h3>
                Une question qui n’est pas <em>dans la liste&nbsp;?</em>
              </h3>

              <p>
                Dites-nous où vous en êtes : votre centre, vos cures, votre
                agenda. Nous vous répondons personnellement.
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
                Vous préférez un échange direct →
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