import { Search, ShoppingBag, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-400">
              BNB Beauty
            </h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-pink-400">Skincare</a>
              <a href="#" className="text-gray-600 hover:text-pink-400">Makeup</a>
              <a href="#" className="text-gray-600 hover:text-pink-400">Hair</a>
              <a href="#" className="text-gray-600 hover:text-pink-400">Body</a>
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 pr-4"
              />
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            <Button variant="ghost">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>

          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-600 hover:text-pink-400">Skincare</a>
              <a href="#" className="text-gray-600 hover:text-pink-400">Makeup</a>
              <a href="#" className="text-gray-600 hover:text-pink-400">Hair</a>
              <a href="#" className="text-gray-600 hover:text-pink-400">Body</a>
            </nav>
            <div className="mt-4">
              <Input
                type="search"
                placeholder="Search..."
                className="w-full"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};