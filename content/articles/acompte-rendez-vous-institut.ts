import type { Article } from "../types";

const LEGIFRANCE = "https://www.legifrance.gouv.fr/codes/article_lc";

const URL = {
  l214_1: `${LEGIFRANCE}/LEGIARTI000032226990`,
  civil1590: `${LEGIFRANCE}/LEGIARTI000006441327`,
  r212_1: `${LEGIFRANCE}/LEGIARTI000032807196`,
  r212_2: `${LEGIFRANCE}/LEGIARTI000032807198`,
  civil1231_1: `${LEGIFRANCE}/LEGIARTI000032010123`,
  civil1231_5: `${LEGIFRANCE}/LEGIARTI000032010131`,
  cmfL133_6: `${LEGIFRANCE}/LEGIARTI000035430447`,
  l221_1: `${LEGIFRANCE}/LEGIARTI000032226886`,
  l221_18: `${LEGIFRANCE}/LEGIARTI000032226842`,
  l221_20: `${LEGIFRANCE}/LEGIARTI000044563199`,
  l221_25: `${LEGIFRANCE}/LEGIARTI000044563179`,
  l221_28: `${LEGIFRANCE}/LEGIARTI000044563170`,
  servicePublic: "https://www.service-public.gouv.fr/particuliers/vosdroits/F31187",
  inc: "https://www.inc-conso.fr/content/arrhes-acompte-et-avoir",
  cjueSlewo: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:62017CJ0681",
  cjueEventim: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:62021CJ0096",
  cnilCarte: "https://www.cnil.fr/fr/le-paiement-distance-par-carte-bancaire",
  cnilMessages: "https://www.cnil.fr/fr/communication-electronique-quelles-regles",
  cnom53:
    "https://www.conseil-national.medecin.fr/code-deontologie/devoirs-patients-art-32-55/article-53-honoraires",
  planityPaiement:
    "https://support.planity.com/hc/fr/articles/28251675841298-Comment-activer-et-g%C3%A9rer-le-pr%C3%A9paiement-des-r%C3%A9servations-en-ligne",
  cnaib:
    "https://www.professionbienetre.fr/esthetique/le-no-show-peserait-jusqua-10-du-chiffre-daffaires-selon-la-cnaib/",
} as const;

