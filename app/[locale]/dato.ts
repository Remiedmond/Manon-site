export interface PresentationData {
  title: string;
  paragraphs: string[];
  buttonText: string;
  buttonHref: string;
  imageSrc: string;
  imageAlt: string;
}

export const getPresentationData = (locale: string = 'fr'): PresentationData => {
  if (locale === 'en') {
    return {
      title: 'A client-centered approach',
      paragraphs: [
        'Established in Arras since 2025, I practice law with the conviction that every client deserves dedicated attention and tailored legal counsel.',
        'My practice is built on three core pillars: availability, clarity, and precision. I am committed to explaining every step of your case in accessible language while vigorously defending your interests.',
        'Whether you are an individual or a business professional, I apply my expertise to resolve your legal matters within a framework of trust and mutual respect.',
      ],
      buttonText: 'Learn more about my background',
      buttonHref: '/cabinet',
      imageSrc: '/photomanon.jpg',
      imageAlt: 'Photo of Attorney Manon Fontaine in court dress',
    };
  }

  if (locale === 'it') {
    return {
      title: 'Un approccio incentrato sulle vostre esigenze',
      paragraphs: [
        'Stabilità ad Arras dal 2025, esercito la professione forense con la convinzione che ogni assistito meriti un ascolto attento e una consulenza su misura.',
        'Il mio metodo si fonda su tre pilastri: disponibilità, chiarezza e rigore. Mi impegno a spiegarvi ogni fase della pratica con un linguaggio trasparente, difendendo i vostri interessi con determinazione.',
        'Che siate privati o aziende, metto la mia esperienza al servizio della risoluzione delle vostre questioni giuridiche, in un clima di fiducia e rispetto reciproco.',
      ],
      buttonText: 'Scopri di più sul mio percorso',
      buttonHref: '/cabinet',
      imageSrc: '/photomanon.jpg',
      imageAlt: 'Foto dell\'Avvocato Manon Fontaine con la toga',
    };
  }

  // Version Française par défaut
  return {
    title: 'Une approche centrée sur vos besoins',
    paragraphs: [
      "Installée à Arras depuis 2025, j'exerce mon métier d'avocate avec la conviction que chaque client mérite une écoute attentive et un conseil personnalisé.",
      "Mon approche repose sur trois piliers : la disponibilité, la clarté et la rigueur. Je m'engage à vous expliquer chaque étape de votre dossier dans un langage accessible, tout en défendant vos intérêts avec détermination.",
      "Que vous soyez un particulier ou un professionnel, je mets mon expertise au service de la résolution de vos problématiques juridiques, dans un climat de confiance et de respect mutuel.",
    ],
    buttonText: 'En savoir plus sur mon parcours',
    buttonHref: '/cabinet',
    imageSrc: '/photomanon.jpg',
    imageAlt: 'photo Maître Manon FONTAINE en robe d\'avocate',
  };
};



export interface EngagementItem {
  title: string;
  icon: string;
  description: string;
}

export interface EngagementsSectionData {
  title: string;
  subtitle: string;
  bgImageSrc: string;
  items: EngagementItem[];
}

