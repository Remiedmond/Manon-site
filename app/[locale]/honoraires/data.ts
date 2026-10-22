export interface HonorairesArea {
  id: string;
  annonce: string;
  larticle: string;

}

export const getHonorairesData = (locale: string = 'fr'): HonorairesArea[] => {
  if (locale === 'en') {
    return [
      {
        id: 'article11',
        annonce: 'Attorney Manon FONTAINE is committed to practicing her profession with impeccable ethics, based on complete transparency with clients regarding the fees charged by the firm. In accordance with Article 11.2 of the National French Internal Regulations (NFIR) of the legal profession.',
        larticle: 'Fees are determined according to customary practices, taking into account the client\'s financial situation, the complexity of the case, the expenses incurred by the attorney, their reputation, and the diligence exercised. The attorney in charge of a case is also entitled to request fees if the case is withdrawn before its conclusion, in proportion to the work actually performed.',
       },
     
    ];
  }

  if (locale === 'it') {
    return [
      {
        id: 'article11',
        annonce: 'L\'avvocato Manon FONTAINE si impegna a esercitare la sua professione nel rispetto di un\'etica impeccabile, basata su una totale trasparenza nei confronti dei clienti per quanto riguarda le tariffe praticate dallo studio. In conformità con l\'articolo 11.2 del Regolamento Interno Nazionale (RIN) della professione legale.',
        larticle: 'Le tariffe sono determinate secondo gli usi, tenendo conto della situazione finanziaria del cliente, della difficoltà del caso, delle spese sostenute dall\'avvocato, della sua notorietà e delle diligenze compiute. L\'avvocato incaricato di un caso ha anche il diritto di richiedere onorari se il caso gli viene ritirato prima della sua conclusione, in proporzione al lavoro effettivamente svolto.',
       },
    ];
  }

  // Langue par défaut : Français
  return [
    {
      id: 'article11',
      annonce: 'Maître Manon FONTAINE s’attache à exercer sa profession dans le respect d’une éthique irréprochable, fondée sur une totale transparence à l’égard de sa clientèle s’agissant des honoraires pratiqués par le cabinet. Conformément à l’article 11.2 du Règlement Intérieur National (RIN) de la profession d’avocat.',
      larticle: 'Les honoraires sont déterminés selon les usages, en considération de la situation de fortune du client, de la difficulté de l’affaire, des frais exposés par l’avocat, de sa notoriété ainsi que des diligences accomplies. L’avocat en charge d’un dossier est également fondé à solliciter des honoraires si le dossier lui est retiré avant son terme, à hauteur du travail effectivement réalisé.',
     },
  ];
};



export interface AideJuridiqueData {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  subTitle: string;
  points: string[];
}

export const getAideJuridiqueData = (locale: string = 'fr'): AideJuridiqueData => {
  if (locale === 'en') {
    return {
      title: 'Legal Aid',
      description:
        'If you have limited financial resources, you may be eligible for State Legal Aid. This aid, granted based on income thresholds, covers all or part of legal costs and attorney fees.',
      buttonText: 'Run Eligibility Simulator',
      buttonUrl: 'https://www.aidejuridictionnelle.justice.fr/simulateur',
      subTitle: 'My Support',
      points: [
        'Eligibility verification.',
        'Assistance in building your legal aid file.',
        'Full or partial coverage based on your income.',
        'Same high quality of representation regardless of funding method.',
      ],
    };
  }

  if (locale === 'it') {
    return {
      title: 'Patrocinio a Spese dello Stato',
      description:
        'Se disponete di risorse economiche limitate, potete beneficiare del patrocinio a spese dello Stato per coprire in tutto o in parte le spese legali e gli onorari dell\'avvocato.',
      buttonText: 'Esegui il Simulatore',
      buttonUrl: 'https://www.aidejuridictionnelle.justice.fr/simulateur',
      subTitle: 'La mia assistenza',
      points: [
        'Verifica della vostra idoneità.',
        'Assistenza nella preparazione del fascicolo.',
        'Copertura totale o parziale in base alle vostre risorse.',
        'Stessa qualità del servizio a prescindere dalla modalità di compenso.',
      ],
    };
  }

  // Version Française par défaut
  return {
    title: 'Aide juridictionnelle',
    description:
      "Si vos ressources sont limitées, vous pouvez bénéficier de l'aide juridictionnelle. Cette aide, accordée sous conditions de ressources, permet de prendre en charge tout ou partie des frais de justice et des honoraires d'avocat.",
    buttonText: 'Faire la simulation',
    buttonUrl: 'https://www.aidejuridictionnelle.justice.fr/simulateur',
    subTitle: 'Mon accompagnement',
    points: [
      'Vérification de votre éligibilité.',
      'Assistance pour constituer votre dossier.',
      'Prise en charge totale ou partielle selon vos ressources.',
      'Même qualité de service quel que soit le mode de rémunération.',
    ],
  };
};



