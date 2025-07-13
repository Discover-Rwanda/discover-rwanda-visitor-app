"use client";

import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface HeroSectionProps {
  title: string;
  description: string;
  searchPlaceholder?: string;
  backgroundImageUrl?: string;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  showSearch?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  searchPlaceholder = "Search...",
  backgroundImageUrl,
  searchValue = "",
  onSearchChange,
  showSearch = true
}) => {
  const backgroundStyle = backgroundImageUrl 
    ? { backgroundImage: `url(${backgroundImageUrl})` }
    : {};

  return (
    <div 
      className="bg-gray-500 pt-20 md:pt-48 pb-20 md:pb-28 bg-cover bg-center relative"
      style={backgroundStyle}
    >
      {/* Overlay gradient for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/60 to-black/80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl mb-8">
            {description}
          </p>
          {showSearch && onSearchChange && (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder={searchPlaceholder}
                className="pl-10 bg-white/10 border-white/30 text-white placeholder:text-white/60"
                value={searchValue}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 