"use client";

import { useRef } from "react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";
import { getBillingData } from "../[locale]/honoraires/data"; // Ajuste le chemin vers ton fichier data.ts

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const cardVariantsList: Variants[] = [
  {
    hidden: { opacity: 0, y: 48 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  },
  {
    hidden: { opacity: 0, y: 48, x: 40 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  },
  {
    hidden: { opacity: 0, y: 48, x: -48 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  },
];

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Facturation() {
  const locale = useLocale();
  const data = getBillingData(locale);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-lawyer-beige text-lawyer-black py-10 md:py-20">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre */}
        <motion.div
          className="flex flex-col mb-4 md:mb-8 text-left md:text-center"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-2xl md:text-4xl font-serif text-lawyer-black leading-tight mb-2">
            {data.title}
          </h2>
          <p className="font-sans text-gray-700 text-base md:text-sm">
            {data.subtitle}
          </p>
        </motion.div>

        {/* Desktop : grille animée */}
        <motion.div
          className="hidden md:flex flex-row flex-wrap items-stretch justify-center gap-6 mt-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {data.cards.map((card, i) => (
            <div key={i} className="w-[31%] flex">
              <motion.div
                className="flex flex-col w-full h-full bg-white text-lawyer-black p-8 rounded-sm shadow-md transition-shadow hover:shadow-xl"
                variants={cardVariantsList[i % cardVariantsList.length]}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-start justify-start">
                  <div className="bg-lawyer-green p-3 rounded-sm inline-flex items-center justify-center">
                    <Image
                      src={card.icon}
                      alt={card.alt}
                      width={32}
                      height={32}
                      className="w-8 h-8 invert brightness-0"
                    />
                  </div>
                </div>

                <div className="mt-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-serif font-semibold mb-3 text-slate-900">
                    {card.title}
                  </h3>
                  {card.lines.map((line, j) => (
                    <p
                      key={j}
                      className="font-sans text-sm text-gray-600 mb-4 leading-relaxed"
                    >
                      {line}
                    </p>
                  ))}

                  <ul className="mt-auto pt-4 space-y-2 border-t border-gray-100">
                    {card.checklist.map((item, k) => (
                      <li key={k} className="flex items-start gap-2 text-sm text-gray-700">
                        <Image
                          src={card.checklistIcon}
                          alt=""
                          width={18}
                          height={18}
                          className="w-4 h-4 shrink-0 mt-0.5 object-contain"
                        />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Mobile : carousel scroll horizontal */}
        <div
          ref={scrollRef}
          className="md:hidden flex flex-row gap-4 mt-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {data.cards.map((card, i) => (
            <motion.div
              key={i}
              className="flex-none w-[82vw] snap-center flex flex-col bg-white text-lawyer-black p-6 rounded-sm shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.1,
              }}
            >
              <div className="flex items-start justify-start">
                <div className="bg-lawyer-green p-2.5 rounded-sm inline-flex">
                  <Image
                    src={card.icon}
                    alt={card.alt}
                    width={28}
                    height={28}
                    className="w-7 h-7 invert brightness-0"
                  />
                </div>
              </div>

              <div className="mt-5 flex-1 flex flex-col">
                <h3 className="text-base font-serif font-semibold mb-2 text-slate-900">
                  {card.title}
                </h3>
                {card.lines.map((line, j) => (
                  <p
                    key={j}
                    className="font-sans text-xs text-gray-600 mb-3 leading-relaxed"
                  >
                    {line}
                  </p>
                ))}

                <ul className="mt-auto pt-3 space-y-2 border-t border-gray-100">
                  {card.checklist.map((item, k) => (
                    <li key={k} className="flex items-start gap-2 text-xs text-gray-700">
                      <Image
                        src={card.checklistIcon}
                        alt=""
                        width={16}
                        height={16}
                        className="w-3.5 h-3.5 shrink-0 mt-0.5 object-contain"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Indicateurs dots — mobile */}
        <div className="md:hidden flex justify-center gap-2 mt-4">
          {data.cards.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const el = scrollRef.current;
                if (!el) return;
                const cardWidth = el.scrollWidth / data.cards.length;
                el.scrollTo({ left: cardWidth * i, behavior: "smooth" });
              }}
              aria-label={`Aller au mode de facturation ${i + 1}`}
              className="w-2 h-2 rounded-full bg-lawyer-green opacity-40 hover:opacity-100 transition"
            />
          ))}
        </div>

      </div>
    </section>
  );
}