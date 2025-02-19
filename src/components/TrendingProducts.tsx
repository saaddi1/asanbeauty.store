
import { ProductCard } from "./ProductCard";

const trendingProducts = [
  {
    name: "Natural Clay Mask",
    price: "1150 PKR",
    image: "/lovable-uploads/89b0b21b-ea89-4311-88a0-91a84777cbbb.png",
  },
  {
    name: "Skin Whitening Serum",
    price: "1100 PKR",
    image: "/lovable-uploads/a2b15f17-646e-4bfc-b124-35e00a6c7857.png",
  },
  {
    name: "Hydrating Cream",
    price: "$34.99",
    image: "https://source.unsplash.com/photo-1535268647677-300dbf3d78d1",
  },
  {
    name: "Vitamin C Serum",
    price: "$39.99",
    image: "https://source.unsplash.com/photo-1485833077593-4278bba3f11f",
  },
];

export const TrendingProducts = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {trendingProducts.map((product) => (
        <ProductCard
          key={product.name}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};
