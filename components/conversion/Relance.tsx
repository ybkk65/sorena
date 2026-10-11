interface RelanceProps {
  texte: string;
  surFonce?: boolean;
  children: React.ReactNode;
}

/** Relance en bas de section : une phrase, puis les actions. */
export function Relance({ texte, surFonce = false, children }: RelanceProps) {
  return (
    <div className={`cv-relance reveal${surFonce ? " on-dark" : ""}`}>
      <p>{texte}</p>
      {children}
    </div>
  );
}
