import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FoodShowcase from "@/components/food/FoodShowcase";

export default function FoodPage() {
  return (
    <main className="min-h-screen bg-black text-foreground flex flex-col">
      <Header variant="nofixed" />
      
      <div className="flex-1 w-full ">
        <FoodShowcase />
      </div>
    </main>
  );
}
