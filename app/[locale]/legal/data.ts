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

/* -------------------------------------------------------------------------- */
/*  Informations du cabinet — à modifier ici, une seule fois, pour les 3 langues */
/*  Tout ce qui est entre [crochets] est à compléter avant la mise en ligne.    */
/* -------------------------------------------------------------------------- */
const CABINET = {
  site: 'www.manon-fontaine-avocat.fr',
  name: 'Manon FONTAINE',
  address: '49 rue Frédéric de Georges, 62000 Arras',
  phoneFr: '[03 21 60 50 40](tel:+33321605040)',
  phoneIntl: '+33 3 21 60 50 40',
  email: '[contact@ton-domaine.fr](mailto:contact@ton-domaine.fr)',
  siren: '131 795 635',
  exerciseForm: '[forme d\'exercice à préciser : exercice individuel, collaboration, société...]',
  insurer: '[nom et adresse de l\'assureur RCP à compléter]',
  insurerCoverage: '[couverture géographique à compléter]',
  guaranteeFund: '[caisse de garantie / CARPA à compléter]',
  photographer: '[nom de la photographe à compléter]',
  developer: 'Rémi EDMOND',
  developerSite: '[https://remi-edmond.fr](https://remi-edmond.fr)',
  vercelAddress: 'Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, United States',
};

const MEDIATOR = {
  name: 'Sandra WEREY',
  address: '180 boulevard Haussmann, 75008 Paris',
  site: '[mediateur-consommation-avocat.fr](https://mediateur-consommation-avocat.fr)',
};

