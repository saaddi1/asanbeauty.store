import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="hero-gradient">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Discover Your Natural Beauty
              </h1>
              <p className="text-lg text-white/90 mb-8">
                Experience our collection of premium skincare and beauty products
                made with natural ingredients.
              </p>
              <Button size="lg" className="bg-white text-pink-500 hover:bg-gray-100">
                Shop Now
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;