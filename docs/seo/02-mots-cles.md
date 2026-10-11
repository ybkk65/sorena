# 02 · Recherche de mots-clés SEO : Sorena

> Site : https://www.sorenaagency.com · Date de la recherche : 8 octobre 2026
> Cible : gérantes et gérants d'instituts, de centres esthétiques et de centres laser ou minceur, médecins esthétiques et cliniques (B2B). Les clientes finales ne sont pas la cible.

---

## Résumé

- **Marché de niche.** En B2B, presque toutes les requêtes du type « agence marketing + métier » (institut de beauté, centre esthétique, médecine esthétique, clinique) sont **absentes de Google Suggest**. Leur volume est donc très faible. La SERP compte pourtant au moins 12 agences qui se battent sur ces requêtes (Dermio, GloRise, Blade, Vecteur Digital, DMSolution, The Aesthetic Agency…). La valeur commerciale est réelle : chaque visite peut devenir un contrat.
- **Les gérantes cherchent un problème à résoudre, pas une agence.** Le volume est sur leurs difficultés : attirer des clientes, budget de publicité Facebook, rendez-vous non honorés, acompte, promotions, chiffre d'affaires, décret laser, rentabilité de la machine. C'est là que le blog doit capter du trafic, avant de renvoyer vers les pages de service.
- **Deux sujets d'actualité qui pèsent fort** : le décret n° 2024-470 sur l'épilation laser par les esthéticiennes, avec la formation obligatoire de l'arrêté du 19/02/2025, et le décret n° 2026-891 du 23/09/2026 sur les communications commerciales de la chirurgie esthétique.
- **Pièges** : « lead esthétique » est compris comme « LED esthétique ». « Prospection institut de beauté » attire des fournisseurs qui démarchent les instituts. « Rentabiliser laser » renvoie au laser game. « Centre esthétique » renvoie aussi à l'esthétique automobile. « Agence marketing beauté » renvoie surtout aux marques de cosmétiques.

---

## 1. Méthode et avertissement sur les volumes

### 1.1 Sources utilisées

| Source | Ce qui a été fait |
|---|---|
| Google Suggest (`client=firefox`, `hl=fr`, `gl=fr`) | **398 requêtes** : 64 seeds de départ, 89 variantes courtes, 65 préfixes de questions (comment, pourquoi, quel, combien, meilleur), **expansion a→z sur 6 seeds** (« institut de beauté », « médecine esthétique », « rendez vous non honoré », « agence marketing », « centre esthétique », « esthéticienne »), puis 24 vérifications ciblées. Délai de 0,3 s entre deux appels. |
| Analyse des SERP | Une trentaine de requêtes passées dans un moteur de recherche : type de pages qui rankent, concurrents, angle des contenus, fraîcheur. Lecture des titres et des H2 des pages en tête. |
| Site actuel | Une seule landing page. Title actuel : « Sorena · Acquisition de clientèle pour centres, cliniques et cabinets esthétiques ». H1 : « Nous remplissons votre agenda. Vous restez en cabine. » La balise `meta keywords` est présente dans `app/layout.tsx`, mais Google l'ignore. |

### 1.2 Grilles de lecture

**Signal Suggest** (seul indicateur de demande disponible ici) :

| Code | Signification |
|---|---|
| **S3** | La requête exacte est suggérée, avec au moins 5 déclinaisons de longue traîne. La demande est réelle et variée. |
| **S2** | La requête exacte est suggérée, avec peu de déclinaisons. |
| **S1** | La requête exacte n'est pas suggérée, mais des variantes proches le sont. |
| **S0** | Aucune suggestion. Volume très faible ou nul selon Google. |

**Potentiel** (estimation qualitative, aucun chiffre) : **Élevé** (requête générique tous secteurs, Suggest riche) > **Moyen** (requête sectorielle, Suggest riche) > **Faible** (suggérée mais peu déclinée) > **Niche** (absente de Suggest, mais une SERP spécialisée existe).

**Difficulté** (lue sur la SERP) : **Faible** (forums, petits blogs, peu de pages dédiées), **Moyenne** (articles dédiés d'éditeurs de logiciels, de médias pro ou d'agences de niche), **Élevée** (domaines forts : Ordre, MACSF, Légifrance, Doctolib, Meta, grosses agences généralistes, comparateurs).

**Intention** : Transac. = transactionnelle (achat ou contact), Commerc. = commerciale (comparer, choisir un prestataire), Info. = informationnelle, Navig. = navigationnelle (marque, outil).

**Valeur pour Sorena** : ★★★ = la personne a exactement le problème que Sorena résout et peut devenir cliente · ★★ = bonne cible, mais plus loin de l'achat · ★ = trafic utile pour la notoriété seulement · ✗ = à ne pas viser.

### 1.3 Avertissement (à lire avant d'utiliser ce document)

> **Aucun volume de recherche chiffré ne figure dans ce document, volontairement.** Les niveaux « Élevé, Moyen, Faible, Niche » sont des **estimations qualitatives** tirées de Google Suggest et de la forme des SERP. Ce ne sont pas des mesures.
>
> Limites connues :
> - Google Suggest est **géolocalisé**. L'expansion a→z a fait remonter beaucoup de villes d'Île-de-France, ce qui suggère une localisation de la requête en IDF. Les variantes locales d'autres régions sont donc sous-représentées.
> - Une absence dans Suggest (S0) ne veut pas dire « zéro recherche ». En B2B, une requête peut être tapée quelques fois par mois sans jamais apparaître.
> - Les SERP ont été lues avec un moteur de recherche qui **n'est pas google.fr** : l'ordre exact et les blocs (Autres questions posées, pack local, vidéos) peuvent différer. Le bloc « Autres questions posées » n'a pas pu être extrait directement. Les questions de la partie 4 viennent de Suggest et des titres et H2 des pages qui rankent.
>
> **À valider avant d'arbitrer** : Google Keyword Planner (fourchettes de volume France), Google Search Console (impressions réelles dès que les pages existent), Ubersuggest, Semrush ou Ahrefs (volume et difficulté chiffrés). Vérifier aussi chaque SERP prioritaire à la main sur google.fr, en navigation privée.

---

## 2. Paysage concurrentiel observé dans les SERP

| Type d'acteur | Exemples rencontrés | Requêtes où ils dominent |
|---|---|---|
| Agences d'acquisition pour instituts et centres (concurrents directs) | Dermio (pages par ville : « Agence Marketing Institut de Beauté à Bordeaux / La Rochelle », prix affiché 497 € TTC/mois + environ 150 € de budget pub), GloRise, Blade Agency, Vecteur Digital (« Acquisition Instituts & Centres Esthétiques »), INscalUp, Futur Digital | agence marketing institut de beauté, agence acquisition institut, remplir agenda |
| Agences spécialisées minceur et anti-âge | DMSolution (« Agence marketing centres minceur & anti-âge ») | marketing centre minceur |
| Agences communication et branding beauté | Atelier Dotcom, Smart Agency, Spationaute Beauty, The Aesthetic Agency, Shortcuts (agence adossée au logiciel), Esthétique Marketing | agence communication institut de beauté, agence marketing esthétique |
| Agences pour marques de cosmétiques (intention décalée) | Alioze, InsideOut, 1703 Factory, Les Phytonautes, API & You | agence marketing beauté, agence communication beauté |
| Agences santé et médecine esthétique | Massaï Medical, Chirurgien Digital, Wonders Agency, Karma Medical Beauty, agencemarketingsantemedicale.fr, Drift Digital, Antipodes Medical | agence marketing médecine esthétique, marketing clinique esthétique |
| Agences Meta Ads généralistes | Noiise, Aleo, AdPremier, Digidream, Slice, Effinity, Anode | agence meta ads, agence facebook ads, prix publicité facebook |
| Éditeurs de logiciels pour salons (contenu informatif très présent) | Booksy, Planity, Treatwell, LSInstitut, Kalendes, Ubiliz, Klixi, Smart Agenda, 3CI, Fleeky, Qarte, Loyeo, Comeback | rendez-vous non honorés, acompte, fidéliser, attirer clientes, idées promo |
| Médias, formateurs, coachs | Les Nouvelles Esthétiques, Profession Bien-Être, Boost Ton Salon, Centre Européen de Formation, écoles laser | attirer clientes, remplir agenda, décret laser |
| Vendeurs d'appareils (laser, cryo) | Contour Paris, Celestetic, Keros, Emmalaser, Ténor, Cryocell | rentabiliser laser, rentabilité cryolipolyse, machine cryolipolyse |
| Autorités et juridique | Légifrance, MACSF, Village Justice, APHP, Ordre des médecins, Egora, APM, cabinets d'avocats | décret laser, publicité médecin, décret 2026 chirurgie esthétique |

