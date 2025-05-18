
import { Card, CardContent } from "./ui/card";

// Import the product images from the same source as TrendingProducts
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
];

const brands = [
  {
    name: "Natural Glow",
    logo: trendingProducts[0].image, // Using product image from trending products
    description: "Organic skincare essentials",
  },
  {
    name: "Pure Beauty",
    logo: trendingProducts[1].image, // Using product image from trending products
    description: "Luxury cosmetics",
  },
  {
    name: "Eco Care",
    logo: trendingProducts[2].image, // Using product image from trending products
    description: "Sustainable beauty products",
  },
];

export const BrandSpotlight = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {brands.map((brand) => (
        <Card key={brand.name} className="overflow-hidden hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="aspect-square rounded-full overflow-hidden mb-4">
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-center mb-2">{brand.name}</h3>
            <p className="text-sm text-gray-600 text-center">{brand.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
