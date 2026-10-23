import { ARTICLES } from "./articles";
import { LANDINGS } from "./landings";
import type { Article, LandingPage } from "./types";

export interface LinkCard {
  path: string;
  kicker: string;
  title: string;
  text: string;
}

const STATIC_CARDS: readonly LinkCard[] = [
  {
    path: "/a-propos",
    kicker: "La maison",
    title: "Qui est derrière Sorena",
    text: "Sofya, notre façon de travailler, et pourquoi nous ne retenons qu'une maison par zone.",
  },
  {
    path: "/ressources",
    kicker: "Ressources",
    title: "Tous nos guides",
    text: "Acquisition, publicité, agenda et réglementation : nos guides pour les centres et instituts.",
  },
];

export function getLanding(slug: string): LandingPage | undefined {
  return LANDINGS.find((p) => p.slug === slug);
}

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

/** Articles triés du plus récent au plus ancien. */
export function articlesByDate(): Article[] {
  return [...ARTICLES].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

function landingCard(page: LandingPage): LinkCard {
  return {
    path: `/${page.slug}`,
    kicker: page.kind === "metier" ? "Pour qui" : "Le système",
    title: page.cardTitle,
    text: page.cardText,
  };
}

export function articleCard(article: Article): LinkCard {
  return {
    path: `/ressources/${article.slug}`,
    kicker: article.category,
    title: article.title,
    text: article.excerpt,
  };
}

/** Résout une liste de chemins internes en cartes ; ignore les chemins inconnus. */
export function resolveCards(paths: readonly string[]): LinkCard[] {
  return paths.flatMap((path) => {
    const fixed = STATIC_CARDS.find((c) => c.path === path);
    if (fixed) return [fixed];

    if (path.startsWith("/ressources/")) {
      const article = getArticle(path.slice("/ressources/".length));
      return article ? [articleCard(article)] : [];
    }

    const landing = getLanding(path.slice(1));
    return landing ? [landingCard(landing)] : [];
  });
}

export function landingsByKind(kind: LandingPage["kind"]): LandingPage[] {
  return LANDINGS.filter((p) => p.kind === kind);
}
