"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
});

gsap.registerPlugin(ScrollTrigger);

const Info = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const textRef1 = useRef<HTMLDivElement>(null);
    const textRef2 = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                    end: "bottom 25%",
                    toggleActions: "play none none reverse",
                },
            });

            tl.fromTo(
                titleRef.current,
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
            )
                .fromTo(
                    textRef1.current,
                    { opacity: 0, x: 50 },
                    { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
                    "-=0.8"
                )
                .fromTo(
                    textRef2.current,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
                    "-=0.6"
                );
        },
        { scope: containerRef }
    );

    return (
        <section ref={containerRef} className="py-32 px-6 md:px-12 bg-neutral-50 text-black overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-16">

                {/* Visual / Title Side */}
                <div className="w-full md:w-1/3 text-center md:text-right">
                    <h2
                        ref={titleRef}
                        className={`${greatVibes.className} text-7xl md:text-8xl leading-none text-black drop-shadow-sm`}
                    >
                        Chi <br /> siamo
                    </h2>
                    <div className="hidden md:block w-[1px] h-32 bg-black/30 mx-auto mt-8 md:ml-auto md:mr-10"></div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-2/3 space-y-12">
                    <div ref={textRef1} className="text-xl md:text-2xl font-light text-gray-800 leading-relaxed border-l-4 border-black pl-6">
                        <p className="font-semibold">
         Expertise and quality products...
                        </p>
                    </div>

                    <div ref={textRef2} className="text-lg md:text-xl text-gray-600 leading-loose space-y-6">
                        <p>
                            During the week, the chefs at Hopper will offer a reduced menu to vary the sweet and savory delights according to the seasons.
                        </p>
                        <p>
                          Et enfin, pour se donner un peu de courage, rien ne vaut un Smoothie maison, un Jus pressé ou bien d'autres délicieux nectars !
                        </p>
                        <p>
                          La bière et le Hopper c'est une grande histoire d'amour...

 

Les 18 pressions et canettes ont été sélectionnées avec le plus grand soin afin d'étancher la soif de quelques-uns, de retrouver des valeurs sûres pour d'autres et enfin, et surtout, de faire découvrir de très belles choses à tout le monde.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;