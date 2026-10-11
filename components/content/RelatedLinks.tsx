import Link from "next/link";
import type { LinkCard } from "@/content/registry";
import { Arrow } from "../Arrow";

interface RelatedLinksGridProps {
  cards: readonly LinkCard[];
}

export function RelatedLinksGrid({ cards }: RelatedLinksGridProps) {
  return (
    <ul className="card-grid">
      {cards.map((card) => (
        <li key={card.path}>
          <Link className="link-card" href={card.path}>
            <span className="link-card-kicker">{card.kicker}</span>
            <span className="link-card-title">{card.title}</span>
            <span className="link-card-text">{card.text}</span>
            <span className="link-card-more">
              Découvrir <Arrow />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

interface RelatedLinksProps {
  cards: readonly LinkCard[];
  title?: string;
  kicker?: string;
}

export function RelatedLinks({
  cards,
  title = "Pour aller plus loin",
  kicker = "À lire aussi",
}: RelatedLinksProps) {
  if (cards.length === 0) return null;

  return (
    <section className="section section-cream sub-related">
      <div className="wrap">
        <span className="kicker" style={{ color: "var(--bordeaux-warm)" }}>
          {kicker}
        </span>
        <h2 className="section-title sub-related-title">{title}</h2>
        <RelatedLinksGrid cards={cards} />
      </div>
    </section>
  );
}
