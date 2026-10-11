import type { Metadata } from "next";
import { EB_Garamond, Hanken_Grotesk, Cormorant_Garamond } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { MetaPixel } from "@/components/MetaPixel";
import { FOUNDER } from "@/lib/seo";
import {
  CONTACT_EMAIL,
  ORGANIZATION_ID,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
  WEBSITE_ID,
} from "@/lib/site";
import "./globals.css";
import "./subpages.css";
import "./conversion.css";

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
  // Purement décoratif (footer) : pas de préchargement.
  preload: false,
});

// Corps + labels : Hanken Grotesk. Grotesque raffiné et chaleureux, plus
// signé qu'un Geist/Inter générique — casse le rendu "template IA".
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const JS_FLAG_SCRIPT = "document.documentElement.classList.add('js')";

const HOME_TITLE = "Agence marketing esthétique pour centres et instituts · Sorena";
const HOME_DESCRIPTION =
  "Sorena, agence d'acquisition de clientèle pour centres esthétiques, instituts et cabinets : publicité locale, qualification par IA, acompte. Diagnostic offert.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: `%s · ${SITE_NAME}`,
  },
  description: HOME_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Sorena Agency" }],
  creator: "Sorena Agency",
  publisher: "Sorena Agency",
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
    title: HOME_TITLE,
    description:
      "Pas plus de demandes : les bonnes. Des clientes qualifiées, fidèles, prêtes à investir dans vos cures et vos soins.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/assets/og-sorena.jpg",
        width: 1200,
        height: 630,
        alt: "Sorena, agence marketing esthétique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description:
      "Pas plus de demandes : les bonnes. Des clientes qualifiées, fidèles, prêtes à investir dans vos cures et vos soins.",
    images: ["/assets/og-sorena.jpg"],
  },
};

const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "Sorena Agency",
      alternateName: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/assets/sorena-logo.png`,
      image: `${SITE_URL}/assets/og-sorena.jpg`,
      email: CONTACT_EMAIL,
      description:
        "Agence marketing esthétique : Sorena fait venir les bonnes clientes dans les centres esthétiques, instituts de beauté et cabinets, grâce à une publicité locale ciblée, une qualification des demandes par IA et un acompte à la réservation.",
      founder: FOUNDER,
      areaServed: { "@type": "Country", name: "France" },
      knowsAbout: [
        "Marketing pour instituts de beauté",
        "Publicité Facebook et Instagram",
        "Acquisition de clientèle esthétique",
        "Rendez-vous non honorés",
        "Épilation laser",
        "Cures minceur",
      ],
      sameAs: [...SOCIAL_LINKS],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "fr-FR",
      publisher: { "@id": ORGANIZATION_ID },
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
      suppressHydrationWarning
    >
      <head>
        {/* Pose la classe "js" avant le premier rendu : les animations .reveal
            ne masquent le contenu que si le JavaScript s'exécute. */}
        <script dangerouslySetInnerHTML={{ __html: JS_FLAG_SCRIPT }} />
        <JsonLd data={siteSchema} />
      </head>
      <body data-tone="wine" data-accent="rose">
        {children}
        <MetaPixel />
      </body>
    </html>
  );
}
