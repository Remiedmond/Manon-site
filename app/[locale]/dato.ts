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
      imageSrc: '/photomanon.png',
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
      imageSrc: '/photomanon.png',
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
    imageSrc: '/photomanon.png',
    imageAlt: 'photo Maître Manon FONTAINE en robe d\'avocate',
  };
};
