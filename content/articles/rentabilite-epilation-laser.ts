import type { Article } from "../types";

export const rentabiliteEpilationLaser: Article = {
  slug: "rentabilite-epilation-laser",
  category: "Acquisition",
  title: "Rentabilité épilation laser : la méthode pour calculer le point mort de votre machine",
  metaTitle: "Rentabilité épilation laser : la méthode de calcul",
  metaDescription:
    "Rentabilité épilation laser : coût complet de la machine, temps cabine, prix, occupation, forfaits menés à terme. La méthode du point mort et un exemple fictif.",
  excerpt:
    "Coût complet de l'appareil, temps cabine, prix, occupation, forfaits menés à terme : la méthode pour savoir combien de séances par mois rendent votre laser rentable.",
  publishedAt: "2026-10-08",
  readingMinutes: 10,
  intro: [
    "L'épilation laser est rentable pour un centre lorsque la marge des séances **réellement réalisées** couvre le coût complet de l'activité : l'appareil, son entretien, la cabine, le temps de la praticienne, la formation obligatoire et l'acquisition des clientes. Le calcul tient en une formule : **point mort = coûts fixes mensuels ÷ marge par séance**. Le résultat est un nombre de séances à réaliser chaque mois, à comparer au nombre de créneaux que votre machine peut réellement offrir.",
    "Personne ne peut vous donner un chiffre unique : les prix annoncés par les vendeurs d'appareils vont de moins de 20 000 € à 90 000 €, et vos tarifs, votre loyer et vos temps de cabine vous sont propres. Ce guide détaille la méthode, les postes de coût à ne pas oublier, un exemple chiffré **entièrement fictif** et les leviers qui font varier le résultat, à commencer par l'occupation de la machine et la part des forfaits menés à terme.",
  ],
  body: [
    { type: "h2", text: "Rentable, qu'est-ce que cela veut dire pour un laser d'épilation ?" },
    {
      type: "p",
      text: "Selon le rapport de branche de l'esthétique (CNEP, données 2023), l'épilation à la lumière intense pèse déjà 6 % du chiffre d'affaires des instituts employeurs. Mais un laser peut générer beaucoup de chiffre d'affaires et rester déficitaire si la cabine, le temps de la praticienne et la publicité absorbent la marge.",
    },
    {
      type: "p",
      text: "Les chiffres des vendeurs entretiennent la confusion entre chiffre d'affaires et résultat. Un fabricant de laser diode indique que trois séances par semaine couvrent la mensualité de son appareil et annonce, pour la plupart de ses clients, « la rentabilité complète en 3 à 6 mois ». Un distributeur évoque, selon l'article, un retour sur investissement « entre 4 et 6 mois » ou « en 12 à 18 mois ». Ces simulations partent du chiffre d'affaires, pas de ce qui reste une fois les charges payées.",
    },
    {
      type: "p",
      text: "Nous distinguons donc deux seuils : le **point mort machine**, qui couvre l'appareil seul, et le **point mort complet**, qui couvre tout ce que l'activité laser coûte chaque mois. Seul le second dit si l'épilation laser est rentable chez vous.",
    },

    { type: "h2", text: "Le coût complet de l'appareil : achat, leasing ou location" },
    {
      type: "p",
      text: "Le prix d'achat n'est que la partie visible. Pour comparer deux offres, ramenez chaque poste à un montant **mensuel hors taxes**.",
    },
    {
      type: "table",
      caption: "Les postes du coût complet d'une activité d'épilation laser",
      head: ["Poste", "Ce qu'il comprend", "Ramené au mois"],
      rows: [
        ["Appareil", "Achat, crédit, crédit-bail ou location", "Mensualité, ou prix ÷ durée d'utilisation prévue"],
        ["Entretien et pièces d'usure", "Contrat d'entretien, pièces qui s'usent au nombre de tirs", "Coût annuel ÷ 12, plus une provision"],
        ["Assurance", "Responsabilité civile professionnelle étendue au laser ou à la lumière pulsée", "Surcoût annuel ÷ 12"],
        ["Formation socle et conformité", "Formation de chaque praticienne, jours sans cabine, lunettes de protection, affichage", "Formation ÷ 60 mois (validité de l'attestation), équipement lissé sur sa durée d'usage"],
        ["Cabine", "Part du loyer, de l'énergie et du ménage", "Au prorata de la surface ou du temps d'usage"],
        ["Acquisition", "Publicité, offre d'appel, temps de réponse aux demandes", "Budget mensuel"],
        ["Par séance", "Consommables, éventuel coût par tir, temps de la praticienne", "Coût horaire chargé × durée du créneau, plus les consommables"],
      ],
    },
    { type: "h3", text: "Prix d'une machine laser d'épilation professionnelle : pas de chiffre unique" },
    {
      type: "p",
      text: "Le prix dépend de la technologie, de la puissance, des pièces à main, du service après-vente et de ce qui est inclus. Un fabricant de laser diode affiche 16 900 € HT et 18 900 € HT pour ses deux modèles d'épilation, ou 438 € par mois sur 48 mois pour le premier. Un distributeur écrit, dans un guide de 2026, que le prix « varie généralement entre 25 000 € et 90 000 € ». Ces montants, relevés le 8 octobre 2026, viennent de vendeurs : ce sont des repères, pas des moyennes.",
    },
    {
      type: "p",
      text: "**Acheter, financer ou louer.** Le crédit vous rend propriétaire ; le crédit-bail vous laisse une option d'achat en fin de contrat ; la location longue durée ne vous rend jamais propriétaire. Plus que la mensualité, comparez ce qu'elle inclut, la durée d'engagement et le coût d'une sortie anticipée.",
    },

    { type: "h2", text: "Temps cabine et prix de vente : la marge réelle d'une séance" },
    {
      type: "p",
      text: "La marge par séance est **le prix moyen hors taxes réellement encaissé, moins les coûts qui n'existent que si la séance a lieu**.",
    },
    { type: "h3", text: "Mesurer le temps cabine par zone" },
    {
      type: "p",
      text: "Le temps de tir ne suffit pas. Comptez le créneau entier bloqué dans l'agenda : accueil, vérification de la peau et des contre-indications (obligatoire avant chaque séance), préparation, séance, conseils, nettoyage et mise à jour du dossier. Ce temps varie selon la zone, l'appareil et la praticienne : chronométrez vos propres créneaux pendant deux ou trois semaines.",
    },
    {
      type: "p",
      text: "Calculez ensuite la **marge par heure de cabine** de chaque zone : (prix − coûts par séance) ÷ durée du créneau en heures. Une petite zone vendue moins cher peut rapporter davantage à l'heure qu'une grande zone. Cet indicateur vous dit quelles zones mettre en avant.",
    },
    { type: "h3", text: "Fixer le prix par séance et par forfait" },
    {
      type: "p",
      text: "L'épilation est un protocole en plusieurs séances, souvent vendu en forfait par zone. Si votre forfait revient moins cher à la séance que l'unité, calculez avec le **prix par séance du forfait** : c'est celui que vous encaisserez le plus souvent. Un forfait trop bas remplit l'agenda sans rien rapporter.",
    },
    {
      type: "p",
      text: "Si la praticienne réalise d'autres soins quand le laser ne tourne pas, comptez son coût horaire chargé dans chaque séance. Si elle est dédiée au laser, son salaire devient un coût fixe, dû même quand le créneau reste vide.",
    },

    { type: "h2", text: "Taux d'occupation et forfaits menés à terme : les deux chiffres qui décident" },
    {
      type: "p",
      text: "Comparez ensuite le point mort à votre capacité. **Capacité mensuelle = heures d'ouverture de la cabine laser ÷ durée moyenne d'un créneau.** Le **taux d'occupation** est le nombre de séances réalisées divisé par cette capacité. Un point mort qui suppose une cabine presque pleine est fragile ; atteint à faible occupation, il laisse de la marge pour les mois creux.",
    },
    {
      type: "p",
      text: "Le second chiffre est propre à l'épilation : la **part des forfaits menés à terme**. Une cliente qui s'arrête après deux séances fait disparaître les séances prévues si son forfait se règle au fil des passages, et son créneau doit être rempli par une nouvelle cliente. En régime de croisière :",
    },
    {
      type: "ul",
      items: [
        "**Nouveaux forfaits nécessaires par mois = séances visées par mois ÷ séances réellement réalisées par forfait, en moyenne.**",
        "Forfaits menés au bout : chaque nouvelle cliente nourrit l'agenda pendant plusieurs mois.",
        "Abandons en route : il faut recruter davantage pour remplir les mêmes créneaux, et le budget d'acquisition suit.",
      ],
    },
    {
      type: "cta",
      title: "Votre point mort dépend de deux chiffres sur lesquels on peut agir.",
      text: "L'occupation de la machine et les forfaits menés à terme. Nous y travaillons avec une publicité Meta locale réservée aux plus de 18 ans, une invitation au bilan ou à une séance test au juste prix, un assistant IA présenté comme tel qui pré-qualifie chaque demande 24 h/24 (soin, créneau, budget), un acompte ou des arrhes avec des conditions d'annulation claires, qui réduisent les absences, et des relances avec l'accord de la cliente. Le diagnostic de 30 minutes est offert.",
    },

    { type: "h2", text: "Exemple chiffré fictif : le point mort d'un centre imaginaire" },
    {
      type: "p",
      text: "Voici la méthode appliquée à un centre **inventé pour l'exemple**. Tous les montants sont des hypothèses arrondies : ni des prix de marché, ni des moyennes, ni les résultats d'un centre réel. Le forfait de 6 séances est une hypothèse de calcul, pas une recommandation.",
    },
    {
      type: "table",
      caption: "Exemple fictif : hypothèses et calcul (hors taxes, par mois sauf mention contraire)",
      head: ["Étape", "Hypothèse ou calcul", "Résultat"],
      rows: [
        ["Appareil", "Mensualité de financement", "500 €"],
        ["Entretien et pièces d'usure", "Contrat et provision lissés", "60 €"],
        ["Assurance", "Surcoût lié au laser", "40 €"],
        ["Formation socle", "1 200 € pour une praticienne, sur 60 mois", "20 €"],
        ["Cabine", "Part du loyer et des charges", "200 €"],
        ["Acquisition", "Budget publicitaire", "400 €"],
        ["**Coûts fixes**", "Total des lignes précédentes", "**1 220 €**"],
        ["Prix moyen encaissé", "Par séance, forfaits compris", "75 €"],
        ["Coûts par séance", "Créneau de 45 min à 28 € de l'heure (21 €) et 4 € de consommables", "25 €"],
        ["**Marge par séance**", "75 € − 25 €", "**50 €**"],
        ["Point mort machine", "500 € ÷ 50 €", "10 séances"],
        ["**Point mort complet**", "1 220 € ÷ 50 € = 24,4, arrondi au-dessus", "**25 séances**"],
        ["Capacité", "21 h par semaine, soit environ 91 h par mois, en créneaux de 45 min", "121 créneaux"],
        ["Occupation au point mort", "25 ÷ 121", "Environ 21 %"],
        ["Objectif de la gérante", "1 500 € de résultat avant impôt : (1 220 € + 1 500 €) ÷ 50 €", "55 séances, environ 45 % d'occupation"],
        ["Forfaits nécessaires", "Forfaits de 6 séances, tous menés à terme : 55 ÷ 6", "10 par mois"],
        ["Forfaits nécessaires avec abandons", "Une cliente sur deux s'arrête après 2 séances, soit 4 en moyenne : 55 ÷ 4", "14 par mois"],
      ],
    },
    {
      type: "p",
      text: "Trois enseignements dépassent cet exemple. Dix séances paient la machine, mais il en faut 25 pour couvrir l'activité. L'objectif de résultat, plus que le point mort, fixe l'occupation à viser. Et les abandons obligent à trouver 14 nouvelles clientes par mois au lieu de 10, soit 40 % de plus.",
    },
    {
      type: "callout",
      title: "Un simulateur n'est pas un prévisionnel",
      text: "Cet exemple ignore l'impôt, la saisonnalité et la montée en charge des premiers mois, où les mensualités courent alors que les forfaits démarrent à peine. Avant de signer un financement, faites valider votre prévisionnel par votre expert-comptable, avec des hypothèses d'occupation prudentes. Méfiez-vous de tout calcul qui part du chiffre d'affaires sans déduire la cabine, le temps de la praticienne et l'acquisition.",
    },

    { type: "h2", text: "Cinq leviers pour rentabiliser votre laser d'épilation" },
    {
      type: "p",
      text: "Le prix de l'appareil est fixé le jour de la signature ; les leviers suivants se travaillent chaque semaine. Les deux premiers sont ceux sur lesquels agit un [marketing épilation laser](/centre-laser) bien construit.",
    },
    { type: "h3", text: "1. Remplir les créneaux creux, pas seulement les créneaux demandés" },
    {
      type: "p",
      text: "L'occupation se joue sur les heures les moins demandées. Repérez les créneaux vides semaine après semaine et proposez-les en priorité avant d'ouvrir de nouvelles plages. Regroupez le laser sur des demi-journées dédiées : un créneau isolé entre deux soins visage risque de rester vide.",
    },
    { type: "h3", text: "2. Mener chaque forfait à son terme" },
    {
      type: "p",
      text: "Fixez la séance suivante avant que la cliente quitte la cabine, puis rappelez-lui chaque rendez-vous et relancez-la quand l'intervalle prévu est dépassé, avec son accord. Expliquez dès le départ qu'il s'agit d'une réduction durable de la pilosité, en plusieurs séances, dont le résultat varie selon la peau et le poil : une cliente bien informée abandonne moins.",
    },
    { type: "h3", text: "3. Tenir vos prix plutôt que les remiser" },
    {
      type: "p",
      text: "Une remise réduit la marge par séance et relève mécaniquement le point mort : dans l'exemple fictif, une marge ramenée de 50 € à 40 € le fait passer de 25 à 31 séances par mois. Préférez une invitation de valeur : un bilan, ou une séance test à son juste prix.",
    },
    { type: "h3", text: "4. Réduire les absences avec un acompte" },
    {
      type: "p",
      text: "Un créneau laser non honoré ne se rattrape pas, et la machine reste payée. Selon la vice-présidente de la CNAIB, les rendez-vous non honorés représentent « facilement jusqu'à 10 % » du chiffre d'affaires d'une journée ou d'une semaine. Un acompte ou des arrhes à la réservation réduisent les absences, avec des conditions d'annulation annoncées avant tout paiement. Arrhes et acompte n'ayant pas les mêmes effets, voyez notre guide sur [l'acompte en institut](/ressources/acompte-rendez-vous-institut).",
    },
    { type: "h3", text: "5. Faire du bilan obligatoire le rendez-vous de vente du forfait" },
    {
      type: "p",
      text: "Avant la première séance, la réglementation impose un examen de la peau et du phototype, la vérification des contre-indications et une information écrite de la cliente, notamment sur les risques et les performances attendues. Bien préparé, le bilan devient le moment où la cliente comprend le protocole et choisit son forfait. Suivez la part des bilans transformés en forfait : elle relie votre publicité à votre point mort. Les documents à préparer figurent dans notre guide sur la [fiche client d'épilation laser](/ressources/fiche-client-epilation-laser).",
    },

    { type: "h2", text: "Les questions à poser avant d'acheter ou de louer une machine" },
    {
      type: "p",
      text: "Posez-les par écrit au vendeur et gardez ses réponses : elles alimentent votre calcul.",
    },
    {
      type: "ol",
      items: [
        "**Que comprend le prix hors taxes ?** Pièces à main, installation, prise en main, couverture des pannes.",
        "**Quelles pièces s'usent au nombre de tirs ?** Durée de vie annoncée et prix de remplacement.",
        "**Que coûte l'entretien après la couverture du fabricant, et sous quel délai ?** Chaque jour de panne, ce sont des créneaux perdus.",
        "**Pour un financement : durée, coût total, valeur de rachat, sortie anticipée ?**",
        "**La formation incluse est-elle la formation socle ?** Une prise en main par le fabricant ne la remplace pas.",
        "**Où en est l'appareil au regard du règlement européen sur les dispositifs médicaux ?** Les appareils d'épilation laser et à lumière pulsée relèvent de son annexe XVI, avec des périodes transitoires jusqu'en 2028 ou 2029 selon les cas.",
        "**Sur quelles hypothèses repose votre simulation ?** Chiffre d'affaires ou résultat, temps de cabine compté ou non.",
        "**Et pour vous : combien de créneaux ouvrir chaque semaine, à quel prix, et d'où viendront les clientes des six premiers mois ?**",
      ],
    },

    { type: "h2", text: "Le cadre légal en bref, et ce qu'il change dans le calcul" },
    {
      type: "p",
      text: "Depuis le 27 mai 2024, le décret n° 2024-470 ouvre l'épilation au laser et à la lumière pulsée à visée non thérapeutique aux esthéticiennes qualifiées, sous réserve d'une formation socle : 4 jours pour le laser, 2,5 jours pour la lumière pulsée, 5 jours pour les deux, avec une attestation valable 5 ans (arrêté du 19 février 2025). L'arrêté du 11 août 2026 a reporté au 1er septembre 2027 la date limite pour valider cette formation, un délai transitoire présenté comme destiné aux professionnelles déjà en exercice ; pour une nouvelle praticienne, la lecture prudente est de se former avant le premier acte. Trois conséquences pour le calcul :",
    },
    {
      type: "ul",
      items: [
        "**La formation est un coût à part entière.** Deux organismes affichent la formation socle laser à 810 € HT et 1 250 € HT (pages consultées le 8 octobre 2026), plus les jours passés hors cabine.",
        "**Chaque séance contient du temps réglementaire** : vérification de la peau et des contre-indications, document nominatif conservé 3 ans après la dernière séance.",
        "**La conformité s'équipe** : lunettes de protection adaptées, affichage des risques et des attestations, fiche de maintenance pour chaque appareil.",
      ],
    },
    {
      type: "p",
      text: "Nous détaillons ces textes dans notre guide sur le [décret épilation laser et la formation socle](/ressources/decret-epilation-laser).",
    },

    { type: "h2", text: "En résumé : la rentabilité se joue dans l'agenda" },
    {
      type: "p",
      text: "La rentabilité d'un laser d'épilation ne se lit pas sur sa fiche technique. Elle se calcule avec vos coûts complets, votre marge et votre capacité, puis se gagne créneau par créneau : machine occupée, forfaits menés à terme, prix tenus, absences réduites.",
    },
    {
      type: "p",
      text: "Les deux premiers leviers dépendent de la façon dont vous trouvez et accompagnez vos clientes. C'est le cœur de notre accompagnement des [centres d'épilation laser](/centre-laser) : un protocole installé en 7 jours, et une seule maison accompagnée par zone de 10 km.",
    },
  ],
  faq: [
    {
      q: "L'épilation laser est-elle rentable pour un institut ?",
      a: "Elle peut l'être, mais aucun chiffre ne vaut pour tous les centres. Elle est rentable quand la marge des séances réalisées couvre le coût complet de l'activité : appareil, entretien, assurance, formation socle, cabine, temps de la praticienne et acquisition des clientes. Calculez votre point mort (coûts fixes mensuels ÷ marge par séance), puis comparez-le au nombre de créneaux que vous pouvez réellement ouvrir.",
    },
    {
      q: "Combien coûte une machine laser d'épilation professionnelle ?",
      a: "Il n'existe pas de prix unique : il dépend de la technologie, de la puissance, des pièces à main et de ce qui est inclus. À titre de repère, un fabricant de laser diode affiche 16 900 € HT et 18 900 € HT pour ses modèles d'épilation, et un distributeur situe le prix d'un laser professionnel entre 25 000 € et 90 000 € (pages consultées le 8 octobre 2026). Comparez le coût complet sur la durée d'utilisation, pas le seul prix d'achat.",
    },
    {
      q: "Combien rapporte un laser d'épilation par mois ?",
      a: "Le nombre de séances réalisées multiplié par votre marge par séance, moins vos coûts fixes. Les chiffres d'affaires mensuels annoncés par les vendeurs reposent sur leurs propres hypothèses de remplissage et ne déduisent pas toutes les charges. Le seul chiffre fiable est celui que vous calculez avec vos tarifs, vos temps de cabine et votre taux d'occupation réel.",
    },
    {
      q: "En combien de temps rentabiliser un laser d'épilation ?",
      a: "Les délais publiés par les vendeurs vont de 3 à 18 mois, et un même distributeur annonce, selon l'article, 4 à 6 mois ou 12 à 18 mois. Votre délai dépend du coût de l'appareil, de votre marge par séance et de la vitesse à laquelle vous remplissez les créneaux. Prévoyez une montée en charge : les premiers mois, les mensualités courent avant que les forfaits soient tous lancés.",
    },
    {
      q: "Vaut-il mieux acheter, financer ou louer son laser ?",
      a: "Cela dépend de votre trésorerie et de votre visibilité sur le volume de séances. L'achat ou le crédit vous rend propriétaire, le crédit-bail vous laisse une option d'achat, la location évite d'immobiliser du capital sans jamais vous rendre propriétaire. Comparez avec votre expert-comptable le coût total sur la durée, ce que comprend la mensualité et le coût d'une sortie anticipée.",
    },
    {
      q: "Faut-il intégrer la formation socle dans le calcul de rentabilité ?",
      a: "Oui. Elle est obligatoire pour les esthéticiennes qui pratiquent l'épilation au laser ou à la lumière pulsée, au plus tard le 1er septembre 2027 (arrêté du 11 août 2026) ; pour une nouvelle praticienne, la lecture prudente est de se former avant le premier acte. Comptez son prix, les jours sans cabine et la remise à niveau d'un jour tous les 5 ans. La formation du fabricant ne la remplace pas.",
    },
  ],
  sources: [
    {
      label: "Décret n° 2024-470 du 24 mai 2024 relatif aux actes d'épilation à la lumière pulsée intense et au laser (Légifrance)",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049592616",
    },
    {
      label: "Arrêté du 19 février 2025 relatif à la formation socle (Légifrance)",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000051249461",
    },
    {
      label: "Arrêté du 11 août 2026 : report de l'échéance de formation au 1er septembre 2027 (L'Officiel des Métiers)",
      url: "https://www.lofficieldesmetiers.fr/epilation-laser-et-ipl-report-de-la-formation-au-1er-sept-2027/",
    },
    {
      label: "MACSF, épilation à la lumière pulsée et au laser à visée non thérapeutique : obligations",
      url: "https://www.macsf.fr/responsabilite-professionnelle/actes-de-soins-et-technique-medicale/epilation-lumiere-pulsee-et-laser-non-therapeutique",
    },
    {
      label: "Règlement d'exécution (UE) 2022/2346 : spécifications communes des produits de l'annexe XVI (EUR-Lex)",
      url: "https://eur-lex.europa.eu/eli/reg_impl/2022/2346/oj/eng",
    },
    {
      label: "Qualitiso, dispositions transitoires des produits de l'annexe XVI",
      url: "https://www.qualitiso.com/faq-dispositions-transitoires-annexe-xvi/",
    },
    {
      label: "Rapport de branche Esthétique-cosmétique-parfumerie, CNEP / Xerfi Specific, 2024 (données 2023)",
      url: "https://www.cnep-france.fr/UPB/wp-content/uploads/2025/01/Rapport-de-Branche-Esthetique-2024-donnees-2023.pdf",
    },
    {
      label: "Profession Bien-Être, propos de la vice-présidente de la CNAIB sur les rendez-vous non honorés (28 août 2023)",
      url: "https://www.professionbienetre.fr/esthetique/le-no-show-peserait-jusqua-10-du-chiffre-daffaires-selon-la-cnaib/",
    },
    {
      label: "Code de la consommation, article L.214-1 : arrhes et acompte (Légifrance)",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032226990",
    },
    {
      label: "Ténor, prix publics, financement et rentabilité annoncée d'un laser diode (page consultée le 8 octobre 2026)",
      url: "https://tenordiode.fr/achat-laser-diode-professionnel/",
    },
    {
      label: "Contour Paris, guide 2026 pour choisir un laser d'épilation professionnel (fourchette de prix, délai de 12 à 18 mois)",
      url: "https://contour-paris.com/fr/blog/technologies-esthetiques/comment-choisir-son-laser-professionnel-depilation-definitive-en-2026/",
    },
    {
      label: "Contour Paris, guide pour rentabiliser un laser d'épilation (retour sur investissement de 4 à 6 mois)",
      url: "https://contour-paris.com/fr/blog/beauty-well-being/technologies-esthetiques/comment-rentabiliser-un-laser-depilation-definitive-en-6-mois/",
    },
    {
      label: "SEPR, formation socle laser et lumière pulsée : tarifs (page consultée le 8 octobre 2026)",
      url: "https://www.sepr.edu/formations/lumiere-pulsee-laser-non-therapeutique/",
    },
    {
      label: "Appui Formation, formation socle laser et lumière pulsée : tarifs (page consultée le 8 octobre 2026)",
      url: "https://www.appuiformation.com/formations/courte-laser-lumiere-pulsee",
    },
  ],
  related: [
    "/centre-laser",
    "/ressources/decret-epilation-laser",
    "/ressources/budget-publicite-facebook-institut",
    "/ressources/acompte-rendez-vous-institut",
  ],
};
