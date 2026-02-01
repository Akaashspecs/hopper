"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const reviews = [
  { id: 1, name: "Elena R.", role: "Food Critic", content: "An absolute masterpiece of mixology. The attention to detail is unrivaled.", rating: 5, color: "bg-white" },
  { id: 2, name: "James T.", role: "Regular", content: "The atmosphere transports you to another era. My go-to spot.", rating: 5, color: "bg-stone-50" },
  { id: 3, name: "Sarah L.", role: "Sommelier", content: "Impeccable wine selection, but the signature cocktails stole the show.", rating: 5, color: "bg-amber-50" },
  { id: 4, name: "Michael B.", role: "Designer", content: "Visually stunning. Every corner is a photo opportunity.", rating: 5, color: "bg-white" },
  { id: 5, name: "Jessica K.", role: "Event Planner", content: "Hosted a private party here and the service was flawless.", rating: 5, color: "bg-stone-50" },
  { id: 6, name: "David W.", role: "Chef", content: "Flavor profiles that challenge and delight the palate.", rating: 5, color: "bg-amber-50" },
  { id: 7, name: "Olivia P.", role: "Artist", content: "The 'Golden Hopper' is not just a drink, it's an experience.", rating: 5, color: "bg-white" },
  { id: 8, name: "Ryan G.", role: "Musician", content: "Great acoustics, better drinks. The perfect chill spot.", rating: 5, color: "bg-stone-50" },
];

export default function Reviews() {
  // Store the order of IDs. The last element is "on top".
  const [order, setOrder] = useState(reviews.map(r => r.id));

  const bringToFront = (id: number) => {
    setOrder(prev => {
      const newOrder = prev.filter(item => item !== id);
      newOrder.push(id);
      return newOrder;
    });
  };

  // Fixed random positions for consistent rendering (could be dynamic but better fixed for SSR consistency)
  // We'll use a mix of negative and positive translations/rotations to create the "mess"
  const getStyle = (index: number) => {
     // Increased spread values
     const rotate = (index % 2 === 0 ? 1 : -1) * ((index * 5) % 25); 
     const x = (index % 3 === 0 ? -1 : 1) * ((index * 15) % 45); // Increased spread %
     const y = (index % 2 === 0 ? -1 : 1) * ((index * 12) % 30);
     return { rotate, x, y };
  };

  return (
    <Section className="bg-stone-100 overflow-hidden min-h-[800px] flex flex-col justify-center">
      <div className="container mx-auto px-6 relative h-full flex flex-col items-center">
        
        <div className="text-center mb-12 relative z-10 pointer-events-none">
          <h2 className="text-4xl md:text-5xl font-serif text-amber-900 mb-4">Guest Book</h2>
          <p className="text-stone-500">Tap a card to read the experience</p>
        </div>

        {/* The Stack Container */}
        <div className="relative w-full max-w-lg h-[450px] flex items-center justify-center mt-12 mb-12">
            {reviews.map((review, i) => {
                const zIndex = order.indexOf(review.id);
                const isTop = zIndex === reviews.length - 1;
                const style = getStyle(i);

                return (
                  <motion.div
                    key={review.id}
                    layout
                    onClick={() => bringToFront(review.id)}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                        scale: isTop ? 1.1 : 1, // Highlight active
                        opacity: 1,
                        zIndex: zIndex,
                        rotate: isTop ? 0 : style.rotate, // Straighten active card
                        x: isTop ? 0 : `${style.x}%`,   // Center active card
                        y: isTop ? 0 : `${style.y}%`,
                    }}
                    whileHover={{ scale: isTop ? 1.12 : 1.35, cursor: "pointer" }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className={cn(
                        "absolute w-[280px] md:w-[350px] p-8 rounded-sm shadow-xl border border-stone-200/50 flex flex-col justify-between h-[250px]",
                        review.color
                    )}
                  >
                        {/* Quote Icon */}
                        <div className="absolute -top-4 -left-2 text-6xl font-serif text-amber-900/10 leading-none">"</div>
                        
                        <div>
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, starIndex) => (
                                    <Star key={starIndex} size={14} className="fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <p className="text-stone-700 font-serif italic text-lg leading-relaxed line-clamp-4">
                                {review.content}
                            </p>
                        </div>

                        <div className="mt-4 pt-4 border-t border-stone-100 flex justify-between items-end">
                            <div>
                                <h4 className="font-serif text-stone-900 font-bold">{review.name}</h4>
                                <p className="text-xs uppercase tracking-widest text-stone-400">{review.role}</p>
                            </div>
                            <div className="text-xs text-stone-300 font-mono">#{review.id}</div>
                        </div>
                  </motion.div>
                );
            })}
        </div>
      </div>
    </Section>
  );
}
