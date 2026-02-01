"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white/70 py-12 border-t border-white/10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Brand */}
        <div>
          <Image src="/logo/logo.avif" className="mx-auto md:mx-0" alt="Logo" width={110} height={110} />
          <p className="text-sm leading-relaxed max-w-xs mx-auto md:mx-0 mt-3">
           
Un lieu d'exception pour les amateurs de cocktails. Découvrez l'art de la mixologie dans une atmosphère d'élégance raffinée.

          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-serif text-gold-light mb-2">Explore</h4>
          <Link href="/" className="hover:text-gold transition-colors text-sm">Home</Link>
          <Link href="#menu" className="hover:text-gold transition-colors text-sm">Menu</Link>
          <Link href="#vibe" className="hover:text-gold transition-colors text-sm">Vibe</Link>
          <Link href="#contact" className="hover:text-gold transition-colors text-sm">Reservations</Link>
        </div>

        {/* Contact & Hours */}
        <div>
          <h4 className="text-lg font-serif text-gold-light mb-2">Visit Us</h4>
          <p className="text-sm mb-1">43 Cr Gambetta, 69003 Lyon, France</p>
          <p className="text-sm mb-4">hello@hopperbar.com</p>
          
          <div className="flex justify-center md:justify-start gap-4 mt-4">
                        <div  className="hover:text-gold transition-colors"> <a href="https://www.instagram.com/hopperlyon/"><Instagram size={20} /></a></div>

            <div  className="hover:text-gold transition-colors"> <a href="https://www.facebook.com/hopperlyon"><Facebook size={20} /></a></div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-12 pt-8 border-t border-white/5 text-xs text-foreground/40">
        © {new Date().getFullYear()} Hopper Bar. All rights reserved.
      </div>
    </footer>
  );
}
