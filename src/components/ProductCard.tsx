interface ProductCardProps {
  name: string;
  price: string;
  image: string;
}

export const ProductCard = ({ name, price, image }: ProductCardProps) => {
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
      </div>
    </div>
  );
};