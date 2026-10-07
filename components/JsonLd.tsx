interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * Données structurées schema.org. Contenu 100 % statique (constantes du site) ;
 * "<" est échappé pour empêcher toute sortie prématurée de la balise script.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
