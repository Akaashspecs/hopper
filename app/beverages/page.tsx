import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BeverageShowcase from "@/components/beverages/BeverageShowcase";

export default function BeveragesPage() {
  return (
    <main className="min-h-screen bg-black text-foreground flex flex-col">
      <Header variant="mobile-nofixed" />
      
      <div className="flex-1 w-full ">
        <BeverageShowcase />
      </div>
    </main>
  );
}
