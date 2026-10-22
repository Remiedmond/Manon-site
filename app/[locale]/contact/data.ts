export interface ContactChannel {
  icon: string;
  label: string;
  value: string;
  subValue?: string;
  href: string;
  actionText: string;
}

export interface ContactPageData {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  channels: ContactChannel[];
  access: {
    title: string;
    addressTitle: string;
    addressText: string[];
    scheduleTitle: string;
    scheduleText: string[];
    appointmentNote: string;
  };
}

export const getContactData = (locale: string = 'fr'): ContactPageData => {
  if (locale === 'en') {
    return {
      hero: {
        eyebrow: 'Get in touch',
        title: 'Contact the Firm',
        description: 'For any legal inquiry or consultation request, you can reach the firm directly by phone or email.',
      },
      channels: [
        {
          icon: '/bouclier.svg',
          label: 'Direct Phone',
          value: '03 21 60 50 40',
          subValue: 'Available Mon - Fri',
          href: 'tel:0321605040',
          actionText: 'Call the office',
        },
        {
          icon: '/clarte.svg',
          label: 'Email',
          value: 'contact@manonfontaine-avocat.fr',
          subValue: 'Response within 24h to 48h',
          href: 'mailto:contact@manonfontaine-avocat.fr',
          actionText: 'Send an email',
        },
        {
          icon: '/cursors/balance.svg',
          label: 'Office Location',
          value: 'Arras (62000)',
          subValue: 'Barreau d’Arras',
          href: 'https://maps.app.goo.gl/rHTXmDtdpmbbXmRUA',
          actionText: 'View on Google Maps',
        },
      ],
      access: {
        title: 'Practical Information',
        addressTitle: 'Address & Access',
        addressText: [
          'Cabinet de Maître Manon Fontaine',
        '49 Rue Frédéric Degeorge, ',
          '62000 Arras, France',
        ],
        scheduleTitle: 'Opening Hours',
        scheduleText: [
          'Monday to Friday: 9:00 AM – 6:00 PM',
          'Saturday & Sunday: Closed',
        ],
        appointmentNote: 'Consultations are strictly by appointment only.',
      },
    };
  }

  if (locale === 'it') {
    return {
      hero: {
        eyebrow: 'Contatti',
        title: 'Contatta lo Studio',
        description: 'Per qualsiasi richiesta o per fissare una consulenza, potete contattare lo studio via telefono o email.',
      },
      channels: [
        {
          icon: '/bouclier.svg',
          label: 'Telefono',
          value: '03 21 60 50 40',
          subValue: 'Disponibile Lun - Ven',
          href: 'tel:0321605040',
          actionText: 'Chiama lo studio',
        },
        {
          icon: '/clarte.svg',
          label: 'Email',
          value: 'contact@manonfontaine-avocat.fr',
          subValue: 'Risposta entro 24h / 48h',
          href: 'mailto:contact@manonfontaine-avocat.fr',
          actionText: 'Invia un\'email',
        },
        {
          icon: '/cursors/balance.svg',
          label: 'Studio',
          value: 'Arras (62000)',
          subValue: '49 rue Frédéric Degeorge, Arras',
          href: 'https://maps.app.goo.gl/rHTXmDtdpmbbXmRUA',
          actionText: 'Apri su Google Maps',
        },
      ],
      access: {
        title: 'Informazioni Pratiche',
        addressTitle: 'Indirizzo e Accesso',
        addressText: [
          'Studio Legale Manon Fontaine',
          '49 Rue Frédéric Degeorge, ',
          '62000 Arras, Francia',
        ],
        scheduleTitle: 'Orari di Ricevimento',
        scheduleText: [
          'Dal lunedì al venerdì: 9:00 – 18:00',
          'Sabato e domenica: Chiuso',
        ],
        appointmentNote: 'Si riceve esclusivamente su appuntamento.',
      },
    };
  }

  // Version Française par défaut
  return {
    hero: {
      eyebrow: 'Prendre contact',
      title: 'Contacter le cabinet',
      description: 'Pour toute demande d’information ou prise de rendez-vous, vous pouvez joindre directement le cabinet par téléphone ou par email.',
    },
    channels: [
      {
        icon: '/bouclier.svg',
        label: 'Téléphone',
        value: '03 21 60 50 40',
        subValue: 'Du lundi au vendredi',
        href: 'tel:0321605040',
        actionText: 'Appeler le cabinet',
      },
      {
        icon: '/clarte.svg',
        label: 'Adresse email',
        value: 'contact@manonfontaine-avocat.fr',
        subValue: 'Réponse sous 24h à 48h',
        href: 'mailto:contact@manonfontaine-avocat.fr',
        actionText: 'Envoyer un email',
      },
      {
        icon: '/cursors/balance.svg',
        label: 'Cabinet',
        value: 'Arras (62000)',
        subValue: '49 rue Frédéric Degeorge, Barreau d’Arras',
        href: 'https://maps.app.goo.gl/rHTXmDtdpmbbXmRUA',
        actionText: 'Voir sur Google Maps',
      },
    ],
    access: {
      title: 'Informations pratiques',
      addressTitle: 'Adresse & Accès',
      addressText: [
        'Cabinet de Maître Manon Fontaine 49 Rue Frédéric Degeorge, ',
        '62000 Arras',
      ],
      scheduleTitle: 'Horaires d’accueil',
      scheduleText: [
        'Du lundi au vendredi : 9h00 – 18h00',
        'Samedi et dimanche : Fermé',
      ],
      appointmentNote: 'Les consultations ont lieu exclusivement sur rendez-vous.',
    },
  };
};

export const photoContactSrc = (locale: string = 'fr'): { imageSrc: string; imageAlt: string } => {
  
  if (locale === 'en') {
    return {
      imageSrc: '/doe.jpg',
      imageAlt: 'Maitre Fontaine, back view, looking towards the judge in the courtroom.',
    };
  }
  if (locale === 'it') {
    return {
      imageSrc: '/doe.jpg',
      imageAlt: 'Avvocato Fontaine, vista posteriore, che guarda verso il giudice in tribunale.',
    };
  }
  // Version Française par défaut
  return {
    imageSrc: '/doe.jpg',
    imageAlt: 'Maitre Fontaine, vue de dos, en train de regarder vers le juge du tribunal.',
  };
}
