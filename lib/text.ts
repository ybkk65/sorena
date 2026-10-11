/** Retire le balisage inline (**gras**, *italique*, [lien](url)) d'un texte. */
export function plainText(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)\s]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1");
}

/** Identifiant d'ancre stable à partir d'un titre français. */
export function slugify(text: string): string {
  return plainText(text)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const NBSP = "\u00a0";

/**
 * Typographie française : espace insécable avant : ; ! ? % » € et après «,
 * dans les milliers (16 900) et entre un nombre et son unité (10 km, 30 min), pour éviter les
 * ponctuations orphelines en début de ligne.
 */
export function frenchTypo(text: string): string {
  return text
    .replace(/ ([:;!?%»€])/g, `${NBSP}$1`)
    .replace(/« /g, `«${NBSP}`)
    // Milliers : 16 900, 1 250 000.
    .replace(/(\d) (?=\d{3}(?!\d))/g, `$1${NBSP}`)
    // Nombre + unité (lookahead sans \b, qui ignore les lettres accentuées).
    .replace(/(\d) (?=(?:km|min|h|jours?|mois|ans?|semaines?|séances?)(?![a-zà-ÿ]))/g, `$1${NBSP}`);
}
