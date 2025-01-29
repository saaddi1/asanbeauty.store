import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Newsletter = () => {
  return (
    <div className="bg-pink-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900">
            Subscribe to our newsletter
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Get the latest updates on new products and upcoming sales
          </p>
          <div className="mt-4 flex max-w-md mx-auto gap-x-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
};