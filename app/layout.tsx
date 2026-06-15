import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sorena — Remplissez votre agenda de clientes qualifiées",
  description:
    "Vous réalisez les soins, on remplit votre agenda. Un système IA qui répond, qualifie et relance les bonnes clientes pour vos cures premium, jour et nuit — sans diluer votre image.",
  openGraph: {
    title: "Sorena — Remplissez votre agenda de clientes qualifiées",
    description:
      "Un système IA qui fait venir les bonnes clientes pour vos cures premium, sans dépendre uniquement d'Instagram ou du bouche-à-oreille.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,400;12..96,500;12..96,600;12..96,700&family=Geist+Mono:wght@400;500&family=Geist:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body data-tone="wine" data-accent="rose">{children}</body>
    </html>
  );
}
