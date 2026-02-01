"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bg?: "default" | "surface" | "black";
}

export default function Section({ id, className, children, bg = "default" }: SectionProps) {
  const bgColors = {
    default: "bg-background",
    surface: "bg-surface",
    black: "bg-black",
  };

  return (
    <section
      id={id}
      className={cn("py-20 md:py-32 relative overflow-hidden", bgColors[bg], className)}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-6 relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
}
