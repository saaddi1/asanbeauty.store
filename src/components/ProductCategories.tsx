import { Lipstick, Sparkles, Scissors, Spray, Brush, Leaf } from "lucide-react";
import { Card } from "./ui/card";

const categories = [
  {
    name: "Makeup",
    icon: Lipstick,
    description: "Lipsticks, Eyeshadow Palettes, Foundations & More",
    href: "/categories/makeup",
  },
  {
    name: "Skincare",
    icon: Sparkles,
    description: "Cleansers, Moisturizers, Serums & Masks",
    href: "/categories/skincare",
  },
  {
    name: "Haircare",
    icon: Scissors,
    description: "Shampoos, Conditioners & Styling Products",
    href: "/categories/haircare",
  },
  {
    name: "Fragrances",
    icon: Spray,
    description: "Perfumes, Body Mists & Travel-Size Scents",
    href: "/categories/fragrances",
  },
  {
    name: "Tools & Accessories",
    icon: Brush,
    description: "Brushes, Rollers & Beauty Tools",
    href: "/categories/tools",
  },
  {
    name: "Natural & Organic",
    icon: Leaf,
    description: "Vegan, Cruelty-Free & Natural Products",
    href: "/categories/natural",
  },
];

export const ProductCategories = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <a
          key={category.name}
          href={category.href}
          className="group transition-transform hover:scale-105"
        >
          <Card className="p-6 h-full bg-white hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-[#F2FCE2] group-hover:bg-[#C1D9BF] transition-colors">
                <category.icon className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
              <p className="text-sm text-gray-600">{category.description}</p>
            </div>
          </Card>
        </a>
      ))}
    </div>
  );
};