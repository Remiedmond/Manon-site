export interface PracticeArea {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  iconSrc: string;
  services: string[];
  approach: string;
  layout: 'image-left' | 'image-right';
}

export const PracticeAreasData: PracticeArea[] = [
  {
    id: 'droit-civil',
    title: 'Droit Civil',
    subtitle: 'Un accompagnement humain et respectueux dans les moments délicats de votre vie familiale.',
    imageSrc: '/cabinet.png', // Ajuste vers ton image
    imageAlt: 'Maître Fontaine - Avocat en Droit Civil et de la Famille',
    iconSrc: '/cursors/balance.svg',
    layout: 'image-left',
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
    approach:
      'Dans ces situations souvent douloureuses, j’apporte un soutien juridique rigoureux tout en restant à l’écoute de vos émotions et de vos priorités. Mon objectif est de trouver des solutions équilibrées qui préservent l’intérêt de tous, en particulier celui des enfants.',
  },
  {
    id: 'droit-du-travail',
    title: 'Droit du travail',
    subtitle: 'Défense et conseil pour salariés et employeurs dans leurs relations professionnelles.',
    imageSrc: '/cabinet3.png', // Ajuste vers ton image
    imageAlt: 'Maître Fontaine - Avocat en Droit du Travail',
    iconSrc: '/cursors/robe.svg',
    layout: 'image-right',
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
    approach:
      'Que vous soyez salarié ou employeur, je vous aide à faire valoir vos droits ou à sécuriser vos pratiques. Mon accompagnement vise à trouver des solutions négociées lorsque c’est possible, et défendre vos intérêts avec fermeté devant les juridictions si nécessaire.',
  },
  {
    id: 'droit-immobilier',
    title: 'Droit immobilier',
    subtitle: 'Sécurisation de vos projets immobiliers et résolution de vos litiges.',
    imageSrc: '/cabinet.png', // Ajuste vers ton image
    imageAlt: 'Maître Fontaine - Avocat en Droit Immobilier',
    iconSrc: '/bouclier.svg',
    layout: 'image-left',
    services: [
      'Baux d’habitation et baux commerciaux',
      'Litiges locatifs et loyers impayés',
      'Procédure d’expulsion',
      'Vices cachés et désordres de construction',
      'Copropriété et conflits de voisinage',
      'Compromis et ventes immobilières',
      'Droit de la propriété et servitudes',
    ],
    approach:
      'Chaque projet ou litige immobilier nécessite une analyse minutieuse pour protéger votre patrimoine. Je vous conseille et vous représente afin de sécuriser vos transactions et de résoudre vos litiges dans les meilleurs délais.',
  },
];