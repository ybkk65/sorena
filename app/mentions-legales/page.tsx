import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site sorenaagency.com : éditeur, directeur de la publication, hébergeur.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

/**
 * Article 6 III de la loi n° 2004-575 (LCEN).
 * TODO(sorena) : compléter les champs entre crochets avant mise en ligne.
 */
const EDITOR = {
  name: "[À compléter : dénomination sociale ou nom et prénom si entreprise individuelle]",
  legalForm: "[À compléter : forme juridique et capital social]",
  address: "[À compléter : adresse du siège]",
  registration: "[À compléter : SIREN / RCS ou RNE]",
  vat: "[À compléter : n° de TVA intracommunautaire]",
  publicationDirector: "[À compléter : nom du directeur de la publication]",
};

export default function MentionsLegales() {
  return (
    <LegalLayout title="Mentions légales" updated="8 octobre 2026">
      <h2>Éditeur du site</h2>
      <p>
        Le site <a href={SITE_URL}>sorenaagency.com</a> est édité par :
      </p>
      <ul>
        <li>{EDITOR.name}</li>
        <li>{EDITOR.legalForm}</li>
        <li>Siège : {EDITOR.address}</li>
        <li>Immatriculation : {EDITOR.registration}</li>
        <li>TVA : {EDITOR.vat}</li>
        <li>
          Contact : <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </li>
      </ul>

      <h2>Directeur de la publication</h2>
      <p>{EDITOR.publicationDirector}</p>

      <h2>Hébergeur</h2>
      <p>
        Railway Corporation, 548 Market St PMB 68956, San Francisco, CA 94104,
        États-Unis. Téléphone : +1 (415) 707-7675.
        Site : <a href="https://railway.com" target="_blank" rel="noopener">railway.com</a>
      </p>

      <h2>Conception du site</h2>
      <p>
        Site réalisé par{" "}
        <a href="https://www.niyya-agency.com" target="_blank" rel="noopener">
          Niyya Agency
        </a>
        .
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus de ce site (textes, visuels, logo, mise en page)
        est protégé par le droit d&apos;auteur. Toute reproduction, même partielle,
        sans autorisation écrite préalable est interdite.
      </p>

      <h2>Données personnelles</h2>
      <p>
        Le traitement de vos données est décrit dans notre{" "}
        <a href="/confidentialite">politique de confidentialité</a> et notre{" "}
        <a href="/cookies">politique cookies</a>.
      </p>
    </LegalLayout>
  );
}
