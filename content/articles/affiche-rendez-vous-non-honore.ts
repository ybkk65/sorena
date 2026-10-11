import type { Article } from "../types";

const LEGIFRANCE = "https://www.legifrance.gouv.fr/codes/article_lc";

const URL = {
  l214_1: `${LEGIFRANCE}/LEGIARTI000032226990`,
  r212_1: `${LEGIFRANCE}/LEGIARTI000032807196`,
  r212_2: `${LEGIFRANCE}/LEGIARTI000032807198`,
  l121_11: `${LEGIFRANCE}/LEGIARTI000036923526`,
  l221_18: `${LEGIFRANCE}/LEGIARTI000032226842`,
  servicePublic: "https://www.service-public.gouv.fr/particuliers/vosdroits/F31187",
  cnilMessages: "https://www.cnil.fr/fr/communication-electronique-quelles-regles",
  cnilProspection:
    "https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-electronique-sms-mms-et-automate-dappel",
  cnom53:
    "https://www.conseil-national.medecin.fr/code-deontologie/devoirs-patients-art-32-55/article-53-honoraires",
} as const;

export const afficheRendezVousNonHonore: Article = {
  slug: "affiche-rendez-vous-non-honore",
  category: "Agenda & rendez-vous",
  title: "Affiche rendez-vous non honoré en institut : 7 modèles prêts à copier",
  metaTitle: "Affiche rendez-vous non honoré institut : modèles",
  metaDescription:
    "Affiche en cabine, charte d'annulation, SMS de rappel, message après un lapin, e-mail d'absences répétées : 7 modèles pour institut, élégants et conformes.",
  excerpt:
    "Sept modèles prêts à copier pour prévenir et gérer les rendez-vous non honorés en institut : affiche, charte d'annulation, SMS de rappel, messages et e-mail, au ton élégant et conformes au droit.",
  publishedAt: "2026-10-08",
  readingMinutes: 8,
  intro: [
    "Une bonne affiche de rendez-vous non honoré en institut tient en quelques lignes : elle annonce la règle avant la réservation, la présente comme un engagement mutuel et ne menace personne. Mais elle ne crée aucune obligation à elle seule. Pour avoir une valeur, elle doit reprendre une politique d'annulation **réciproque, proportionnée et acceptée avant le paiement**.",
    "Vous trouverez ci-dessous sept modèles prêts à copier : l'affiche d'accueil ou de cabine, la charte d'annulation, le SMS de confirmation, le SMS de rappel, le message après un lapin, l'e-mail en cas d'absences répétées et le message à envoyer quand c'est vous qui annulez. Ils s'adressent aux instituts et centres esthétiques non médicaux. Pour le cadre juridique complet, lisez notre guide [acompte en institut de beauté : ce que dit la loi](/ressources/acompte-rendez-vous-institut).",
  ],
  body: [
    { type: "h2", text: "Les quatre règles d'une affiche de rendez-vous non honoré conforme" },
    {
      type: "p",
      text: "Avant de copier un modèle, vérifiez que votre politique d'annulation respecte ces quatre règles. Elles découlent du Code de la consommation, qui encadre les clauses entre un professionnel et ses clientes.",
    },
    {
      type: "ol",
      items: [
        "**Annoncer avant, pas après.** Une condition dont la cliente n'a pas eu connaissance avant de s'engager ne lui est pas opposable ([article R212-1, 1°](" +
          URL.r212_1 +
          ")). L'affiche rappelle la règle ; ce sont la page de réservation et la confirmation qui la font accepter.",
        "**Rester réciproque.** Si vous conservez une somme quand la cliente annule tard, prévoyez une contrepartie équivalente quand c'est vous qui annulez, ou le double s'il s'agit d'arrhes ([article R212-2, 2°](" +
          URL.r212_2 +
          ")).",
        "**Rester mesurée.** Une indemnité « d'un montant manifestement disproportionné » est présumée abusive (R212-2, 3°). On parle d'arrhes déduites du soin, pas d'amende.",
        "**Ne jamais menacer ni exposer.** Pas de « tout lapin sera facturé » sans somme convenue, pas de majuscules rouges, et jamais le nom d'une cliente sur une affiche ou un réseau social.",
      ],
    },
    {
      type: "p",
      text: "Ces modèles ne conviennent pas à un cabinet médical : un médecin ne peut réclamer d'honoraires qu'à l'occasion d'actes réellement effectués ([article R.4127-53 du Code de la santé publique](" +
        URL.cnom53 +
        ")), et ne peut donc pas facturer un rendez-vous non honoré.",
    },

    { type: "h2", text: "Quel modèle utiliser, où et quand" },
    {
      type: "table",
      caption: "Les sept modèles et leur usage",
      head: ["Modèle", "Où", "Quand", "Point de vigilance"],
      rows: [
        ["1. Affiche", "Accueil, cabine, vitrine", "En permanence", "Elle rappelle la politique, elle ne la remplace pas"],
        ["2. Charte d'annulation", "Près des prix, page de réservation, CGV", "Avant tout paiement", "Réciprocité et montant mesuré"],
        ["3. SMS de confirmation", "SMS ou e-mail", "Juste après la réservation", "Reprend la règle acceptée"],
        ["4. SMS de rappel", "SMS", "Avant la fin du délai d'annulation gratuite", "Aucune promotion dans le message"],
        ["5. Message après un lapin", "SMS ou e-mail", "Le jour même ou le lendemain", "Courtois, sans facture improvisée"],
        ["6. E-mail d'absences répétées", "E-mail ou courrier", "Après la deuxième ou la troisième absence", "Une condition pour l'avenir, pas une sanction"],
        ["7. Annulation par l'institut", "SMS, puis e-mail", "Dès que possible", "La réciprocité s'applique aussi à vous"],
      ],
    },

    { type: "h2", text: "Modèle 1 : l'affiche d'accueil ou de cabine" },
    {
      type: "p",
      text: "À placer à l'accueil, près de la caisse ou dans un joli cadre en cabine. Le ton recherché : une invitation à prévenir, pas un avertissement.",
    },
    {
      type: "quote",
      text: "Chaque rendez-vous est un moment que nous préparons pour vous : une cabine, une praticienne et un soin réservés à votre nom. En cas d'empêchement, prévenez-nous au moins [48] heures à l'avance : nous pourrons offrir ce créneau à une autre cliente et vous en proposer un nouveau. Nos conditions d'annulation sont disponibles à l'accueil et sur notre page de réservation. Merci de votre attention. [Nom de l'institut]",
      cite: "Modèle 1 · Affiche d'accueil ou de cabine",
    },
    {
      type: "p",
      text: "Pour un miroir, une carte de rendez-vous ou le bas d'un menu de soins, une version courte suffit :",
    },
    {
      type: "quote",
      text: "Un empêchement ? Prévenez-nous [48] heures avant : votre créneau fera le bonheur d'une autre cliente.",
      cite: "Modèle 1 · Variante courte",
    },

    { type: "h2", text: "Modèle 2 : la charte d'annulation de l'institut" },
    {
      type: "p",
      text: "C'est le texte de référence. Placez-le près de votre affichage des prix, sur la page de réservation en ligne et dans vos conditions générales. Adaptez les passages entre crochets, mais ne retirez pas la clause de réciprocité : c'est elle qui rend l'ensemble équilibré.",
    },
    {
      type: "callout",
      title: "Modèle 2 · Charte d'annulation",
      text: "**Arrhes.** Votre rendez-vous est confirmé par le versement d'arrhes de [montant] €, déduites du prix de votre soin. **Annulation ou report gratuit** jusqu'à [48] heures avant le rendez-vous : les arrhes vous sont intégralement remboursées, ou reportées sur un nouveau créneau si vous le préférez. **Annulation à moins de [48] heures, ou absence sans prévenir** : les arrhes restent acquises à l'institut. **Si nous annulons votre rendez-vous**, nous vous restituons le double des arrhes, conformément à l'article L214-1 du Code de la consommation. **Imprévu grave** : prévenez-nous dès que possible, nous étudierons votre situation avec bienveillance. **Réservation en ligne** : les conditions du droit de rétractation figurent dans nos conditions générales de vente.",
    },
    {
      type: "p",
      text: "Le délai de [48] heures n'est qu'un exemple : retenez celui qui vous laisse réellement le temps de proposer le créneau à une autre cliente. Si vous préférez un acompte aux arrhes, changez le mot et faites relire la clause, car ses conséquences ne sont pas les mêmes ([Service-Public.fr](" +
        URL.servicePublic +
        ")). Faites aussi préciser par votre conseil la règle applicable si vous devez fermer pour une raison indépendante de votre volonté.",
    },

    { type: "h2", text: "Modèles 3 et 4 : le SMS de confirmation et le SMS de rappel" },
    {
      type: "p",
      text: "Un rappel lié à un rendez-vous que la cliente a elle-même pris n'est pas de la prospection : la [CNIL](" +
        URL.cnilMessages +
        ") range ce type de message parmi les communications transactionnelles, nécessaires au service demandé, qui ne reposent généralement pas sur le consentement ; la cliente doit simplement en être informée. Un SMS commercial adressé à une particulière exige en revanche son [consentement préalable](" +
        URL.cnilProspection +
        "), et un rappel qui glisse une promotion risque d'être requalifié en prospection. Gardez donc ces messages strictement pratiques.",
    },
    {
      type: "quote",
      text: "Bonjour [prénom], votre rendez-vous [soin] chez [nom de l'institut] est confirmé le [date] à [heure]. Arrhes reçues : [montant] €, déduites de votre soin. Report ou annulation gratuits jusqu'au [date limite] : [lien]. À très bientôt !",
      cite: "Modèle 3 · SMS de confirmation, juste après la réservation",
    },
    {
      type: "quote",
      text: "Bonjour [prénom], nous vous attendons le [date] à [heure] pour votre [soin]. Un empêchement ? Vous pouvez encore déplacer votre rendez-vous gratuitement jusqu'au [date limite] : [lien]. Belle journée, [prénom de la praticienne].",
      cite: "Modèle 4 · SMS de rappel, avant la fin du délai d'annulation gratuite",
    },
    {
      type: "p",
      text: "Le bon moment pour le rappel n'est pas la veille par habitude : c'est **avant la fin du délai d'annulation gratuite**. Si ce délai est de 48 heures, envoyez le rappel trois jours avant. La cliente peut encore libérer le créneau sans frais, et vous pouvez encore le proposer à une autre.",
    },
    {
      type: "cta",
      title: "Des rappels et des arrhes qui tournent sans vous",
      text: "Nous mettons en place les rappels, les relances et l'acompte ou les arrhes à la réservation, avec une politique d'annulation claire, au sein d'un protocole d'acquisition complet. Une seule maison accompagnée par zone de 10 km. Le diagnostic de 30 minutes est offert.",
    },

    { type: "h2", text: "Modèle 5 : le message après un rendez-vous non honoré" },
    {
      type: "p",
      text: "À envoyer le jour même ou le lendemain, sans reproche. Le but est de garder la cliente, pas de gagner une dispute. Deux cas, selon que des arrhes avaient été versées ou non.",
    },
    {
      type: "quote",
      text: "Bonjour [prénom], nous vous attendions aujourd'hui à [heure] pour votre [soin] et espérons que tout va bien. Comme prévu dans nos conditions d'annulation, les arrhes de [montant] € restent acquises à l'institut. Ce sera un plaisir de vous retrouver : voici nos prochains créneaux disponibles [lien]. Belle journée, [nom de l'institut].",
      cite: "Modèle 5 · Message après un lapin, arrhes versées",
    },
    {
      type: "quote",
      text: "Bonjour [prénom], nous vous attendions aujourd'hui à [heure] et espérons que tout va bien. Un imprévu arrive à tout le monde. Pour vos prochaines réservations, sachez que nous confirmons désormais nos rendez-vous par des arrhes de [montant] €, déduites du soin. Au plaisir de vous accueillir bientôt, [nom de l'institut].",
      cite: "Modèle 5 · Variante, aucune somme versée",
    },
    {
      type: "p",
      text: "Sans somme convenue à la réservation, n'envoyez pas de facture : une condition que la cliente ignorait au moment de réserver ne lui est pas opposable (R212-1, 1°). Le message sert à préparer la prochaine fois, pas à régler la précédente.",
    },

    { type: "h2", text: "Modèle 6 : l'e-mail en cas d'absences répétées" },
    {
      type: "p",
      text: "Après deux ou trois absences, un message plus posé s'impose. Ce modèle de lettre pour rendez-vous non honoré s'envoie par mail ou par courrier. Refuser purement et simplement de reprendre rendez-vous n'est pas anodin : le refus de prestation à un consommateur est interdit sauf motif légitime, apprécié au cas par cas ([article L121-11 du Code de la consommation](" +
        URL.l121_11 +
        ")). Proposez plutôt une condition claire pour l'avenir.",
    },
    {
      type: "callout",
      title: "Modèle 6 · E-mail en cas d'absences répétées",
      text: "**Objet : vos prochains rendez-vous chez [nom de l'institut].** Bonjour [prénom], vos deux derniers rendez-vous n'ont pas pu avoir lieu, sans message de votre part. Nous savons que les agendas réservent parfois des surprises, et nous tenons à continuer à vous accueillir. Chaque créneau réservé est cependant un temps de cabine que nous ne pouvons plus proposer à une autre cliente. Pour vos prochaines réservations, nous vous proposerons donc de confirmer votre rendez-vous par des arrhes de [montant] €, déduites de votre soin et remboursables selon nos conditions d'annulation : [lien]. Il vous suffira de nous prévenir [48] heures à l'avance en cas d'empêchement. Avec toute notre attention, [prénom], [nom de l'institut].",
    },

    { type: "h2", text: "Modèle 7 : le message quand c'est l'institut qui annule" },
    {
      type: "p",
      text: "La réciprocité n'est pas qu'une clause : c'est ce qui rend votre politique crédible. Si vous devez annuler, appliquez-vous la règle que vous demandez à vos clientes. Avec des arrhes, la loi prévoit leur restitution au double lorsque le professionnel renonce ([article L214-1 du Code de la consommation](" +
        URL.l214_1 +
        ")).",
    },
    {
      type: "quote",
      text: "Bonjour [prénom], nous devons malheureusement annuler votre rendez-vous du [date] à [heure], [raison en quelques mots]. Comme le prévoient nos conditions, nous vous restituons le double de vos arrhes, soit [montant] €, sous [délai]. Si vous le souhaitez, nous vous réservons en priorité l'un de ces créneaux : [lien]. Avec toutes nos excuses, [prénom], [nom de l'institut].",
      cite: "Modèle 7 · Quand c'est l'institut qui annule",
    },

    { type: "h2", text: "Les formulations à éviter, et quoi écrire à la place" },
    {
      type: "table",
      caption: "Message rendez-vous non honoré : à éviter, à préférer",
      head: ["À éviter", "À préférer", "Pourquoi"],
      rows: [
        [
          "« Tout rendez-vous non honoré sera facturé »",
          "« Les arrhes versées à la réservation restent acquises en cas d'absence »",
          "Seule une condition connue avant la réservation engage la cliente (R212-1)",
        ],
        [
          "« Acompte non remboursable »",
          "« Arrhes déduites du soin, remboursées en cas d'annulation plus de [48] heures avant »",
          "Clarté et réciprocité (R212-2)",
        ],
        [
          "« Pénalité de 100 % du prix »",
          "« Arrhes de [montant] € »",
          "Une somme mesurée se défend mieux (R212-2, 3°)",
        ],
        [
          "Une liste de clientes absentes",
          "Aucune mention nominative, nulle part",
          "Discrétion et respect de vos clientes",
        ],
        [
          "« Dernier avertissement ! »",
          "« Pour vos prochaines réservations, nous vous proposerons… »",
          "Une condition pour l'avenir, pas une sanction",
        ],
      ],
    },
    {
      type: "p",
      text: "Ces modèles demandent surtout de la régularité : confirmer chaque réservation, envoyer chaque rappel au bon moment, écrire à chaque absente. Chez Sorena, ces messages, les arrhes et une politique d'annulation claire font partie d'un même protocole d'acquisition. Pour tout déléguer, découvrez notre [solution clé en main contre les rendez-vous non honorés](/rendez-vous-non-honores) : elle réduit les absences, dans votre ton et dans le respect de ces règles.",
    },
    {
      type: "callout",
      title: "Avertissement",
      text: "Cet article est informatif et ne remplace pas un conseil juridique. Les textes cités ont été vérifiés le 8 octobre 2026 ; avant d'afficher votre charte ou de modifier vos CGV, faites-les relire par un avocat ou un juriste en droit de la consommation.",
    },
  ],
  faq: [
    {
      q: "Quelle phrase mettre sur une affiche de rendez-vous non honoré ?",
      a: "Une phrase qui invite à prévenir plutôt qu'elle ne menace, par exemple : « Un empêchement ? Prévenez-nous 48 heures avant : votre créneau fera le bonheur d'une autre cliente. » Ajoutez que vos conditions d'annulation sont disponibles à l'accueil et sur votre page de réservation.",
    },
    {
      q: "Peut-on écrire « tout rendez-vous non honoré sera facturé » ?",
      a: "C'est déconseillé. Une affiche ne crée pas d'obligation à elle seule : la cliente doit avoir connu vos conditions avant de réserver (article R212-1 du Code de la consommation). Annoncez plutôt ce qui a été convenu, par exemple des arrhes qui restent acquises en cas d'absence.",
    },
    {
      q: "Quel message envoyer à une cliente qui n'est pas venue ?",
      a: "Un message bref et bienveillant, le jour même ou le lendemain : vous espérez que tout va bien, vous rappelez ce que prévoient vos conditions si des arrhes ont été versées, et vous proposez de nouveaux créneaux. Évitez toute facture que la cliente n'avait pas acceptée.",
    },
    {
      q: "Faut-il le consentement de la cliente pour lui envoyer un SMS de rappel ?",
      a: "En règle générale, non, si le message se limite au rendez-vous qu'elle a pris : la CNIL le classe parmi les communications transactionnelles, qui ne reposent généralement pas sur le consentement. Informez simplement la cliente de ces envois. Un SMS commercial exige en revanche un consentement préalable : ne mélangez donc pas rappel et promotion.",
    },
    {
      q: "Peut-on refuser une cliente qui ne vient jamais à ses rendez-vous ?",
      a: "Le refus de prestation est interdit sauf motif légitime, apprécié au cas par cas (article L121-11 du Code de la consommation). Plutôt qu'un refus, proposez-lui de confirmer ses prochains rendez-vous par des arrhes, selon des conditions écrites et communiquées à l'avance. En cas de doute, demandez conseil.",
    },
  ],
  sources: [
    { label: "Code de la consommation, article R212-1 (Légifrance)", url: URL.r212_1 },
    { label: "Code de la consommation, article R212-2 (Légifrance)", url: URL.r212_2 },
    { label: "Code de la consommation, article L214-1 (Légifrance)", url: URL.l214_1 },
    {
      label: "Service-Public.fr, « Acompte, avance, arrhes et avoir : quelles différences ? »",
      url: URL.servicePublic,
    },
    { label: "Code de la consommation, article L121-11 (Légifrance)", url: URL.l121_11 },
    { label: "Code de la consommation, article L221-18 (Légifrance)", url: URL.l221_18 },
    {
      label: "CNIL, « Communications par voie électronique aux prospects et clients : quelles règles respecter ? »",
      url: URL.cnilMessages,
    },
    {
      label: "CNIL, « La prospection commerciale par courrier électronique, SMS-MMS et automate d'appel »",
      url: URL.cnilProspection,
    },
    { label: "Ordre des médecins, article 53 du code de déontologie (R.4127-53 CSP)", url: URL.cnom53 },
  ],
  related: [
    "/rendez-vous-non-honores",
    "/ressources/acompte-rendez-vous-institut",
    "/institut-de-beaute",
    "/ia-prise-de-rendez-vous",
  ],
};
