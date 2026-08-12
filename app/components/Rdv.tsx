"use client"; 

import { useState } from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image'; 

export default function Rdv() {
  return (
    <section className="bg-white text-lawyer-black py-12 md:py-24 ">
      <div className="max-w-[85%] md:max-w-[45%] mx-auto flex flex-col md:flex-row items-center align-center md:justify-center text-left md:text-center gap-12">
          <motion.div
          initial={{ opacity: 0, x: +40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-lawyer-green-dark text-3xl md:text-4xl font-serif leading-tight mb-5">
            Premier rendez-vous
          </h2>
          <p className="font-sans max-w-l  text-s mt-5 md:mt-0  md:text-sm mb-10 md:mb-2 leading-relaxed">
            Lors de notre première rencontre, je vous présenterai un devis détaillé adapté à votre situation. Ce
            premier rendez-vous est facturé <strong className="font-blackx² text-lawyer-green"> 80 € TTC. </strong>
          </p>
          <p className="font-sans max-w-l text-s mt-5 md:mt-0  md:text-sm mb-10 md:mb-2 leading-relaxed">
            Ce montant sera déduit de la provision d'honoraires si vous décidez de me confier votre dossier.
          </p>  
    
        </motion.div>
      </div>   
    </section>
  );
}