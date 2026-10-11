import type { Article } from "../types";
import { acompteRendezVousInstitut } from "./acompte-rendez-vous-institut";
import { afficheRendezVousNonHonore } from "./affiche-rendez-vous-non-honore";
import { attirerClientesInstitut } from "./attirer-clientes-institut";
import { budgetPubliciteFacebookInstitut } from "./budget-publicite-facebook-institut";
import { decretEpilationLaser } from "./decret-epilation-laser";
import { decretPubliciteChirurgieEsthetique } from "./decret-publicite-chirurgie-esthetique";
import { ficheClientEpilationLaser } from "./fiche-client-epilation-laser";
import { publiciteMedecineEsthetique } from "./publicite-medecine-esthetique";
import { rentabiliteEpilationLaser } from "./rentabilite-epilation-laser";

export const ARTICLES: readonly Article[] = [
  // Acquisition & publicité
  attirerClientesInstitut,
  budgetPubliciteFacebookInstitut,
  rentabiliteEpilationLaser,
  // Agenda & rendez-vous
  acompteRendezVousInstitut,
  afficheRendezVousNonHonore,
  // Réglementation
  decretEpilationLaser,
  ficheClientEpilationLaser,
  publiciteMedecineEsthetique,
  decretPubliciteChirurgieEsthetique,
];
