import Image from "next/image";
import Presentation from '@/app/components/Presentation'
import Domaineint from '@/app/components/Doint'
import Engagements from '@/app/components/Engagements'
import Appel from '@/app/components/Appel'

// app/page.tsx
export default function Home() {
  return (
    <main>

<section className="relative text-white py-24 overflow-hidden">

  {/* Image de fond */}
  <Image
    src="/cabinet3.png"
    alt="Cabinet d'avocat Maître Fontaine"
    fill
    priority
    className="object-cover"
    
  />

  {/* Dégradé vert : plein à gauche, transparent à droite */}
  <div className="absolute inset-0 bg-gradient-to-r from-lawyer-green from-40% via-lawyer-green/90 to-lawyer-green/60" />

  {/* Contenu au-dessus */}
  <div className="relative z-10 max-w-[85%] md:max-w-[85%] mx-auto flex flex-col md:flex-row items-center gap-12">
    
    <div className="mx-auto md:w-4/5 text-center md:text-left">
      <h1 className="text-3xl md:text-7xl font-serif leading-tight mb-8">
        Un accompagnement juridique sur mesure à Arras 
      </h1>
      
      <p className="font-sans max-w-2xl text-lawyer-beige text-lg md:text-xl mb-10 leading-relaxed">
        Maître Manon Fontaine vous conseille et vous défend avec clarté, 
        confidentialité et réactivité au cœur du tissu local arrageois.
      </p>

      <div className="flex flex-wrap gap-5">
        <button className="align-center bg-lawyer-gold hover:brightness-110 text-white px-8 py-4 rounded-sm font-bold transition shadow-lg">
          Prendre contact 
        </button>
        
        <button className="border border-lawyer-beige text-lawyer-beige hover:bg-white/5 px-8 py-4 rounded-sm font-bold transition">
          Le Cabinet 
        </button>
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