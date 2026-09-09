"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { getCtaData } from "../[locale]/legal/data"; // Ajuste le chemin vers ton data.ts

export default function Appel() {
  const locale = useLocale();
  const data = getCtaData(locale);
  const tFooter = useTranslations("Footer");

  // Récupération du numéro de téléphone depuis messages/ (ex: "03 XX XX XX XX")
  const phoneNumber = tFooter.has("phone") ? tFooter("phone") : "03 21 XX XX XX";

  return (
    <section className="bg-lawyer-green text-white py-12 md:py-24">
      <div className="max-w-[85%] md:max-w-[55%] mx-auto flex flex-col md:flex-row items-center justify-center text-left md:text-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif leading-tight mb-5 text-left md:text-center w-full">
            {data.title}
          </h2>

          <p className="font-sans max-w-xl text-sm md:text-base mb-8 md:mb-10 leading-relaxed text-gray-100 text-left md:text-center">
            {data.description}
          </p>

          <div className="flex flex-wrap flex-row justify-start md:justify-center gap-4 w-full">
            {/* Bouton Contact */}
            <Link href={data.contactBtnHref} className="w-full sm:w-auto">
              <motion.button
                className="w-full sm:w-auto text-xs md:text-base bg-lawyer-gold border border-lawyer-gold hover:brightness-110 text-white px-8 py-4 rounded-sm font-bold transition shadow-lg"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                {data.contactBtnText}
              </motion.button>
            </Link>

            {/* Bouton Téléphone */}
            <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`} className="w-full sm:w-auto">
              <motion.div
                className="w-full sm:w-auto text-center text-xs md:text-base bg-lawyer-green border border-white hover:bg-white/10 text-white px-8 py-4 rounded-sm font-bold transition shadow-lg cursor-pointer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                {phoneNumber}
              </motion.div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
