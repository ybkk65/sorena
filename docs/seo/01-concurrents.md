# Analyse concurrentielle SEO — Sorena

**Date de la recherche :** 8 octobre 2026
**Périmètre :** marché France, requêtes en français. On compare avec Sorena (https://www.sorenaagency.com), agence d'acquisition de clientèle pour centres, instituts, cliniques et cabinets esthétiques.

---

## 0. Méthodologie et limites (à lire avant le reste)

- **Recherche SERP.** 34 requêtes ont été lancées avec l'outil de recherche web intégré : les 9 requêtes demandées plus 25 variantes, dont 20 sont présentées en §4. Ce moteur **n'est pas Google.fr géolocalisé** : l'ordre des résultats donne une tendance, pas une position Google réelle. Il faudra valider avec un outil de suivi de positions réglé sur la France (Semrush, Ahrefs, SE Ranking ou Search Console une fois le site indexé).
- **Sites concurrents.** Ils ont été visités avec WebFetch. Les sitemaps, les balises `<title>`, les meta descriptions, les H1 et les données structurées ont été relevés avec `curl` le 8 octobre 2026.
- **Chiffres des concurrents.** Nombre de clients, CA généré, ROI, avis : ce sont **leurs propres déclarations, non vérifiées**. Elles sont reprises telles qu'affichées. Quand deux sources se contredisent, c'est signalé.
- **Ce qui n'a pas été mesuré**, faute d'outil : volumes de recherche, autorité de domaine, profils de backlinks, trafic estimé. Rien n'est inventé sur ces points. À compléter dans un second livrable avec un outil SEO payant.

---

## 1. Résumé exécutif

1. **Le marché des agences d'acquisition spécialisées esthétique est jeune et très fragmenté.** On compte une douzaine d'acteurs. Presque tous ont un **site d'une seule page** tourné vers la conversion (prise d'appel), avec très peu de SEO. Sorena est dans le même cas aujourd'hui.
2. **Trois concurrents seulement font un vrai travail SEO, chacun avec une stratégie différente :**
   - **Dermio** : 31 pages villes sur un même gabarit. Elles ressortent même sur des requêtes génériques et sur d'autres villes.
   - **DM Solution** : 63 articles, dont une série « [technologie] en institut : rentabilité 2026 » et des articles de fond d'entonnoir (« prix agence », « choisir son agence », « contrat agence »…).
   - **Beauty by Spationaute** : environ 209 articles de conseils génériques, un annuaire de centres et un outil « score de visibilité ».
   - S'y ajoute **SeeSmile**, agence SEO santé (pas d'acquisition payante) : pages secteur × ville et page « centre esthétique » très optimisée.
3. **Le concurrent le plus proche de Sorena en positionnement est Kaelys Performance.** Il propose une agence Meta pour centres esthétiques, « un institut par ville » et une garantie écrite (« investissement doublé en 90 jours, sinon on continue gratuitement »). Son SEO est presque nul : une page plus une page d'avis.
4. **Les requêtes transactionnelles « agence + soin » sont peu disputées.** Sur « agence marketing cryolipolyse », aucune agence française n'apparaît. Sur « agence facebook ads esthétique », aucune agence spécialisée française non plus (généralistes et une agence québécoise). Sur « agence marketing épilation laser », seuls Evoscale-ai et Recepia sont présents, au milieu de franchises.
5. **Les requêtes informationnelles sont tenues par des non-agences.** « Trouver des clientes », « remplir son agenda », « no-show », « vendre une cure » : on y trouve Les Nouvelles Esthétiques, des logiciels de réservation (Booksy, Planity, Kalendes, Fideneo, LS Institut), des formations (Boost Ton Salon, Centre Européen de Formation) et des fabricants de machines (Contour Paris, Deltanova). **Aucune agence d'acquisition n'y figure.**
6. **Plusieurs éléments de l'offre Sorena ne sont mis en avant par aucun concurrent :**
   - l'acompte à la réservation contre les lapins ;
   - l'offre de valeur plutôt que la promo ;
   - une zone d'exclusivité définie en kilomètres (10 km), et non « par ville ».

---

## 2. Tableau récapitulatif des concurrents directs (agences)

Légende menace : **positionnement** = proximité avec l'offre Sorena ; **SEO** = capacité actuelle à capter du trafic organique.

