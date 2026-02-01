"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Drink } from "./BeverageShowcase";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface DrinkSliderProps {
  drinks: Drink[];
  selectedId: number;
  onSelect: (drink: Drink) => void;
}

export default function DrinkSlider({ drinks, selectedId, onSelect }: DrinkSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll active item into view
  useEffect(() => {
    if (containerRef.current) {
         const selectedEl = containerRef.current.querySelector(`[data-id="${selectedId}"]`);
         if (selectedEl) {
             selectedEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
         }
    }
  }, [selectedId]);

  return (
    <div 
        ref={containerRef}
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {drinks.map((drink) => (
        <motion.div
          key={drink.id}
          data-id={drink.id}
          onClick={() => onSelect(drink)}
          className={cn(
            "shrink-0 relative w-32 h-40 md:w-36 md:h-48 rounded-lg overflow-hidden cursor-pointer snap-center border-2 transition-all duration-300 group",
            selectedId === drink.id 
                ? "border-gold scale-105 shadow-[0_0_20px_rgba(212,175,55,0.4)]" 
                : "border-transparent opacity-60 hover:opacity-100"
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
             <Image 
                src={drink.image} 
                alt={drink.name} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent flex items-end p-2">
                 <p className={cn(
                     "text-xs font-serif text-white w-full text-center truncate",
                     selectedId === drink.id ? "text-gold" : ""
                 )}>
                     {drink.name}
                 </p>
             </div>
        </motion.div>
      ))}
    </div>
  );
}
