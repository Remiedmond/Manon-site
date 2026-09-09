"use client"; 

import { useState } from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image'; 

export default function Rappel() {
  return (
    <section className="bg-lawyer-beige text-lawyer-black py-12 md:py-34 ">
      <div className="max-w-[85%] mx-auto flex flex-col md:flex-row items-center gap-6">
          <motion.div
          className="mx-auto md:w-3/5 text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-lawyer-black leading-tight mb-5">
           Un cabinet au cœur d'Arras
          </h2>
          <p className="font-sans max-w-l text-lawyer-blacktext text-s text-left  md:text-sm mb-2 leading-relaxed">
          Le cabinet est situé [En face de chez Kiwi], dans un cadre professionnel et accueillant qui favorise l'échange et la confidentialité.
           </p>  
          <p className="font-sans max-w-l text-lawyer-blacktext text-s text-left md:text-sm mb-2 leading-relaxed">
          Vous y serez reçu dans un environnement serein, propice à la discussion et à l'analyse approfondie de votre situation juridique. Chaque rendez-vous est pensé pour vous permettre d'exprimer vos préoccupations et d'obtenir des réponses claires.
          </p>  
           <p className="font-sans max-w-l text-lawyer-blacktext text-s text-left md:text-sm mb-2 leading-relaxed">
           La localisation centrale du cabinet facilite l'accès pour les habitants d'Arras et des communes environnantes. Un parking public se trouve à proximité immédiate.
           </p>
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
            src="/beffroi.jpg" 
            alt="photo du cabinet d'avocat de Maître Manon FONTAINE situé au cœur d'Arras" 
            width={200}   
            height={200} 
            className="h-full w-full object-cover rounded-[5%] rounded-b-4xl " 
          />
          
        </motion.div>
        
      </div>
    </section>
  );
}