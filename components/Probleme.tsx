const PAINS = [
  "Elles demandent les tarifs… puis disparaissent.",
  "Vos cures premium restent dures à vendre régulièrement.",
  "Elles prennent rendez-vous… puis ne viennent pas.",
  "Les « leads » qu’on vous a déjà envoyés chassaient les bons plans et ne sont jamais revenus.",
];

export function Probleme() {
  return (
    <section className="section section-deep constat-section">
      <div className="wrap">
        <div className="constat-head reveal on-dark">
          <span className="kicker">LE CONSTAT</span>

          <h2 className="constat-title">
            Vous avez des demandes.
            <br />
            <em>Mais trop peu deviennent de vraies clientes.</em>
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
            Le problème n’a jamais été d’avoir <em>plus</em> de demandes. C’est
            d’avoir les <em>bonnes</em>. C’est exactement ce qu’on installe.
          </p>
        </div>
      </div>
    </section>
  );
}
