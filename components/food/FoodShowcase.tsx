"use client";

import { useState } from "react";

import FoodSlider from "./FoodSlider";
import FoodDisplay from "./FoodDisplay";


export type Food = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
};

// Data based on the user's food files
const foods: Food[] = [
  {
    id: 1,
    name: "Burger Gourmet",
    description: "Steak de bœuf premium, mayonnaise à la truffe, cheddar affiné.",
    image: "/food/food1.jpg",
    price: "$28"
  },
  {
    id: 2,
    name: "Tartare de Bar",
    description: "Marinade aux agrumes, mousse d’avocat, caviar.",
    image: "/food/food2.jpg",
    price: "$32"
  },
  {
    id: 3,
    name: "Brochettes de Wagyu",
    description: "Grillées au charbon binchotan, glaçage au miso.",
    image: "/food/food3.jpg",
    price: "$45"
  },
  {
    id: 4,
    name: "Raviolis au Homard",
    description: "Pâtes fraîches maison, sauce crème au safran.",
    image: "/food/food4.jpg",
    price: "$38"
  },
  {
    id: 5,
    name: "Frites à la Truffe",
    description: "Parmesan râpé, huile de truffe blanche.",
    image: "/food/food5.jpeg",
    price: "$16"
  },
  {
    id: 6,
    name: "Calamars Croustillants",
    description: "Aïoli citronné épicé, herbes fraîches.",
    image: "/food/food6.jpg",
    price: "$22"
  },
  {
    id: 7,
    name: "Salade Burrata",
    description: "Tomates anciennes, pesto de basilic, balsamique.",
    image: "/food/food7.jpg",
    price: "$24"
  },
  {
    id: 8,
    name: "Planche de Charcuterie",
    description: "Sélection de charcuteries fines et fromages artisanaux.",
    image: "/food/food8.jpg",
    price: "$40"
  },
  {
    id: 9,
    name: "Huîtres Rockefeller",
    description: "Épinards, lard fumé, sauce hollandaise.",
    image: "/food/food9.jpeg",
    price: "$36"
  },
  {
    id: 10,
    name: "Fondant au Chocolat",
    description: "Cœur coulant, glace à la vanille Bourbon.",
    image: "/food/food10.jpg",
    price: "$18"
  },
  {
    id: 11,
    name: "Pizza Artisanale",
    description: "Prosciutto, roquette, confiture de figues.",
    image: "/food/food11.jpg",
    price: "$26"
  }
];

export default function FoodShowcase() {
  const [selectedFood, setSelectedFood] = useState<Food>(foods[0]);

  return (
    <div className="flex flex-col h-screen relative w-full">
      {/* Main Display Area */}
      <div className="flex-1 relative min-h-[500px] md:min-h-[600px]">
        <FoodDisplay food={selectedFood} />
      </div>

      {/* Slider Area */}
      <div className="absolute bottom-0 w-screen z-20 bg-black/90 backdrop-blur-md border-t border-white/10 pt-6 pb-8">
        <div className="container mx-auto px-6">
            <h3 className="text-sm font-serif text-gold tracking-widest uppercase mb-4 text-center md:text-left">Select your Dish</h3>
            <FoodSlider 
                foods={foods} 
                selectedId={selectedFood.id} 
                onSelect={setSelectedFood} 
            />
        </div>
      </div>
    </div>
  );
}