export interface ConventionSection {
  title: string;
  intro: string;
  items: string[];
  conclusion?: string;
}

export interface ConventionData {
  imageSrc: string;
  imageAlt: string;
  agreement: ConventionSection; // Bloc 1 : Convention d'honoraires
  retainer: ConventionSection;  // Bloc 2 : Provisions sur honoraires
}

export const getConventionData = (locale: string = 'fr'): ConventionData => {
  if (locale === 'en') {
    return {
      imageSrc: '/beffroi 2.jpg',
      imageAlt: 'building of the law office',
      agreement: {
        title: 'Fee Agreement',
        intro: 'Prior to any work, we sign a formal fee agreement detailing:',
        items: [
          'The exact scope of the legal mission',
          'The fee calculation method (hourly, flat rate, success fee)',
          'Payment terms and milestones',
          'Potential costs and court disbursements',
        ],
        conclusion: 'This agreement protects you and guarantees complete transparency in our professional relationship.',
      },
      retainer: {
        title: 'Retainer & Advance Payments',
        intro: 'For most legal missions, a retainer (advance fee) will be requested prior to starting our work.',
        items: [
          'Retainers are systematically deposited into a dedicated escrow account (CARPA)',
          'They secure the payment of required procedural fees and costs',
          'A detailed statement of account is provided at the conclusion of the mission',
          'Any remaining balance is promptly refunded to you',
        ],
      },
    };
  }

  if (locale === 'it') {
    return {
      imageSrc: '/beffroi 2.jpg',
      imageAlt: 'edificio dello studio legale',
      agreement: {
        title: 'Convenzione di Onorario',
        intro: 'Prima di qualsiasi intervento, firmiamo insieme una convenzione che specifica:',
        items: [
          'La natura dell\'incarico conferito',
          'Il metodo di calcolo degli onorari',
          'Le modalità e scadenze di pagamento',
          'Eventuali spese e diritti di cancelleria',
        ],
        conclusion: 'Questo accordo vi protegge e garantisce la massima chiarezza nel nostro rapporto professionale.',
      },
      retainer: {
        title: 'Fondo Spese e Acconti',
        intro: 'Per la maggior parte degli incarichi, viene richiesto un acconto prima dell\'avvio dell\'attività.',
        items: [
          'I fondi sono sistematicamente versati su un conto vincolato (CARPA)',
          'Garantiscono la copertura delle spese e delle competenze legali',
          'Un rendiconto dettagliato viene fornito al termine dell\'incarico',
          'L\'eventuale saldo residuo vi viene integralmente restituito',
        ],
      },
    };
  }

  // Version Française par défaut
  return {
    imageSrc: '/beffroi 2.jpg',
    imageAlt: 'Beffroi d\'Arras, pris en gros plan.',
    agreement: {
      title: "Convention d'honoraires",
      intro: "Avant toute intervention, nous signons ensemble une convention d'honoraires qui précise :",
      items: [
        'La nature de la mission confiée',
        'Le mode de calcul des honoraires',
        'Les modalités de paiement',
        'Les éventuels frais et débours',
      ],
      conclusion: 'Cette convention vous protège et garantit la clarté de notre relation professionnelle.',
    },
    retainer: {
      title: 'Provisions sur honoraires',
      intro: "Pour la plupart des missions, une provision (avance) vous sera demandée avant le début de l'intervention.",
      items: [
        'Les provisions sont systématiquement versées sur un compte dédié (CARPA)',
        'Elles permettent de garantir le paiement des frais et honoraires',
        'Un décompte détaillé vous est fourni à l\'issue de la mission',
        'Tout solde éventuel vous est restitué',
      ],
    },
  };
};