| # | Concurrent | URL | Cible principale | Prix affiché | Garantie / exclusivité | Actifs SEO observés | Menace positionnement | Menace SEO |
|---|---|---|---|---|---|---|---|---|
| 1 | Kaelys Performance | kaelysperformance.com | Centres esthétiques indépendants (laser, cryo, minceur, visage) | Non (budget Meta 500–750 €/mois affiché) | Écrite : « investissement doublé en 90 jours » sinon gratuit ; **1 institut par ville** | 1 page + /avis, sitemap vide | **Très forte** | Faible |
| 2 | Dermio | dermio.fr | Instituts beauté et minceur | **497 €/mois** (HT ou TTC selon l'endroit, incohérent) + 150 € de pub minimum | Aucune | **31 pages villes**, FAQ + schema riche, pas de blog | Forte | **Forte** |
| 3 | DM Solution | dmsolution.fr | Centres minceur et anti-âge | Non | Aucune | **63 articles** (technos + fond d'entonnoir), schema Service | Moyenne | **Forte** |
| 4 | NPcorp | npcorp.fr | Instituts et centres (minceur, anti-âge, épilation), vente de cures | Non | « Résultats si conditions remplies » ; sélection sur candidature | Pages témoignages, présentiel, groupe Facebook, partenariat Nouvelles Esthétiques | Forte | Moyenne (notoriété) |
| 5 | Evoscale-ai | evoscale-ai.com | Centres laser et esthétiques, cures supérieures à 1 000 € | **750 / 1 000 / 1 500 €/mois** + formation 499 € | Sans engagement ; diagnostic offert | 9 pages ; blog = articles de démo de thème indexés | Forte | Faible (mais n°1 sur « agence marketing épilation laser ») |
| 6 | GloRise | glorise-agency.com | Instituts de beauté | Budget pub minimum 300 €/mois | **Exclusivité géographique** (zone de chalandise) | Site rendu en JS (HTML ~2,5 Ko), aucun contenu crawlable | Forte | Très faible |
| 7 | Recepia | recepia.fr | **Épilation laser uniquement** | Non (3 formules) | Sans engagement | 1 page, FAQ schema | Moyenne (niche) | Faible |
| 8 | Vecteur Digital | vecteur-digital.fr | Instituts et centres | « 100 € × 12 mois » (exemple) | **RDV garantis contractuellement par soin** | 1 page, pas de meta description | Forte | Très faible |
| 9 | Blade Agency | bladeagency.fr | Instituts de beauté | Non | « Résultats garantis » sans détail | 1 page | Moyenne | Faible |
| 10 | Beauty by Spationaute | beauty.spationaute.io | Centres esthétiques (visibilité 360°) | Page tarifs séparée | Aucune | **~209 articles**, annuaire, score de visibilité, bilan 30 min offert | Moyenne | **Moyenne-forte** |
| 11 | GGC Studio | ggc-studio.com | Médecins, chirurgiens (IDENTITÉ) et centres non médicaux (PERFORM) — Paris | Non | 1er mois satisfait ou remboursé ; PERFORM : 150 leads/90 j, remboursement si moins de 60 leads en 45 j, **exclusivité géographique** | Pages offres + journal (6 articles) | Forte (cliniques) | Faible |
| 12 | SeeSmile | seesmile.fr | Santé (dont centres esthétiques non médicaux) — SEO et site | **Site 2 500–6 500 € HT ; SEO 600–1 200 €/mois** | Aucune | ~101 pages (secteurs × villes) + 41 articles, schema riche | Faible (autre métier) | **Forte** sur « agence … centre esthétique » |

**Acteurs secondaires repérés** (fiche courte en §3.13) : Shortcuts, Laxo, Boost Ton Salon, Le Labo IA, Atelier Dotcom, The Aesthetic Agency, Alioze, Bforbiz, Futur Digital, INscalUp, plus les agences québécoises Plus Humain et Delisoft qui apparaissent dans les SERP françaises.

---

## 3. Fiches concurrents

### 3.1 Kaelys Performance — le concurrent le plus proche de Sorena

- **URL :** https://kaelysperformance.com/
- **Title :** « Kaelys · Agence d'acquisition pour centres esthétiques · Rentabilité garantie »
- **Meta description :** « Kaelys, l'agence d'acquisition dédiée aux centres esthétiques indépendants en France. Plus de RDV, plus de cures vendues, rentabilité 100% garantie en 90 jours. »
- **H1 :** « L'agenda plein, sans poster sur Instagram. Votre investissement doublé en 90 jours. Garanti par écrit. »
- **H2 clés :** « La promesse Kaelys », « La méthode », « Un logiciel de pilotage que les autres vont vous envier », « Votre simulation », « Votre dernière agence », « Notre engagement, écrit au contrat », « Les formules », « Votre ville est-elle encore libre ? »
- **Positionnement :** publicité Meta, formation à la vente en cabine (« Méthode ×2 »), assistante dédiée (Premium) et logiciel de suivi. Cible : centres dont les soins valent 500 € et plus.
- **Offre :** Découverte (4 semaines, sans engagement), Standard (90 jours, avec garantie), Premium (90 jours, avec assistante). **Aucun prix d'honoraires affiché.** Budget Meta conseillé : « 500 à 750 € / mois versés directement à Meta ». Parrainage : 150 €/mois offerts à la marraine et à la filleule.
- **Garantie :** si à 90 jours les cures signées ne valent pas le double de l'investissement total (honoraires + pub), l'agence continue gratuitement (pub, formation, suivi WhatsApp).
- **Exclusivité :** « Un institut par ville ».
- **CTA principal :** « Réserver mon audit gratuit ».
- **Signaux de confiance (déclarés) :** 4,66/5, « 6 227 € de cures signées dès le 1er mois, en moyenne », 96 % de présence aux RDV confirmés, « 131 481 € » de cures générées, témoignages vidéo YouTube (Laurie : « 21 600 € » le premier mois), captures WhatsApp.
- **Structure SEO :** une seule page plus /avis. Sitemap vide. Seul schema : `WebPage`. Site construit sur LeadConnector (GoHighLevel). **Pas de blog, pas de pages villes, pas de pages par soin.**
- **Forces :** offre presque identique à celle de Sorena, garantie très explicite, preuves chiffrées et vidéo, simulateur de rentabilité interactif.
- **Faiblesses :** SEO quasi inexistant. Exclusivité « par ville », donc moins fine que les 10 km de Sorena. Prix opaques. Ton très « growth/hustle ».
- **Ce qu'il faut en retenir pour Sorena :** la garantie et l'exclusivité ne suffisent plus à se distinguer, car Kaelys les affiche déjà. Le **périmètre en km**, l'**acompte anti-lapins**, l'**offre de valeur** et un **site qui ranke** peuvent faire la différence.

### 3.2 Dermio — le gagnant actuel des pages villes

- **URL :** https://www.dermio.fr/
- **Title home :** « Dermio — Boostez votre institut de beauté »
- **Meta description :** « Remplissez l'agenda de votre institut de beauté avec des rendez-vous qualifiés et augmentez votre chiffre d'affaires. Agence marketing spécialisée instituts. »
- **H1 :** « Boostez votre institut avec notre expertise ». Le site enchaîne plusieurs titres de niveau H1 : « Obtenez de nouveaux clients tous les jours », « Doublez vos prises de rendez-vous », « Combien de revenus laissez-vous sur la table ? », « Un forfait unique, tout inclus »…
- **Offre :** gestion complète des pubs (visuels, formulaires, traitement des prospects), SMS et e-mails automatiques, reporting mensuel, intégration Planity. Sans frais de mise en place, sans engagement.
- **Prix :** 497 €/mois. **Incohérence sur le site :** le bloc tarif indique « 497€ HT/mois », alors que la FAQ (et son balisage FAQPage) dit « abonnement mensuel fixe à 497 € TTC ». Budget pub minimum : 150 €. Tableau comparatif « Autres agences : frais d'installation de 1 500 à 2 000 €, forfait +1 500 € HT, budget pub minimum 500 € ».
- **CTA :** « Nous contacter », « Je veux ces résultats ».
- **Signaux de confiance (déclarés) :** +30 instituts accompagnés, 4,9 d'avis, « ROI moyen de 16 », +45 % de réservations, +30 nouveaux clients/mois. Témoignages : LGA Minceur (Lyon), BodySunClinic (Toulouse), Cryostal Concept (Marseille).
- **Structure SEO :** 36 URL dans le sitemap. Home, /offre, /contact, pages légales, et **31 pages « /agence-institut-beaute-[ville] »** (Paris, Lyon, Marseille, Toulouse, Bordeaux, Lille, Nice, Nantes, Montpellier, Strasbourg, Rennes, Grenoble, Aix, Annecy, Tours, Reims, Clermont, Dijon, Metz, Avignon, Toulon, Angers, Nîmes, Villeurbanne, Le Havre, Saint-Étienne, La Rochelle, Perpignan, Orléans, Mulhouse, Amiens).
- **Page ville type (Bordeaux) :**
  - Title « Agence Marketing Institut de Beauté à Bordeaux | Dermio » ; H1 « Boostez la croissance de votre institut à Bordeaux ».
  - Environ 1 200 mots, sur un gabarit commun avec un paragraphe local (quartiers Chartrons, Caudéran, Bastide… ; communes Mérignac, Pessac, Talence).
  - FAQ « Questions fréquentes — Bordeaux » ; 30 liens vers les autres villes.
  - Les témoignages ne viennent pas de Bordeaux.
- **Données structurées :** LocalBusiness, Service + Offer (497 €/mois), FAQPage, AggregateRating, Review.
- **Où il ressort :** « agence marketing institut de beauté » (pages Bordeaux et La Rochelle), « agence publicité centre esthétique », « publicité facebook institut de beauté nouvelles clientes agence », « agence marketing institut de beauté Lyon » (c'est la page **La Rochelle** qui sort), « combien coûte une agence marketing pour institut de beauté » (page Bordeaux).
- **Forces :** prix affiché (rassurant, capte les requêtes « prix »), maillage de pages villes, schema complet.
- **Faiblesses :** pages villes très proches les unes des autres (risque de contenu à faible valeur ajoutée), incohérence HT/TTC, aucun blog, aucune page par soin, pas de garantie. **Les mêmes témoignages nominatifs (Laetitia Aumont / LGA Minceur ; Stéphane Journiat / Cryostal Concept) et les mêmes chiffres (+45 %, +30 clients/mois) figurent aussi sur Blade Agency** (voir 3.9).

### 3.3 DM Solution — la stratégie contenu la plus agressive

- **URL :** https://dmsolution.fr/
- **Title :** « Agence marketing centres minceur & anti-âge | DMSolution »
- **Meta description :** « DMSolution remplit l'agenda des centres minceur et anti-âge : publicité Meta et Google Ads, tunnels de réservation et formation finançable. Appel offert. »
- **H1 :** « L'acquisition client, pensée pour les centres minceur et anti-âge qui visent plus que le remplissage. »
- **Offre :** « Accompagnement DMS » (pub, tunnel, suivi des leads) ou formation finançable. Pas de prix. CTA « Découvrir Nos Services », « Prendre un rendez-vous », « Je veux déléguer » / « Je veux me former ».
- **Confiance :** dans la version crawlée, les compteurs du hero affichent « + 0 ans », « 0 » RDV, « € 0 » (animation JS non rendue), soit des preuves invisibles pour les robots. Deux témoignages. Adresse en Moselle (57) et e-mail de contact en @gmail.com.
- **Blog :** **63 articles** dans le sitemap, rythme quasi quotidien début octobre 2026 (6 articles entre le 1er et le 7 octobre). Catégories : Technologies minceur, Soins anti-âge & visage, Publicité & acquisition, Choisir son agence.
  - **Série « techno » (~35 articles) :** « cryolipolyse en institut rentable », « radiofrequence-institut-rentabilite-2026 », « hifu-en-institut-rentabilite-2026 », « hydrafacial-en-institut-rentabilite-2026 », « microneedling-en-institut-guide-2026 », « radiofrequence-microneedling-institut-2026 », « kobido », « pressothérapie », « endermologie », « LED », « cavitation », « maderothérapie », « EMS », « exosomes »…
  - **Série fond d'entonnoir :** « prix-agence-marketing-institut », « cout-agence-marketing-esthetique », « choisir-agence-marketing-institut », « contrat-agence-marketing-institut », « agence-marketing-institut-ou-freelance », « agence-marketing-specialisee-esthetique-generaliste », « resultats-agence-marketing-institut », « externaliser-marketing-institut ».
  - **Série canaux :** « meta-ads-pour-centres-minceur », « roi-meta-ads-institut », « budget-publicite-meta-institut-esthetique », « google-ads-institut-esthetique », « tiktok-ads-institut-esthetique », « referencement-local-institut ».
  - **Conformité / réputation :** « hifu-en-institut-risques-avis-communication », « avis-negatifs-hifu-rassurer-clientes ».
- **Où il ressort :** « agence marketing centre minceur clientes » (2e), « agence meta ads centre esthétique rendez-vous qualifiés » (2e).
- **Forces :** couverture de toutes les technologies et de tout le fond d'entonnoir. C'est **le modèle à surpasser sur le contenu**.
- **Faiblesses :** l'angle « rentabilité de la machine » parle à l'institut qui hésite à acheter, pas « comment remplir l'agenda de ce soin ». Contenu produit très vite, sans doute assisté, donc E-E-A-T fragile. Preuves invisibles. Pas de prix. Pas de pages villes.

### 3.4 NPcorp — notoriété et communauté

- **URL :** https://npcorp.fr/
- **Title et H1 :** « NPCORP | Le partenaire marketing des instituts de beauté et centres esthétiques ambitieux »
- **Meta description :** « … +500 centres accompagnés, +200 avis 5/5. Partenaire des Nouvelles Esthétiques et Bloomea. »
- **Offre :** acquisition de clientes « prêtes à acheter des cures », stratégie, formation commerciale, programme « Cures Illimitées » (intitulé de la fiche Trustpilot), groupe Facebook privé gratuit, événements en présentiel. Accès sur **candidature**. Pas de prix. CTA « Réserver un appel ».
- **Confiance (déclarée) :** Google 5/5 « +120 avis », Trustpilot 4,9 « +100 avis », « +500 clients accompagnés », « +6 ans ». Logos partenaires : Bloomea, Bioslimming, Les Nouvelles Esthétiques. Témoignages chiffrés (« +15 000 € en 2 semaines »…). Une synthèse d'avis tiers (Trustindex) mentionne 45 avis Google au moment de son relevé, contre « +120 » sur le site : **écart non vérifiable de notre côté**.
- **Structure :** /temoignages, /presentiel, /facebook, /candidature, pages légales. Pas de sitemap (404), pas de blog visible.
- **Forces :** autorité sectorielle (partenariat média avec Les Nouvelles Esthétiques, événements), communauté, volume de témoignages. Référencé dans le top 10 Amodea des agences bien-être (classement publié par une agence concurrente).
- **Faiblesses :** aucun contenu SEO, site centré sur la marque. Positionnement « formation + accompagnement » plus que « fait pour vous ».

### 3.5 Evoscale-ai — prix affichés, technique SEO négligée

- **URL :** https://evoscale-ai.com/
- **Title :** « Acceuil - Evoscale-ai » (faute de frappe, aucun mot-clé).
- **Meta description :** « Agence marketing pour les centres et cabinets esthétiques. +150 centres accompagnés. +1 800 000€ générés. ROI x10 mensuel. »
- **H1 :** deux H1, « Acceuil » (titre de page WordPress) et « L'agence des centres esthétiques les plus performants ».
- **Offre :** « Système SCALE » : génération de leads « par IA », relances SMS/WhatsApp/e-mail, CRM, coaching de vente de cures à plus de 1 000 €.
- **Prix affichés :** Basic 750 €/mois, Standard 1 000 €/mois (« le plus populaire »), Advanced 1 500 €/mois, formation 499 €. Sans engagement.
- **CTA :** « Obtenir mon diagnostic offert → ». **C'est le même vocabulaire que Sorena** (« diagnostic offert »).
- **Confiance (déclarée) :** +150 centres, +1,8 M€, +4 500 RDV, ROI x10, 5/5 Google, 4,9 Trustpilot, logos (Lucie Laser, Bella Laser, Epil & Co, LaserSkin, MH Institute…), témoignages vidéo. Le snippet de recherche affichait d'autres chiffres (« plus de 3 500 rendez-vous », « 1 200 000 € », « plus de 60 centres ») : **les chiffres changent dans le temps et ne sont pas vérifiables**.
- **Structure SEO :** 9 pages. Le sitemap des articles contient **16 articles de démonstration du thème WordPress, en anglais** (« Hello world! », « How to Generate Stunning AI Portraits »…), en ligne (HTTP 200) et sans noindex.
- **Où il ressort :** **1er sur « agence marketing épilation laser »**, alors que le contenu est faible. Signe que la requête est peu disputée.
- **Forces :** transparence des prix, spécialisation laser et cures haut de gamme, preuves vidéo.
- **Faiblesses :** SEO technique négligé (title, double H1, contenu parasite indexé), aucun contenu métier.

### 3.6 GloRise

- **URL :** https://glorise-agency.com/
- **Title :** « GloRise · Agence d'acquisition clients pour instituts de beauté »
- **Meta description :** « GloRise remplit l'agenda des instituts de beauté avec 10 à 15 nouveaux clients qualifiés par mois. Système publicitaire clé en main, premiers résultats sous 7 jours. »
- **H1 (rendu) :** « Transformez l'acquisition de nouveaux clients en flux constant et prévisible ». **Le HTML source fait environ 2,5 Ko, sans H1 ni texte : le site est rendu côté client (JS).** Mauvaise crawlabilité.
- **Offre :** Meta Ads, tunnel et réservation automatisée, « 10-15 nouveaux clients qualifiés par mois », appel de diagnostic de 45 min. Budget minimum « 300 € / mois ».
- **Exclusivité :** « Exclusivité géographique », un institut par zone de chalandise, « 10 nouveaux partenaires par mois » maximum.
- **Confiance (déclarée) :** 5,0 Google, 50+ instituts, « +3000 Rendez-vous qualifiés », « +600k€ de CA généré pour nos clients en 2026 », « 5,6x de ROI moyen sur 3 mois ». Fondateur nommé (Amaury Grasset). Partenaire Swiss Elegance.
- **Études de cas :** BelliSkin (Marly-la-Ville) « +70 RDV en 30 jours » en cryolipolyse ; HifuByCarolyn (Boulogne) ; Dermaclinic (La Seyne-sur-Mer).
- **Forces :** études de cas par soin, fondateur incarné, exclusivité.
- **Faiblesses :** site invisible pour les moteurs, aucune page secondaire.

### 3.7 Recepia — spécialiste épilation laser

- **URL :** https://www.recepia.fr/
- **Title :** « Recepia | Acquisition Meta Ads spécialisée en épilation laser »
- **Meta description :** « Recepia crée des systèmes d'acquisition Meta Ads spécialisés pour les centres d'épilation laser en France : demandes qualifiées, agenda prévisible et budget transparent. »
- **H1 :** « Vous avez investi dans votre machine laser. Il est temps qu'elle vous le rende. »
- **Offre :** trois formules (Lancement, Croissance, Performance), sans prix. « 15 à 30+ nouvelles demandes mensuelles ». Sans engagement. CTA « Remplir mon agenda » / « Réserver un appel ».
- **Confiance :** aucun témoignage, logo ni étude de cas.
- **Structure :** une page (1 URL dans le sitemap), FAQPage en schema.
- **Ce qu'il faut en retenir :** l'angle « machine à rentabiliser » est fort (le gérant a payé un laser cher). Une **page verticale par soin** chez Sorena peut le reprendre et l'élargir.

### 3.8 Vecteur Digital

- **URL :** https://www.vecteur-digital.fr/
- **Title :** « Vecteur Digital — Développez votre institut ». **Pas de meta description.**
- **H1 :** « Un agenda rempli. Des clientes fidèles. »
- **Offre :** acquisition et fidélisation, site avec réservation 24/7, paiement fractionné (Alma), carte de fidélité virtuelle, application de suivi.
- **Garantie :** « Rendez-vous garantis contractuellement pour chaque soin », chiffrée par soin : drainage lymphatique +30, épilation laser +30, headspa +35, cryolipolyse +25, HydraSkin +20, Kobido +25. Affichage « 100 € × 12 mois ».
- **Confiance (déclarée) :** Trustpilot 4,9/5 (19 avis), « 1 382 533 € » générés, 9 témoignages.
- **Structure :** une page. Pas de sitemap, pas de blog.
- **Ce qu'il faut en retenir :** la **garantie chiffrée par soin** est un format de preuve très lisible. Une page « Résultats par soin » permet de la contrer.

### 3.9 Blade Agency

- **URL :** https://www.bladeagency.fr/
- **Title :** « Blade Agency | Marketing Spécialisé pour Instituts de Beauté »
- **H1 :** « Boostez votre institut de beauté avec notre expertise marketing »
- **Offre :** réseaux sociaux, pubs Meta, TikTok et Snapchat, intégration Planity, SMS/e-mail, CRM et automatisation, formation. Pas de prix. « Résultats garantis » répété sans conditions. CTA « Consultation gratuite ».
- **Confiance (déclarée) :** 20+ instituts, 5 ans, +45 % de réservations, x10 ROI sur 6 mois, +85 % de CA, +30 nouveaux clients/mois. Témoignages : Stéphane Journiat (Cryostal Concept), Laetitia Aumont (LGA Minceur), Sarra Abichou (Eden des Sens). **Les deux premiers et les chiffres +45 % / +30 clients sont identiques à ceux de Dermio.** Le lien entre les deux structures n'a pas pu être établi.
- **Structure :** une page (services en ancres). Ressort sur « agence marketing institut de beauté Paris… » et « … Lyon ».

### 3.10 Beauty by Spationaute — le volume de contenu

- **URL :** https://beauty.spationaute.io/
- **Title :** « AGENCE DE VISIBILITÉ POUR INSTITUT DE BEAUTÉ - BEAUTY by Spationaute.io ✨ - Agence de visibilité pour centre esthétique »
- **H1 :** « Agence de visibilité pour centres esthétiques »
- **Offre :** méthode en 10 étapes : identité, audit, site, formulaires, SEO, vidéo (avec clonage de voix IA), réseaux sociaux, e-mailing, Google/Meta Ads, suivi.
- **CTA :** « RDV bilan 30 min - offert », très proche du « Diagnostic · 30 min · offert » de Sorena, et « devis en ligne ».
- **Confiance :** « plus d'une 100aine d'établissements » sur 7 ans, témoignages par prénoms.
- **Actifs SEO :**
  - **~209 articles** (sitemap) au ton tutoyé et généraliste (« 3 erreurs qui plombent tes campagnes Meta Ads », « Google Ads vs Meta Ads : quelle stratégie pour ton centre esthétique »…). Publication régulière depuis novembre 2024, de 4 à 19 articles par mois.
  - **Annuaire des centres** (« créer ta fiche – gratuit »), qui sert de captation de leads et de maillage.
  - **Outil « score de visibilité »**, vidéo interactive, page « tarifs-et-offres ».
- **Où il ressort :** « agence publicité centre esthétique », « agence marketing esthétique avis comparatif ».
- **Faiblesses :** contenu générique peu lié aux soins, peu d'expertise démontrée. Positionnement « visibilité » plutôt qu'« agenda rempli ».

### 3.11 GGC Studio — l'acteur « conforme » médical / non médical

- **URL :** https://www.ggc-studio.com/
- **Title :** « Agence Médecine & Esthétique à Paris | GGC Studio »
- **Meta description :** « GGC Studio, l'agence des médecins, chirurgiens et centres esthétiques à Paris. Deux solutions : IDENTITÉ pour votre image de marque, PERFORM pour vos rendez-vous. Croissance ciblée et conforme. »
- **H1 :** « Le studio de croissance des acteurs de l'esthétique »
- **Offre :** **IDENTITÉ** (image conforme, pour médecins et chirurgiens) et **PERFORM** (acquisition de RDV, pour centres non médicaux). Sur la page PERFORM : « 150 leads qualifiés en 90 jours », « Exclusivité géographique », « remboursement si moins de 60 leads en 45 jours ». Ailleurs : « premier mois satisfait ou remboursé ».
- **Contenus :** /identite, /perform, journal de 6 articles orientés médecine esthétique (« Marketing digital pour médecins esthétiques : par où commencer ? », « La ligne de crête de la visibilité médicale »…).
- **Où il ressort :** « agence acquisition clinique esthétique rendez-vous garantis », « agence meta ads centre esthétique rendez-vous qualifiés ».
- **Ce qu'il faut en retenir :** c'est **le seul acteur qui sépare explicitement médical et non médical**. Sorena cible aussi « cliniques et cabinets ». Il lui faut le même discours de conformité, ce que la loi impose de toute façon.

### 3.12 SeeSmile — l'agence SEO santé qui capte « agence … centre esthétique »

- **URL :** https://seesmile.fr/agence-communication-centre-esthetique/
- **Title :** « Agence communication centre esthétique · SEO local »
- **Meta description :** « Agence santé pour centres esthétiques NON médicaux : épilation laser, anti-âge, minceur. WordPress, SEO local Top 1. +3 centres premium accompagnés. »
- **H1 :** « L'agence de communication centre esthétique qui place vos soins en haut de Google. »
- **Prix affichés :** site de 2 500 à 6 500 € HT, SEO de 600 à 1 200 €/mois.
- **Sections de la page :** réalisations (3 centres dans le Var et les Alpes-Maritimes, « Top 1 » local), « Conformité et déontologie », « Lexique métier », FAQ (photos avant/après, affichage des prix, délai SEO de 3 à 10 mois).
- **Structure :** ~101 pages, dont des pages secteurs (dentiste, médecin esthétique, chirurgien esthétique, centre esthétique…), ~25 pages « agence-de-communication-digitale-sante-a-[ville] » et des combinaisons secteur × ville. 41 articles. Schema riche : ProfessionalService, FAQPage, AggregateRating, Article, BreadcrumbList.
- **Où il ressort :** **1er sur « agence publicité centre esthétique »**, présent sur « agence acquisition clientèle esthétique ».
- **Ce qu'il faut en retenir :** ce n'est pas un concurrent d'offre (SEO et site, pas d'acquisition payante). C'est un **concurrent de SERP** dont la page montre ce qui ranke : lexique, conformité, FAQ, preuves locales.

### 3.13 Acteurs secondaires (fiches courtes)

| Acteur | URL | Ce qu'il fait | Pourquoi il compte en SEO |
|---|---|---|---|
| Shortcuts | shortcuts.fr/agence-marketing/ | Éditeur de logiciel de caisse salons et instituts, avec une offre agence (site, SMS, pub géolocalisée). CTA « Audit gratuit ». « 100 plan de communication réalisé en 2024 ». | Présent sur 5 requêtes « agence … institut ». Autorité de marque logicielle. |
| Laxo | laxo.fr/google-ads/institut-beaute | Agence Google Ads. Page institut : budget « 400 à 900 euros par mois », CPC « 1,50 à 5 euros », coût par client « 12–45 euros ». | **Programmatique** : 43 pages secteurs × 25 pages villes. |
| Boost Ton Salon | boosttonsalon.com | Formation « Boost tes Pubs » (440 € HT, 6 semaines) + blog + podcast. | Ressort sur « trouver des clientes », « publicité facebook institut », « budget pub ». Concurrent « faites-le vous-même ». |
| Le Labo IA | lelaboia.fr | Modules : pub 299 €/mois, prospection 149 €/mois ; site et SEO « dès 249€/mois », « Stoppez les commissions Planity ». | Petits prix affichés. |
| Atelier Dotcom | atelierdotcom.com | Communication et réseaux sociaux pour instituts et spas (Paris, La Rochelle). | 2 pages présentes sur « agence marketing institut de beauté ». |
| The Aesthetic Agency | theaestheticagency.fr | Communication web cliniques, chirurgiens et centres laser (Le Mans). | Présent sur 4 requêtes. |
| Alioze, Bforbiz, API & You | — | Agences généralistes avec une page « beauté ». | Occupent des positions sur les requêtes génériques. |
| Futur Digital | futurdigital.fr | Marketing beauté, avec un argument « présence dans les IA ». | Angle GEO. |
| INscalUp | blog.inscalup.agency | Blog « +5 à +20 clientes par mois », micro-offre d'entrée. | Ressort sur « Paris… nouvelles clientes » et « offre découverte ». |
| Plus Humain, Delisoft (Québec), Pulsereviv (Montréal) | — | Agences québécoises esthétique. | **Elles occupent des positions sur des SERP françaises faute de concurrents français** (« agence facebook ads esthétique », « agence marketing cryolipolyse »). |

---

## 4. Résultats SERP par requête

Ordre tel que renvoyé par l'outil, le 8 octobre 2026. Ce n'est pas un relevé Google.fr. Les résultats sont typés ainsi : **[A-spé]** agence spécialisée esthétique / beauté ; **[A-gén]** agence généraliste ; **[Log]** logiciel ; **[Média]** ; **[Form]** formation ; **[Fab]** fabricant ou distributeur de machines ; **[Franch]** franchise ; **[Annu]** annuaire ou comparatif ; **[Étr]** étranger.

### Requêtes demandées

**1. « agence marketing institut de beauté »**
1. alioze.com/agence-communication-beaute [A-gén]
2. dermio.fr/agence-institut-beaute-bordeaux [A-spé]
3. dermio.fr/agence-institut-beaute-la-rochelle [A-spé]
4. shortcuts.fr/agence-marketing/ [Log/A-spé]
5. b-forbiz.com/beaute/ [A-gén]
6. amodea.co (top 10 agences bien-être 2025) [Annu, publié par une agence]
7. atelierdotcom.com (social media instituts) [A-spé]
8. atelierdotcom.com (communication instituts) [A-spé]
9. m-insideout.com [A-gén beauté marques]

→ Deux pages villes Dermio dans le top 3. Les pages villes ressortent sur la requête générique.

**2. « agence publicité centre esthétique »**
1. seesmile.fr/agence-communication-centre-esthetique/ [A-spé SEO]
2. theaestheticagency.fr [A-spé]
3. alioze.com [A-gén]
4. beauty.spationaute.io [A-spé]
5. dermio.fr/agence-institut-beaute-bordeaux [A-spé]
6. api-and-you.com (spa et beauté) [A-gén]
7. plushumain.com [Étr]
8. atelierdotcom.com [A-spé]
9. karma-medical-beauty-agency.com [A-spé]

**3. « agence marketing médecine esthétique »**
1. agencemarketingsantemedicale.fr [A-spé]
2. medical.agence-massai.fr/esthetique/ [A-spé]
3. chirurgien-digital.com [A-spé chirurgie]
4. wonders-agency.com [A-spé]
5. karma-medical-beauty-agency.com [A-spé]
6–9. pages d'annuaire agencies.semrush.com [Annu]

→ Cette SERP est occupée par des agences de **communication / branding** médicales. **Aucune agence d'acquisition de RDV n'y figure.**

**4. « agence facebook ads esthétique »**
1. delisoft.ca [Étr]
2. neads.io [A-gén]
3. transacts.fr [A-gén]
4. ekko-media.com [A-gén]
5. yellowroad.fr (top 10 agences Facebook Ads) [Annu]
6. ads-back.com [A-gén]
7. maetva.com [A-gén]
8. digicomstory.com [A-gén]
9. agencies.semrush.com [Annu]

→ **Aucune agence française spécialisée esthétique. C'est une opportunité directe.**

**5. « trouver des clientes institut de beauté »**
1. treatwell.fr/partenaires (blog) [Log]
2. nouvelles-esthetiques.com (« comment recruter de nouvelles clientes ») [Média]
3. lsinstitut.fr [Log]
4. centre-europeen-formation.fr [Form]
5. rn-formation-beaute.fr [Form]
6. boosttonsalon.com [Form]
7. quai-des-entrepreneurs.fr [Média]
8. 3ci.fr [Log]
9. celestetic.com [Log/Média]

→ **Requête 100 % informationnelle, aucune agence d'acquisition.**

**6. « remplir agenda institut de beauté »**
1. nouvelles-esthetiques.com (guide, avec encart Booksy) [Média]
2. independant.io (top 10 logiciels) [Annu]
3. info.kalendes.com/institut-de-beaute [Log]
4. seenaowell.com (basse saison) [Fab/marque]
5. info.kalendes.com/agenda [Log]
6. info.konfian.com [Log]
7. fideneo.fr (modèle de planning) [Log]
8. beaute.rdv360.com [Log]
9. agendabeaute.e-agenda.fr [Log]

→ **Dominée par les logiciels.** Aucune page n'aborde l'agenda sous l'angle de l'acquisition de nouvelles clientes.

**7. « agence acquisition clientèle esthétique »**
1. sortlist.fr (Lille) [Annu]
2. sortlist.fr (Lyon) [Annu]
3. alioze.com [A-gén]
4. seesmile.fr [A-spé SEO]
5. theaestheticagency.fr [A-spé]
6. maetva.com [A-gén]
7. lead-agency.pro (Bruxelles) [Étr]
8. shortcuts.fr [Log/A-spé]
9. sortlist.com (France) [Annu]

→ **Les annuaires (Sortlist) dominent. Y figurer est un levier.**

**8. « agence marketing épilation laser »**
1. **evoscale-ai.com** [A-spé]
2. laser26.com/agence (agence interne de franchise) [Franch]
3. lexpress-franchise.com [Franch]
4. laser26.com/franchise [Franch]
5. observatoiredelafranchise.fr [Franch]
6. laserel.fr [Franch]
7. **recepia.fr** [A-spé]
8. franchise-service.fr [Franch]
9. societeinfo.com [Annu]

→ Seulement deux agences, avec un contenu faible. **Requête facilement attaquable.**

**9. « agence marketing cryolipolyse »**
1. observatoiredelafranchise.fr (Cryoperfect) [Franch]
2. pulsereviv.com (Montréal) [Étr]
3. cryocell.fr/professionnels [Fab]
4. maisonyoko.com (blog cryolipolyse) [Centre]
5. cryocell.fr [Fab]
6. peelings.net [Fab]
7. esthecryo-pro.com [Fab]
8. centrethetys.fr [Centre]
9. jontelaser.com [Fab]
10. francecryo.com [Fab]

→ **Aucune agence française. La place est libre.** Les fabricants occupent la SERP avec leurs « packs marketing ».

### Requêtes complémentaires

| Requête | Résultats principaux (dans l'ordre) | Lecture |
|---|---|---|
| agence marketing centre minceur clientes | linkedin.com/company/npcorp, **dmsolution.fr**, npcorp.fr/nos-services, agencecmc.com, trustindex.io/npcorp, annuaires locaux | NPcorp et DM Solution tiennent la niche minceur |
| agence meta ads centre esthétique rendez-vous qualifiés | noiise.com, **dmsolution.fr**, bricks-agency.com, ads-back.com (Paris), coudac.com, **ggc-studio.com**, ads-back.com (Lyon), agence-pickers.fr, smart-agency.fr | Majorité de généralistes |
| agence acquisition clinique esthétique rendez-vous garantis | promaxis.ch (comparatif Genève), **ggc-studio.com**, agence-web-sante.fr, meclinic.ma, starboost.me, sites de cliniques | Pas d'agence française d'acquisition médicale. Promaxis met en garde contre la « garantie de résultats » en médical |
| publicité facebook institut de beauté nouvelles clientes agence | nouvelles-esthetiques.com, **dermio.fr/bordeaux**, boosttonsalon.com (×3), atelierdotcom.com, biz.booksy.com, celestetic.com, pro.kiute.com | Mélange média, formation et agence |
| agence acquisition institut de beauté exclusivité ville meta ads | externamstudio.fr, id-interactive.fr, lafabriquedunet.fr, convertix.fr, consulting-web.com, laxo.fr/google-ads/institut-beaute, **vecteur-digital.fr**, coudac.com, bricks-agency.com | **Aucune page sur « exclusivité par zone »** |
| agence marketing institut de beauté Paris nouvelles clientes chaque mois | lelaboia.fr, **bladeagency.fr**, nouvelles-esthetiques.com (60 idées), expertise-spa-bien-etre.fr, shortcuts.fr, artichaut-de-paris.com, blog.inscalup.agency, alioze.com, b-forbiz.com, atelierdotcom.com | Aucune page « Paris » dédiée d'une agence d'acquisition |
| agence marketing institut de beauté Lyon | pagesjaunes.fr (un institut), **dermio.fr/la-rochelle**, graphicstyle.fr, shortcuts.fr, bladeagency.fr, b-forbiz.com, lescausantes.com, votredircom.fr | Page ville **non pertinente** en 2e position : SERP faible |
| combien coûte une agence marketing pour institut de beauté | lafabriquedunet.fr (×2), **dermio.fr/bordeaux**, mentionable.ai, legalstart.fr, karmamakers.com, agence-premier-filtre.fr | Le prix affiché par Dermio lui donne cette position |
| comment remplir l'agenda d'un centre esthétique | nouvelles-esthetiques.com, e-agenda.fr, independant.io, fideneo.fr, timee.fr, expertise-spa-bien-etre.fr, konfian.com, shopcaisse.com, info.planity.com | Logiciels |
| no show institut de beauté comment éviter lapins | solocal.com, wavy.co, yumi-studio.fr, biz.booksy.com, 3ci.fr, info.planity.com, professionbienetre.fr, magental.com | Logiciels et médias. **Aucune agence** |
| lapins rendez-vous institut de beauté acompte | independant.io, planity.com (fiche d'un institut), biz.booksy.com, pagesjaunes.fr, nailsy.fr, lsinstitut.fr, lumisca.eu | Logiciels de réservation avec acompte (Stripe) |
| comment vendre une cure minceur en institut | temana.fr, methodepierson.com (×2), deltanova-group.fr, estheticienneperformante.fr, expertise-spa-bien-etre.fr, contour-paris.com (×2), aptisia.fr | Formations et fabricants |
| budget publicité facebook institut de beauté | kallisgrossistebeaute.com, boosttonsalon.com, mylittlebigweb.com, agence-anode.fr, steerfox.com, antoinebuee.com, slice.club | **Aucune réponse chiffrée propre aux instituts** |
| cryolipolyse institut comment trouver des clientes | victorianrose.ch, doctolib.fr/cryolipolyse, emproesthetique.com, esthetiquemarket.com, institutcryo.fr, dermotek.fr, contour-paris.com | Fabricants et centres |
| comment attirer clientes épilation laser centre | beaubourg-avocats.fr, lexpress-franchise.com, contour-paris.com, tenordiode.fr, **recepia.fr**, laserel.fr, esthetiquemarket.com, umvie.com, laser26.com | Ouverture de centre et franchises |
| rentabiliser machine HIFU / radiofréquence trouver clientes | estheticon.fr, isi-spa.fr (×2), pro.vmesthetique.com, europ-esthetic.com, afme.org, quirumed.com, jontelaser.com | Fournisseurs de machines |
| relance automatique prospects institut de beauté IA | soleria.ai, **lyia.eu** (IA pour instituts), concilium.digital, **godia.ai** (qualification soins et beauté), bloom-ai.fr | Des SaaS d'IA occupent l'angle « qualification IA » |
| offre découverte bilan offert institut plutôt que promotion | nouvelles-esthetiques.com (réactiver les clientes, sept. 2026), blog.inscalup.agency (×2), lsinstitut.fr, getcomeback.fr, loyeo.fr, expertise-spa-bien-etre.fr | Sujet d'actualité, **aucune agence ne le porte** |
| publicité centre esthétique réglementation avant/après | macsf.fr, jss.fr, business-times.fr, 75secondes.fr, maisonmonticelli.com, kohenavocats.com (décret de sept. 2026), driftdigital.fr | Assureurs, avocats, médias juridiques |
| agence marketing esthétique avis comparatif | lafabriquedunet.fr, promaxis.ch, trustfolio.co, amodea.co, theaestheticagency.fr, shortcuts.fr, beauty.spationaute.io, newp.fr | Aucun comparatif indépendant. Les classements sont publiés par des agences |

---

## 5. Concurrents de SERP non agences

| Type | Acteurs observés | Contenus qui les font ranker | Leçon pour Sorena |
|---|---|---|---|
| **Média pro** | Les Nouvelles Esthétiques (nouvelles-esthetiques.com) | Guides longs de ~2 200 mots (« Institut de beauté : le guide pratique pour remplir votre agenda rapidement », juillet-août 2025, avec un encart Booksy), « +60 idées marketing », « comment recruter de nouvelles clientes », « réactiver les clientes depuis l'été » (sept. 2026). Partenaire affiché de NPcorp. | Le média tient les requêtes « comment… ». Pistes : tribune ou interview de Sofya, contenu sponsorisé, présence aux événements du magazine. Un backlink de ce domaine compte. |
| **Logiciels de réservation** | Booksy (biz.booksy.com, environ 46 pages d'articles ; **le blog pro de Kiute redirige en 301 vers celui de Booksy**), Planity (info.planity.com, blog et guides à télécharger), Treatwell, Kalendes, Fideneo, LS Institut, RDV360, Konfian, e-agenda, Nailsy, Lumisca, Wavy, Solocal, 3ci | Articles « no-show », « acompte », « fiche Google », « posts Facebook », « remplir l'agenda », modèles de planning, comparatifs de logiciels (independant.io) | Ils tiennent tout le sujet « lapins / acompte » sous l'angle outil. Sorena peut l'aborder sous l'angle **système d'acquisition** : acompte pris dès le premier RDV issu de la pub. |
| **Formations / coachs** | Boost Ton Salon (Mathilde Richard), Centre Européen de Formation, RN Formation, Méthode Pierson, Esthéticienne Performante, Expertise Spa Bien-Être (Tiphaine Modeste), Temana, Eidos Academy | « Attirer de nouvelles clientes », « vendre une cure minceur », « 5 publicités Facebook irrésistibles », « interdiction des remises en % » | Ils ciblent la gérante qui veut le faire elle-même. Contenu à produire : « faire soi-même vs déléguer », avec les vrais coûts. |
| **Fabricants / distributeurs de machines** | Contour Paris (blog riche : « rentabiliser un laser en 6 mois », « panier moyen », « vendre des cures »), Deltanova, Cryocell/Corpoderm, France Cryo, Newtech (esthecryo-pro), DermoPro, Jontelaser, Tenor Diode, ISI Spa, Europ Esthetic, VM Esthétique, Emproesthétique | Pages « rentabiliser [machine] » et « packs marketing » (affiches, flyers, webinaires) fournis avec l'appareil | Ils occupent les requêtes « [soin] + institut ». **Partenariats possibles** (Sorena comme partenaire acquisition des acheteurs de machines) et pages verticales à écrire. |
| **Franchises** | Laser 26 (agence marketing interne, « 50 % des effectifs en marketing digital » d'après un article de Laser 26), Laserel, Institut Cryo, Dépil Tech, Smart Duck | Pages « franchise », « ouvrir un centre » | Argument à exploiter : « le marketing d'une franchise, sans la redevance ». |
| **Juridique / assurance** | MACSF, Kohen Avocats (décret de sept. 2026 sur la publicité des installations de chirurgie esthétique), JSS, Beaubourg Avocats, CNEP, Ordre des infirmiers | Réglementation de la publicité esthétique, de l'épilation laser et du HIFU | Base pour une page « conformité » (sources officielles uniquement). |
| **SaaS d'IA beauté** | Godia.ai (qualification 24/7 des demandes : budget, peau, contre-indications), Lyia (relances, avis, newsletter), Soleria Closer IA | Pages produits « IA pour instituts » | Ils concurrencent l'angle « qualification IA 24/7 ». Sorena doit montrer l'IA **dans un service clé en main**, pas comme un outil à paramétrer. |
| **Annuaires / comparatifs d'agences** | Sortlist, La Fabrique du Net, Trustfolio, agencies.semrush.com, Amodea (top 10), Yellow Road (top 10), Promaxis (comparatif) | Listes « meilleures agences » | Créer des fiches Sortlist, La Fabrique du Net et Trustfolio, et chercher à entrer dans les classements. |

---

## 6. Matrice des types de pages : qui a quoi

✔ = présent ; ~ = partiel ; ✘ = absent ; ? = non vérifié.

| Type de page / actif | Sorena | Kaelys | Dermio | DM Sol. | NPcorp | Evoscale | GloRise | Recepia | Vecteur | Spationaute | GGC | SeeSmile |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Pages distinctes indexables (ordre de grandeur, d'après les sitemaps ou liens internes) | ✘ (1 page + ancres) | ~ (2) | ✔ (34) | ✔ (~69) | ~ (5) | ~ (9) | ✘ (JS) | ✘ (1) | ✘ (1) | ✔ (~225) | ✔ (~15) | ✔ (~140) |
| Pages par soin / technologie | ✘ | ✘ | ✘ | ~ (articles « rentabilité ») | ✘ | ✘ | ✘ | ✔ (tout le site = laser) | ~ (cartes sur la home) | ✘ | ✘ | ✘ |
| Pages par type d'établissement | ✘ | ✘ | ✘ | ✘ | ✘ | ✘ | ✘ | ✘ | ✘ | ✘ | ✔ (médical / non médical) | ✔ |
| Pages villes | ✘ | ✘ | ✔ (31) | ✘ | ✘ | ✘ | ✘ | ✘ | ✘ | ✘ | ✘ | ✔ (~25 + croisements) |
| Blog / ressources | ✘ | ✘ | ✘ | ✔ (63) | ✘ | ✘ (démo) | ✘ | ✘ | ✘ | ✔ (~209) | ~ (6) | ✔ (41) |
| Études de cas détaillées | ✘ | ✔ (vidéo) | ~ | ~ | ✔ | ~ | ✔ (3) | ✘ | ~ | ~ | ~ | ✔ (3) |
| Page avis / témoignages dédiée | ✘ | ✔ | ~ | ✘ | ✔ | ~ | ~ | ✘ | ~ | ~ | ✘ | ~ |
| Prix affichés | ✘ | ~ (budget pub) | ✔ | ✘ | ✘ | ✔ | ~ | ✘ | ~ | ✔ (page) | ✘ | ✔ |
| Garantie écrite détaillée | ~ (sur la page, sans conditions écrites) | ✔ | ✘ | ✘ | ~ | ✘ | ✘ | ✘ | ✔ | ✘ | ✔ | ✘ |
| Exclusivité territoriale | ✔ (10 km) | ✔ (ville) | ✘ | ✘ | ✘ | ✘ | ✔ (zone) | ✘ | ✘ | ✘ | ✔ (PERFORM) | ✘ |
| Acompte anti-lapins mis en avant | ✔ (dans l'offre) | ✘ | ✘ | ✘ | ✘ | ✘ | ✘ | ✘ | ✘ | ✘ | ✘ | ✘ |
| Qualification IA mise en avant | ✔ | ✘ | ✘ | ✘ | ✘ | ✔ | ✘ | ✘ | ✘ | ~ (vidéo IA) | ~ | ✘ |
| FAQ avec schema FAQPage | ~ (FAQ sans schema) | ✘ | ✔ | ? | ✘ | ✘ | ✘ | ✔ | ✘ | ✘ | ✘ | ✔ |
| Outil interactif / lead magnet | ✘ | ✔ (simulateur) | ? | ✘ | ✔ (groupe FB) | ✘ | ✘ | ✘ | ✘ | ✔ (score, annuaire) | ✘ | ✔ (simulateur de devis) |
| Contenu conformité / réglementation | ✘ | ✘ | ✘ | ~ (HIFU) | ✘ | ✘ | ✘ | ✘ | ✘ | ✘ | ✔ | ✔ |
| Fondateur incarné (page ou section) | ✔ (section) | ~ | ✘ | ~ | ✔ | ✘ | ✔ | ✘ | ✘ | ✘ | ✔ (auteur) | ✔ |

**Ce que tous les concurrents bien classés ont et que Sorena n'a pas** (Dermio, DM Solution, Spationaute, SeeSmile, Evoscale sur sa niche) :

1. **Plusieurs URL indexables ciblant chacune une intention.** Sorena n'a qu'une page et des ancres (#methode, #faq…) : son sitemap compte 3 URL.
2. **Un mot-clé « métier » dans le title ET le H1.** Le H1 de Sorena (« Nous remplissons votre agenda. Vous restez en cabine. ») ne contient ni « acquisition », ni « centre esthétique », ni « institut ».
3. **Un découpage par cible** : ville (Dermio, SeeSmile), technologie (DM Solution, Recepia) ou secteur (SeeSmile, GGC).
4. **Une FAQ balisée** (FAQPage), avec des réponses sur le prix, le budget pub et le fonctionnement.
5. **Des preuves textuelles crawlables** : chiffres, témoignages nominatifs, études de cas.
6. **Un volume de contenu** : au minimum des pages profondes de plus de 1 000 mots, voire un blog de plus de 40 articles.

---

## 7. Forces et faiblesses : synthèse

| Concurrent | Forces | Faiblesses exploitables par Sorena |
|---|---|---|
| Kaelys | Garantie écrite très claire, exclusivité, preuves vidéo, simulateur | SEO nul. Exclusivité « ville » floue (Paris = 1 institut ?). Prix cachés. Ton agressif peu « premium » |
| Dermio | Pages villes qui rankent, prix bas affiché, schema | Gabarit dupliqué, incohérence HT/TTC, témoignages partagés avec un autre site, ni garantie ni exclusivité, rien sur les soins |
| DM Solution | Couverture éditoriale massive (technos et fond d'entonnoir) | Angle « rentabilité machine » plutôt qu'acquisition. E-E-A-T faible (gmail, compteurs à 0 crawlés). Niche minceur / anti-âge |
| NPcorp | Notoriété, communauté, partenariat média | Aucun SEO. Modèle orienté formation |
| Evoscale-ai | Prix publics, niche laser, n°1 sur sa requête | SEO technique négligé (title « Acceuil », démos indexées), chiffres changeants |
| GloRise | Études de cas par soin, exclusivité, fondateur | Site JS non crawlable |
| Recepia | Niche laser très claire, message « machine » | Une page, aucune preuve |
| Vecteur Digital | RDV garantis chiffrés par soin | Une page, pas de meta description, pas d'exclusivité |
| Blade | Multi-plateforme (TikTok, Snap), Planity | Une page, preuves partagées avec Dermio |
| Spationaute | Volume de blog, annuaire, outil score | Contenu générique, positionnement « visibilité » |
| GGC Studio | Seul acteur médical / non médical conforme, garantie de leads + exclusivité | Paris, peu de contenu, pas de pages par soin |
| SeeSmile | SEO local et conformité exemplaires | Pas d'acquisition payante (pas un concurrent d'offre) |

---

## 8. Content gaps exploitables par Sorena

1. **Pages transactionnelles « acquisition par soin ».** Personne n'a de page « Remplir l'agenda de votre centre de cryolipolyse / d'épilation laser / de HIFU / d'HydraFacial ». Sur « agence marketing cryolipolyse », aucune agence française. Sur « … épilation laser », deux agences faibles. DM Solution traite les technos sous l'angle « rentabilité de la machine », pas sous l'angle « trouver les clientes de ce soin ».
2. **« Agence Facebook / Meta Ads esthétique ».** Aucun spécialiste français ne ressort. Les généralistes et une agence québécoise occupent la SERP.
3. **Requêtes informationnelles des gérantes.** « Trouver des clientes », « remplir son agenda », « no-show / acompte », « vendre une cure », « budget pub Facebook institut » : aucune agence d'acquisition n'y figure. Ces SERP sont tenues par des médias et des logiciels qui n'ont pas d'expérience terrain de l'acquisition payante.
4. **Acompte et lapins sous l'angle « pub → RDV honoré ».** Aucune agence n'en parle ; seuls des logiciels le font. Sorena est la seule agence dont l'offre l'inclut.
5. **« Offre de valeur » plutôt que promo / coffret / Groupon.** Le sujet est d'actualité (Les Nouvelles Esthétiques, sept. 2026 ; INscalUp ; Expertise Spa Bien-Être), mais aucune agence n'en fait sa thèse. C'est un levier de thought leadership pour Sofya.
6. **Acquisition conforme pour cliniques et cabinets.** Les agences médicales qui rankent font du branding ou de la communication. GGC est le seul à séparer médical et non médical. Le cadre a bougé : décret de septembre 2026 sur la publicité des installations de chirurgie esthétique, interdiction pour les influenceurs de promouvoir des actes de médecine et chirurgie esthétiques, règles déontologiques. Une page de référence, sourcée sur les textes officiels, manque.
7. **Exclusivité territoriale vérifiable.** Kaelys (« votre ville est-elle encore libre ? »), GloRise et GGC en parlent, mais personne ne publie de **vérificateur de zone** ni de page « zones disponibles ». C'est un actif unique, qui sert aussi de base à des pages locales non dupliquées.
8. **Preuves vérifiables.** Les chiffres des concurrents sont invérifiables, parfois contradictoires (Dermio HT/TTC, chiffres Evoscale qui changent, écart d'avis NPcorp, témoignages Dermio/Blade identiques). Des études de cas avec méthode (période, budget, coût par RDV honoré, taux de présence) distingueraient Sorena.
9. **Comparatifs de fond d'entonnoir neutres.** « Agence vs formation vs freelance vs franchise », « Meta Ads vs Google Ads pour un centre esthétique », « Questions à poser avant de signer avec une agence ». DM Solution en a quelques-uns. Les autres comparatifs sont publiés par des agences qui se classent premières.
10. **Préparation GEO / IA.** Peu de sites ont une FAQ balisée et des passages factuels citables. Futur Digital vend l'argument « présence dans les IA » sans contenu. Sorena peut viser à être la source citée par les IA sur « acompte institut », « offre de valeur » ou « exclusivité zone ».

---

## 9. Angles de différenciation recommandés

| Angle | Concurrents sur le même terrain | Comment Sorena se distingue |
|---|---|---|
| **Exclusivité 10 km** | Kaelys (ville), GloRise (zone), GGC PERFORM | Rayon précis et vérifiable (carte ou outil « ma zone est-elle libre ? »), là où les autres disent seulement « par ville » |
| **Objectif de RDV garanti, on continue sans frais** | Kaelys (x2 en 90 j), Vecteur (RDV par soin), GGC (remboursement), NPcorp (conditionnel) | Publier les **conditions écrites** (objectif, délai, ce qui compte comme RDV) ; c'est aujourd'hui un simple paragraphe de FAQ. Formuler la garantie sur la prestation (RDV), **jamais sur un résultat esthétique ou médical** |
| **Offre de valeur (bilan, première consultation) plutôt que promo** | Aucun | En faire la thèse éditoriale de la marque : clientes qui paient le juste prix, image préservée |
| **Acompte à la réservation** | Aucune agence (logiciels seulement) | Seule agence qui traite le RDV jusqu'à la présence effective |
| **Qualification IA 24/7 + relances** | Evoscale (« IA »), SaaS Godia / Lyia | IA intégrée à un service clé en main, avec la gérante « en cabine » |
| **Ton premium, vouvoiement, « maisons »** | Spationaute et Boost Ton Salon tutoient ; Kaelys et Evoscale ont un ton « growth » | Marque haut de gamme cohérente avec les centres premium (cures de plus de 500 €) |
| **Fondatrice incarnée (Sofya)** | GloRise (Amaury Grasset), SeeSmile (Gatien), GGC (auteur), NPcorp | Page À propos, signature d'auteur sur les guides, interviews média (E-E-A-T) |
| **Médical + non médical, conforme** | GGC Studio | Deux parcours distincts dès l'architecture du site |

---

## 10. Recommandations

### 10.1 Les 10 types de pages / contenus prioritaires

| Priorité | Type de page | Exemples d'URL | Requêtes / intentions visées | Qui le fait déjà |
|---|---|---|---|---|
| 1 | **Pages verticales « acquisition par soin »** (transactionnelles) | /soins/epilation-laser, /soins/cryolipolyse, /soins/minceur-cures, /soins/radiofrequence-hifu, /soins/hydrafacial-soins-visage, /soins/microneedling-anti-age | « agence marketing épilation laser », « agence marketing cryolipolyse », « clientes cryolipolyse », « rentabiliser laser / HIFU » | Personne en transactionnel (Recepia pour le laser seul ; DM Solution en articles) |
| 2 | **Pages par type d'établissement**, avec le volet conformité | /institut-de-beaute, /centre-esthetique, /clinique-cabinet-medecine-esthetique | « agence marketing institut de beauté », « agence publicité centre esthétique », « agence marketing médecine esthétique » | SeeSmile, GGC (partiel) |
| 3 | **Pages zones / villes reliées à l'exclusivité 10 km** (contenu local réel, statut « zone disponible / attribuée ») | /zones, /zones/lyon, /zones/bordeaux… | « agence marketing institut de beauté [ville] » | Dermio (gabarit) ; personne avec une vraie disponibilité de zone |
| 4 | **Page Méthode + pages fonctionnalités** | /methode, /offre-de-valeur, /qualification-ia, /acompte-anti-lapins, /relances | « no-show institut », « acompte rendez-vous esthéticienne », « qualification demandes IA institut » | Aucune agence (logiciels et SaaS seulement) |
| 5 | **Page Tarifs & garantie** (transparence, conditions écrites, exclusivité) | /tarifs, /garantie | « combien coûte une agence marketing institut de beauté », « prix agence marketing esthétique » | Dermio, Evoscale (prix) ; Kaelys (garantie) |
| 6 | **Résultats, études de cas et avis** + page À propos (Sofya) | /resultats, /resultats/[cas-par-soin], /avis, /a-propos | Requêtes de marque, réassurance, E-E-A-T | GloRise, Kaelys, NPcorp |
| 7 | **Guides piliers informationnels** signés par Sofya | /ressources/trouver-des-clientes-centre-esthetique, /ressources/remplir-agenda-institut, /ressources/budget-publicite-meta-institut, /ressources/vendre-une-cure-apres-un-bilan | « trouver des clientes institut de beauté », « remplir agenda », « budget publicité facebook institut », « vendre une cure minceur » | Médias, logiciels, formations (aucune agence) |
| 8 | **Guide conformité de la publicité esthétique** (sources officielles) | /ressources/publicite-esthetique-reglementation | « publicité centre esthétique réglementation », « avant après réseaux sociaux », « publicité médecine esthétique » | SeeSmile (FAQ), GGC (journal), avocats et assureurs |
| 9 | **Comparatifs de fond d'entonnoir** | /ressources/agence-vs-formation-vs-freelance, /ressources/meta-ads-vs-google-ads-centre-esthetique, /ressources/choisir-agence-acquisition-esthetique, /ressources/offre-de-valeur-vs-promotion | « choisir agence marketing institut », « agence ou freelance », « agence facebook ads esthétique » | DM Solution (partiel) |
| 10 | **Outils interactifs / lead magnets** | /outils/ma-zone-est-elle-libre, /outils/cout-des-lapins, /outils/simulateur-agenda | Captation de leads, liens entrants, citations par les IA | Kaelys (simulateur), Spationaute (score), SeeSmile (devis) |

### 10.2 Correctifs rapides sur la page actuelle

1. **H1 :** y intégrer l'intention principale, par exemple « Acquisition de clientèle pour centres et cliniques esthétiques ». La phrase « Nous remplissons votre agenda. Vous restez en cabine. » peut passer en sous-titre.
2. **Passer des ancres aux URL :** #methode, #faq et #fondatrice doivent devenir des pages indexables (voir 10.1). Mettre à jour le sitemap, qui ne contient aujourd'hui que 3 URL.
3. **Ajouter un schema FAQPage** sur la FAQ existante. Le site a déjà Organization, ProfessionalService et WebSite. Ajouter `areaServed` (France) et `founder` (Sofya).
4. **Rédiger la garantie et l'exclusivité** en conditions précises (objectif, délai, définition d'un RDV, rayon de 10 km mesuré depuis l'adresse du centre). Kaelys le fait déjà, avec un effet de réassurance fort.
5. **Collecter des avis vérifiables** (Google, Trustpilot) et les afficher avec un `AggregateRating` **uniquement s'ils sont réels**.
6. **Créer des fiches annuaires** : Sortlist, La Fabrique du Net, Trustfolio, Pages Jaunes. Sortlist ressort sur « agence acquisition clientèle esthétique ».

### 10.3 Garde-fous (conformité et crédibilité)

- **Ne publier aucun chiffre non sourcé.** Les concurrents s'exposent sur ce point : chiffres changeants, témoignages partagés entre deux sites.
- **Côté médical (cliniques, cabinets) :** pas de promesse de résultat esthétique, pas de témoignages de patients à visée publicitaire, avant/après seulement dans le cadre déontologique, loi du 9 juin 2023 sur l'influence commerciale. Le décret de septembre 2026 sur la publicité des installations de chirurgie esthétique est à **vérifier sur Légifrance avant rédaction** : les sources trouvées sont secondaires (cabinet d'avocats, presse), et la date de signature diverge (23 ou 25 septembre selon la source).
- **Vocabulaire « gratuit / offert » :** Sorena utilise « offert ». Les lignes directrices DGCCRF citées encadrent strictement le mot « gratuit ». À valider juridiquement pour le contexte B2B.
- **Pages villes :** ne pas dupliquer le gabarit Dermio. Chaque page doit apporter une information propre : statut de la zone, communes couvertes dans les 10 km, cas client local si disponible.

---

## 11. Sources principales (consultées le 8 octobre 2026)

**Agences concurrentes**
- https://kaelysperformance.com/
- https://www.dermio.fr/ — https://www.dermio.fr/agence-institut-beaute-bordeaux — https://www.dermio.fr/sitemap.xml
- https://dmsolution.fr/ — https://dmsolution.fr/blog/ — https://dmsolution.fr/post-type-post-sitemap-1.xml
- https://npcorp.fr/ — https://fr.trustpilot.com/review/npcorp.fr — https://www.trustindex.io/reviews/npcorp.fr
- https://evoscale-ai.com/ — https://evoscale-ai.com/post-sitemap.xml — https://evoscale-ai.com/hello-world/
- https://glorise-agency.com/
- https://www.recepia.fr/
- https://www.vecteur-digital.fr/
- https://www.bladeagency.fr/
- https://beauty.spationaute.io/ — https://beauty.spationaute.io/blog/ — https://beauty.spationaute.io/post-sitemap.xml
- https://www.ggc-studio.com/ — https://www.ggc-studio.com/perform — https://www.ggc-studio.com/journal
- https://seesmile.fr/agence-communication-centre-esthetique/ — https://seesmile.fr/page-sitemap.xml
- https://shortcuts.fr/agence-marketing/
- https://www.laxo.fr/google-ads/institut-beaute
- https://www.boosttonsalon.com/publicite-institut-de-beaute
- https://lelaboia.fr/solutions-institut-beaute
- https://www.atelierdotcom.com/agence-communication-digitale-instituts-beaute-spa/
- https://www.theaestheticagency.fr/
- https://promaxis.ch/meilleure-agence-marketing-clinique-esthetique-geneve/
- https://amodea.co/les-10-meilleures-agences-marketing-specialisees-dans-le-bien-etre-en-france-2025/

**Concurrents de SERP non agences**
- https://www.nouvelles-esthetiques.com/articles/metier/au-quotidien/institut-de-beaute-comment-remplir-son-agenda-rapidement-3731
- https://www.nouvelles-esthetiques.com/articles/metier/au-quotidien/institut-de-beaute-comment-recruter-de-nouvelles-clientes-3068
- https://www.nouvelles-esthetiques.com/articles/gestion/communication/institut-de-beaute-comment-reactiver-les-clientes-qui-ne-sont-pas-revenues-depuis-l-ete-5554
- https://biz.booksy.com/fr-fr/blog — https://pro.kiute.com/fr/blog/ (redirige en 301 vers Booksy)
- https://info.planity.com/ressources/blog
- https://www.treatwell.fr/partenaires/ressources/blog/conseils-pour-attirer-de-nouveaux-clients-au-salon/
- https://independant.io/logiciel-rendez-vous-en-ligne-institut-beaute/
- https://info.kalendes.com/institut-de-beaute/
- https://www.lsinstitut.fr/trouver-de-nouveaux-clients-pour-salon-esthetique/
- https://contour-paris.com/fr/blog/beauty-well-being/technologies-esthetiques/comment-rentabiliser-un-laser-depilation-definitive-en-6-mois/
- https://www.cryocell.fr/professionnels — https://www.esthecryo-pro.com/accompagnement-esthetique.php
- https://laser26.com/agence — https://laserel.fr/devenir-franchise
- https://www.godia.ai/solutions-par-secteurs/soins-et-beaute — https://lyia.eu/
- https://blog.inscalup.agency/augmenter-les-clientes-dun-institut-de-beaute/
- https://www.expertise-spa-bien-etre.fr/les-bonnes-pratiques-marketing-des-spas-et-centres-beaute-bien-etre/

**Réglementation (à confirmer sur Légifrance avant toute publication)**
- https://www.macsf.fr/responsabilite-professionnelle/relation-au-patient-et-deontologie/publicite-en-medecine-et-chirurgie-esthetiques-pieges-a-eviter
- https://kohenavocats.com/clinique-chirurgie-esthetique-publicites-interdites-decret-23-septembre-2026-retrait-autorisation/
- https://www.legifrance.gouv.fr/loda/id/JORFTEXT000047663185 (loi n° 2023-451 du 9 juin 2023)
- https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/lignes-directrices-relatives-lencadrement-des-promotions

**Sorena**
- https://www.sorenaagency.com/ — https://www.sorenaagency.com/sitemap.xml (3 URL)
