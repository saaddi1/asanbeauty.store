
import { ProductCard } from "./ProductCard";
import { useRecommendations } from "../services/RecommendationService";

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

export const TrendingProducts = () => {
  // Use our recommendation service
  const { recommendations, trackProductView } = useRecommendations(trendingProducts);

  // Get either recommendations or trending products if no recommendations
  const productsToShow = recommendations.length > 0 ? recommendations : trendingProducts;
  
  const handleProductClick = (productName: string) => {
    trackProductView(productName);
  };

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-6">
      {productsToShow.map((product) => (
        <div key={product.name} onClick={() => handleProductClick(product.name)}>
          <ProductCard
            name={product.name}
            price={product.price}
            image={product.image}
          />
        </div>
      ))}
    </div>
  );
};
