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
            <p className="fondatrice-lead">
              Moi, c’est Sofya. Et je ne travaille que pour des femmes qui ont
              tout donné pour leur centre.
            </p>
            <p>
              Mon métier, c’est le marketing digital : ramener les bonnes
              personnes vers les bonnes mains. Et l’esthétique, je ne l’ai pas
              choisie au hasard. C’est un monde que je connais de l’intérieur,
              dont je suis moi-même cliente, et dont j’ai vu les coulisses de
              près. Je sais ce qu’il s’y joue, et ce qu’il en coûte de tenir un
              centre.
            </p>
            <p>
              Vous avez ouvert par passion. Pour ce moment où une cliente se
              relève de votre table un peu plus belle, un peu plus sûre d’elle.
              Pas pour brader vos soins, ni pour fixer un agenda qui se vide.
            </p>
            <p>
              Là où d’autres voient un marché, je vois des femmes, parce que j’en
              suis une. Je viens vous rendre <em>vos bonnes clientes</em>, et le
              repos d’un esprit qui ne compte plus ses fins de mois.
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
