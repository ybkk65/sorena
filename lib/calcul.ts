/**
 * Calculateur « créneaux perdus » : ce que coûtent, chaque mois, les créneaux
 * restés vides et les rendez-vous non honorés.
 *
 * ⚠️ Uniquement à partir des réponses de la visiteuse : aucune moyenne de
 * marché, aucun taux de récupération promis. Le résultat est un chiffre
 * d'affaires non réalisé, pas une promesse de gain.
 */

export const SEMAINES_PAR_MOIS = 52 / 12;

export interface Borne {
  min: number;
  max: number;
  pas: number;
  /** Valeur de départ du curseur (à ajuster par la visiteuse, pas une moyenne). */
  depart: number;
}

export const BORNES = {
  prix: { min: 20, max: 400, pas: 5, depart: 90 },
  videsParSemaine: { min: 0, max: 40, pas: 1, depart: 6 },
  absencesParMois: { min: 0, max: 30, pas: 1, depart: 4 },
} as const satisfies Record<string, Borne>;

export interface Reponses {
  prix: number;
  videsParSemaine: number;
  absencesParMois: number;
}

export interface Estimation {
  videsParMois: number;
  absencesParMois: number;
  parMois: number;
  parAn: number;
}

/** Arrondi à la dizaine : c'est un ordre de grandeur, pas une comptabilité. */
const arrondi = (n: number): number => Math.round(n / 10) * 10;

const borner = (n: number, b: Borne): number => Math.min(b.max, Math.max(b.min, n));

export function estimerCreneauxPerdus(r: Reponses): Estimation {
  const prix = borner(r.prix, BORNES.prix);
  const vides = borner(r.videsParSemaine, BORNES.videsParSemaine);
  const absences = borner(r.absencesParMois, BORNES.absencesParMois);

  const videsParMois = arrondi(vides * SEMAINES_PAR_MOIS * prix);
  const absencesParMois = arrondi(absences * prix);
  const parMois = videsParMois + absencesParMois;

  return { videsParMois, absencesParMois, parMois, parAn: parMois * 12 };
}

const EUROS = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

export function formatEuros(n: number): string {
  return EUROS.format(n);
}
