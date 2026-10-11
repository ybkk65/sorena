# 04 · Audit technique, on-page et design/UX : Sorena

> Site audité : https://www.sorenaagency.com (production) · Date : 8 octobre 2026
> Code de référence : dépôt `/Users/youns/sorena`, commit `HEAD` = `d9ace19` (version déployée au moment de l'audit). Les numéros de ligne renvoient à ce commit.
> Hors périmètre : le working tree contient des modifications non commitées apparues pendant l'audit (nouvelles routes `app/a-propos`, `app/mentions-legales`, `app/ressources`, `app/[slug]`, `lib/seo.ts`, nouveau title, etc.). Elles ne sont pas déployées et **n'ont pas été auditées**. Certains points ci-dessous sont peut-être déjà en cours de correction ; ils sont signalés « (en cours ?) ».
> Documents liés : `01-concurrents.md`, `02-mots-cles.md` (recherche de mots-clés : ce rapport ne la refait pas, il y renvoie).

---

## 0. Méthode

| Volet | Outils et sources |
|---|---|
| Technique | `curl` (codes HTTP, redirections, en-têtes), `dig` (DNS), `openssl` (certificat), lecture du HTML rendu de la prod, extraction du JSON-LD. |
| Performance | **API PageSpeed Insights : quota dépassé** (HTTP 429 `RESOURCE_EXHAUSTED`, « Queries per day », sur mobile comme sur desktop). Repli : **Lighthouse 13.5.0 lancé en local** (Chrome, throttling simulé, presets mobile et desktop). Ce sont des données de laboratoire, pas des données terrain CrUX (le site n'a de toute façon pas assez de trafic pour en avoir). Couverture CSS/JS mesurée avec Playwright. |
| Indexation | WebSearch (`site:sorenaagency.com`, « Sorena agency », `"sorenaagency.com"`, requête descriptive). Tentatives Bing et DuckDuckGo en HTML : résultats inexploitables. |
| On-page | Parsing du HTML de prod : Hn, liens, images, texte visible ou `aria-hidden`, densité de mots-clés. Contrastes calculés dans le navigateur sur tous les éléments textuels. |
| Design/UX | Playwright (Chromium) : captures pleine page en 1440 px et 390 px, captures par section, test sans JavaScript, menu mobile, navigation au clavier, embed Cal.com en locale fr-FR. Lecture de tous les composants et de `app/globals.css`. |

Captures : `docs/seo/captures/` (liste en annexe A).

---

## 1. Synthèse

**Verdict.** Le site est propre sur le plan technique de base (HTTPS, robots, sitemap, canonical de la home, CLS nul, aucun JS bloquant) et soigné visuellement. Le propriétaire a pourtant raison : **en l'état, il ne peut quasiment rien apporter en SEO**, pour cinq raisons.

1. **Une seule URL indexable.** Le reste du site se résume à des ancres `#`. Il n'y a aucune page service, métier, soin ou ville, ni aucun article, donc aucune surface pour se positionner sur les requêtes de `02-mots-cles.md`.
2. **Le domaine nu `sorenaagency.com` ne résout pas** : aucun enregistrement A/AAAA chez LWS. Toute personne qui tape l'adresse sans `www` (ou qui la déduit de l'e-mail `@sorenaagency.com`) tombe sur une erreur DNS.
3. **Aucune trace d'indexation**, et la marque est noyée par des homonymes (le rappeur Ali Sorena, Sorena Group, sorena.io, sorena.fr, une marque cosmétique…).
4. **Les titres sont des slogans** (« Nous remplissons votre agenda. Vous restez en cabine. ») qui ne contiennent aucun mot-clé métier. Les soins (épilation laser, cryolipolyse, HIFU…) n'apparaissent que dans un bandeau défilant `aria-hidden`.
5. **Aucune preuve ni crédibilité B2B** : ni témoignage, ni cas client, ni chiffre réel, ni adresse, ni SIRET, ni mentions légales (le lien pointe sur `#`). La seule photo « en cabine » est une image générée par IA qui porte le logo Sorena.

### Scores par catégorie

| Catégorie | Score | Commentaire court |
|---|---|---|
| Technique (crawl, index, infra) | **5/10** | HTTPS, robots et sitemap corrects. Domaine nu cassé, optimisation d'images inopérante, canonical hérité par les sous-pages, aucun en-tête de sécurité. |
| Performance (Lighthouse labo) | **6,5/10** | Mobile 82, desktop 96. LCP mobile 4,2 s, TBT 0 ms, CLS 0. Poids total 2,7 Mo, dont environ 2 Mo pour Cal.com chargé d'emblée. |
| Données structurées | **4/10** | JSON-LD valide, mais avec une entité `ProfessionalService` en double, sans adresse, sans fondatrice, sans LinkedIn, et un logo de 1,5 Mo. |
| On-page SEO | **3/10** | Title de 81 caractères (tronqué), H1 et H2 sans mots-clés, `meta keywords` inutile, maillage 100 % `#`. |
| Contenu et architecture | **1/10** | 1 page, environ 1 200 mots visibles. Aucun contenu pour les requêtes problèmes, services ou soins. |
| Indexation et visibilité de marque | **1/10** | Introuvable sur la marque. Aucun analytics, aucun suivi des conversions. |
| Accessibilité | **7/10** | Lighthouse 97, mais : pas de `<main>`, ordre des titres non séquentiel, anneau de focus invisible dans la nav, contrastes à 3:1 dans l'agenda, textes de 10–11 px. |
| Design / UI | **6,5/10** | Identité premium cohérente (bordeaux, rose, Garamond). Des effets « template » et une dette CSS (5 000 lignes, 60–64 % inutilisées). |
| UX, conversion, crédibilité B2B | **3/10** | Un seul chemin (le calendrier), 8 CTA identiques, aucune preuve sociale, page « fondatrice » sans nom complet ni visage. |
| Conformité légale | **2/10** | Mentions légales et CGV en `#`. Politique de confidentialité incomplète. Cal.com dépose des cookies dès l'arrivée sur la page. |
| Sécurité et hygiène | **4/10** | Aucun HSTS, CSP, X-Frame-Options, nosniff ni Referrer-Policy. `X-Powered-By` exposé. Dépôt GitHub public qui expose la page privée. |
| **Global** | **≈ 4/10** | |

---

## 2. Liste priorisée des problèmes

Légende : **Fichier:ligne** renvoie au commit `d9ace19`. « (en cours ?) » signale un point peut-être déjà traité dans le working tree non déployé.

### CRITIQUE

| # | Problème | Preuve | Fichier / emplacement | Recommandation |
|---|---|---|---|---|
| C1 | **Le domaine nu `sorenaagency.com` ne résout pas** (ni en http ni en https). | `dig A sorenaagency.com` ne renvoie aucune réponse (SOA LWS seulement). `curl http://sorenaagency.com` donne « Could not resolve host ». Seul `www` existe (CNAME `i9bwbo38.up.railway.app`). Le certificat Let's Encrypt couvre `www` uniquement. | DNS LWS (ns21–24.lwsdns.com) | Rediriger l'apex en **301** vers `https://www.sorenaagency.com/`. Deux options : (a) utiliser la « redirection web » de LWS sur le domaine nu, si elle gère le HTTPS ; (b) mieux, passer le DNS chez Cloudflare (gratuit), avec un enregistrement apex proxifié et une Redirect Rule 301 vers `www` qui conserve le chemin. Garder les MX Google et les TXT (SPF, google-site-verification). Tester ensuite `http://sorenaagency.com/x` puis `https://sorenaagency.com/x`, qui doivent aboutir à `https://www.sorenaagency.com/x` en un seul saut. |
| C2 | **Une seule page indexable** : aucune surface pour ranker. | Sitemap : 3 URL, dont 2 en `noindex`. Tous les liens internes sont des ancres `#methode`, `#agenda`… | `app/sitemap.ts`, `app/page.tsx` | Créer l'architecture prévue dans `02-mots-cles.md` (§5, mapping mot-clé → URL) : pages service (publicité Meta pour instituts, qualification IA et acompte, épilation laser, minceur…), pages par métier (institut, centre laser, médecine esthétique), page « À propos », cas clients, blog. (en cours ?) |
| C3 | **Mentions légales absentes. « Mentions légales » et « CGV » pointent sur `#`.** C'est une obligation de la LCEN (loi n° 2004-575, art. 6 ; numérotation modifiée par la loi SREN de 2024, à vérifier). Sanction : jusqu'à 1 an d'emprisonnement et 75 000 € d'amende pour une personne physique, 375 000 € pour une personne morale. C'est aussi un signal de non-fiabilité pour un prospect B2B et pour Google (critères de confiance E-E-A-T). | `/mentions-legales` et `/cgv` renvoient 404. Deux liens `href="#"` dans le footer. | `components/Footer.tsx:79-80` | Publier `/mentions-legales` : dénomination, forme juridique, capital, adresse du siège, SIREN/RCS (cf. aussi l'art. R123-237 du Code de commerce), n° de TVA, e-mail et téléphone, directeur de la publication, hébergeur (Railway Corporation, adresse et téléphone à vérifier sur railway.com). Pour les CGV : le B2B n'impose pas de les publier en ligne (on doit les communiquer sur demande, art. L441-1 C. com.). Soit on les publie (`/cgv`), soit on **retire le lien**. Ne jamais laisser `#`. (en cours ? `app/mentions-legales` existe dans le working tree) |
| C4 | **Aucune preuve sociale ni crédibilité B2B.** On demande 30 minutes d'appel à une gérante sans rien lui montrer : ni client, ni chiffre réel, ni avis, ni adresse, ni téléphone, ni nom complet de la fondatrice. Les « stats » sont des promesses (« 7 jours », « 24/7 », « 1 / zone », « Offert »), pas des résultats. | Visuel : sections StatsBand, Fondatrice, absence de section Résultats. L'image « en cabine » est générée par IA et porte le logo Sorena sur la blouse, les produits et la porte. L'alt dit « Un soin en cabine dans un centre partenaire Sorena ». | `components/StatsBand.tsx:5-10`, `components/EditorialImage.tsx:10-13`, `components/Fondatrice.tsx:13-19` | 1) Ajouter une section **Résultats / cas clients avec des données réelles** : 2–3 cas (centre, ville, soin, situation de départ, résultat chiffré sur une période, citation signée, photo ou logo avec accord écrit). 2) Remplacer l'image IA (risque de se faire démasquer, et elle laisse croire que Sorena est un institut) par une vraie photo de client avec autorisation, ou par une image neutre sans faux branding, et corriger l'alt. 3) Fondatrice : nom complet, vrai portrait, parcours, lien LinkedIn. 4) Coordonnées réelles (ville, téléphone ou WhatsApp pro). **Ne pas publier le contenu de `components/Resultats.tsx` tel quel** (voir §7) : de faux témoignages ou de faux chiffres sont une pratique commerciale trompeuse (art. L121-2 et s. C. consom., applicables aussi aux pratiques visant des professionnels selon l'art. L121-5 ; jusqu'à 2 ans et 300 000 €, art. L132-2). |

