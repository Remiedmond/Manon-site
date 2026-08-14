"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";
import { getAideJuridiqueData } from "../[locale]/honoraires/data"; 

export default function Aidejuridi() {
  const locale = useLocale();
  const data = getAideJuridiqueData(locale);

  return (
    <section className="bg-lawyer-black text-white py-12 md:py-24">
      {/* Première partie : Présentation & Bouton Simulateur */}
      <div className="max-w-[85%] md:max-w-[55%] mx-auto flex flex-col md:flex-row items-center justify-center text-left md:text-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif leading-tight mb-5">
            {data.title}
          </h2>

          <p className="font-sans max-w-xl text-sm md:text-base mb-8 md:mb-6 leading-relaxed text-gray-300">
            {data.description}
          </p>

          <div className="flex flex-wrap flex-row justify-start md:justify-center gap-4">
            <a
              href={data.buttonUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="text-xs md:text-sm bg-lawyer-gold border border-lawyer-gold hover:brightness-110 text-white px-8 py-3.5 rounded-sm font-semibold transition-all shadow-lg"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                {data.buttonText}
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Deuxième partie : Mon accompagnement & Puces */}
      <div className="max-w-[85%] md:max-w-[70%] bg-white text-lawyer-black mx-auto rounded-lg shadow-md p-6 md:p-10 mt-12">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl md:text-2xl text-lawyer-green font-serif font-semibold text-center leading-tight mb-8">
            {data.subTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-sm text-gray-700">
            {data.points.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="shrink-0 mt-0.5">
                  <Image
                    src="/checkvert.png"
                    alt=""
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <p className="leading-snug">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