**Ce qu'il faut en retenir** : sur les requêtes transactionnelles, les concurrents directs sont de **petits sites récents**, souvent une simple landing. Ils sont battables avec des pages par métier bien construites, des preuves et une FAQ. Sur les requêtes informationnelles, ce sont les éditeurs de logiciels et les médias pro qui tiennent la SERP. Leurs contenus sont souvent génériques et datés (2021 à 2023), et l'angle « acquisition payante + qualification + acompte » y manque presque toujours.

---

## 3. Univers de mots-clés par cluster

### C1. Agence et prestataire spécialisé (cœur transactionnel)

| Mot-clé | Suggest | Intention | Potentiel | Difficulté | Ce qui ranke | Valeur |
|---|---|---|---|---|---|---|
| agence marketing esthétique | S1 (Google propose « agence marketing beauté » et « … cosmétique ») | Commerc./Transac. | Niche | Moyenne | Agences esthétiques (The Aesthetic Agency, Shortcuts, Spationaute) mêlées à des agences cosmétiques | ★★★ |
| agence marketing institut de beauté | S0 | Transac. | Niche | Faible à moyenne | Landings d'agences de niche (Dermio par ville, Atelier Dotcom, Shortcuts) et un « top 10 » autopromotionnel | ★★★ |
| agence marketing centre esthétique | S0 | Transac. | Niche | Faible | Vecteur Digital, Spationaute, agences Meta Ads généralistes | ★★★ |
| agence marketing médecine esthétique | S0 | Transac. | Niche | Moyenne | Agences santé (Massaï, Chirurgien Digital, Wonders, Karma) | ★★★ |
| marketing clinique esthétique · marketing médecine esthétique | S0 | Commerc. | Niche | Moyenne | Agences santé, blogs logiciels (Pabau), Drift Digital | ★★★ |
| agence acquisition clients institut de beauté · agence acquisition centre esthétique | S0 | Transac. | Niche | Faible | Dermio, GloRise, Blade, Vecteur Digital, INscalUp | ★★★ |
| agence communication institut de beauté | S0 | Commerc. | Niche | Faible | Atelier Dotcom, Smart Agency (branding, réseaux sociaux) | ★★ (on y cherche du branding plus que des clientes) |
| agence communication esthétique | S1 | Commerc. | Niche | Faible à moyenne | Agences beauté et cosmétique | ★★ |
| agence publicité esthétique | S1 | Commerc. | Niche | Faible | Mêmes résultats que « agence marketing esthétique » | ★★ |
| agence marketing beauté | S2 | Commerc. | Faible | Moyenne | Agences pour **marques cosmétiques** (Alioze, InsideOut) : intention décalée | ★ |
| agence facebook ads · agence meta ads | S3 | Transac. | Moyen | Élevée | Agences Meta Ads généralistes | ★★ |
| agence meta ads prix · agence facebook ads tarifs | S2 | Commerc. | Faible | Moyenne à élevée | Pages de tarifs d'agences | ★★ |
| meilleure agence meta ads · meilleure agence facebook ads | S2 | Commerc. | Faible | Élevée | Listicles | ★ |
| agence marketing + ville (bordeaux, lyon, marseille…) | S3 (expansion a→z) | Transac. locale | Moyen en cumulé | Élevée (agences locales généralistes) | Agences locales | ★ si la page n'est pas sectorisée |
| agence marketing institut de beauté + ville | S0 | Transac. locale | Niche | Faible | Dermio (Bordeaux, La Rochelle) | ★★ (piste programmatique, à mener avec prudence) |

**Ce qu'il faut en retenir** : la lettre « b » de « agence marketing … » fait remonter *b2b*, *bordeaux* et *bruxelles*, mais pas *beauté*. Les seuls verticaux qui ressortent sont restaurant, immobilier, hôtel, food, luxe, sport et vin. La beauté est donc une niche de niche. Ranker ici apporte peu de visites, mais des prospects très qualifiés.

### C2. Publicité Facebook et Instagram pour instituts (service phare)

| Mot-clé | Suggest | Intention | Potentiel | Difficulté | Ce qui ranke | Valeur |
|---|---|---|---|---|---|---|
| publicité institut de beauté | S3 | Commerc./Info. | Moyen | Faible à moyenne | Blogs (Booksy, Boost Ton Salon). Les déclinaisons sont orientées print (affiche, panneau) | ★★★ |
| publicité facebook institut de beauté | S0 | Commerc./Info. | Niche | Faible | Boost Ton Salon, Booksy, Wavy, Klixi, Nouvelles Esthétiques (articles conseils) | ★★★ |
| publicité instagram esthéticienne · pub facebook esthéticienne · publicité esthéticienne | S0 / S1 | Commerc. | Niche | Faible | Mêmes résultats | ★★★ |
| facebook ads institut de beauté · meta ads esthétique | S0 | Commerc. | Niche | Faible | Aucune page dédiée | ★★★ |
| publicité centre esthétique | S0 | Commerc. | Niche | Faible | Aucune page dédiée | ★★★ |
| publicité salon de beauté · pub salon de beauté | S3 | Commerc./Info. | Moyen | Faible à moyenne | Blogs, imprimeurs | ★★ |
| idée publicité institut de beauté | S1 | Info. | Faible | Faible | Blogs | ★★ |
| affiche publicitaire · panneau publicitaire institut de beauté | S2 | Transac. (print) | Faible | Faible | Imprimeurs, Canva | ✗ hors offre |
| publicité locale facebook | S2 (variantes en anglais) | Info. | Faible | Moyenne | Meta, blogs | ★★ |
| comment attirer des clients sur facebook · sur instagram | S3 (sous « comment attirer des clientes ») | Info. | Moyen | Moyenne | Blogs marketing généralistes | ★★ |
| publicité instagram active mais non diffusée | S3 | Info. (dépannage) | Moyen | Moyenne | Aide Meta, forums | ★ |

### C3. Budget et prix de la publicité

| Mot-clé | Suggest | Intention | Potentiel | Difficulté | Ce qui ranke | Valeur |
|---|---|---|---|---|---|---|
| prix publicité facebook | S3 | Info./Commerc. | Élevé | Élevée | Agences (Effinity, Anode, Slice), Meta | ★★ |
| budget publicité facebook | S3 | Info. | Élevé | Élevée | Mêmes acteurs | ★★ |
| combien coûte une publicité sur facebook | S3 | Info. | Élevé | Élevée | Mêmes acteurs | ★★ |
| combien coûte une publicité sur instagram · publicité instagram tarif | S3 | Info. | Moyen | Élevée | Mêmes acteurs | ★★ |
| quel budget pour facebook ads · quel budget pub facebook | S2 | Info. | Faible à moyen | Moyenne | Agences | ★★ |
| budget publicité facebook institut de beauté · prix publicité facebook institut | S0 | Info./Commerc. | Niche | **Faible** : aucune page dédiée, la SERP mélange des guides génériques et un article de Boost Ton Salon | | ★★★ |
| prix agence marketing institut de beauté · tarif agence publicité esthétique | S0 | Commerc. | Niche | Faible | Dermio, qui affiche ses prix | ★★★ |

### C4. Attirer des clientes et remplir l'agenda (problème n°1 de la cible)

