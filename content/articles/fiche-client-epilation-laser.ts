import type { Article } from "../types";

export const ficheClientEpilationLaser: Article = {
  slug: "fiche-client-epilation-laser",
  category: "Réglementation",
  title: "Fiche client épilation laser : ce que le décret impose, et un modèle commenté",
  metaTitle: "Fiche client épilation laser : obligations et modèle",
  metaDescription:
    "Fiche client épilation laser : les 8 mentions imposées par l'article D. 1151-4, l'examen du phototype, la traçabilité et le RGPD, avec un modèle commenté.",
  excerpt:
    "Les huit mentions que la fiche d'information doit contenir selon le décret 2024-470, un modèle structuré à adapter, et les règles RGPD pour des données de santé.",
  publishedAt: "2026-10-08",
  readingMinutes: 10,
  intro: [
    "Au 8 octobre 2026, aucun texte n'impose de formulaire type. Mais l'article D. 1151-4 du code de la santé publique, issu du **décret n° 2024-470**, oblige le centre à remettre à chaque cliente, au plus tard avant le premier acte, une **fiche d'information** qui comporte huit mentions précises. La cliente en date et signe un double, que le centre conserve trois ans. L'article D. 1151-6 ajoute un examen de l'état cutané et du phototype avant la programmation des séances, une vérification à chaque séance et, pour le laser, un document nominatif de traçabilité.",
    "Ce que l'on appelle couramment la « fiche client » réunit donc deux documents : la fiche d'information signée et le suivi des séances. Comme elle recueille des informations sur la santé de la cliente, elle relève aussi du RGPD : consentement explicite, conservation limitée, sécurité. Voici ce que disent les textes, puis un modèle structuré à adapter avec votre assureur ou votre conseil.",
  ],
  body: [
    { type: "h2", text: "Ce que les textes imposent, et ce qu'ils n'imposent pas" },
    {
      type: "p",
      text: "Le décret n° 2024-470 du 24 mai 2024 a créé les articles D. 1151-1 à D. 1151-11 du code de la santé publique. Cinq obligations structurent votre fiche client. Pour le cadre général (qui peut pratiquer, formation socle, calendrier), voyez notre article sur le [décret épilation laser](/ressources/decret-epilation-laser).",
    },
    {
      type: "table",
      caption: "Les obligations qui alimentent la fiche client (code de la santé publique)",
      head: ["Obligation", "Article", "Qui", "Quand", "Conservation"],
      rows: [
        [
          "Remettre une fiche d'information, datée et signée par la cliente",
          "D. 1151-4",
          "Exploitant",
          "Au plus tard avant le premier acte",
          "Double conservé 3 ans",
        ],
        [
          "Examiner l'état cutané et le phototype",
          "D. 1151-6, I, 1°",
          "Professionnel",
          "Avant la programmation des séances",
          "Laser : preuve tracée, 3 ans après la dernière séance",
        ],
        [
          "Vérifier l'absence de contre-indication, adapter les réglages, contrôler l'absence d'effet indésirable",
          "D. 1151-6, I, 2° et 3°",
          "Professionnel",
          "À chaque séance",
          "Laser : preuve tracée, 3 ans après la dernière séance",
        ],
        [
          "Faire porter des lunettes adaptées",
          "D. 1151-8",
          "Professionnel",
          "À chaque séance",
          "Aucune durée fixée par le texte",
        ],
        [
          "Déclarer les incidents",
          "D. 1151-7",
          "Professionnel",
          "Dès qu'il en a connaissance",
          "Aucune durée fixée par le texte",
        ],
      ],
    },
    {
      type: "p",
      text: "Ce que ces articles n'imposent pas : un modèle officiel, ou un formulaire de consentement au sens médical. Ils imposent une **information écrite**, que la cliente date et signe, afin qu'elle puisse « décider en connaissance de cause » (D. 1151-4, 3°). Le consentement explicite dont parle le RGPD est une autre question, traitée plus bas.",
    },

    { type: "h2", text: "Les 8 mentions obligatoires de la fiche d'information" },
    {
      type: "p",
      text: "L'article D. 1151-4 dispose : « Au plus tard avant le premier acte d'épilation, l'exploitant remet ou fait remettre au consommateur une fiche, rédigée dans des termes compréhensibles du public [...] ». Cette fiche d'information, cœur de votre dossier d'épilation laser, contient les huit éléments suivants.",
    },
    {
      type: "table",
      caption: "Article D. 1151-4 du code de la santé publique, mention par mention",
      head: ["N°", "Ce que dit le texte", "Comment le remplir"],
      rows: [
        [
          "1°",
          "« Les informations relatives aux catégories de consommateurs qui doivent être exclus de l'utilisation du dispositif ou pour lesquelles des conditions particulières d'utilisation doivent s'appliquer »",
          "Reprenez les publics exclus et les conditions particulières indiqués dans la notice de votre appareil.",
        ],
        [
          "2°",
          "« Une description des performances attendues du dispositif, de sorte que le consommateur comprenne quel effet non médical peut être attendu de l'utilisation du dispositif »",
          "Réduction durable de la pilosité, en plusieurs séances, avec des résultats variables d'une personne à l'autre. Jamais « définitive » ni « garantie ».",
        ],
        [
          "3°",
          "« Une description des risques résiduels du dispositif, y compris les mesures de maîtrise associées, présentée d'une manière claire et aisément compréhensible, afin que le consommateur puisse décider en connaissance de cause s'il souhaite être traité avec ce dispositif »",
          "Les risques listés par le fabricant, puis ce que vous faites pour les limiter : examen préalable, réglages adaptés, consignes.",
        ],
        [
          "4°",
          "La mention : « Les professionnels ont reçu une formation appropriée sur les conditions d'utilisation en toute sécurité du dispositif. »",
          "À reproduire mot pour mot, et seulement si chaque praticienne concernée est formée.",
        ],
        [
          "5°",
          "« La recommandation de se soumettre à une consultation médicale comprenant un examen diagnostique des zones de peau à traiter avant toute première prestation d'épilation »",
          "C'est une recommandation, pas une condition : la cliente indique qu'elle en a été informée.",
        ],
        [
          "6°",
          "« Les contre-indications d'une épilation à la lumière pulsée intense ou au laser et la recommandation aux consommateurs de solliciter l'avis de leur médecin en cas de doute »",
          "La liste de la notice du fabricant, recopiée sans la résumer.",
        ],
        [
          "7°",
          "« Les recommandations à suivre lors des séances d'épilation et l'obligation d'une protection oculaire appropriée »",
          "Les consignes avant, pendant et après la séance prévues par la notice, et le port des lunettes.",
        ],
        [
          "8°",
          "« Les informations sur le moment et la manière de signaler les effets secondaires indésirables à l'exploitant, à l'Agence nationale de sécurité du médicament et des produits de santé ou au moyen du site internet mentionné à l'article D. 1413-58 »",
          "Votre contact, et l'adresse du portail national de signalement : signalement.social-sante.gouv.fr.",
        ],
      ],
    },
    {
      type: "p",
      text: "L'article se termine ainsi : « Un double de cette fiche, daté et signé par le consommateur, est conservé par l'exploitant pendant une durée de trois ans. »",
    },

    { type: "h2", text: "L'examen préalable et les vérifications à chaque séance" },
    {
      type: "p",
      text: "L'article D. 1151-6 fixe trois gestes au professionnel, pour le laser comme pour la lumière pulsée intense :",
    },
    {
      type: "ol",
      items: [
        "**Avant la programmation des séances** : il « réalise avant la programmation des séances, un examen relatif à l'état cutané du consommateur et au phototype du consommateur. Il vérifie l'absence de signe évocateur d'une contre-indication. En cas de contre-indication détectée, les séances ne peuvent pas être programmées ».",
        "**Avant chaque séance** : il « vérifie, avant chaque séance d'épilation, l'absence de signe évocateur de contre-indication et adapte le paramétrage de l'appareil d'épilation en fonction du phototype du consommateur. En cas de signe évocateur de contre-indication, l'acte ne peut pas être réalisé ».",
        "**Après chaque séance** : il « contrôle, à l'issue de chaque séance, l'absence d'effet indésirable ».",
      ],
    },
    {
      type: "p",
      text: "Pour le **laser** seulement, le II ajoute : « la preuve des vérifications effectuées en application du I est retracée dans un document dédié nominatif et personnel à chaque consommateur tenu à la disposition des agents chargés du contrôle pendant une durée de trois ans à l'issue de la dernière séance d'épilation ». Pour la lumière pulsée, ce document n'est pas exigé. Le tenir quand même reste le moyen le plus simple de prouver que les vérifications ont été faites.",
    },

    { type: "h2", text: "Modèle de fiche client épilation laser, partie par partie" },
    {
      type: "callout",
      title: "Modèle indicatif",
      text: "Ce modèle ne remplace ni la notice de votre appareil ni l'avis de votre assureur ou de votre conseil. Adaptez-le avec eux avant de l'utiliser.",
    },
    {
      type: "p",
      text: "Que vous soyez un [institut de beauté](/institut-de-beaute) qui ajoute le laser à sa carte ou un centre spécialisé, la structure est la même : cinq parties, dans cet ordre.",
    },
    { type: "h3", text: "Partie 1 : identification" },
    {
      type: "ul",
      items: [
        "Nom, prénom, téléphone ou e-mail de la cliente.",
        "Date de naissance, seulement si la notice de votre appareil exclut certaines tranches d'âge (1° de D. 1151-4).",
        "Zones à traiter, technique utilisée (laser ou lumière pulsée) et modèle de l'appareil.",
        "Nom de la praticienne et date de fin de validité de son attestation de formation.",
        "Cliente mineure : le décret ne règle pas la question. Vérifiez la notice de l'appareil et la position de votre assureur avant toute prestation.",
      ],
    },
    { type: "h3", text: "Partie 2 : information remise (D. 1151-4)" },
    {
      type: "p",
      text: "Reprenez les huit rubriques du tableau ci-dessus, dans le même ordre, avec un texte propre à votre appareil. Terminez par une formule de signature, par exemple : *Je reconnais avoir reçu, avant ma première séance, la fiche d'information prévue à l'article D. 1151-4 du code de la santé publique, en avoir pris connaissance et avoir pu poser mes questions.* Suivent la date, le nom et la signature de la cliente.",
    },
    { type: "h3", text: "Partie 3 : questionnaire de contre-indications" },
    {
      type: "p",
      text: "C'est la partie la plus sensible, sur le plan de la sécurité comme du RGPD. Deux règles : ne poser que les questions utiles pour vérifier les contre-indications de votre appareil, et recopier la liste de la notice plutôt que d'en inventer une.",
    },
    {
      type: "table",
      caption: "Trame de questionnaire, à aligner sur la notice de votre appareil",
      head: ["Rubrique", "Exemple de question", "Fondement"],
      rows: [
        [
          "Contre-indications de la notice",
          "« Êtes-vous concernée par l'une des situations suivantes ? », suivi de la liste exacte de la notice",
          "D. 1151-4, 6° et D. 1151-6, I, 1°",
        ],
        [
          "Traitements en cours",
          "« Suivez-vous actuellement un traitement ? Si oui, lequel ? »",
          "À garder si la notice de votre appareil vise certains traitements",
        ],
        [
          "État de la peau sur la zone",
          "« Avez-vous une lésion, une irritation ou un tatouage sur la zone à traiter ? »",
          "Examen de l'état cutané (D. 1151-6, I, 1°)",
        ],
        [
          "Consignes préalables",
          "Questions reprenant les consignes de la notice (exposition aux UV, préparation de la zone)",
          "D. 1151-4, 7°",
        ],
        [
          "Avis médical",
          "« Avez-vous consulté un médecin avant cette première séance ? »",
          "Recommandation du 5° de D. 1151-4",
        ],
      ],
    },
    {
      type: "p",
      text: "Ajoutez une ligne d'engagement : *Je signalerai avant chaque séance tout changement dans ces réponses.* Elle facilite la vérification que la praticienne doit faire à chaque séance.",
    },
    { type: "h3", text: "Partie 4 : examen préalable" },
    {
      type: "ul",
      items: [
        "Date de l'examen et nom de la praticienne.",
        "État cutané de chaque zone, avec vos observations.",
        "Phototype retenu, par exemple sur l'échelle de Fitzpatrick (I à VI).",
        "Signe évocateur d'une contre-indication : oui ou non. Si oui, aucune séance n'est programmée et la cliente est invitée à consulter un médecin.",
        "Paramètres de départ prévus par la notice pour ce phototype.",
      ],
    },
    { type: "h3", text: "Partie 5 : suivi de chaque séance" },
    {
      type: "table",
      caption: "Tableau de suivi, une ligne par séance",
      head: ["Colonne", "Ce que vous notez", "Fondement"],
      rows: [
        ["Date et zone", "Numéro de séance, zone traitée", "Traçabilité"],
        [
          "Vérification préalable",
          "Absence de signe de contre-indication, réponses inchangées",
          "D. 1151-6, I, 2°",
        ],
        ["Paramètres", "Réglages adaptés au phototype", "D. 1151-6, I, 2°"],
        ["Protection oculaire", "Lunettes adaptées portées par la cliente", "D. 1151-8"],
        ["Fin de séance", "Absence d'effet indésirable, ou description de l'effet constaté", "D. 1151-6, I, 3°"],
        ["Incident", "Déclaration faite, date, destinataire", "D. 1151-7"],
        ["Visa", "Nom et signature de la praticienne", "Preuve des vérifications"],
      ],
    },
    {
      type: "p",
      text: "Pour le laser, ce tableau constitue le document nominatif exigé par le II de D. 1151-6. Conservez-le trois ans après la dernière séance.",
    },

    { type: "h2", text: "L'affichage en cabine, complément de la fiche" },
    {
      type: "p",
      text: "La fiche ne suffit pas : deux affichages sont obligatoires.",
    },
    {
      type: "ul",
      items: [
        "**Les attestations de formation** : « Les attestations de formation en cours de validité des professionnels qui réalisent les actes prévus à l'article D. 1151-1 sont affichées par l'exploitant, de manière à être lisibles pour la clientèle. » (D. 1151-3)",
        "**Un avertissement**, affiché de façon visible dès la mise en service de l'appareil : risques liés à l'exposition aux rayonnements, contre-indications et recommandation de solliciter l'avis de son médecin, recommandations d'utilisation et obligation d'une protection oculaire, invitation à déclarer tout événement indésirable. (D. 1151-5)",
      ],
    },

    { type: "h2", text: "RGPD : une fiche qui contient des données de santé" },
    {
      type: "p",
      text: "Le RGPD définit les données concernant la santé comme « les données à caractère personnel relatives à la santé physique ou mentale d'une personne physique, y compris la prestation de services de soins de santé, qui révèlent des informations sur l'état de santé de cette personne » (article 4, 15). Une grossesse, un traitement, une affection de la peau : les réponses au questionnaire de contre-indications en font partie. La CNIL précise qu'une donnée peut aussi devenir une donnée de santé par croisement avec d'autres informations.",
    },
    {
      type: "p",
      text: "Leur traitement est interdit par principe (article 9, 1). Pour un institut, l'exception la plus adaptée est le **consentement explicite** de la cliente : « La personne concernée a donné son consentement explicite au traitement de ces données à caractère personnel pour une ou plusieurs finalités spécifiques » (article 9, 2, a). L'exception liée aux soins de santé (article 9, 2, h) vise les professionnels de santé ; elle ne paraît pas transposable à une esthéticienne. Faites valider ce choix par votre conseil.",
    },
    { type: "h3", text: "En pratique" },
    {
      type: "ul",
      items: [
        "**Une signature distincte** pour le traitement des données de santé, séparée de celle de la fiche d'information et de tout accord marketing.",
        "**Une mention d'information** : finalité (vérifier les contre-indications et assurer la traçabilité imposée par le code de la santé publique), destinataires, durée de conservation, droits de la cliente et contact.",
        "**La minimisation** : seulement les questions utiles à la sécurité du soin. Pas de rubrique « antécédents médicaux » ouverte si votre notice ne l'exige pas.",
        "**Le registre des traitements** : la dispense prévue pour les structures de moins de 250 salariés ne s'applique pas lorsque le traitement porte sur des données de santé (article 30, 5).",
        "**Pas de réutilisation commerciale** : les réponses de santé servent à la sécurité du soin, pas à cibler vos messages.",
      ],
    },
    { type: "h3", text: "Conservation et sécurité" },
    {
      type: "p",
      text: "Le code de la santé publique fixe deux durées : trois ans pour le double de la fiche d'information (D. 1151-4) et, pour le laser, trois ans après la dernière séance pour le document de suivi (D. 1151-6, II). Pour le reste, la CNIL rappelle que « Les données personnelles ne peuvent pas être conservées indéfiniment ». Fixez une date de suppression ou d'archivage, et respectez-la.",
    },
    {
      type: "ul",
      items: [
        "Fiches papier : meuble fermé à clé, hors de la vue des clientes.",
        "Logiciel en ligne : accès par identifiant personnel, et contrat de sous-traitance conforme à l'article 28 du RGPD avec l'éditeur.",
        "Pas de photo de fiche envoyée par une messagerie personnelle.",
      ],
    },
    {
      type: "p",
      text: "Le guide de la sécurité des données personnelles publié par la CNIL (édition 2024) détaille ces mesures (article 32 du RGPD).",
    },

    { type: "h2", text: "Cinq erreurs à éviter" },
    {
      type: "ol",
      items: [
        "Un modèle téléchargé qui promet une « épilation définitive » : il contredit le 2° de D. 1151-4, qui impose de décrire l'effet réellement attendu.",
        "Une fiche signée après la première séance, alors que le texte exige sa remise « au plus tard avant le premier acte ».",
        "Un questionnaire générique qui ne reprend pas les contre-indications de la notice de votre appareil.",
        "La mention de formation du 4° reproduite alors qu'une praticienne n'a pas encore son attestation.",
        "Des données de santé conservées sans limite, ou réutilisées pour la prospection.",
      ],
    },
    {
      type: "callout",
      title: "Avertissement",
      text: "Cet article est informatif et ne remplace pas un conseil juridique. Le modèle proposé est indicatif : adaptez-le à la notice de votre appareil, avec votre assureur ou votre conseil. Les textes cités sont ceux en vigueur au 8 octobre 2026 et sont susceptibles d'évoluer.",
    },
    {
      type: "cta",
      title: "Une fiche en règle rassure. Encore faut-il des clientes à qui la remettre.",
      text: "Sorena accompagne les instituts et centres laser non médicaux : publicité locale ciblée sur les 18 ans et plus, demandes qualifiées, rendez-vous confirmés. Voir notre approche pour les [centres laser](/centre-laser).",
    },
  ],
  faq: [
    {
      q: "Existe-t-il un modèle officiel de fiche client pour l'épilation laser ?",
      a: "Non. Le code de la santé publique fixe le contenu minimal de la fiche d'information (huit mentions, article D. 1151-4) et les vérifications à tracer (article D. 1151-6), mais aucun formulaire officiel. Chaque centre construit le sien à partir de la notice de son appareil.",
    },
    {
      q: "Combien de temps conserver la fiche client d'épilation laser ?",
      a: "Trois ans pour le double daté et signé de la fiche d'information (D. 1151-4). Pour le laser, le document de suivi des vérifications est tenu à la disposition des agents de contrôle pendant trois ans après la dernière séance (D. 1151-6, II).",
    },
    {
      q: "Faut-il un modèle de consentement pour l'épilation laser ?",
      a: "Le décret n'impose pas de formulaire de consentement : il impose une fiche d'information, que la cliente date et signe avant le premier acte pour décider en connaissance de cause. C'est cette signature que l'on appelle souvent « consentement ». Si la fiche recueille aussi des données de santé, le RGPD exige en plus un consentement explicite à ce traitement, à recueillir séparément.",
    },
    {
      q: "Les contre-indications notées sur la fiche sont-elles des données de santé ?",
      a: "Le plus souvent, oui : une grossesse, un traitement ou une affection de la peau révèlent l'état de santé de la cliente. Leur traitement suppose une exception de l'article 9 du RGPD ; pour un institut, il s'agit en pratique du consentement explicite.",
    },
    {
      q: "Faut-il refaire signer la fiche à chaque séance ?",
      a: "Non, le décret exige sa remise avant le premier acte. En revanche, la praticienne vérifie à chaque séance l'absence de contre-indication. Une ligne où la cliente confirme que ses réponses n'ont pas changé facilite cette vérification.",
    },
  ],
  sources: [
    {
      label: "Décret n° 2024-470 du 24 mai 2024 relatif aux actes d'épilation à la lumière pulsée intense et au laser à visée non thérapeutique (Légifrance)",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049592616",
    },
    {
      label: "Code de la santé publique, articles D. 1151-1 à D. 1151-11 (Légifrance)",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072665/LEGISCTA000029837115/",
    },
    {
      label: "Règlement (UE) 2016/679 (RGPD), articles 4, 9, 30 et 32 (EUR-Lex)",
      url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32016R0679",
    },
    {
      label: "CNIL, Qu'est-ce qu'une donnée de santé ?",
      url: "https://www.cnil.fr/fr/quest-ce-ce-quune-donnee-de-sante",
    },
    {
      label: "CNIL, Les durées de conservation des données",
      url: "https://www.cnil.fr/fr/les-durees-de-conservation-des-donnees",
    },
    {
      label: "CNIL, Guide de la sécurité des données personnelles, édition 2024",
      url: "https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles-nouvelle-edition-2024",
    },
    {
      label: "Portail de signalement des événements sanitaires indésirables",
      url: "https://signalement.social-sante.gouv.fr/",
    },
  ],
  related: ["/ressources/decret-epilation-laser", "/centre-laser", "/institut-de-beaute"],
};
