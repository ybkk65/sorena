import Image from "next/image";
import { Arrow } from "./Arrow";

export function Hero() {
  return (
    <section id="top" className="hero grain">
      <div className="hero-visual" aria-hidden="true">
        <Image
          src="/assets/hero-room.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </div>

      <div className="hero-glow" aria-hidden="true" />

      <div className="wrap hero-inner">
        <span className="hero-availability">
          <span className="only-desktop">Pour les centres de cures premium</span>
          <span className="only-mobile">Centres de cures premium</span>
        </span>

        <h1 className="hero-h1">
          <span className="reveal-line">
            <span style={{ "--i": 0 } as React.CSSProperties}>
              Nous remplissons votre <em>agenda.</em>
            </span>
          </span>

          <span className="reveal-line">
            <span style={{ "--i": 1 } as React.CSSProperties}>
              Vous restez en cabine.
            </span>
          </span>
        </h1>

        <p className="hero-sub">
          Pendant que vous êtes en cabine, on attire les bonnes clientes, on les
          relance et on les amène jusque dans votre agenda.{" "}
          <br className="hero-sub-br" />
          Vous n&apos;avez plus qu&apos;à les recevoir.
        </p>

        <div className="hero-cta">
          <a className="btn btn-primary" href="#agenda">
            Réserver mon diagnostic offert
            <Arrow />
          </a>
        </div>

        <p className="hero-reassurance">
          Diagnostic offert · sans engagement
        </p>
      </div>
    </section>
  );
}