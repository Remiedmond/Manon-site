"use client"; 

import { useState } from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image'; 
import { useLocale, useTranslations } from 'next-intl';
import { getPresentationData } from "../[locale]/dato";

export default function Presentation() {
  const locale = useLocale();
  const data = getPresentationData(locale);

  return (
    <section className="bg-lawyer-white text-white py-12 md:py-24 ">
      <div className="max-w-[85%] md:max-w-[85%] mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div
          className="mx-auto md:w-3/5 text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-lawyer-black leading-tight mb-5">
            {data.title}
          </h2>
          <div className="space-y-3 mb-8">
            {data.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="font-sans text-sm md:text-base text-gray-700 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-5">
            <Link href={data.buttonHref}>
              <motion.button
                className="bg-lawyer-gold hover:brightness-110 text-white px-8 py-4 rounded-sm font-semibold transition shadow-md text-sm md:text-base"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                {data.buttonText}
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Conteneur image avec le carré décoratif */}
         <motion.div
          className="relative md:w-2/5 w-full mt-10 md:mt-0"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image 
            src={data.imageSrc}
            alt={data.imageAlt}
            width={200}   
            height={200} 
            className="h-full w-full object-cover rounded-l shadow-md" 
          />
          <motion.div className="absolute -bottom-4 -left-4 w-12 md:w-16 h-12 md:h-16 bg-lawyer-gold z-[+1] opacity-60"  initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}/>
            
           <motion.div className=" md:hidden absolute -top-4 -right-4 w-10 h-10 bg-lawyer-gold z-[+1] opacity-60"  initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }} />
        </motion.div>
      </div>
    </section>
  );
}