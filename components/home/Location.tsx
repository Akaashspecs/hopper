"use client";

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function Location() {
  return (
    <Section id="contact" bg="default" className="border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Map Placeholder */}
        <div className="h-[400px] w-full bg-surface relative group overflow-hidden">
             {/* Simple Map Image Placeholder */}
             <div 
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop")' }}
             />
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="bg-white/90 backdrop-blur-sm px-6 py-3 text-amber-700 font-serif shadow-lg rounded-sm tracking-widest border border-amber-100">
                     Open Map
                 </div>
             </div>
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-serif text-amber-900 mb-8">Find Us</h2>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-gold text-lg mb-2">Location</h4>
              <p className="text-foreground/70">123 Cocktail Ave, Arts District</p>
              <p className="text-foreground/70">New York, NY 10012</p>
            </div>
            
            <div>
              <h4 className="text-gold text-lg mb-2">Hours</h4>
              <div className="grid grid-cols-2 max-w-xs text-foreground/70">
                <span>Tue - Thu</span>
                <span>5pm - 12am</span>
                <span>Fri - Sat</span>
                <span>5pm - 2am</span>
                <span>Sun</span>
                <span>4pm - 11pm</span>
              </div>
            </div>

            <div className="pt-8">
               <Button size="lg">Make a Reservation</Button>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}
