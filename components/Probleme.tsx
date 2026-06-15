const PAINS = [
  "Elles demandent les tarifs puis disparaissent",
  "Vos cures premium restent difficiles à vendre régulièrement",
  "Elles prennent rendez-vous… puis ne viennent pas",
  "Votre centre dépend encore trop d’Instagram, du bouche-à-oreille ou des périodes creuses",
];

export function Probleme() {
  return (
    <section className="section section-deep grain constat-section">
      <div className="wrap">
        <div className="constat-head reveal on-dark">
          <span className="kicker">LE CONSTAT</span>

          <h2 className="constat-title">
            Vous avez des demandes.
            <br />
            <em>Mais trop peu deviennent de vraies clientes.</em>
          </h2>
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
          <p>C’est précisément ce que notre système cherche à résoudre.</p>
        </div>
      </div>
    </section>
  );
}