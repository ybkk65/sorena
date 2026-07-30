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
          timers.push(window.setTimeout(run, 3600));
          return;
        }
        const key = ORDER[i];
        setRevealed((prev) => new Set(prev).add(key));
        setCount((c) => c + 1);
        i++;
        timers.push(window.setTimeout(tick, 440));
      };
      timers.push(window.setTimeout(tick, 700));
    };
    run();
    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <section id="resultat" className="sorena-agenda">
      <div className="wrap">
        <div className="head">
          <span className="kicker">L&apos;agenda</span>
          <h2 className="title">
            Pendant que vous travaillez,<br />
            <em>les bonnes clientes arrivent.</em>
          </h2>
          <p className="sub">
            Des clientes qualifiées, qui paient plein tarif et qui se présentent,
            tombent dans votre agenda. Sans que vous gériez chaque échange à la
            main.
          </p>
        </div>

        <div className="card">
          <div className="card-head">
            <h3>Votre semaine</h3>
            <span className="badge">{count} confirmés</span>
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
          background: linear-gradient(165deg, #3a0e17 0%, #240a10 100%);
          padding: clamp(72px, 9vw, 118px) 0 clamp(80px, 10vw, 128px);
        }
        .wrap {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 clamp(22px, 5vw, 88px);
        }
        .head { max-width: 760px; }
        .kicker { color: #d99a8f; margin-bottom: clamp(20px, 2.4vw, 30px); }
        .title {
          font-family: var(--display); font-weight: 400;
          line-height: 1.08;
          font-size: clamp(28px, 3.4vw, 46px);
          letter-spacing: -0.005em;
          color: #f4e7df;
        }
        .title em { font-style: italic; color: #eec7bd; }
        .sub {
          max-width: 560px; margin: clamp(20px, 2.4vw, 28px) 0 0;
          font-weight: 300; font-size: clamp(15px, 1.5vw, 17px);
          line-height: 1.65; color: #c9b1a9;
        }
        .card {
          margin-top: clamp(44px, 5vw, 68px);
          background: rgba(244, 231, 223, 0.035);
          border: 1px solid rgba(244, 231, 223, 0.1);
          border-radius: 16px;
          padding: clamp(22px, 3vw, 34px) clamp(22px, 3vw, 34px) clamp(20px, 2.6vw, 28px);
        }
        .card-head {
          display: flex; align-items: baseline; justify-content: space-between;
          margin-bottom: clamp(20px, 2.6vw, 28px); gap: 16px;
        }
        .card-head h3 {
          font-family: var(--display); font-weight: 500;
          font-size: clamp(18px, 2vw, 22px); color: #f4e7df; letter-spacing: -0.005em;
        }
        .badge {
          font-family: var(--sans);
          font-size: 11.5px; font-weight: 500; letter-spacing: 0.14em;
          text-transform: uppercase; color: #d99a8f; white-space: nowrap;
        }
        .scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; }
        /* min() : la grille ne dépasse jamais son conteneur (donc jamais le
           viewport), sans dépendre d'une media query styled-jsx (peu fiable). */
        .grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px; min-width: min(640px, 100%); }
        .col { display: flex; flex-direction: column; gap: 8px; }
        .day {
          text-align: center; font-size: 10px; letter-spacing: 0.22em;
          text-transform: uppercase; color: rgba(244, 231, 223, 0.4); padding-bottom: 6px;
        }
        .slot {
          height: 46px; border-radius: 9px; display: flex;
          align-items: center; justify-content: center; font-size: 13.5px;
        }
        .slot.empty { border: 1px solid rgba(244, 231, 223, 0.08); }
        .slot.appt {
          background: rgba(238, 199, 189, 0.92); color: #3a0f18; font-weight: 500;
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .slot.appt.is-hidden { opacity: 0; transform: translateY(5px); }
        .foot {
          text-align: left; margin-top: clamp(20px, 2.6vw, 28px);
          font-size: 12.5px; letter-spacing: 0.04em; color: rgba(244, 231, 223, 0.38);
        }
        @media (max-width: 640px) {
          .card { padding: 18px 14px 16px; border-radius: 14px; }
          .card-head { margin-bottom: 18px; flex-wrap: wrap; }
          /* Le calendrier tient dans l'écran : plus de scroll horizontal */
          .scroll { overflow-x: visible; }
          .grid { min-width: 0; gap: 5px; }
          .col { gap: 5px; }
          .day { font-size: 8.5px; letter-spacing: 0.06em; padding-bottom: 3px; }
          .slot {
            height: 40px; border-radius: 8px; font-size: 10px;
            padding: 0 1px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;
          }
        }
        @media (max-width: 380px) {
          .slot { height: 36px; font-size: 9px; }
          .grid, .col { gap: 4px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .slot.appt { transition: none; }
          .slot.appt.is-hidden { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
}
