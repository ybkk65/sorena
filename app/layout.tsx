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
    default: "Sorena — Les bonnes clientes, pas plus de leads",
    template: "%s · Sorena",
  },
  description:
    "Des clientes qui viennent, paient le juste prix et reviennent. On installe le système qui les fait venir — sans brader votre image.",
  applicationName: "Sorena",
  keywords: [
    "clientes qualifiées centre esthétique",
    "remplir agenda institut de beauté",
    "acquisition clientes cures premium",
    "publicité Meta Instagram esthétique",
    "agence marketing centre esthétique",
    "qualification IA prise de rendez-vous",
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
    title: "Sorena — Les bonnes clientes, pas plus de leads",
    description:
      "Pas plus de leads, les bonnes : qualifiées, fidèles, prêtes à investir dans vos cures. Sans brader votre image.",
    url: SITE_URL,
    siteName: "Sorena",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/assets/image_salon.jpg",
        width: 2000,
        height: 1090,
        alt: "Sorena, les bonnes clientes pour les centres esthétiques premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sorena — Les bonnes clientes, pas plus de leads",
    description:
      "Pas plus de leads, les bonnes : qualifiées, fidèles, prêtes à investir dans vos cures.",
    images: ["/assets/image_salon.jpg"],
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
        "Sorena installe le système qui fait venir les bonnes clientes pour les centres esthétiques premium : publicité ciblée et qualification par IA en coulisse, sans brader votre image.",
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
      image: `${SITE_URL}/assets/image_salon.jpg`,
      url: SITE_URL,
      email: "sofya@sorenaagency.com",
      priceRange: "€€€",
      areaServed: "FR",
      description:
        "Sorena fait venir les bonnes clientes pour les centres esthétiques premium : publicité ciblée (Meta, Instagram) et qualification par IA en coulisse, sans brader l'image du centre.",
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
