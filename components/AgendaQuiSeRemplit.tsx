"use client";
import { useEffect, useState } from "react";

const DAYS = ["LUN", "MAR", "MER", "JEU", "VEN", "SAM"];
const ROWS = 5;
const APPTS: Record<string, string> = {
  "0-0": "Camille", "0-2": "Nour", "0-4": "Émilie",
  "1-1": "Maya", "1-3": "Léa",
  "2-0": "Sofia", "2-3": "Élise",
  "3-1": "Lina", "3-4": "Manon",
  "4-0": "Chloé", "4-2": "Inès",
  "5-1": "Jade", "5-4": "Louise",
};
const ORDER = ["0-0","2-0","4-0","1-1","3-1","5-1","0-2","4-2","1-3","2-3","0-4","3-4","5-4"];

export default function AgendaQuiSeRemplit() {
  const [revealed, setRevealed] = useState<Set<string>>(new Set());
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setRevealed(new Set(ORDER));
      setCount(ORDER.length);
      return;
    }
    let timers: number[] = [];
    const run = () => {
      setRevealed(new Set());
      setCount(0);
      let i = 0;
      const tick = () => {
        if (i >= ORDER.length) {
          timers.push(window.setTimeout(run, 2800));
          return;
        }
        const key = ORDER[i];
        setRevealed((prev) => new Set(prev).add(key));
        setCount((c) => c + 1);
        i++;
        timers.push(window.setTimeout(tick, 360));
      };
      timers.push(window.setTimeout(tick, 600));
    };
    run();
    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <section id="resultat" className="sorena-agenda">
      <div className="wrap">
        <div className="kicker"><span>L&apos;agenda</span></div>
        <h2 className="title">
          Pendant que vous travaillez,<br />
          <em>les bonnes clientes arrivent.</em>
        </h2>
        <p className="sub">
          Des clientes qualifiées, qui paient plein tarif et qui se présentent,
          tombent dans votre agenda, sans que vous gériez chaque échange à la
          main.
        </p>

        <div className="card">
          <div className="card-head">
            <h3>Votre semaine</h3>
            <span className="badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="m8.5 12 2.5 2.5 4.5-5" />
              </svg>
              {count}&nbsp;confirmés
            </span>
          </div>

          <div className="scroll">
            <div className="grid">
              {DAYS.map((d, c) => (
                <div className="col" key={d}>
                  <div className="day">{d}</div>
                  {Array.from({ length: ROWS }).map((_, r) => {
                    const key = `${c}-${r}`;
                    const name = APPTS[key];
                    if (name) {
                      const shown = revealed.has(key);
                      return (
                        <div key={r} className={`slot appt${shown ? "" : " is-hidden"}`}>{name}</div>
                      );
                    }
                    return <div key={r} className="slot empty" />;
                  })}
                </div>
              ))}
            </div>
          </div>

          <div className="foot">10h à 18h · du lundi au samedi</div>
        </div>
      </div>

      <style jsx>{`
        .sorena-agenda {
          color: #f4e7df;
          background:
            radial-gradient(70% 45% at 50% 0%, rgba(132, 40, 56, 0.45), transparent 60%),
            radial-gradient(120% 80% at 50% 120%, #15060a, transparent 70%),
            linear-gradient(160deg, #3c0f18 0%, #1a070b 100%);
          padding: 104px 24px 116px;
        }
        .wrap { max-width: 1160px; margin: 0 auto; }
        .kicker { text-align: center; margin-bottom: 30px; }
        .kicker span {
          font-size: 13px; letter-spacing: 0.36em; text-transform: uppercase;
          color: #ebb7ac; border: 1px solid rgba(235, 183, 172, 0.4);
          border-radius: 100px; padding: 9px 22px;
        }
        .title {
          font-family: var(--display); font-weight: 400;
          text-align: center; line-height: 1.04;
          font-size: clamp(40px, 7vw, 86px); letter-spacing: -0.01em;
        }
        .title em { font-style: italic; color: #f3d2c9; }
        .sub {
          max-width: 680px; margin: 30px auto 0; text-align: center;
          font-weight: 300; font-size: clamp(16px, 2.2vw, 21px);
          line-height: 1.6; color: #d6c0b8;
        }
        .card {
          margin-top: 64px;
          background: linear-gradient(180deg, rgba(244, 231, 223, 0.06), rgba(244, 231, 223, 0.02));
          border: 1px solid rgba(244, 231, 223, 0.12);
          border-radius: 26px; padding: 38px 38px 30px;
        }
        .card-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 30px; gap: 16px; }
        .card-head h3 { font-family: var(--display); font-weight: 500; font-size: 30px; color: #f4e7df; }
        .badge {
          display: inline-flex; align-items: center; gap: 9px;
          background: rgba(243, 210, 201, 0.14); border: 1px solid rgba(235, 183, 172, 0.32);
          color: #f3d2c9; border-radius: 100px; padding: 9px 18px;
          font-size: 14px; font-weight: 500; white-space: nowrap;
        }
        .badge svg { width: 16px; height: 16px; flex: none; }
        .scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; }
        /* min() au lieu de 680px fixe : la grille ne dépasse jamais son conteneur
           (donc jamais le viewport), sans dépendre d'une media query styled-jsx
           (peu fiable ici). Large sur desktop, contenue sur mobile. */
        .grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 12px; min-width: min(680px, 100%); }
        .col { display: flex; flex-direction: column; gap: 12px; }
        .day { text-align: center; font-size: 12px; letter-spacing: 0.24em; text-transform: uppercase; color: rgba(244, 231, 223, 0.5); padding-bottom: 4px; }
        .slot { height: 54px; border-radius: 13px; display: flex; align-items: center; justify-content: center; font-size: 15px; }
        .slot.empty { border: 1px dashed rgba(244, 231, 223, 0.16); }
        .slot.appt {
          background: linear-gradient(165deg, #f3d2c9, #ebb7ac); color: #3a0f18; font-weight: 500;
          box-shadow: 0 10px 24px -14px rgba(0, 0, 0, 0.6);
          transition: opacity 0.55s ease, transform 0.55s cubic-bezier(0.2, 0.7, 0.2, 1);
        }
        .slot.appt.is-hidden { opacity: 0; transform: scale(0.92) translateY(8px); }
        .foot { text-align: center; margin-top: 30px; font-size: 14px; letter-spacing: 0.06em; color: rgba(244, 231, 223, 0.45); }
        @media (max-width: 640px) {
          .sorena-agenda { padding: 72px 14px 84px; }
          .card { padding: 22px 14px 20px; border-radius: 20px; }
          .card-head { margin-bottom: 22px; flex-wrap: wrap; }
          .card-head h3 { font-size: 22px; }
          /* Le calendrier tient dans l'écran : plus de scroll horizontal */
          .scroll { overflow-x: visible; }
          .grid { min-width: 0; gap: 6px; }
          .col { gap: 6px; }
          .day { font-size: 9px; letter-spacing: 0.08em; padding-bottom: 2px; }
          .slot {
            height: 44px;
            border-radius: 10px;
            font-size: 10.5px;
            padding: 0 1px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .foot { margin-top: 22px; font-size: 12.5px; }
        }
        @media (max-width: 380px) {
          .slot { height: 40px; font-size: 9.5px; }
          .grid, .col { gap: 5px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .slot.appt { transition: none; }
          .slot.appt.is-hidden { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
}