export const getMentionsLegalesData = (locale: string = 'fr'): LegalDocument => {
  if (locale === 'en') {
    return {
      title: 'Legal Notice',
      lastUpdated: 'Last updated: October 22, 2026',
      sections: [
        {
          title: '1. Site Publisher',
          content: `The website ${CABINET.site} is published by Attorney ${CABINET.name}, a lawyer registered with the Arras Bar Association (professional title of "avocat" obtained in France).`,
          list: [
            `Law office address: ${CABINET.address}`,
            `Phone: ${CABINET.phoneIntl}`,
            `Email: ${CABINET.email}`,
            `SIREN number: ${CABINET.siren}`,
            `Form of practice: ${CABINET.exerciseForm}`,
            `Publication director: Attorney ${CABINET.name}`,
          ],
        },
        {
          title: '2. Design and Development',
          content: `This website was designed and developed by ${CABINET.developer}.`,
        },
        {
          title: '3. Web Hosting',
          content: `The website is hosted by ${CABINET.vercelAddress}.`,
        },
        {
          title: '4. Professional Rules and Ethics',
          content:
            'The legal profession is governed by the ethical rules set out in the National Internal Regulations (RIN) of the French legal profession, established by the National Bar Council (CNB), which can be consulted on www.cnb.avocat.fr, and by the Arras Bar Association.',
          list: [
            'Bar of registration: Arras Bar Association',
            `Professional liability insurance: ${CABINET.insurer}`,
            `Geographical coverage: ${CABINET.insurerCoverage}`,
            `Guarantee fund: ${CABINET.guaranteeFund}`,
          ],
        },
        {
          title: '5. Consumer Mediation',
          content: `In accordance with Article L.616-1 of the French Consumer Code, if you are a consumer and a dispute arises with the law office, you may, free of charge, refer the matter to the consumer ombudsman for the legal profession, after first sending a written complaint to the law office: ${MEDIATOR.name}, Consumer Ombudsman of the Legal Profession, ${MEDIATOR.address}. Website: ${MEDIATOR.site}.`,
        },
        {
          title: '6. Fees',
          content:
            'The fees shown on this website are given for information only. Any engagement is subject to a fee agreement, signed beforehand with the client, which specifies the fees applicable to the case.',
        },
        {
          title: '7. Intellectual Property',
          content: `All content on this website (structure, design, texts, logo, images) is the exclusive property of Attorney ${CABINET.name}, unless otherwise stated, and is protected by intellectual property laws. Photographs are credited to ${CABINET.photographer}, who has authorised their use on this website. Any reproduction, representation or adaptation, in whole or in part, without prior authorisation is prohibited.`,
        },
        {
          title: '8. Responsibility for Content',
          content:
            'The information published on this website is general in nature and does not constitute legal advice. Visiting this website or contacting the law office does not by itself create a lawyer-client relationship. Please do not send confidential or sensitive information before an engagement has been agreed.',
        },
        {
          title: '9. Personal Data and Cookies',
          content:
            'The processing of personal data and the use of cookies on this website are described in our Privacy Policy.',
        },
      ],
    };
  }

  if (locale === 'it') {
    return {
      title: 'Avviso Legale',
      lastUpdated: 'Ultimo aggiornamento: 22 ottobre 2026',
      sections: [
        {
          title: '1. Editore del sito',
          content: `Il sito ${CABINET.site} è pubblicato dall'avvocato ${CABINET.name}, iscritta all'Ordine degli Avvocati di Arras (titolo professionale di "avocat" conseguito in Francia).`,
          list: [
            `Indirizzo dello studio legale: ${CABINET.address}`,
            `Telefono: ${CABINET.phoneIntl}`,
            `Email: ${CABINET.email}`,
            `Numero SIREN: ${CABINET.siren}`,
            `Forma di esercizio: ${CABINET.exerciseForm}`,
            `Direttore della pubblicazione: avvocato ${CABINET.name}`,
          ],
        },
        {
          title: '2. Progettazione e sviluppo',
          content: `Questo sito è stato progettato e sviluppato da ${CABINET.developer}.`,
        },
        {
          title: '3. Hosting Web',
          content: `Il sito è ospitato da ${CABINET.vercelAddress}.`,
        },
        {
          title: '4. Deontologia e Regole Professionali',
          content:
            'La professione di avvocato è regolata dalle regole deontologiche contenute nel Regolamento Interno Nazionale (RIN) della professione forense francese, stabilito dal Consiglio Nazionale dell\'Ordine forense francese (CNB), consultabile su www.cnb.avocat.fr, e dall\'Ordine degli Avvocati di Arras.',
          list: [
            'Ordine di iscrizione: Ordine degli Avvocati di Arras',
            `Assicurazione di responsabilità civile professionale: ${CABINET.insurer}`,
            `Copertura geografica: ${CABINET.insurerCoverage}`,
            `Cassa di garanzia: ${CABINET.guaranteeFund}`,
          ],
        },
        {
          title: '5. Mediazione dei consumatori',
          content: `Ai sensi dell'articolo L.616-1 del Codice del consumo francese, se siete consumatori e sorge una controversia con lo studio, potete rivolgervi gratuitamente al mediatore dei consumatori della professione forense, dopo aver inviato un reclamo scritto allo studio: ${MEDIATOR.name}, Mediatrice dei consumatori della professione forense, ${MEDIATOR.address}. Sito web: ${MEDIATOR.site}.`,
        },
        {
          title: '6. Onorari',
          content:
            'Gli onorari indicati su questo sito hanno carattere puramente informativo. Ogni incarico è subordinato a una convenzione di onorari, firmata preventivamente con il cliente, che precisa gli onorari applicabili alla pratica.',
        },
        {
          title: '7. Proprietà intellettuale',
          content: `L'insieme degli elementi presenti su questo sito (struttura, design, testi, logo, immagini) è, salvo diversa indicazione, proprietà esclusiva dell'avvocato ${CABINET.name} ed è protetto dalle leggi sulla proprietà intellettuale. Le fotografie sono attribuite a ${CABINET.photographer}, che ne ha autorizzato l'uso su questo sito. Qualsiasi riproduzione, rappresentazione o adattamento, totale o parziale, senza previa autorizzazione è vietata.`,
        },
        {
          title: '8. Responsabilità sui contenuti',
          content:
            'Le informazioni pubblicate su questo sito hanno carattere generale e non costituiscono una consulenza legale. La consultazione del sito o il contatto con lo studio non instaurano, di per sé, un rapporto avvocato-cliente. Vi preghiamo di non inviare informazioni riservate o sensibili prima che un incarico sia stato concordato.',
        },
        {
          title: '9. Dati personali e cookie',
          content:
            'Il trattamento dei dati personali e l\'uso dei cookie su questo sito sono descritti nella nostra Informativa sulla Privacy.',
        },
      ],
    };
  }

  // Version Française par défaut
  return {
    title: 'Mentions Légales',
    lastUpdated: 'Dernière mise à jour : 22 octobre 2026',
    sections: [
      {
        title: '1. Éditeur du site',
        content: `Le site ${CABINET.site} est édité par Maître ${CABINET.name}, avocate inscrite au Barreau d'Arras (titre professionnel d'avocat obtenu en France).`,
        list: [
          `Adresse du cabinet : ${CABINET.address}`,
          `Téléphone : ${CABINET.phoneFr}`,
          `Email : ${CABINET.email}`,
          `Numéro SIREN : ${CABINET.siren}`,
          `Forme d'exercice : ${CABINET.exerciseForm}`,
          `Directrice de la publication : Maître ${CABINET.name}`,
        ],
      },
      {
        title: '2. Conception et développement',
        content: `Ce site a été conçu et développé par ${CABINET.developer}. Site internet : ${CABINET.developerSite}.`,
      },
      {
        title: '3. Hébergement',
        content: `Le site est hébergé par ${CABINET.vercelAddress}.`,
      },
      {
        title: '4. Déontologie et Règles Professionnelles',
        content:
          "La profession d'avocat est régie par les règles déontologiques du Règlement Intérieur National (RIN) de la profession d'avocat, arrêté par le Conseil National des Barreaux (CNB) et consultable sur www.cnb.avocat.fr, ainsi que par le Barreau d'Arras.",
        list: [
          "Barreau d'inscription : Barreau d'Arras",
          `Assurance responsabilité civile professionnelle : ${CABINET.insurer}`,
          `Couverture géographique : ${CABINET.insurerCoverage}`,
          `Caisse de garantie : ${CABINET.guaranteeFund}`,
        ],
      },
      {
        title: '5. Médiation de la consommation',
        content: `Conformément à l'article L.616-1 du Code de la consommation, si vous êtes un consommateur et qu'un litige survient avec le cabinet, vous pouvez saisir gratuitement le médiateur de la consommation de la profession d'avocat, après avoir adressé une réclamation écrite au cabinet : ${MEDIATOR.name}, Médiatrice de la consommation de la profession d'avocat, ${MEDIATOR.address}. Site internet : ${MEDIATOR.site}.`,
      },
      {
        title: '6. Honoraires',
        content:
          "Les honoraires indiqués sur ce site le sont à titre purement informatif. Toute intervention fait l'objet d'une convention d'honoraires, signée au préalable avec le client, qui précise les honoraires applicables au dossier.",
      },
      {
        title: '7. Propriété Intellectuelle',
        content: `L'ensemble des éléments figurant sur ce site (structure, design, textes, logo, images) est, sauf mention contraire, la propriété exclusive de Maître ${CABINET.name} et est protégé par le droit d'auteur. Les photographies sont créditées à ${CABINET.photographer}, qui en a autorisé l'utilisation sur ce site. Toute reproduction, représentation ou adaptation, totale ou partielle, sans autorisation préalable est interdite.`,
      },
      {
        title: '8. Responsabilité quant au contenu',
        content:
          "Les informations publiées sur ce site sont de nature générale et ne constituent pas une consultation juridique. La consultation du site ou la prise de contact avec le cabinet ne crée pas, en soi, de relation avocat-client. Merci de ne pas transmettre d'informations confidentielles ou sensibles avant qu'une prise en charge ait été convenue.",
      },
      {
        title: '9. Données personnelles et cookies',
        content:
          "Le traitement des données personnelles et l'utilisation des cookies sur ce site sont décrits dans notre Politique de Confidentialité.",
      },
    ],
  };
};

