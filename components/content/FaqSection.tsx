import type { Faq } from "@/content/types";
import { faqSchema } from "@/lib/seo";
import { JsonLd } from "../JsonLd";
import { RichText } from "./RichText";

interface FaqSectionProps {
  faq: readonly Faq[];
  title?: string;
}

/** FAQ en accordéon natif (<details>) + FAQPage JSON-LD. */
export function FaqSection({ faq, title = "Vos questions, *nos réponses.*" }: FaqSectionProps) {
  if (faq.length === 0) return null;

  return (
    <section className="section section-light sub-faq" aria-labelledby="faq-title">
      <JsonLd data={faqSchema(faq)} />
      <div className="wrap sub-faq-wrap">
        <span className="kicker" style={{ color: "var(--bordeaux-warm)" }}>
          Questions fréquentes
        </span>
        <h2 id="faq-title" className="section-title sub-faq-title">
          <RichText text={title} />
        </h2>

        <div className="faq-list">
          {faq.map((item) => (
            <details key={item.q} className="faq-item">
              <summary className="faq-q">
                <span>
                  <RichText text={item.q} />
                </span>
                <span className="plus" aria-hidden="true">+</span>
              </summary>
              <div className="faq-a">
                <RichText text={item.a} />
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
