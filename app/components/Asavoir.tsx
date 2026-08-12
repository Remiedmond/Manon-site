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

export default function Asavoir() {

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
            À savoir
          </h2>
          <ul className="font-sans text-lawyer-blacktext text-lg md:text-sm mb-2 list-image-[url(/logo_manon.svg)]">
            <li className="mb-2 list-inside "> Les honoraires ne comprennent pas les frais annexes (frais de déplacement, frais d'huissier, frais d'expertise, etc.) qui vous seront facturés séparément.</li>
            <li className="mb-2 list-inside"> Un échéancier de paiement peut être mis en place sur demande, en fonction de votre situation.</li>
            <li className="mb-2 list-inside"> Je suis soumise aux règles déontologiques de la profession d'avocat, notamment en matière de fixation des honoraires.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}