// app/not-found.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-lawyer-gold px-6 py-24">
      <div className="text-center max-w-xl">
        <p className="text-base md:text-5xl font-bold text-lawyer-green tracking-wide uppercase">
          Erreur 404
        </p>
        <Image 
                        src="cursors/404.svg" 
                        alt="Page non trouvée" 
                        width={180}   
                        height={180} 
                        className="mx-auto mt-6" 
                       
                      />
        <h1 className="mt-4 text-4xl font-serif font-bold text-lawyer-black sm:text-5xl tracking-tight">
          Cette page n'existe pas
        </h1>
        
        <p className="mt-6 text-base leading-relaxed text-white font-sans">
          L'adresse demandée est introuvable ou a été déplacée. Rassurez-vous, 
          le cabinet reste à votre entière disposition pour défendre vos droits.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto bg-lawyer-green hover:brightness-110 text-white px-6 py-3.5 rounded-sm font-sans font-medium transition shadow-sm text-center"
          >
            Retourner à l'accueil
          </Link>
          
          <Link
            href="/contact"
            className="w-full sm:w-auto border border-lawyer-green text-lawyer-green bg-white hover:bg-lawyer-beige px-6 py-3.5 rounded-sm font-sans font-medium transition text-center"
          >
            Contacter le cabinet
          </Link>
        </div>
      </div>
    </main>
  );
}
