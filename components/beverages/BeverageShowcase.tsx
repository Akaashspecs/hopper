"use client";

import { useState } from "react";

import DrinkSlider from "./DrinkSlider";
import DrinkDisplay from "./DrinkDisplay";


export type Drink = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
};

// Data based on the user's files and some creative placeholders
const drinks: Drink[] = [
  {
    id: 1,
    name: "The Alchemist",
    description: "Un mélange mystique de gin, fleur de sureau et poussière d’or.",
    image: "/drink/drink1.jpg",
    price: "$22"
  },
  {
    id: 2,
    name: "Crimson Velvet",
    description: "Vodka, réduction de framboise et une touche de piment.",
    image: "/drink/drink2.jpg",
    price: "$18"
  },
  {
    id: 3,
    name: "Old Fashioned",
    description: "Bourbon, sirop d’érable fumé et angostura.",
    image: "/drink/drink3.jpg",
    price: "$20"
  },
  {
    id: 4,
    name: "Emerald City",
    description: "Midori, gin, citron vert et mousse de blanc d’œuf.",
    image: "/drink/drink4.jpg",
    price: "$19"
  },
  {
    id: 5,
    name: "Golden Hour",
    description: "Tequila reposado, agave, pamplemousse et feuille d’or.",
    image: "/drink/drink5.jpg",
    price: "$24"
  },
  {
    id: 6,
    name: "Midnight Martini",
    description: "Espresso, vodka, Kahlúa et gousse de vanille.",
    image: "/drink/drink6.png",
    price: "$21"
  },
  {
    id: 7,
    name: "Sapphire Dream",
    description: "Gin, curaçao bleu, citron et vin pétillant.",
    image: "/drink/drink7.jpg",
    price: "$18"
  },
  {
    id: 8,
    name: "Spiced Pearl",
    description: "Rhum épicé, crème de coco, ananas et noix de muscade.",
    image: "/drink/drink8.jpg",
    price: "$20"
  },
  {
    id: 9,
    name: "Royal Fizz",
    description: "Champagne, cognac, citron et fraise.",
    image: "/drink/drink9.png",
    price: "$25"
  },
  {
    id: 10,
    name: "Dark Nebula",
    description: "Vodka noire, liqueur de mûre et charbon actif.",
    image: "/drink/drink10.jpg",
    price: "$23"
  }
];

export default function BeverageShowcase() {
  const [selectedDrink, setSelectedDrink] = useState<Drink>(drinks[0]);

  return (
    <div className="flex flex-col h-screen relative w-full">
      {/* Main Display Area */}
      <div className="flex-1 relative min-h-[500px] md:min-h-[600px]">
        <DrinkDisplay drink={selectedDrink} />
      </div>

      {/* Slider Area */}
      <div className="absolute bottom-0 w-screen z-20 bg-black/90 backdrop-blur-md border-t border-white/10 pt-6 pb-8">
        <div className="container mx-auto px-6">
            <h3 className="text-sm font-serif text-gold tracking-widest uppercase mb-4 text-center md:text-left">Select your Elixir</h3>
            <DrinkSlider 
                drinks={drinks} 
                selectedId={selectedDrink.id} 
                onSelect={setSelectedDrink} 
            />
        </div>
      </div>
    </div>
  );
}
