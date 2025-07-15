"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, User } from 'lucide-react';
import ImageViewer from '@/components/ui/image-viewer';

interface GalleryImage {
  id: string;
  title: string;
  location: string;
  category: string;
  description: string;
  imageUrl: string;
  photographer: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ images }) => {
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsImageViewerOpen(true);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {images.map((image, index) => (
          <div 
            key={image.id} 
            className="rounded-lg overflow-hidden shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white"
            onClick={() => handleImageClick(index)}
          >
            <div className="aspect-square overflow-hidden">
              <Image 
                src={image.imageUrl} 
                alt={image.title} 
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-3 sm:p-4">
              <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2 line-clamp-1">{image.title}</h3>
              <div className="flex items-center text-rwanda-green text-xs sm:text-sm mb-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                <span className="line-clamp-1">{image.location}</span>
              </div>
              {image.photographer && (
                <div className="flex items-center text-gray-600 text-xs sm:text-sm mb-3">
                  <User className="w-3 h-3 mr-1 flex-shrink-0" />
                  <span className="line-clamp-1">Photo by {image.photographer}</span>
                </div>
              )}
              <p className="text-gray-700 text-xs sm:text-sm line-clamp-2 mb-3">{image.description}</p>
              <div className="flex flex-wrap gap-1">
                <span className="inline-block bg-gray-100 text-gray-700 rounded-full px-2 py-1 text-xs capitalize">
                  {image.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Image Viewer */}
      <ImageViewer
        images={images.map(img => img.imageUrl)}
        initialIndex={selectedImageIndex}
        isOpen={isImageViewerOpen}
        onClose={() => setIsImageViewerOpen(false)}
        title={images[selectedImageIndex]?.title || "Gallery Image"}
      />
    </div>
  );
}; 