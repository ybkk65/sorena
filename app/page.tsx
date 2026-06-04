import { Approche } from "@/components/Approche";
import { Calendar } from "@/components/Calendar";
import { ContactModal } from "@/components/ContactModal";
import { CtaFinal } from "@/components/CtaFinal";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Methode } from "@/components/Methode";
import { MobileCta } from "@/components/MobileCta";
import { Nav } from "@/components/Nav";
import { Positionnement } from "@/components/Positionnement";
import { Probleme } from "@/components/Probleme";
import { SiteEffects } from "@/components/SiteEffects";

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Probleme />
      <Methode />
      <Positionnement />
      <Approche />
      <Faq />
      <CtaFinal />
      <Calendar />
      <Footer />

      <ContactModal />
      <MobileCta />
      <SiteEffects />
    </>
  );
}
