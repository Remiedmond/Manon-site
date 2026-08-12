"use client";

import { Variants } from "framer-motion";
import { motion } from "framer-motion";
import Image from 'next/image';
import { useRef } from "react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 48 },           // carte 1 — monte depuis le bas
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const cardVariants2: Variants = {
  hidden: { opacity: 0, y: 48, x: 40 },    // carte 2 — monte + vient de droite
  visible: {
    opacity: 1, y: 0, x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const cardVariants3: Variants = {
  hidden: { opacity: 0, y: 48, x: -48 },   // carte 3 — monte + vient de gauche
  visible: {
    opacity: 1, y: 0, x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};
const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.55 },
  },
};

const cards = [
  {
    icon: "/coeur.svg",
    alt: "SVG Honoraires au forfait",
    title: "Honoraires au forfait",
    lines: [
      "Pour les prestations définies à l'avance (divorce par consentement mutuel, rédaction de contrat, etc.), je propose un montant forfaitaire fixé dès le départ.",
    ],
    checlisticon: "/check.png",
    checlist: [
      "Transparence dès le départ",
      "Pas de surprise sur le coût",
      "Adapté aux prestations standardisées",
    ],
    variants: cardVariants,
  },
  {
    icon: "/personnage.svg",
    alt: "SVG Honoraires au temps passé",
    title: "Honoraires au temps passé",
    lines: [
      "Pour les dossiers complexes ou dont l'issue est incertaine, mes honoraires sont calculés sur la base du temps consacré à votre dossier.",
    ],
    checlisticon: "/check.png",
    checlist: [
      "Flexibilité selon la complexité du dossier",
      "Transparence sur le temps consacré",
      "Adapté aux dossiers évolutifs",
    ],
    variants: cardVariants2,
  },
  {
    icon: "/bouclier.svg",
    alt: "SVG Honoraires de résultat",
    title: "Honoraires de résultat",
    lines: [
      "Dans certains cas (recouvrement, contentieux), une partie des honoraires peut être calculée en fonction du résultat obtenu, en complément d'honoraires fixes.",
    ],
    checlisticon: "/check.png",
    checlist: [
      "Flexibilité selon les résultats obtenus",
      "Transparence sur les modalités de calcul",
      "Adapté aux dossiers avec des résultats variables",
    ],
    variants: cardVariants3,
  },
];

export default function facturation() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-lawyer-beige text-lawyer-black py-10 md:py-20">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Titre */}
        <motion.div
          className="flex flex-col mb-2 md:mb-4 text-left md:text-center"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-2xl md:text-4xl font-serif text-lawyer-black leading-tight mb-2">
            Modes de facturation
          </h2>
          <p className="font-sans text-lawyer-blacktext text-lg md:text-sm mb-2">
            Plusieurs modalités adaptées à la nature de votre dossier
          </p>
        </motion.div>

        {/* Desktop : grille staggerée */}
        <motion.div
        className="hidden md:flex flex-row flex-wrap items-stretch justify-center gap-4 mt-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        >
        {cards.map((card, i) => (
            <div key={i} className="w-[32%] flex">
            <motion.div
                className="flex flex-col w-full h-full bg-white text-lawyer-black px-8 py-4 rounded-sm shadow-lg"
                variants={card.variants}
                whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
            >
                <div className="flex items-left justify-start mt-4">
                <Image src={card.icon} alt={card.alt} width={48} height={48} className="w-12 h-12 bg-lawyer-green p-2" />
                </div>
                <div className="max-w-[90%] mt-6">
                <h3 className="text-s text-left font-serif font-semibold mb-2">{card.title}</h3>
                {card.lines.map((line, j) => (
                    <p key={j} className="font-sans text-s text-left text-sm mb-2 leading-relaxed">{line}</p>
                ))}
                </div>
                <ul className="mt-4 list-disc list-inside flex-1">
                {card.checlist.map((item, k) => (
                    <div key={k} className="font-sans text-s text-left text-sm mb-1 leading-relaxed decoration-0">
                    <Image src={card.checlisticon} alt="Check" width={20} height={20} className="inline-block mr-2" />
                    {item}
                    </div>
                ))}
                </ul>
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
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="flex-none w-[80vw] snap-center flex flex-col bg-white text-lawyer-black px-6 py-4 rounded-sm shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: i * 0.1 }}
            >
              <div className="flex items-left justify-start mt-4">
                <Image src={card.icon} alt={card.alt} width={48} height={48} className="w-12 h-12 bg-lawyer-green p-2" />
              </div>
              <div className="mt-6">
                <h3 className="text-s text-left font-serif font-semibold mb-2">{card.title}</h3>
                {card.lines.map((line, j) => (
                  <p key={j} className="font-sans text-s text-left text-sm mb-2 leading-relaxed">{line}</p>
                ))}
              </div>
                <ul className="mt-4 list-disc list-inside">
                    {card.checlist.map((item, k) => (
                        <div key={k} className="font-sans text-s text-left text-sm mb-1 leading-relaxed decoration-0">
                            <Image src={card.checlisticon} alt="Check" width={20} height={20} className="inline-block mr-2" />
                            {item}
                        </div>
                    ))}
                </ul>
            </motion.div>
          ))}
        </div>

        {/* Indicateurs dots — mobile seulement */}
        <div className="md:hidden flex justify-center gap-2 mt-4">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const el = scrollRef.current;
                if (!el) return;
                const cardWidth = el.scrollWidth / cards.length;
                el.scrollTo({ left: cardWidth * i, behavior: "smooth" });
              }}
              className="w-2 h-2 rounded-full bg-lawyer-green opacity-40 hover:opacity-100 transition"
            />
          ))}
        </div>

      </div>
    </section>
  );
}