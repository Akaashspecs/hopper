
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Great_Vibes, UnifrakturMaguntia } from "next/font/google";

const unifrakturMaguntia = UnifrakturMaguntia({
    weight: "400",
    subsets: ["latin"],
});

const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
});

gsap.registerPlugin(ScrollTrigger);

export default function MapSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<HTMLDivElement>(null);
    const infoRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
            });

            // Gentle background fade-in
            tl.fromTo(
                containerRef.current,
                { opacity: 0, backgroundColor: "#ffffff" },
                {
                    opacity: 1,
                    backgroundColor: "#fafaf9", // stone-50
                    duration: 1.2,
                }
            )
            .fromTo(
                mapRef.current,
                { opacity: 0, scale: 0.95, rotation: -2 },
                { opacity: 1, scale: 1, rotation: 2, duration: 1.2, ease: "back.out(1.4)" },
                "-=0.8"
            )
            .fromTo(
                infoRef.current,
                { opacity: 0, x: 40 },
                { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
                "-=0.8"
            )
            .fromTo(
                ".info-card-item",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, stagger: 0.15, duration: 0.8 },
                "-=0.6"
            );
        },
        { scope: containerRef }
    );

    return (
        <section ref={containerRef} className="w-full py-24 relative overflow-hidden bg-stone-50 text-stone-800 border-b border-stone-300">
            {/* Elegant Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 pointer-events-none mix-blend-multiply"></div>
            
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 info-card-item">
                    <h2 className={`${greatVibes.className}  text-6xl text-amber-700 mb-4 drop-shadow-sm`}>
                        Notre Emplacement
                    </h2>
                    <div className="h-1 w-20 bg-amber-400 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-stone-500 font-light max-w-2xl mx-auto italic">
                        "Where luxury meets the mountains."
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Map Column - Polaroid/Framed Style */}
                    <div ref={mapRef} className="relative group transform rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
                         {/* Tape effect (optional creative detail) */}
                         <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-8 bg-amber-100/50 rotate-[-2deg] shadow-sm z-20 backdrop-blur-sm border border-white/40"></div>
                         
                        <div className="relative w-full h-[500px] bg-white p-4 rounded-sm shadow-2xl border border-stone-200">
                            <div className="w-full h-full overflow-hidden border border-stone-100 relative">




<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.845656541718!2d4.8466375!3d45.7542401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea5cd61966e5%3A0x541d93c6711caec6!2sHopper!5e0!3m2!1sen!2sin!4v1769849088400!5m2!1sen!2sin"
   width="100%"
                                    height="100%"
      style={{ border: 0 }}
 loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700"></iframe>



                             
             
                            </div>
                            <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 text-xs font-serif text-stone-500 shadow-sm border border-stone-100 italic">
                                Caroline Hotel, Dolomites
                            </div>
                        </div>
                    </div>

                    {/* Info Column - Clean Stacking Cards */}
                    <div ref={infoRef} className="space-y-8">
                        {/* Box 1: Orari */}
                        <div className="info-card-item bg-white p-8 rounded-xl shadow-lg border-l-[6px] border-amber-400 group hover:shadow-2xl transition-all duration-300">
                           <div className="flex items-center justify-between mb-4">
                               <h3 className={`${greatVibes.className} text-4xl text-stone-800 group-hover:text-amber-700 transition-colors`}>Heures d'ouverture
</h3>
                               <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                           </div>
                           
                           <div className="space-y-3 pl-2">
                                <div className="flex justify-between items-center text-stone-600 border-b border-stone-50 pb-2">
                                    <span className="font-semibold text-sm tracking-widest uppercase text-stone-400">Lun - Sam</span>
                                    <span className="font-serif text-lg">07:00 am - 01:00 am</span>
                                </div>
                                <div className="flex justify-between items-center text-stone-600">
                                    <span className="font-semibold text-sm tracking-widest uppercase text-stone-400">Dimanche</span>
                                    <span className="font-serif text-lg">08:30 am - 01:00 am</span>
                                </div>
                           </div>
                        </div>

                        {/* Box 2: Servizi */}
                         <div className="info-card-item bg-white p-8 rounded-xl shadow-lg border-l-[6px] border-stone-300 group hover:border-amber-400 hover:shadow-2xl transition-all duration-300">
                           <div className="flex items-center justify-between mb-6">
                               <h3 className={`${greatVibes.className} text-3xl text-stone-800 group-hover:text-amber-700 transition-colors`}>Services Exclusifs</h3>
                               <svg className="w-6 h-6 text-stone-400 group-hover:text-amber-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                           </div>
                           <ul className="grid grid-cols-2 gap-4">
                                {[
                                    "Bar Lounge", "Restaurant", "ambiance haut de gamme", 
                                    "Climatisation", "Parking", "Piscine"
                                ].map((service, index) => (
                                    <li key={index} className="flex items-center space-x-3 text-stone-600">
                                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                                        <span className="font-light hover:text-stone-900 transition-colors cursor-default">{service}</span>
                                    </li>
                                ))}
                           </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
