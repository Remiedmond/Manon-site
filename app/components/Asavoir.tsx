"use client";

import { motion, type Variants } from "framer-motion";
import { useLocale } from "next-intl";
import { getAsavoirData } from "../[locale]/honoraires/data"; // Ajuste le chemin vers ton data.ts

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Asavoir() {
  const locale = useLocale();
  const data = getAsavoirData(locale);

  return (
    <section className="bg-lawyer-beige text-lawyer-black py-10 md:py-20">
      <div className="max-w-[90%] md:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre & Contenu animés */}
        <motion.div
          className="flex flex-col text-left md:text-center"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-2xl md:text-4xl font-serif text-lawyer-black leading-tight mb-6">
            {data.title}
          </h2>

          <ul className="font-sans text-gray-800 text-sm md:text-base space-y-4 text-left max-w-2xl mx-auto list-disc list-inside">
            {data.items.map((item, index) => (
              <li key={index} className="leading-relaxed pl-2">
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}