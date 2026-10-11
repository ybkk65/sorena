import Link from "next/link";
import { resolveCards } from "@/content/registry";
import type { LandingPage } from "@/content/types";
import { serviceSchema } from "@/lib/seo";
import { Arrow } from "../Arrow";
import { Breadcrumbs } from "../Breadcrumbs";
import { JsonLd } from "../JsonLd";
import { SubpageShell } from "../SubpageShell";
import { Blocks } from "../content/Blocks";
import { FaqSection } from "../content/FaqSection";
import { RelatedLinks } from "../content/RelatedLinks";
import { RichText } from "../content/RichText";
import { SourceList } from "../content/SourceList";

interface LandingTemplateProps {
  page: LandingPage;
}

/** Gabarit des pages métiers (« Pour qui ») et services (« Le protocole »). */
export function LandingTemplate({ page }: LandingTemplateProps) {
  const crumbParent =
    page.kind === "metier"
      ? { name: "Pour qui", path: "/#pour-qui" }
      : { name: "Le protocole", path: "/#methode" };

  return (
    <SubpageShell>
      <JsonLd data={serviceSchema(page)} />

      <header className="lp-hero">
        <div className="wrap">
          <Breadcrumbs items={[crumbParent, { name: page.cardTitle, path: `/${page.slug}` }]} />

          <div className="lp-hero-grid">
            <div className="lp-hero-text">
              <span className="kicker lp-eyebrow">{page.eyebrow}</span>
              <h1 className="lp-title">
                <RichText text={page.h1} />
              </h1>
              <p className="lp-lead">
                <RichText text={page.lead} />
              </p>
              <div className="lp-actions">
                <a className="btn btn-dark" href="#agenda">
                  Réserver mon diagnostic offert
                  <Arrow />
                </a>
                <Link className="lp-link" href="/#methode">
                  Découvrir le protocole
                </Link>
              </div>
            </div>

            <aside className="lp-highlights" aria-label="En bref">
              <p className="lp-highlights-title">En bref</p>
              <ul>
                {page.highlights.map((h) => (
                  <li key={h}>
                    <RichText text={h} />
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </header>

      <section className="section section-deep constat-section lp-pains">
        <div className="wrap">
          <div className="constat-head reveal">
            <span className="kicker">Le constat</span>
            <h2 className="constat-title">
              <RichText text={page.pains.title} />
            </h2>
          </div>

          <ol className="pain-list">
            {page.pains.items.map((p, i) => (
              <li key={p} className="pain-row">
                <span className="pain-num">{String(i + 1).padStart(2, "0")}</span>
                <p className="pain-text">
                  <RichText text={p} />
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-cream lp-steps">
        <div className="wrap">
          <span className="kicker" style={{ color: "var(--bordeaux-warm)" }}>
            Notre approche
          </span>
          <h2 className="section-title lp-steps-title">
            <RichText text={page.steps.title} />
          </h2>
          {page.steps.intro ? (
            <p className="lp-steps-intro">
              <RichText text={page.steps.intro} />
            </p>
          ) : null}

          <ol className="lp-steps-grid">
            {page.steps.items.map((s, i) => (
              <li key={s.title} className="lp-step">
                <span className="lp-step-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>
                  <RichText text={s.title} />
                </h3>
                <p>
                  <RichText text={s.text} />
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-light lp-body">
        <div className="wrap lp-body-grid">
          <div className="prose">
            <Blocks blocks={page.body} />
            <SourceList sources={page.sources} />
          </div>

          <aside className="lp-aside">
            <div className="lp-aside-card">
              <p className="lp-aside-kicker">Diagnostic · 30 min · offert</p>
              <p className="lp-aside-title">
                Votre zone est-elle <em>encore libre&nbsp;?</em>
              </p>
              <p className="lp-aside-text">
                Une seule maison par zone de 10 km. Nous étudions votre secteur,
                vos soins et votre agenda, puis vous repartez avec un plan clair.
              </p>
              <a className="btn btn-primary" href="#agenda">
                Vérifier ma zone
                <Arrow />
              </a>
            </div>
          </aside>
        </div>
      </section>

      <FaqSection faq={page.faq} />
      <RelatedLinks cards={resolveCards(page.related)} />
    </SubpageShell>
  );
}
