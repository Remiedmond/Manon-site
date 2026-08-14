import { Metadata } from 'next';
import PageHero from "@/app/components/PageHero";
import Appel from '@/app/components/Appel';
import DomainesSection from '@/app/components/DomainesSection';
import { getPracticeAreasData } from './data'; // <-- Import de la fonction mise à jour
import { getTranslations } from 'next-intl/server';

// 1. Metadata SEO dynamiques selon la langue (FR / EN)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'DomainesPage' });

  return {
    title: `${t('title')} | Maître Manon Fontaine - Avocat`,
    description: t('description'),
    keywords: [
      'Avocat droit civil',
      'Avocat droit du travail',
      'Avocat droit immobilier',
      'Maître Manon Fontaine',
      'Cabinet avocat divorce',
      'Prudhommes avocat',
    ],
    openGraph: {
      title: `${t('title')} | Maître Manon Fontaine - Avocat`,
      description: t('description'),
      type: 'website',
    },
  };
}

// 2. Le Composant de la Page
export default async function DomainesInterventionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('DomainesPage');

  // On récupère les données traduites selon la locale pour le Schema.org
  const practiceAreas = getPracticeAreasData(locale);

  // Structured Data Schema.org (LegalService / Attorney) dynamique
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Attorney',
    'name': 'Maître Manon Fontaine',
    'description': t('description'),
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': locale === 'en' ? 'Legal Practice Areas' : 'Domaines d’intervention juridique',
      'itemListElement': practiceAreas.map((area) => ({
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

      {/* Hero traduit dynamiquement */}
      <PageHero
        eyebrow={t('eyebrow')}
        title={t('title')}
        description={t('description')}
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