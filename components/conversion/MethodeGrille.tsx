import Image from "next/image";
import { Actions } from "./Actions";
import { Relance } from "./Relance";
import { SectionHead } from "./SectionHead";

/**
 * Le protocole en grille : chaque levier est MONTRÉ par une maquette.
 * Les maquettes sont des exemples d'interface, sans résultat chiffré.
 */

function VisuelInvitations() {
  const annonces = [
    { titre: "Bilan de peau", soustitre: "45 minutes pour comprendre votre peau", photo: true },
    { titre: "Séance découverte", soustitre: "Épilation à la lumière, sur une zone", photo: false },
    { titre: "Bilan silhouette", soustitre: "Un protocole pensé pour vous", photo: false },
  ];
  return (
    <div className="mg-annonces" aria-hidden="true">
      {annonces.map((a, i) => (
        <div key={a.titre} className={`mg-annonce${i === 0 ? " is-avant" : ""}`}>
          <div className="mg-annonce-visuel">
            {a.photo ? (
              <Image src="/assets/image_salon.jpg" alt="" fill sizes="220px" />
            ) : null}
            <span className="mg-annonce-titre">{a.titre}</span>
            <span className="mg-annonce-sous">{a.soustitre}</span>
          </div>
          <span className="mg-annonce-cta">Réserver</span>
        </div>
      ))}
    </div>
  );
}

function VisuelZone() {
  return (
    <div className="mg-radar" aria-hidden="true">
      <span className="mg-radar-ring r1" />
      <span className="mg-radar-ring r2" />
      <span className="mg-radar-ring r3" />
      <span className="mg-radar-centre" />
      <span className="mg-radar-pt p1" />
      <span className="mg-radar-pt p2" />
      <span className="mg-radar-pt p3" />
      <span className="mg-radar-pt p4" />
      <span className="mg-radar-tag">rayon 10 km · exclusif</span>
    </div>
  );
}

function VisuelAssistante() {
  return (
    <div className="mg-chat" aria-hidden="true">
      <p className="mg-chat-tete">
        <span className="mg-chat-avatar">IA</span>
        Assistante de l&apos;institut
      </p>
      <p className="mg-chat-bulle">
        Bonjour, je suis l&apos;assistante virtuelle (IA) de l&apos;institut. Quel soin vous intéresse ?
      </p>
      <p className="mg-chat-choix">
        <span>Soin visage</span>
        <span>Épilation</span>
        <span>Minceur</span>
      </p>
    </div>
  );
}

function VisuelAcompte() {
  return (
    <div className="mg-resa" aria-hidden="true">
      <p className="mg-resa-titre">Rendez-vous confirmé</p>
      <p className="mg-resa-ligne">
        <span>Soin visage signature</span>
        <span>Mardi · 11 h</span>
      </p>
      <p className="mg-resa-ok">
        <span className="mg-check" /> Acompte versé
      </p>
      <p className="mg-resa-ok">
        <span className="mg-check" /> Conditions d&apos;annulation acceptées
      </p>
    </div>
  );
}

function VisuelRelances() {
  const etapes = [
    { quand: "La veille", quoi: "Rappel de votre soin demain" },
    { quand: "Le lendemain", quoi: "Merci pour votre visite" },
    { quand: "Un mois après", quoi: "Votre prochaine séance" },
  ];
  return (
    <ol className="mg-relances" aria-hidden="true">
      {etapes.map((e) => (
        <li key={e.quand}>
          <span className="mg-relance-quand">{e.quand}</span>
          <span className="mg-relance-quoi">{e.quoi}</span>
        </li>
      ))}
    </ol>
  );
}

function VisuelObjectif() {
  return (
    <div className="mg-obj-carte" aria-hidden="true">
      <div className="mg-objectif-tete">
        <span>Objectif de rendez-vous qualifiés</span>
        <span className="mg-exemple">exemple</span>
      </div>
      <div className="mg-jauge">
        <span />
      </div>
      <div className="mg-objectif-pied">
        <span>Fixé ensemble au diagnostic</span>
        <span className="mg-objectif-tag">Non atteint : on poursuit, sans frais</span>
      </div>
    </div>
  );
}

const TUILES = [
  {
    cle: "invitation",
    large: true,
    visuel: <VisuelInvitations />,
    titre: "Une invitation, jamais une remise",
    detail: "Un bilan ou une première séance au juste prix, pas une promo qui dévalue vos soins.",
  },
  {
    cle: "zone",
    visuel: <VisuelZone />,
    titre: "Une zone de 10 km, rien qu'à vous",
    detail: "Une seule maison accompagnée par zone.",
  },
  {
    cle: "ia",
    visuel: <VisuelAssistante />,
    titre: "Une réponse en quelques secondes",
    detail: "Une assistante IA, présentée comme telle, répond 24 h/24 et filtre les demandes.",
  },
  {
    cle: "acompte",
    visuel: <VisuelAcompte />,
    titre: "Un acompte à la réservation",
    detail: "Avec des conditions d'annulation claires : moins d'absences.",
  },
  {
    cle: "relances",
    visuel: <VisuelRelances />,
    titre: "Des relances au bon moment",
    detail: "Avant le soin, après la visite, pour la séance suivante.",
  },
  {
    cle: "objectif",
    large: true,
    visuel: <VisuelObjectif />,
    titre: "Un objectif de rendez‑vous",
    detail: "Fixé ensemble au diagnostic. Tant qu'il n'est pas atteint, nous continuons sans frais.",
  },
];

export function MethodeGrille() {
  return (
    <section id="methode" className="cv-section cv-cream" aria-labelledby="methode-titre">
      <div className="wrap">
        <SectionHead
          id="methode-titre"
          num="03"
          label="Le protocole"
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
              className={`mg-tuile reveal${t.large ? " is-large" : ""} mg-t-${t.cle}`}
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
