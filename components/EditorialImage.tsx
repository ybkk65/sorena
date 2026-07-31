import Image from "next/image";

/**
 * Bande image pleine largeur — respiration éditoriale entre deux sections.
 * L'image (cabine Sorena) parle ; une courte légende ancre le message.
 */
export function EditorialImage() {
  return (
    <section className="editorial-band" aria-label="En cabine chez un centre Sorena">
      <Image
        src="/assets/image_salon.jpg"
        alt="Un soin en cabine dans un centre partenaire Sorena"
        fill
        sizes="100vw"
        className="editorial-band-img"
      />
      <div className="editorial-band-overlay" aria-hidden="true" />
      <figcaption className="editorial-band-caption">
        <span className="kicker">En cabine</span>
        <p>Vous faites votre métier. Nous faisons le nôtre.</p>
      </figcaption>
    </section>
  );
}
