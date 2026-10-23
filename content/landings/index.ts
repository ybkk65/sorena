import type { LandingPage } from "../types";
import { centreLaser } from "./centre-laser";
import { centreMinceur } from "./centre-minceur";
import { iaPriseDeRendezVous } from "./ia-prise-de-rendez-vous";
import { institutDeBeaute } from "./institut-de-beaute";
import { publiciteFacebookInstagram } from "./publicite-facebook-instagram";
import { rendezVousNonHonores } from "./rendez-vous-non-honores";

/** Ordre = ordre d'affichage (accueil « Pour qui », footer). */
export const LANDINGS: readonly LandingPage[] = [
  // Métiers
  institutDeBeaute,
  centreLaser,
  centreMinceur,
  // Leviers du système
  publiciteFacebookInstagram,
  iaPriseDeRendezVous,
  rendezVousNonHonores,
];
