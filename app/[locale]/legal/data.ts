export interface LegalSection {
  title: string;
  content: string;
  list?: string[];
}

export interface LegalDocument {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export const getMentionsLegalesData = (locale: string = 'fr'): LegalDocument => {
  if (locale === 'en') {
    return {
      title: 'Legal Notice',
      lastUpdated: 'Last updated: August 13, 2026',
      sections: [
        {
          title: '1. Site Publisher',
          content: 'The website www.manonfontaine-avocat.fr is published by Attorney Manon FONTAINE, registered with the Arras Bar Association.',
          list: [
            'Law office address: [Your Address, Arras, France]',
            'Phone: +33 3 XX XX XX XX',
            'Email: contact@manonfontaine-avocat.fr',
            'SIRET Number: [Your SIRET Number]',
          ],
        },
        {
          title: '2. Web Hosting',
          content: 'The website is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, United States.',
        },
        {
          title: '3. Professional Rules and Ethics',
          content: 'The legal profession is governed by the ethical rules established by the National Bar Council (CNB) and the Arras Bar Association. In case of dispute, you may contact the national consumer ombudsman for the legal profession.',
        },
        {
          title: '4. Intellectual Property',
          content: 'All content on this website (structure, design, texts, logo, images) is the exclusive property of Attorney Manon FONTAINE and is protected by intellectual property laws.',
        },
      ],
    };
  }

  if (locale === 'it') {
    return {
      title: 'Avviso Legale',
        lastUpdated: 'Ultimo aggiornamento: 13 agosto 2026',
        sections: [
            {
                title: '1. Editore del sito',
                content: 'Il sito www.manonfontaine-avocat.fr è pubblicato dall\'avvocato Manon FONTAINE, iscritta all\'Ordine degli Avvocati di Arras.',
                list: [
                    'Indirizzo dello studio legale: [Il tuo indirizzo, Arras, Francia]',
                    'Telefono: +33 3 XX XX XX XX',
                    'Email: contact@manonfontaine-avocat.fr',
                    'Numero SIRET: [Il tuo Numero SIRET]',
                ],
            },
            {
                title: '2. Hosting Web',
                content: 'Il sito è ospitato dalla società Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, Stati Uniti.',
            },
            {
                title: '3. Deontologia e Regole Professionali',
                content: 'La professione di avvocato è regolata dalle regole deontologiche stabilite dal Consiglio Nazionale dei Barrai (CNB) e dal Barreau di Arras. In caso di contenzioso, è possibile rivolgersi al Mediatore nazionale della consumazione della professione di avvocato.',
            },
            {
                title: '4. Proprietà Intellettuale',
                content: 'L\'insieme degli elementi presenti su questo sito (struttura, design, testi, logo, immagini) è la proprietà esclusiva di Maître Manon FONTAINE e è protetto dalle leggi sulla proprietà intellettuale.',
            },
        ],
    };
  }

  // Version Française par défaut
  return {
    title: 'Mentions Légales',
    lastUpdated: 'Dernière mise à jour : 13 août 2026',
    sections: [
      {
        title: '1. Éditeur du site',
        content: 'Le site www.manonfontaine-avocat.fr est édité par Maître Manon FONTAINE, Avocate inscrite au Barreau d\'Arras.',
        list: [
          'Adresse du cabinet : [Votre Adresse, Arras]',
          'Téléphone : 03 XX XX XX XX',
          'Email : contact@manonfontaine-avocat.fr',
          'Numéro SIRET : [Votre Numéro SIRET]',
        ],
      },
      {
        title: '2. Hébergement',
        content: 'Le site est hébergé par la société Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.',
      },
      {
        title: '3. Déontologie et Règles Professionnelles',
        content: 'La profession d\'avocat est régie par les règles déontologiques arrêtées par le Conseil National des Barreaux (CNB) et le Barreau d\'Arras. En cas de litige, vous pouvez saisir le Médiateur national de la consommation de la profession d\'avocat.',
      },
      {
        title: '4. Propriété Intellectuelle',
        content: 'L\'ensemble des éléments figurant sur ce site (structure, design, textes, logo, images) est la propriété exclusive de Maître Manon FONTAINE et est protégé par le droit d\'auteur.',
      },
    ],
  };
};

export const getPrivacyPolicyData = (locale: string = 'fr'): LegalDocument => {
  if (locale === 'en') {
    return {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: August 13, 2026',
      sections: [
        {
          title: '1. Data Collection',
          content: 'Attorney Manon FONTAINE is committed to ensuring that the collection and processing of your personal data comply with the General Data Protection Regulation (GDPR) and applicable data protection privacy law.',
        },
        {
          title: '2. Purpose of Processing',
          content: 'Personal data collected via the contact form (first name, last name, email, phone number) are strictly used to process your consultation request and manage client relationships.',
        },
        {
          title: '3. Your Rights',
          content: 'In accordance with GDPR regulations, you have the right to access, rectify, delete, or limit the processing of your personal data. You can exercise these rights at any time by contacting us by email.',
        },
      ],
    };
  }
    if (locale === 'it') {
    return {
      title: 'Informativa sulla Privacy',
      lastUpdated: 'Ultimo aggiornamento: 13 agosto 2026',
        sections: [
            {
                title: '1. Raccolta dei dati',
                content: 'L\'avvocato Manon FONTAINE si impegna a garantire che la raccolta e il trattamento dei tuoi dati personali siano conformi al Regolamento Generale sulla Protezione dei Dati (GDPR) e alla legge sulla protezione dei dati personali.',
            },
            {
                title: '2. Finalità del trattamento',
                content: 'I dati personali raccolti tramite il modulo di contatto (nome, cognome, email, numero di telefono) sono utilizzati esclusivamente per elaborare la tua richiesta di consulenza e gestire le relazioni con i clienti.',
            },
            {
                title: '3. I tuoi diritti',
                content: 'In conformità con le normative GDPR, hai il diritto di accedere, rettificare, cancellare o limitare il trattamento dei tuoi dati personali. Puoi esercitare questi diritti in qualsiasi momento contattandoci via email.',
            },
        ],
    };
  }

  // Version Française par défaut
  return {
    title: 'Politique de Confidentialité',
    lastUpdated: 'Dernière mise à jour : 13 août 2026',
    sections: [
      {
        title: '1. Collecte des données',
        content: 'Maître Manon FONTAINE s\'engage à ce que la collecte et le traitement de vos données soient conformes au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.',
      },
      {
        title: '2. Finalité du traitement',
        content: 'Les données personnelles collectées via le formulaire de contact (nom, prénom, email, téléphone) servent exclusivement à traiter votre demande de prise de rendez-vous ou d\'information juridique.',
      },
      {
        title: '3. Vos droits',
        content: 'Conformément à la réglementation RGPD, vous disposez d\'un droit d\'accès, de rectification, de suppression et d\'opposition concernant vos données personnelles en contactant le cabinet par email.',
      },
    ],
  };
};