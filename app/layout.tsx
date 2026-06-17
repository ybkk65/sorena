import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

const SITE_URL = "https://www.sorenaagency.com";

// Polices auto-hébergées : zéro requête bloquante vers Google Fonts, pas de
// FOUT, CLS réduit. Geist via le paquet officiel Vercel ; Instrument Serif
// via next/font/google.
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sorena — Remplissez votre agenda de clientes qualifiées",
    template: "%s · Sorena",
  },
  description:
    "Vous réalisez les soins, on remplit votre agenda. Un système IA qui répond, qualifie et relance les bonnes clientes pour vos cures premium, jour et nuit — sans diluer votre image.",
  applicationName: "Sorena",
  keywords: [
    "acquisition clientes centre esthétique",
    "remplir agenda institut de beauté",
    "système IA prise de rendez-vous",
    "cures premium médecine esthétique",
    "agence marketing centre esthétique",
    "Sorena",
  ],
  authors: [{ name: "Sorena Agency" }],
  creator: "Sorena Agency",
  publisher: "Sorena Agency",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Sorena — Remplissez votre agenda de clientes qualifiées",
    description:
      "Un système IA qui fait venir les bonnes clientes pour vos cures premium, sans dépendre uniquement d'Instagram ou du bouche-à-oreille.",
    url: SITE_URL,
    siteName: "Sorena",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/assets/image_salon.png",
        width: 1698,
        height: 926,
        alt: "Sorena — système d'acquisition pour centres esthétiques premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sorena — Remplissez votre agenda de clientes qualifiées",
    description:
      "Un système IA qui fait venir les bonnes clientes pour vos cures premium.",
    images: ["/assets/image_salon.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Sorena Agency",
      url: SITE_URL,
      logo: `${SITE_URL}/assets/sorena-logo.png`,
      email: "contact@sorenaagency.com",
      description:
        "Sorena met en place un système IA qui attire, qualifie et relance les bonnes clientes pour les centres esthétiques proposant des cures premium.",
      sameAs: [
        "https://www.instagram.com/sorenaagency",
        "https://www.facebook.com/share/1P38aCKRgs/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Sorena",
      inLanguage: "fr-FR",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "ProfessionalService",
      name: "Sorena Agency",
      image: `${SITE_URL}/assets/image_salon.png`,
      url: SITE_URL,
      email: "contact@sorenaagency.com",
      priceRange: "€€€",
      areaServed: "FR",
      description:
        "Acquisition de clientes qualifiées pour les centres esthétiques premium grâce à un système augmenté par l'IA.",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body data-tone="wine" data-accent="rose">{children}</body>
    </html>
  );
}