export const acompteRendezVousInstitut: Article = {
  slug: "acompte-rendez-vous-institut",
  category: "Agenda & rendez-vous",
  title: "Acompte en institut de beauté : ce que dit la loi, et comment l'appliquer",
  metaTitle: "Acompte institut de beauté : ce que dit la loi",
  metaDescription:
    "Arrhes ou acompte, rendez-vous non honoré, empreinte bancaire, rétractation en ligne : ce qu'un institut de beauté peut demander, textes officiels à l'appui.",
  excerpt:
    "Arrhes ou acompte, politique d'annulation, empreinte bancaire, droit de rétractation des réservations en ligne : le cadre légal expliqué aux gérantes d'institut, textes à l'appui.",
  publishedAt: "2026-10-08",
  readingMinutes: 10,
  intro: [
    "Oui, un institut de beauté peut demander une somme à la réservation : aucun texte ne l'interdit aux instituts et centres esthétiques non médicaux. Mais si vous ne précisez rien, la loi tranche à votre place : sauf stipulation contraire, les sommes versées d'avance par une cliente sont des **arrhes** (article L214-1 du Code de la consommation). La cliente qui annule les perd ; l'institut qui annule les restitue au double.",
    "Pour qu'un acompte protège vraiment votre agenda, trois conditions comptent davantage que son montant : **nommer la somme** (arrhes ou acompte), écrire une politique d'annulation **réciproque et proportionnée**, et la faire accepter **avant le paiement**. Ce guide reprend chaque règle avec ses textes officiels : facturer un rendez-vous non honoré, empreinte bancaire, droit de rétractation des réservations en ligne, et ce que font réellement des outils comme Planity.",
  ],
  body: [
    { type: "h2", text: "Est-ce légal de demander un acompte en institut de beauté ?" },
    {
      type: "p",
      text: "Oui. Le Code de la consommation ne fixe ni interdiction ni plafond pour une somme versée à la réservation d'un soin esthétique. Il encadre en revanche trois choses : la **nature** de la somme, l'**équilibre** de vos conditions d'annulation et l'**information** de la cliente avant qu'elle ne s'engage. C'est là que se trouvent les vrais risques, bien plus que dans le principe même de l'acompte.",
    },
    {
      type: "p",
      text: "L'enjeu n'a rien d'anecdotique. Interrogée par [Profession Bien-Être](" +
        URL.cnaib +
        ") en août 2023, la vice-présidente de la CNAIB (Confédération nationale des instituts de beauté et spas) estimait que les rendez-vous non honorés peuvent peser « facilement jusqu'à 10 % » sur le chiffre d'affaires d'une journée ou d'une semaine. C'est une estimation de terrain, pas une étude statistique, mais elle dit bien ce que coûte une cabine vide.",
    },
    {
      type: "callout",
      title: "Instituts et centres non médicaux uniquement",
      text: "Cet article s'adresse aux instituts et centres esthétiques non médicaux. Un médecin ne peut réclamer d'honoraires « qu'à l'occasion d'actes réellement effectués » ([article R.4127-53 du Code de la santé publique](" +
        URL.cnom53 +
        ")) : il ne peut donc pas facturer un rendez-vous non honoré, et les règles qui suivent ne le concernent pas.",
    },

    { type: "h2", text: "Arrhes ou acompte : la différence pour un institut" },
    {
      type: "p",
      text: "Les deux mots désignent une somme versée d'avance, mais ils n'engagent pas de la même façon. L'[article L214-1 du Code de la consommation](" +
        URL.l214_1 +
        ") pose la règle par défaut : « sauf stipulation contraire », les sommes versées d'avance entre un professionnel et un consommateur sont des arrhes, au sens de l'[article 1590 du Code civil](" +
        URL.civil1590 +
        "). Chacun peut alors se dédire : la cliente en perdant les arrhes, le professionnel en les restituant au double.",
    },
    {
      type: "p",
      text: "L'acompte, lui, doit être prévu expressément. C'est un premier paiement sur le prix, qui engage fermement les deux parties : en principe, ni la cliente ni l'institut ne peuvent se dédire sans risquer de devoir indemniser l'autre, comme le rappellent [Service-Public.fr](" +
        URL.servicePublic +
        ") et l'[Institut national de la consommation](" +
        URL.inc +
        ").",
    },
    {
      type: "table",
      caption: "Arrhes ou acompte en institut : ce qui se passe en cas d'annulation",
      head: ["", "Arrhes", "Acompte"],
      rows: [
        [
          "Définition",
          "Somme versée d'avance qui laisse à chaque partie la faculté de se dédire",
          "Premier paiement sur le prix, qui engage fermement les deux parties",
        ],
        [
          "Quand s'applique-t-il ?",
          "Par défaut, dès que rien n'est précisé (L214-1)",
          "Seulement s'il est expressément prévu, sans ambiguïté",
        ],
        [
          "Si la cliente annule",
          "Elle perd les arrhes, et rien de plus",
          "Elle reste en principe tenue ; vos conditions d'annulation fixent ce que vous conservez",
        ],
        [
          "Si l'institut annule",
          "Il restitue le double des arrhes",
          "Il rembourse l'acompte et peut devoir des dommages et intérêts",
        ],
        [
          "Ce qu'il faut écrire",
          "« Arrhes de [montant] €, déduites du prix du soin »",
          "« Acompte de [montant] €, à valoir sur le prix du soin », avec les conditions d'annulation",
        ],
      ],
    },
    {
      type: "p",
      text: "Pour un institut, les arrhes sont souvent le choix le plus lisible : la règle est équilibrée par la loi elle-même et facile à expliquer à une cliente. L'acompte convient mieux aux engagements plus lourds, comme une cure de plusieurs séances, à condition de rédiger avec soin ce qui se passe en cas d'annulation. Dans tous les cas, **nommez la somme** : une « avance » ou un « dépôt » sans autre précision sera traité comme des arrhes.",
    },

    { type: "h2", text: "Politique d'annulation : les trois règles qui la rendent légale" },
    {
      type: "p",
      text: "Une politique d'annulation est une clause de contrat. Le Code de la consommation dresse deux listes de clauses abusives : une liste « noire » de clauses interdites ([article R212-1](" +
        URL.r212_1 +
        ")) et une liste « grise » de clauses présumées abusives, sauf preuve contraire du professionnel ([article R212-2](" +
        URL.r212_2 +
        ")). Trois d'entre elles touchent directement l'acompte en institut.",
    },
    { type: "h3", text: "1. Elle doit être réciproque" },
    {
      type: "p",
      text: "Est présumée abusive la clause qui permet au professionnel de conserver les sommes versées quand le consommateur renonce, « sans prévoir réciproquement » pour lui une indemnité d'un montant équivalent, « ou égale au double en cas de versement d'arrhes », quand c'est le professionnel qui renonce (R212-2, 2°). Concrètement : si vous gardez la somme quand la cliente annule tard, écrivez ce que vous lui devez si c'est vous qui annulez tard.",
    },
    { type: "h3", text: "2. Elle doit être proportionnée" },
    {
      type: "p",
      text: "Est également présumée abusive une indemnité « d'un montant manifestement disproportionné » (R212-2, 3°). Aucun texte ne fixe de pourcentage maximal. Une fraction du prix, cohérente avec la perte réelle d'un créneau, se défend bien mieux qu'un prépaiement intégral conservé en toutes circonstances.",
    },
    { type: "h3", text: "3. Elle doit être connue avant le paiement" },
    {
      type: "p",
      text: "Est interdite, sans discussion possible, la clause qui engage le consommateur sur des conditions dont il « n'a pas eu connaissance avant » la conclusion du contrat (R212-1, 1°). Une affiche découverte après la réservation ne suffit donc pas : pour une réservation en ligne, vos conditions doivent apparaître avant la validation du paiement, puis dans la confirmation.",
    },
    {
      type: "p",
      text: "Pour des textes prêts à l'emploi qui respectent ces trois règles, voyez nos [modèles d'affiche et de messages pour les rendez-vous non honorés](/ressources/affiche-rendez-vous-non-honore).",
    },
    {
      type: "cta",
      title: "Et si l'acompte était déjà en place dans votre agenda ?",
      text: "Nous installons les rappels, les relances et l'acompte ou les arrhes à la réservation, avec une politique d'annulation claire, au sein d'un système d'acquisition complet. Une seule maison accompagnée par zone de 10 km. Le diagnostic est offert.",
    },

    { type: "h2", text: "Rendez-vous non honoré : facture et indemnité, que pouvez-vous réclamer ?" },
    {
      type: "p",
      text: "C'est la question que se posent toutes les gérantes après un lapin. La réponse dépend entièrement de ce qui a été convenu avant le rendez-vous.",
    },
    { type: "h3", text: "Si une somme a été versée et vos conditions acceptées" },
    {
      type: "p",
      text: "Vous conservez ce que prévoient vos conditions : les arrhes, ou la part d'acompte que votre politique d'annulation vous attribue en cas d'absence. Si cette somme prend la forme d'une pénalité, le juge peut la réduire, même d'office, lorsqu'elle est « manifestement excessive » ([article 1231-5 du Code civil](" +
        URL.civil1231_5 +
        ")). Une raison de plus pour rester mesurée.",
    },
    { type: "h3", text: "Si rien n'a été versé ni convenu" },
    {
      type: "p",
      text: "Envoyer après coup une facture pour un rendez-vous non honoré est très fragile : une condition que la cliente ne connaissait pas au moment de réserver ne lui est pas opposable (R212-1, 1°). Reste le droit commun : une absence est une inexécution du contrat, qui peut ouvrir droit à des dommages et intérêts ([article 1231-1 du Code civil](" +
        URL.civil1231_1 +
        ")). Encore faut-il prouver le préjudice et, le plus souvent, le faire reconnaître par un juge, pour un montant rarement à la hauteur de la démarche.",
    },
    {
      type: "p",
      text: "En pratique, la seule indemnité de rendez-vous non honoré vraiment efficace est celle qui a été annoncée, acceptée et réglée à la réservation. Pour une cliente qui n'a rien versé, le bon réflexe est un message courtois qui rappelle vos conditions pour la prochaine fois, plutôt qu'une facture.",
    },

    { type: "h2", text: "Empreinte bancaire en institut : le principe et ses limites" },
    {
      type: "p",
      text: "L'empreinte bancaire est une alternative à l'acompte : la cliente ne paie rien à la réservation, mais elle enregistre sa carte, et l'institut peut la débiter en cas d'absence ou d'annulation tardive. Selon les outils, il s'agit d'un simple enregistrement de la carte ou d'une pré-autorisation qui bloque temporairement un montant sans le débiter. Le mécanisme rassure davantage une nouvelle cliente, mais il demande la même rigueur qu'un acompte, et quelques précautions de plus :",
    },
    {
      type: "ul",
      items: [
        "**Informer avant la saisie de la carte** : le montant maximal qui pourra être débité, les cas de débit (absence, annulation tardive) et le délai d'annulation gratuite. Une condition découverte après coup n'engage pas la cliente (R212-1, 1°).",
        "**Obtenir un consentement clair au débit** : une opération de paiement n'est autorisée que si le payeur y a consenti, faute de quoi elle est réputée non autorisée ([article L133-6 du Code monétaire et financier](" +
          URL.cmfL133_6 +
          ")).",
        "**Appliquer la même réciprocité et la même mesure** qu'avec un acompte : le montant débité doit correspondre à ce qui avait été annoncé et rester proportionné (R212-2).",
        "**Ne jamais conserver vous-même les numéros de carte** : passez par la solution de paiement de votre logiciel. La [CNIL](" +
          URL.cnilCarte +
          ") rappelle que la conservation du cryptogramme est interdite après la première transaction, et que garder les données de carte au-delà d'une transaction suppose, en principe, le consentement de la cliente.",
      ],
    },
    {
      type: "p",
      text: "Arrhes ou empreinte ? Les arrhes protègent mieux l'institut, puisque la somme est déjà encaissée ; l'empreinte est plus douce pour une première prise de contact. Rien n'empêche de combiner les deux : arrhes pour les soins longs et les premières visites, empreinte pour les prestations courtes de vos fidèles.",
    },

    { type: "h2", text: "Réservation en ligne : le droit de rétractation, un point à faire valider" },
    {
      type: "p",
      text: "C'est le sujet le plus souvent oublié. Une réservation conclue en ligne, sur votre site ou via une plateforme, est en principe un contrat conclu à distance ([article L221-1](" +
        URL.l221_1 +
        ")). La cliente dispose alors de **14 jours** pour se rétracter sans motif, à compter de la conclusion du contrat pour une prestation de services ([article L221-18](" +
        URL.l221_18 +
        ")), et la somme versée doit lui être remboursée, qu'il s'agisse d'arrhes ou d'un acompte. Une réservation prise en personne, à l'accueil de l'institut, n'est pas concernée.",
    },
    {
      type: "p",
      text: "Existe-t-il une exception pour les soins esthétiques ? L'[article L221-28, 12°](" +
        URL.l221_28 +
        "), écarte le droit de rétractation pour l'hébergement, le transport de biens, la location de voitures, la restauration et les « activités de loisirs » fournies à une date déterminée. **Les soins esthétiques n'y figurent pas expressément.** Certaines CGV d'instituts invoquent pourtant cette exception. Or les exceptions au droit de rétractation sont d'interprétation stricte ([CJUE, 27 mars 2019, Slewo, C-681/17](" +
        URL.cjueSlewo +
        ")), et la Cour de justice justifie celle des loisirs par le risque, pour l'organisateur, de ne pas pouvoir réattribuer une place réservée ([CJUE, 31 mars 2022, CTS Eventim, C-96/21](" +
        URL.cjueEventim +
        ")). Le raisonnement peut sembler transposable à un créneau de cabine, mais nous n'avons trouvé aucune décision qui l'applique à un soin esthétique.",
    },
    {
      type: "p",
      text: "Si l'exception ne s'applique pas, une cliente qui a réservé en ligne pourrait, pendant ce délai, annuler en exerçant son droit de rétractation et obtenir le remboursement de la somme versée, même tardivement. Les arrhes protégeraient alors surtout contre l'absence sans prévenir. En l'état, la position prudente est la suivante :",
    },
    {
      type: "ul",
      items: [
        "**Informez la cliente** de l'existence et des conditions du droit de rétractation avant la réservation. À défaut, le délai est prolongé de douze mois ([article L221-20](" +
          URL.l221_20 +
          ")).",
        "**Si le soin a lieu dans les 14 jours**, recueillez sa demande expresse de commencer avant la fin du délai, et faites-lui reconnaître qu'elle perdra son droit une fois le soin entièrement réalisé ([article L221-25](" +
          URL.l221_25 +
          ")).",
        "**Faites valider vos CGV** par un avocat ou un juriste en droit de la consommation avant d'écrire que vos soins réservés en ligne sont exclus du droit de rétractation.",
      ],
    },

    { type: "h2", text: "Acompte sur Planity et les logiciels de réservation : ce que l'outil fait, et ce qu'il ne fait pas" },
    {
      type: "p",
      text: "Plusieurs logiciels de réservation proposent un paiement à la réservation. Planity, par exemple, décrit dans [sa page d'aide](" +
        URL.planityPaiement +
        ") (mise à jour en septembre 2026) une **avance partielle** ou un **prépaiement total**, un délai à partir duquel l'annulation devient payante, des pénalités en cas d'annulation tardive ou de non-présentation, et une section « Politique d'annulation » affichée à la cliente. La fonction suppose d'activer la Caisse et de créer un compte Planity Stripe Connect.",
    },
    {
      type: "p",
      text: "L'outil règle la mécanique ; il ne règle pas la qualification juridique. Avant d'activer la fonction, trois vérifications s'imposent :",
    },
    {
      type: "ol",
      items: [
        "**Nommez la somme dans votre politique** : « arrhes » ou « acompte ». Le mot « avance » employé par un logiciel ne suffit pas à faire un acompte ; sans stipulation claire, ce sont des arrhes.",
        "**Prévoyez la réciprocité** : que devez-vous à la cliente si c'est vous qui annulez ? Avec des arrhes, la loi répond : le double. Un remboursement paramétré dans l'outil ne remplace pas cette clause.",
        "**Relisez le texte affiché à la cliente** : montant, délai, cas de remboursement et, pour les réservations en ligne, information sur la rétractation.",
      ],
    },
    {
      type: "p",
      text: "Ces fonctions évoluent souvent : vérifiez toujours la documentation à jour de votre propre logiciel.",
    },

    { type: "h2", text: "Mettre en place l'acompte sans froisser vos clientes" },
    {
      type: "p",
      text: "La règle la plus juste perd sa force si elle est mal présentée. Une cliente accepte d'autant mieux l'acompte qu'elle le comprend comme un engagement mutuel, et non comme une marque de méfiance.",
    },
    {
      type: "ol",
      items: [
        "**Choisissez** arrhes ou acompte, et un montant mesuré, déduit du prix du soin.",
        "**Écrivez** une politique courte : délai d'annulation gratuite, ce que vous conservez, ce que vous devez si vous annulez, possibilité de report.",
        "**Affichez-la partout où la cliente réserve** : page de réservation, message de confirmation, accueil.",
        "**Rappelez le rendez-vous** avant la fin du délai d'annulation gratuite. La [CNIL](" +
          URL.cnilMessages +
          ") distingue ces messages de service de la prospection, qui exige un consentement préalable des particuliers : n'y glissez donc aucune promotion.",
        "**Présentez la somme avec élégance** : « Pour vous réserver ce créneau, nous vous demandons des arrhes de [montant] €, déduites de votre soin » plutôt que « Acompte non remboursable ».",
      ],
    },
    {
      type: "p",
      text: "C'est précisément ce que nous mettons en place chez Sorena : l'acompte ou les arrhes, les rappels et les relances y forment un seul système d'acquisition, de la publicité jusqu'à la cabine. Si vous préférez déléguer l'ensemble, découvrez notre [solution clé en main contre les rendez-vous non honorés](/rendez-vous-non-honores) : elle réduit les absences, sans sortir du cadre décrit ici.",
    },
    {
      type: "callout",
      title: "Avertissement",
      text: "Cet article est informatif et ne remplace pas un conseil juridique. Les textes cités ont été vérifiés le 8 octobre 2026 ; avant de modifier vos CGV ou votre politique d'annulation, faites-les relire par un avocat ou un juriste en droit de la consommation.",
    },
  ],
  faq: [
    {
      q: "Un institut peut-il garder l'acompte si la cliente ne vient pas ?",
      a: "Oui, si vos conditions le prévoyaient et ont été acceptées avant le paiement. Avec des arrhes, la cliente qui renonce les perd (article L214-1 du Code de la consommation). Avec un acompte, c'est votre politique d'annulation qui fixe ce que vous conservez. Dans les deux cas, la règle doit être réciproque et le montant mesuré.",
    },
    {
      q: "L'acompte est-il remboursable si la cliente annule ?",
      a: "Cela dépend de vos conditions : une annulation dans le délai gratuit donne lieu à remboursement, une annulation tardive peut ne pas y donner droit. Pour une réservation en ligne, le droit de rétractation de 14 jours peut toutefois imposer le remboursement, car l'exception prévue pour les loisirs n'a pas été appliquée, à notre connaissance, aux soins esthétiques.",
    },
    {
      q: "Peut-on facturer un rendez-vous non honoré sans avoir demandé d'acompte ?",
      a: "C'est très fragile. Une condition que la cliente ne connaissait pas au moment de réserver ne lui est pas opposable (article R212-1 du Code de la consommation). Le droit commun permet de demander réparation d'un préjudice prouvé, mais rarement de façon rentable. Mieux vaut prévoir des arrhes pour les prochaines réservations.",
    },
    {
      q: "Quelle indemnité demander pour un rendez-vous non honoré en institut ?",
      a: "Aucun texte ne fixe de montant. L'indemnité doit avoir été annoncée avant la réservation, rester proportionnée au soin (article R212-2, 3°) et s'accompagner d'une contrepartie équivalente si c'est l'institut qui annule. Une pénalité manifestement excessive peut être réduite par le juge (article 1231-5 du Code civil).",
    },
    {
      q: "Comment mettre un acompte sur Planity ?",
      a: "Selon l'aide en ligne de Planity, la fonction suppose d'activer la Caisse et de créer un compte Planity Stripe Connect. Vous choisissez ensuite une avance partielle ou un prépaiement total, le délai d'annulation gratuite et les pénalités. Vérifiez enfin que le texte affiché nomme bien la somme (arrhes ou acompte) et prévoit la réciprocité.",
    },
    {
      q: "Un médecin peut-il demander un acompte contre les rendez-vous non honorés ?",
      a: "Non. Un médecin ne peut réclamer d'honoraires « qu'à l'occasion d'actes réellement effectués » (article R.4127-53 du Code de la santé publique), ce qui exclut de facturer un rendez-vous non honoré. Cet article concerne uniquement les instituts et centres esthétiques non médicaux.",
    },
  ],
  sources: [
    { label: "Code de la consommation, article L214-1 (Légifrance)", url: URL.l214_1 },
    { label: "Code civil, article 1590 (Légifrance)", url: URL.civil1590 },
    {
      label: "Service-Public.fr, « Acompte, avance, arrhes et avoir : quelles différences ? »",
      url: URL.servicePublic,
    },
    { label: "Institut national de la consommation, « Arrhes, acompte et avoir »", url: URL.inc },
    { label: "Code de la consommation, article R212-1 (Légifrance)", url: URL.r212_1 },
    { label: "Code de la consommation, article R212-2 (Légifrance)", url: URL.r212_2 },
    { label: "Code civil, article 1231-1 (Légifrance)", url: URL.civil1231_1 },
    { label: "Code civil, article 1231-5 (Légifrance)", url: URL.civil1231_5 },
    { label: "Code monétaire et financier, article L133-6 (Légifrance)", url: URL.cmfL133_6 },
    { label: "CNIL, « Le paiement à distance par carte bancaire »", url: URL.cnilCarte },
    { label: "Code de la consommation, article L221-1 (Légifrance)", url: URL.l221_1 },
    { label: "Code de la consommation, article L221-18 (Légifrance)", url: URL.l221_18 },
    { label: "Code de la consommation, article L221-20 (Légifrance)", url: URL.l221_20 },
    { label: "Code de la consommation, article L221-25 (Légifrance)", url: URL.l221_25 },
    { label: "Code de la consommation, article L221-28 (Légifrance)", url: URL.l221_28 },
    { label: "CJUE, 27 mars 2019, Slewo, C-681/17 (EUR-Lex)", url: URL.cjueSlewo },
    { label: "CJUE, 31 mars 2022, CTS Eventim, C-96/21 (EUR-Lex)", url: URL.cjueEventim },
    {
      label: "CNIL, « Communications par voie électronique aux prospects et clients : quelles règles respecter ? »",
      url: URL.cnilMessages,
    },
    { label: "Ordre des médecins, article 53 du code de déontologie (R.4127-53 CSP)", url: URL.cnom53 },
    {
      label: "Planity, « Comment activer et gérer le paiement des réservations en ligne ? » (aide en ligne)",
      url: URL.planityPaiement,
    },
    {
      label: "Profession Bien-Être, « Le no-show pèserait jusqu'à 10 % du chiffre d'affaires selon la CNAIB » (28 août 2023)",
      url: URL.cnaib,
    },
  ],
  related: [
    "/rendez-vous-non-honores",
    "/ressources/affiche-rendez-vous-non-honore",
    "/institut-de-beaute",
    "/ia-prise-de-rendez-vous",
  ],
};
