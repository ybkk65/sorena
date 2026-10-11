import { Arrow } from "../Arrow";
import { CONTACT_EMAIL } from "@/lib/site";

/** L'unique objectif de la page : le diagnostic, réservé dans l'agenda (#agenda). */
export const ANCRE_AGENDA = "#agenda";
export const ANCRE_CALCUL = "#calcul";

type Secondaire = "calcul" | "email" | "aucun";

interface ActionsProps {
  /** Identifiant de l'emplacement (data-cta), pour le suivi des clics. */
  source: string;
  secondaire?: Secondaire;
  /** Fond sombre : bouton principal rose, secondaire clair. */
  surFonce?: boolean;
  className?: string;
}

function ArrowDown() {
  return (
    <svg className="arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M8 3v10M4 9l4 4 4-4" />
    </svg>
  );
}

/**
 * Le rendez-vous en principal, toujours. En second : le calculateur (hero,
 * juste au-dessus de lui) ou un e-mail à Sofya (plus bas dans la page).
 */
export function Actions({ source, secondaire = "email", surFonce = false, className = "" }: ActionsProps) {
  return (
    <div className={`cv-actions ${className}`}>
      <a
        className={`btn ${surFonce ? "btn-primary" : "btn-dark"} cv-btn`}
        href={ANCRE_AGENDA}
        data-cta={source}
      >
        Réserver mon diagnostic offert
        <Arrow />
      </a>

      {secondaire === "calcul" ? (
        <a className={`cv-btn-sec${surFonce ? " on-dark" : ""}`} href={ANCRE_CALCUL} data-cta={`${source}-calcul`}>
          Calculer mes créneaux perdus
          <ArrowDown />
        </a>
      ) : null}

      {secondaire === "email" ? (
        <a
          className={`cv-btn-sec${surFonce ? " on-dark" : ""}`}
          href={`mailto:${CONTACT_EMAIL}`}
          data-cta={`${source}-email`}
        >
          Écrire à Sofya
        </a>
      ) : null}
    </div>
  );
}
