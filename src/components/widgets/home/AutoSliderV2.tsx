"use client";

import React, { useState, useEffect, useRef } from 'react'
import { Mountain, Coffee, Utensils, Calendar, Map, Hotel, Camera, Music, ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

export default function AutoSliderV2() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Auto-advance slides
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    // Handle manual navigation
    const goToSlide = (index: number) => {
        if (isTransitioning || index === currentSlide) return;
        
        setIsTransitioning(true);
        setCurrentSlide(index);
        
        // Reset interval when manually navigating
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        
        // Remove transition class after animation
        setTimeout(() => setIsTransitioning(false), 500);
    };

    const nextSlide = () => {
        goToSlide((currentSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Slides Container */}
            <div className="relative w-full h-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                            index === currentSlide 
                                ? 'opacity-100 scale-100' 
                                : 'opacity-0 scale-105'
                        }`}
                    >
                        {/* Background Image */}
                        <div 
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage: `url(${slide.backgroundImage})`,
                            }}
                        />
                        
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/50" />
                        
                        {/* Gradient Overlay for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
                        
                        {/* Content */}
                        <div className="relative z-10 flex items-center justify-center h-full px-4">
                            <div className="text-center text-white max-w-4xl mx-auto">
                                {/* Icon */}
                                <div className="flex justify-center mb-4 sm:mb-6">
                                    <div className="p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                                        {slide.icon}
                                    </div>
                                </div>
                                
                                {/* Title */}
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2">
                                    {slide.title}
                                </h1>
                                
                                {/* Description */}
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed px-2">
                                    {slide.description}
                                </p>
                                
                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
                                    {/* Primary Button - Similar to icon container design */}
                                    <Button 
                                        size="lg" 
                                        className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 group px-6 py-3 text-sm sm:text-base cursor-pointer"
                                        onClick={() => window.location.href = slide.link}
                                    >
                                        {slide.buttonText}
                                        <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Button>
                                    
                                    {/* Secondary Button - Rwandan flag colors (blue) */}
                                    <Button 
                                        size="lg" 
                                        className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white border border-blue-500 hover:border-blue-600 transition-all duration-300 group px-6 py-3 text-sm sm:text-base shadow-lg cursor-pointer"
                                        onClick={() => window.location.href = '/plan'}
                                    >
                                        Plan Your Trip
                                        <MapPin className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows - Hidden on mobile, visible on larger screens */}
            <button
                onClick={prevSlide}
                className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                aria-label="Previous slide"
            >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            
            <button
                onClick={nextSlide}
                className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                aria-label="Next slide"
            >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Mobile Navigation - Swipe indicators */}
            <div className="sm:hidden absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 text-white/70 text-xs">
                <span>Swipe to navigate</span>
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 cursor-pointer ${
                            index === currentSlide 
                                ? 'bg-white scale-125' 
                                : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
                <div 
                    className="h-full transition-all duration-1000 ease-linear bg-gradient-to-r from-green-500 via-yellow-400 to-blue-600"
                    style={{ 
                        width: `${((currentSlide + 1) / slides.length) * 100}%` 
                    }}
                />
            </div>
        </div>
    )
}
