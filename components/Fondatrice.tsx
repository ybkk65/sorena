import Image from "next/image";

/**
 * Section — La fondatrice (Sofya).
 * Carte profil facon Instagram (avatar rond + lisere, nom + verifie + @handle
 * + bio) puis note editoriale courte et exergue. Rendu magazine / agence.
 * Styles dans globals.css (.fondatrice-*).
 *
 * Avatar : placeholder tant que /assets/sofya.jpg n'est pas fourni. Une fois la
 * photo depos ee, remplacer <span class="fondatrice-avatar-ph"> par :
 *   <Image src="/assets/sofya.jpg" alt="Sofya, fondatrice de Sorena" fill sizes="96px" />
 */
export function Fondatrice() {
  return (
    <section id="fondatrice" className="fondatrice-section">
      <div className="wrap">
        <div className="fondatrice-inner reveal">
          <span className="kicker fondatrice-kicker">LA FONDATRICE</span>

          <div className="fondatrice-card">
            <span className="fondatrice-avatar">
              <span className="fondatrice-avatar-inner">
                <Image
                  src="/assets/sofya.jpg"
                  alt="Sofya, fondatrice de Sorena"
                  fill
                  sizes="120px"
                />
              </span>
            </span>
            <div className="fondatrice-id">
              <span className="fondatrice-name">
                Sofya
                <svg className="fondatrice-verified" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="11" fill="currentColor" />
                  <path
                    d="M7 12.4l3.1 3.1L17 8"
                    fill="none"
                    stroke="#3e0106"
                    strokeWidth="2.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <a
                className="fondatrice-handle"
                href="https://www.instagram.com/sorena_esthetic"
                target="_blank"
                rel="noopener"
              >
                @sorena_esthetic
              </a>
              <span className="fondatrice-bio">Fondatrice de Sorena</span>
            </div>
          </div>

          <div className="fondatrice-note">
            <p>
              Moi, c’est Sofya. Le marketing digital, c’est mon métier : amener
              les bonnes personnes vers les bonnes mains. L’esthétique, c’est mon
              monde. J’en suis cliente, j’en connais les coulisses.
            </p>

            <blockquote className="fondatrice-quote">
              Là où d’autres voient un marché, je vois des femmes. Parce que j’en
              suis une.
            </blockquote>

            <p>
              Je viens vous rendre <em>vos bonnes clientes</em>, et votre liberté.
              Ce n’est pas un service, c’est un engagement.
            </p>
          </div>

          <p className="fondatrice-signoff">— Sofya</p>
        </div>
      </div>
    </section>
  );
}
