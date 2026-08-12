"use client"; 

import { useState } from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image'; 

export default function Aidejuridi() {
  return (
    <section className="bg-lawyer-black text-white py-12 md:py-24 ">
      <div className="max-w-[85%] md:max-w-[55%] mx-auto flex flex-col md:flex-row items-center align-center md:justify-center text-left md:text-center gap-12">
          <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif leading-tight mb-5">
            Aide juridictionnelle
          </h2>
          <p className="font-sans max-w-l  text-s mt-5 md:mt-0  md:text-sm mb-10 md:mb-2 leading-relaxed">
            Si vos ressources sont limitées, vous pouvez bénéficier de l'aide juridictionnelle. Cette aide,
            accordée sous conditions de ressources, permet de prendre en charge tout ou partie des frais de
            justice et des honoraires d'avocat.
          </p>  
          <div className="flex flex-wrap flex-row justify-start md:justify-center md:mt-10 gap-0 md:gap-5">
            <a href="https://www.aidejuridictionnelle.justice.fr/simulateur" target="_blank" rel="noopener noreferrer">
                <motion.button className=" align-center text-xs md:text-base bg-lawyer-gold  border border-lawyer-gold hover:brightness-110 text-white px-8 py-4 rounded-sm font-bold transition shadow-lg"  whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}>
                    Faire la simulation
                </motion.button>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="max-w-[85%] md:max-w-[70%] bg-white text-lawyer-black mx-auto flex flex-col md:flex-row items-center align-center md:justify-center text-left md:text-center gap-12 mt-10">
          <motion.div className="md:max-w-[65%] mx-2 md:mx-0"
          initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            >
                
          <h3 className="text-xl md:text-2xl md:text-lawyer-black text-lawyer-green font-serif font-medium leading-tight mb-10 md:mb-12 mt-5">
            Mon accompagnement 
          </h3>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 font-sans  text-s mt-5 mb-5 md:mt-0  md:text-sm text-left">
            <div className="mb-2 max-h-[20%] md:max-h-[40%] flex flex-row gap-2"> <Image src="/checkvert.png" alt="Check" width={20} height={20}  /><p>Vérification de votre éligibilité.</p></div>
            <div className="mb-2 max-h-[20%] md:max-h-[40%] flex flex-row gap-2 "> <Image src="/checkvert.png" alt="Accompagnement" width={20} height={30} /> <p>Assistance pour constituer votre dossier.</p></div>
            <div className="mb-2 max-h-[20%] md:max-h-[40%] flex flex-row gap-2 "> <Image src="/checkvert.png" alt="Accompagnement" width={20} height={30}  /> <p>Prise en charge totale ou partielle selon vos ressources.</p></div>
            <div className="mb-2 max-h-[20%] md:max-h-[40%] flex flex-row gap-2"> <Image src="/checkvert.png" alt="Accompagnement" width={20} height={30}  /> <p>Même qualité de service quel que soit le mode de rémunération.</p></div>
          </div>
          </motion.div>
      </div>     
    </section>
  );
}