export const getPrivacyPolicyData = (locale: string = 'fr'): LegalDocument => {
  if (locale === 'en') {
    return {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: October 22, 2026',
      sections: [
        {
          title: '1. Data Controller',
          content: `The data controller is Attorney ${CABINET.name}, ${CABINET.address}. Email: ${CABINET.email}. Phone: ${CABINET.phoneIntl}. She is committed to ensuring that the collection and processing of your personal data comply with the General Data Protection Regulation (GDPR) and the French Data Protection Act.`,
        },
        {
          title: '2. Data Collected',
          content: 'This website has no contact form. The personal data we process comes from:',
          list: [
            'Your emails and phone calls: identity, contact details and the subject of your request, which you provide voluntarily.',
            'Browsing data: IP address, pages visited, device and browser type, collected by hosting logs and, with your consent, by Google Analytics.',
          ],
        },
        {
          title: '3. Purposes and Legal Bases',
          content: 'Your data is used only for the following purposes:',
          list: [
            'Answering your requests and arranging appointments (pre-contractual measures and legitimate interest).',
            'Measuring the audience of the website in order to improve it (your consent).',
            'Ensuring the security and proper functioning of the website (legitimate interest).',
          ],
        },
        {
          title: '4. Cookies and Google Analytics',
          content:
            'Audience-measurement cookies (Google Analytics) are placed only after you have given your consent. You can withdraw or change your choice at any time. Cookies are kept for a maximum of 13 months. Data may be transferred to Google outside the European Union, under the appropriate safeguards provided for by the GDPR.',
        },
        {
          title: '5. Retention Periods',
          content:
            'Data related to your requests is kept for a maximum of three years from the last contact, unless a lawyer-client relationship begins, in which case professional retention obligations apply. Audience-measurement data is kept for a limited period defined in the analytics settings.',
        },
        {
          title: '6. Recipients and Hosting',
          content:
            'Your data is not sold. It is accessible only to the law office and to its technical providers (hosting by Vercel Inc., audience measurement by Google). All information you communicate to the law office is covered by professional secrecy.',
        },
        {
          title: '7. Your Rights',
          content: `In accordance with the GDPR, you have the right to access, rectify, erase, restrict the processing of, object to the processing of and port your personal data, and to give instructions on their fate after your death. You can exercise these rights by email (${CABINET.email}) or by post at the law office's address. If you believe your rights have not been respected, you may lodge a complaint with the CNIL (www.cnil.fr).`,
        },
      ],
    };
  }

  if (locale === 'it') {
    return {
      title: 'Informativa sulla Privacy',
      lastUpdated: 'Ultimo aggiornamento: 22 ottobre 2026',
      sections: [
        {
          title: '1. Titolare del trattamento',
          content: `Il titolare del trattamento è l'avvocato ${CABINET.name}, ${CABINET.address}. Email: ${CABINET.email}. Telefono: ${CABINET.phoneIntl}. Si impegna a garantire che la raccolta e il trattamento dei vostri dati personali siano conformi al Regolamento Generale sulla Protezione dei Dati (GDPR) e alla legge francese sulla protezione dei dati.`,
        },
        {
          title: '2. Dati raccolti',
          content: 'Questo sito non dispone di un modulo di contatto. I dati personali trattati provengono da:',
          list: [
            'Le vostre email e telefonate: identità, recapiti e oggetto della richiesta, che fornite volontariamente.',
            'I dati di navigazione: indirizzo IP, pagine visitate, tipo di dispositivo e di browser, raccolti dai log del servizio di hosting e, con il vostro consenso, da Google Analytics.',
          ],
        },
        {
          title: '3. Finalità e basi giuridiche',
          content: 'I vostri dati sono utilizzati esclusivamente per le seguenti finalità:',
          list: [
            'Rispondere alle vostre richieste e fissare appuntamenti (misure precontrattuali e legittimo interesse).',
            'Misurare l\'audience del sito per migliorarlo (il vostro consenso).',
            'Garantire la sicurezza e il corretto funzionamento del sito (legittimo interesse).',
          ],
        },
        {
          title: '4. Cookie e Google Analytics',
          content:
            'I cookie di misurazione dell\'audience (Google Analytics) sono installati solo dopo il vostro consenso. Potete revocare o modificare la vostra scelta in qualsiasi momento. I cookie sono conservati per un massimo di 13 mesi. I dati possono essere trasferiti a Google al di fuori dell\'Unione Europea, con le garanzie adeguate previste dal GDPR.',
        },
        {
          title: '5. Periodi di conservazione',
          content:
            'I dati relativi alle vostre richieste sono conservati per un massimo di tre anni dall\'ultimo contatto, salvo l\'instaurarsi di un rapporto avvocato-cliente, nel qual caso si applicano gli obblighi professionali di conservazione. I dati di misurazione dell\'audience sono conservati per un periodo limitato, definito nelle impostazioni di analisi.',
        },
        {
          title: '6. Destinatari e hosting',
          content:
            'I vostri dati non sono venduti. Sono accessibili solo allo studio e ai suoi fornitori tecnici (hosting da parte di Vercel Inc., misurazione dell\'audience da parte di Google). Tutte le informazioni comunicate allo studio sono coperte dal segreto professionale.',
        },
        {
          title: '7. I vostri diritti',
          content: `In conformità con il GDPR, avete il diritto di accedere, rettificare, cancellare, limitare il trattamento dei vostri dati personali, di opporvi al trattamento e di richiederne la portabilità, nonché di dare istruzioni sulla loro sorte dopo la vostra morte. Potete esercitare questi diritti via email (${CABINET.email}) o per posta all'indirizzo dello studio. Se ritenete che i vostri diritti non siano stati rispettati, potete presentare un reclamo alla CNIL (www.cnil.fr).`,
        },
      ],
    };
  }

  // Version Française par défaut
  return {
    title: 'Politique de Confidentialité',
    lastUpdated: 'Dernière mise à jour : 22 octobre 2026',
    sections: [
      {
        title: '1. Responsable du traitement',
        content: `Le responsable du traitement est Maître ${CABINET.name}, ${CABINET.address}. Email : ${CABINET.email}. Téléphone : ${CABINET.phoneFr}. Elle s'engage à ce que la collecte et le traitement de vos données personnelles soient conformes au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.`,
      },
      {
        title: '2. Données collectées',
        content:
          'Ce site ne comporte pas de formulaire de contact. Les données personnelles traitées proviennent :',
        list: [
          'De vos échanges par e-mail ou par téléphone : identité, coordonnées et objet de votre demande, que vous communiquez volontairement.',
          "Des données de navigation : adresse IP, pages consultées, type d'appareil et de navigateur, collectées par les journaux de l'hébergeur et, avec votre consentement, par Google Analytics.",
        ],
      },
      {
        title: '3. Finalités et bases légales',
        content: 'Vos données sont utilisées uniquement pour les finalités suivantes :',
        list: [
          'Répondre à vos demandes et organiser les rendez-vous (mesures précontractuelles et intérêt légitime).',
          "Mesurer l'audience du site afin de l'améliorer (votre consentement).",
          'Assurer la sécurité et le bon fonctionnement du site (intérêt légitime).',
        ],
      },
      {
        title: '4. Cookies et Google Analytics',
        content:
          "Les cookies de mesure d'audience (Google Analytics) ne sont déposés qu'après avoir recueilli votre consentement. Vous pouvez le retirer ou modifier votre choix à tout moment. Les cookies sont conservés 13 mois au maximum. Des données peuvent être transférées à Google en dehors de l'Union européenne, avec les garanties appropriées prévues par le RGPD.",
      },
      {
        title: '5. Durées de conservation',
        content:
          "Les données liées à vos demandes sont conservées au maximum trois ans à compter du dernier contact, sauf si une relation avocat-client s'engage, auquel cas les obligations professionnelles de conservation s'appliquent. Les données de mesure d'audience sont conservées pendant une durée limitée, définie dans les paramètres de l'outil d'analyse.",
      },
      {
        title: '6. Destinataires et hébergement',
        content:
          "Vos données ne sont pas vendues. Elles sont accessibles uniquement au cabinet et à ses prestataires techniques (hébergement par Vercel Inc., mesure d'audience par Google). Toutes les informations que vous communiquez au cabinet sont couvertes par le secret professionnel.",
      },
      {
        title: '7. Vos droits',
        content: `Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité concernant vos données personnelles, ainsi que du droit de définir des directives relatives à leur sort après votre décès. Vous pouvez exercer ces droits par e-mail (${CABINET.email}) ou par courrier à l'adresse du cabinet. Si vous estimez que vos droits n'ont pas été respectés, vous pouvez introduire une réclamation auprès de la CNIL (www.cnil.fr).`,
      },
    ],
  };
};

export interface CtaData {
  title: string;
  description: string;
  contactBtnText: string;
  contactBtnHref: string;
}

export const getCtaData = (locale: string = 'fr'): CtaData => {
  if (locale === 'en') {
    return {
      title: 'Need Legal Counsel?',
      description:
        'Schedule an appointment for an initial consultation. I will welcome you at my office in the heart of Arras to assess your legal matter and provide tailored solutions.',
      contactBtnText: 'Get in touch',
      contactBtnHref: '/contact',
    };
  }

  if (locale === 'it') {
    return {
      title: 'Avete bisogno di una consulenza legale?',
      description:
        'Fissate un appuntamento per un primo colloquio. Vi riceverò nel mio studio nel centro di Arras per esaminare la vostra situazione e proporvi le soluzioni più adatte.',
      contactBtnText: 'Contattami',
      contactBtnHref: '/contact',
    };
  }

  // Version Française par défaut
  return {
    title: "Besoin d'un conseil juridique ?",
    description:
      "Prenez rendez-vous pour un premier échange. Je vous recevrai dans mon cabinet situé au cœur d'Arras pour analyser votre situation et vous proposer les solutions adaptées.",
    contactBtnText: 'Prendre contact',
    contactBtnHref: '/contact',
  };
};