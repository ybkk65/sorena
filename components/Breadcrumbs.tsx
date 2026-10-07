import Link from "next/link";
import { absoluteUrl } from "@/lib/site";
import { JsonLd } from "./JsonLd";

export interface Crumb {
  name: string;
  path: string;
}

interface BreadcrumbsProps {
  items: readonly Crumb[];
}

/** Fil d'Ariane visible + BreadcrumbList JSON-LD. Le premier élément est l'accueil. */
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const trail: Crumb[] = [{ name: "Accueil", path: "/" }, ...items];

  return (
    <>
      <nav className="crumbs" aria-label="Fil d'Ariane">
        <ol>
          {trail.map((c, i) => (
            <li key={c.path}>
              {i < trail.length - 1 ? (
                <Link href={c.path}>{c.name}</Link>
              ) : (
                <span aria-current="page">{c.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: trail.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.name,
            item: absoluteUrl(c.path),
          })),
        }}
      />
    </>
  );
}