export const getEngagementsData = (locale: string = 'fr'): EngagementsSectionData => {
  if (locale === 'en') {
    return {
      title: 'My Commitments',
      subtitle: 'Core values guiding my everyday professional practice',
      bgImageSrc: '/fond.jpg',
      items: [
        {
          title: 'Active Listening',
          icon: '/ecoute.svg',
          description:
            'Every situation is unique. I take the time to thoroughly understand your context in order to provide the most tailored legal response.',
        },
        {
          title: 'Clarity',
          icon: '/clarte.svg',
          description:
            'The law must be accessible. I am committed to explaining your legal options and procedural steps clearly and transparently.',
        },
        {
          title: 'Confidentiality',
          icon: '/confidentialite.svg',
          description:
            'Your data and disclosures are strictly protected by legal professional privilege. You can share your situation in complete confidence.',
        },
        {
          title: 'Responsiveness',
          icon: '/reactivite.svg',
          description:
            'Your time is valuable. I ensure prompt responses to inquiries and strictly adhere to agreed-upon deadlines.',
        },
      ],
    };
  }

  if (locale === 'it') {
    return {
      title: 'I Miei Impegni',
      subtitle: 'I valori fondamentali al centro della mia pratica professionale',
      bgImageSrc: '/fond.jpg',
      items: [
        {
          title: 'Ascolto',
          icon: '/ecoute.svg',
          description:
            'Ogni situazione è unica. Mi prendo il tempo di comprendere a fondo il vostro contesto per offrirvi una risposta su misura.',
        },
        {
          title: 'Chiarezza',
          icon: '/clarte.svg',
          description:
            'Il diritto deve essere accessibile. Mi impegno a spiegarvi con chiarezza le opzioni disponibili e i passi procedurali da compiere.',
        },
        {
          title: 'Riservatezza',
          icon: '/confidentialite.svg',
          description:
            'Le vostre informazioni sono rigorosamente coperte dal segreto professionale. Potete affidarvi a me in totale sicurezza.',
        },
        {
          title: 'Reattività',
          icon: '/reactivite.svg',
          description:
            'Il vostro tempo è prezioso. Mi impegno a rispondere tempestivamente e a rispettare scrupolosamente le scadenze stabilite.',
        },
      ],
    };
  }

  // Version Française par défaut
  return {
    title: 'Mes engagements',
    subtitle: 'Des valeurs au cœur de ma pratique professionnelle',
    bgImageSrc: '/fond.jpg',
    items: [
      {
        title: 'Écoute',
        icon: '/ecoute.svg',
        description:
          'Chaque situation est unique. Je prends le temps de comprendre votre contexte pour vous apporter une réponse adaptée.',
      },
      {
        title: 'Clarté',
        icon: '/clarte.svg',
        description:
          "Le droit doit être accessible. Je m'engage à vous expliquer clairement vos options et les démarches à suivre.",
      },
      {
        title: 'Confidentialité',
        icon: '/confidentialite.svg',
        description:
          'Vos informations sont protégées par le secret professionnel. Vous pouvez vous confier en toute sécurité.',
      },
      {
        title: 'Réactivité',
        icon: '/reactivite.svg',
        description:
          "Votre temps est précieux. Je m'engage à vous répondre rapidement et à respecter les délais fixés.",
      },
    ],
  };
};

export interface HomePracticeAreaCard {
  icon: string;
  alt: string;
  title: string;
  lines: string[];
}

export interface HomePracticeAreasData {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
  cards: HomePracticeAreaCard[];
}

