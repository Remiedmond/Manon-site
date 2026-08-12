"use client"; 

import { useState } from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image'; 

export default function Presentationcontact() {
  return (
    <section className="bg-lawyer-white text-white py-12 md:py-24 ">
      <div className="max-w-[85%] md:max-w-[85%] mx-auto flex flex-col md:flex-row items-center gap-12">

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
            className="h-full w-full object-cover rounded-t-[25%] rounded-b-4xl shadow-md" 
          />
          
        </motion.div>

          <motion.div
          className="mx-auto md:w-3/5 text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-lawyer-black leading-tight mb-5">
           Maître Manon FONTAINE
          </h2>
          <p className="font-sans max-w-l text-lawyer-blacktext text-s text-left  md:text-sm mb-2 leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.
          </p>  
          <p className="font-sans max-w-l text-lawyer-blacktext text-s text-left md:text-sm mb-2 leading-relaxed">
           Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.
          </p>  
          <p className="font-sans max-w-l text-lawyer-blacktext text-s text-left md:text-sm mb-2 leading-relaxed">
           Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.
          </p>  
           <p className="font-sans max-w-l text-lawyer-blacktext text-s text-left md:text-sm mb-2 leading-relaxed">
           Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.
          </p>  
           <motion.div
            className="hidden lg:block absolute bottom-55 right-35 rounded-lg w-16 h-3  bg-lawyer-gold z-[1] opacity-60"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            />

            <motion.div
            className="hidden lg:block absolute -bottom-80 left-155 rounded-lg w-16 h-3  bg-lawyer-gold z-[+1] opacity-60"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            />
          
          <motion.div className="md:hidden absolute top-115 right-5 rounded-t-[65%] rounded-b-lg w-10 h-10 bg-lawyer-green z-[+1] opacity-60"  initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }} />

            <motion.div className="md:hidden absolute top-210 left-2 rounded-t-lg rounded-b-[65%] w-10 h-10 bg-lawyer-green z-[+1] opacity-60"  initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }} />

        </motion.div>

        
      </div>
    </section>
  );
}