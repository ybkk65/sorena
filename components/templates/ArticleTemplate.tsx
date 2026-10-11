import Link from "next/link";
import { resolveCards } from "@/content/registry";
import type { Article } from "@/content/types";
import { frenchTypo } from "@/lib/text";
import { articleSchema } from "@/lib/seo";
import { Breadcrumbs } from "../Breadcrumbs";
import { JsonLd } from "../JsonLd";
import { SubpageShell } from "../SubpageShell";
import { Blocks, tableOfContents } from "../content/Blocks";
import { FaqSection } from "../content/FaqSection";
import { RelatedLinks } from "../content/RelatedLinks";
import { RichText } from "../content/RichText";
import { SourceList } from "../content/SourceList";

const DATE_FR = new Intl.DateTimeFormat("fr-FR", { dateStyle: "long", timeZone: "UTC" });

export function formatDateFr(iso: string): string {
  return DATE_FR.format(new Date(`${iso}T00:00:00Z`));
}

interface ArticleTemplateProps {
  article: Article;
}

export function ArticleTemplate({ article }: ArticleTemplateProps) {
  const toc = tableOfContents(article.body);
  const updated = article.updatedAt && article.updatedAt !== article.publishedAt;

  return (
    <SubpageShell>
      <JsonLd data={articleSchema(article)} />

      <header className="art-hero">
        <div className="wrap art-hero-wrap">
          <Breadcrumbs
            items={[
              { name: "Ressources", path: "/ressources" },
              { name: article.title, path: `/ressources/${article.slug}` },
            ]}
          />

          <p className="art-meta">
            <span className="art-cat">{article.category}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={article.publishedAt}>{formatDateFr(article.publishedAt)}</time>
            <span aria-hidden="true">·</span>
            <span>{article.readingMinutes} min de lecture</span>
          </p>

          <h1 className="art-title">
            <RichText text={article.title} />
          </h1>

          <div className="art-intro">
            {article.intro.map((p) => (
              <p key={p}>
                <RichText text={p} />
              </p>
            ))}
          </div>

          <p className="art-author">
            Par <Link href="/a-propos">Sofya</Link>, fondatrice de Sorena
            {updated ? (
              <>
                {" "}· mis à jour le{" "}
                <time dateTime={article.updatedAt}>{formatDateFr(article.updatedAt!)}</time>
              </>
            ) : null}
          </p>
        </div>
      </header>

      <section className="section section-light art-body">
        <div className="wrap art-grid">
          {toc.length > 2 ? (
            <nav className="art-toc" aria-label="Sommaire">
              <p className="art-toc-title">Sommaire</p>
              <ol>
                {toc.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`}>{frenchTypo(t.text)}</a>
                  </li>
                ))}
              </ol>
            </nav>
          ) : (
            <span aria-hidden="true" />
          )}

          <article className="prose">
            <Blocks blocks={article.body} />
            <SourceList sources={article.sources} />
          </article>
        </div>
      </section>

      <FaqSection faq={article.faq ?? []} />
      <RelatedLinks cards={resolveCards(article.related)} />
    </SubpageShell>
  );
}
