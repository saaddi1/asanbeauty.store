import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    title: "Face Wash Hydra Glow",
    subtitle: "Daily Facial Cleanser",
    buttonText: "Shop Now",
    buttonLink: "/products",
    bgImage: "/lovable-uploads/94706319-45e0-4994-a589-36d9613fb0af.png",
  },
  {
    title: "Complete Skin Care Kit",
    subtitle: "Transform Your Skincare Routine",
    buttonText: "View Kit",
    buttonLink: "/products/kit",
    bgImage: "/lovable-uploads/6983b519-66b9-43c3-915f-1510c57ae222.png",
  },
  {
    title: "Skin Whitening Serum",
    subtitle: "Brighten Your Complexion",
    buttonText: "Explore Now",
    buttonLink: "/products/serum",
    bgImage: "/lovable-uploads/08b02e15-3d65-460d-b58b-f41ad22b038f.png",
  },
  {
    title: "Clay Mask",
    subtitle: "For Skin Tightening",
    buttonText: "Shop Mask",
    buttonLink: "/products/mask",
    bgImage: "/lovable-uploads/5533a8b8-fb87-41ce-ae7c-92dc6c466b18.png",
  },
  {
    title: "Beauty Cream",
    subtitle: "Instant Skin Brightener",
    buttonText: "Get Glowing",
    buttonLink: "/products/cream",
    bgImage: "/lovable-uploads/c33fc75f-2b97-4d2d-b58b-f41ad22b038f.png",
  },
  {
    title: "Face Scrub",
    subtitle: "Glowing Rice Exfoliator",
    buttonText: "Shop Scrub",
    buttonLink: "/products/scrub",
    bgImage: "/lovable-uploads/1a5e4cca-f0dd-4a09-b052-1b9d793b527d.png",
  },
];

export const RotatingHeader = () => {
  const plugin = Autoplay({ delay: 5000 });

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin]}
      className="w-full"
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index} className="relative">
            <div className="relative h-[60vh] w-full overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${slide.bgImage})`,
                }}
              >
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
                <h2 className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">
                  {slide.title}
                </h2>
                <p className="mb-6 text-lg md:text-xl lg:text-2xl">
                  {slide.subtitle}
                </p>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground transition-transform hover:scale-105"
                >
                  {slide.buttonText}
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
};