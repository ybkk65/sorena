import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { ARTICLES } from "@/content/articles";
import { getArticle } from "@/content/registry";
import { pageMetadata } from "@/lib/seo";

interface Params {
  params: { slug: string };
}

export const dynamicParams = false;

export function generateStaticParams(): { slug: string }[] {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const article = getArticle(params.slug);
  if (!article) return {};
  return pageMetadata({
    title: article.metaTitle,
    description: article.metaDescription,
    path: `/ressources/${article.slug}`,
    type: "article",
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
  });
}

export default function ArticleRoute({ params }: Params) {
  const article = getArticle(params.slug);
  if (!article) notFound();
  return <ArticleTemplate article={article} />;
}
