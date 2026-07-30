import Image from "next/image";

/**
 * Section fondatrice — éditoriale : portrait + une phrase forte + signature.
 * Fini la carte "profil Insta". Le portrait utilise sofya.jpg (placeholder
 * esthéticienne pour l'instant, à remplacer par un vrai portrait de Sofya).
 */
export function Fondatrice() {
  return (
    <section id="fondatrice" className="founder">
      <div className="wrap founder-grid">
        <div className="founder-portrait reveal">
          <Image
            src="/assets/sofya.jpg"
            alt="Sofya, fondatrice de Sorena"
            width={560}
            height={700}
            sizes="(max-width: 860px) 78vw, 460px"
          />
        </div>

        <div className="founder-body reveal">
          <span className="kicker founder-kicker">La fondatrice</span>

          <p className="founder-statement">Moi, c’est Sofya.</p>

          <p className="founder-bio">
            J’aurais pu monter cette agence pour n’importe qui. Je l’ai montée
            pour les centres, les cliniques et les cabinets esthétiques. Rien
            d’autre.
          </p>

          <p className="founder-bio">
            J’ai été cliente avant d’être prestataire. Ce que vous rendez à une
            femme, ce n’est pas un soin : c’est la façon dont elle se regardera
            demain matin.
          </p>

          <p className="founder-bio">
            On vous vend pourtant du volume, des coûts par lead, des taux de
            clic. Comme si votre travail tenait dans une colonne de tableur.
          </p>

          <p className="founder-bio">
            Je ne vous amène pas du monde. Je vous amène les femmes qui viennent
            pour vous, et qui reviennent.
          </p>

          <p className="founder-sign">
            Sofya
            <span>Fondatrice de Sorena</span>
          </p>
        </div>
      </div>
    </section>
  );
}
