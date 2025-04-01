
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ImageUploader } from "@/components/ImageUploader";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";

const UploadProducts = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [previewVisible, setPreviewVisible] = useState(false);

  const handleImageUploaded = (imageUrl: string) => {
    setProductImage(imageUrl);
  };

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!productName || !productPrice || !productImage) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields and upload an image",
        variant: "destructive",
      });
      return;
    }
    
    // In a real application, you would save the product to a database here
    toast({
      title: "Product created",
      description: "Your product has been created successfully",
    });
    
    setPreviewVisible(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#C1D9BF] to-[#F2FCE2]">
            Upload New Product
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleCreateProduct} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Product Name</Label>
                    <Input
                      id="name"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      placeholder="Enter product name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="price">Product Price (PKR)</Label>
                    <Input
                      id="price"
                      value={productPrice}
                      onChange={(e) => setProductPrice(e.target.value)}
                      placeholder="Enter price in PKR"
                    />
                  </div>
                  
                  <ImageUploader onImageUploaded={handleImageUploaded} />
                  
                  <Button type="submit" className="w-full">
                    Create Product
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Product Preview</h2>
              {previewVisible ? (
                <ProductCard
                  name={productName}
                  price={`${productPrice} PKR`}
                  image={productImage}
                />
              ) : (
                <div className="flex items-center justify-center h-64 border-2 border-dashed border-gray-300 rounded-lg">
                  <p className="text-gray-500">Fill in all fields to see preview</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UploadProducts;
