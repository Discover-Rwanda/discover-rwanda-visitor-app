import { galleryImages, GalleryImage } from '@/data/gallery';

export interface GalleryFilters {
  category?: string;
  search?: string;
  page?: number;
  limit?: number;
}

export interface GalleryResponse {
  images: GalleryImage[];
  total: number;
  page: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

// Simulate server-side data fetching with delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function fetchGalleryImages(filters: GalleryFilters = {}): Promise<GalleryResponse> {
  // Simulate server delay
  await delay(300);

  const {
    category = 'all',
    search = '',
    page = 1,
    limit = 9
  } = filters;

  let filteredImages = [...galleryImages];

  // Apply category filter
  if (category && category !== 'all') {
    filteredImages = filteredImages.filter(img => img.category === category);
  }

  // Apply search filter
  if (search) {
    const searchLower = search.toLowerCase();
    filteredImages = filteredImages.filter(img =>
      img.title.toLowerCase().includes(searchLower) ||
      img.location.toLowerCase().includes(searchLower) ||
      img.description.toLowerCase().includes(searchLower) ||
      img.photographer.toLowerCase().includes(searchLower)
    );
  }

  const total = filteredImages.length;
  const totalPages = Math.ceil(total / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedImages = filteredImages.slice(startIndex, endIndex);

  return {
    images: paginatedImages,
    total,
    page,
    totalPages,
    hasNext: page < totalPages,
    hasPrev: page > 1
  };
}

export function getGalleryCategories() {
  return [
    { value: 'all', label: 'All Photos' },
    { value: 'wildlife', label: 'Wildlife' },
    { value: 'landscape', label: 'Landscapes' },
    { value: 'culture', label: 'Culture' },
    { value: 'urban', label: 'Urban' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'history', label: 'History' },
  ];
}

// Server-side function to get initial data
export async function getInitialGalleryData(searchParams: {
  category?: string;
  search?: string;
  page?: string;
}) {
  const category = searchParams.category || 'all';
  const search = searchParams.search || '';
  const page = parseInt(searchParams.page || '1');

  return await fetchGalleryImages({
    category,
    search,
    page,
    limit: 9
  });
} 