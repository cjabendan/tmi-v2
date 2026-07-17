import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";

export default function Home() {
    return (
    <div className="flex flex-col">
      <Header />
      <div className="min-h-screen bg-background">
        <Hero />
      </div>
      <Footer />
    </div>
  );
}