### HAUTE

| # | Problème | Preuve | Fichier / emplacement | Recommandation |
|---|---|---|---|---|
| H1 | **L'optimisation d'images Next.js ne fonctionne pas en prod.** Le JPEG original est servi quelle que soit la largeur demandée, sans WebP ni AVIF. | `/_next/image?url=/assets/hero-room.jpg&w=384` renvoie 81 141 octets en `image/jpeg`, comme `w=3840`. `image_salon.jpg` pèse 357 Ko même en `w=640` et arrive donc tel quel sur mobile. Lighthouse : « Améliorer l'affichage des images », 238 Kio d'économies. Cause probable : `sharp` absent alors qu'il est requis en `output: "standalone"` (Next 14.2, image `node:20-alpine`). | `package.json` (pas de `sharp`), `next.config.mjs`, `Dockerfile` | `npm i sharp`, puis vérifier après déploiement que `curl -H "Accept: image/avif,image/webp" …/_next/image?...&w=640` renvoie `image/webp` ou `image/avif` et pèse beaucoup moins. Ajouter dans `next.config.mjs` : `images: { formats: ['image/avif','image/webp'], minimumCacheTTL: 2592000 }`. Recompresser les sources. `hero-room.jpg` ne fait que 736×981 alors qu'il est affiché sur 720 px de large en desktop : il sera flou sur un écran Retina, il faut une source d'au moins 1 500 px de large. |
| H2 | **LCP mobile de 4,2 s (labo).** | Lighthouse mobile : Perf 82, FCP 1,4 s, **LCP 4,2 s**, SI 4,7 s, TBT 0, CLS 0. L'élément LCP est l'image du hero (`section#top .hero-split-media img`). Décomposition : TTFB simulé 968 ms, chargement 1 189 ms, délai de rendu 819 ms. Desktop : Perf 96, LCP 1,0 s. | `components/Hero.tsx:28-35` | Corriger H1 (le WebP ou l'AVIF de 384–828 px divise le poids par 3 à 5). Sur mobile, l'image arrive sous le texte : on peut aussi accepter que le LCP soit le H1, en réduisant la hauteur de l'image mobile ou en la passant après la ligne de flottaison sans `priority`. Mesurer à nouveau avec PSI quand le quota sera revenu. |
| H3 | **Cal.com est chargé au montage de la page**, pour tous les visiteurs, même ceux qui ne descendent jamais jusqu'au calendrier. | Environ **2 Mo** sur les 2,7 Mo du poids total : polices CalSans (161 + 144 Kio), chunks JS (147 + 106 + 82 Kio), `cityTimezones` (86 Kio)… Il dépose aussi 3 cookies tiers (`__cf_bm`, `__Secure-next-auth.csrf-token`, `callback-url`), d'où le score Best Practices de 77. Sur mobile, l'iframe fait 1 350 px dans une boîte de 900 px avec `overflow:auto` : un défilement imbriqué. Tant qu'il charge, il laisse un grand vide (cf. `captures/sections/mobile-12-agenda.jpg`). | `components/Calendar.tsx:27-88` (chargement dans `useEffect` au montage), `:111-124` (style inline `height:720, overflow:auto`), `app/globals.css:2510-2521` | Charger `embed.js` seulement quand `#agenda` approche du viewport (IntersectionObserver avec `rootMargin: "600px"`) ou au clic sur un CTA. Afficher un squelette et un lien de secours « Ouvrir le calendrier dans un nouvel onglet » (`https://cal.com/sofya-dvdulm/...`). Sur mobile, laisser l'iframe prendre sa hauteur naturelle (supprimer `overflow:auto` et la hauteur fixe). Mettre la page Cookies en cohérence (voir M12). |
| H4 | **Le canonical de la home est hérité par toutes les sous-pages.** | `/confidentialite`, `/cookies` et la page 404 renvoient `<link rel="canonical" href="https://www.sorenaagency.com">`. Sans conséquence aujourd'hui (pages en `noindex`), mais **toute nouvelle page qui n'écrase pas `alternates` sera canonicalisée vers la home, donc jamais indexée.** | `app/layout.tsx:59-61` | Retirer `alternates.canonical` du layout racine et le déclarer page par page (`app/page.tsx` : `/` ; chaque sous-page : son propre chemin). Le working tree introduit `lib/seo.ts`, qui le fait page par page : vérifier que **toutes** les pages l'utilisent, y compris confidentialité, cookies et articles. |
| H5 | **Title, meta description et Hn pensés comme du branding, pas pour le SEO.** | Title de **81 caractères** (tronqué vers 60, la marque en tête consomme la place). Description de 134 caractères, sans « agence », « centre esthétique » ni l'offre. `meta keywords` (ignoré par Google, mais il dévoile la stratégie aux concurrents). H1 « Nous remplissons votre agenda. Vous restez en cabine. » Aucun H2 ne contient de mot-clé métier (cf. §5.3). | `app/layout.tsx:37-55`, `components/Hero.tsx:10-14`, H2 de chaque section | Title d'environ 55–60 caractères, mot-clé en tête et marque en fin (ex. « Agence d'acquisition clients pour centres esthétiques · Sorena »). Description de 140–155 caractères avec la cible, le bénéfice et l'offre (« diagnostic offert »). H1 qui garde le ton mais inclut le métier (ex. « Nous remplissons l'agenda des centres esthétiques. » et, en sous-titre visuel, « Vous restez en cabine. »). H2 descriptifs : « Notre méthode d'acquisition de clientes », « Questions fréquentes sur la publicité pour instituts »… Supprimer `keywords`. (en cours ? le working tree change le title) |
| H6 | **Aucune mesure.** Pas d'analytics, pas de suivi des réservations Cal.com, et Search Console non exploitée. | Aucun `gtag`, Plausible, Umami, Matomo ni Clarity dans le HTML. Le TXT `google-site-verification=wURILMhG…` est présent sur l'apex : **une propriété Search Console de type Domaine existe déjà.** | `app/layout.tsx` | Search Console : soumettre `sitemap.xml`, inspecter la home, suivre la couverture. Ajouter un analytics exempté de consentement (Plausible, ou Matomo configuré en exemption CNIL) et un événement « réservation » via l'API d'événements de l'embed Cal.com (`bookingSuccessful`). Sans cela, impossible de savoir si le SEO rapporte quelque chose. |
| H7 | **Marque invisible et entité mal définie.** La recherche ne renvoie aucun résultat pour le site ; les homonymes dominent. | WebSearch `site:sorenaagency.com` : 0 résultat du domaine. « Sorena agency » donne Morris Fyfe (marque grecque), Sorena Group, sorena.io, le rappeur. Le footer pointe vers un **profil LinkedIn personnel** (`/in/sorena-agency-…`), pas une page entreprise. L'URL Facebook est un lien de partage (`/share/…?mibextid=`). Le compte Instagram s'écrit `sorenaa.agency` (deux « a »). Le JSON-LD n'a ni LinkedIn, ni fondatrice, ni adresse. | `components/Footer.tsx:32,38`, `app/layout.tsx:99-136` | Créer une **page entreprise LinkedIn** et une **fiche Google Business Profile** (zone desservie, catégorie « Agence de marketing »). Utiliser l'URL canonique de la page Facebook. Harmoniser le nom partout : « Sorena Agency » plutôt que « Sorena » seul, trop générique. Enrichir le JSON-LD (voir M1). Obtenir des mentions et des liens : annuaires pro, partenaires (fournisseurs de lasers ou de machines), interviews dans la presse esthétique. |
| H8 | **Dépôt GitHub public : la page privée « indevinable » est publique.** | `api.github.com/repos/ybkk65/sorena` renvoie `"private": false`. `public/pilotage-cj89f7jf4j.html` y est listé, avec des messages de commit explicites (« Ajout page privee statique (dashboard perso, noindex, slug indevinable) »). En prod, la page répond **200** avec `<meta name="robots" content="noindex, nofollow">`, mais sans en-tête `X-Robots-Tag`, avec `cache-control: public, max-age=0`. Elle n'est **ni dans le sitemap, ni dans robots.txt, ni liée depuis le site** (c'est bien). Contenu : tableau de bord personnel « Le Centre de Pilotage / BUILDING PHASE », données en `localStorage`, URL Google Apps Script à configurer (aucun secret en dur). L'historique git ne contient aucun secret (le token Calendly passait par variable d'environnement). | `public/pilotage-cj89f7jf4j.html`, réglages GitHub | Passer le dépôt en **privé**. Sortir le tableau de bord du site vitrine (déploiement séparé, ou route protégée par un `middleware.ts` en Basic Auth). À défaut, ajouter `X-Robots-Tag: noindex, nofollow` via `headers()` dans `next.config.mjs`. Ne **pas** l'ajouter à robots.txt, ce qui le rendrait visible. |
| H9 | **CTA principal faible et parcours à une seule issue.** | Hero : le CTA est un lien texte souligné de 14,5 px, pas un bouton (`globals.css:4800-4813`). Huit liens « Diagnostic offert / Réserver mon diagnostic offert » mènent tous à `#agenda`. `CtaFinal` est suivi immédiatement de `Calendar`, qui fait doublon : le bouton de CtaFinal renvoie 100 px plus bas. Il n'existe aucune alternative pour une prospecte pas encore prête (téléphone, WhatsApp, réponse par e-mail, ressource). | `components/Hero.tsx:22-25`, `components/CtaFinal.tsx`, `components/Calendar.tsx` | Transformer le CTA du hero en vrai bouton plein (bordeaux sur crème), avec un micro-texte de réassurance (« 30 min · sans engagement »). Fusionner CtaFinal et Calendar en une seule section (argumentaire à gauche, calendrier à droite ou en dessous). Ajouter un CTA secondaire (WhatsApp pro ou téléphone) et, plus tard, un aimant à leads (checklist ou auto-diagnostic). Varier les libellés selon le contexte plutôt que répéter 8 fois la même phrase. |

### MOYENNE

| # | Problème | Fichier / emplacement | Recommandation |
|---|---|---|---|
| M1 | **JSON-LD à corriger.** Le JSON est valide et le `@graph` cohérent. Mais : (a) `ProfessionalService` n'a pas d'`@id`, ce qui crée une 2e entité « Sorena Agency » non reliée à l'`Organization` ; (b) c'est un sous-type de `LocalBusiness` **sans `address`**, donc inéligible aux résultats enrichis locaux ; (c) son `image` est l'image IA ; (d) `areaServed: "FR"` (une chaîne plutôt qu'un `Country`) ; (e) l'`Organization` n'a ni `founder`, ni `contactPoint`, ni `address`, ni `legalName`, ni `identifier` (SIREN), et `sameAs` omet LinkedIn tout en utilisant un lien de partage Facebook ; (f) le `logo` `sorena-logo.png` pèse **1,5 Mo** (1254×1254) ; (g) il n'y a ni `WebPage`, ni `FAQPage`, ni `Service`. | `app/layout.tsx:99-136` | Une seule entité `Organization` (ou `["Organization","ProfessionalService"]`) avec `@id`, `legalName`, `address` (si une adresse publique existe), `founder` (`Person` Sofya + nom, `sameAs` LinkedIn), `contactPoint`, `sameAs` complet, `logo` PNG de 512 px et moins de 50 Ko. Ajouter `Service` (provider → `#organization`, `areaServed` `{"@type":"Country","name":"France"}`, `audience` `BusinessAudience`), `WebPage` par page, `FAQPage` pour la FAQ (Google ne l'affiche plus en résultat enrichi pour la plupart des sites, mais le balisage reste valide et utile aux moteurs IA), `BreadcrumbList` sur les sous-pages. Valider sur validator.schema.org et dans le Rich Results Test. (en cours ? `components/JsonLd.tsx` dans le working tree) |
| M2 | **Le sitemap déclare des URL en `noindex`** (`/confidentialite`, `/cookies`), un signal contradictoire. `lastModified: new Date()` met la date du build sur toutes les URL, ce qui n'a aucune valeur. | `app/sitemap.ts:8-25` | Ne lister que les URL indexables. Mettre une vraie date de dernière modification par page (frontmatter du contenu). `changeFrequency` et `priority` sont ignorés par Google. (en cours ? `sitemap.ts` est modifié) |
| M3 | **Contenu invisible sans JavaScript.** Les 19 blocs `.reveal` (titres, listes, FAQ, CTA) restent à `opacity:0` tant que le JS ne les a pas révélés. Googlebot exécute le JS, mais tout échec de JS (bloqueur, erreur, crawler IA qui n'exécute pas le JS mais fait une capture) donne une page vide. | `app/globals.css:650-658`, `components/SiteEffects.tsx:9-20` | Amélioration progressive : ne masquer que si le JS est actif (`html.js .reveal{opacity:0}`, avec la classe `js` posée par un script inline dans `<head>`), ou ajouter `<noscript><style>.reveal{opacity:1;transform:none}</style></noscript>`. Capture : `captures/mobile-390-sans-js-fullpage.jpg`. |
| M4 | **Les soins ciblés n'existent que dans un bandeau décoratif.** Épilation laser, cryolipolyse, radiofréquence, HIFU, HydraFacial… ne figurent que dans le marquee `aria-hidden`, dupliqué deux fois. C'est pourtant le meilleur signal sémantique du site. Le marquee ne s'arrête pas non plus avec `prefers-reduced-motion` (pause au survol uniquement, donc rien sur mobile). | `components/Marquee.tsx:36`, `app/globals.css:584-597` | Garder le marquee décoratif, mais ajouter une vraie section « Les soins que nous remplissons » avec une liste lisible, et à terme des liens vers les pages soins (C2). Ajouter `@media (prefers-reduced-motion: reduce){.marquee-track{animation:none}}`. |
| M5 | **Accessibilité, points concrets.** (a) Pas de landmark `<main>` (Lighthouse `landmark-one-main`) ni de lien d'évitement. (b) Ordre des titres : le footer passe directement à des `h4` (Lighthouse `heading-order`). (c) L'anneau de focus de la nav est rose `#f0c8c0` sur une nav crème, soit un contraste d'environ 1,4:1 (WCAG 1.4.11 / 2.4.7). (d) `MobileCta` reçoit `aria-hidden="true"` quand il est masqué par `translateY` mais reste focusable. (e) Contrastes insuffisants dans l'agenda : jours `LUN…SAM` en 10 px à **3,18:1**, légende « 10h à 18h » à **3,0:1** (au lieu de 4,5:1). (f) Beaucoup de libellés en capitales de 10–11 px très espacés : kickers, eyebrow du hero, `stat-label`. (g) Le burger n'a pas d'`aria-controls`. (h) Le « + » de la FAQ est lu à voix haute. | `app/page.tsx:26` (div au lieu de `main`), `components/Footer.tsx:54,64,75`, `app/globals.css:291-295`, `components/MobileCta.tsx:28-31`, `components/AgendaQuiSeRemplit.tsx:147-150,161-164`, `app/globals.css:126-131,4774-4779,4963`, `components/Nav.tsx:63-71`, `components/Faq.tsx:92` | (a) Remplacer la `div.page-shell` par `<main className="page-shell">` et ajouter « Aller au contenu ». (b) Passer les titres du footer en `<p class="foot-title">` ou en `h2` visuellement réduits. (c) Anneau de focus `--bordeaux` sur fond clair et rose sur fond sombre. (d) Ajouter `tabIndex={hidden ? -1 : 0}` ou utiliser l'attribut `inert`. (e) Passer à une opacité d'au moins 0,62 et à 12 px minimum. (f) Mettre les libellés à 12–12,5 px minimum. (g) `aria-controls="nav-links"`. (h) `aria-hidden` sur `.plus`. |
| M6 | **Dette CSS.** `globals.css` fait 4 981 lignes, dont **60–64 % inutilisées** sur la home (couverture Chromium : environ 160 Ko de CSS propre, environ 58 Ko utilisés). Il reste des styles de composants supprimés (`.hero-visual`, `.hero-availability`, `.form-field`, `confetti`, `vsPulse`, `bridgePulse`, `.foot-news-form`, `.approche-*`…) et 8 `!important`. `.nav` est défini deux fois : la seconde définition (`rgba(82,60,58,.46)`, l. 4572) écrase la première et produit la **barre de navigation taupe et grisâtre** visible en haut de page sur le hero crème. | `app/globals.css:199-216` puis `:4572-4581`, `:349`, `:521`, `:1229` | Découper par composant (CSS Modules ou fichiers par section), supprimer le code mort, décider d'un état unique de la nav (crème opaque à 0,9 dès le départ). Gain : 12–13 Kio de CSS bloquant le rendu, et un CSS qu'on peut maintenir. |
| M7 | **Section Méthode : lisibilité et logique.** En desktop, 5 colonnes de texte **centré** d'environ 180 px de large (sur 7–9 lignes) sont pénibles à lire, et le motif « 5 pastilles reliées par un trait » fait très template. « Notre engagement » n'est pas une étape mais une garantie, mélangée au processus. Les intitulés d'étape sont des `<span>`, pas des `h3`. | `components/Methode.tsx:46-56,126-127`, `app/globals.css:4166-4220` | 4 étapes en grille 2×2 ou en liste verticale, texte aligné à gauche, `h3` pour chaque étape. Sortir « Notre engagement » dans un encart « Garantie » mis en valeur : c'est un argument fort. |
| M8 | **L'agenda de démonstration contredit la promesse.** Il montre 13 créneaux sur 30 (« 13 confirmés »), soit un agenda **à moitié vide** pour illustrer « nous remplissons votre agenda ». L'animation tourne en boucle infinie (un `setTimeout` toutes les 440 ms), même hors écran. | `components/AgendaQuiSeRemplit.tsx:6-14,20-47` | Remplir 24–26 créneaux sur 30, avec un ou deux créneaux « acompte versé » ou « nouvelle cliente » pour illustrer la qualification. Lancer et suspendre l'animation via IntersectionObserver, et s'arrêter une fois l'agenda rempli. |
| M9 | **Bloc « Pour vous / Pas pour vous » contradictoire** : « Pas pour vous si » porte la même coche ✓ que « Pour vous si ». | `components/Positionnement.tsx:13-14,52-54` | Icône « × » ou « — » pour « Pas pour vous si », et un traitement visuel distinct (couleur atténuée). |
| M10 | **Section fondatrice faible en confiance (E-E-A-T).** Prénom seul, photo de dos sans visage, aucun parcours chiffré, aucun lien vers un profil, et pas de titre de section (`<p>` « Moi, c'est Sofya. »). Le commentaire du code parle d'un « placeholder ». Si la photo n'est pas d'elle (style Pinterest, gobelet Lancôme), il y a un **risque de droits**. | `components/Fondatrice.tsx:3-7,13-19,25` | Nom complet, vrai portrait (même stylisé), 2–3 éléments de parcours vérifiables, LinkedIn, `h2`. Vérifier les droits de la photo actuelle. Une page « À propos » dédiée prolongera la section. (en cours ? `app/a-propos`) |
| M11 | **En-têtes de sécurité absents** : ni `Strict-Transport-Security`, ni `Content-Security-Policy` (ou `frame-ancestors`), ni `X-Frame-Options`, ni `X-Content-Type-Options`, ni `Referrer-Policy`, ni `Permissions-Policy`. `X-Powered-By: Next.js` est exposé. | `next.config.mjs` | `poweredByHeader: false` et `async headers()` avec HSTS (`max-age=31536000; includeSubDomains`, sans `preload` tant que l'apex n'est pas réglé), `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` minimale, et une CSP qui autorise `app.cal.com` / `cal.com` (frame et script). |
| M12 | **Conformité RGPD et cookies.** La page Cookies affirme que Cal.com « peut déposer des cookies… lorsque vous l'utilisez », alors qu'il est chargé dès l'arrivée (3 cookies tiers). La politique de confidentialité n'indique pas l'identité ni l'adresse du responsable de traitement, ni les bases légales, ni le droit de réclamation auprès de la CNIL, ni les transferts hors UE (Cal.com, Railway, Google Workspace, tous aux États-Unis). `MetaPixel` s'active avec une simple variable d'environnement, **sans bandeau de consentement**. | `app/cookies/page.tsx:12-23`, `app/confidentialite/page.tsx`, `components/MetaPixel.tsx` | Charger Cal.com à la demande (H3), ce qui règle l'essentiel. Compléter la politique de confidentialité. Ne jamais activer le pixel Meta sans CMP (outil de consentement). |
| M13 | **Cache des assets.** `/assets/*` est servi en `max-age=0` et `/_next/image` en `max-age=60`. | `next.config.mjs` | `headers()` : `/assets/:path*` → `public, max-age=604800, stale-while-revalidate=86400` (ou fichiers versionnés avec cache `immutable` d'un an). `images.minimumCacheTTL`. |
| M14 | **Polices.** 4 woff2 préchargés (148 Ko). Cormorant Garamond 300 (22 Ko) est préchargé alors qu'il ne sert qu'au grand « Sorena » décoratif du footer. | `app/layout.tsx:19-24` | `preload: false` sur Cormorant. Envisager de remplacer le wordmark par un SVG. |
| M15 | **Nav en haut de page (desktop) brouillonne.** Translucide et taupe, elle est à moitié sur le crème et à moitié sur la photo bordeaux. Les liens gris passent sur le rouge sombre au-dessus de l'image (capture `desktop-1440-above-the-fold.png`). | `app/globals.css:4572-4581` | Nav crème opaque, ou totalement transparente avec des liens adaptés, mais pas un entre-deux. Voir M6. |
| M16 | **Menu mobile** : le panneau a paru translucide à la capture (le texte du hero se voit derrière les liens) et ne contient pas de CTA. | `app/globals.css:1456-1474` puis `:4836-4849` | Fond opaque, CTA « Réserver un diagnostic » en bas du panneau, fermeture au clic sur Échap ou en dehors. Capture : `sections/mobile-390-menu-ouvert.jpg`. |

### BASSE

| # | Problème | Fichier | Recommandation |
|---|---|---|---|
| B1 | `/favicon.ico` renvoie 404 (Google utilise `icon.png` 256×256, qui est conforme). | `app/` | Ajouter `app/favicon.ico` (48×48). |
| B2 | `robots.txt` contient une directive `Host:` non standard (Yandex), inoffensive. | `app/robots.ts:11` | La retirer. Optionnel : un `llms.txt` qui résume l'offre pour les moteurs IA. |
| B3 | `EditorialImage` utilise un `<figcaption>` dans une `<section>`, ce qui est du HTML invalide. | `components/EditorialImage.tsx:18` | Remplacer par `<figure>`. |
| B4 | La page 404 est correcte (statut 404, `noindex`, lien vers l'accueil et CTA), mais elle n'a ni nav ni footer, et elle hérite du canonical de la home. | `app/not-found.tsx`, `components/LegalLayout.tsx` | Réutiliser Nav et Footer (gabarit de sous-page) et ajouter des liens vers les futures pages clés. |
| B5 | Code mort : `countUp` et `[data-num]` (plus aucun élément concerné), effet « magnétique » sur les boutons, dépendance `geist` inutilisée, variable `NEXT_PUBLIC_CALENDLY_URL` obsolète dans `.env.local`. | `components/SiteEffects.tsx:22-33,47-62`, `package.json` | Nettoyer. |
| B6 | Décalage de version au déploiement : pendant l'audit, un déploiement a eu lieu et les anciennes CSS (`f5efe47…css`) sont passées en 404 immédiatement. Un visiteur qui avait l'ancien HTML se retrouve avec une page sans styles. | Railway | Pour un site d'une page, l'impact est faible. Ne s'en occuper que si la navigation entre pages se développe. |
| B7 | JS « legacy » : 11 Kio (polyfills `nomodule`). | — | Négligeable. |
| B8 | « Offert · places limitées » et « Sans engagement · places limitées » : une rareté non justifiée. | `components/CtaFinal.tsx:43,71` | Justifier (« 4 diagnostics par semaine ») ou retirer : une fausse urgence nuit à la crédibilité B2B. |
| B9 | Hreflang absent. C'est **normal** pour un site monolingue FR, aucune action n'est nécessaire, sauf si des versions BE/CH/CA sont prévues. | — | — |

---

## 3. Technique (détail)

### 3.1 Redirections et domaines

| URL testée | Résultat |
|---|---|
| `http://sorenaagency.com` | **Erreur DNS** (aucun A/AAAA) |
| `https://sorenaagency.com` | **Erreur DNS** |
| `http://www.sorenaagency.com` | 301 → `https://www.sorenaagency.com/` (un seul saut, OK) |
| `https://www.sorenaagency.com/` | 200 |
| `https://www.sorenaagency.com//` | 308 → `/` (OK) |
| `/confidentialite/` | 308 → `/confidentialite` (barre finale normalisée, OK) |
| `/?ref=test` | 200, canonical → home (OK) |
| `/index.html` | 404 (OK) |
| `i9bwbo38.up.railway.app` | 404 (pas de contenu dupliqué exposé, OK) |

DNS : NS LWS. MX Google Workspace. SPF `include:_spf.google.com ~all`. DKIM `google._domainkey` présent. DMARC `v=DMARC1; p=quarantine;` présent (on peut y ajouter `rua=mailto:…` pour recevoir les rapports). TLS : Let's Encrypt, valide jusqu'au 2 janvier 2027, SAN `www.sorenaagency.com` seulement, HTTP/2.

### 3.2 robots.txt et sitemap.xml

```
User-Agent: *
Allow: /
Host: https://www.sorenaagency.com
Sitemap: https://www.sorenaagency.com/sitemap.xml
```
Correct (`text/plain`, 200). Aucun robot IA bloqué, ce qui est souhaitable pour la visibilité dans ChatGPT et Perplexity.
Sitemap : XML valide, 3 URL (home + 2 pages en `noindex`, cf. M2). `lastmod` = date du build (`2026-08-12T12:23:25Z` à l'audit).

### 3.3 Balises rendues (home)

| Balise | Valeur | Avis |
|---|---|---|
| `<html lang>` | `fr` | OK |
| `<title>` | « Sorena · Acquisition de clientèle pour centres, cliniques et cabinets esthétiques » (**81 car.**) | Trop long, marque en tête (H5) |
| `meta description` | 134 car., sans mot-clé ni offre | À réécrire (H5) |
| `meta keywords` | 10 expressions | À supprimer |
| `robots` / `googlebot` | `index, follow` / `max-image-preview:large…` | OK |
| `canonical` | `https://www.sorenaagency.com` | OK sur la home, problème d'héritage (H4) |
| OG | title, description, url, site_name, `fr_FR`, image 1200×630 (`og-sorena.jpg`, 38 Ko, carte de marque propre), alt | OK |
| Twitter | `summary_large_image` | OK |
| Icônes | `icon.png` 256×256, `apple-icon.png` 180×180 | OK (favicon.ico : B1) |
| hreflang | aucun | Normal (B9) |

### 3.4 JSON-LD rendu

Trois nœuds dans `@graph` : `Organization` (`#organization`), `WebSite` (`#website`, `inLanguage fr-FR`, `publisher` → org) et `ProfessionalService` (sans `@id`). La syntaxe est valide et les types et propriétés existent dans schema.org. Les manques sont détaillés en M1. Note : Next duplique le JSON-LD dans le payload RSC (`self.__next_f`), ce qui est normal et sans effet SEO.

### 3.5 En-têtes HTTP

| Ressource | Cache | Remarque |
|---|---|---|
| HTML `/` | `s-maxage=31536000, stale-while-revalidate`, `x-nextjs-cache: HIT` | Page statique, TTFB d'environ 0,2–0,6 s (edge Railway `cdg1`) |
| `/_next/static/*` (JS, CSS, polices) | `public, max-age=31536000, immutable` | OK |
| `/_next/image` | `public, max-age=60, must-revalidate` | À allonger (M13). **Sert l'original** (H1) |
| `/assets/*` | `public, max-age=0` | À allonger (M13) |
| `/icon.png` | `immutable, max-age=31536000` | OK |
| Sécurité | **aucun en-tête**, `x-powered-by: Next.js` | M11 |

### 3.6 Poids et ressources (Lighthouse mobile)

- HTML : 81 Ko brut, environ 16 Ko compressé.
- JS propre : environ 150 Ko compressés (414 Ko bruts), dont react-dom (54 Ko) et des polyfills `nomodule` (40 Ko, non chargés par les navigateurs modernes). TBT de 0 ms : le JS n'est pas un problème.
- CSS : 2 fichiers (environ 18 + 1,5 Kio transférés), **bloquants**, dont 60–64 % inutilisés (M6).
- Polices : 4 woff2 préchargés, 148 Ko (M14).
- Images : `image_salon.jpg` 349 Kio (servi tel quel sur mobile), `hero-room.jpg` 79 Kio, `sofya-full.jpg` 127 Ko, `sorena-mark.png` **67 Kio pour un logo affiché en 30–38 px** (`globals.css:234-247`, à remplacer par un SVG ou un WebP 2× de 76 px).
- **Total : 2 695 Kio, dont environ 2 Mo pour Cal.com** (H3).

### 3.7 Scores Lighthouse (local, 8 octobre 2026)

| | Performance | Accessibilité | Bonnes pratiques | SEO | FCP | LCP | TBT | CLS | SI |
|---|---|---|---|---|---|---|---|---|---|
| Mobile | **82** | 97 | 77 | 100 | 1,4 s | **4,2 s** | 0 ms | 0 | 4,7 s |
| Desktop | 96 | 97 | 77 | 100 | 0,7 s | 1,0 s | 0 ms | 0 | 1,6 s |

Le « SEO 100 » de Lighthouse ne vérifie que l'hygiène technique (title présent, crawlable, canonical…). Il ne dit **rien** sur la capacité du site à se positionner.
Audits en échec : cookies tiers (Cal.com), `heading-order`, `landmark-one-main`, `image-delivery`, CSS inutilisée, blocage du rendu, problèmes signalés dans le panneau Issues de Chrome (cookies).

### 3.8 Page privée `pilotage-cj89f7jf4j.html`

- `noindex, nofollow` en meta : **oui**. `X-Robots-Tag` : non.
- Listée dans le sitemap, robots.txt ou des liens internes : **non**.
- **Exposée : oui**, via le dépôt GitHub public `ybkk65/sorena` (fichier et messages de commit). Quiconque parcourt le dépôt obtient l'URL. Contenu sans secret (données en `localStorage`, URL Apps Script laissée en `…`), mais c'est un outil personnel hébergé sur le domaine commercial. Recommandations : H8.

---

## 4. Indexation

- `site:sorenaagency.com` (WebSearch) : **aucune page du domaine**. L'outil (index orienté US) ne gère pas bien l'opérateur `site:`, donc ce résultat n'est pas une preuve formelle de non-indexation.
- « Sorena agency » et `"sorenaagency.com"` : **aucun résultat du site**. La SERP est occupée par des homonymes : la marque grecque SORENA (Morris Fyfe Agency), Sorena Group (Iran), sorena.io (logiciel de conformité), sorena.fr (réseaux d'énergie), une marque cosmétique, le rappeur Ali Sorena, Sorena Car Audio, Beauty by Sorena (NL).
- Requête descriptive (« Sorena acquisition de clientèle centres esthétiques… ») : aucun résultat du site. En revanche, des concurrents directs apparaissent (Seesmile, The Aesthetic Agency, Spationaute Beauty, Atelier Dotcom, Newp, Visicrea…, cf. `01-concurrents.md`).
- **À faire en priorité** : ouvrir la propriété Search Console déjà vérifiée (TXT présent), lancer « Inspection de l'URL » sur la home, demander l'indexation, soumettre le sitemap, et noter la date de première indexation et les requêtes d'impression. Ajouter Bing Webmaster Tools (import depuis GSC), qui alimente aussi ChatGPT Search et Copilot.
- La marque « Sorena » seule ne sera jamais une requête exploitable. Il faut viser « Sorena Agency » et les requêtes métier.

---

## 5. On-page (détail)

### 5.1 Hiérarchie Hn réelle (ordre du DOM)

```
h1  Nous remplissons votre agenda. Vous restez en cabine.
h2  Vous ne manquez pas de demandes. Vous manquez de bonnes clientes.
h2  Nous faisons venir les bonnes clientes, étape par étape.
h2  Pendant que vous travaillez, les bonnes clientes arrivent.
  h3  Votre semaine
h2  Nous ne travaillons pas avec toutes les maisons.
h2  Vos questions, avant de nous rencontrer.
  h3  Une question qui n'est pas dans la liste ?
h2  Repartez avec un plan clair pour remplir votre agenda.
  h3  Un regard extérieur sur votre situation actuelle.
h2  Choisissez votre créneau.
        h4  La maison        <- saut h2 → h4 (footer)
        h4  Contact
        h4  Légal
```
Constats : un seul H1 (bien), mais **aucun Hn ne contient « centre esthétique », « institut », « agence », « publicité », « Instagram » ni un nom de soin**. Les 5 étapes de la méthode, la section fondatrice, la bande de stats et les 8 questions de la FAQ n'ont pas de titre sémantique.

### 5.2 Contenu indexable

- Environ **1 200 mots visibles** (FAQ comprise, `<details>` est bien indexé), plus 32 mots `aria-hidden` (le marquee ×2, le wordmark du footer).
- Le ton est éditorial et différenciant (qualité plutôt que volume, image préservée, une maison par zone, garantie de résultat). C'est un bon matériau de marque, mais trop abstrait pour la recherche : pas de prix, pas de zone géographique, pas de plateformes nommées, pas de chiffres.

### 5.3 Mots-clés présents vs cible business

| Terme (texte visible) | Occurrences | Commentaire |
|---|---|---|
| diagnostic (dont « diagnostic offert » ×8) | 14 | Sur-représenté (répétition des CTA) |
| clientes / clientèle | 12 / 5 | OK |
| agenda | 8 | OK |
| publicité (dont « publicité ciblée » ×1) | 6 | Jamais « Facebook », « Instagram », « Meta », « Google » |
| cliniques / cabinets / esthétiques | 3 / 3 / 5 | Toujours dans la même formule « centres, cliniques et cabinets esthétiques » |
| « centre esthétique » (singulier, exact) | **0** | Requête cible |
| institut / instituts | **0** | Pourtant dans `meta keywords` |
| agence | 2 | « agence marketing » : 0 |
| marketing | **0** | |
| épilation laser | 1 (FAQ) | Le reste ne figure que dans le marquee `aria-hidden` |
| cryolipolyse, HIFU, minceur, HydraFacial | **0** visibles | Seulement dans le marquee |
| rendez-vous non honoré, lapin, acompte | 0 / 0 / 2 | Forte douleur de la cible (cluster C8 de `02-mots-cles.md`) |
| prix, tarif, € | 3 / 1 / 0 | |
| ville, France, Paris… | **0** | |
| avis, témoignage, résultat chiffré | 0 | |

Pour l'univers de mots-clés et le mapping vers les URL, voir `02-mots-cles.md` §3 et §5.

### 5.4 Maillage et liens

- 26 liens : 17 ancres `#` internes, 2 liens vers les pages légales, **2 liens `href="#"` cassés** (Mentions légales, CGV), 3 `mailto:`, 3 réseaux sociaux (`target=_blank rel=noopener`, OK) et le crédit Niyya Agency (ancre de marque, acceptable).
- Aucune page interne : pas de jus interne, pas de profondeur, pas de contexte d'ancre. Lighthouse `crawlable-anchors` passe, mais il n'y a rien à crawler.
- Liens sociaux : LinkedIn = profil personnel, Facebook = lien de partage (H7).

### 5.5 Images et attributs alt

| Image | Alt | Source | Avis |
|---|---|---|---|
| `hero-room.jpg` (LCP) | `""` + conteneur `aria-hidden` | 736×981, 81 Ko | Traitement décoratif acceptable. Source trop petite pour un écran Retina (H1) |
| `image_salon.jpg` | « Un soin en cabine dans un centre partenaire Sorena » | 2000×1090, 357 Ko, **générée par IA avec le logo Sorena** | Alt trompeur, image à remplacer (C4) |
| `sofya-full.jpg` | « Sofya, fondatrice de Sorena » | 736×1308, 127 Ko | Alt correct si c'est bien elle. Vérifier les droits (M10) |

### 5.6 Textes cachés

- Marquee `aria-hidden` (M4), wordmark du footer `aria-hidden` (décoratif, OK), chiffres 1/2/3 de la carte CTA `aria-hidden` (OK).
- Les 19 blocs `.reveal` sont invisibles sans JS (M3).
- Les réponses de la FAQ sont dans `<details>` fermés : Google les indexe, aucun problème.

---

## 6. Design / UX (détail)

### 6.1 Ce qui fonctionne

- **Identité premium cohérente** : bordeaux nuit, rose poudré, crème, serif EB Garamond fin et Hanken Grotesk. Le positionnement « haut de gamme, pas de promo » se lit immédiatement.
- Une bonne alternance clair/sombre, une grande lisibilité des titres et de beaux paragraphes (sauf dans la section Méthode).
- Un argumentaire bien construit : problème, méthode, résultat, sélection, fondatrice, FAQ, CTA. Les objections (prix, ville, médecins, garantie) sont traitées.
- Mobile : pas de débordement horizontal (`scrollWidth = 390`), barre CTA fixe en bas qui se masque près du calendrier, embed Cal.com en français et en `Europe/Paris` pour un visiteur français.
- Aucun décalage de mise en page (CLS 0), animations douces, `prefers-reduced-motion` respecté (sauf le marquee).

### 6.2 Problèmes, classés par impact

1. **Pas de preuve, donc pas de confiance** (C4). C'est le frein n°1 à la conversion B2B.
2. **Le CTA du hero est un simple lien souligné** (H9). Au-dessus de la ligne de flottaison, rien ne signale « cliquez ici ».
3. **8 CTA identiques et un seul chemin** (H9). CtaFinal et Calendar font doublon.
4. **Une page très longue et peu dense** : 11 800 px en desktop, 12 000 px en mobile pour environ 1 200 mots. Les paddings de section vont de 92 à 156 px (`globals.css:602`), et de grands vides apparaissent (moitié droite des sections Constat, Sélection et CTA). Réduire de 25–30 % la hauteur des sections ou les remplir (preuves, visuels).
5. **Des effets « template »** : timeline de 5 pastilles reliées par un trait (Méthode), bande de 4 « stats » qui ne sont pas des stats, carte agenda générée, numéros « 01–04 », kickers en capitales espacées précédés d'un trait sur chaque section, orbes flous et grain dans la section CTA, boutons « magnétiques », marquee de mots-clés. Pris séparément, ces éléments vont ; cumulés, ils donnent l'impression d'un thème générique. Garder 2–3 signatures et remplacer le reste par du contenu réel (captures de campagnes floutées, extraits de conversation de qualification IA anonymisés, avant/après d'un agenda client).
6. **Démo d'agenda à moitié vide** (M8) et **coche sur « Pas pour vous »** (M9) : des incohérences qui se voient.
7. **Méthode illisible en desktop** (M7).
8. **Nav du haut de page brouillonne** (M15) et **menu mobile translucide sans CTA** (M16).
9. **Fondatrice anonyme** (M10). Pour une offre où « une seule maison par zone » est sélectionnée par Sofya, son visage et son parcours SONT l'argument.
10. **Calendrier** : grand vide pendant le chargement, défilement imbriqué sur mobile, rien si Cal.com est bloqué (H3).
11. **Typographie** : beaucoup de micro-textes en capitales de 10–11 px avec un espacement de 0,22–0,24 em (kickers, eyebrow, labels de stats, « Fondatrice de Sorena »), pénibles à lire sur mobile. Passer à 12–12,5 px et 0,14 em minimum.
12. **Page 404 et pages légales coupées du site** : pas de nav ni de footer, une impression de « page orpheline » (B4).

### 6.3 Mobile

Le hero est lisible : texte d'abord, image ensuite, barre CTA fixe. La Méthode passe en timeline verticale lisible. L'agenda tient dans l'écran (créneaux à 10 px de police : limite). Défauts : menu (M16), calendrier (H3), longueur de page, micro-textes.

### 6.4 Animations et performances

L'IntersectionObserver de révélation est correct. Points à revoir : l'agenda tourne en boucle même hors écran (M8), le marquee ignore `prefers-reduced-motion` (M4), et le `useEffect` « magnétique » est superflu (B5).

---

## 7. Composants présents mais non utilisés dans `app/page.tsx`

| Composant | Contenu | Réutilisation possible | Attention |
|---|---|---|---|
| `components/Approche.tsx` (61 l.) | Section « NOTRE APPROCHE » : H2 « Un système pensé pour les centres qui veulent enfin remplir leur agenda. », deux paragraphes (déceptions Instagram, bouche-à-oreille, agences), puis 3 cartes numérotées en `article` + `h3` : « Qualité avant volume », « Des rendez-vous qui se présentent », « Pensé pour les cures premium & la récurrence ». CSS `.approche-*` toujours présent (`globals.css:4464+`). | Page « Notre approche » ou bloc d'une page service. Structure Hn propre (h2 + 3 h3), réutilisable telle quelle. | Le texte recoupe Probleme et Methode : le réécrire autour d'un mot-clé de page. |
| `components/Resultats.tsx` (139 l.) | « RÉSULTATS RÉELS / Pas de promesses. Des chiffres. » : 4 métriques (**+147 % de CA** sur 90 jours, **panier ×4,2**, **< 7 jours**, **92 % de reconduction**) et 3 témoignages 5 étoiles (**Léa M.**, Spa Cryo, Lyon ; **Sophie R.**, Bordeaux ; **Karima B.**, Head Spa, Paris), plus le CTA « Voir mes créneaux disponibles ». CSS partiel (`.metric-card`, `.case-card` existent, `.results-section` non). | **Gabarit idéal** pour une section ou une page « Résultats / Cas clients » (répond à C4). | **Les données semblent fictives (placeholders).** Ne les publier que si elles sont réelles, sourcées et autorisées par écrit. Sinon : pratique commerciale trompeuse (cf. C4). Les étoiles et `aria-label="5 sur 5"` sans source d'avis vérifiable posent le même problème. |
| `components/Technologie.tsx` (100 l.) | « VOTRE SYSTÈME IA » : H2 « Une IA qui qualifie et relance pendant que vous travaillez. », paragraphe, 3 cartes `h3` (« Réponse en quelques secondes, 24/7 », « Pré-qualifie et relance au bon moment », « Zéro charge mentale »), paragraphe de réassurance sur le ton humain, CTA « Réserver mon audit ». | Page service « Qualification IA et prise de rendez-vous automatisée » (cluster C9 de `02-mots-cles.md`) et pages sur les rendez-vous non honorés et l'acompte (C8). | Le CTA dit « audit » alors que le reste du site dit « diagnostic » : harmoniser. Utilise `id="technologie"` et les classes `.approche-*`, ce qui créerait un doublon d'ID si Approche est sur la même page. |
| `SiteEffects.countUp` (`[data-num]`) | Animation de compteur, inutilisée. | Peut animer les vrais chiffres de Résultats. | — |

Les nouveaux composants du working tree (`PourQui`, `SubpageShell`, `Breadcrumbs`, `JsonLd`, `components/content/*`, `components/templates/*`) n'ont pas été audités.

---

## 8. Plan d'action recommandé (ordre d'exécution)

**Semaine 1 : débloquer**
1. DNS : redirection 301 de l'apex vers `www` (C1).
2. `npm i sharp`, config `images`, vérification du WebP/AVIF en prod (H1, H2).
3. Mentions légales réelles, lien CGV corrigé ou retiré (C3). Politique de confidentialité complétée (M12).
4. Dépôt GitHub privé. Tableau de bord sorti du site ou protégé (H8).
5. Search Console : sitemap, inspection, demande d'indexation. Analytics et suivi des réservations Cal.com (H6).

**Semaines 2–3 : SEO de base et conversion**
6. Canonical page par page (H4). Sitemap limité aux URL indexables (M2).
7. Title, description, H1, H2 (H5). JSON-LD unifié avec la fondatrice (M1).
8. Cal.com chargé à la demande, avec squelette et lien de secours (H3).
9. CTA du hero en bouton, fusion CtaFinal + Calendar, CTA secondaire (H9).
10. En-têtes de sécurité, cache des assets, `poweredByHeader: false` (M11, M13).

**Mois 1–2 : contenu et confiance**
11. Cas clients réels, fondatrice incarnée, remplacement de l'image IA (C4, M10).
12. Pages services, métiers et soins, puis articles du blog selon `02-mots-cles.md` (C2).
13. Page LinkedIn entreprise, Google Business Profile, harmonisation des handles, citations (H7).
14. Nettoyage CSS et refonte de la Méthode, de l'agenda démo, du bloc Sélection, de la nav (M6–M9, M15, M16). Accessibilité (M5).

---

## Annexe A : captures (`docs/seo/captures/`)

| Fichier | Contenu |
|---|---|
| `desktop-1440-above-the-fold.png` | Hero desktop (nav taupe, CTA texte) |
| `desktop-1440-fullpage.jpg` | Page complète en 1440 px. Le calendrier n'était pas encore chargé au moment de la capture : c'est le vide observé en H3 |
| `mobile-390-above-the-fold.png` | Hero mobile + barre CTA |
| `mobile-390-fullpage.jpg` | Page complète en 390 px |
| `mobile-390-sans-js-above-the-fold.png` / `-fullpage.jpg` | Rendu sans JavaScript : les blocs `.reveal` sont invisibles (M3) |
| `desktop-404-above-the-fold.png` | Page 404 |
| `mobile-confidentialite-*.png/jpg` | Page de confidentialité en mobile |
| `sections/desktop-03…13-*.jpg` | Sections desktop : Constat, Méthode, Agenda, Stats, Sélection, Fondatrice, FAQ, CTA, Calendrier, Footer |
| `sections/mobile-04/06/09/12-*.jpg` | Sections mobile : Méthode, Agenda, Fondatrice, Calendrier vide pendant le chargement |
| `sections/mobile-390-menu-ouvert.jpg` | Menu mobile ouvert (M16) |
| `sections/*-agenda-calcom-fr.jpg` | Embed Cal.com chargé, locale fr-FR / Europe/Paris |

## Annexe B : données brutes utiles

- PSI : `HTTP 429 RESOURCE_EXHAUSTED: Quota exceeded for quota metric 'Queries' and limit 'Queries per day'` (mobile et desktop). Relancer plus tard ou utiliser une clé API (`&key=`).
- Contrastes calculés (149 éléments textuels, desktop) : 7 échecs, tous dans `AgendaQuiSeRemplit` (`.day` à 3,18:1 en 10 px, `.foot` à 3,0:1 en 12,5 px). Tous les autres textes passent AA.
- Navigation au clavier : l'ordre de tabulation est logique (marque, liens de nav, CTA de nav, CTA du hero, Méthode, Sélection…). Les liens de la nav ont un anneau de focus rose peu visible sur fond crème ; les autres utilisent l'anneau par défaut du navigateur.
- Couverture CSS : 159 581 octets de CSS propre chargés, 57 599 utilisés en 1440 px (64 % inutilisés) et 63 903 en 390 px (60 % inutilisés).
