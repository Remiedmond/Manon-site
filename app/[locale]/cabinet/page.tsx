import { Metadata } from 'next'
import PageHero from "@/app/components/PageHero";
import Presentationcontact from "@/app/components/Presentationcontact";
import Parcourspro from "@/app/components/Parcourspro";
import Appel from '@/app/components/Appel'
import Vision from '@/app/components/Vision'
import Rappel from '@/app/components/Rappel'
import { getTranslations } from 'next-intl/server';

// 1. Un SEO unique pour cette page spécifique
export const metadata: Metadata = {
  title: 'Le Cabinet de Maître Fontaine',
  description: 'Découvrez le parcours de Maître Manon Fontaine, avocate installée au cœur d’Arras. Une approche humaine et transparente pour la défense de vos droits.',
}

export default async function CabinetPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('LeCabinet');
  return (
    <main className="bg-white">
        <PageHero
            eyebrow={t('eyebrow')}
            title={t('title')}
            description={t('description')}
        />
      

      {/* Contenu principal */}
      <section >
        <Presentationcontact />
        <Parcourspro />
        <Vision />
        <Rappel />
        <Appel />
      </section>
    </main>
  )
}

