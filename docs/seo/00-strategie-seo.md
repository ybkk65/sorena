# Stratégie SEO · Sorena (sorenaagency.com)

*Version du 8 octobre 2026. Ce document résume les quatre études du dossier `docs/seo/` et fixe le plan d'action.*

| Document | Contenu |
|---|---|
| [01-concurrents.md](./01-concurrents.md) | 12 agences concurrentes, résultats Google sur 29 requêtes, contenus manquants à exploiter |
| [02-mots-cles.md](./02-mots-cles.md) | 398 suggestions Google analysées, 14 groupes de mots-clés, attribution mot-clé → page |
| [03-cible-et-reglementation.md](./03-cible-et-reglementation.md) | Marché, profils de clientes types, cadre légal (médecins, laser, Meta, acompte, RGPD, IA) |
| [04-audit-technique-design.md](./04-audit-technique-design.md) | Audit technique, on-page et design du site en production, captures d'écran |

---

## 1. En bref

- **Point de départ.** Le site ne comptait qu'une seule page indexable. Ses titres étaient des slogans, sans mot-clé métier. Aucune recherche ne le faisait apparaître, y compris sur le nom de marque. Note d'audit : environ 4/10.
- **Le marché.** C'est une niche, et elle est encore peu travaillée en SEO.
  - Les requêtes « agence marketing + métier » ont peu de volume, mais elles attirent exactement les bons prospects.
  - Sur une partie d'entre elles, aucune agence spécialisée n'est positionnée : « agence marketing cryolipolyse », « agence facebook ads esthétique ».
  - Le vrai volume est ailleurs : dans les problèmes quotidiens des gérantes (« comment attirer des clientes », « budget pub Facebook », « rendez-vous non honorés », « acompte »). Ces requêtes sont aujourd'hui tenues par des logiciels de réservation et des médias, pas par des agences.
- **La stratégie.** Trois piliers, servis par une architecture multi-pages :
  1. **Pages « argent »** par métier et par levier, pour convertir.
  2. **Guides pratiques** sur les problèmes des gérantes, pour le volume.
  3. **Guides réglementaires** sourcés, pour l'autorité, la confiance et les citations par les IA.
- **Le différenciateur à marteler.** Sorena est la seule agence qui va de la publicité jusqu'au rendez-vous **honoré** : offre de valeur plutôt que promotion, qualification par IA, relances, acompte, une seule maison par zone de 10 km. Aucun concurrent ne couvre l'acompte et les absences.
- **Attention.** Le cadre légal limite ce que l'on peut vendre et promettre (§7). Cela devient un argument de confiance.

---

## 2. La cible

Cible B2B : les personnes qui dirigent l'établissement, pas leurs clientes. Profils détaillés dans le document 03, §3.

| Profil | Qui | Ce qui l'empêche de dormir | Ce qu'elle tape dans Google |
|---|---|---|---|
| **Claire**, institut indépendant premium | Gérante de 1 à 9 salariés, soins signature, quelques technologies | Agenda irrégulier, clientes « chasseuses de promo », lapins, pas le temps de répondre aux messages | « comment attirer des clientes institut », « publicité facebook institut », « acompte institut », « rendez-vous non honoré » |
| **Nadia**, centre laser ou minceur équipé | Machines coûteuses à amortir (laser, IPL, radiofréquence…) | Créneaux machine vides, forfaits abandonnés, concurrence des chaînes à bas prix, décret laser | « marketing épilation laser », « rentabiliser laser », « décret épilation laser », « marketing centre minceur » |
| **Dr Martin**, médecin à activité esthétique | Cabinet ou centre médical | Envie de visibilité, mais la publicité payante lui est interdite | « publicité médecine esthétique », « ordre des médecins réseaux sociaux » |
| **Réseau ou multi-centres** | Direction d'une franchise ou d'un groupe | Processus reproductible, reporting, conformité | « agence acquisition centre esthétique » |

> **Décision structurante.** L'offre de Sorena (pub payante, offre de valeur, acompte) est **incompatible avec la déontologie médicale** (document 03, §4.1). Les médecins sont donc servis par du **contenu informatif** (guide réglementaire), pas par une page commerciale. Une offre « médecins » sans publicité payante reste possible, mais c'est une décision business à prendre (§10).

---

## 3. Le paysage concurrentiel

Détail dans le document 01.

