"use client"; 

import { useState } from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image'; 

export default function Appel() {
  return (
    <section className="bg-lawyer-green text-white py-12 md:py-24 ">
      <div className="max-w-[85%] md:max-w-[55%] mx-auto flex flex-col md:flex-row items-center align-center md:justify-center text-left md:text-center gap-12">
          <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif leading-tight mb-5">
            Besoin d'un conseil juridique ?
          </h2>
          <p className="font-sans max-w-l  text-s mt-5 md:mt-0  md:text-sm mb-10 md:mb-2 leading-relaxed">
           Prenez rendez-vous pour un premier échange. Je vous recevrai dans mon cabinet situé au cœur 
           d'Arras pour analyser votre situation et vous proposer les solutions adaptées.
          </p>  
          <div className="flex flex-wrap flex-row justify-start md:justify-center md:mt-10 gap-0 md:gap-5">
            <div className="w-[54%] md:w-auto ">
                <motion.button className=" align-center text-xs md:text-base bg-lawyer-gold  border border-lawyer-gold hover:brightness-110 text-white px-8 py-4 rounded-sm font-bold transition shadow-lg"  whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}>
                Prendre contact
                </motion.button>
            </div>
            <div className="w-[45%] md:w-auto ">
                <motion.div className="w-full text-center align-center text-xs md:text-base bg-lawyer-green border border-white hover:brightness-110 text-white px-8 py-4 rounded-sm font-bold transition shadow-lg"  whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}>
                03 21 21 21 21 
                </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}