export interface BillingCard {
  icon: string;
  alt: string;
  title: string;
  lines: string[];
  checklistIcon: string;
  checklist: string[];
}

export interface BillingSectionData {
  title: string;
  subtitle: string;
  cards: BillingCard[];
}

export const getBillingData = (locale: string = 'fr'): BillingSectionData => {
  if (locale === 'en') {
    return {
      title: 'Billing Methods',
      subtitle: 'Several flexible arrangements tailored to the nature of your case',
      cards: [
        {
          icon: '/coeur.svg',
          alt: 'Flat-fee billing icon',
          title: 'Flat-Fee Billing',
          lines: [
            'For clearly defined legal services (mutual consent divorce, contract drafting, etc.), I offer a fixed, all-inclusive flat fee agreed upon from the start.',
          ],
          checklistIcon: '/check.png',
          checklist: [
            'Total clarity from day one',
            'No unexpected costs',
            'Tailored for standardized procedures',
          ],
        },
        {
          icon: '/personnage.svg',
          alt: 'Hourly billing icon',
          title: 'Hourly Rate Billing',
          lines: [
            'For complex cases or those with unpredictable outcomes, legal fees are calculated based on the actual time devoted to your file.',
          ],
          checklistIcon: '/check.png',
          checklist: [
            'Flexibility based on case complexity',
            'Full transparency on time spent',
            'Adapted for evolving matters',
          ],
        },
        {
          icon: '/bouclier.svg',
          alt: 'Contingency fee icon',
          title: 'Success Fee / Contingency',
          lines: [
            'In specific cases (debt recovery, litigation), an additional contingency fee can be agreed upon based on the outcome achieved, supplementing fixed fees.',
          ],
          checklistIcon: '/check.png',
          checklist: [
            'Aligned with obtained results',
            'Clear calculation terms in advance',
            'Suitable for outcome-variable disputes',
          ],
        },
      ],
    };
  }

  if (locale === 'it') {
    return {
      title: 'Modalità di Fatturazione',
      subtitle: 'Diverse formule adatte alla natura della vostra pratica',
      cards: [
        {
          icon: '/coeur.svg',
          alt: 'Icona compenso forfettario',
          title: 'Compenso Forfettario',
          lines: [
            'Per prestazioni ben definite dall\'inizio (divorzio consensuale, redazione contratti), viene concordato un importo forfettario trasparente.',
          ],
          checklistIcon: '/check.png',
          checklist: [
            'Trasparenza fin dall\'inizio',
            'Nessun costo imprevisto',
            'Ideale per pratiche standardizzate',
          ],
        },
        {
          icon: '/personnage.svg',
          alt: 'Icona compenso a tempo',
          title: 'Compenso a Tempo',
          lines: [
            'Per le questioni più complesse, gli onorari sono parametrati sul tempo effettivamente dedicato al vostro fascicolo.',
          ],
          checklistIcon: '/check.png',
          checklist: [
            'Flessibilità secondo la complessità',
            'Rendiconto trasparente delle ore',
            'Adatto a pratiche in evoluzione',
          ],
        },
        {
          icon: '/bouclier.svg',
          alt: 'Icona compenso di risultato',
          title: 'Compenso di Risultato',
          lines: [
            'In casi specifici (recupero crediti, contenziosi), una quota può essere legata al risultato ottenuto, oltre a una base fissa.',
          ],
          checklistIcon: '/check.png',
          checklist: [
            'Parametrato ai risultati ottenuti',
            'Massima chiarezza sul calcolo',
            'Adatto a controversie complesse',
          ],
        },
      ],
    };
  }

  // Version Française par défaut
  return {
    title: 'Modes de facturation',
    subtitle: 'Plusieurs modalités adaptées à la nature de votre dossier',
    cards: [
      {
        icon: '/coeur.svg',
        alt: 'SVG Honoraires au forfait',
        title: 'Honoraires au forfait',
        lines: [
          'Pour les prestations définies à l\'avance (divorce par consentement mutuel, rédaction de contrat, etc.), je propose un montant forfaitaire fixé dès le départ.',
        ],
        checklistIcon: '/check.png',
        checklist: [
          'Transparence dès le départ',
          'Pas de surprise sur le coût',
          'Adapté aux prestations standardisées',
        ],
      },
      {
        icon: '/personnage.svg',
        alt: 'SVG Honoraires au temps passé',
        title: 'Honoraires au temps passé',
        lines: [
          'Pour les dossiers complexes ou dont l\'issue est incertaine, mes honoraires sont calculés sur la base du temps consacré à votre dossier.',
        ],
        checklistIcon: '/check.png',
        checklist: [
          'Flexibilité selon la complexité du dossier',
          'Transparence sur le temps consacré',
          'Adapté aux dossiers évolutifs',
        ],
      },
      {
        icon: '/bouclier.svg',
        alt: 'SVG Honoraires de résultat',
        title: 'Honoraires de résultat',
        lines: [
          'Dans certains cas (recouvrement, contentieux), une partie des honoraires peut être calculée en fonction du résultat obtenu, en complément d\'honoraires fixes.',
        ],
        checklistIcon: '/check.png',
        checklist: [
          'Flexibilité selon les résultats obtenus',
          'Transparence sur les modalités de calcul',
          'Adapté aux dossiers avec des résultats variables',
        ],
      },
    ],
  };
};


