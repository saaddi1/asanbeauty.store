import { Card, CardContent } from "./ui/card";

const brands = [
  {
    name: "Natural Glow",
    logo: "https://source.unsplash.com/photo-1582562124811-c09040d0a901",
    description: "Organic skincare essentials",
  },
  {
    name: "Pure Beauty",
    logo: "https://source.unsplash.com/photo-1721322800607-8c38375eef04",
    description: "Luxury cosmetics",
  },
  {
    name: "Eco Care",
    logo: "https://source.unsplash.com/photo-1535268647677-300dbf3d78d1",
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