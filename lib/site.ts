export const SITE_URL = "https://www.sorenaagency.com";
export const SITE_NAME = "Sorena";
export const CONTACT_EMAIL = "sofya@sorenaagency.com";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const SOCIAL_LINKS = [
  "https://www.instagram.com/sorenaagency/",
  "https://www.facebook.com/share/1P38aCKRgs/",
  "https://www.linkedin.com/in/sorena-agency-9290bb416",
] as const;

export function absoluteUrl(path: string): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}
