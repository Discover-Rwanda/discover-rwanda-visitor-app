"use client";

import React from 'react';
import Image from 'next/image';

export const GalleryHero: React.FC = () => {
  return (
    <div className="relative h-[50vh] min-h-[400px] bg-gray-900">
      <Image
        src="/images/Bisate-Lodge-Image-from-Arcadiasafaris-1024x499.jpg"
        alt="Rwanda Gallery Hero"
        fill
        className="object-cover opacity-60"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-end pb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Rwanda Gallery</h1>
        <p className="text-lg md:text-xl text-white md:max-w-2xl">
          Explore the beauty of Rwanda through captivating images showcasing its wildlife, landscapes, culture, and urban scenes.
        </p>
      </div>
    </div>
  );
}; 