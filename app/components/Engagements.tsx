"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";
import { getEngagementsData, type EngagementItem } from "../[locale]/dato"; // Ajuste le chemin vers ton data.ts

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

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

function EngagementCard({ title, icon, description }: EngagementItem) {
  return (
    <motion.div
      variants={cardVariants}
      className="group flex flex-col items-start p-6 rounded-2xl bg-white border border-lawyer-green/10 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      {/* Icône dans un cercle */}
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-lawyer-beige border-2 border-lawyer-green mb-5 transition-transform duration-300 group-hover:scale-105 shrink-0">
        <Image
          src={icon}
          alt=""
          aria-hidden="true"
          width={32}
          height={32}
          className="w-8 h-8 object-contain"
        />
      </div>

      {/* Titre */}
      <h3 className="font-serif text-xl text-lawyer-green mb-3">{title}</h3>

      {/* Séparateur */}
      <div className="w-8 h-0.5 bg-lawyer-green/30 mb-3 transition-all duration-300 group-hover:w-14 group-hover:bg-lawyer-green/60" />

      {/* Description */}
      <p className="text-sm leading-relaxed text-lawyer-black/75">{description}</p>
    </motion.div>
  );
}

interface EngagementsProps {
  isSidebarOpen?: boolean;
}

export default function Engagements({ isSidebarOpen = false }: EngagementsProps) {
  const locale = useLocale();
  const data = getEngagementsData(locale);

  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [animationKey, setAnimationKey] = useState(0);

  // Clip de l'image fixe aux dimensions de la section
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
    <section ref={sectionRef} className="relative bg-white py-20 px-6">
      {/* Image fixe clippée */}
      <div
        ref={bgRef}
        className="fixed inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      >
        <Image
          src={data.bgImageSrc}
          alt=""
          fill
          className="object-cover opacity-[0.56]"
          priority
        />
      </div>

      {/* Contenu */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          key={`header-${animationKey}`}
          className="text-center mb-14"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
        >
          <h2 className="text-2xl md:text-4xl font-serif text-lawyer-green leading-tight mb-3">
            {data.title}
          </h2>
          <p className="text-base md:text-lg font-sans text-lawyer-black/70">
            {data.subtitle}
          </p>
        </motion.div>

        <motion.div
          key={`grid-${animationKey}`}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-lawyer-black"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {data.items.map((item) => (
            <EngagementCard key={item.title} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
