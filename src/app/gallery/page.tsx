import { Metadata } from 'next';
import { GalleryHero } from '@/components/widgets/gallery/GalleryHero';
import { GalleryContent } from '@/components/widgets/gallery/GalleryContent';
import { getInitialGalleryData, getGalleryCategories } from '@/lib/gallery';
import { galleryMetadata } from './metadata';
import { Suspense } from 'react';
import { GallerySkeleton } from '@/components/widgets/gallery/GallerySkeleton';

export const metadata: Metadata = galleryMetadata;

interface GalleryPageProps {
  searchParams: Promise<{
    category?: string;
    search?: string;
    page?: string;
  }>;
}

export default async function GalleryPage({ searchParams }: GalleryPageProps) {
  // Await the searchParams Promise
  const params = await searchParams;
  
  // Fetch initial data on server side
  const initialData = await getInitialGalleryData(params);
  const categories = getGalleryCategories();

  return (
    <div className="min-h-screen bg-gray-50">
      <GalleryHero />
      <Suspense fallback={<GallerySkeleton />}> 
        <GalleryContent 
          initialData={initialData}
          categories={categories}
          searchParams={params}
        />
      </Suspense>
    </div>
  );
}