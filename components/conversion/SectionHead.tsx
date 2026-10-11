interface SectionHeadProps {
  /** Numéro éditorial de la section (« 01 »). */
  num?: string;
  label: string;
  titre: React.ReactNode;
  sousTitre?: React.ReactNode;
  /** Section sur fond sombre. */
  surFonce?: boolean;
  /** Colonne étroite (mises en page en deux colonnes) : tout empilé. */
  aGauche?: boolean;
  /** Id du titre (aria-labelledby de la section). */
  id?: string;
}

/**
 * En-tête de section éditorial, toujours aligné à gauche : numéro + étiquette
 * et grand titre à gauche, sous-titre à droite (empilés en colonne étroite).
 */
export function SectionHead({ num, label, titre, sousTitre, surFonce = false, aGauche = false, id }: SectionHeadProps) {
  return (
    <div className={`cv-head reveal${surFonce ? " on-dark" : ""}${aGauche ? " is-stack" : ""}`}>
      <div className="cv-head-main">
        <span className="cv-label">
          {num ? <span className="cv-label-num">{num}</span> : null}
          {label}
        </span>
        <h2 className="cv-title" id={id}>
          {titre}
        </h2>
      </div>
      {sousTitre ? <p className="cv-sub">{sousTitre}</p> : null}
    </div>
  );
}
