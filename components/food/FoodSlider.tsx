"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Food } from "./FoodShowcase";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface FoodSliderProps {
  foods: Food[];
  selectedId: number;
  onSelect: (food: Food) => void;
}

export default function FoodSlider({ foods, selectedId, onSelect }: FoodSliderProps) {
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
      {foods.map((food) => (
        <motion.div
          key={food.id}
          data-id={food.id}
          onClick={() => onSelect(food)}
          className={cn(
            "shrink-0 relative w-32 h-40 md:w-36 md:h-48 rounded-sm overflow-hidden cursor-pointer snap-center border-t border-b transition-all duration-500 group",
            selectedId === food.id 
                ? "border-gold opacity-100 scale-100" 
                : "border-transparent opacity-50 hover:opacity-80 scale-95"
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
             <Image 
                src={food.image} 
                alt={food.name} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent flex items-end p-2">
                 <p className={cn(
                     "text-xs font-serif text-white w-full text-center truncate",
                     selectedId === food.id ? "text-gold" : ""
                 )}>
                     {food.name}
                 </p>
             </div>
        </motion.div>
      ))}
    </div>
  );
}
