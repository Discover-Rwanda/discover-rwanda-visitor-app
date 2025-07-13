"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { Attraction } from '@/data/attractions';

interface RelatedAttractionsProps {
  attractions: Attraction[];
}

const RelatedAttractions: React.FC<RelatedAttractionsProps> = ({ attractions }) => {
  if (attractions.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">
      <div className="border-t border-gray-200 pt-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Related Attractions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((attraction) => (
            <Link
              key={attraction.id}
              href={`/attractions/${attraction.slug}`}
              className="group block"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={attraction.image}
                    alt={attraction.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-800 capitalize">
                      {attraction.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-rwanda-green transition-colors duration-300">
                    {attraction.name}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{attraction.location}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {attraction.shortDescription}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mt-3">
                    {attraction.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* View All Link */}
        <div className="text-center mt-8">
          <Link
            href="/attractions"
            className="inline-flex items-center text-rwanda-green hover:text-rwanda-darkGreen font-medium"
          >
            View All Attractions
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedAttractions; 