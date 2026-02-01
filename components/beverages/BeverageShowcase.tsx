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
  { id: 1, name: "The Alchemist", description: "A mystical blend of gin, elderflower, and gold dust.", image: "/drink/drink1.jpg", price: "$22" },
  { id: 2, name: "Crimson Velvet", description: "Vodka, raspberry reduction, and a hint of chili.", image: "/drink/drink2.jpg", price: "$18" },
  { id: 3, name: "Old Fashioned No. 7", description: "Bourbon, smoked maple syrup, angostura.", image: "/drink/drink3.jpg", price: "$20" },
  { id: 4, name: "Emerald City", description: "Midori, gin, lime, and egg white foam.", image: "/drink/drink4.jpg", price: "$19" },
  { id: 5, name: "Golden Hour", description: "Tequila reposado, agave, grapefruit, gold leaf.", image: "/drink/drink5.jpg", price: "$24" },
  { id: 6, name: "Midnight Martini", description: "Espresso, vodka, kahlua, vanilla bean.", image: "/drink/drink6.png", price: "$21" },
  { id: 7, name: "Sapphire Dream", description: "Gin, blue curacao, lemon, sparkling wine.", image: "/drink/drink7.jpg", price: "$18" },
  { id: 8, name: "Spiced Pearl", description: "Spiced rum, coconut cream, pineapple, nutmeg.", image: "/drink/drink8.jpg", price: "$20" },
  { id: 9, name: "Royal Fizz", description: "Champagne, cognac, lemon, strawberry.", image: "/drink/drink9.png", price: "$25" },
  { id: 10, name: "Dark Nebula", description: "Black vodka, blackberry liqueur, activated charcoal.", image: "/drink/drink10.jpg", price: "$23" },
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