| Mot-clé | Suggest | Intention | Potentiel | Difficulté | Ce qui ranke | Valeur |
|---|---|---|---|---|---|---|
| comment attirer des clientes (en institut de beauté) | S3 en générique, S0 avec « institut » | Info. | Moyen | Moyenne | Écoles (Centre Européen de Formation), fournisseurs (Aries, Celestetic), logiciels (Treatwell, LSInstitut), Boost Ton Salon | ★★★ |
| comment trouver des clientes (esthéticienne) | S3 en générique (« pour les ongles », « pour les cils »), S0 avec « esthéticienne » | Info. | Moyen | Moyenne | Mêmes résultats | ★★★ |
| avoir plus de clientes · comment avoir plus de clients | S3 | Info. | Moyen | Moyenne | Blogs généralistes | ★★ |
| comment faire venir des clients · de nouveaux clients | S2 | Info. | Faible à moyen | Moyenne | Blogs commerce | ★★ |
| faire connaître son institut de beauté | S2 | Info. | Faible | Faible | Blogs | ★★★ |
| développer son institut de beauté · comment booster son institut de beauté | S2 | Info. | Faible | Faible à moyenne | Ubiliz, Nouvelles Esthétiques, Sonails | ★★★ |
| remplir agenda institut · remplir son agenda esthéticienne | S0 | Info. | Niche | Faible | Nouvelles Esthétiques (« comment remplir son agenda rapidement »), Ninaya, Temana, Ubiliz | ★★★ |
| comment remplir son agenda · remplir son planning | S3, mais **ambigu** (agenda Outlook, calendrier de l'avent…) | Info. | Moyen mais peu qualifié | Moyenne | Contenus d'organisation personnelle | ★ |
| trouver des patients · comment attirer les patients dans une clinique | S3 / S2 | Info. | Moyen | Moyenne | Blogs médicaux | ★★ (médecins) |
| prospection institut de beauté | S0 | **Ambiguë** : SERP de fournisseurs qui démarchent les instituts (fichiers de prospects) | Niche | Faible | fichiers-prospect.com, LSInstitut | ✗ |

### C5. Croissance, chiffre d'affaires et rentabilité de l'institut

| Mot-clé | Suggest | Intention | Potentiel | Difficulté | Ce qui ranke | Valeur |
|---|---|---|---|---|---|---|
| chiffre d'affaires institut de beauté · chiffre d'affaires moyen institut de beauté | S3 | Info. | Moyen | Moyenne | Modèles de business plan, Legalstart, Institut Alexiss | ★★ |
| augmenter chiffre d'affaires institut de beauté | S0 (la version générique « comment augmenter son chiffre d'affaires » est S3) | Info. | Faible | Moyenne | Ubiliz, Nouvelles Esthétiques, Sonails, Qarte, Aries | ★★★ |
| institut de beauté rentabilité · institut de beauté rentable | S2 | Info. | Faible | Moyenne | Sites de business plans | ★★ |
| combien gagne un institut de beauté · combien rapporte un institut de beauté | S2 | Info. | Faible | Moyenne | Mêmes sites | ★ |
| combien gagne une esthéticienne (à son compte) | S3 | Info. | Élevé | Moyenne à élevée | Sites emploi et salaires | ✗ (sauf la variante « à son compte ») |
| plan marketing institut de beauté · stratégie marketing institut de beauté | S2 | Info. | Faible | Faible à moyenne | conceptionprojet.com, blogs | ★★ |
| idée marketing institut de beauté · marketing institut de beauté | S1 | Info. | Faible | Faible | Nouvelles Esthétiques (« +60 idées »), Kallis, Autour du Regard | ★★ |
| ouvrir un institut de beauté | S3 | Info. | Élevé | Élevée | Bpifrance, Legalstart, Qonto | ★ (futures créatrices) |
| franchise institut de beauté | S2 | Commerc. | Faible | Moyenne | Annuaires de franchises | ✗ |

### C6. Promotions, offres de lancement et cartes cadeaux

