import { Fragment } from "react";

const CURES = [
  "Cures minceur",
  "Cryolipolyse",
  "Radiofréquence",
  "Lipocavitation",
  "Remodelage corporel",
  "HIFU",
  "Anti-âge",
  "HydraFacial",
  "Microneedling",
  "Cryothérapie",
  "Épilation laser",
];

function Track() {
  return (
    <span className="marquee-seq">
      {CURES.map((cure) => (
        <Fragment key={cure}>
          <span className="cure-item">{cure}</span>
          <span className="dot-sep" aria-hidden="true">
            <svg viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 0l1.4 4.6L12 6l-4.6 1.4L6 12l-1.4-4.6L0 6l4.6-1.4z" />
            </svg>
          </span>
        </Fragment>
      ))}
    </span>
  );
}

export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-viewport">
        <div className="marquee-track">
          <Track />
          <Track />
        </div>
      </div>
    </div>
  );
}
