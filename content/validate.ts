import { ARTICLES } from "./articles";
import { LANDINGS } from "./landings";

/** Routes codées en dur dans app/ (hors contenu typé). */
const STATIC_ROUTES = ["/", "/a-propos", "/ressources", "/mentions-legales", "/confidentialite", "/cookies"];

const TITLE_MAX = 60;
const DESCRIPTION_RANGE = { min: 110, max: 170 } as const;
const INTERNAL_LINK = /\]\((\/[^)\s]*)\)/g;

function knownRoutes(): Set<string> {
  return new Set([
    ...STATIC_ROUTES,
    ...LANDINGS.map((p) => `/${p.slug}`),
    ...ARTICLES.map((a) => `/ressources/${a.slug}`),
  ]);
}

/** Retire l'ancre (#...) d'un chemin interne. */
function routeOf(path: string): string {
  const [route] = path.split("#");
  return route === "" ? "/" : route;
}

interface Entry {
  id: string;
  metaTitle: string;
  metaDescription: string;
  related: readonly string[];
  payload: unknown;
}

function entries(): Entry[] {
  return [
    ...LANDINGS.map((p) => ({ id: `/${p.slug}`, ...p, payload: p })),
    ...ARTICLES.map((a) => ({ id: `/ressources/${a.slug}`, ...a, payload: a })),
  ];
}

/** Liste des problèmes de contenu (vide = tout est conforme). */
export function contentIssues(): string[] {
  const routes = knownRoutes();
  const issues: string[] = [];
  const seen = new Set<string>();

  for (const e of entries()) {
    if (seen.has(e.id) || STATIC_ROUTES.includes(e.id)) issues.push(`${e.id} : slug en double`);
    seen.add(e.id);

    if (e.metaTitle.length > TITLE_MAX) {
      issues.push(`${e.id} : metaTitle de ${e.metaTitle.length} caractères (max ${TITLE_MAX})`);
    }
    const d = e.metaDescription.length;
    if (d < DESCRIPTION_RANGE.min || d > DESCRIPTION_RANGE.max) {
      issues.push(`${e.id} : metaDescription de ${d} caractères (${DESCRIPTION_RANGE.min}-${DESCRIPTION_RANGE.max})`);
    }

    const linked = [...JSON.stringify(e.payload).matchAll(INTERNAL_LINK)].map((m) => m[1]);
    for (const path of [...linked, ...e.related]) {
      if (!routes.has(routeOf(path))) issues.push(`${e.id} : lien interne cassé → ${path}`);
    }
  }

  return issues;
}

/** Fait échouer le build si le contenu contient une erreur. */
export function assertContentValid(): void {
  const issues = contentIssues();
  if (issues.length > 0) {
    throw new Error(`Contenu invalide :\n- ${issues.join("\n- ")}`);
  }
}
