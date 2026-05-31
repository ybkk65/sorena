import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sorena — Système d'acquisition pour centres esthétiques premium",
  description:
    "Sorena installe un système qui remplit votre agenda avec des clientes qualifiées pour vos cures premium — sans casser votre image, sans promo permanente. Résultats en moins de 30 jours.",
  openGraph: {
    title: "Sorena — Remplissez vos cabines avec des clientes premium",
    description:
      "Le système d'acquisition pensé pour les centres esthétiques qui vendent des cures haute valeur.",
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
