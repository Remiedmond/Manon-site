import { Metadata } from 'next'
import PageHero from "@/app/components/PageHero";
import { getTranslations } from 'next-intl/server';

// 1. Un SEO unique pour cette page spécifique
export const metadata: Metadata = {
  title: 'Le Cabinet de Maître Fontaine',
  description: 'Découvrez le parcours de Maître Manon Fontaine, avocate installée au cœur d’Arras. Une approche humaine et transparente pour la défense de vos droits.',
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('Contact');
  return (
    <main className="bg-white">
        <PageHero
            eyebrow={t('eyebrow')}
            title={t('title')}
            description={t('description')}
        />
      {/* Contenu principal */}
      <section className="max-w-4xl mx-auto py-16 px-6 font-sans text-lawyer-black">
        <p className="text-lg leading-relaxed mb-6">
          Un accompagnement juridique de qualité ancré dans le tissu local arrageois.
        </p>
        
        {/* Tu pourras insérer ici l'historique ou la frise chronologique de ton parcours professionnel */}
      </section>
    </main>
  )
}