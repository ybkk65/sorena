"use client";

import Image from "next/image";

/**
 * Section 7 — La fondatrice (Sofya), incarnée par sa voix, sans visage.
 * Texte à gauche, image à droite. L'image (main gantée + carte scellée)
 * FLOTTE : fond de section = bordeaux exact de l'image (#3e0106), aucun cadre,
 * aucune ombre, aucune lumière ; un masque radial dissout les bords pour
 * qu'elle paraisse posée directement sur la page.
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
            sizes="(max-width: 860px) 80vw, 460px"
            className="fondatrice-img"
          />
        </div>
      </div>

      <style jsx>{`
        .fondatrice-section {
          position: relative;
          overflow: hidden;
          background: #3e0106; /* bordeaux exact du fond de l'image */
          padding: clamp(72px, 10vw, 130px) 0;
          color: var(--rose-light);
        }
        .fondatrice-grid {
          box-sizing: border-box;
          width: 100%;
          max-width: 1120px;
          margin: 0 auto;
          padding-inline: clamp(20px, 4vw, 56px);
          display: grid;
          grid-template-columns: 1fr 0.92fr;
          gap: clamp(24px, 4vw, 64px);
          align-items: center;
        }
        .fondatrice-body {
          grid-column: 1;
          min-width: 0;
        }
        .fondatrice-art {
          grid-column: 2;
          min-width: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        /* L'image flotte : aucun cadre, aucune ombre, aucune lumière.
           Le masque radial dissout les bords (et l'avant-bras en bas). */
        .fondatrice-section :global(.fondatrice-img) {
          display: block;
          width: 100%;
          max-width: 460px;
          height: auto;
          border: 0;
          border-radius: 0;
          box-shadow: none;
          background: none;
          filter: none;
          /* Le bras s'évanouit vers le bas (dégradé vertical) + bords haut/gauche
             adoucis (radial). Les deux masques se combinent (intersect). */
          -webkit-mask-image:
            linear-gradient(to bottom, #000 0%, #000 52%, transparent 88%),
            radial-gradient(140% 140% at 72% 40%, #000 60%, transparent 100%);
          -webkit-mask-composite: source-in;
          -webkit-mask-repeat: no-repeat;
          mask-image:
            linear-gradient(to bottom, #000 0%, #000 52%, transparent 88%),
            radial-gradient(140% 140% at 72% 40%, #000 60%, transparent 100%);
          mask-composite: intersect;
          mask-repeat: no-repeat;
        }

        .fondatrice-kicker {
          color: var(--rose);
          display: inline-block;
          margin-bottom: 22px;
        }
        .fondatrice-title {
          margin: 0;
          font-family: var(--display);
          font-weight: 400;
          font-size: clamp(30px, 4vw, 52px);
          line-height: 1.08;
          letter-spacing: -0.01em;
          color: var(--off-white, #f6ecdc);
          text-wrap: balance;
          overflow-wrap: break-word;
        }
        .fondatrice-title em {
          font-style: italic;
          color: var(--rose);
        }
        .fondatrice-text {
          margin-top: clamp(20px, 2.6vw, 30px);
          display: flex;
          flex-direction: column;
          gap: 18px;
          max-width: 46ch;
          font-size: clamp(15.5px, 1.5vw, 17.5px);
          line-height: 1.85;
          color: rgba(244, 230, 216, 0.88);
        }
        .fondatrice-text p {
          margin: 0;
        }
        .fondatrice-sign {
          margin: clamp(22px, 3vw, 34px) 0 0;
          font-family: var(--display);
          font-style: italic;
          font-size: clamp(26px, 3.2vw, 38px);
          color: var(--rose);
          letter-spacing: 0.01em;
        }

        @media (max-width: 860px) {
          .fondatrice-grid {
            grid-template-columns: 1fr;
            gap: 8px;
            text-align: center;
          }
          .fondatrice-body {
            order: 1;
          }
          .fondatrice-art {
            order: 2;
            margin-top: 12px;
          }
          .fondatrice-text {
            margin-left: auto;
            margin-right: auto;
            text-align: left;
            max-width: 100%;
          }
          .fondatrice-title {
            font-size: clamp(26px, 7vw, 34px);
            max-width: 100%;
          }
          .fondatrice-section :global(.fondatrice-img) {
            max-width: 340px;
          }
        }
      `}</style>
    </section>
  );
}
