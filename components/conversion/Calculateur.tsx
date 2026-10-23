"use client";

import { useId, useState } from "react";
import { BORNES, estimerCreneauxPerdus, formatEuros, type Borne, type Reponses } from "@/lib/calcul";
import { Actions } from "./Actions";

/**
 * Calculateur en quatre étapes : le soin, son prix, les créneaux vides, les
 * absences. Puis le résultat, qui se termine sur le diagnostic. Aucune
 * coordonnée demandée pour voir le résultat.
 */

/** `nom` : le soin tel qu'il est repris dans les phrases des étapes suivantes. */
const SOINS = [
  {
    id: "visage",
    label: "Soins visage",
    detail: "HydraFacial, jet peel, LED, radiofréquence, peeling",
    nom: "vos soins visage",
  },
  {
    id: "epilation",
    label: "Épilation définitive",
    detail: "Laser diode, lumière pulsée, thermolyse",
    nom: "votre épilation définitive",
  },
  {
    id: "minceur",
    label: "Minceur et remodelage",
    detail: "Cryolipolyse, radiofréquence corps, pressothérapie, remodelage manuel",
    nom: "vos soins minceur et remodelage",
  },
] as const;

type Soin = (typeof SOINS)[number];

const TOTAL = 4;
const DELAI_AVANCE = 240;

interface CurseurProps {
  id: string;
  borne: Borne;
  valeur: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
  libelle: string;
}

function Curseur({ id, borne, valeur, onChange, format, libelle }: CurseurProps) {
  return (
    <div className="calc-curseur">
      <label htmlFor={id} className="calc-valeur">
        {format(valeur)}
        <span className="sr-only"> : {libelle}</span>
      </label>
      <input
        id={id}
        type="range"
        min={borne.min}
        max={borne.max}
        step={borne.pas}
        value={valeur}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ "--p": `${((valeur - borne.min) / (borne.max - borne.min)) * 100}%` } as React.CSSProperties}
      />
      <div className="calc-bornes" aria-hidden="true">
        <span>{format(borne.min)}</span>
        <span>{format(borne.max)}</span>
      </div>
    </div>
  );
}

