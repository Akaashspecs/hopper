"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import Button from "@/components/ui/Button";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        delay: 0.5,
      })
        .from(
          subtitleRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 1,
          },
          "-=0.8"
        )
        .from(
          buttonsRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen min-h-[800px] w-full flex items-center justify-center overflow-hidden bg-stone-900"
    >
      {/* Background Image/Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* Placeholder for premium bar background */}
        <div 
            className="w-full h-full bg-cover bg-center opacity-80 scale-105 animate-subtle-zoom"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop")' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white mb-6 tracking-tighter"
        >
          HOPPER
        </h1>
        <p
          ref={subtitleRef}
          className="text-lg md:text-2xl text-white/90 font-light tracking-widest mb-10 font-sans"
        >
          EXPERIENCE THE ART OF MIXOLOGY
        </p>
        
        <div ref={buttonsRef} className="flex flex-col md:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              View Menu
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Book a Table
            </Button>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
      </div>
    </div>
  );
}
