/**
 * Bande stats — grands chiffres éditoriaux (façon KSENIA "50+ / 20+ / 5+").
 * Différenciateurs honnêtes de Sorena, sur crème.
 */
const STATS = [
  { num: "7 jours", label: "Installation du protocole" },
  { num: "24/7", label: "Qualification par IA" },
  { num: "1 / zone", label: "Une seule maison par secteur" },
  { num: "Offert", label: "Votre premier diagnostic" },
];

export function StatsBand() {
  return (
    <section className="stats-band section-cream">
      <div className="wrap">
        <div className="stats-grid reveal">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
