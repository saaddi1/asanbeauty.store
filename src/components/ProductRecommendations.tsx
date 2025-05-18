
import React, { useEffect } from "react";
import { ProductCard } from "./ProductCard";

type Product = {
  name: string;
  price: string;
  image: string;
};

interface ProductRecommendationsProps {
  products: Product[];
  currentProductName?: string;
}

export const ProductRecommendations: React.FC<ProductRecommendationsProps> = ({ 
  products, 
  currentProductName 
}) => {
  // Get trending products from all available products
  const trendingProducts = products.slice(0, 4);
  
  // If we have a current product being viewed, we could track it here
  useEffect(() => {
    if (currentProductName) {
      // This is where we would track the view event
      // For now, we'll just log it to console
      console.log(`User is viewing: ${currentProductName}`);
    }
  }, [currentProductName]);

  if (products.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Recommended For You</h3>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-6">
        {trendingProducts.map((product) => (
          <ProductCard
            key={product.name}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
      <p className="text-sm text-gray-500 mt-2 text-center">
        Recommendations based on your browsing history and popular items
      </p>
    </div>
  );
};
