import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import MenuPreview from "@/components/home/MenuPreview";
import VibeSection from "@/components/home/VibeSection";
import Reviews from "@/components/home/Reviews";
import Location from "@/components/home/Location";
import MapSection from "./components/MapSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <MenuPreview />
 
    
      <VibeSection />

        <MapSection/>
             <Reviews />
      <Footer />
    </main>
  );
}
