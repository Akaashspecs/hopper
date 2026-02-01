"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    object: "", // Subject
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network delay for premium feel
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Construct mailto link
    const subject = encodeURIComponent(formState.object);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:hello@hopperbar.com?subject=${subject}&body=${body}`;

    setIsSubmitting(false);
    // Optional: Reset form or show success message
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section for Contact */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden bg-black">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1974&auto=format&fit=crop')] opacity-20 bg-cover bg-center" />
         <div className="container mx-auto text-center relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-serif text-gold mb-6"
            >
              Get in Touch
            </motion.h1>
            <motion.p 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.3, duration: 0.8 }}
               className="text-foreground/60 max-w-xl mx-auto font-light"
            >
              Reservations, private events, or just to say hello. We look forward to hearing from you.
            </motion.p>
         </div>
      </section>

      <Section bg="surface">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2 group">
                <label className="text-sm tracking-widest uppercase text-gold/80 block">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:outline-none focus:border-gold transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm tracking-widest uppercase text-gold/80 block">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:outline-none focus:border-gold transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm tracking-widest uppercase text-gold/80 block">Object</label>
              <input
                type="text"
                name="object"
                value={formState.object}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:outline-none focus:border-gold transition-colors"
                placeholder="Reservation Inquiry"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm tracking-widest uppercase text-gold/80 block">Message</label>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-transparent border-b border-foreground/20 py-2 text-foreground focus:outline-none focus:border-gold transition-colors resize-none"
                placeholder="How can we assist you?"
              />
            </div>

            <div className="pt-8 text-center">
              <Button 
                disabled={isSubmitting} 
                className="w-full md:w-auto min-w-[200px]"
              >
                {isSubmitting ? (
                   <span className="flex items-center justify-center gap-2">
                      <span className="animate-spin h-4 w-4 border-2 border-white/20 border-t-white rounded-full"/>
                      Sending...
                   </span>
                ) : (
                  "Send Message"
                )}
              </Button>
            </div>
          </form>
        </div>
      </Section>
      
      <Footer />
    </main>
  );
}
