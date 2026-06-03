const PAINS = [
  "Des prospects qui demandent les tarifs avant même de comprendre vos soins",
  "Des cures premium difficiles à vendre régulièrement",
  "Des rendez-vous annulés, reportés ou jamais honorés",
  "Une acquisition encore trop dépendante du bouche-à-oreille ou du hasard",
];

export function Probleme() {
  return (
    <section className="section section-deep grain constat-section">
      <div className="wrap">
        <div className="constat-head reveal on-dark">
          <span className="kicker">LE CONSTAT</span>
          <h2 className="constat-title">
            Le problème n'est pas toujours le manque de demandes.
            <br />
            <em>C'est ce qu'elles deviennent après.</em>
          </h2>
          <div className="constat-lead">
            <p>
              Entre les comparaisons de prix, les prospects qui disparaissent et les rendez-vous
              qui n'aboutissent pas, vendre vos cures premium de façon régulière devient vite
              difficile à piloter.
            </p>
            <p>
              Le vrai défi n'est pas uniquement d'attirer davantage de demandes. C'est d'attirer
              les <strong>bonnes clientes</strong> — et de réussir à les convertir.
            </p>
          </div>
        </div>

        <div className="pain-grid">
          {PAINS.map((p, i) => (
            <div
              key={p}
              className="pain-card reveal"
              style={{ "--rd": `${i * 0.08}s` } as React.CSSProperties}
            >
              <span className="pain-mark" aria-hidden="true">
                <svg viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 0l1.4 4.6L12 6l-4.6 1.4L6 12l-1.4-4.6L0 6l4.6-1.4z" />
                </svg>
              </span>
              <p className="pain-text">{p}</p>
            </div>
          ))}
        </div>

        <div className="constat-transition reveal">
          <span className="constat-transition-line" aria-hidden="true" />
          <p>C'est précisément ce que notre système cherche à résoudre.</p>
        </div>
      </div>
    </section>
  );
}