export const getHomePracticeAreasData = (locale: string = 'fr'): HomePracticeAreasData => {
  if (locale === 'en') {
    return {
      title: 'Practice Areas',
      subtitle: 'Comprehensive legal support for individuals and corporate clients',
      buttonText: 'View all practice areas',
      buttonHref: '/domaines-d-intervention',
      cards: [
        {
          icon: '/coeur.svg',
          alt: 'Family law icon',
          title: 'Family & Civil Law',
          lines: [
            'Divorce, child custody, alimony, and family mediation.',
            'Compassionate and dedicated guidance through delicate moments.',
          ],
        },
        {
          icon: '/personnage.svg',
          alt: 'Employment law icon',
          title: 'Labor & Employment Law',
          lines: [
            'Dismissal, mutual termination, harassment, and labor disputes.',
            'Protecting and asserting your rights as an employee or employer.',
          ],
        },
        {
          icon: '/bouclier.svg',
          alt: 'Real estate law icon',
          title: 'Real Estate Law',
          lines: [
            'Property transactions, commercial leases, and co-ownership matters.',
            'Securing your assets and resolving property disputes efficiently.',
          ],
        },
      ],
    };
  }

  if (locale === 'it') {
    return {
      title: 'Aree di Attività',
      subtitle: 'Un\'assistenza legale completa per privati e professionisti',
      buttonText: 'Tutte le aree di intervento',
      buttonHref: '/domaines-d-intervention',
      cards: [
        {
          icon: '/coeur.svg',
          alt: 'Icona diritto di famiglia',
          title: 'Diritto di Famiglia',
          lines: [
            'Divorzio, affidamento dei figli, mantenimento e mediazione familiare.',
            'Un sostegno umano e attento nei momenti più delicati.',
          ],
        },
        {
          icon: '/personnage.svg',
          alt: 'Icona diritto del lavoro',
          title: 'Diritto del Lavoro',
          lines: [
            'Licenziamenti, risoluzioni consensuali, mobbing e contenziosi del lavoro.',
            'Difesa dei vostri diritti sia come dipendente che come datore di lavoro.',
          ],
        },
        {
          icon: '/bouclier.svg',
          alt: 'Icona diritto immobiliare',
          title: 'Diritto Immobiliare',
          lines: [
            'Compravendite, locazioni commerciali e controversie condominiali.',
            'Messa in sicurezza delle transazioni e risoluzione delle dispute.',
          ],
        },
      ],
    };
  }

  // Version Française par défaut
  return {
    title: "Domaines d'intervention",
    subtitle: 'Un accompagnement complet pour particuliers et professionnels',
    buttonText: 'Voir tous les domaines',
    buttonHref: '/domaines-d-intervention',
    cards: [
      {
        icon: '/coeur.svg',
        alt: 'SVG Droit de la Famille',
        title: 'Droit de la famille',
        lines: [
          "Divorce, garde d'enfants, pension alimentaire et médiation familiale.",
          'Un accompagnement humain dans des moments difficiles.',
        ],
      },
      {
        icon: '/personnage.svg',
        alt: 'SVG Droit du travail',
        title: 'Droit du travail',
        lines: [
          "Licenciement, rupture conventionnelle, harcèlement et contentieux prud'homal.",
          'Défense de vos droits en tant que salarié ou employeur.',
        ],
      },
      {
        icon: '/bouclier.svg',
        alt: 'SVG pour droit immobilier',
        title: 'Droit immobilier',
        lines: [
          'Vente, achat, baux commerciaux et copropriété.',
          'Sécurisez vos transactions et résolvez vos litiges immobiliers.',
        ],
      },
    ],
  };
};

export interface HomeHeroData {
  title: string;
  description: string;
  contactBtnText: string;
  contactBtnHref: string;
  cabinetBtnText: string;
  cabinetBtnHref: string;
  bgImageSrc: string;
  bgImageAlt: string;
}

export const getHomeHeroData = (locale: string = 'fr'): HomeHeroData => {
  if (locale === 'en') {
    return {
      title: 'Tailored Legal Counsel in Arras',
      description:
        'Attorney Manon Fontaine advises and defends you with clarity, confidentiality, and prompt responsiveness throughout the Arras region and beyond.',
      contactBtnText: 'Get in touch',
      contactBtnHref: '/contact',
      cabinetBtnText: 'The Firm',
      cabinetBtnHref: '/cabinet',
      bgImageSrc: '/cabinetfond.png',
      bgImageAlt: 'Law office of Attorney Manon Fontaine',
    };
  }

  if (locale === 'it') {
    return {
      title: 'Assistenza Legale su Misura ad Arras',
      description:
        'L\'Avvocato Manon Fontaine vi consiglia e vi difende con chiarezza, riservatezza e tempestività nel cuore del territorio di Arras.',
      contactBtnText: 'Contattami',
      contactBtnHref: '/contact',
      cabinetBtnText: 'Lo Studio',
      cabinetBtnHref: '/cabinet',
      bgImageSrc: '/cabinetfond.png',
      bgImageAlt: 'Studio legale dell\'Avvocato Manon Fontaine',
    };
  }

  // Version Française par défaut
  return {
    title: 'Un accompagnement juridique sur mesure à Arras',
    description:
      'Maître Manon Fontaine vous conseille et vous défend avec clarté, confidentialité et réactivité au cœur du tissu local arrageois.',
    contactBtnText: 'Prendre contact',
    contactBtnHref: '/contact',
    cabinetBtnText: 'Le Cabinet',
    cabinetBtnHref: '/cabinet',
    bgImageSrc: '/cabinetfond.png',
    bgImageAlt: 'Cabinet d\'avocat Maître Fontaine',
  };
};