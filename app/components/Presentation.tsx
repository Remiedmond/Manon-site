"use client"; 

import { useState } from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image'; 

export default function Presentation() {
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
            Une approche centrée sur vos besoins
          </h2>
          <p className="font-sans max-w-l text-lawyer-blacktext text-s text-left  md:text-sm mb-2 leading-relaxed">
            Installée à Arras depuis 2025, j'exerce mon métier d'avocate avec la conviction
            que chaque client mérite une écoute attentive et un conseil personnalisé
          </p>  
          <p className="font-sans max-w-l text-lawyer-blacktext text-s text-left md:text-sm mb-2 leading-relaxed">
            Mon approche repose sur trois piliers : la disponibilité, la clarté et la rigueur. 
            Je m'engage à vous expliquer chaque étape de votre dossier dans un langage 
            accessible, tout en défendant vos intérêts avec détermination
          </p>  
          <p className="font-sans max-w-l text-lawyer-blacktext text-s text-left md:text-sm mb-10 leading-relaxed">
            Que vous soyez un particulier ou un professionnel, je mets mon expertise a 
            service de la résolution de vos problématiques juridiques, dans un climat de confiance et de respect mutuel.
          </p>  
          <div className="flex flex-wrap gap-5">
            <motion.button className="align-center bg-lawyer-gold hover:brightness-110 text-white px-8 py-4 rounded-sm font-bold transition shadow-lg"  whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}>
              En savoir plus sur mon parcours
            </motion.button>
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
            src="/photomanon.png" 
            alt="photo Maître Manon FONTAINE en robe d'avocate" 
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