| Concurrent | Ce qu'il fait bien | Sa faiblesse |
|---|---|---|
| **Kaelys Performance** | L'offre la plus proche de Sorena : Meta, un institut par ville, garantie écrite | SEO quasi nul (1 page) |
| **Dermio** | 31 pages villes, FAQ balisée, prix affiché (497 €/mois) | Pages villes répétitives, pas de blog |
| **DM Solution** | 63 articles, série « rentabilité de [soin] en institut » | Pas d'angle « clientes qui se présentent » |
| **Beauty by Spationaute** | Environ 209 articles, annuaire | Contenus génériques, tutoiement |
| **Evoscale-ai, Recepia** | Présents sur « agence marketing épilation laser » | Peu de contenu, technique négligée |
| **Logiciels** (Booksy, Planity…) et **médias** (Les Nouvelles Esthétiques) | Tiennent les requêtes informationnelles | Aucune expérience de l'acquisition payante |

**Positionnement de Sorena** : premium (vouvoiement, « maisons »), fondatrice incarnée, conformité affichée, et la seule offre qui traite le parcours jusqu'à la présence en cabine.

---

## 4. Les mots-clés : trois piliers

Les volumes ne sont pas mesurés : ce sont des estimations tirées de Google Suggest et des pages de résultats. **À valider dans la Search Console et dans Keyword Planner** (document 02, §1.3).

### Pilier 1 : pages « argent » (intention commerciale)

| URL | Mot-clé principal | Statut |
|---|---|---|
| `/` | agence marketing esthétique | Optimisée (title, H1, section « Pour qui », FAQ balisée) |
| `/institut-de-beaute` | agence marketing institut de beauté | Créée |
| `/centre-laser` | marketing épilation laser | Créée |
| `/centre-minceur` | marketing centre minceur (+ cryolipolyse) | Créée |
| `/publicite-facebook-instagram` | publicité facebook institut de beauté | Créée |
| `/ia-prise-de-rendez-vous` | ia prise de rendez-vous institut | Créée |
| `/rendez-vous-non-honores` | rendez-vous non honorés institut de beauté | Créée |
| `/a-propos` | Sorena, Sofya (marque et confiance) | Créée |

### Pilier 2 : guides pratiques (volume, haut et milieu d'entonnoir)

| URL | Mot-clé principal | Statut |
|---|---|---|
| `/ressources/attirer-clientes-institut` | comment attirer des clientes en institut de beauté | Publié |
| `/ressources/budget-publicite-facebook-institut` | budget publicité facebook institut de beauté | Publié |
| `/ressources/acompte-rendez-vous-institut` | acompte institut de beauté | Publié |
| `/ressources/affiche-rendez-vous-non-honore` | affiche rendez-vous non honoré institut | Publié |

### Pilier 3 : guides réglementaires (autorité, confiance, citations par les IA)

| URL | Mot-clé principal | Statut |
|---|---|---|
| `/ressources/decret-epilation-laser` | décret épilation laser esthéticienne | Publié |
| `/ressources/fiche-client-epilation-laser` | fiche client épilation laser | Publié |
| `/ressources/publicite-medecine-esthetique` | publicité médecine esthétique | Publié |
| `/ressources/decret-publicite-chirurgie-esthetique` | décret publicité chirurgie esthétique 2026 | Publié (actualité à exploiter vite) |

**Règles anti-cannibalisation** (document 02, §5.5) :
- Une requête principale correspond à une seule URL.
- Les articles renvoient vers la page « argent » de leur sujet, avec une ancre exacte.
- L'accueil ne cible jamais « institut de beauté » dans son title.
- Pas de page `/soins/epilation-laser`, qui concurrencerait `/centre-laser`.

---

## 5. Architecture du site

```
/                                   Accueil : agence marketing esthétique
├── Pour qui (métiers)
│   ├── /institut-de-beaute
│   ├── /centre-laser
│   └── /centre-minceur
├── Le protocole (leviers)
│   ├── /publicite-facebook-instagram
│   ├── /ia-prise-de-rendez-vous
│   └── /rendez-vous-non-honores
├── /ressources                     Guides (index)
│   └── /ressources/[article]
├── /a-propos                       Sofya, principes, méthode
└── Légal : /mentions-legales, /confidentialite, /cookies (noindex)
```

Chaque page d'entrée reprend la fin de parcours de l'accueil (CTA, agenda, footer) : on peut réserver le diagnostic **sans revenir à l'accueil**.

