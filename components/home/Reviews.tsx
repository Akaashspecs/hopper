"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const reviews = [
  {
    id: 1,
    name: "Elena R.",
    role: "Critique gastronomique",
    content: "Un véritable chef-d’œuvre de mixologie. L’attention portée aux détails est inégalée.",
    rating: 5,
    color: "bg-white"
  },
  {
    id: 2,
    name: "James T.",
    role: "Client régulier",
    content: "L’atmosphère vous transporte dans une autre époque. Mon adresse incontournable.",
    rating: 5,
    color: "bg-stone-50"
  },
  {
    id: 3,
    name: "Sarah L.",
    role: "Sommelière",
    content: "Une sélection de vins irréprochable, mais les cocktails signature volent la vedette.",
    rating: 5,
    color: "bg-amber-50"
  },
  {
    id: 4,
    name: "Michael B.",
    role: "Designer",
    content: "Visuellement époustouflant. Chaque recoin est une opportunité photo.",
    rating: 5,
    color: "bg-white"
  },
  {
    id: 5,
    name: "Jessica K.",
    role: "Organisatrice d’événements",
    content: "Nous avons organisé une soirée privée ici et le service était irréprochable.",
    rating: 5,
    color: "bg-stone-50"
  },
  {
    id: 6,
    name: "David W.",
    role: "Chef",
    content: "Des profils de saveurs qui surprennent et ravissent le palais.",
    rating: 5,
    color: "bg-amber-50"
  },
  {
    id: 7,
    name: "Olivia P.",
    role: "Artiste",
    content: "Le « Golden Hopper » n’est pas qu’un cocktail, c’est une véritable expérience.",
    rating: 5,
    color: "bg-white"
  },
  {
    id: 8,
    name: "Ryan G.",
    role: "Musicien",
    content: "Excellente acoustique, boissons encore meilleures. L’endroit parfait pour se détendre.",
    rating: 5,
    color: "bg-stone-50"
  }
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
    <Section className= " bg-stone-100 overflow-hidden min-h-[600px] flex flex-col justify-center">
      <div className="container mx-auto relative h-full flex flex-col items-center">
        
        <div className="text-center mb-12 relative z-10 pointer-events-none">
          <h2 className="text-4xl md:text-5xl font-serif text-amber-900 mb-4">Guest Book</h2>
          <p className="text-stone-500">Tap a card to read the experience</p>
        </div>

        {/* The Stack Container (Mobile Only) */}
        <div className="relative w-full max-w-lg h-[450px]  flex md:hidden items-center justify-center mt-12 mb-12">
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
                        "absolute w-[280px] p-8 rounded-2xl shadow-xl border rou border-stone-200/50 flex flex-col justify-between h-[250px]",
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
                            <p className="text-stone-700 font-serif italic text-sm md:text-lg leading-relaxed line-clamp-4">
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

        {/* Simple Grid Layout (Desktop Only) */}
        <div className="hidden md:grid grid-cols-3 gap-8 w-full max-w-6xl mt-12">
            {reviews.slice(0, 3).map((review) => (
                <div 
                    key={review.id}
                    className="bg-white p-8 rounded-sm shadow-sm border border-stone-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                    <div className="flex gap-1 mb-6">
                        {[...Array(review.rating)].map((_, starIndex) => (
                            <Star key={starIndex} size={16} className="fill-amber-400 text-amber-400" />
                        ))}
                    </div>
                    
                    <p className="text-stone-700 font-serif italic text-xl leading-relaxed mb-6">
                        "{review.content}"
                    </p>

                    <div className="pt-6 border-t border-stone-100 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 font-serif font-bold">
                            {review.name.charAt(0)}
                        </div>
                        <div>
                            <h4 className="font-serif text-stone-900 font-bold text-lg">{review.name}</h4>
                            <p className="text-xs uppercase tracking-widest text-stone-400">{review.role}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </Section>
  );
}
