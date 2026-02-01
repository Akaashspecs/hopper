"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const cocktails = [
  {
    id: 1,
    name: "The Golden Hopper",
    description: "Rye whiskey, truffle honey, angostura bitters, gold flake.",
    price: "$24",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=1964&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Midnight Silk",
    description: "Gin, creme de violette, lemon, maraschino, egg white.",
    price: "$20",
    image: "https://images.unsplash.com/photo-1536935338725-8f319ac6f6d3?q=80&w=1926&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Smoked Ember",
    description: "Mezcal, agave, chili tincture, smoked rosemary.",
    price: "$22",
    image: "https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function MenuPreview() {
  return (
    <Section id="menu" bg="default">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-amber-700 mb-4">Signature Serves</h2>
        <p className="text-stone-500 max-w-2xl mx-auto">
          Crafted with precision, passion, and the finest ingredients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cocktails.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group relative h-[400px] overflow-hidden cursor-pointer"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-serif mb-2 text-gold-light group-hover:text-gold transition-colors">
                {item.name}
              </h3>
              <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mb-4 transition-all duration-300">
                <p className="text-sm text-white/80">{item.description}</p>
              </div>
              <div className="flex justify-between items-center border-t border-white/20 pt-4 mt-2">
                <span className="font-serif text-lg">{item.price}</span>
                <span className="text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 duration-300 cursor-pointer text-gold">
                  Details &rarr;
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button variant="outline">View Full Menu</Button>
      </div>
    </Section>
  );
}
