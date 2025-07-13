import React, { Suspense } from 'react';
import EventPageContent from '@/components/widgets/events/EventPageContent';
import { filterAndPaginateEvents } from '@/data/events';
import ListPageLoader from '@/components/ui/list-page-loader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Rwanda Events | Discover Rwanda",
  description: "Explore upcoming events, festivals, and cultural celebrations in Rwanda. Plan your visit with Discover Rwanda.",
  openGraph: {
    title: "Rwanda Events | Discover Rwanda",
    description: "Explore upcoming events, festivals, and cultural celebrations in Rwanda.",
    url: "https://yourdomain.com/events",
    type: "website",
    images: [
      {
        url: "https://yourdomain.com/images/Umuganura-Muhondo-Gakenke-Paying-tribute-to-the-king.jpg",
        width: 1200,
        height: 630,
        alt: "Rwanda Events Hero"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Rwanda Events | Discover Rwanda",
    description: "Explore upcoming events, festivals, and cultural celebrations in Rwanda.",
    images: ["https://yourdomain.com/images/Umuganura-Muhondo-Gakenke-Paying-tribute-to-the-king.jpg"]
  },
  alternates: {
    canonical: "https://yourdomain.com/events"
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
  const month = typeof searchParams.month === 'string' ? searchParams.month : 'all';
  const page = searchParams.page ? parseInt(searchParams.page as string, 10) : 1;
  const pageSize = searchParams.pageSize ? parseInt(searchParams.pageSize as string, 10) : 8;

  const { items, total } = await filterAndPaginateEvents({
    search,
    filters: { category, location, month },
    page,
    pageSize,
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Rwanda Events",
    "description": "A list of upcoming events in Rwanda.",
    "itemListElement": items.map((event, idx) => ({
      "@type": "Event",
      "position": idx + 1 + (page - 1) * pageSize,
      "name": event.name,
      "description": event.description,
      "image": `https://yourdomain.com${event.image}`,
      "url": `https://yourdomain.com/events/${event.slug}`,
      "startDate": event.date,
      "location": {
        "@type": "Place",
        "name": event.location
      },
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled"
    }))
  };

  return (
    <Suspense fallback={<ListPageLoader />}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EventPageContent
        events={items}
        total={total}
        currentPage={page}
        pageSize={pageSize}
        search={search}
        selectedCategories={category}
        selectedLocations={location}
        selectedMonth={month}
      />
    </Suspense>
  );
}
