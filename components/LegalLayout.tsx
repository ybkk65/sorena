import Link from "next/link";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="legal">
      <div className="legal-wrap">
        <Link className="legal-back" href="/">
          ← Retour au site
        </Link>
        <h1>{title}</h1>
        {updated ? (
          <p className="legal-updated">Dernière mise à jour : {updated}</p>
        ) : null}
        {children}
      </div>
    </main>
  );
}
