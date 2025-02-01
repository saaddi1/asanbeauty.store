import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { RotatingHeader } from "@/components/RotatingHeader";
import { ProductCategories } from "@/components/ProductCategories";
import { TrendingProducts } from "@/components/TrendingProducts";
import { BrandSpotlight } from "@/components/BrandSpotlight";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <RotatingHeader />
      
      <main className="flex-1">
        {/* Categories Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#C1D9BF] to-[#F2FCE2]">
              Shop by Category
            </h2>
            <ProductCategories />
          </div>
        </section>

        {/* Trending Products */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#C1D9BF] to-[#F2FCE2]">
              Trending Now
            </h2>
            <TrendingProducts />
          </div>
        </section>

        {/* Brand Spotlight */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#C1D9BF] to-[#F2FCE2]">
              Featured Brands
            </h2>
            <BrandSpotlight />
          </div>
        </section>

        {/* Beauty Tips */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#C1D9BF] to-[#F2FCE2]">
              Beauty Tips & Tutorials
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-600 mb-6">
                Discover the latest beauty trends and expert tips to enhance your natural beauty.
                From skincare routines to makeup tutorials, we've got you covered.
              </p>
              <a
                href="/blog"
                className="inline-block bg-[#C1D9BF] text-gray-800 px-6 py-3 rounded-md hover:bg-[#A3C2A0] transition-colors"
              >
                Read More
              </a>
            </div>
          </div>
        </section>

        <Newsletter />
      </main>

      <Footer />
    </div>
  );
};

export default Index;