import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SubpageShell } from "@/components/SubpageShell";
import { formatDateFr } from "@/components/templates/ArticleTemplate";
import { articlesByDate } from "@/content/registry";
import { pageMetadata } from "@/lib/seo";
import { Arrow } from "@/components/Arrow";

export const metadata: Metadata = pageMetadata({
  title: "Guides marketing pour instituts et centres esthétiques",
  description:
    "Attirer les bonnes clientes, budget publicitaire, rendez-vous non honorés, réglementation : les guides de Sorena pour instituts, centres et cabinets esthétiques.",
  path: "/ressources",
});

export default function RessourcesPage() {
  const articles = articlesByDate();

  return (
    <SubpageShell>
      <header className="art-hero res-hero">
        <div className="wrap art-hero-wrap">
          <Breadcrumbs items={[{ name: "Ressources", path: "/ressources" }]} />
          <span className="kicker" style={{ color: "var(--bordeaux-warm)" }}>
            Ressources
          </span>
          <h1 className="art-title">
            Guides pour remplir votre agenda <em>avec les bonnes clientes.</em>
          </h1>
          <div className="art-intro">
            <p>
              Acquisition, publicité, rendez-vous non honorés, réglementation :
              ce que nous appliquons chaque semaine pour les instituts, centres et
              cabinets esthétiques, expliqué sans jargon.
            </p>
          </div>
        </div>
      </header>

      <section className="section section-light res-list">
        <div className="wrap">
          <ul className="card-grid">
            {articles.map((a) => (
              <li key={a.slug}>
                <Link className="link-card" href={`/ressources/${a.slug}`}>
                  <span className="link-card-kicker">
                    {a.category} · <time dateTime={a.publishedAt}>{formatDateFr(a.publishedAt)}</time>
                  </span>
                  <span className="link-card-title">{a.title}</span>
                  <span className="link-card-text">{a.excerpt}</span>
                  <span className="link-card-more">
                    Lire le guide · {a.readingMinutes} min <Arrow />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SubpageShell>
  );
}
