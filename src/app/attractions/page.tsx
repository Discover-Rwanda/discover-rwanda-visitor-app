import AttractionPageContent from '@/components/widgets/attractions/AttractionPageContent';
import { Attraction, filterAndPaginateAttractions } from '@/data/attractions';
import { Metadata } from 'next';
import { Suspense } from 'react';
import ListPageLoader from '@/components/ui/list-page-loader';

export const metadata: Metadata = {
  title: "Rwanda Attractions | Discover Rwanda",
  description: "Explore the best attractions in Rwanda, including national parks, cultural sites, and urban experiences. Plan your visit with Discover Rwanda.",
  openGraph: {
    title: "Rwanda Attractions | Discover Rwanda",
    description: "Explore the best attractions in Rwanda, including national parks, cultural sites, and urban experiences.",
    url: "https://yourdomain.com/attractions",
    type: "website",
    images: [
      {
        url: "https://yourdomain.com/images/Bisate-Lodge-Image-from-Arcadiasafaris-1024x499.jpg",
        width: 1200,
        height: 630,
        alt: "Rwanda Attractions Hero"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Rwanda Attractions | Discover Rwanda",
    description: "Explore the best attractions in Rwanda, including national parks, cultural sites, and urban experiences.",
    images: ["https://discoverrwanda.com/images/Bisate-Lodge-Image-from-Arcadiasafaris-1024x499.jpg"]
  },
  alternates: {
    canonical: "https://discoverrwanda.com/attractions"
  }
};

export default async function Page({ searchParams: searchParamsPromise }: { searchParams: Promise<Record<string, string | string[]>> }) {
  const searchParams = await searchParamsPromise;
  // Parse search params
  const search = typeof searchParams.search === 'string' ? searchParams.search : '';
  const category = Array.isArray(searchParams.category)
    ? searchParams.category
    : searchParams.category ? [searchParams.category] : [];
  const location = Array.isArray(searchParams.location)
    ? searchParams.location
    : searchParams.location ? [searchParams.location] : [];
  const page = searchParams.page ? parseInt(searchParams.page as string, 10) : 1;
  const pageSize = searchParams.pageSize ? parseInt(searchParams.pageSize as string, 10) : 8;

  const { items, total } = await filterAndPaginateAttractions({
    search,
    filters: { category, location },
    page,
    pageSize,
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Rwanda Attractions",
    "description": "A list of top attractions in Rwanda.",
    "itemListElement": items.map((attraction: Attraction, idx: number) => ({
      "@type": "TouristAttraction",
      "position": idx + 1 + (page - 1) * pageSize,
      "name": attraction.name,
      "description": attraction.description,
      "image": `https://discoverrwanda.com${attraction.image}`,
      "url": `https://discoverrwanda.com/attractions/${attraction.slug}`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": attraction.location,
        "addressCountry": "RW"
      },
      "category": attraction.category
    }))
  };

  return (
    <Suspense fallback={<ListPageLoader />}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AttractionPageContent
        attractions={items as Attraction[]}
        total={total}
        currentPage={page}
        pageSize={pageSize}
        search={search}
        selectedCategories={category}
        selectedLocations={location}
      />
    </Suspense>
  );
}