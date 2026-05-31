import { Fragment } from "react";

const CURES = [
  "Cryolipolyse",
  "HydraFacial",
  "HIFU",
  "Body Contouring",
  "Anti-Âge",
  "Radiofréquence",
  "Head Spa",
  "PRP",
  "Remodeling",
  "Skin Treatments",
  "Hair Treatments",
  "Jet Peel",
  "LED Therapy",
  "Microneedling",
];

function Track() {
  return (
    <span>
      {CURES.map((cure) => (
        <Fragment key={cure}>
          <span className="cure-item">{cure}</span>
          <span className="dot-sep" aria-hidden="true">✦</span>
        </Fragment>
      ))}
    </span>
  );
}

export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <span className="marquee-label">Spécialités prises en charge</span>
      <div className="marquee-track">
        <Track />
        <Track />
      </div>
    </div>
  );
}
