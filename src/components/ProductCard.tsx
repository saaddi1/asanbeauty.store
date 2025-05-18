import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "./ui/use-toast";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
}

export const ProductCard = ({ name, price, image }: ProductCardProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { addToCart, setIsCartOpen } = useCart();
  
  // Track view in localStorage when product is rendered
  useEffect(() => {
    try {
      const viewHistory = JSON.parse(localStorage.getItem('view_history') || '[]');
      // Check if this product was recently viewed (last 5 minutes)
      const recentlyViewed = viewHistory.some((item: any) => 
        item.productName === name && 
        Date.now() - item.timestamp < 5 * 60 * 1000
      );
      
      // If not recently viewed, track it
      if (!recentlyViewed) {
        // We'll let the parent component handle tracking
        // This is just to ensure we're not tracking on every re-render
      }
    } catch (error) {
      console.error('Error tracking product view:', error);
    }
  }, [name]);

  const handleShopNow = () => {
    // Set loading state
    setIsLoading(true);
    
    // Add to cart
    addToCart({ name, price, image });
    
    // Show toast notification
    toast({
      title: "Item added to cart",
      description: `${name} has been added to your shopping cart.`,
    });
    
    // Reset loading state immediately
    setIsLoading(false);
    
    // Open the cart
    setIsCartOpen(true);
  };

  const handleImageError = () => {
    setImageError(true);
    console.error(`Failed to load image: ${image}`);
  };

  return (
    <div className="group cursor-pointer rounded-lg border border-gray-200 p-2 hover:shadow-md transition-all">
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
        {imageError ? (
          <div className="h-full w-full flex items-center justify-center bg-gray-200">
            <p className="text-xs text-gray-500 p-2 text-center">{name}</p>
          </div>
        ) : (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover object-center"
            onError={handleImageError}
            loading="lazy"
          />
        )}
      </div>
      <div className="mt-3 md:mt-4 px-1">
        <h3 className="text-xs sm:text-sm font-medium text-gray-700 line-clamp-2">{name}</h3>
        <p className="mt-1 text-xs sm:text-sm font-bold text-gray-900">{price}</p>
        <div className="text-xs text-gray-500 mb-2 line-clamp-2">
          Premium quality beauty product for your skincare routine
        </div>
        <Button 
          className="w-full mt-2 md:mt-3 text-xs sm:text-sm" 
          variant="default" 
          size="sm"
          onClick={handleShopNow}
          disabled={isLoading}
        >
          <ShoppingCart className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
          Shop Now
        </Button>
      </div>
    </div>
  );
};
