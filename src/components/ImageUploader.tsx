
import { useState } from "react";
import { Button } from "./ui/button";
import { Upload } from "lucide-react";
import { toast } from "./ui/use-toast";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./ui/card";

export const ImageUploader = ({ onImageUploaded }: { onImageUploaded?: (imageUrl: string) => void }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (JPG, PNG, etc.)",
        variant: "destructive",
      });
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 5MB",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);

    // Create local preview URL
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
      setIsUploading(false);
      
      // In a real application, you would upload the file to a server here
      // For now, we'll just use the local preview URL
      if (onImageUploaded) {
        onImageUploaded(reader.result as string);
      }
      
      toast({
        title: "Image uploaded",
        description: "Your image has been uploaded successfully",
      });
    };
    
    reader.readAsDataURL(file);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Upload Product Image</CardTitle>
      </CardHeader>
      <CardContent>
        {previewUrl ? (
          <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-4">
            <img
              src={previewUrl}
              alt="Preview"
              className="h-full w-full object-cover object-center"
            />
          </div>
        ) : (
          <div className="aspect-square flex items-center justify-center rounded-lg bg-gray-100 mb-4 border-2 border-dashed border-gray-300">
            <div className="text-center p-4">
              <Upload className="h-8 w-8 mx-auto text-gray-400" />
              <p className="mt-2 text-sm text-gray-500">Click to upload an image</p>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-center">
        <label className="w-full">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
            disabled={isUploading}
          />
          <Button
            variant="default"
            className="w-full"
            disabled={isUploading}
            asChild
          >
            <span>
              <Upload className="mr-2 h-4 w-4" />
              {isUploading ? "Uploading..." : "Upload Image"}
            </span>
          </Button>
        </label>
      </CardFooter>
    </Card>
  );
};
