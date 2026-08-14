"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { getFirstMeetingData } from "../[locale]/honoraires/data"; // Ajuste le chemin vers ton data.ts

export default function Rdv() {
  const locale = useLocale();
  const data = getFirstMeetingData(locale);

  return (
    <section className="bg-white text-lawyer-black py-12 md:py-24">
      <div className="max-w-[85%] md:max-w-[50%] mx-auto flex flex-col items-center justify-center text-left md:text-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-lawyer-green-dark text-3xl md:text-4xl font-serif leading-tight">
            {data.title}
          </h2>

          <p className="font-sans text-sm md:text-base leading-relaxed text-gray-700">
            {data.textPart1}{" "}
            <strong className="font-bold text-lawyer-green">
              {data.priceHighlight}
            </strong>
            {data.textPart2}
          </p>

          <p className="font-sans text-sm md:text-base leading-relaxed text-gray-600">
            {data.deductionNote}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