**Maillage interne.**
- L'accueil (la page la plus forte) renvoie vers toutes les pages métiers et leviers, via la section « Pour qui ».
- Le footer liste les métiers et les leviers.
- Chaque page a un bloc « À lire aussi » et des liens contextuels dans le texte.
- Un fil d'Ariane est balisé en `BreadcrumbList`.

---

## 6. Ce qui a été livré dans ce lot

**Contenu et structure**
- 6 pages métiers et leviers, 8 guides, la page À propos, la page Ressources et les mentions légales.
- Système de contenu typé (`content/`) : ajouter une page ou un article revient à ajouter un fichier, et le sitemap se met à jour tout seul.
- Gabarits SEO : H1 avec le mot-clé, fil d'Ariane, FAQ, sommaire, sources citées, auteur et dates.
- Typographie française automatique : espaces insécables avant `: ; ? ! %` et dans les guillemets « ».

**SEO technique**
- Title de l'accueil : « Agence marketing esthétique pour centres et instituts · Sorena ». Meta description réécrite, meta keywords supprimées.
- Le H1 de l'accueil porte désormais « Agence marketing esthétique », sans changement visuel.
- Canonical déclaré page par page. Il était défini dans le layout et toutes les pages en héritaient.
- Données structurées :
  - `Organization`, avec fondatrice, domaines d'expertise et réseaux ;
  - `WebSite`, `Service`, `BlogPosting`, `FAQPage`, `BreadcrumbList` et `AboutPage` selon les pages ;
  - suppression du doublon `ProfessionalService`.
- Sitemap : il ne liste plus que les pages indexables, avec des dates de modification réelles.
- `sharp` ajouté : les images Next.js étaient servies en JPEG original en production. Formats AVIF et WebP activés.
- Cal.com chargé à la demande, à l'approche de l'agenda, au lieu de l'être dès l'arrivée. C'était environ 2 Mo sur 2,7 Mo, plus 3 cookies tiers. Le défilement dans le défilement sur mobile est supprimé et un lien de secours a été ajouté.
- En-têtes de sécurité : HSTS, nosniff, X-Frame-Options, Referrer-Policy, Permissions-Policy. `X-Powered-By` masqué. Cache d'une semaine sur `/assets`.
- `X-Robots-Tag: noindex` sur la page privée `pilotage-…html`.
- Le contenu reste lisible sans JavaScript : les animations ne masquent plus rien si le JS ne s'exécute pas.

**Design et UX**
- Barre de navigation crème opaque. Le voile taupe venait d'une règle CSS en double.
- CTA du hero transformé en vrai bouton, avec la mention « 30 min · offert · sans engagement ».
- Agenda de démonstration rempli à 28 créneaux sur 30 (il en montrait 13 sur 30 pour illustrer « nous remplissons votre agenda »).
- « Pas pour vous si » marqué d'une croix au lieu d'une coche.
- Accessibilité : repère `<main>`, titres du footer en `h3`, anneau de focus visible, barre mobile masquée sortie du parcours clavier.
- Crédit « Site réalisé par Niyya Agency » dans le footer.

**Conformité**
- FAQ « médecins » corrigée : l'ancienne réponse était juridiquement inexacte.
- HIFU, cryothérapie et microneedling retirés du bandeau des soins : ils sont réservés aux médecins ou à haut risque en institut.
- « Garantir la présence » remplacé par « réduire les absences ».
- Création de la page mentions légales, avec des **champs à compléter** (§10).

---

## 7. Garde-fous éditoriaux (à respecter dans tout nouveau contenu)

Source : document 03, §5.

1. **Jamais de publicité payante pour des médecins** ni pour des actes médicaux, épilation laser par un médecin comprise.
2. **Ne pas promouvoir** HIFU, cryothérapie, microneedling ni injections pour des instituts. Cryolipolyse : zone orange, sans aucune promesse.
3. **Interdit** : « épilation définitive », « résultats garantis », « sans risque », « perdez X kg », les questions du type « Marre de… ? ».
4. **Aucun chiffre ni témoignage** sans preuve (pratique commerciale trompeuse, applicable aussi entre professionnels). Les chiffres de `components/Resultats.tsx` (« +147 % », etc.) ne doivent pas être publiés en l'état.
5. **IA** : toujours présentée comme une IA (AI Act, depuis le 2 août 2026). Pas de questions de santé sans consentement explicite.
6. **Acompte** : arrhes ou acompte qualifiés, politique d'annulation réciproque, information donnée avant le paiement.

