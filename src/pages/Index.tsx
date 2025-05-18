
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { RotatingHeader } from "@/components/RotatingHeader";
import { ProductCategories } from "@/components/ProductCategories";
import { TrendingProducts } from "@/components/TrendingProducts";
import { BrandSpotlight } from "@/components/BrandSpotlight";
import { ProductRecommendations } from "@/components/ProductRecommendations";

const trendingProducts = [
  {
    name: "Natural Clay Mask - Deep Cleansing Formula",
    price: "1150 PKR",
    image: "/lovable-uploads/89b0b21b-ea89-4311-88a0-91a84777cbbb.png",
  },
  {
    name: "Skin Whitening Serum - Advanced Brightening",
    price: "1100 PKR",
    image: "/lovable-uploads/a2b15f17-646e-4bfc-b124-35e00a6c7857.png",
  },
  {
    name: "Beauty Cream - 24-Hour Hydration Formula",
    price: "990 PKR",
    image: "/lovable-uploads/922ba74d-5810-4e1d-b461-2f8fa31802b3.png",
  },
  {
    name: "Hydra Glow Face Wash - Gentle Daily Cleanser",
    price: "900 PKR",
    image: "/lovable-uploads/db0060eb-9d70-42b0-8168-6a18bcd6e847.png",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <RotatingHeader />
      
      <main className="flex-1">
        {/* Categories Section */}
        <section className="py-8 md:py-16 bg-white">
          <div className="container mx-auto px-3 md:px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#C1D9BF] to-[#F2FCE2]">
              Shop by Category
            </h2>
            <ProductCategories />
          </div>
        </section>

        {/* Personalized Recommendations Section */}
        <section className="py-8 md:py-16 bg-white">
          <div className="container mx-auto px-3 md:px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#C1D9BF] to-[#F2FCE2]">
              Just For You
            </h2>
            <ProductRecommendations products={trendingProducts} />
          </div>
        </section>

        {/* Trending Products */}
        <section className="py-8 md:py-16 bg-gray-50">
          <div className="container mx-auto px-3 md:px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#C1D9BF] to-[#F2FCE2]">
              Trending Now
            </h2>
            <TrendingProducts />
          </div>
        </section>

        {/* Brand Spotlight */}
        <section className="py-8 md:py-16 bg-white">
          <div className="container mx-auto px-3 md:px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#C1D9BF] to-[#F2FCE2]">
              Featured Brands
            </h2>
            <BrandSpotlight />
          </div>
        </section>

        {/* Beauty Tips */}
        <section className="py-8 md:py-16 bg-gray-50">
          <div className="container mx-auto px-3 md:px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#C1D9BF] to-[#F2FCE2]">
              Beauty Tips & Tutorials
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm md:text-lg text-gray-600 mb-4 md:mb-6">
                Discover the latest beauty trends and expert tips to enhance your natural beauty.
                From skincare routines to makeup tutorials, we've got you covered.
              </p>
              <a
                href="/blog"
                className="inline-block bg-[#C1D9BF] text-gray-800 px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-[#A3C2A0] transition-colors text-sm md:text-base"
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
