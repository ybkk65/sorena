import Image from "next/image";
import { Arrow } from "./Arrow";

export function Hero() {
  return (
    <section id="top" className="hero-split">
      <div className="hero-split-text">
        <span className="hero-eyebrow">Acquisition de clientèle · Centres, cliniques et cabinets esthétiques</span>

        <h1 className="hero-split-title">
          Nous remplissons votre <em>agenda.</em>
          <br />
          Vous restez en cabine.
        </h1>

        <p className="hero-split-sub">
          Pendant que vous êtes en cabine, nous attirons les bonnes clientes,
          les accompagnons et les amenons jusqu&apos;à votre agenda. Vous
          n&apos;avez plus qu&apos;à les recevoir.
        </p>

        <a className="hero-split-cta" href="#agenda">
          Réserver un diagnostic offert
          <Arrow />
        </a>
      </div>

      <div className="hero-split-media" aria-hidden="true">
        <Image
          src="/assets/hero-room.jpg"
          alt=""
          fill
          priority
          sizes="(max-width: 900px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}
