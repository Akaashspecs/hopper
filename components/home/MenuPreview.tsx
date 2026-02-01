"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Image from "next/image";

const cocktails = [
  {
    id: 1,
    name: "The Golden Hopper",
    description: "Rye whiskey, truffle honey, angostura bitters, gold flake.",
    price: "$24",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=1964&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Midnight Silk",
    description: "Gin, creme de violette, lemon, maraschino, egg white.",
    price: "$20",
    image: "https://images.unsplash.com/photo-1536935338725-8f319ac6f6d3?q=80&w=1926&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Smoked Ember",
    description: "Mezcal, agave, chili tincture, smoked rosemary.",
    price: "$22",
    image: "https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function MenuPreview() {
  return (
    <div id="menu" bg="default">
     <Image src="/bar/bar.png" alt="Menu" width={1920} height={1080} />
    </div>
  );
}
