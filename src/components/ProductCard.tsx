
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { toast } from "./ui/use-toast";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
}

export const ProductCard = ({ name, price, image }: ProductCardProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleShopNow = () => {
    setIsLoading(true);
    
    // Simulate adding to cart with a delay
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Item added to cart",
        description: `${name} has been added to your shopping cart.`,
      });
    }, 600);
  };

  return (
    <div className="group cursor-pointer">
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-sm text-gray-700">{name}</h3>
        <p className="mt-1 text-sm font-medium text-gray-900">{price}</p>
        <Button 
          className="w-full mt-3" 
          variant="default" 
          size="sm"
          onClick={handleShopNow}
          disabled={isLoading}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          {isLoading ? "Adding..." : "Shop Now"}
        </Button>
      </div>
    </div>
  );
};
