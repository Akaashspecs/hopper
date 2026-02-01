"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";

const vibes = [
  "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1935&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1572979201736-69503ea40608?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1574096079513-d82599602950?q=80&w=1933&auto=format&fit=crop",
];

export default function VibeSection() {
  return (
    <Section id="vibe" bg="surface">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Text Side */}
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-6xl font-serif text-gold mb-6">The Vibe</h2>
          <p className="text-foreground/80 leading-relaxed mb-6 font-light">
            Dim lights, velvet textures, and the clink of ice against crystal. Hopper is more than a bar; it's an escape into a world of timeless elegance.
          </p>
          <p className="text-foreground/60 text-sm italic border-l-2 border-gold pl-4">
            "An intimate setting for conversations that matter."
          </p>
        </div>

        {/* Image Grid */}
        <div className="md:w-2/3 grid grid-cols-2 gap-4 h-[500px]">
          {vibes.map((src, idx) => (
            <motion.div
              key={idx}
              className={`relative overflow-hidden rounded-sm ${
                idx === 2 ? "col-span-2 h-[200px]" : "h-[280px]"
              }`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
               <div
                  className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url(${src})` }}
               />
               <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