| Mot-clé | Suggest | Intention | Potentiel | Difficulté | Ce qui ranke | Valeur |
|---|---|---|---|---|---|---|
| promotion institut de beauté | S3 | Info. | Moyen | Faible à moyenne | Treatwell, Beauty-Tech, Booksy | ★★ |
| idée promotion institut de beauté · exemple promotion institut de beauté | S2 | Info. | Faible à moyen | Faible | Treatwell, Beauty-Tech, Boost Ton Salon | ★★★ (l'offre d'appel est la base d'une publicité Meta) |
| promo saint valentin institut de beauté (et autres saisons) | S2 | Info. | Faible, saisonnier | Faible | Blogs | ★★ |
| offre de lancement institut de beauté | S2 | Info. | Faible | Faible | Forum manucure.info, Qonto, Cfixé, Adobe | ★★★ |
| carte cadeau institut de beauté · bon cadeau institut de beauté | S3 | Info./Transac. (outil) | Moyen | Moyenne | Imprimeurs, plateformes | ★ |
| création bon cadeau institut de beauté | S2 | Transac. (outil) | Faible | Moyenne | Outils de création | ✗ |

### C7. Fidélisation et relances

| Mot-clé | Suggest | Intention | Potentiel | Difficulté | Ce qui ranke | Valeur |
|---|---|---|---|---|---|---|
| comment fidéliser ses clientes · ses clients | S3 | Info. | Élevé (générique) | Élevée | Études de cas de grandes marques, blogs | ★ |
| fidéliser clientes institut de beauté · fidéliser clientèle institut | S0 | Info. | Niche | Moyenne | Logiciels de fidélité (Loyeo, Comeback, Qarte, Treatwell), AC Franchise | ★★ |
| carte fidélité institut de beauté | S2 | Info./Transac. (outil) | Faible | Moyenne | Logiciels | ★ |
| parrainage institut de beauté · offre parrainage institut · carte de parrainage | S2 | Info. | Faible | Faible | Blogs | ★★ |
| relancer des clients inactifs · comment relancer des clients | S2 | Info. | Faible | Moyenne | Blogs B2B génériques | ★★ |
| relance clients | S3, mais tiré vers les **impayés** (« lettre de relance », « relance clients impayées ») | Info. | Moyen mais ambigu | Moyenne | Recouvrement | ✗ |

### C8. Rendez-vous non honorés, lapins et acompte (forte douleur, et différenciant pour Sorena)

| Mot-clé | Suggest | Intention | Potentiel | Difficulté | Ce qui ranke | Valeur |
|---|---|---|---|---|---|---|
| rendez-vous non honoré · rendez-vous non honorés | S3 | Info. | Élevé | Élevée | Doctolib, monde médical, définitions | ★★ (avec un angle institut) |
| rendez-vous non honoré facture · indemnité rendez-vous non honoré | S3 | Info. | Moyen | Moyenne à élevée | Médical et juridique | ★★ |
| affiche rendez-vous non honoré · affiche lapin rendez-vous | S2 | Info. (modèle) | Faible | **Faible pour l'esthétique** : SERP 100 % médicale (SML, URPS, CPTS, Egora, Union Dentaire) | | ★★★ |
| message / mail / modèle de lettre rendez-vous non honoré | S2 | Info. (modèle) | Faible | Faible | Manuscry, modèles génériques | ★★★ |
| lapin rendez-vous · lapin rendez-vous manqué | S2 | Info. | Faible | Moyenne | Contenus généralistes | ★★ |
| no show rendez-vous · no show rendez-vous médical | S2 | Info. | Faible | Moyenne | Contenus médicaux | ★★ |
| rendez-vous non honorés institut · lapin esthéticienne · no show institut de beauté | S0 | Info./Commerc. | Niche | Faible à moyenne | Booksy, LSInstitut, Smart Agenda, 3CI, Bookywell | ★★★ |
| acompte rendez-vous · acompte rendez-vous esthéticienne · acompte institut de beauté | S2 / S0 | Info. | Faible / Niche | Faible à moyenne | Logiciels (LSInstitut, 3CI, Fleeky, Kalendes), CGV d'instituts | ★★★ |
| arrhes ou acompte · arrhes ou acompte différence | S3 | Info. | Élevé (générique : location, voiture) | Élevée | Sites juridiques généralistes | ★ (à traiter en H2 sous l'angle esthétique) |
| est-ce légal de demander un acompte | S2 | Info. | Faible | Moyenne | Contenus juridiques | ★★★ |
| planity acompte · mettre acompte planity · acompte planity remboursement | S3 | Navig./Info. | Faible à moyen | Élevée (support Planity) | support.planity.com | ★★ (à traiter en H2, pas en page dédiée) |
| empreinte bancaire rendez-vous · empreinte bancaire institut | S0 | Info. | Niche | Faible | Fleeky, moncabinetliberal | ★★★ |
| sms rappel rendez-vous · rappel sms rendez-vous | S3 | Info./Transac. (outil) | Moyen | Moyenne | Éditeurs de SMS | ★★ |
| exemple message rappel rendez-vous · message confirmation rendez-vous | S2 | Info. (modèle) | Faible à moyen | Faible à moyenne | Modèles | ★★ |

### C9. IA, automatisation et prise de rendez-vous

| Mot-clé | Suggest | Intention | Potentiel | Difficulté | Ce qui ranke | Valeur |
|---|---|---|---|---|---|---|
| ia prise de rendez-vous · agent ia prise de rendez-vous · intelligence artificielle prise de rendez-vous | S3 | Commerc. | Moyen (tous secteurs) | Moyenne (éditeurs SaaS récents) | Éditeurs SaaS | ★★★ |
| chatbot institut de beauté · ia institut de beauté | S0 | Commerc. | Niche | **Faible** : SERP saturée par un seul éditeur (Optima-Flow) | | ★★★ |
| chatbot prise de rendez-vous | S0 (Google propose « robot prise de rendez-vous préfecture ») | Mauvaise formulation | | | | ✗ |
| réponse automatique instagram · exemple · message automatique instagram dm | S3 | Info. | Moyen | Moyenne | Aide Meta, blogs ManyChat | ★★ |
| réponse automatique messenger · whatsapp business | S3 | Info. | Moyen | Moyenne | Aide Meta | ★ |
| logiciel institut de beauté (gratuit, caisse, gestion) | S3 | Commerc. | Moyen | Élevée (Planity, Kalendes, Shortcuts, comparateurs) | | ✗ (Sorena n'est pas un logiciel ; piste de partenariat) |

### C10. Épilation laser, côté pro (fenêtre réglementaire)

| Mot-clé | Suggest | Intention | Potentiel | Difficulté | Ce qui ranke | Valeur |
|---|---|---|---|---|---|---|
| décret épilation laser · décret épilation laser 2024 · épilation laser esthéticienne décret · nouveau décret épilation laser | S3 | Info. | Moyen | Moyenne (écoles, avocats, Légifrance, MACSF) | | ★★★ |
| épilation laser esthéticienne (2024, prix, avis) | S3 | Mixte (pros et grand public) | Moyen | Moyenne | | ★★ |
| formation épilation laser esthéticienne · décret formation épilation laser | S2 | Info./Transac. (formation) | Faible à moyen | Moyenne à élevée (organismes de formation) | | ✗ (sauf partenariat) |
| fiche client épilation laser | S1 (suggérée sous « clientes épilation laser ») | Info. (modèle) | Faible | **Faible** : aucune page ne propose de modèle (MACSF, Légifrance et Care & Law expliquent les obligations sans en fournir) | | ★★★ |
| rentabilité épilation laser · épilation laser rentable | S2 | Info. | Faible | Moyenne (Contour Paris, sites de business plans, vendeurs) | | ★★★ |
| rentabiliser laser · comment rentabiliser un laser | S0 (« rentabiliser laser » renvoie au **laser game**) | Info. | Niche | Faible | | ★★★ (toujours écrire « laser épilation ») |
| marketing épilation laser · clientes épilation laser · publicité épilation laser | S0 / S1 | Commerc. | Niche | Faible | | ★★★ |
| ouvrir centre épilation laser | S2 | Info. | Faible | Moyenne (franchises Laserel, Laser 26) | | ★★ |
| franchise épilation laser | S2 | Commerc. | Faible | Moyenne | | ✗ |
| machine laser épilation professionnel prix · location machine laser épilation | S3 | Commerc. (achat) | Moyen | Moyenne à élevée (vendeurs) | | ✗ (audience proche ; piste de partenariat avec des fabricants) |
| centre épilation laser + ville | S3 | B2C local | Élevé | | | ✗ |

### C11. Minceur, remodelage et technologies (cryo, RF, HIFU, HydraFacial)

| Mot-clé | Suggest | Intention | Potentiel | Difficulté | Ce qui ranke | Valeur |
|---|---|---|---|---|---|---|
| marketing centre minceur | S0 | Commerc. | Niche | **Faible** (une seule agence dédiée : DMSolution) | | ★★★ |
| ouvrir un centre minceur | S2 | Info. | Faible | Moyenne | | ★★ |
| rentabiliser machine cryolipolyse · rentabilité cryolipolyse · combien rapporte une machine cryolipolyse | S0 | Info. | Niche | Faible à moyenne (vendeurs : Keros, Holisea, Celestetic, RBC Consulting) | | ★★★ |
| machine cryolipolyse professionnel(le) · prix · occasion · avis | S3 | Commerc. (achat) | Moyen | Moyenne à élevée (vendeurs) | | ★ (audience proche) |
| meilleure machine cryolipolyse | S2 (suggestions en anglais) | Commerc. | Faible | Moyenne | | ★ |
| cryolipolyse institut · cryolipolyse institut de beauté | S3 | Surtout B2C | Moyen | | | ★ |
| cryolipolyse esthéticienne · ou médecin | S2 | Info. (juridique) | Faible | Moyenne (HAS, CNEP, cliniques) | | ★ (sujet juridique sensible : zone grise) |
| hydrafacial institut · hifu institut · radiofréquence institut · cavitation institut | S2 / S3 | Surtout B2C local | Moyen | | | ★ |
| marketing cryolipolyse · clientes hydrafacial · publicité hifu | S0 | Commerc. | Niche | Faible | | ★★ |
| centre minceur + ville | S3 | B2C local | | | | ✗ |

### C12. Médecine esthétique et cliniques : publicité et conformité

| Mot-clé | Suggest | Intention | Potentiel | Difficulté | Ce qui ranke | Valeur |
|---|---|---|---|---|---|---|
| publicité médecine esthétique | S2 | Info. | Faible | Moyenne à élevée (MACSF, Village Justice, Revue du Praticien) | | ★★★ |
| publicité chirurgie esthétique · promotion chirurgie esthétique loi | S2 | Info. | Faible | Moyenne à élevée | | ★★ |
| décret 23 septembre 2026 publicité chirurgie esthétique (décret n° 2026-891) | Non testé (actualité de moins de 3 semaines) | Info. | Faible mais en hausse | Moyenne (Légifrance, APM, avocats, Egora) : **fenêtre de fraîcheur** | | ★★★ |
| un médecin peut-il faire de la publicité | S2 | Info. | Faible | Moyenne à élevée | | ★★ |
| publicité professionnels de santé · interdiction publicité professionnels de santé | S3 | Info. | Moyen | Élevée (ANSM, Ordre) | | ★ |
| ordre des médecins réseaux sociaux · code de déontologie médicale publicité | S2 | Info. | Faible | Élevée | | ★★ |
| médecin esthétique instagram | S2 | Navig./Info. | Faible | | | ★ |
| développer sa patientèle · augmenter sa patientèle | S3 | Info. | Moyen | Moyenne | | ★★ |
| comment attirer les patients dans une clinique | S2 | Info. | Faible | Faible à moyenne | | ★★★ |
| ouvrir un cabinet de médecine esthétique | S2 | Info. | Faible | Moyenne | | ★★ |
| cabinet médecine esthétique · centre médico esthétique · clinique esthétique + ville | S3 | B2C local | | | | ✗ |

### C13. Instagram organique de l'institut (haut de tunnel)

| Mot-clé | Suggest | Intention | Potentiel | Difficulté | Ce qui ranke | Valeur |
|---|---|---|---|---|---|---|
| instagram institut de beauté | S3 | Info. | Moyen | Faible à moyenne | Blogs, comptes Instagram | ★★ |
| idée post instagram institut de beauté · post instagram institut | S2 | Info. | Faible | Faible | Blogs | ★★ |
| bio instagram institut de beauté | S2 | Info. | Faible | Faible | Blogs | ★★ (aimant à prospects facile) |
| feed instagram institut de beauté | S2 | Info. | Faible | Faible | Blogs | ★ |

### C14. Lead generation et acquisition génériques, et pièges

| Mot-clé | Suggest | Intention | Potentiel | Difficulté | Valeur |
|---|---|---|---|---|---|
| génération de leads · leads qualifiés · agence | S3 | Info./Commerc. | Élevé | Élevée | ★ |
| acquisition client · acquisition client b2b · agence | S3 | Info. | Élevé | Élevée | ★ |
| **lead esthétique** | S1 : Google corrige en « **LED esthétique** » | Piège | | | ✗ (dans les textes, écrire « demandes qualifiées » ou « prospects ») |
| leads médecine esthétique | S0 | Commerc. | Niche | Faible | ★ |
| **centre esthétique** seul | S3, mais l'expansion a→z fait aussi remonter « centre esthétique automobile » et « voiture » | Ambiguë | | | Toujours ajouter un qualificatif |

---

## 4. Questions exploitables en FAQ et en articles

Source : **S** = Google Suggest (préfixes comment, pourquoi, quel, combien, meilleur, ou expansion) · **SERP** = titre ou H2 d'une page qui ranke (ce sont des questions « Autres questions posées » probables, mais non extraites directement). Les colonnes « Destination » renvoient au mapping de la partie 5.

### 4.1 Acquisition et publicité

| Question | Source | Destination |
|---|---|---|
| Comment attirer des clientes dans un institut de beauté ? | S + SERP | /blog/attirer-clientes-institut |
| Comment trouver des clientes quand on est esthéticienne ? | S | /blog/attirer-clientes-institut |
| Comment faire connaître son institut de beauté ? | S | /blog/attirer-clientes-institut |
| Comment booster ou développer son institut de beauté ? | S | /blog/developper-institut-de-beaute |
| Comment remplir son agenda rapidement en institut ? | SERP (Nouvelles Esthétiques) | /blog/remplir-agenda-institut |
| Comment avoir plus de clients grâce à Facebook ou Instagram ? | S | /publicite-facebook-instagram (FAQ) |
| Combien coûte une publicité sur Facebook ou sur Instagram ? | S | /blog/budget-publicite-facebook-institut |
| Quel budget prévoir pour Facebook Ads quand on est un institut ? | S | /blog/budget-publicite-facebook-institut |
| Peut-on faire de la publicité sur Facebook gratuitement ? | S | /blog/budget-publicite-facebook-institut (H2) |
| Pourquoi ma publicité Instagram est-elle active mais non diffusée ? | S | FAQ de /publicite-facebook-instagram |
| Quelle promotion proposer dans un institut de beauté ? | S (idée et exemple de promotion) | /blog/idees-promotion-institut |
| Quelle offre de lancement pour l'ouverture d'un institut ? | S + SERP | /blog/offre-lancement-institut |
| Faut-il casser ses prix pour attirer des clientes ? | SERP (INscalUp, Boost Ton Salon) | FAQ de /institut-de-beaute |
| Combien coûte une agence marketing pour un institut de beauté ? | SERP (Dermio affiche ses prix) | FAQ de la home et de /institut-de-beaute (et /tarifs si la page est créée) |

### 4.2 Rendez-vous non honorés, acompte et rappels

| Question | Source | Destination |
|---|---|---|
| Qu'est-ce qu'un rendez-vous non honoré ? | S (« c'est quoi », « définition ») | /blog/acompte-rendez-vous-institut (intro) |
| Peut-on facturer un rendez-vous non honoré en institut ? | S (« facture », « facturé doctolib ») | /blog/acompte-rendez-vous-institut |
| Est-ce légal de demander un acompte à une cliente ? | S | /blog/acompte-rendez-vous-institut |
| Arrhes ou acompte : quelle différence pour un institut ? | S + SERP (art. L.214-1 du Code de la consommation) | /blog/acompte-rendez-vous-institut |
| Quelle indemnité pour un rendez-vous non honoré ? | S | /blog/acompte-rendez-vous-institut |
| Comment mettre un acompte sur Planity ? | S (« mettre acompte planity », « acompte planity pro ») | /blog/acompte-rendez-vous-institut (H2) |
| L'acompte est-il remboursable si la cliente annule ? | S (« acompte planity remboursement », « annulation planity acompte ») | /blog/acompte-rendez-vous-institut |
| Acompte ou empreinte bancaire : que choisir ? | SERP (Fleeky, Kalendes) | /rendez-vous-non-honores (FAQ) |
| Quelle affiche mettre en institut contre les lapins ? | S (« affiche rendez-vous non honoré ») | /blog/affiche-rendez-vous-non-honore |
| Quel message envoyer à une cliente qui n'est pas venue ? | S (« message », « mail », « modèle de lettre ») | /blog/affiche-rendez-vous-non-honore |
| Comment rédiger un SMS de rappel de rendez-vous ? | S (« exemple message rappel rendez-vous ») | /blog/message-rappel-rendez-vous |
| Comment éviter les rendez-vous non honorés en institut ? | SERP | /rendez-vous-non-honores |

### 4.3 Fidélisation et chiffre d'affaires

| Question | Source | Destination |
|---|---|---|
| Comment fidéliser ses clientes en institut ? Pourquoi fidéliser ? | S | /blog/fideliser-clientes-institut |
| Comment relancer des clientes inactives ? | S (« relancer des clients inactifs ») | /blog/fideliser-clientes-institut |
| Comment mettre en place un parrainage en institut ? | S (« offre parrainage », « carte de parrainage ») | /blog/fideliser-clientes-institut (H2) |
| Quel est le chiffre d'affaires moyen d'un institut de beauté ? | S | /blog/developper-institut-de-beaute |
| Un institut de beauté est-il rentable ? Combien rapporte-t-il ? | S | /blog/developper-institut-de-beaute |
| Combien gagne une esthéticienne à son compte ? | S | /blog/developper-institut-de-beaute (H2 secondaire) |
| Comment augmenter son chiffre d'affaires en institut ? | S + SERP | /blog/developper-institut-de-beaute |

### 4.4 Épilation laser et technologies

| Question | Source | Destination |
|---|---|---|
| Une esthéticienne peut-elle faire de l'épilation laser ? | S (« épilation laser esthéticienne décret / 2024 ») | /blog/decret-epilation-laser |
| Que dit le décret épilation laser de 2024 ? | S | /blog/decret-epilation-laser |
| Quelle formation est obligatoire pour pratiquer le laser en institut ? | S + SERP (arrêté du 19/02/2025) | /blog/decret-epilation-laser |
| Que doit contenir la fiche client d'épilation laser ? | S + SERP (MACSF, Légifrance) | /blog/fiche-client-epilation-laser |
| L'épilation laser est-elle rentable pour un institut ? En combien de temps rentabiliser son laser ? | S + SERP (Contour Paris) | /blog/rentabilite-epilation-laser |
| Combien coûte une machine laser d'épilation professionnelle ? | S | /blog/rentabilite-epilation-laser (H2) |
| Comment trouver des clientes pour l'épilation laser ? | S (« clientes épilation laser ») | /centre-laser |
| Combien coûte une machine de cryolipolyse professionnelle ? Combien rapporte-t-elle ? | S | /blog/rentabiliser-cryolipolyse |
| Comment rentabiliser une machine de cryolipolyse ? | SERP (vendeurs) | /blog/rentabiliser-cryolipolyse |
| Comment ouvrir un centre minceur ? | S | /centre-minceur (FAQ) ou article P3 |

### 4.5 Médecine esthétique et cliniques

| Question | Source | Destination |
|---|---|---|
| Un médecin peut-il faire de la publicité ? | S | /blog/publicite-medecine-esthetique |
| Que dit l'Ordre des médecins sur les réseaux sociaux ? | S | /blog/publicite-medecine-esthetique |
| Un médecin esthétique peut-il publier des photos avant/après ? | SERP (Egora, MACSF) | /blog/publicite-medecine-esthetique |
| Que dit la loi sur la promotion de la chirurgie esthétique ? | S (« promotion chirurgie esthétique loi ») | /blog/decret-publicite-chirurgie-esthetique |
| Qu'interdit le décret du 23 septembre 2026 sur la publicité des cliniques ? | SERP (Légifrance, APM, avocats) | /blog/decret-publicite-chirurgie-esthetique |
| Comment développer sa patientèle en médecine esthétique ? | S (« développer sa patientèle ») | /medecine-esthetique |
| Comment attirer des patients dans une clinique esthétique ? | S | /medecine-esthetique |
| Comment ouvrir un cabinet de médecine esthétique ? | S | /blog/ouvrir-cabinet-medecine-esthetique (P3) |

### 4.6 IA et automatisation

| Question | Source | Destination |
|---|---|---|
| Comment fonctionne une IA de prise de rendez-vous ? | S (« ia prise de rendez-vous », « agent ia ») | /ia-prise-de-rendez-vous |
| Un chatbot peut-il réduire les rendez-vous non honorés ? | SERP | /ia-prise-de-rendez-vous (FAQ) |
| Comment mettre une réponse automatique sur Instagram ? | S (« exemple », « message automatique dm ») | /blog/reponse-automatique-instagram (P3) |
| L'IA va-t-elle remplacer l'accueil de mon institut ? | Objection probable (non mesurée) | FAQ de /ia-prise-de-rendez-vous |

---

## 5. Mapping mot-clé → URL cible

Règles : slugs en français, courts, sans accents. **Une requête principale = une seule URL.** Les secondaires d'une page ne doivent jamais être la requête principale d'une autre.

### 5.1 Home, services, conversion

| URL | Mot-clé principal | Mots-clés secondaires | Intention | Priorité |
|---|---|---|---|---|
| `/` | **agence marketing esthétique** | acquisition de clientèle esthétique · agence acquisition centre esthétique · clientes qualifiées institut · agence marketing beauté (secondaire uniquement : intention décalée) | Commerc./Transac. | P1 |
| `/publicite-facebook-instagram` | **publicité facebook institut de beauté** | publicité instagram esthéticienne · pub facebook esthéticienne · facebook ads institut de beauté · meta ads esthétique · publicité centre esthétique · publicité institut de beauté · agence meta ads esthétique | Commerc./Transac. | P1 |
| `/ia-prise-de-rendez-vous` | **ia prise de rendez-vous institut** | chatbot institut de beauté · agent ia prise de rendez-vous · qualification demandes 24/7 · relance prospects · réponse automatique instagram institut | Commerc. | P1 |
| `/rendez-vous-non-honores` | **rendez-vous non honorés institut de beauté** | lapin esthéticienne · no show institut de beauté · acompte rendez-vous esthéticienne (secondaire) · empreinte bancaire institut · rappel rendez-vous institut | Commerc. (solution) | P1 |
| `/diagnostic-offert` | (conversion ; cible SEO faible) audit marketing institut de beauté offert | diagnostic marketing centre esthétique · audit publicité facebook institut | Transac. | P2 |
| `/tarifs` (optionnelle) | **prix agence marketing institut de beauté** | tarif agence publicité esthétique · agence meta ads prix (secondaire) | Commerc. | P2 si Sorena accepte d'afficher une fourchette de prix |

### 5.2 Pages par métier

| URL | Mot-clé principal | Mots-clés secondaires | Intention | Priorité |
|---|---|---|---|---|
| `/institut-de-beaute` | **agence marketing institut de beauté** | agence communication institut de beauté · attirer clientes institut de beauté (en version courte : l'article reste la cible principale) · nouvelles clientes institut · agence acquisition institut de beauté | Transac. | P1 |
| `/centre-esthetique` | **agence marketing centre esthétique** | clientes centre esthétique · publicité centre esthétique (secondaire, déjà sur la page service) · remplir cabines appareils | Transac. | P1 (voir le risque n°2) |
| `/medecine-esthetique` | **agence marketing médecine esthétique** | marketing clinique esthétique · marketing médecin esthétique · développer sa patientèle médecine esthétique · attirer patients clinique esthétique · communication conforme Ordre | Transac. | P1 |
| `/centre-laser` | **marketing épilation laser** | clientes épilation laser · publicité épilation laser · remplir centre épilation laser · rentabiliser laser épilation (renvoi vers l'article) | Transac. | P1 |
| `/centre-minceur` | **marketing centre minceur** | clientes cures minceur · publicité minceur · marketing cryolipolyse · remodelage corporel clientes · radiofréquence et lipocavitation clientes | Transac. | P1 |

### 5.3 Pages par soin (seulement si les données le justifient)

| URL | Mot-clé principal | Secondaires | Priorité | Condition |
|---|---|---|---|---|
| `/soins/cryolipolyse` | clientes cryolipolyse institut | marketing cryolipolyse · publicité cryolipolyse | P3 | Uniquement si la Search Console montre des impressions sur « cryolipolyse » depuis /centre-minceur |
| `/soins/anti-age` | clientes soins anti-âge institut | HydraFacial · HIFU · microneedling · radiofréquence visage | P3 | Même condition. Le volume B2B est quasi nul aujourd'hui (S0) |

> L'épilation laser n'a pas de page soin : `/centre-laser` joue ce rôle. Une page `/soins/epilation-laser` cannibaliserait directement `/centre-laser`.

### 5.4 Ressources et blog (`/blog/…`)

| URL | Mot-clé principal | Mots-clés secondaires | Intention | Priorité |
|---|---|---|---|---|
| `/blog/attirer-clientes-institut` | **comment attirer des clientes en institut de beauté** | trouver des clientes esthéticienne · faire connaître son institut · avoir plus de clientes · comment faire venir des clientes | Info. | P1 |
| `/blog/acompte-rendez-vous-institut` | **acompte institut de beauté** | arrhes ou acompte institut · est-ce légal de demander un acompte · rendez-vous non honoré facture · indemnité rendez-vous non honoré · acompte planity | Info. | P1 |
| `/blog/decret-epilation-laser` | **décret épilation laser esthéticienne** | décret épilation laser 2024 · nouveau décret épilation laser · formation épilation laser obligatoire · arrêté 19 février 2025 | Info. | P1 |
| `/blog/fiche-client-epilation-laser` | **fiche client épilation laser** | fiche d'information épilation laser · modèle consentement épilation laser · obligations décret 2024-470 | Info. (modèle téléchargeable) | P1 |
| `/blog/budget-publicite-facebook-institut` | **budget publicité facebook institut de beauté** | prix publicité facebook institut · combien coûte une publicité instagram · quel budget facebook ads · publicité facebook gratuite | Info./Commerc. | P1 |
| `/blog/publicite-medecine-esthetique` | **publicité médecine esthétique** | un médecin peut-il faire de la publicité · ordre des médecins réseaux sociaux · code de déontologie médicale publicité · avant/après médecin esthétique | Info. | P1 |
| `/blog/decret-publicite-chirurgie-esthetique` | **décret publicité chirurgie esthétique 2026** | décret 2026-891 · promotion chirurgie esthétique loi · publicité chirurgie esthétique mineurs | Info. (actualité) | P1, à publier vite pour profiter de la fraîcheur |
| `/blog/remplir-agenda-institut` | **remplir son agenda en institut** | remplir son planning esthéticienne · heures creuses institut · créneaux vides · liste d'attente | Info. | P2 |
| `/blog/affiche-rendez-vous-non-honore` | **affiche rendez-vous non honoré institut** | message rendez-vous non honoré · mail rendez-vous non honoré · modèle lettre rendez-vous non honoré · charte d'annulation institut | Info. (modèles) | P2 |
| `/blog/message-rappel-rendez-vous` | **message rappel rendez-vous institut** | sms rappel rendez-vous · exemple message rappel rendez-vous · message confirmation rendez-vous | Info. (modèles) | P2 |
| `/blog/rentabilite-epilation-laser` | **rentabilité épilation laser** | épilation laser rentable · rentabiliser laser épilation · combien rapporte un laser épilation · prix machine laser épilation professionnelle | Info. | P2 |
| `/blog/rentabiliser-cryolipolyse` | **rentabiliser machine cryolipolyse** | rentabilité cryolipolyse · combien rapporte une machine cryolipolyse · prix machine cryolipolyse professionnelle | Info. | P2 |
| `/blog/idees-promotion-institut` | **idée promotion institut de beauté** | exemple promotion institut de beauté · promo saint valentin institut · idée publicité institut de beauté | Info. | P2 |
| `/blog/offre-lancement-institut` | **offre de lancement institut de beauté** | promotion ouverture institut · annonce ouverture institut de beauté | Info. | P2 |
| `/blog/fideliser-clientes-institut` | **fidéliser clientes institut de beauté** | relancer clientes inactives · parrainage institut de beauté · carte fidélité institut · offre anniversaire cliente | Info. | P2 |
| `/blog/developper-institut-de-beaute` | **développer son institut de beauté** | augmenter chiffre d'affaires institut · chiffre d'affaires moyen institut de beauté · institut de beauté rentabilité · comment booster son institut | Info. | P2 |
| `/blog/plan-marketing-institut` | **plan marketing institut de beauté** | stratégie marketing institut de beauté · idée marketing institut | Info. | P3 |
| `/blog/instagram-institut-de-beaute` | **idée post instagram institut de beauté** | bio instagram institut de beauté · feed instagram institut · post instagram institut | Info. | P3 |
| `/blog/reponse-automatique-instagram` | **réponse automatique instagram institut** | message automatique instagram dm · exemple réponse automatique instagram | Info. | P3 |
| `/blog/ouvrir-cabinet-medecine-esthetique` | **ouvrir un cabinet de médecine esthétique** | développer sa patientèle | Info. | P3 |
| `/blog/ouvrir-centre-epilation-laser` | **ouvrir centre épilation laser** | ouvrir un centre minceur (voir le risque n°6) | Info. | P3 |

### 5.5 Risques de cannibalisation et règles d'arbitrage

1. **Home, `/institut-de-beaute` et `/centre-esthetique`.** « Agence marketing esthétique », « … institut de beauté » et « … centre esthétique » sont proches sémantiquement. *Règle* : la home vise la requête parapluie (« esthétique ») et renvoie vers les métiers. Chaque page métier a un title et un H1 propres, ses soins, son cas client et sa FAQ. La home ne doit pas utiliser « institut de beauté » dans son title.
2. **`/institut-de-beaute` et `/centre-esthetique`.** Pour Google, « institut » et « centre esthétique » sont presque synonymes. *Règle* : présenter le centre esthétique comme un centre **équipé de technologies** (appareils à rentabiliser, cures à forte valeur) et l'institut comme une **structure indépendante orientée soins** avec quelques technologies. Si le contenu ne peut pas vraiment différer, lancer `/institut-de-beaute` seule et créer `/centre-esthetique` plus tard.
3. **`/publicite-facebook-instagram`, `/blog/budget-publicite-facebook-institut` et `/blog/idees-promotion-institut`.** La page service vise « faire gérer sa pub » (transactionnel). Le blog vise le budget et le prix (informationnel) et les idées d'offres. *Règle* : le mot « agence » et le CTA de diagnostic n'apparaissent dans le H1 et le title que sur la page service. Les articles renvoient vers la page service avec une ancre exacte.
4. **`/rendez-vous-non-honores`, `/blog/acompte-rendez-vous-institut`, `/blog/affiche-rendez-vous-non-honore` et `/blog/message-rappel-rendez-vous`.** Ce sont quatre intentions différentes : la solution clé en main, le droit (arrhes ou acompte), un modèle d'affiche ou de message, un modèle de SMS. *Règle* : la page service ne cible pas « arrhes ou acompte » en H2. Elle le résume en deux lignes et renvoie vers l'article.
5. **`/centre-laser`, `/blog/decret-epilation-laser`, `/blog/rentabilite-epilation-laser` et `/blog/fiche-client-epilation-laser`.** *Règle* : la page métier dit « nous remplissons vos séances laser ». Le décret, la rentabilité et la fiche client sont des contenus d'expertise qui mènent à la page métier. Aucune page soin `/soins/epilation-laser`.
6. **`/centre-minceur`, `/soins/cryolipolyse` et `/blog/rentabiliser-cryolipolyse`.** Ne créer la page soin que si les données le justifient (voir 5.3). « Ouvrir un centre minceur » ne doit pas devenir la requête principale de `/centre-minceur` : c'est une requête de créatrice, à placer en FAQ.
7. **`/medecine-esthetique`, `/blog/publicite-medecine-esthetique` et `/blog/decret-publicite-chirurgie-esthetique`.** L'article d'actualité doit renvoyer vers le guide de fond. S'il reste trop mince au bout de six mois, le fusionner dans le guide sous forme de section datée, avec une redirection 301.
8. **`/ia-prise-de-rendez-vous` et `/blog/reponse-automatique-instagram`.** La page service parle de l'IA qui qualifie et prend les rendez-vous. L'article est un tutoriel sur les outils natifs de Meta. Il ne faut pas employer « chatbot institut de beauté » comme requête principale de l'article.
9. **`/blog/attirer-clientes-institut`, `/blog/remplir-agenda-institut` et `/blog/developper-institut-de-beaute`.** *Règle* : « attirer » couvre les nouvelles clientes (acquisition), « remplir l'agenda » couvre l'occupation, les créneaux vides et les clientes existantes, « développer » couvre le chiffre d'affaires, la rentabilité et la stratégie. « Développer / booster son institut » appartient **uniquement** à `/blog/developper-institut-de-beaute`.
10. **Le H1 actuel de la home** (« Nous remplissons votre agenda ») reprend « remplir agenda ». C'est cohérent pour la conversion, mais la home ne doit pas viser « comment remplir son agenda » dans son title ni dans sa meta description. Cette requête appartient au blog.

---

## 6. Longue traîne : les gains rapides

Critères : SERP faible ou mal servie pour le secteur, intention forte de la part d'une gérante ou d'un médecin, et faisabilité rapide.

| # | Mot-clé longue traîne | Pourquoi c'est un gain rapide | Page cible | Format |
|---|---|---|---|---|
| 1 | **fiche client épilation laser** (+ « modèle ») | Requête suggérée par Google. **Aucun modèle** dans la SERP (MACSF, Légifrance et Care & Law expliquent sans fournir de modèle). Obligation légale depuis le décret 2024-470. L'audience est exactement la cible (centres qui se mettent au laser). | /blog/fiche-client-epilation-laser | Modèle PDF à télécharger contre un e-mail, donc aimant à prospects |
| 2 | **affiche rendez-vous non honoré institut** (+ message et mail de rendez-vous non honoré) | Requêtes suggérées. La SERP est **100 % médicale** (SML, URPS, CPTS) : rien pour l'esthétique. Douleur quotidienne. | /blog/affiche-rendez-vous-non-honore | Affiche A4 et trois modèles de messages |
| 3 | **acompte institut de beauté · acompte rendez-vous esthéticienne · est-ce légal de demander un acompte** | Les pages des éditeurs de logiciels sont commerciales et pauvres sur le plan juridique. L'angle « arrhes par défaut, art. L.214-1 du Code de la consommation » est peu traité côté esthétique. | /blog/acompte-rendez-vous-institut | Guide, tableau arrhes / acompte / empreinte, clause de CGV type |
| 4 | **budget publicité facebook institut de beauté** | Requête générique très concurrentielle, mais **aucune page sectorielle**. | /blog/budget-publicite-facebook-institut | Guide avec fourchettes sourcées et calcul « coût par cliente » |
| 5 | **chatbot institut de beauté · ia prise de rendez-vous institut** | SERP saturée par **un seul éditeur** (Optima-Flow). Sorena a une offre réelle à montrer. | /ia-prise-de-rendez-vous | Page service, démo ou capture, FAQ |
| 6 | **marketing centre minceur** | Une seule agence dédiée en SERP (DMSolution). | /centre-minceur | Page métier |
| 7 | **agence marketing centre esthétique** | Peu d'acteurs, pages minces. | /centre-esthetique | Page métier |
| 8 | **marketing épilation laser · clientes épilation laser** | S0, aucune page dédiée, et la vague post-décret crée un besoin (des instituts ont investi dans un laser à rentabiliser). | /centre-laser | Page métier |
| 9 | **rentabiliser machine cryolipolyse · rentabilité cryolipolyse** | La SERP ne contient que des vendeurs d'appareils, qui sont juges et parties. Un angle neutre « remplir les séances » se démarque. | /blog/rentabiliser-cryolipolyse | Guide et calculateur simple |
| 10 | **rentabilité épilation laser** | Requête suggérée. SERP occupée par un vendeur (Contour Paris) et des sites de business plans. | /blog/rentabilite-epilation-laser | Guide et calculateur du point mort |
| 11 | **décret publicité chirurgie esthétique 2026** | Décret n° 2026-891 publié le 25/09/2026 : **fenêtre de fraîcheur** de quelques semaines. Peu de contenus orientés « que peut encore faire une clinique en publicité Meta ». | /blog/decret-publicite-chirurgie-esthetique | Article d'actualité, liste de contrôle de conformité |
| 12 | **offre de lancement institut de beauté** | Requête suggérée. SERP faible (un forum, des généralistes). | /blog/offre-lancement-institut | Liste d'idées avec exemples chiffrés |
| 13 | **idée promotion institut de beauté · exemple promotion institut de beauté** | Requêtes suggérées, SERP de blogs datés. Lien direct avec l'offre d'appel des publicités Meta. | /blog/idees-promotion-institut | Liste et calendrier saisonnier |
| 14 | **empreinte bancaire institut · empreinte bancaire rendez-vous** | S0, mais quelques pages d'éditeurs seulement. Bon complément au n°3. | H2 dans /blog/acompte-rendez-vous-institut | Section |
| 15 | **bio instagram institut de beauté · idée post instagram institut de beauté** | Requêtes suggérées, SERP faible. Haut de tunnel, mais l'aimant à prospects est facile à produire. | /blog/instagram-institut-de-beaute | Modèles à copier |

**Ordre conseillé** : 1, 2, 3, 11 (fraîcheur), 4, 5, puis les pages métiers 6 à 8, puis 9, 10, 12 et 13.

---

## 7. Recommandations rapides pour la home (hors périmètre, pour info)

- Title proposé, à tester : « Agence marketing esthétique : clientes qualifiées pour instituts et centres · Sorena ». Le title actuel ne contient ni « agence » ni « marketing ».
- Garder « acquisition de clientèle » dans la meta description et l'eyebrow, mais placer **« agence marketing esthétique »** dans le title et un H2.
- Supprimer ou laisser la balise `meta keywords` : elle est sans effet sur Google. En revanche, la liste qu'elle contient (« épilation laser médecin publicité », « acquisition patientèle médecine esthétique »…) montre déjà l'intention de pages dédiées : elle rejoint le mapping de la partie 5.

---

## 8. Validation à faire (avant de produire les contenus)

- [ ] Saisir les mots-clés principaux de la partie 5 dans **Google Keyword Planner** (France, français) et noter les fourchettes de volume.
- [ ] Contrôler la difficulté chiffrée dans **Ubersuggest, Semrush ou Ahrefs** pour les requêtes P1.
- [ ] Vérifier chaque SERP P1 **à la main sur google.fr**, en navigation privée, depuis une localisation hors IDF : noter le bloc « Autres questions posées », la présence de vidéos et le pack local.
- [ ] Une fois les pages publiées, suivre dans la **Search Console** les impressions par page et repérer les requêtes inattendues (nouveaux secondaires, cannibalisation).
- [ ] Faire relire juridiquement les contenus « acompte / arrhes », « décret laser », « publicité médecine esthétique » et « décret 2026-891 » (sujets YMYL).

---

## Annexe A. Signaux Suggest notables (extraits bruts)

- **publicité institut de beauté** → promotion institut de beauté, publicité salon de beauté, idée promotion institut de beauté, panneau publicitaire institut de beauté, affiche publicitaire institut de beauté, exemple promotion institut de beauté
- **marketing institut de beauté** → plan marketing institut de beauté, stratégie marketing institut de beauté
- **instagram institut de beauté** → feed, post, bio, idée post instagram institut de beauté
- **promotion institut de beauté** → idée promotion, exemple promotion, promo saint valentin institut de beauté
- **chiffre d'affaires institut de beauté** → chiffre d'affaire moyen institut de beauté, chiffre d'affaire salon d'esthétique
- **rendez-vous non honoré** (a→z) → facture, par le médecin, définition, doctolib, psychologue, affiche (pour) rendez-vous non honoré, affiche kiné, indemnité, mail, message, modèle lettre
- **lapin rendez-vous** → lapin rendez-vous médical, manqué, affiche lapin rendez-vous
- **planity acompte** → acompte planity remboursement, acompte planity pro, annulation planity acompte, frais acompte planity, mettre acompte planity
- **arrhes ou acompte** → différence, remboursement, location, achat voiture, entre particuliers
- **sms rappel rendez-vous** → message rappel rendez-vous, sms confirmation rendez-vous, exemple message rappel rendez-vous
- **ia prise de rendez-vous** → intelligence artificielle prise de rendez-vous, agent ia prise de rendez-vous, ia pour prise de rendez-vous
- **réponse automatique instagram** → exemple, messenger, message automatique instagram dm, commentaire, gratuit
- **épilation laser esthéticienne** → 2024, décret, avis, prix, formation épilation laser esthéticienne, dermatologue ou esthéticienne
- **décret épilation laser** → décret épilation laser esthéticienne, 2024, infirmière, nouveau décret, décret formation
- **clientes épilation laser** → fiche client épilation laser
- **machine cryolipolyse** → professionnel prix, professionnel, avis, occasion, prix
- **cryolipolyse institut** → cryolipolyse institut de beauté, institut ou médecin
- **publicité médecine esthétique** → publicité chirurgie esthétique, promotion chirurgie esthétique loi
- **publicité professionnels de santé** → ansm, interdiction publicité professionnels de santé
- **médecin esthétique instagram** → chirurgien esthétique instagram, chirurgie esthétique instagram
- **développer sa patientèle** → augmenter sa patientèle, développer sa clientèle
- **comment attirer des patients** → comment attirer les patients dans une clinique
- **agence facebook ads / agence meta ads** → tarifs, prix, france, paris, lyon, meilleure agence
- **agence marketing esthétique** → agence marketing beauté, agence marketing cosmétique
- **lead esthétique** → led esthétique (piège)
- **centre esthétique** (a→z) → … automobile, voiture (ambiguïté), botox, injection, laser, médical, homme
- **Aucune suggestion (S0)** : agence marketing institut de beauté, agence marketing centre esthétique, agence marketing médecine esthétique, publicité facebook institut de beauté, attirer clientes institut de beauté, trouver des clientes esthéticienne, remplir agenda institut, fidéliser clientes institut, rendez-vous non honorés institut, lapin esthéticienne, acompte rendez-vous esthéticienne, marketing cryolipolyse, rentabiliser machine cryolipolyse, marketing centre minceur, marketing clinique esthétique, prospection institut de beauté, prix publicité facebook institut, IA prise de rendez-vous institut, chatbot institut de beauté

## Annexe B. Pages consultées dans les SERP (sélection)

- Dermio, agence institut Bordeaux : https://www.dermio.fr/agence-institut-beaute-bordeaux
- GloRise : https://glorise-agency.com/ · Blade Agency : https://www.bladeagency.fr/ · Vecteur Digital : https://www.vecteur-digital.fr/
- DMSolution (centres minceur et anti-âge) : https://dmsolution.fr/
- The Aesthetic Agency : https://www.theaestheticagency.fr/ · Shortcuts : https://shortcuts.fr/agence-marketing/ · Atelier Dotcom : https://www.atelierdotcom.com/agence-communication-digitale-instituts-beaute-spa/
- Massaï Medical : https://medical.agence-massai.fr/esthetique/ · Chirurgien Digital : https://chirurgien-digital.com/
- Boost Ton Salon, publicités Facebook : https://www.boosttonsalon.com/post/5-publicit%C3%A9s-facebook-et-instagram-irr%C3%A9sistibles-pour-d%C3%A9velopper-ton-institut-de-beaut%C3%A9
- Les Nouvelles Esthétiques, remplir son agenda : https://www.nouvelles-esthetiques.com/articles/metier/au-quotidien/institut-de-beaute-comment-remplir-son-agenda-rapidement-3731
- LSInstitut, acompte : https://www.lsinstitut.fr/systeme-d-acompte-lsinstitut-reduire-les-rendez-vous-oublies/
- Le Blog du Coiffeur, acompte et no-show : https://leblogducoiffeur.fr/acompte-annulation-no-show-que-dit-la-loi-conditions-generales-preuves/
- Planity, prépaiement : https://support.planity.com/hc/fr/articles/28251675841298-Comment-activer-et-g%C3%A9rer-le-pr%C3%A9paiement-des-r%C3%A9servations-en-ligne
- Décret 2024-470 (Légifrance) : https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049592616
- MACSF, épilation laser non thérapeutique : https://www.macsf.fr/responsabilite-professionnelle/actes-de-soins-et-technique-medicale/epilation-lumiere-pulsee-et-laser-non-therapeutique
- Contour Paris, rentabiliser un laser : https://contour-paris.com/fr/blog/beauty-well-being/technologies-esthetiques/comment-rentabiliser-un-laser-depilation-definitive-en-6-mois/
- MACSF, publicité en médecine esthétique : https://www.macsf.fr/responsabilite-professionnelle/relation-au-patient-et-deontologie/publicite-en-medecine-et-chirurgie-esthetiques-pieges-a-eviter
- Décret 2020-1662 (APHP) : https://affairesjuridiques.aphp.fr/textes/decret-n-2020-1662-du-22-decembre-2020-portant-modification-du-code-de-deontologie-des-medecins-et-relatif-leur-communication-professionnelle/
- Décret 2026-891 (Légifrance) : https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054894510
- HAS, cryolipolyse : https://www.has-sante.fr/jcms/c_2872741/en/cryolipolyse-a-visee-esthetique-la-has-preconise-un-encadrement-renforce
- Optima-Flow, chatbots instituts : https://optima-flow.com/chatbots/optimiser-la-gestion-de-votre-institut-de-beaute-grace-aux-chatbots-automatises/
- Egora, affiche rendez-vous non honorés : https://www.egora.fr/actus-pro/conditions-dexercice/rendez-vous-non-honores-une-affiche-pour-sensibiliser-vos-patients