---

## 8. Plan de contenu (6 prochains mois)

Rythme conseillé : **2 contenus par mois**, chacun relié à une page « argent ». Liste priorisée issue des documents 01 et 02.

| Mois | Contenu | Mot-clé principal | Relie vers |
|---|---|---|---|
| Nov. 2026 | Rentabilité de l'épilation laser en institut | rentabilité épilation laser | /centre-laser |
| Nov. 2026 | Message de rappel de rendez-vous : modèles SMS | message rappel rendez-vous institut | /rendez-vous-non-honores |
| Déc. 2026 | Remplir son agenda en institut (créneaux creux, liste d'attente) | remplir son agenda en institut | /institut-de-beaute |
| Déc. 2026 | Idées de promotions… sans brader (offre de valeur) | idée promotion institut de beauté | /publicite-facebook-instagram |
| Janv. 2027 | Fidéliser ses clientes en institut | fidéliser clientes institut de beauté | /ia-prise-de-rendez-vous |
| Janv. 2027 | Offre de lancement d'un institut | offre de lancement institut de beauté | /institut-de-beaute |
| Févr. 2027 | Rentabiliser une machine de cryolipolyse (avec le cadre légal) | rentabiliser machine cryolipolyse | /centre-minceur |
| Févr. 2027 | Développer son institut de beauté (chiffre d'affaires, stratégie) | développer son institut de beauté | /institut-de-beaute |
| Mars 2027 | **Étude de cas n°1** (vraie cliente, chiffres documentés, accord écrit) | marque + soin | page métier |
| Mars 2027 | Agence, formation, freelance ou franchise : que choisir ? | agence marketing institut de beauté prix | /institut-de-beaute |
| Avr. 2027 | Meta Ads ou Google Ads pour un centre esthétique | publicité centre esthétique | /publicite-facebook-instagram |
| Avr. 2027 | Réponse automatique Instagram pour institut | réponse automatique instagram institut | /ia-prise-de-rendez-vous |

À tester ensuite :
- **Outil « ma zone est-elle libre ? »** : contenu introuvable chez les concurrents, et base de pages locales non dupliquées.
- **Calculateur du coût des lapins** : idée d'outil interactif.
- **Pages villes** : seulement avec un contenu local réel (statut de la zone, marché local), jamais un gabarit dupliqué comme Dermio.

**Mise à jour des articles réglementaires.** Les textes évoluent : revoir les 4 guides réglementaires **tous les 3 mois**. Le gouvernement prépare de nouveaux textes sur la médecine esthétique.

---

## 9. Autorité, notoriété et recherche par IA

Le site part de zéro : sans signaux externes, même un bon contenu rankera lentement.

1. **Page entreprise LinkedIn « Sorena »**, distincte du profil actuel, qui est un profil personnel nommé « Sorena Agency ». Sofya y publie des extraits des guides.
2. **Fiche Google Business Profile** (prévue). Catégorie « Agence de marketing ». Nom, adresse et téléphone identiques partout (site, LinkedIn, annuaires). Si l'adresse n'est pas publique, déclarer une zone desservie.
3. **Annuaires d'agences** : Sortlist, La Fabrique du Net. Ils sont cités par les concurrents et donnent des liens et des avis.
4. **Partenariats à forte valeur** :
   - les **organismes de formation socle laser et IPL** (décret 2024-470), qui ont besoin de contenus pour leurs stagiaires ;
   - les **fabricants et distributeurs d'appareils** ;
   - les **logiciels de réservation**, pour un article invité sur l'acompte.
5. **Médias et événements pro** : tribune ou interview dans Les Nouvelles Esthétiques (partenaire de NPcorp, donc accessible), présence au Congrès international Esthétique & Spa et à MCB by Beauté Sélection.
6. **Recherche par IA (AI Overviews, ChatGPT, Perplexity)** :
   - chaque guide ouvre sur une réponse directe et datée ;
   - les FAQ sont balisées ;
   - les sources officielles sont citées ;
   - les passages sont autonomes et citables.
   À compléter par un fichier `llms.txt` quand le contenu sera stabilisé.
7. **Avis clients** : collecter des avis authentiques (Google, annuaires) dès les premières clientes.

---

## 10. Ce qu'il te reste à faire (hors code)

| Priorité | Action | Pourquoi |
|---|---|---|
| **Critique** | **Rediriger `sorenaagency.com` vers `https://www.sorenaagency.com`** (301). Aujourd'hui le domaine sans www ne répond pas du tout. Options : redirection web LWS, ou DNS chez Cloudflare avec une redirection 301. | Toute personne qui tape l'adresse sans www tombe sur une erreur |
| **Critique** | **Compléter les mentions légales** (`app/mentions-legales/page.tsx`, objet `EDITOR`) : dénomination ou nom (EI), forme juridique, siège, SIREN, TVA, directeur de la publication. Ne pas mettre en ligne avec les crochets. | Obligation légale (LCEN). Je n'ai trouvé aucune immatriculation « Sorena Agency » publique |
| **Critique** | **Passer le dépôt GitHub `ybkk65/sorena` en privé.** | La page privée `pilotage-…html` et l'historique sont publics |
| Haute | **Search Console** : la propriété existe déjà (TXT présent). Soumettre `sitemap.xml`, demander l'indexation de l'accueil et des 6 pages « argent ». | Accélère la découverte |
| Haute | **Mesure** : analytics sans bannière (Plausible, ou Matomo en mode exempté CNIL) et événement « réservation » Cal.com. | Sans mesure, impossible de piloter le SEO |
| Haute | **Valider les affirmations** : l'exclusivité de 10 km et « on poursuit sans frais » doivent figurer dans le contrat ou les CGV. Faire relire les guides réglementaires (laser, acompte, médecine) par un juriste avant de les pousser. | Pratiques commerciales trompeuses |
| Haute | **Preuves** : obtenir 1 ou 2 études de cas réelles (chiffres, période, accord écrit) et des avis authentiques. Vérifier les droits de la photo « Sofya » et de l'image du hero (générée par IA, logo visible). | Confiance (E-E-A-T) |
| Moyenne | **Décider de l'offre médecins** : pas d'offre, ou une offre sans pub payante (site informatif, contenus, organisation des demandes). | Conditionne une éventuelle page `/medecine-esthetique` |
| Moyenne | Créer la page LinkedIn entreprise et corriger les liens du footer (lien Facebook de partage, profil LinkedIn personnel). | Cohérence de l'entité de marque |
| Moyenne | Bannière de consentement **avant** d'activer le pixel Meta (`NEXT_PUBLIC_META_PIXEL_ID`). | CNIL |
| Moyenne | Compléter la politique de confidentialité : responsable de traitement, bases légales, transferts hors UE (Cal.com, Railway), droit de réclamation auprès de la CNIL. | RGPD |

---

## 11. Mesurer le résultat

| Indicateur | Outil | Cible à 3 mois | Cible à 6–12 mois |
|---|---|---|---|
| Pages indexées | Search Console | Les 16 pages publiques indexées | Indexation de chaque nouveau contenu sous 1 semaine |
| Requête de marque « Sorena agence » | Search Console | 1re position | 1re position + panneau de marque (fiche Google) |
| Impressions sur les requêtes des piliers 1 et 3 | Search Console | Premières impressions | Top 10 sur les requêtes « agence marketing + métier » et les guides réglementaires |
| Clics organiques vers les pages « argent » | Search Console / analytics | Suivi mensuel | En hausse chaque mois |
| **Diagnostics réservés depuis le SEO** | Cal.com + analytics | Mesure en place | L'indicateur qui compte |

Pas d'objectif de trafic chiffré : sans volumes mesurés, un chiffre serait inventé. On fixera des cibles chiffrées après 8 à 12 semaines de données Search Console.

---

## 12. Feuille de route

- **Semaine 1** : actions critiques du §10 (redirection apex, mentions légales, dépôt privé), mise en ligne de ce lot, Search Console et sitemap, analytics.
- **Mois 1** : page LinkedIn entreprise, inscriptions aux annuaires, fiche Google Business Profile, relecture juridique des guides, première étude de cas en préparation.
- **Mois 2 à 3** : 2 contenus par mois (§8), premières démarches de partenariats (formation laser, fabricants), premier point Search Console pour réattribuer les mots-clés selon les données réelles.
- **Mois 4 à 6** : études de cas, outil « ma zone est-elle libre ? », pages par soin seulement si la Search Console montre la demande, mise à jour trimestrielle des guides réglementaires.
