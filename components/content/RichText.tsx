import Link from "next/link";
import { Fragment } from "react";
import { frenchTypo } from "@/lib/text";

/**
 * Rendu inline sûr : **gras**, *italique*, [libellé](href). Tout le reste est
 * du texte brut (aucun HTML interprété). Liens internes ("/...") → next/link ;
 * liens externes → nouvel onglet.
 */
const TOKEN = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)\s]+\))/g;
const LINK = /^\[([^\]]+)\]\(([^)\s]+)\)$/;

interface RichTextProps {
  text: string;
}

export function RichText({ text }: RichTextProps) {
  const parts = frenchTypo(text).split(TOKEN).filter(Boolean);

  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>{renderToken(part)}</Fragment>
      ))}
    </>
  );
}

function renderToken(part: string): React.ReactNode {
  if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
    return <strong>{part.slice(2, -2)}</strong>;
  }

  const link = part.match(LINK);
  if (link) {
    const [, label, href] = link;
    if (href.startsWith("/") || href.startsWith("#")) {
      return <Link href={href}>{label}</Link>;
    }
    if (href.startsWith("https://")) {
      return (
        <a href={href} target="_blank" rel="noopener">
          {label}
        </a>
      );
    }
    return label;
  }

  if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
    return <em>{part.slice(1, -1)}</em>;
  }

  return part;
}

