import Image from "next/image";
import { Actions } from "./Actions";
import { Relance } from "./Relance";
import { SectionHead } from "./SectionHead";

/**
 * Le système en grille : chaque levier est MONTRÉ par une maquette.
 * Les maquettes sont des exemples d'interface, sans résultat chiffré.
 */

function VisuelInvitation() {
  return (
    <div className="mg-annonces is-seule" aria-hidden="true">
      <div className="mg-annonce is-avant">
        <div className="mg-annonce-visuel">
          <Image src="/assets/image_salon.jpg" alt="" fill sizes="180px" />
          <span className="mg-annonce-titre">Bilan offert</span>
        </div>
        <span className="mg-annonce-cta">Réserver</span>
      </div>
    </div>
  );
}

function VisuelAssistante() {
  return (
    <div className="mg-chat" aria-hidden="true">
      <p className="mg-chat-tete">
        <span className="mg-chat-avatar">IA</span>
        Assistante de l’institut
      </p>
      <p className="mg-chat-bulle">
        Bonjour, je suis l’assistante virtuelle (IA) de l’institut. Quel soin vous intéresse&nbsp;?
      </p>
      <p className="mg-chat-choix">
        <span>Soin visage</span>
        <span>Épilation</span>
        <span>Minceur</span>
      </p>
    </div>
  );
}

function VisuelRappelVeille() {
  return (
    <ol className="mg-relances" aria-hidden="true">
      <li>
        <span className="mg-relance-quand">La veille</span>
        <span className="mg-relance-quoi">Rappel de votre soin demain</span>
      </li>
    </ol>
  );
}

function VisuelRappel() {
  return (
    <div className="mg-demande" aria-hidden="true">
      <p className="mg-resa-titre">Demande qualifiée</p>
      <p className="mg-resa-ok">
        <span className="mg-check" /> Rappel prévu · 14&nbsp;h
      </p>
    </div>
  );
}

/** La vedette (l'assistante) passe en tête, sur toute la largeur. */
const TUILES = [
  {
    cle: "ia",
    vedette: true,
    visuel: <VisuelAssistante />,
    titre: "Une assistante IA, 24 h/24",
    detail: "Elle répond en quelques secondes, filtre les demandes et ne laisse partir aucune cliente.",
  },
  {
    cle: "invitation",
    visuel: <VisuelInvitation />,
    titre: "Une invitation, jamais une remise",
    detail: "Des annonces qui proposent un bilan ou une première séance, pas une promo.",
  },
  {
    cle: "rappel",
    visuel: <VisuelRappel />,
    titre: "Un rappel pour chaque demande",
    detail: "Chaque personne intéressée est rappelée pour caler son bilan.",
  },
  {
    cle: "absences",
    visuel: <VisuelRappelVeille />,
    titre: "Moins d’absences",
    detail: "Un rappel part la veille de chaque rendez‑vous.",
  },
];

export function MethodeGrille() {
  return (
    <section id="methode" className="cv-section cv-cream" aria-labelledby="methode-titre">
      <div className="wrap">
        <SectionHead
          id="methode-titre"
          num="03"
          label="Le système"
          titre={
            <>
              Des annonces qui font <em>réserver</em>, pas seulement aimer
            </>
          }
          sousTitre="Pensé pour les instituts et centres esthétiques. Installé en 7 jours."
        />

        <ul className="mg-grille">
          {TUILES.map((t, i) => (
            <li
              key={t.cle}
              className={`mg-tuile reveal${t.vedette ? " is-vedette" : ""} mg-t-${t.cle}`}
              style={{ "--rd": `${(i % 3) * 0.06}s` } as React.CSSProperties}
            >
              <div className="mg-visuel">{t.visuel}</div>
              <div className="mg-texte">
                <h3>{t.titre}</h3>
                <p>{t.detail}</p>
              </div>
            </li>
          ))}
        </ul>

        <Relance texte="Ce que cela donnerait dans votre zone, nous le regardons avec vous, gratuitement.">
          <Actions source="relance-methode" secondaire="email" />
        </Relance>
      </div>
    </section>
  );
}
