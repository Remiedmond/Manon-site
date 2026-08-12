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

// 1. Un SEO unique pour cette page spécifique
export const metadata: Metadata = {
  title: 'Les Honoraires de Maître Fontaine',
  description: 'Découvrez les honoraires de Maître Manon Fontaine, avec les meilleurs tarifs adaptés à vos besoins.',
}

export default function CabinetPage() {
  return (
    <main className="bg-white">
            <PageHero
                eyebrow="Découvrez les honoraires de Maître Fontaine"
                title="Honoraires et informations pratiques"
                description="Transparence, clarté et accessibilité dans la tarification de mes prestations"
            />

            <Article /> 
            <Facturation />
            <Convention />
            <Aidejuridi />
            <Rdv />
            <Appel />
            <Asavoir />
    </main>
  )
}