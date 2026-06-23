import Link from "next/link";
import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <LegalLayout title="Cette page n’existe pas.">
      <p>
        Le lien que vous avez suivi est peut-être cassé, ou la page a été déplacée.
      </p>
      <p>
        <Link href="/">← Revenir à l’accueil</Link> ou{" "}
        <Link href="/#agenda">réserver votre diagnostic offert</Link>.
      </p>
    </LegalLayout>
  );
}
