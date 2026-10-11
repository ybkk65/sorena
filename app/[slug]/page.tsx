import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingTemplate } from "@/components/templates/LandingTemplate";
import { LANDINGS } from "@/content/landings";
import { getLanding } from "@/content/registry";
import { pageMetadata } from "@/lib/seo";

interface Params {
  params: { slug: string };
}

// Seuls les slugs déclarés dans content/landings existent ; le reste → 404.
export const dynamicParams = false;

export function generateStaticParams(): { slug: string }[] {
  return LANDINGS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const page = getLanding(params.slug);
  if (!page) return {};
  return pageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/${page.slug}`,
  });
}

export default function LandingRoute({ params }: Params) {
  const page = getLanding(params.slug);
  if (!page) notFound();
  return <LandingTemplate page={page} />;
}
