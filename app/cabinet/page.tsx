import { Metadata } from 'next'
import PageHero from "@/app/components/PageHero";
import Presentationcontact from "@/app/components/Presentationcontact";
import Parcourspro from "@/app/components/Parcourspro";
import Appel from '@/app/components/Appel'
import Vision from '@/app/components/Vision'
import Rappel from '@/app/components/Rappel'

// 1. Un SEO unique pour cette page spécifique
export const metadata: Metadata = {
  title: 'Le Cabinet de Maître Fontaine',
  description: 'Découvrez le parcours de Maître Manon Fontaine, avocate installée au cœur d’Arras. Une approche humaine et transparente pour la défense de vos droits.',
}

export default function CabinetPage() {
  return (
    <main className="bg-white">
        <PageHero
            eyebrow="Découvrez l'histoire"
            title="Le Cabinet"
            description="Un accompagnement juridique de qualité, ancré dans le tissu local arrageois depuis 2025"
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