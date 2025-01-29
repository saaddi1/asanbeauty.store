import { Facebook, Instagram, Twitter } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { Newsletter } from "./Newsletter";

const topSellingProducts = [
  {
    name: "Hydrating Face Cream",
    price: "$24.99",
    image: "/placeholder.svg"
  },
  {
    name: "Vitamin C Serum",
    price: "$29.99",
    image: "/placeholder.svg"
  },
  {
    name: "Rose Water Toner",
    price: "$19.99",
    image: "/placeholder.svg"
  },
  {
    name: "Clay Face Mask",
    price: "$22.99",
    image: "/placeholder.svg"
  }
];

export const Footer = () => {
  return (
    <footer className="bg-white">
      <Newsletter />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Selling Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {topSellingProducts.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8 border-t">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">About Us</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-pink-400">Our Story</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-400">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-400">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Customer Service</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-pink-400">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-400">Shipping</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-400">Returns</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-pink-400">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-400">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2024 BNB Beauty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};