export interface FirstMeetingData {
  title: string;
  priceHighlight: string;
  textPart1: string;
  textPart2: string;
  deductionNote: string;
}

export const getFirstMeetingData = (locale: string = 'fr'): FirstMeetingData => {
  if (locale === 'en') {
    return {
      title: 'Initial Consultation',
      priceHighlight: '€80 incl. VAT',
      textPart1:
        'During our first meeting, I will provide a detailed quote tailored to your specific situation. This initial consultation is charged at',
      textPart2: '.',
      deductionNote:
        'This amount will be fully deducted from the initial fee retainer if you choose to retain my services for your case.',
    };
  }

  if (locale === 'it') {
    return {
      title: 'Primo Appuntamento',
      priceHighlight: '80 € IVA inclusa',
      textPart1:
        'Durante il nostro primo incontro, vi presenterò un preventivo dettagliato su misura per la vostra situazione. Questo primo appuntamento ha un costo di',
      textPart2: '.',
      deductionNote:
        'Tale importo sarà integralmente detratto dall\'acconto sugli onorari qualora decidiate di affidarmi l\'incarico.',
    };
  }

  // Version Française par défaut
  return {
    title: 'Premier rendez-vous',
    priceHighlight: '80 € TTC',
    textPart1:
      'Lors de notre première rencontre, je vous présenterai un devis détaillé adapté à votre situation. Ce premier rendez-vous est facturé',
    textPart2: '.',
    deductionNote:
      "Ce montant sera déduit de la provision d'honoraires si vous décidez de me confier votre dossier.",
  };
};


export interface AsavoirData {
  title: string;
  items: string[];
}

