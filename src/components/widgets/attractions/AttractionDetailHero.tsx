"use client";

import React from 'react';
import Image from 'next/image';
import { MapPin, Tag } from 'lucide-react';
import { Attraction } from '@/data/attractions';

interface AttractionDetailHeroProps {
  attraction: Attraction;
}

const AttractionDetailHero: React.FC<AttractionDetailHeroProps> = ({ attraction }) => {
  return (
    <div className="relative h-96 md:h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={attraction.image}
        alt={attraction.name}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            {/* Category Badge */}
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <div className="flex items-center text-white">
                <Tag className="h-4 w-4 mr-2" />
                <span className="capitalize font-medium">{attraction.category}</span>
              </div>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {attraction.name}
            </h1>
            
            {/* Location */}
            <div className="flex items-center text-white/90 mb-6">
              <MapPin className="h-5 w-5 mr-2" />
              <span className="text-lg">{attraction.location}</span>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {attraction.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttractionDetailHero; 