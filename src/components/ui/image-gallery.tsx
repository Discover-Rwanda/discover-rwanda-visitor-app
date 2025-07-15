"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize2 } from 'lucide-react';
import ImageViewer from './image-viewer';

interface ImageGalleryProps {
  images: string[];
  title?: string;
  columns?: 1 | 2 | 3 | 4;
  aspectRatio?: 'square' | 'video' | 'auto';
  showTitle?: boolean;
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  title = "Gallery",
  columns = 2,
  aspectRatio = 'auto',
  showTitle = true,
  className = ""
}) => {
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsImageViewerOpen(true);
  };

  const getGridCols = () => {
    switch (columns) {
      case 1: return 'grid-cols-1';
      case 2: return 'grid-cols-1 md:grid-cols-2';
      case 3: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case 4: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
      default: return 'grid-cols-1 md:grid-cols-2';
    }
  };

  const getAspectRatio = () => {
    switch (aspectRatio) {
      case 'square': return 'aspect-square';
      case 'video': return 'aspect-video';
      case 'auto': return 'h-64';
      default: return 'h-64';
    }
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section className={className}>
      {showTitle && (
        <h3 className="text-xl font-semibold mb-4 text-gray-900">{title}</h3>
      )}
      
      <div className={`grid ${getGridCols()} gap-4`}>
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`relative ${getAspectRatio()} rounded-lg overflow-hidden group cursor-pointer`}
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={image}
              alt={`${title} - Image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <Maximize2 className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        ))}
      </div>
      
      {/* Image Viewer */}
      <ImageViewer
        images={images}
        initialIndex={selectedImageIndex}
        isOpen={isImageViewerOpen}
        onClose={() => setIsImageViewerOpen(false)}
        title={title}
      />
    </section>
  );
};

export default ImageGallery; 