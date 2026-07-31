import AgendaQuiSeRemplit from "@/components/AgendaQuiSeRemplit";
import { Calendar } from "@/components/Calendar";
import { CtaFinal } from "@/components/CtaFinal";
import { Faq } from "@/components/Faq";
import { Fondatrice } from "@/components/Fondatrice";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { MobileCta } from "@/components/MobileCta";
import { Nav } from "@/components/Nav";
import { Positionnement } from "@/components/Positionnement";
import { Probleme } from "@/components/Probleme";
import { SiteEffects } from "@/components/SiteEffects";
import { Methode } from "@/components/Methode";
import { StatsBand } from "@/components/StatsBand";

export default function Page() {
  return (
    <>
      <Nav />

      {/* Coque du contenu : porte le clip horizontal (anti-scroll latéral) SANS
          englober les éléments fixes (Nav, MobileCta) — sinon leur position:fixed
          se cale sur le document au lieu du viewport sur iOS (barre qui "flotte"). */}
      <div className="page-shell">
        {/* 1. Hero — qu'est-ce que vous faites ? */}
        <Hero />
        {/* Barre défilante des soins — permet aux centres de s'identifier */}
        <Marquee />
        {/* 2. Le problème — est-ce que vous comprenez ma situation ? */}
        <Probleme />
        {/* 3. La solution — qu'est-ce qui est différent dans votre système ? */}
        <Methode />
        {/* 4. L'outcome — à quoi ressemble le résultat ? */}
        <AgendaQuiSeRemplit />
        {/* Bande stats — grands chiffres différenciateurs */}
        <StatsBand />
        {/* 5. Le positionnement — est-ce que c'est pour moi ? */}
        <Positionnement />
        {/* 7. La fondatrice — Sofya, sans visage */}
        <Fondatrice />
        {/* Objections — avant le passage à l'action */}
        <Faq />
        {/* 6. CTA final — quelle est la prochaine étape ? */}
        <CtaFinal />
        <Calendar />
        <Footer />
      </div>

      <MobileCta />
      <SiteEffects />
    </>
  );
}
