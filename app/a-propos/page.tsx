import type { Metadata } from "next";
import Image from "next/image";
import { Arrow } from "@/components/Arrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SubpageShell } from "@/components/SubpageShell";
import { RelatedLinks } from "@/components/content/RelatedLinks";
import { resolveCards } from "@/content/registry";
import { FOUNDER, pageMetadata } from "@/lib/seo";
import { ORGANIZATION_ID, absoluteUrl } from "@/lib/site";

const PATH = "/a-propos";

export const metadata: Metadata = pageMetadata({
  title: "À propos : Sofya et l'agence Sorena",
  description:
    "Sorena est une agence marketing fondée par Sofya, dédiée aux centres, instituts et cabinets esthétiques. Notre approche, nos principes et nos engagements.",
  path: PATH,
});

const PRINCIPLES = [
  {
    title: "La valeur, jamais la remise",
    text: "Nous attirons avec une invitation qui donne envie de vous rencontrer (un bilan, une première consultation), pas avec une promotion qui dévalue vos soins et attire des clientes de passage.",
  },
  {
    title: "Une seule maison par zone",
    text: "Dans un rayon de 10 km, nous n'accompagnons qu'un établissement. Vous ne financez pas une audience partagée avec votre concurrente directe.",
  },
  {
    title: "Tout le parcours, pas seulement la publicité",
    text: "Réponse immédiate, qualification par IA, relances, acompte à la réservation : nous prenons en charge ce qui se passe après le clic, là où la plupart des agences s'arrêtent.",
  },
  {
    title: "Un engagement sur les rendez-vous",
    text: "Nous fixons ensemble un objectif de rendez-vous qualifiés. Tant qu'il n'est pas atteint, nous poursuivons sans frais supplémentaires.",
  },
  {
    title: "Le respect des règles de votre métier",
    text: "Décret laser, règles publicitaires de Meta, droit de la consommation, déontologie médicale : nous connaissons ces limites, et nous ne proposons jamais de publicité payante pour des actes médicaux.",
  },
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${absoluteUrl(PATH)}#page`,
  url: absoluteUrl(PATH),
  name: "À propos de Sorena",
  inLanguage: "fr-FR",
  about: { "@id": ORGANIZATION_ID },
  mainEntity: {
    ...FOUNDER,
    image: absoluteUrl("/assets/sofya-full.jpg"),
    knowsAbout: [
      "Acquisition de clientèle pour instituts de beauté",
      "Publicité Facebook et Instagram",
      "Marketing des centres esthétiques",
    ],
  },
};

export default function AProposPage() {
  return (
    <SubpageShell>
      <JsonLd data={aboutSchema} />

      <header className="lp-hero">
        <div className="wrap">
          <Breadcrumbs items={[{ name: "À propos", path: PATH }]} />
          <div className="lp-hero-grid">
            <div className="lp-hero-text">
              <span className="kicker lp-eyebrow">À propos de Sorena</span>
              <h1 className="lp-title">
                Une agence montée pour les maisons esthétiques. <em>Rien d&apos;autre.</em>
              </h1>
              <p className="lp-lead">
                Sorena accompagne les centres esthétiques, les instituts de beauté,
                les cliniques et les cabinets qui préfèrent les bonnes clientes au
                volume. Nous installons le système qui les fait venir, sans brader
                votre image.
              </p>
              <div className="lp-actions">
                <a className="btn btn-dark" href="#agenda">
                  Réserver mon diagnostic offert
                  <Arrow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section section-light">
        <div className="wrap lp-body-grid">
          <div className="prose">
            <h2>Moi, c&apos;est Sofya.</h2>
            <p>
              J&apos;aurais pu monter cette agence pour n&apos;importe qui. Je l&apos;ai
              montée pour les centres, les cliniques et les cabinets esthétiques.
              Rien d&apos;autre.
            </p>
            <p>
              J&apos;ai été cliente avant d&apos;être prestataire. Ce que vous rendez à
              une femme, ce n&apos;est pas un soin : c&apos;est la façon dont elle se
              regardera demain matin.
            </p>
            <p>
              On vous vend pourtant du volume, des coûts par lead, des taux de
              clic. Comme si votre travail tenait dans une colonne de tableur. Je
              ne vous amène pas du monde. Je vous amène les femmes qui viennent
              pour vous, et qui reviennent.
            </p>

            <h2>Comment nous travaillons</h2>
            <ol>
              <li>
                <strong>Le diagnostic (30 min, offert).</strong> Nous étudions votre
                zone, vos soins, votre agenda et votre parcours de réservation.
                Vous repartez avec un plan clair, même si nous ne travaillons pas
                ensemble.
              </li>
              <li>
                <strong>L&apos;installation (7 jours).</strong> Offre de valeur,
                campagnes locales, qualification par IA, relances et acompte sont
                mis en place avec vous.
              </li>
              <li>
                <strong>L&apos;objectif.</strong> Nous fixons ensemble un nombre de
                rendez-vous qualifiés, adapté à votre capacité d&apos;accueil.
              </li>
              <li>
                <strong>Le suivi.</strong> Demandes, rendez-vous, présences : vous
                savez chaque semaine ce que produit votre investissement.
              </li>
            </ol>

            <h2>Ce que nous ne faisons pas</h2>
            <p>
              Nous ne vendons pas de « leads » au kilo, nous ne diffusons pas de
              promotions à -50 %, et nous ne travaillons pas avec deux
              établissements concurrents dans la même zone. Si vous cherchez du
              volume, peu importe la qualité, d&apos;autres le feront mieux que nous.
            </p>
          </div>

          <aside className="lp-aside">
            <div className="lp-aside-card about-portrait">
              <Image
                src="/assets/sofya-full.jpg"
                alt="Sofya, fondatrice de Sorena"
                width={736}
                height={1308}
                sizes="320px"
              />
              <p className="lp-aside-title">
                Sofya <em>· fondatrice</em>
              </p>
              <a className="lp-aside-text" href="mailto:sofya@sorenaagency.com">
                sofya@sorenaagency.com
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-cream lp-steps">
        <div className="wrap">
          <span className="kicker" style={{ color: "var(--bordeaux-warm)" }}>
            Nos principes
          </span>
          <h2 className="section-title lp-steps-title">
            Cinq règles que nous ne négocions <em>jamais.</em>
          </h2>
          <ol className="about-principles">
            {PRINCIPLES.map((p, i) => (
              <li key={p.title} className="about-principle">
                <span className="about-principle-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <RelatedLinks
        kicker="Pour qui"
        title="Les maisons que nous accompagnons"
        cards={resolveCards([
          "/institut-de-beaute",
          "/centre-laser",
          "/centre-minceur",
          "/ressources",
        ])}
      />
    </SubpageShell>
  );
}