export const getAsavoirData = (locale: string = 'fr'): AsavoirData => {
  if (locale === 'en') {
    return {
      title: 'Good to know',
      items: [
        'Fees do not include ancillary expenses (travel expenses, bailiff/court enforcement fees, expert valuation costs, etc.), which will be invoiced separately.',
        'An installment payment plan can be set up upon request, tailored to your financial situation.',
        'I am strictly bound by the ethical rules of the legal profession, particularly regarding fee determination and transparency.',
      ],
    };
  }

  if (locale === 'it') {
    return {
      title: 'Informazioni utili',
      items: [
        'Gli onorari non comprendono le spese accessorie (spese di trasferta, spese per ufficiali giudiziari, perizie, ecc.), che verranno fatturate separatamente.',
        'Su richiesta, è possibile concordare un piano di pagamento rateale adeguato alla vostra situazione economica.',
        'Sono tenuta al rigoroso rispetto delle norme deontologiche dell\'avvocatura, in particolare per la determinazione degli onorari.',
      ],
    };
  }

  // Version Française par défaut
  return {
    title: 'À savoir',
    items: [
      "Les honoraires ne comprennent pas les frais annexes (frais de déplacement, frais d'huissier, frais d'expertise, etc.) qui vous seront facturés séparément.",
      "Un échéancier de paiement peut être mis en place sur demande, en fonction de votre situation.",
      "Je suis soumise aux règles déontologiques de la profession d'avocat, notamment en matière de fixation des honoraires.",
    ],
  };
};


export interface GalleryPhoto {
  src: string;
  alt: string;
  spanClass: string;
  heightClass: string;
}

export interface HonorairesGalleryData {
  photos: GalleryPhoto[];
}

