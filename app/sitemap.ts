import type { MetadataRoute } from "next";
import { ARTICLES } from "@/content/articles";
import { LANDINGS } from "@/content/landings";
import { assertContentValid } from "@/content/validate";
import { SITE_URL } from "@/lib/site";

// Date de la dernière révision éditoriale des pages statiques. À mettre à jour
// quand leur contenu change (un lastModified = "maintenant" à chaque build
// n'apprend rien à Google et finit par être ignoré).
const STATIC_UPDATED = new Date("2026-10-08");

export default function sitemap(): MetadataRoute.Sitemap {
  // Le sitemap est généré au build : un lien interne cassé, un slug en double
  // ou une meta hors limites fait échouer le build au lieu de partir en prod.
  assertContentValid();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: STATIC_UPDATED, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/a-propos`, lastModified: STATIC_UPDATED, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/ressources`, lastModified: STATIC_UPDATED, changeFrequency: "weekly", priority: 0.7 },
  ];

  const landings: MetadataRoute.Sitemap = LANDINGS.map((p) => ({
    url: `${SITE_URL}/${p.slug}`,
    lastModified: STATIC_UPDATED,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const articles: MetadataRoute.Sitemap = ARTICLES.map((a) => ({
    url: `${SITE_URL}/ressources/${a.slug}`,
    lastModified: new Date(a.updatedAt ?? a.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...landings, ...articles];
}
