import type { Metadata } from "next";
import { plainText } from "./text";
import type { Article, Faq, LandingPage } from "@/content/types";
import { ORGANIZATION_ID, SITE_NAME, SITE_URL, WEBSITE_ID, absoluteUrl } from "./site";

const OG_IMAGE = {
  url: "/assets/og-sorena.jpg",
  width: 1200,
  height: 630,
  alt: "Sorena, agence marketing esthétique",
};

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}

/** Metadata Next.js cohérentes : canonical, Open Graph, Twitter. */
export function pageMetadata(input: PageMetaInput): Metadata {
  const { title, description, path, type = "website" } = input;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} · ${SITE_NAME}`,
      description,
      url: absoluteUrl(path),
      siteName: SITE_NAME,
      locale: "fr_FR",
      type,
      images: [OG_IMAGE],
      ...(type === "article"
        ? {
            publishedTime: input.publishedTime,
            modifiedTime: input.modifiedTime ?? input.publishedTime,
            authors: [absoluteUrl("/a-propos")],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${SITE_NAME}`,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

export const FOUNDER = {
  "@type": "Person",
  "@id": `${SITE_URL}/a-propos#sofya`,
  name: "Sofya",
  jobTitle: "Fondatrice de Sorena",
  worksFor: { "@id": ORGANIZATION_ID },
  url: absoluteUrl("/a-propos"),
} as const;

export function faqSchema(faq: readonly Faq[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: plainText(f.q),
      acceptedAnswer: { "@type": "Answer", text: plainText(f.a) },
    })),
  };
}

export function serviceSchema(page: LandingPage): Record<string, unknown> {
  const url = absoluteUrl(`/${page.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: plainText(page.h1),
    description: page.metaDescription,
    url,
    serviceType: "Acquisition de clientèle et marketing",
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "Country", name: "France" },
    audience: { "@type": "BusinessAudience", name: page.cardTitle },
  };
}

export function articleSchema(article: Article): Record<string, unknown> {
  const url = absoluteUrl(`/ressources/${article.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: plainText(article.title),
    description: article.metaDescription,
    url,
    mainEntityOfPage: url,
    inLanguage: "fr-FR",
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    articleSection: article.category,
    image: absoluteUrl(OG_IMAGE.url),
    author: FOUNDER,
    publisher: { "@id": ORGANIZATION_ID },
    isPartOf: { "@id": WEBSITE_ID },
  };
}
