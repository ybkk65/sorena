import Image from "next/image";
import { Actions } from "./conversion/Actions";

/** Trois engagements, en ligne éditoriale sous les actions. */
const ENGAGEMENTS = [
  { valeur: "30 min", libelle: "Diagnostic offert" },
  { valeur: "10 km", libelle: "Une maison par zone" },
  { valeur: "7 jours", libelle: "Installation" },
];

export function Hero() {
  return (
    <section id="top" className="hero-split">
      <div className="hero-split-text">
        {/* Le surtitre fait partie du H1 : il nomme la cible. Jamais
            « agence marketing ». */}
        <h1 className="hero-heading">
          <span className="cv-label hero-label">Instituts &amp; centres esthétiques</span>
          <span className="hero-split-title">
            Nous remplissons votre <em>agenda.</em>
            <br />
            Vous restez en cabine.
          </span>
        </h1>

        <p className="hero-split-sub">
          Des clientes de votre zone, qualifiées, qui paient le juste prix et qui
          reviennent.
        </p>

        <div id="cta-hero">
          <Actions source="hero" secondaire="calcul" />
        </div>

        <dl className="hero-engagements">
          {ENGAGEMENTS.map((e) => (
            <div key={e.valeur}>
              <dt>{e.valeur}</dt>
              <dd>{e.libelle}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="hero-split-media">
        <Image src="/assets/hero-room.jpg" alt="" fill priority sizes="(max-width: 900px) 100vw, 50vw" />
        <div className="hv-carte" aria-hidden="true">
          <span className="hv-carte-kicker">Nouvelle cliente</span>
          <span className="hv-carte-titre">Soin visage signature</span>
          <span className="hv-carte-detail">Mardi · 11 h · acompte versé</span>
        </div>
      </div>
    </section>
  );
}
