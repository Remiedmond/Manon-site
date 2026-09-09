import { Metadata } from 'next';
import PageHero from '@/app/components/PageHero';
import ContactDetails from '@/app/components/ContactSection';
import { getContactData } from './data';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const data = getContactData(locale);

  return {
    title: `${data.hero.title} | Maître Manon Fontaine - Avocat`,
    description: data.hero.description,
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = getContactData(locale);

  // Schema.org local pour référencement Google Maps / Avocat
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Attorney',
    name: 'Maître Manon Fontaine',
    telephone: '0321000000',
    email: 'contact@manonfontaine-avocat.fr',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Arras',
      addressCountry: 'FR',
    },
  };

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow={data.hero.eyebrow}
        title={data.hero.title}
        description={data.hero.description}
      />

      <ContactDetails />
    </main>
  );
}