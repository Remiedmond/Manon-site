'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { getPracticeAreasData } from '../[locale]/domaines-d-intervention/data';
import { useLocale } from 'next-intl';

// Variantes d'animation
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.21, 0.47, 0.32, 0.98], // Cubic-bezier très propre
    },
  },
};

const listContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export default function DomainesSection() {
  // 1. Récupère la langue active ('fr' ou 'en')
  const locale = useLocale();

  // 2. Charge les données traduites
  const practiceAreas = getPracticeAreasData(locale);
  
  return (
    <section className=" bg-lawyer-gold overflow-hidden">
      <div className="md:max-w-[80%] py-8 mx-auto px-4 sm:px-6 space-y-20 md:space-y-28">
        {practiceAreas.map((area) => {
          const isImageLeft = area.layout === 'image-left';

          return (
            <motion.article
              key={area.id}
              id={area.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className={`p-6 md:p-10 rounded-xl bg-lawyer-beige transition-all duration-300 ${
                isImageLeft ? '' : 'bg-lawyer-beige/90'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* Colonne Titre + Subtitle + Image */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isImageLeft ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <motion.div 
                      whileHover={{ scale: 1.08, rotate: 3 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="p-3 bg-lawyer-green rounded-md inline-flex items-center justify-center text-white w-12 h-12 shadow-sm"
                    >
                      <Image
                        src={area.iconSrc}
                        alt=""
                        width={24}
                        height={24}
                        className="invert brightness-0"
                      />
                    </motion.div>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-lawyer-black leading-tight">
                    {area.title}
                  </h2>

                  <p className="text-lawyer-green text-base md:text-lg leading-relaxed">
                    {area.subtitle}
                  </p>

                  {/* Wrapper Image avec effet de zoom au survol */}
                  <motion.div 
                    className="relative pt-4 pr-4 group cursor-pointer"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative w-full h-64 sm:h-80 overflow-hidden rounded-sm shadow-md">
                      <Image
                        src={area.imageSrc}
                        alt={area.imageAlt}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                    {/* Accents décoratifs animés aux coins */}
                    <motion.div 
                      className="absolute top-0 right-0 w-6 h-6 bg-lawyer-green"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div 
                      className="absolute bottom-0 left-0 w-6 h-6 bg-lawyer-green"
                      whileHover={{ scale: 1.2 }}
                    />
                  </motion.div>
                </div>

                {/* Colonne Prestations & Approche */}
                <div
                  className={`lg:col-span-6 space-y-8 flex flex-col justify-between h-full ${
                    isImageLeft ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-lawyer-green mb-4">
                      {area.prestationsproposees}
                    </h3>
                    
                    {/* Liste animée élément par élément */}
                    <motion.ul 
                      className="space-y-2.5"
                      variants={listContainerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {area.services.map((service, idx) => (
                        <motion.li 
                          key={idx} 
                          variants={listItemVariants}
                          className="flex items-start gap-2 text-gray-700"
                        >
                          <span className="text-lawyer-green font-bold">•</span>
                          <span className="text-sm md:text-base">{service}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>

                  {/* Bloc Mon Approche avec effet Hover subtil */}
                  <motion.div 
                    whileHover={{ x: 6 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                    className="p-6 bg-white/90 border-l-4 border-lawyer-green rounded-r-md shadow-sm mt-6 transition-shadow duration-300 hover:shadow-md"
                  >
                    <h4 className="text-lg font-serif font-semibold text-lawyer-green mb-2">
                      {area.monapproche}
                    </h4>
                    <p className="text-lawyer-green text-sm md:text-base leading-relaxed italic">
                      {area.approach}
                    </p>
                  </motion.div>
                </div>

              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
