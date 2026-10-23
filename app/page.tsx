import type { Metadata } from "next";
import { Calendar } from "@/components/Calendar";
import { Calculateur } from "@/components/conversion/Calculateur";
import { Constat } from "@/components/conversion/Constat";
import { MethodeGrille } from "@/components/conversion/MethodeGrille";
import { SectionHead } from "@/components/conversion/SectionHead";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MobileCta } from "@/components/MobileCta";
import { Nav } from "@/components/Nav";
import { SiteEffects } from "@/components/SiteEffects";

// Le canonical est déclaré page par page (jamais dans le layout racine, sinon
// toutes les sous-pages hériteraient de celui de l'accueil).
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/**
 * Accueil = page de conversion. UN SEUL OBJECTIF : le diagnostic offert.
 *
 * Cinq blocs, textes courts : hero (rendez-vous en premier), calculateur juste
 * dessous (accroche de la visiteuse froide, qui se termine aussi sur le
 * rendez-vous), constat, système, FAQ, puis clôture + agenda Cal.com.
 * Le maillage vers les pages métiers passe par le footer.
 *
 * ⚠️ Les ids de section sont ceux des liens de la nav (Nav.tsx) et des
 * éléments qui masquent la barre collante (MobileCta.tsx).
 */
export default function Page() {
  return (
    <>
      <Nav />

      {/* Coque du contenu : porte le clip horizontal (anti-scroll latéral) SANS
          englober les éléments fixes (Nav, MobileCta) — sinon leur position:fixed
          se cale sur le document au lieu du viewport sur iOS (barre qui "flotte"). */}
      <div className="page-shell">
        <main>
          <Hero />

          <section id="calcul" className="cv-section cv-light" aria-labelledby="calcul-titre">
            <div className="wrap calc-layout">
              <SectionHead
                id="calcul-titre"
                num="01"
                aGauche
                label="Le calculateur"
                titre={
                  <>
                    Combien vous coûtent <em>vos créneaux vides&nbsp;?</em>
                  </>
                }
                sousTitre="Quatre questions, une minute. Le calcul repose uniquement sur vos réponses."
              />
              <Calculateur />
            </div>
          </section>

          <Constat />
          <MethodeGrille />
          <Faq />
          <Calendar />
        </main>
        <Footer />
      </div>

      <MobileCta />
      <SiteEffects />
    </>
  );
}
