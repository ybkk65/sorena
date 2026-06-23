import Image from "next/image";

/**
 * Section 7 — La fondatrice (Sofya), incarnée par sa voix, sans visage.
 * Texte à gauche, image à droite. L'image (main gantée + carte scellée)
 * FLOTTE : fond de section = bordeaux exact de l'image (#3e0106), aucun cadre,
 * aucune ombre, aucune lumière ; un masque radial dissout les bords pour
 * qu'elle paraisse posée directement sur la page.
 * Styles dans globals.css (.fondatrice-*) pour un rendu SSR fiable et des
 * media queries qui s'appliquent réellement sur mobile.
 */
export function Fondatrice() {
  return (
    <section id="fondatrice" className="fondatrice-section">
      <div className="fondatrice-grid">
        <div className="fondatrice-body reveal">
          <span className="kicker fondatrice-kicker">LA FONDATRICE</span>

          <h2 className="fondatrice-title">
            Vous n’avez pas commencé <em>pour ça.</em>
          </h2>

          <div className="fondatrice-text">
            <p>Moi, c’est Sofya.</p>
            <p>
              Vous avez ouvert votre centre par passion, pour être libre, et pour
              ce moment où une femme se relève de votre table un peu plus belle, un
              peu plus sûre d’elle. Pas pour brader vos soins et attendre des
              rendez-vous qui ne viennent pas.
            </p>
            <p>
              Là où mes concurrents voient un marché, moi je vois des femmes, parce
              que j’en suis une. Et parce que j’ai dû, moi aussi, tout reconstruire
              pour redevenir libre : c’est de là qu’est née Sorena.
            </p>
            <p>
              Alors je ne vends pas du volume. Je viens vous rendre ce pour quoi
              vous avez commencé : les bonnes clientes, et votre liberté. Je me bats
              à vos côtés, et je ne vous lâche pas.
            </p>
          </div>

          <p className="fondatrice-sign">Sofya</p>
        </div>

        <div className="fondatrice-art reveal">
          <Image
            src="/assets/fondatrice.jpg"
            alt="Une main gantée tient une carte scellée d’un cachet de cire"
            width={1178}
            height={2055}
            sizes="(max-width: 860px) 70vw, 460px"
            className="fondatrice-img"
          />
        </div>
      </div>
    </section>
  );
}
