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

          <p className="founder-statement">
            Là où d’autres voient un marché, je vois des femmes. Parce que j’en
            suis une.
          </p>

          <p className="founder-bio">
            Moi, c’est Sofya. Le digital est mon métier ; l’esthétique, mon
            monde, dont je suis cliente. Je ne remplis pas les agendas au volume —
            je vous adresse les bonnes clientes, celles qui paient et qui
            reviennent.
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
