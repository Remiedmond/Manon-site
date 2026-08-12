"use client"; 

import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-lawyer-green py-16 px-2">
      <motion.div 
        className="max-w-[85%] mx-auto text-left flex flex-col justify-start content-start items-start"
        initial={{ opacity: 0, x: +40, y: -80 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        >

        <span className="text-lawyer-gold uppercase tracking-widest text-sm font-bold">
          {eyebrow}
        </span>
        <h1 className="text-4xl md:text-5xl font-serif text-white mt-2">
          {title}
        </h1>
        <p className="text-white text-lg md:text-xl mt-4">
          {description}
        </p>
      </motion.div>
    </section>
  );
}