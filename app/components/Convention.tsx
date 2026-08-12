"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import Image from "next/image";


// Variants pour le header
const headerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};



interface EngagementsProps {
  isSidebarOpen: boolean;
}

export default function Convention({ isSidebarOpen }: EngagementsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [animationKey, setAnimationKey] = useState(0);

  // ── Clip de l'image fixe aux bornes de la section ──
  useEffect(() => {
    const updateClip = () => {
      if (!sectionRef.current || !bgRef.current) return;
      const { top, left, bottom, right } = sectionRef.current.getBoundingClientRect();
      bgRef.current.style.clipPath = `inset(${Math.max(0, top)}px ${window.innerWidth - right}px ${window.innerHeight - Math.min(window.innerHeight, bottom)}px ${left}px)`;
    };

    updateClip();
    window.addEventListener("scroll", updateClip, { passive: true });
    window.addEventListener("resize", updateClip);

    return () => {
      window.removeEventListener("scroll", updateClip);
      window.removeEventListener("resize", updateClip);
    };
  }, []);

  // ── Recalcul quand la sidebar toggle ──
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationKey((k) => k + 1);
      if (!sectionRef.current || !bgRef.current) return;
      const { top, left, bottom, right } = sectionRef.current.getBoundingClientRect();
      bgRef.current.style.clipPath = `inset(${Math.max(0, top)}px ${window.innerWidth - right}px ${window.innerHeight - Math.min(window.innerHeight, bottom)}px ${left}px)`;
    }, 320);
    return () => clearTimeout(timer);
  }, [isSidebarOpen]);

  return (
    <section ref={sectionRef} className="relative">

      {/* ── Image fixe clippée aux dimensions de la section ── */}
      <div
        ref={bgRef}
        className="fixed inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      >
        <Image
          src="/cabinet3.png"
          alt="Cabinet juridique"
          fill
          className="object-cover opacity-[0.9]"
          priority
        />
      </div>

      {/* ── Contenu au-dessus ── */}
      <div className=" relative z-10  mx-auto">

        <motion.div
          key={`header-${animationKey}`}
          className="text-center flex flex-row w-full"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
        >
            
            <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">

  {/* Bloc 1 */}
  <div className="relative overflow-hidden w-full h-full">
    <div className="absolute inset-0 bg-lawyer-black opacity-70"></div>
    <div className=" px-28 py-8 h-full flex flex-col relative z-10 justify-center items-start">
      <h3 className="text-xl md:text-2xl font-serif text-white leading-tight mb-3">
        Convention d'honoraires
      </h3>
      <p className="md:text-s text-sm text-left font-sans text-white">
        Avant toute intervention, nous signons ensemble une convention d'honoraires qui précise :
      </p>
      <ul className="mt-4 list-disc list-inside flex-1 text-white">
        <li className="font-sans text-s text-left text-sm mb-1 leading-relaxed">La nature de la mission confiée</li>
        <li className="font-sans text-s text-left text-sm mb-1 leading-relaxed">Le mode de calcul des honoraires</li>
        <li className="font-sans text-s text-left text-sm mb-1 leading-relaxed">Les modalités de paiement</li>
        <li className="font-sans text-s text-left text-sm mb-1 leading-relaxed">Les éventuels frais et débours</li>
      </ul>
      <p className="md:text-s text-sm text-left font-sans text-white">
        Cette convention vous protège et garantit la clarté de notre relation professionnelle.
      </p>
    </div>
  </div>

  {/* Bloc 2 */}
  <div className="relative overflow-hidden w-full h-full">
    <div className="absolute inset-0 bg-white opacity-90"></div>
    <div className="px-28 py-8 h-full w-full flex flex-col relative z-10 justify-center items-start">
      <h3 className="text-xl md:text-2xl font-serif text-lawyer-green leading-tight mb-3">
        Provisions sur honoraires
      </h3>
      <p className="text-s text-sm text-left font-sans text-lawyer-black">
        Pour la plupart des missions, une provision (avance) vous sera demandée avant le début de l'intervention.
      </p>
      <ul className="mt-4 mx-auto w-fit space-y-2 text-lawyer-black">
  <li className="flex items-start gap-3">
    <img src="/checkvert.png" alt="checkvert" className="w-5 h-5 shrink-0 mt-0.5 object-contain" />
    <span className="font-sans text-sm">
      Les provisions sont systématiquement versées sur un compte dédié (CARPA)
    </span>
  </li>
  <li className="flex items-start gap-3">
    <img src="/checkvert.png" alt="checkvert" className="w-5 h-5 shrink-0 mt-0.5 object-contain" />
    <span className="font-sans text-sm">
      Elles permettent de garantir le paiement des frais et honoraires
    </span>
  </li>
  <li className="flex items-start gap-3">
    <img src="/checkvert.png" alt="checkvert" className="w-5 h-5 shrink-0 mt-0.5 object-contain" />
    <span className="font-sans text-sm">
      Un décompte détaillé vous est fourni à l'issue de la mission
    </span>
  </li>
  <li className="flex items-start gap-3">
    <img src="/checkvert.png" alt="checkvert" className="w-5 h-5 shrink-0 mt-0.5 object-contain" />
    <span className="font-sans text-sm">
      Tout solde éventuel vous est restitué
    </span>
  </li>
</ul>

    </div>
  </div>

</div>
        </motion.div>
      </div>
    </section>
  );
}
