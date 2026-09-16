"use client"; 

import { useState } from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image'; 

export default function Parcourspro() {
  return (
   <section className="relative bg-lawyer-beige text-lawyer-black py-12 md:py-24 overflow-hidden">

  {/* Traits gauche — colonnes de temple */}
  <motion.div className="hidden md:flex absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 items-end gap-3 z-0"
    initial={{ opacity: 0, y: +40, x: +20 }}
    whileInView={{ opacity: 1, y: 0, x: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true }}>
    
    <div className="w-2 h-250 bg-lawyer-black"></div>
    <div className="w-2 h-250 bg-lawyer-black"></div>
    <div className="w-2 h-250 bg-lawyer-black"></div>
  </motion.div>

  {/* Traits droite — colonnes de temple */}
  <motion.div className="hidden md:flex absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 items-end gap-3 z-0"
    initial={{ opacity: 0, y: -40, x: -20 }}
    whileInView={{ opacity: 1, y: 0, x: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true }}>
    <div className="w-2 h-250 bg-lawyer-black"></div>
    <div className="w-2 h-250 bg-lawyer-black"></div>
    <div className="w-2 h-250 bg-lawyer-black"></div>
  </motion.div>
<div className="max-w-[85%] mx-auto flex flex-col md:flex-row items-center text-center gap-12">

      <motion.div
      className="mx-auto text-left md:text-center "
      initial={{ opacity: 0, x: +40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl md:text-4xl font-serif mb-5">
       Parcours professionnel 
      </h2>
      <p className="font-sans max-w-l text-lawyer-blacktext text-s  md:text-sm mb-2 ">
        Une formation solide et une pratique enrichie au fil des années
      </p>  
     
    </motion.div>
  </div>

  {/* Conteneur de la timeline : ligne verticale visible seulement en mobile (md:hidden) */}
  <div className="relative w-full px-4 mx-auto flex flex-col gap-10 mt-12 md:static md:max-w-[75%] md:px-0 md:items-center md:text-center md:gap-12">

    {/* Étape 1 */}
    <div className="relative w-full md:w-auto flex flex-row items-start gap-4 md:flex-row md:items-center md:justify-center md:gap-12">
      <motion.div
        className="w-14 h-14 rounded-full shrink-0 mt-0.5 text-white bg-lawyer-gold border-lawyer-black border-2 flex items-center justify-center md:mx-auto md:px-10 md:py-2 md:w-12 md:h-12 md:mb-4 md:rounded-none md:shrink md:mt-0 "
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p>2008</p>
      </motion.div>
      <motion.div
        className="flex flex-col items-start justify-start text-left flex-1 min-w-0 bg-white rounded-xl px-4 py-3 shadow-sm ring-1 ring-black/5 text-lawyer-black md:mx-auto md:flex-none md:rounded-none md:px-10 md:py-2 md:mb-4 md:shadow-none md:ring-0 md:text-center "
        initial={{ opacity: 0, x: +90 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h3 className="text-lg md:text-l font-serif mb-2 font-semibold">
          Diplômée de l'Université d'Artois.
        </h3>
        <p>Formation au barreau d'Arras.</p>
      </motion.div>
    </div>

    {/* Étape 2 (inversée en desktop via md:mr-24 ; marqueur remis à gauche en mobile via order) */}
    <div className="relative w-full md:w-auto flex flex-row items-start gap-4 md:flex-row md:items-center md:justify-center md:gap-12 md:mr-24">
      <motion.div
         className="flex flex-col items-start justify-start text-left flex-1 min-w-0 bg-white rounded-xl px-4 py-3 shadow-sm ring-1 ring-black/5 text-lawyer-black md:mx-auto md:flex-none md:rounded-none md:px-10 md:py-2 md:mb-4 md:shadow-none md:ring-0 md:text-center "
          initial={{ opacity: 0, x: +90 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h3 className="text-lg md:text-l font-serif mb-2 font-semibold">
          Diplômée de l'Université d'Artois.
        </h3>
        <p>Formation au barreau d'Arras.</p>
      </motion.div>

      <motion.div
        className="w-14 h-14 rounded-full shrink-0 mt-0.5 text-white bg-lawyer-green border-lawyer-black border-2 flex items-center justify-center order-1 md:order-none md:mx-auto md:px-10 md:py-2 md:w-12 md:h-12 md:mb-4 md:rounded-none md:shrink md:mt-0 "
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p>2008</p>
      </motion.div>
    </div>

    {/* Étape 3 */}
    <div className="relative w-full md:w-auto flex flex-row items-start gap-4 md:flex-row md:items-center md:justify-center md:gap-12 md:ml-24">
      <motion.div
        className="w-14 h-14 rounded-full shrink-0 mt-0.5 text-white bg-lawyer-gold border-lawyer-black border-2 flex items-center justify-center md:mx-auto md:px-10 md:py-2 md:w-12 md:h-12 md:mb-4 md:rounded-none md:shrink md:mt-0 "
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p>2008</p>
      </motion.div>
      <motion.div
        className="flex flex-col items-start justify-start text-left flex-1 min-w-0 bg-white rounded-xl px-4 py-3 shadow-sm ring-1 ring-black/5 text-lawyer-black md:mx-auto md:flex-none md:rounded-none md:px-10 md:py-2 md:mb-4 md:shadow-none md:ring-0 md:text-center "
        initial={{ opacity: 0, x: +90 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h3 className="text-lg md:text-l font-serif mb-2 font-semibold">
          Diplômée de l'Université d'Artois.
        </h3>
        <p>Formation au barreau d'Arras.</p>
      </motion.div>
    </div>

    {/* Étape 4 */}
    <div className="relative w-full md:w-auto flex flex-row items-start gap-4 md:flex-row md:items-center md:justify-center md:gap-12">
      <motion.div
        className="flex flex-col items-start justify-start text-left flex-1 min-w-0 bg-white rounded-xl px-4 py-3 shadow-sm ring-1 ring-black/5 text-lawyer-black md:mx-auto md:flex-none md:rounded-none md:px-10 md:py-2 md:mb-4 md:shadow-none md:ring-0 md:text-center "
        initial={{ opacity: 0, x: +90 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h3 className="text-lg md:text-l font-serif mb-2 font-semibold">
          Diplômée de l'Université d'Artois.
        </h3>
        <p>Formation au barreau d'Arras.</p>
      </motion.div>

      <motion.div
        className="w-14 h-14 rounded-full shrink-0 mt-0.5 text-white bg-lawyer-green border-lawyer-black border-2 flex items-center justify-center md:mx-auto md:px-10 md:py-2 md:w-12 md:h-12 md:mb-4 md:rounded-none md:shrink md:mt-0 "
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p>2008</p>
      </motion.div>
    </div>
  </div>
</section>
  );
}