const PAINS = [
  "Elles demandent vos tarifs, puis disparaissent.",
  "Vos cures d’exception restent difficiles à remplir avec régularité.",
  "Elles réservent, puis ne se présentent pas.",
  "Les contacts qu’on vous avait promis cherchaient une promotion, jamais un soin.",
];

export function Probleme() {
  return (
    <section className="section section-deep constat-section">
      <div className="wrap">
        <div className="constat-head reveal on-dark">
          <span className="kicker">LE CONSTAT</span>

          <h2 className="constat-title">
            Vous ne manquez pas de demandes.
            <br />
            <em>Vous manquez de bonnes clientes.</em>
          </h2>
        </div>

        <ol className="pain-list">
          {PAINS.map((p, i) => (
            <li
              key={p}
              className="pain-row reveal"
              style={{ "--rd": `${i * 0.06}s` } as React.CSSProperties}
            >
              <span className="pain-num">{String(i + 1).padStart(2, "0")}</span>
              <p className="pain-text">{p}</p>
            </li>
          ))}
        </ol>

        <div className="constat-transition reveal">
          <span className="constat-transition-line" aria-hidden="true" />
          <p>
            Le problème n’a jamais été d’avoir <em>plus</em> de demandes, mais
            d’avoir les <em>bonnes</em>. C’est précisément ce que nous installons.
          </p>
        </div>
      </div>
    </section>
  );
}
