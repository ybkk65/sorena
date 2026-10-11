/**
 * Modèle de contenu des pages SEO.
 *
 * Les champs texte acceptent une syntaxe inline minimale (voir RichText) :
 *   **gras**   *italique*   [libellé](/chemin-interne ou https://externe)
 * Aucun HTML n'est interprété.
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: readonly string[] }
  | { type: "ol"; items: readonly string[] }
  | { type: "callout"; title?: string; text: string }
  | { type: "quote"; text: string; cite?: string }
  | {
      type: "table";
      caption?: string;
      head: readonly string[];
      rows: readonly (readonly string[])[];
    }
  /** Encart de conversion vers le diagnostic offert (#agenda). */
  | { type: "cta"; title: string; text: string };

export interface Faq {
  q: string;
  a: string;
}

export interface Source {
  label: string;
  url: string;
}

export interface Step {
  title: string;
  text: string;
}

export type LandingKind = "metier" | "service";

export interface LandingPage {
  slug: string;
  kind: LandingKind;
  /** Libellé court pour les cartes, le footer et le fil d'Ariane. */
  cardTitle: string;
  /** Accroche de carte (1 phrase). */
  cardText: string;
  /** Balise <title> sans le suffixe de marque (ajouté par le template). ≤ 60 car. */
  metaTitle: string;
  /** 140 à 160 caractères. */
  metaDescription: string;
  eyebrow: string;
  /** H1 (porte le mot-clé principal). `*...*` = partie en italique. */
  h1: string;
  lead: string;
  /** 3 à 4 points « en bref » affichés à côté du H1. */
  highlights: readonly string[];
  pains: { title: string; items: readonly string[] };
  steps: { title: string; intro?: string; items: readonly Step[] };
  body: readonly Block[];
  faq: readonly Faq[];
  /** Chemins internes à proposer en fin de page. */
  related: readonly string[];
  sources?: readonly Source[];
}

export type ArticleCategory =
  | "Acquisition"
  | "Publicité"
  | "Agenda & rendez-vous"
  | "Réglementation";

export interface Article {
  slug: string;
  category: ArticleCategory;
  /** H1. */
  title: string;
  /** Balise <title> sans suffixe de marque. ≤ 60 car. */
  metaTitle: string;
  metaDescription: string;
  /** Résumé pour les cartes de la page Ressources. */
  excerpt: string;
  /** Dates ISO (AAAA-MM-JJ). */
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  /** Chapô : 1 à 3 paragraphes avant le sommaire. */
  intro: readonly string[];
  body: readonly Block[];
  faq?: readonly Faq[];
  sources?: readonly Source[];
  related: readonly string[];
}
