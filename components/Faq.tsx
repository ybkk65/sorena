import { faqSchema } from "@/lib/seo";
import { frenchTypo } from "@/lib/text";
import { Actions } from "./conversion/Actions";
import { Relance } from "./conversion/Relance";
import { SectionHead } from "./conversion/SectionHead";
import { JsonLd } from "./JsonLd";

/** Les objections avant la réservation : réponses courtes, sans détour. */
const QUESTIONS = [
  {
    q: "Combien cela coûte-t-il ?",
    a: "L'installation du système est entièrement personnalisée : le tarif s'adapte à vos besoins, à vos moyens et à l'étape où vous en êtes dans votre développement. On définit tout ensemble pendant votre diagnostic offert.",
  },
  {
    q: "J'ai déjà essayé la publicité, sans résultat.",
    a: "Une publicité seule ne remplit pas un agenda. Ce qui fait la différence, c'est tout ce qui se passe après le clic : répondre vite, rappeler, relancer, confirmer. C'est exactement ce que notre système prend en charge.",
  },
  {
    q: "Est-ce que cela fonctionne dans ma ville ?",
    a: "Oui. Notre système s'adapte à chaque centre, de l'institut intimiste en zone rurale au centre multi-cabines en plein centre-ville. Et pour que votre zone reste la vôtre, nous n'accompagnons qu'un seul centre dans un rayon de 10 km.",
  },
  {
    q: "Et si je n'ai aucune compétence technique ou marketing ?",
    a: "C'est justement pour ça que nous existons. Vous n'avez besoin d'aucune compétence : nous installons et pilotons tout le système en 7 jours. Vous nous parlez de votre centre, de vos soins et de vos objectifs, et vos nouvelles demandes arrivent directement chez vous. Pas de jargon, rien de technique à gérer.",
  },
  {
    q: "Vous engagez-vous sur des résultats ?",
    a: "Nous fixons ensemble un objectif de rendez-vous qualifiés. Tant qu'il n'est pas atteint, nous continuons sans frais supplémentaires.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="cv-section cv-light" aria-labelledby="faq-titre">
      <JsonLd data={faqSchema(QUESTIONS)} />
      <div className="wrap faq-court">
        <div className="faq-court-intro">
          <SectionHead
            id="faq-titre"
            num="04"
            aGauche
            label="Questions"
            titre={
              <>
                Avant de <em>nous rencontrer</em>
              </>
            }
          />
          <Relance texte="Une autre question ? Sofya vous répond personnellement.">
            <Actions source="relance-faq" secondaire="email" />
          </Relance>
        </div>

        <div className="faq-list">
          {QUESTIONS.map((item) => (
            <details key={item.q} className="faq-item">
              <summary className="faq-q">
                <span>{frenchTypo(item.q)}</span>
                <span className="plus" aria-hidden="true">+</span>
              </summary>
              <div className="faq-a">{frenchTypo(item.a)}</div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
