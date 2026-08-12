import { Metadata } from 'next';
import PageHero from "@/app/components/PageHero";
import Appel from '@/app/components/Appel';
import DomainesSection from '@/app/components/DomainesSection';
import { PracticeAreasData } from './data';

// 1. Metadata SEO ultra-opti
export const metadata: Metadata = {
  title: 'Domaines d’intervention | Maître Manon Fontaine - Avocat',
  description: 'Cabinet de Maître Manon Fontaine : Expertise juridique en Droit Civil, Droit du Travail et Droit Immobilier. Conseils, négociations et défense devant les juridictions.',
  keywords: [
    'Avocat droit civil',
    'Avocat droit du travail',
    'Avocat droit immobilier',
    'Maître Manon Fontaine',
    'Cabinet avocat divorce',
    'Prudhommes avocat',
  ],
  openGraph: {
    title: 'Domaines d’intervention | Maître Manon Fontaine - Avocat',
    description: 'Expertise juridique en Droit Civil, Droit du Travail et Droit Immobilier.',
    type: 'website',
  },
};

export default function DomainesInterventionPage() {
  // 2. Structured Data Schema.org (LegalService / Attorney)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Attorney',
    'name': 'Maître Manon Fontaine',
    'description': 'Cabinet d’avocat spécialisé en Droit Civil, Droit du Travail et Droit Immobilier.',
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Domaines d’intervention juridique',
      'itemListElement': PracticeAreasData.map((area) => ({
        '@type': 'OfferCatalog',
        'name': area.title,
        'itemListElement': area.services.map((service) => ({
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': service,
          },
        })),
      })),
    },
  };

  return (
    <main className="bg-white">
      {/* Script JSON-LD pour les moteurs de recherche */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="Découvrez tous les domaines d'intervention de Maître Fontaine"
        title="Les domaines d'intervention"
        description="Les domaines d'intervention de Maître Fontaine. Une expertise complète pour répondre à vos besoins juridiques."
      />

      {/* Composant principal des cartes de prestations */}
      <DomainesSection />

      {/* Section Call To Action / Prise de RDV */}
      <section>
        <Appel />
      </section>
    </main>
  );
}
