'use client';

import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { getContactData, photoContactSrc } from '../[locale]/contact/data';

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ContactDetails() {
  const locale = useLocale();
  const data = getContactData(locale);
  const dataPhoto = photoContactSrc(locale);

  return (
    <section className="bg-lawyer-beige py-12 md:py-20 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ── 1. Les 3 Cartes de Contact Direct ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {data.channels.map((channel, i) => (
            <motion.a
              key={i}
              href={channel.href}
              target={channel.href.startsWith('http') ? '_blank' : undefined}
              rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-sm shadow-md hover:shadow-xl transition-all border border-gray-100 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 bg-lawyer-green/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-lawyer-green transition-colors">
                  <Image
                    src={channel.icon}
                    alt=""
                    width={28}
                    height={28}
                    className="w-7 h-7 object-contain group-hover:brightness-0 group-hover:invert transition-all"
                  />
                </div>

                <span className="text-xs uppercase tracking-wider font-semibold text-gray-400">
                  {channel.label}
                </span>
                <p className="text-lg md:text-xl font-serif font-bold text-slate-900 mt-1">
                  {channel.value}
                </p>
                {channel.subValue && (
                  <p className="text-xs text-gray-500 mt-1">{channel.subValue}</p>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-lawyer-green font-semibold text-sm group-hover:text-lawyer-gold transition-colors">
                <span>{channel.actionText}</span>
                <span>→</span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* ── 2. Informations pratiques & Accès ── */}
        <motion.div
          className="bg-white p-8 md:p-12 rounded-sm shadow-md border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Adresse & Accès */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-lawyer-green">
              {data.access.addressTitle}
            </h3>
            <div className="text-gray-700 text-sm md:text-base leading-relaxed space-y-1 font-sans">
              {data.access.addressText.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
            <div className="pt-2">
              <span className="inline-block bg-lawyer-gold/15 text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-sm">
                 {data.access.appointmentNote}
              </span>
            </div>
          </div>

          {/* Horaires d'accueil */}
          <div className="space-y-4 md:border-l md:border-gray-100 md:pl-10">
            <h3 className="text-2xl font-serif font-bold text-lawyer-green">
              {data.access.scheduleTitle}
            </h3>
            <div className="text-gray-700 text-sm md:text-base leading-relaxed space-y-1 font-sans">
              {data.access.scheduleText.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      <div className="flex justify-center max-w-[85%] mx-auto  mt-6 md:mt-20">
        {/* Conteneur image avec le carré décoratif */}
               <motion.div
                className="relative w-full mt-10 md:mt-0"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image 
                            src={dataPhoto.imageSrc}
                            alt={dataPhoto.imageAlt}
                            width={200}   
                            height={200} 
                            className="h-full w-full object-cover rounded-l shadow-md" 
                          />
                
              </motion.div>
      </div>
    </section>
  );
}