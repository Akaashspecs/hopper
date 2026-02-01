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
        <div className="absolute inset-0 z-0  transition-all duration-1000">
             <Image 
                src={drink.image} 
                alt="bg" 
                fill 
                className="object-cover blur-xl scale-110 opacity-50"
                key={drink.image + "bg"}
             />
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
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <h2 className="text-5xl md:text-7xl font-serif text-gold mb-4 drop-shadow-lg">
                            {drink.name}
                        </h2>
                        <div className="h-1 w-20 bg-gold/50 mb-6 mx-auto md:mx-0" />
                        <p className="text-xl md:text-2xl text-white/90 font-light mb-8 max-w-lg mx-auto md:mx-0 font-serif italic">
                            "{drink.description}"
                        </p>
                        <p className="text-3xl font-serif text-gold-light">
                            {drink.price}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Image Showcase */}
            <div className="order-1 md:order-2 flex justify-center items-center h-[500px] md:h-[600px] relative w-full perspective-1000">
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
                        className="relative w-[600px] h-[600px] flex items-center justify-center"
                    >
                         {/* iPhone Border */}
                      

                         {/* Drink Image - Popping Out */}
                         {/* Z-index 30 puts it above the phone border -> Popping OUT */}
                         {/* To make it look like it's coming FROM the screen, we might need a mask or careful positioning. 
                             For now, let's try scaling it up so it overflows the screen boundaries creatively. */}
                         <motion.div
                             className="relative w-[900px] h-[600px] z-30 mb-8 border border-black "
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
                                className="object-cover drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)]"
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
