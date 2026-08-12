"use client"; 

import { useState } from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image'; 

export default function Presentation() {
  return (
    <section className="bg-lawyer-black text-white py-12 md:py-24 ">
      <div className="max-w-[75%] mx-auto flex flex-col md:flex-row items-left md:justify-left text-left gap-12">
          <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="font-sans max-w-l  text-s mt-5 md:mt-0  md:text-sm mb-10 md:mb-2 leading-relaxed">
          Maître Manon FONTAINE s’attache à exercer sa profession dans le respect d’une éthique irréprochable, fondée sur une totale transparence à l’égard de sa clientèle s’agissant des honoraires pratiqués par le cabinet. Conformément à l’article 11.2 du Règlement Intérieur National (RIN) de la profession d’avocat.
          </p>  
         <div className="max-w-[95%] flex flex-wrap flex-row justify-start md:justify-left md:mt-10 gap-0 md:gap-5 ">
        <div className="flex">
            {/* Barre verticale dorée */}
            <div className="w-0.5 bg-lawyer-gold shrink-0 mr-6" />

            <p className="font-sans  text-s mt-5 md:mt-0 md:text-m mb-10 md:mb-2">
            <span className="text-lawyer-gold text-xl md:text-2xl align-top leading-none mr-1">
                &ldquo;
            </span>
            Les honoraires sont déterminés selon les usages, en considération de la situation de fortune du client, de la difficulté de l&rsquo;affaire, des frais exposés par l&rsquo;avocat, de sa notoriété ainsi que des diligences accomplies. L&rsquo;avocat en charge d&rsquo;un dossier est également fondé à solliciter des honoraires si le dossier lui est retiré avant son terme, à hauteur du travail effectivement réalisé.
            <span className="text-lawyer-gold text-xl md:text-2xl align-bottom leading-none ">
                &rdquo;
            </span>
            </p>
        </div>
        </div>
         
        </motion.div>
      </div>
    </section>
  );
}