"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Drink } from "./BeverageShowcase";
import Image from "next/image";

interface DrinkDisplayProps {
  drink: Drink;
}

export default function DrinkDisplay({ drink }: DrinkDisplayProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-black h-screen">
        {/* Background Atmosphere - Blurry version of the drink */}
        <div className="absolute inset-0 z-0 transition-all duration-1000">
             <Image 
                src={drink.image} 
                alt="bg" 
                fill 
                className="object-cover blur-2xl scale-125 opacity-60"
                priority
                key={drink.image + "bg"}
             />
             {/* Gradient Overlay for Depth */}
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
             <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full py-20">
            
            {/* Text Content */}
            <div className="order-2 md:order-1 text-center md:text-left">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={drink.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className="text-gold/80 text-sm tracking-[0.2em] uppercase mb-4 pl-1 font-sans">Signature Cocktail</p>
                        <h2 className="text-6xl md:text-8xl font-serif text-white mb-6 leading-tight">
                            {drink.name}
                        </h2>
                        <div className="h-[1px] w-24 bg-gradient-to-r from-gold to-transparent mb-8 mx-auto md:mx-0" />
                        <p className="text-xl md:text-2xl text-stone-300 font-light mb-10 max-w-lg mx-auto md:mx-0 font-serif leading-relaxed">
                            {drink.description}
                        </p>
                        <p className="text-4xl font-serif text-gold">
                            {drink.price}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Image Showcase */}
            <div className="order-1 md:order-2 flex rounded-2xl justify-center items-center h-[350px] md:h-[600px] relative w-full perspective-1000 mt-10 md:mt-0">
                 <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                        key={drink.id}
                        initial={{ opacity: 0, scale: 0.5, y: 100, rotateX: 20 }}
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
                        className="relative w-full max-w-[300px] md:max-w-[600px] h-full flex items-center justify-center"
                    >
                         {/* Drink Image - Popping Out */}
                         <motion.div
                             className="relative w-full h-full z-30 mb-8 border rounded-2xl shadow-2xl border-black"
                             initial={{ y: 50, scale: 0.8 }}
                             animate={{ 
                                 y: -20, 
                                 scale: 1.15,
                                 transition: { 
                                     delay: 0.3,
                                     duration: 0.8,
                                     type: "spring"
                                 } 
                             }}
                         >
                            <Image 
                                src={drink.image}
                                alt={drink.name}
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
