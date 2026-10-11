import { Calendar } from "./Calendar";
import { Footer } from "./Footer";
import { MobileCta } from "./MobileCta";
import { Nav } from "./Nav";
import { SiteEffects } from "./SiteEffects";

interface SubpageShellProps {
  children: React.ReactNode;
}

/**
 * Coque commune des pages marketing hors accueil : même nav, même fin de
 * parcours (clôture + agenda #agenda + footer) que la home, pour que chaque page
 * d'entrée SEO puisse convertir sans renvoyer vers l'accueil.
 */
export function SubpageShell({ children }: SubpageShellProps) {
  return (
    <>
      <Nav />
      <div className="page-shell">
        <main>
          {children}
          <Calendar />
        </main>
        <Footer />
      </div>
      <MobileCta />
      <SiteEffects />
    </>
  );
}
