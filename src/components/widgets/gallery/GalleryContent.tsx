"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { GalleryGrid } from './GalleryGrid';
import { GalleryFilter } from './GalleryFilter';
import { GalleryPagination } from './GalleryPagination';
import { GallerySearch } from './GallerySearch';
import { GalleryResponse } from '@/lib/gallery';

interface Category {
  value: string;
  label: string;
}

interface GalleryContentProps {
  initialData: GalleryResponse;
  categories: Category[];
  searchParams: {
    category?: string;
    search?: string;
    page?: string;
  };
}

export function GalleryContent({ initialData, categories, searchParams }: GalleryContentProps) {
  const router = useRouter();
  const [data, setData] = useState<GalleryResponse>(initialData);
  
  const currentCategory = searchParams.category || 'all';
  const currentSearch = searchParams.search || '';
  const currentPage = parseInt(searchParams.page || '1');

  // Update data when search params change
  useEffect(() => {
    if (
      initialData.page !== currentPage ||
      initialData.images.length !== data.images.length ||
      searchParams.category !== currentCategory ||
      searchParams.search !== currentSearch
    ) {
      setData(initialData);
    }
  }, [initialData, currentPage, currentSearch, currentCategory, data, searchParams.category, searchParams.search]);

  const updateSearchParams = (updates: Record<string, string | undefined>) => {
    const params = new URLSearchParams();
    
    // Apply updates first
    Object.entries(updates).forEach(([key, value]) => {
      if (value && value !== 'all' && value !== '1') {
        params.set(key, value);
      }
    });
    
    // Then preserve other existing params
    if (currentCategory && currentCategory !== 'all' && !updates.hasOwnProperty('category')) {
      params.set('category', currentCategory);
    }
    if (currentSearch && !updates.hasOwnProperty('search')) {
      params.set('search', currentSearch);
    }
    if (currentPage > 1 && !updates.hasOwnProperty('page')) {
      params.set('page', currentPage.toString());
    }

    const queryString = params.toString();
    const url = queryString ? `/gallery?${queryString}` : '/gallery';
    router.push(url);
  };

  const handleCategoryChange = (category: string) => {
    updateSearchParams({ category, page: undefined });
  };

  const handleSearchChange = (search: string) => {
    updateSearchParams({ search: search || undefined, page: undefined });
  };

  const handlePageChange = (page: number) => {
    updateSearchParams({ page: page.toString() });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Discover Rwanda Through Photography</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Browse through our curated collection of stunning photographs showcasing the diverse beauty of Rwanda, 
          from its majestic wildlife to vibrant urban scenes and rich cultural heritage.
        </p>
      </div>

      <GallerySearch 
        value={currentSearch}
        onChange={handleSearchChange}
        placeholder="Search images by title, location, or photographer..."
      />

      <GalleryFilter 
        categories={categories} 
        activeCategory={currentCategory}
        onCategoryChange={handleCategoryChange}
      />
      
      {data.images.length > 0 ? (
        <>
          <div className="mb-6 text-center">
            <p className="text-gray-600">
              Showing {((data.page - 1) * 9) + 1} - {Math.min(data.page * 9, data.total)} of {data.total} images
            </p>
          </div>
          
          <GalleryGrid images={data.images} />
          
          <GalleryPagination
            currentPage={data.page}
            totalPages={data.totalPages}
            hasNext={data.hasNext}
            hasPrev={data.hasPrev}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">No images found for your search criteria.</p>
          <button 
            onClick={() => updateSearchParams({ category: undefined, search: undefined, page: undefined })}
            className="bg-rwanda-green text-white px-4 py-2 rounded hover:bg-rwanda-darkGreen"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
} 