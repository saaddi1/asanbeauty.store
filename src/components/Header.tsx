
import { Search, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { ShoppingCartIcon } from "./ShoppingCart";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/fdeb6485-6214-4d95-80ec-73cfb8caed3c.png" 
                alt="Asan Mart Logo" 
                className="h-12 w-auto"
              />
            </a>
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
            <ShoppingCartIcon />
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
            <div className="mt-4 flex justify-between items-center">
              <Input
                type="search"
                placeholder="Search..."
                className="w-full mr-2"
              />
              <ShoppingCartIcon />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
