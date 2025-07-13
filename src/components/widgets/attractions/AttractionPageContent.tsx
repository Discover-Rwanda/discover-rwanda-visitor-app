"use client";

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Attraction } from '@/data/attractions';
import HeroSection from '@/components/ui/hero-section';
import AttractionCard from './AttractionCard';

interface AttractionsProps {
  attractions: Attraction[];
  total: number;
  currentPage: number;
  pageSize: number;
  search: string;
  selectedCategories: string[];
  selectedLocations: string[];
}

const Attractions: React.FC<AttractionsProps> = ({
  attractions,
  total,
  currentPage,
  pageSize,
  search,
  selectedCategories,
  selectedLocations,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = React.useState(false);

  const uniqueLocations = [...new Set(attractions.map(item => item.location))];
  const categories = [
    { value: 'natural', label: 'Natural Wonders' },
    { value: 'cultural', label: 'Cultural Sites' },
    { value: 'urban', label: 'Urban Experiences' }
  ];

  // Helper to update search params
  function updateParams(params: Record<string, string | string[] | undefined>) {
    const sp = new URLSearchParams(searchParams.toString());
    Object.entries(params).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        sp.delete(key);
        value.forEach(v => sp.append(key, v));
      } else if (value !== undefined && value !== "") {
        sp.set(key, value);
      } else {
        sp.delete(key);
      }
    });
    router.push(`?${sp.toString()}`);
  }

  // Handlers
  const handleSearchChange = (val: string) => {
    updateParams({ search: val, page: '1' });
  };
  const handleCategoryToggle = (category: string) => {
    const next = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    updateParams({ category: next, page: '1' });
  };
  const handleLocationToggle = (location: string) => {
    const next = selectedLocations.includes(location)
      ? selectedLocations.filter(l => l !== location)
      : [...selectedLocations, location];
    updateParams({ location: next, page: '1' });
  };
  const handlePageChange = (page: number) => {
    updateParams({ page: String(page) });
  };
  const handleResetFilters = () => {
    updateParams({ search: '', category: [], location: [], page: '1' });
  };

  const totalPages = Math.ceil(total / pageSize);

  return (
    <div className='bg-white'>
      <HeroSection
        title="Discover Rwanda's Attractions"
        description="Explore Rwanda's stunning natural wonders..."
        searchPlaceholder="Search attractions..."
        backgroundImageUrl="/images/Bisate-Lodge-Image-from-Arcadiasafaris-1024x499.jpg"
        searchValue={search}
        onSearchChange={handleSearchChange}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters for desktop */}
          <div className="lg:w-1/4 hidden lg:block">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 sticky top-32">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-black">Filters</h2>
                {(selectedCategories.length > 0 || selectedLocations.length > 0) && (
                  <Button
                    variant="ghost"
                    className="text-gray-500 hover:text-gray-700 p-2 h-auto"
                    onClick={handleResetFilters}
                  >
                    Reset
                  </Button>
                )}
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3 text-black">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.value} className="flex items-center">
                        <Checkbox
                          id={`category-${category.value}`}
                          checked={selectedCategories.includes(category.value)}
                          onCheckedChange={() => handleCategoryToggle(category.value)}
                          className="text-rwanda-darkGreen border-black"
                        />
                        <label
                          htmlFor={`category-${category.value}`}
                          className="ml-2 text-sm text-gray-700"
                        >
                          {category.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-3 text-black">Locations</h3>
                  <div className="space-y-2">
                    {uniqueLocations.map((location) => (
                      <div key={location} className="flex items-center">
                        <Checkbox
                          id={`location-${location}`}
                          checked={selectedLocations.includes(location)}
                          onCheckedChange={() => handleLocationToggle(location)}
                          className="text-rwanda-darkGreen border-black"
                        />
                        <label
                          htmlFor={`location-${location}`}
                          className="ml-2 text-sm text-gray-700"
                        >
                          {location}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile filters button */}
          <div className="lg:hidden flex justify-between items-center mb-4">
            <div>
              <p className="text-gray-700">
                Showing {total} {total === 1 ? 'attraction' : 'attractions'}
              </p>
            </div>
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
          {/* Mobile filters modal */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
              <div className="bg-white w-4/5 max-w-md h-full overflow-y-auto">
                <div className="p-4 border-b">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold text-black">Filters</h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hover:bg-transparent"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <div className="p-4 space-y-6">
                  <div>
                    <h3 className="font-medium mb-3 text-black">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category.value} className="flex items-center">
                          <Checkbox
                            id={`mobile-category-${category.value}`}
                            checked={selectedCategories.includes(category.value)}
                            onCheckedChange={() => handleCategoryToggle(category.value)}
                            className="text-rwanda-darkGreen border-black"
                          />
                          <label
                            htmlFor={`mobile-category-${category.value}`}
                            className="ml-2 text-sm text-gray-700"
                          >
                            {category.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-3 text-black">Locations</h3>
                    <div className="space-y-2">
                      {uniqueLocations.map((location) => (
                        <div key={location} className="flex items-center">
                          <Checkbox
                            id={`mobile-location-${location}`}
                            checked={selectedLocations.includes(location)}
                            onCheckedChange={() => handleLocationToggle(location)}
                            className="text-rwanda-darkGreen border-black"
                          />
                          <label
                            htmlFor={`mobile-location-${location}`}
                            className="ml-2 text-sm text-gray-700"
                          >
                            {location}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="border-t p-4 flex gap-3">
                  <Button
                    variant="outline"
                    className="w-1/2"
                    onClick={handleResetFilters}
                  >
                    Reset
                  </Button>
                  <Button
                    className="w-1/2 bg-rwanda-darkGreen hover:bg-rwanda-darkGreen border-black"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>
          )}
          {/* Main content */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
              {attractions.map((attraction) => (
                <AttractionCard key={attraction.id} attraction={attraction} />
              ))}
            </div>
            {total === 0 && (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold mb-2">No attractions found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
                <Button onClick={handleResetFilters}>Reset Filters</Button>
              </div>
            )}
            {/* Pagination controls */}
            {total > pageSize && (
              <div className="flex justify-center items-center gap-2 mt-6 text-black">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Previous
                </Button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <Button
                    key={i + 1}
                    variant={currentPage === i + 1 ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handlePageChange(i + 1)}
                    className="text-black hover:text-slate-800"
                  >
                    {i + 1}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attractions;