export const getHonorairesGalleryData = (locale: string = 'fr'): HonorairesGalleryData => {
  if (locale === 'en') {
    return {
      photos: [
        {
          src: '/codecivil.jpg',
          alt: 'Close-up of the French Civil Code, symbolizing legal rigor and the rule of law.',
          spanClass: 'md:col-span-2',
          heightClass: 'h-72 md:h-[420px]',
        },
        {
          src: '/deboutnef1.jpg',
          alt: 'Attorney Manon Fontaine standing in the foreground of her office, illustrating commitment and availability.',
          spanClass: 'md:col-span-1',
          heightClass: 'h-72 md:h-[420px]',
        },
        {
          src: '/assisavecmac.jpg',
          alt: 'Attorney Manon Fontaine seated at her desk with her laptop.',
          spanClass: 'md:col-span-1',
          heightClass: 'h-80 md:h-[440px]',
        },
        {
          src: '/deboutbrascroises.jpg',
          alt: 'Attorney Manon Fontaine standing with crossed arms in her office, conveying trust and professionalism.',
          spanClass: 'md:col-span-1',
          heightClass: 'h-80 md:h-[440px]',
        },
        {
          src: '/deboutaveclecodecivil.jpg',
          alt: 'Attorney Manon Fontaine standing with the Civil Code in hand, reflecting legal expertise and dedication.',
          spanClass: 'md:col-span-1',
          heightClass: 'h-80 md:h-[440px]',
        },
        {
          src: '/assiscodecivilouvert.jpg',
          alt: 'Attorney Manon Fontaine seated, consulting an open Civil Code.',
          spanClass: 'md:col-span-1',
          heightClass: 'h-64 md:h-[280px]',
        },
        {
          src: '/assisauburreau.jpg',
          alt: 'Attorney Manon Fontaine working on a client matter at her desk computer.',
          spanClass: 'md:col-span-2',
          heightClass: 'h-64 md:h-[280px]',
        },
      ],
    };
  }

  if (locale === 'it') {
    return {
      photos: [
        {
          src: '/codecivil.jpg',
          alt: 'Primo piano del Codice Civile francese, a simboleggiare il diritto e il rigore giuridico.',
          spanClass: 'md:col-span-2',
          heightClass: 'h-72 md:h-[420px]',
        },
        {
          src: '/deboutnef1.jpg',
          alt: 'Studio di lavoro con l\'Avvocato Manon Fontaine in primo piano, a rappresentare impegno e disponibilità.',
          spanClass: 'md:col-span-1',
          heightClass: 'h-72 md:h-[420px]',
        },
        {
          src: '/assisavecmac.jpg',
          alt: 'L\'Avvocato Manon Fontaine seduta alla scrivania con il proprio computer.',
          spanClass: 'md:col-span-1',
          heightClass: 'h-80 md:h-[440px]',
        },
        {
          src: '/deboutbrascroises.jpg',
          alt: 'L\'Avvocato Manon Fontaine in piedi a braccia conserte nel suo studio, espressione di fiducia e professionalità.',
          spanClass: 'md:col-span-1',
          heightClass: 'h-80 md:h-[440px]',
        },
        {
          src: '/deboutaveclecodecivil.jpg',
          alt: 'L\'Avvocato Manon Fontaine in piedi con il Codice Civile in mano, a simboleggiare competenza e rigore.',
          spanClass: 'md:col-span-1',
          heightClass: 'h-80 md:h-[440px]',
        },
        {
          src: '/assiscodecivilouvert.jpg',
          alt: 'L\'Avvocato Manon Fontaine seduta con il Codice Civile aperto.',
          spanClass: 'md:col-span-1',
          heightClass: 'h-64 md:h-[280px]',
        },
        {
          src: '/assisauburreau.jpg',
          alt: 'L\'Avvocato Manon Fontaine alla scrivania intenta ad analizzare una pratica al computer.',
          spanClass: 'md:col-span-2',
          heightClass: 'h-64 md:h-[280px]',
        },
      ],
    };
  }

  // Version Française par défaut
  return {
    photos: [
      {
        src: '/codecivil.jpg',
        alt: 'Image montrant le code civil en gros plan, symbolisant le droit et la rigueur juridique.',
        spanClass: 'md:col-span-2',
        heightClass: 'h-72 md:h-[420px]',
      },
      {
        src: '/deboutnef1.jpg',
        alt: 'Bureau de travail et Maître Manon Fontaine en premier plan, illustrant l\'engagement et la disponibilité de l\'avocate.',
        spanClass: 'md:col-span-1',
        heightClass: 'h-72 md:h-[420px]',
      },
      {
        src: '/assisavecmac.jpg',
        alt: 'Maître Manon Fontaine assise à son bureau, avec son ordinateur.',
        spanClass: 'md:col-span-1',
        heightClass: 'h-80 md:h-[440px]',
      },
      {
        src: '/deboutbrascroises.jpg',
        alt: 'Maître Manon Fontaine debout, bras croisés, dans son bureau, symbolisant la confiance et le professionnalisme.',
        spanClass: 'md:col-span-1',
        heightClass: 'h-80 md:h-[440px]',
      },
      {
        src: '/deboutaveclecodecivil.jpg',
        alt: 'Maître Manon Fontaine debout avec le code civil à la main, symbolisant l’expertise et la rigueur juridique.',
        spanClass: 'md:col-span-1',
        heightClass: 'h-80 md:h-[440px]',
      },
      {
        src: '/assiscodecivilouvert.jpg',
        alt: 'Maître Manon Fontaine assise sur une chaise, avec un code civil ouvert devant elle.',
        spanClass: 'md:col-span-1',
        heightClass: 'h-64 md:h-[280px]',
      },
      {
        src: '/assisauburreau.jpg',
        alt: 'Maître Manon Fontaine assise à son bureau, en train de travailler sur un dossier sur son ordinateur.',
        spanClass: 'md:col-span-2',
        heightClass: 'h-64 md:h-[280px]',
      },
    ],
  };
};
