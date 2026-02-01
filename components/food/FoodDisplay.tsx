"use client";

import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Food } from "./FoodShowcase";
import Image from "next/image";
import { Lobster } from "next/font/google";

interface FoodDisplayProps {
  food: Food;
}

const lobster = Lobster({
    weight: "400",
    subsets: ["latin"],
});

export default function FoodDisplay({ food }: FoodDisplayProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-black h-screen">
        {/* Background Atmosphere - Blurry version of the food */}
        <div className=" absolute inset-0 z-0 transition-all duration-1000">
             <Image 
                src={food.image} 
                alt="bg" 
                fill 
                className="object-cover blur-2xl scale-125 opacity-60"
                priority
                key={food.image + "bg"}
             />
             {/* Gradient Overlay for Depth */}
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
             <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="container mb-[269px] md:mb-0 mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2  md:gap-12 items-center h-full  md:py-20 overflow-y-auto md:overflow-visible no-scrollbar">
            
            {/* Text Content */}
            <div className=" order-2 md:order-1 w-full text-center md:text-left mt-8 md:mt-0 absolute md:relative z-50">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={food.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className={`hidden md:block text-gold/90 text-xl md:text-3xl tracking-wide mb-2 pl-1 font-serif italic`}>Signature Dish</p>
<h2
  className={`${lobster.className} mt-[65%] w-full text-5xl md:text-6xl lg:text-8xl mb-4 md:mb-6 leading-tight
    bg-gradient-to-r from-pink-300 via-rose-300 to-amber-300
  bg-clip-text text-transparent

  drop-shadow-[2px_2px_0_rgba(236,72,153,0.8)]
  drop-shadow-[0_6px_14px_rgba(0,0,0,0.5)]`}
>
  {food.name}
</h2>

                        <div className="h-px w-16 md:w-24 bg-linear-to-r from-gold to-transparent mb-6 md:mb-8 mx-auto md:mx-0" />
                        <p className="hidden md:block text-base md:text-2xl text-stone-300 font-light mb-6 md:mb-10 max-w-lg mx-auto md:mx-0 font-serif leading-relaxed">
                            {food.description}
                        </p>
                      
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Image Showcase */}
            <div className="order-1 md:order-2 flex justify-center items-center h-[45vh] md:h-[600px] relative w-full perspective-1000 mt-2 md:mt-0">
                 <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                        key={food.id}
                        initial={{ opacity: 0, scale: 0.8, y: 50, rotateX: 10 }}
                        animate={{ 
                            opacity: 1, 
                            scale: 1, 
                            y: 0, 
                            rotateX: 0,
                            transition: { 
                                type: "spring", 
                                stiffness: 120, 
                                damping: 15,
                                delay: 0.1 
                            }
                        }}
                        exit={{ opacity: 0, scale: 0.8, y: -50 }}
                        className="relative w-full max-w-[80vw] md:max-w-[600px] h-full flex items-center justify-center p-4"
                    >
                         {/* Food Image - Popping Out */}
                         <motion.div
                             className="relative w-full h-full z-30 border rounded-2xl shadow-2xl border-black/50"
                             initial={{ y: 20, scale: 0.95 }}
                             animate={{ 
                                 y: -10, 
                                 scale: 1.05,
                                 transition: { 
                                     delay: 0.3,
                                     duration: 0.8,
                                     type: "spring"
                                 } 
                             }}
                         >
                            <Image 
                                src={food.image}
                                alt={food.name}
                                fill
                                className="object-cover rounded-2xl drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)]"
                                priority
                            />
                         </motion.div>
                         
                         {/* Screen Glow */}
                         <div className="absolute inset-x-8 inset-y-12 bg-linear-to-t from-gold/20 to-transparent rounded-[3rem] z-10 blur-xl animate-pulse" />
                    </motion.div>
                 </AnimatePresence>
            </div>

        </div>
    </div>
  );
}
