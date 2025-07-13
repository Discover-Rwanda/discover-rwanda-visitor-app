import React, { Suspense } from 'react';
import DiningPageContent from '@/components/widgets/dining/DiningPageContent';
import { filterAndPaginateDining } from '@/data/dining';
import ListPageLoader from '@/components/ui/list-page-loader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Rwanda Dining | Discover Rwanda",
  description: "Explore the best places to eat in Rwanda, from fine dining to casual cafes. Plan your culinary journey with Discover Rwanda.",
  openGraph: {
    title: "Rwanda Dining | Discover Rwanda",
    description: "Explore the best places to eat in Rwanda, from fine dining to casual cafes.",
    url: "https://yourdomain.com/dining",
    type: "website",
    images: [
      {
        url: "https://yourdomain.com/images/Local-cuisine.jpg",
        width: 1200,
        height: 630,
        alt: "Rwanda Dining Hero"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Rwanda Dining | Discover Rwanda",
    description: "Explore the best places to eat in Rwanda, from fine dining to casual cafes.",
    images: ["https://yourdomain.com/images/Local-cuisine.jpg"]
  },
  alternates: {
    canonical: "https://yourdomain.com/dining"
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

  const { items, total } = await filterAndPaginateDining({
    search,
    filters: { category, location },
    page,
    pageSize,
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Rwanda Dining",
    "description": "A list of top dining places in Rwanda.",
    "itemListElement": items.map((item, idx) => ({
      "@type": "Restaurant",
      "position": idx + 1 + (page - 1) * pageSize,
      "name": item.name,
      "description": item.description,
      "image": `https://yourdomain.com${item.image}`,
      "url": `https://yourdomain.com/dining/${item.slug}`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": item.location,
        "addressCountry": "RW"
      },
      "servesCuisine": item.category
    }))
  };

  return (
    <Suspense fallback={<ListPageLoader />}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DiningPageContent
        dining={items}
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
