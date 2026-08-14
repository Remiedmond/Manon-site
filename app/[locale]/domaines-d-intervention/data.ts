export interface PracticeArea {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  iconSrc: string;
  prestationsproposees: string;
  services: string[];
  monapproche: string;
  approach: string;
  layout: 'image-left' | 'image-right';
}

export const getPracticeAreasData = (locale: string = 'fr'): PracticeArea[] => {
  if (locale === 'en') {
    return [
      {
        id: 'civil-law',
        title: 'Family & Civil Law',
        subtitle: 'Compassionate and respectful support during sensitive moments in your family life.',
        imageSrc: '/cabinet.png',
        imageAlt: 'Attorney Fontaine - Family & Civil Law Specialist',
        iconSrc: '/cursors/balance.svg',
        layout: 'image-left',
        prestationsproposees: 'Offered Services',
        services: [
          'Divorce (mutual consent, litigated)',
          'Separation of unmarried couples',
          'Child custody and visitation rights',
          'Alimony & Spousal support',
          'Compensatory allowance',
          'Family mediation',
          'Adoption and filiation',
          'Domestic violence and protective orders',
        ],
        monapproche: 'My approach',
        approach:
          'In these often painful situations, I provide rigorous legal support while listening attentively to your emotions and priorities. My goal is to achieve balanced solutions that safeguard the interests of all parties, especially children.',
      },
      {
        id: 'labor-law',
        title: 'Labor & Employment Law',
        subtitle: 'Defense and advisory services for employees and employers in their professional relationships.',
        imageSrc: '/cabinet3.png',
        imageAlt: 'Attorney Fontaine - Employment Law Specialist',
        iconSrc: '/cursors/robe.svg',
        layout: 'image-right',
        prestationsproposees: 'Offered Services',
        services: [
          'Dismissal (economic, personal, misconduct)',
          'Mutual termination agreements',
          'Resignation and constructive dismissal',
          'Moral harassment and discrimination',
          'Labor court disputes (Prud’hommes)',
          'Employment contract negotiation',
          'Work accidents and occupational illness',
          'Labor law advice for corporate clients',
        ],
        monapproche: 'My approach',
        approach:
          'Whether you are an employee or an employer, I help enforce your rights and secure your practices. My guidance aims at finding negotiated settlements wherever possible, while firmly defending your interests in court when required.',
      },
      {
        id: 'real-estate-law',
        title: 'Real Estate Law',
        subtitle: 'Securing your real estate projects and resolving property disputes.',
        imageSrc: '/cabinet.png',
        imageAlt: 'Attorney Fontaine - Real Estate Law Specialist',
        iconSrc: '/bouclier.svg',
        layout: 'image-left',
        prestationsproposees: 'Offered Services',
        services: [
          'Residential and commercial leases',
          'Rental disputes and unpaid rent',
          'Eviction proceedings',
          'Latent defects and construction defects',
          'Co-ownership and neighborhood disputes',
          'Sales agreements and real estate transactions',
          'Property rights and easements',
        ],
        monapproche: 'My approach',
        approach:
          'Every property project or dispute demands detailed analysis to protect your assets. I advise and represent you to secure transactions and resolve disputes efficiently.',
      },
    ];
  }

  if (locale === 'it') {
    return [
      {
        id: 'diritto-civile',
        title: 'Diritto Civile e di Famiglia',
        subtitle: 'Un supporto umano e rispettoso nei momenti delicati della vostra vita familiare.',
        imageSrc: '/cabinet.png',
        imageAlt: 'Avvocato Fontaine - Diritto Civile',
        iconSrc: '/cursors/balance.svg',
        layout: 'image-left',
        prestationsproposees: 'Prestazioni proposte',
        services: [
          'Divorzio (consensuale, giudiziale)',
          'Separazione di coppie non coniugate',
          'Affidamento dei figli e diritto di visita',
          'Assegno di mantenimento',
          'Mediazione familiare',
          'Adozione e filiazione',
          'Violenza domestica e ordini di protezione',
        ],
        monapproche: 'Il mio approccio',
        approach:
          'In queste situazioni spesso dolorose, offro un supporto legale rigoroso rimanendo all\'ascolto delle vostre priorità.',
      },
      {
        id: 'diritto-del-lavoro',
        title: 'Diritto del Lavoro',
        subtitle: 'Difesa e consulenza per dipendenti e datori di lavoro nei loro rapporti professionali.',
        imageSrc: '/cabinet3.png',
        imageAlt: 'Avvocato Fontaine - Diritto del Lavoro',
        iconSrc: '/cursors/robe.svg',
        layout: 'image-right',
        prestationsproposees: 'Prestazioni proposte',
        services: [
          'Licenziamento (economico, personale, per giusta causa)',
          'Risoluzione consensuale',
          'Dimissioni per giusta causa',
          'Molestie morali e discriminazioni',
          'Contenzioso del lavoro',
          'Negoziazione di contratti di lavoro',
        ],
        monapproche: 'Il mio approccio',
        approach:
          'Che siate dipendenti o datori di lavoro, vi aiuto a far valere i vostri diritti.',
      },
      {
        id: 'diritto-immobiliare',
        title: 'Diritto Immobiliare',
        subtitle: 'Messa in sicurezza dei vostri progetti immobiliari e risoluzione delle controversie.',
        imageSrc: '/cabinet.png',
        imageAlt: 'Avvocato Fontaine - Diritto Immobiliare',
        iconSrc: '/bouclier.svg',
        layout: 'image-left',
        prestationsproposees: 'Prestazioni proposte',
        services: [
          'Locazioni abitative e commerciali',
          'Controversie locative e canoni non pagati',
          'Procedure di sfratto',
          'Vizi occulti e difetti di costruzione',
          'Condominio e controversie tra vicini',
        ],
        monapproche: 'Il mio approccio',
        approach:
          'Ogni progetto o controversia immobiliare richiede un\'analisi dettagliata per proteggere il vostro patrimonio.',
      },
    ];
  }

  // Langue par défaut : Français
  return [
    {
      id: 'droit-civil',
      title: 'Droit Civil',
      subtitle: 'Un accompagnement humain et respectueux dans les moments délicats de votre vie familiale.',
      imageSrc: '/cabinet.png',
      imageAlt: 'Maître Fontaine - Avocat en Droit Civil et de la Famille',
      iconSrc: '/cursors/balance.svg',
      layout: 'image-left',
      prestationsproposees: 'Prestations proposées',
      services: [
        'Divorce (consentement mutuel, contentieux)',
        'Séparation de couples non mariés',
        'Garde d’enfants et droit de visite',
        'Pension alimentaire',
        'Prestation compensatoire',
        'Médiation familiale',
        'Adoption et filiation',
        'Violences conjugales et ordonnances de protection',
      ],
      monapproche:'Mon approche',
      approach:
        'Dans ces situations souvent douloureuses, j’apporte un soutien juridique rigoureux tout en restant à l’écoute de vos émotions et de vos priorités. Mon objectif est de trouver des solutions équilibrées qui préservent l’intérêt de tous, en particulier celui des enfants.',
    },
    {
      id: 'droit-du-travail',
      title: 'Droit du travail',
      subtitle: 'Défense et conseil pour salariés et employeurs dans leurs relations professionnelles.',
      imageSrc: '/cabinet3.png',
      imageAlt: 'Maître Fontaine - Avocat en Droit du Travail',
      iconSrc: '/cursors/robe.svg',
      layout: 'image-right',
      prestationsproposees: 'Prestations proposées',
      services: [
        'Licenciement (économique, personnel, faute)',
        'Rupture conventionnelle',
        'Démission et prise d’acte',
        'Harcèlement moral et discrimination',
        'Contentieux prud’homal',
        'Négociation de contrats de travail',
        'Accident du travail et maladie professionnelle',
        'Conseil en droit social pour les entreprises',
      ],
      monapproche:'Mon approche',
      approach:
        'Que vous soyez salarié ou employeur, je vous aide à faire valoir vos droits ou à sécuriser vos pratiques. Mon accompagnement vise à trouver des solutions négociées lorsque c’est possible, et défendre vos intérêts avec fermeté devant les juridictions si nécessaire.',
    },
    {
      id: 'droit-immobilier',
      title: 'Droit immobilier',
      subtitle: 'Sécurisation de vos projets immobiliers et résolution de vos litiges.',
      imageSrc: '/cabinet.png',
      imageAlt: 'Maître Fontaine - Avocat en Droit Immobilier',
      iconSrc: '/bouclier.svg',
      layout: 'image-left',
      prestationsproposees: 'Prestations proposées',
      services: [
        'Baux d’habitation et baux commerciaux',
        'Litiges locatifs et loyers impayés',
        'Procédure d’expulsion',
        'Vices cachés et désordres de construction',
        'Copropriété et conflits de voisinage',
        'Compromis et ventes immobilières',
        'Droit de la propriété et servitudes',
      ],
      monapproche:'Mon approche',
      approach:
        'Chaque projet ou litige immobilier nécessite une analyse minutieuse pour protéger votre patrimoine. Je vous conseille et vous représente afin de sécuriser vos transactions et de résoudre vos litiges dans les meilleurs délais.',
    },
  ];
};
