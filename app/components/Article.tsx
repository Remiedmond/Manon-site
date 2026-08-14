"use client"; 

import { useState } from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image'; 
import { useLocale, useTranslations } from 'next-intl';
import { getHonorairesData } from '../[locale]/honoraires/data';
  

export default  function Presentation() {
  const locaele = useLocale();

  const HonorairesAreas =  getHonorairesData(locaele);
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
          {HonorairesAreas[0]?.annonce}
          </p>  
         <div className="max-w-[95%] flex flex-wrap flex-row justify-start md:justify-left md:mt-10 gap-0 md:gap-5 ">
        <div className="flex">
            {/* Barre verticale dorée */}
            <div className="w-0.5 bg-lawyer-gold shrink-0 mr-6" />

            <p className="font-sans  text-s mt-5 md:mt-0 md:text-m mb-10 md:mb-2">
            <span className="text-lawyer-gold text-xl md:text-2xl align-top leading-none mr-1">
                &ldquo;
            </span>
            {HonorairesAreas[0]?.larticle}
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