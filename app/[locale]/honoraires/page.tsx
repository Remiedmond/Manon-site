import { Metadata } from 'next'
import PageHero from "@/app/components/PageHero";
import { motion } from "framer-motion";
import Article from "@/app/components/Article";
import Appel from '@/app/components/Appel'
import Facturation from '@/app/components/Facturation'
import Aidejuridi from '@/app/components/Aidejuridi'
import Rdv from '@/app/components/Rdv'
import Convention from '@/app/components/Convention'
import Asavoir from '@/app/components/Asavoir'
import { getTranslations } from 'next-intl/server';
import { getHonorairesData } from './data';
import PhotoGallery from '@/app/components/PhotoGallery';


// 1. Un SEO unique pour cette page spécifique
export const metadata: Metadata = {
  title: 'Les Honoraires de Maître Fontaine',
  description: 'Découvrez les honoraires de Maître Manon Fontaine, avec les meilleurs tarifs adaptés à vos besoins.',
}

export default async function HonorairesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('lesHonoraires');
  return (
    <main className="bg-white">
        <PageHero
            eyebrow={t('eyebrow')}
            title={t('title')}
            description={t('description')}
        />

            <Article /> 
            <Facturation />
            <Convention />
            <Aidejuridi />
            <PhotoGallery />
            <Rdv />
            <Appel />
            <Asavoir />
    </main>
  )
}