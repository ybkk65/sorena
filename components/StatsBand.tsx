/**
 * Bande stats — grands chiffres éditoriaux (façon KSENIA "50+ / 20+ / 5+").
 * Différenciateurs honnêtes de Sorena, sur crème.
 */
const STATS = [
  { num: "7 jours", label: "Mise en place du système" },
  { num: "24/7", label: "Qualification par IA" },
  { num: "1 / zone", label: "Un seul centre par secteur" },
  { num: "Offert", label: "Diagnostic stratégique" },
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
