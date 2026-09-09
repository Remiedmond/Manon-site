import Image from "next/image";
import Presentation from '@/app/components/Presentation'
import Domaineint from '@/app/components/Doint'
import Engagements from '@/app/components/Engagements'
import Appel from '@/app/components/Appel'
import { Metadata } from 'next'
import Link from "next/link";
import {getHomeHeroData} from "../[locale]/dato";

// app/page.tsx

// 1. Metadata SEO dynamiques pour la page d'accueil
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const data = getHomeHeroData(locale);

  return {
    title: `${data.title} | Maître Manon Fontaine - Avocat`,
    description: data.description,
  };
}

// 2. Page d'accueil
export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const heroData = getHomeHeroData(locale);

  return (
    <main className="bg-white">
      {/* ── Section Hero ── */}
      <section className="relative text-white py-24 md:py-32 overflow-hidden">
        {/* Image de fond */}
        <Image
          src={heroData.bgImageSrc}
          alt={heroData.bgImageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Dégradé vert : plein à gauche, transparent à droite */}
        <div className="absolute inset-0 bg-gradient-to-r from-lawyer-green from-40% via-lawyer-green/90 to-lawyer-green/60" />

        {/* Contenu au-dessus */}
        <div className="relative z-10 max-w-[85%] mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="mx-auto md:w-4/5 text-center md:text-left">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-tight mb-8">
              {heroData.title}
            </h1>

            <p className="font-sans max-w-2xl text-lawyer-beige text-base sm:text-lg md:text-xl mb-10 leading-relaxed mx-auto md:mx-0">
              {heroData.description}
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-5">
              <Link
                href={heroData.contactBtnHref}
                className="bg-lawyer-gold hover:brightness-110 text-white px-8 py-4 rounded-sm font-semibold transition shadow-lg text-sm sm:text-base"
              >
                {heroData.contactBtnText}
              </Link>

              <Link
                href={heroData.cabinetBtnHref}
                className="border border-lawyer-beige text-lawyer-beige hover:bg-white/10 px-8 py-4 rounded-sm font-semibold transition text-sm sm:text-base"
              >
                {heroData.cabinetBtnText}
              </Link>
            </div>
          </div>

          <div className="md:w-2/5 hidden md:block" />
        </div>
      </section>
      <Presentation />
      <Domaineint />
      <Engagements /> 
      <Appel />
    </main>
  );
}