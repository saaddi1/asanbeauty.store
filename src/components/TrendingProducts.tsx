
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
    name: "Beauty Cream",
    price: "990 PKR",
    image: "/lovable-uploads/922ba74d-5810-4e1d-b461-2f8fa31802b3.png",
  },
  {
    name: "Hydra Glow Face Wash",
    price: "900 PKR",
    image: "/lovable-uploads/db0060eb-9d70-42b0-8168-6a18bcd6e847.png",
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
