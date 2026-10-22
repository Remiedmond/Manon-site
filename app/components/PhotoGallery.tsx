'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { getHonorairesGalleryData } from '../[locale]/honoraires/data';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HonorairesGallery() {
  const locale = useLocale();
  const data = getHonorairesGalleryData(locale);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Détection de la carte active lors du scroll
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth } = scrollRef.current;
    const itemWidth = scrollWidth / data.photos.length;
    const newIndex = Math.round(scrollLeft / itemWidth);
    setActiveIndex(newIndex);
  };

  const scrollToImage = (index: number) => {
    if (!scrollRef.current) return;
    const itemWidth = scrollRef.current.scrollWidth / data.photos.length;
    scrollRef.current.scrollTo({
      left: itemWidth * index,
      behavior: 'smooth',
    });
  };

  return (
    <section className="bg-lawyer-beige py-8 md:py-16 text-slate-900 border-t border-gray-100">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Version Mobile : Carrousel avec affordance UX ── */}
        <div className="md:hidden">
          
          {/* Header mobile discret avec compteur */}
          <div className="flex items-center justify-between mb-3 px-1">
            
            <span className="text-xs font-serif font-bold text-lawyer-green bg-white px-2 py-0.5 rounded-full shadow-sm">
              {activeIndex + 1} / {data.photos.length}
            </span>
          </div>

          {/* Rail de défilement horizontal avec aperçu de la photo suivante */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex flex-row gap-3 overflow-x-auto snap-x snap-mandatory pb-3 scrollbar-hide -mx-4 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {data.photos.map((photo, index) => (
              <div
                key={index}
                className="flex-none w-[82vw] h-80 relative overflow-hidden rounded-2xl shadow-md snap-center bg-gray-100"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="82vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Indicateurs interactifs (dots cliquables) */}
          <div className="flex justify-center items-center gap-1.5 mt-3">
            {data.photos.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToImage(i)}
                aria-label={`Afficher la photo ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === i
                    ? 'w-6 h-2 bg-lawyer-green'
                    : 'w-2 h-2 bg-lawyer-green/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── Version Desktop : Grille asymétrique 3 colonnes inchangée ── */}
        <motion.div
          className="hidden md:grid md:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {data.photos.map((photo, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative overflow-hidden rounded-3xl shadow-sm bg-gray-100 group ${photo.spanClass} ${photo.heightClass}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
