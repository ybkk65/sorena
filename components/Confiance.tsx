/**
 * Bande "confiance" — façon "Trusted by" (KSENIA), mais avec les spécialités
 * de centres accompagnés. Slim, éditoriale, sous la hero.
 */
const TYPES = [
  "Médecine esthétique",
  "Cryolipolyse & minceur",
  "Anti-âge",
  "Head Spa",
  "Spas premium",
];

export function Confiance() {
  return (
    <section className="confiance">
      <div className="wrap confiance-inner">
        <span className="confiance-label">Nous accompagnons</span>
        <ul className="confiance-list">
          {TYPES.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
