"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize2 } from 'lucide-react';
import ImageViewer from './image-viewer';

interface ClickableImageProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'auto';
  showOverlay?: boolean;
}

const ClickableImage: React.FC<ClickableImageProps> = ({
  src,
  alt,
  title,
  className = "",
  aspectRatio = 'auto',
  showOverlay = true
}) => {
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);

  const handleImageClick = () => {
    setIsImageViewerOpen(true);
  };

  const getAspectRatio = () => {
    switch (aspectRatio) {
      case 'square': return 'aspect-square';
      case 'video': return 'aspect-video';
      case 'auto': return 'h-64';
      default: return 'h-64';
    }
  };

  return (
    <>
      <div 
        className={`relative ${getAspectRatio()} rounded-lg overflow-hidden group cursor-pointer ${className}`}
        onClick={handleImageClick}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {showOverlay && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <Maximize2 className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}
      </div>
      
      {/* Image Viewer */}
      <ImageViewer
        images={[src]}
        initialIndex={0}
        isOpen={isImageViewerOpen}
        onClose={() => setIsImageViewerOpen(false)}
        title={title || alt}
      />
    </>
  );
};

export default ClickableImage; 