"use client";

import React from "react";

const ListPageLoader: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero/Header Skeleton */}
      <div className="relative bg-gray-200 bg-cover bg-center pt-20 md:pt-48 pb-20 md:pb-28 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/60 to-black/80" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="h-10 md:h-14 w-2/3 mx-auto bg-gray-300 rounded mb-6" />
            <div className="h-6 w-1/2 mx-auto bg-gray-300 rounded mb-8" />
            <div className="h-10 w-full max-w-lg mx-auto bg-gray-300 rounded" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filter Skeleton */}
          <div className="lg:w-1/4 hidden lg:block">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 sticky top-32">
              <div className="h-6 w-1/2 bg-gray-200 rounded mb-6" />
              <div className="space-y-6">
                <div>
                  <div className="h-4 w-1/3 bg-gray-200 rounded mb-3" />
                  <div className="space-y-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="h-4 w-4 bg-gray-200 rounded" />
                        <div className="h-4 w-20 bg-gray-200 rounded" />
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="h-4 w-1/3 bg-gray-200 rounded mb-3" />
                  <div className="space-y-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="h-4 w-4 bg-gray-200 rounded" />
                        <div className="h-4 w-20 bg-gray-200 rounded" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Skeleton */}
          <div className="lg:w-3/4 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                  <div className="relative h-48 bg-gray-200" />
                  <div className="p-5">
                    <div className="h-6 w-2/3 bg-gray-200 rounded mb-3" />
                    <div className="h-4 w-1/3 bg-gray-200 rounded mb-2" />
                    <div className="h-4 w-full bg-gray-200 rounded mb-4" />
                    <div className="flex gap-2 mb-4">
                      <div className="h-4 w-12 bg-gray-200 rounded" />
                      <div className="h-4 w-12 bg-gray-200 rounded" />
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="h-4 w-20 bg-gray-200 rounded" />
                      <div className="h-8 w-24 bg-gray-200 rounded" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPageLoader; 