export function Calculateur() {
  const idCurseur = useId();
  const [etape, setEtape] = useState(0);
  const [soin, setSoin] = useState<Soin | null>(null);
  const [enCours, setEnCours] = useState<Soin["id"] | null>(null);
  const [reponses, setReponses] = useState<Reponses>({
    prix: BORNES.prix.depart,
    videsParSemaine: BORNES.videsParSemaine.depart,
    absencesParMois: BORNES.absencesParMois.depart,
  });

  const maj = (champ: keyof Reponses) => (v: number) =>
    setReponses((r) => ({ ...r, [champ]: v }));

  const choisirSoin = (s: Soin) => {
    if (enCours) return;
    setEnCours(s.id);
    window.setTimeout(() => {
      setSoin(s);
      setEnCours(null);
      setEtape(1);
    }, DELAI_AVANCE);
  };

  const recommencer = () => {
    setEtape(0);
    setSoin(null);
  };

  const fini = etape === TOTAL;
  const estimation = estimerCreneauxPerdus(reponses);
  const nomSoin = soin ? soin.nom : "votre soin";

  return (
    <div className="calc-carte reveal">
      {!fini ? (
        <div className="calc-progression">
          <button
            type="button"
            className="calc-retour"
            onClick={() => setEtape((e) => Math.max(0, e - 1))}
            disabled={etape === 0}
            aria-label="Étape précédente"
          >
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M13 8H3M7 4L3 8l4 4" />
            </svg>
          </button>
          <ol className="calc-segments" aria-hidden="true">
            {Array.from({ length: TOTAL }, (_, i) => (
              <li key={i} className={i <= etape ? "is-done" : ""} />
            ))}
          </ol>
          <span className="calc-compteur">
            {etape + 1}/{TOTAL}
          </span>
        </div>
      ) : null}

      {etape === 0 ? (
        <div className="calc-etape">
          <h3>Le soin que vous voulez remplir en premier</h3>
          <p className="calc-aide">Celui dont les créneaux vous manquent le plus.</p>
          <div className="calc-choix">
            {SOINS.map((s) => (
              <button
                key={s.id}
                type="button"
                className={`calc-option${enCours === s.id || soin?.id === s.id ? " is-actif" : ""}`}
                onClick={() => choisirSoin(s)}
                aria-pressed={soin?.id === s.id}
              >
                <span>
                  <strong>{s.label}</strong>
                  <small>{s.detail}</small>
                </span>
                <span className="calc-radio" aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {etape === 1 ? (
        <div className="calc-etape">
          <h3>Le prix moyen d&apos;une séance</h3>
          <p className="calc-aide">Pour {nomSoin}, faites glisser jusqu&apos;à votre tarif.</p>
          <Curseur
            id={`${idCurseur}-prix`}
            borne={BORNES.prix}
            valeur={reponses.prix}
            onChange={maj("prix")}
            format={formatEuros}
            libelle="prix moyen d'une séance"
          />
          <button type="button" className="btn btn-dark calc-suivant" onClick={() => setEtape(2)}>
            Continuer
          </button>
        </div>
      ) : null}

      {etape === 2 ? (
        <div className="calc-etape">
          <h3>Les créneaux restés vides sur une semaine type</h3>
          <p className="calc-aide">Les heures où une cabine aurait pu accueillir une cliente.</p>
          <Curseur
            id={`${idCurseur}-vides`}
            borne={BORNES.videsParSemaine}
            valeur={reponses.videsParSemaine}
            onChange={maj("videsParSemaine")}
            format={(v) => `${v} créneau${v > 1 ? "x" : ""}`}
            libelle="créneaux vides par semaine"
          />
          <button type="button" className="btn btn-dark calc-suivant" onClick={() => setEtape(3)}>
            Continuer
          </button>
        </div>
      ) : null}

      {etape === 3 ? (
        <div className="calc-etape">
          <h3>Les rendez-vous non honorés sur un mois</h3>
          <p className="calc-aide">Absences et annulations de dernière minute, sans remplacement.</p>
          <Curseur
            id={`${idCurseur}-absences`}
            borne={BORNES.absencesParMois}
            valeur={reponses.absencesParMois}
            onChange={maj("absencesParMois")}
            format={(v) => `${v} rendez-vous`}
            libelle="rendez-vous non honorés par mois"
          />
          <button type="button" className="btn btn-dark calc-suivant" onClick={() => setEtape(4)}>
            Voir mon estimation
          </button>
        </div>
      ) : null}

      {fini ? (
        <div className="calc-resultat" aria-live="polite">
          <p className="calc-resultat-kicker">Votre estimation</p>
          <p className="calc-resultat-montant">
            {formatEuros(estimation.parMois)}
            <span> de soins non réalisés chaque mois</span>
          </p>

          <dl className="calc-detail">
            <div>
              <dt>Créneaux restés vides</dt>
              <dd>{formatEuros(estimation.videsParMois)} / mois</dd>
            </div>
            <div>
              <dt>Rendez-vous non honorés</dt>
              <dd>{formatEuros(estimation.absencesParMois)} / mois</dd>
            </div>
            <div className="is-total">
              <dt>Sur une année</dt>
              <dd>{formatEuros(estimation.parAn)}</dd>
            </div>
          </dl>

          <p className="calc-note">
            Calculé à partir de vos réponses, pour {nomSoin}. Ce n&apos;est pas une
            promesse de gain : le diagnostic regarde ce qui peut être rempli dans votre zone.
          </p>

          <Actions source="calcul" secondaire="aucun" />
          <button type="button" className="calc-recommencer" onClick={recommencer}>
            Refaire le calcul
          </button>
        </div>
      ) : null}
    </div>
  );
}
