"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Food", href: "/food" },
  { name: "Beverages", href: "/beverages" },
  { name: "Contact", href: "/contact" },
];

interface HeaderProps {
  variant?: "fixed" | "nofixed";
}

export default function Header({ variant = "fixed" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const positionClass = variant === "fixed" ? "fixed" : "relative";

  return (
    <header
      className={`${positionClass} top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled && variant === "fixed" ? "bg-black/20 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6 bg-white/10"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif text-gold font-bold tracking-widest">
          <Image src="/logo/logo.avif" alt="Logo" width={110} height={110} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-gold transition-colors font-sans text-sm tracking-widest uppercase"
            >
              {link.name}
            </Link>
          ))}
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://menu.eazee-link.com/?o=q&id=G3NALPTT9N"
            className="px-6 py-2 border border-gold text-gold font-serif text-sm tracking-widest uppercase hover:bg-gold hover:text-black transition-all duration-300 rounded-sm"
          >
            View Menu
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white hover:text-gold"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-gold/20 md:hidden"
          >
            <nav className="flex flex-col p-6 gap-4 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground hover:text-gold text-lg font-serif"
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="/menu" 
                className="w-full text-center px-6 py-3 border border-gold text-gold font-serif text-lg hover:bg-gold hover:text-black transition-all duration-300 rounded-sm mt-4"
              >
                View Menu
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
