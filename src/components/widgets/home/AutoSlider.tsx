"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi
} from "@/components/ui/carousel";
import { Mountain, Coffee, Utensils, Calendar, Map, Hotel, Camera, Music, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface SlideProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  backgroundImage: string;
  link: string;
  buttonText: string;
}

const slides: SlideProps[] = [
  {
    icon: <Mountain className="h-12 w-12 text-white" />,
    title: "Explore Rwanda's Natural Wonders",
    description: "From volcanic mountains to pristine lakes, discover breathtaking landscapes and unique wildlife.",
    backgroundImage: "/images/Visit-Rwanda-Crater-Lake-Volcanoes-e1533416621808-1920x1267.jpg",
    link: "/attractions",
    buttonText: "Discover Attractions"
  },
  {
    icon: <Calendar className="h-12 w-12 text-white" />,
    title: "Experience Cultural Festivals",
    description: "Immerse yourself in Rwanda's vibrant cultural events, celebrations and traditional ceremonies.",
    backgroundImage: "/images/Nyanza-Traditional-Intore-Dancers-1650x1100.jpg",
    link: "/events",
    buttonText: "Browse Events"
  },
  {
    icon: <Utensils className="h-12 w-12 text-white" />,
    title: "Savor Rwandan Cuisine",
    description: "Experience authentic flavors from traditional dishes to contemporary fusion at top-rated restaurants.",
    backgroundImage: "/images/Foods-to-Try-in-Rwanda.jpg",
    link: "/dining",
    buttonText: "Find Dining Options"
  },
  {
    icon: <Hotel className="h-12 w-12 text-white" />,
    title: "Luxury to Authentic Stays",
    description: "From 5-star lodges to charming homestays, find the perfect accommodation for your Rwanda adventure.",
    backgroundImage: "/images/kigali-serena-hotel.jpg",
    link: "/stay",
    buttonText: "View Accommodations"
  },
  {
    icon: <Coffee className="h-12 w-12 text-white" />,
    title: "Rwanda's Coffee Experience",
    description: "Tour world-renowned coffee plantations and enjoy tastings of Rwanda's exceptional beans.",
    backgroundImage: "/images/rwandan-coffee_Image-from-getty-images.avif",
    link: "/attractions/coffee-tours",
    buttonText: "Discover Coffee Tours"
  },
  {
    icon: <Camera className="h-12 w-12 text-white" />,
    title: "Photography Safaris",
    description: "Capture stunning wildlife and landscapes with specialized photography tours and expert guides.",
    backgroundImage: "/images/giraffe-at-akagera-national-park_Photo-from-Getty-Images.jpg",
    link: "/attractions/photography-safaris",
    buttonText: "Book a Safari"
  },
  {
    icon: <Map className="h-12 w-12 text-white" />,
    title: "Hiking Adventures",
    description: "Explore Rwanda's scenic trails, from the Congo Nile Trail to the volcanoes of the northwest.",
    backgroundImage: "/images/photo-1551632811-561732d1e306.avif",
    link: "/attractions/hiking",
    buttonText: "Find Trails"
  },
  {
    icon: <Music className="h-12 w-12 text-white" />,
    title: "Cultural Performances",
    description: "Experience traditional dance, music, and storytelling in authentic Rwandan cultural settings.",
    backgroundImage: "/images/IbyIwacu-Cultural-Village.jpg",
    link: "/events/cultural-performances",
    buttonText: "Find Performances"
  }
];

const Slide: React.FC<SlideProps> = ({ icon, title, description, backgroundImage, link, buttonText }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    setImageError(true);
    console.error(`Failed to load image: ${backgroundImage}. Ensure the file exists in public/images or verify the URL.`);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    console.log(`Successfully loaded image: ${backgroundImage}`);
  };

  // Debug: Log the image path on component mount
  useEffect(() => {
    console.log(`Attempting to load image: ${backgroundImage}`);
  }, [backgroundImage]);

  return (
    <div className="relative h-screen w-full">
      {!imageError ? (
        <>
          <Image
            src={backgroundImage}
            alt={`${title} background`}
            fill
            className={`object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onError={handleImageError}
            onLoad={handleImageLoad}
            priority={title === slides[0].title}
            loading={title !== slides[0].title ? "lazy" : undefined}
            sizes="100vw"
            quality={90}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-rwanda-green via-rwanda-darkGreen to-blue-600 animate-pulse">
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>
          )}
        </>
      ) : (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-rwanda-green via-rwanda-darkGreen to-blue-600"
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
      )}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="bg-rwanda-green bg-opacity-20 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6">
            {icon}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            {description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              asChild
              className="bg-rwanda-green hover:bg-rwanda-darkGreen text-white text-lg px-6 py-6"
            >
              <Link href={link}>
                {buttonText} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              asChild
              className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-6 py-6"
            >
              <Link href="/plan">
                Plan Your Trip <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AutoSlider: React.FC = () => {
  const [api, setApi] = useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      console.warn("Carousel API not initialized. Ensure @/components/ui/carousel is correctly set up.");
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 6000);

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', handleSelect);

    return () => {
      clearInterval(interval);
      api.off('select', handleSelect);
    };
  }, [api]);

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <Slide {...slide} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${
              current === index ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1} of ${slides.length}`}
            aria-current={current === index ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;