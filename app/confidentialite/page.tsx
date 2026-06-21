import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  robots: { index: false, follow: true },
};

export default function Confidentialite() {
  return (
    <LegalLayout title="Politique de confidentialité">
      <p>
        Sorena attache une grande importance à la protection de vos données
        personnelles. Cette page explique quelles données sont collectées,
        pourquoi, et quels sont vos droits.
      </p>

      <h2>Données collectées</h2>
      <p>
        Nous collectons uniquement les données que vous nous transmettez
        volontairement, notamment lors de la réservation d&apos;un diagnostic ou
        par email :
      </p>
      <ul>
        <li>Nom et prénom</li>
        <li>Adresse email et numéro de téléphone</li>
        <li>Informations sur votre centre (activité, zone, objectifs)</li>
      </ul>

      <h2>Finalité</h2>
      <p>
        Ces données servent exclusivement à traiter votre demande, organiser le
        diagnostic et vous recontacter. Elles ne sont ni vendues ni cédées à des
        tiers à des fins commerciales.
      </p>

      <h2>Sous-traitants</h2>
      <ul>
        <li>Cal.com — prise de rendez-vous en ligne</li>
        <li>Railway — hébergement du site</li>
      </ul>

      <h2>Durée de conservation</h2>
      <p>
        Vos données sont conservées le temps nécessaire au traitement de votre
        demande, et au maximum 3 ans après notre dernier contact, puis supprimées.
      </p>

      <h2>Vos droits</h2>
      <p>
        Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
        rectification, d&apos;effacement et d&apos;opposition sur vos données. Pour
        l&apos;exercer, écrivez à{" "}
        <a href="mailto:sofya@sorenaagency.com">sofya@sorenaagency.com</a>.
      </p>

    </LegalLayout>
  );
}
