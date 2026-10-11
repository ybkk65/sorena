import { faqSchema } from "@/lib/seo";
import { Actions } from "./conversion/Actions";
import { Relance } from "./conversion/Relance";
import { SectionHead } from "./conversion/SectionHead";
import { JsonLd } from "./JsonLd";

/** Les objections avant la réservation : réponses courtes, sans détour. */
const QUESTIONS = [
  {
    q: "Combien cela coûte-t-il ?",
    a: "Notre accompagnement est sur devis, et votre budget publicitaire s'y ajoute. Le prix vous est donné pendant le diagnostic, qui est offert et sans engagement.",
  },
  {
    q: "En quoi êtes-vous différents des autres agences ?",
    a: "Nous ne livrons pas des contacts : nous suivons chaque demande jusqu'au rendez-vous honoré, avec une offre de valeur, jamais une remise.",
  },
  {
    q: "J'ai déjà essayé la publicité, sans résultat.",
    a: "Le problème vient rarement de la publicité, mais de ce qui suit : répondre vite, qualifier, relancer, sécuriser la venue. C'est là que nous intervenons.",
  },
  {
    q: "Est-ce que cela fonctionne dans ma ville ?",
    a: "Une clientèle prête à investir dans de beaux soins existe partout. Nous étudions votre zone pendant le diagnostic, avant tout engagement.",
  },
  {
    q: "Je n'ai pas le temps de gérer tout cela.",
    a: "Vous ne gérez rien : publicité, réponses, relances et acompte sont pris en charge. Vous recevez les clientes en cabine.",
  },
  {
    q: "Travaillez-vous avec mes concurrentes ?",
    a: "Non. Nous n'accompagnons qu'une seule maison par zone de 10 km.",
  },
  {
    q: "Vous engagez-vous sur des résultats ?",
    a: "Nous fixons ensemble un objectif de rendez-vous qualifiés. Tant qu'il n'est pas atteint, nous continuons sans frais supplémentaires.",
  },
  {
    q: "Travaillez-vous avec les médecins ?",
    a: "Non pour la publicité : le code de déontologie médicale l'interdit. Notre protocole s'adresse aux instituts et centres esthétiques non médicaux.",
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
                <span>{item.q}</span>
                <span className="plus" aria-hidden="true">+</span>
              </summary>
              <div className="faq-a">{item.a}</div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
