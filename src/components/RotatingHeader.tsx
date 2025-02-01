import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    title: "Explore Our Beauty",
    subtitle: "Shop Now!",
    buttonText: "Shop Now",
    buttonLink: "/products",
    bgImage: "photo-1649972904349-6e44c42644a7",
  },
  {
    title: "Limited Time Offer",
    subtitle: "50% Off on Ramdan Offer",
    buttonText: "View Offers",
    buttonLink: "/offers",
    bgImage: "photo-1581091226825-a6a2a5aee158",
  },
  {
    title: "Discover Your Next Beauty Product",
    subtitle: "Browse Categories!",
    buttonText: "Explore Categories",
    buttonLink: "/categories",
    bgImage: "photo-1649972904349-6e44c42644a7",
  },
  {
    title: "Stock Up for the Season",
    subtitle: "Shop Now!",
    buttonText: "Shop Seasonal Picks",
    buttonLink: "/seasonal",
    bgImage: "photo-1581091226825-a6a2a5aee158",
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
                  backgroundImage: `url(https://source.unsplash.com/${slide.bgImage})`,
                }}
              >
                <div className="absolute inset-0 bg-black/40" />
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