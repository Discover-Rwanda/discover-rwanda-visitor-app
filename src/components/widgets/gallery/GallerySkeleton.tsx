"use client";

import React from 'react';

export function GallerySkeleton() {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto animate-pulse"></div>
        </div>
        
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="h-10 bg-gray-200 rounded w-20 animate-pulse"></div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-square bg-gray-200 animate-pulse"></div>
              <div className="p-4 space-y-2">
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3 animate-pulse"></div>
                <div className="h-3 bg-gray-200 rounded w-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }