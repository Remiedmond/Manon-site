"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";
import { getConventionData } from "../[locale]/honoraires/data"; 

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

interface EngagementsProps {
  isSidebarOpen?: boolean;
}

export default function Convention({ isSidebarOpen = false }: EngagementsProps) {
  const locale = useLocale();
  const data = getConventionData(locale);

  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [animationKey, setAnimationKey] = useState(0);

  // Clip de l'image fixe aux bornes de la section
  useEffect(() => {
    const updateClip = () => {
      if (!sectionRef.current || !bgRef.current) return;
      const { top, left, bottom, right } = sectionRef.current.getBoundingClientRect();
      bgRef.current.style.clipPath = `inset(${Math.max(0, top)}px ${
        window.innerWidth - right
      }px ${window.innerHeight - Math.min(window.innerHeight, bottom)}px ${left}px)`;
    };

    updateClip();
    window.addEventListener("scroll", updateClip, { passive: true });
    window.addEventListener("resize", updateClip);

    return () => {
      window.removeEventListener("scroll", updateClip);
      window.removeEventListener("resize", updateClip);
    };
  }, []);

  // Recalcul quand la sidebar toggle
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationKey((k) => k + 1);
      if (!sectionRef.current || !bgRef.current) return;
      const { top, left, bottom, right } = sectionRef.current.getBoundingClientRect();
      bgRef.current.style.clipPath = `inset(${Math.max(0, top)}px ${
        window.innerWidth - right
      }px ${window.innerHeight - Math.min(window.innerHeight, bottom)}px ${left}px)`;
    }, 320);
    return () => clearTimeout(timer);
  }, [isSidebarOpen]);

  return (
    <section ref={sectionRef} className="relative">
      {/* Image fixe clippée aux dimensions de la section */}
      <div
        ref={bgRef}
        className="fixed inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      >
        <Image
          src={data.imageSrc}
          alt={data.imageAlt}
          fill
          className="object-cover opacity-[0.9]"
          priority
        />
      </div>

      {/* Contenu au-dessus */}
      <div className="relative z-10 mx-auto">
        <motion.div
          key={`header-${animationKey}`}
          className="text-center flex flex-row w-full"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
            {/* Bloc 1 : Convention d'honoraires */}
            <div className="relative overflow-hidden w-full h-full">
              <div className="absolute inset-0 bg-lawyer-black opacity-70"></div>
              <div className="px-8 sm:px-16 md:px-20 lg:px-28 py-12 md:py-16 h-full flex flex-col relative z-10 justify-center items-start text-white">
                <h3 className="text-xl md:text-2xl font-serif leading-tight mb-3">
                  {data.agreement.title}
                </h3>
                <p className="text-sm text-left font-sans mb-4">
                  {data.agreement.intro}
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm font-sans text-left mb-4 leading-relaxed">
                  {data.agreement.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                {data.agreement.conclusion && (
                  <p className="text-sm text-left font-sans text-gray-200">
                    {data.agreement.conclusion}
                  </p>
                )}
              </div>
            </div>

            {/* Bloc 2 : Provisions sur honoraires */}
            <div className="relative overflow-hidden w-full h-full">
              <div className="absolute inset-0 bg-white opacity-90"></div>
              <div className="px-8 sm:px-16 md:px-20 lg:px-28 py-12 md:py-16 h-full w-full flex flex-col relative z-10 justify-center items-start text-lawyer-black">
                <h3 className="text-xl md:text-2xl font-serif text-lawyer-green leading-tight mb-3">
                  {data.retainer.title}
                </h3>
                <p className="text-sm text-left font-sans mb-4">
                  {data.retainer.intro}
                </p>
                <ul className="space-y-3 w-full">
                  {data.retainer.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Image
                        src="/checkvert.png"
                        alt=""
                        width={20}
                        height={20}
                        className="w-5 h-5 shrink-0 mt-0.5 object-contain"
                      />
                      <span className="font-sans text-sm text-left">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
