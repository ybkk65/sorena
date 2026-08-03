import type { Metadata } from "next";
import { EB_Garamond, Hanken_Grotesk, Cormorant_Garamond } from "next/font/google";
import { MetaPixel } from "@/components/MetaPixel";
import "./globals.css";

const SITE_URL = "https://www.sorenaagency.com";

// Serif fin et délicat pour wordmark + titres : EB Garamond. Traits légers,
// old-style élégant, bien plus fin que Newsreader/Bodoni.
const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

// Serif ultra-fin (poids 300) réservé au grand "Sorena" décoratif du footer.
const cormorantThin = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-thin",
  display: "swap",
});

// Corps + labels : Hanken Grotesk. Grotesque raffiné et chaleureux, plus
// signé qu'un Geist/Inter générique — casse le rendu "template IA".
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sorena · Acquisition de clientèle pour centres, cliniques et cabinets esthétiques",
    template: "%s · Sorena",
  },
  description:
    "Des clientes qui viennent, paient le juste prix et reviennent. Nous installons le système qui les fait venir, sans brader votre image.",
  applicationName: "Sorena",
  keywords: [
    "clientes qualifiées centre esthétique",
    "remplir agenda institut de beauté",
    "acquisition clientes cures d'exception",
    "publicité Meta Instagram esthétique",
    "agence marketing centre esthétique",
    "qualification IA prise de rendez-vous",
    "acquisition patientèle médecine esthétique",
    "marketing cabinet esthétique",
    "épilation laser médecin publicité",
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
    title: "Sorena · Acquisition de clientèle pour centres, cliniques et cabinets esthétiques",
    description:
      "Pas plus de leads, les bonnes : qualifiées, fidèles, prêtes à investir dans vos cures et vos actes.",
    url: SITE_URL,
    siteName: "Sorena",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/assets/og-sorena.jpg",
        width: 1200,
        height: 630,
        alt: "Sorena · Acquisition de clientèle pour centres, cliniques et cabinets esthétiques",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sorena · Acquisition de clientèle pour centres, cliniques et cabinets esthétiques",
    description:
      "Pas plus de leads, les bonnes : qualifiées, fidèles, prêtes à investir dans vos cures et vos actes.",
    images: ["/assets/og-sorena.jpg"],
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
      email: "sofya@sorenaagency.com",
      description:
        "Sorena installe le système qui fait venir les bonnes clientes pour les centres, cliniques et cabinets esthétiques : publicité ciblée et qualification par IA en coulisse, sans brader votre image.",
      sameAs: [
        "https://www.instagram.com/sorenaa.agency/",
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
        "Sorena fait venir les bonnes clientes pour les centres, cliniques et cabinets esthétiques : publicité ciblée (Meta, Instagram) et qualification par IA en coulisse, sans brader l'image du centre.",
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
      className={`${hanken.variable} ${garamond.variable} ${cormorantThin.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body data-tone="wine" data-accent="rose">
        {children}
        <MetaPixel />
      </body>
    </html>
  );
}
