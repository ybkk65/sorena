import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Gestion des cookies",
  robots: { index: false, follow: true },
};

export default function Cookies() {
  return (
    <LegalLayout title="Gestion des cookies">
      <p>
        Ce site limite l&apos;usage des cookies au strict nécessaire. Les polices
        sont auto-hébergées (aucun cookie tiers de police) et nous n&apos;utilisons
        pas de pisteur publicitaire sur le site.
      </p>

      <h2>Cookies tiers possibles</h2>
      <p>
        Le module de prise de rendez-vous Cal.com, intégré sur la page, peut
        déposer des cookies nécessaires à son fonctionnement lorsque vous
        l&apos;utilisez. Ces cookies sont gérés par Cal.com.
      </p>

      <h2>Votre choix</h2>
      <p>
        Vous pouvez à tout moment configurer votre navigateur pour bloquer ou
        supprimer les cookies. Cela n&apos;affecte pas la consultation du site.
      </p>

    </LegalLayout>
  );
}
