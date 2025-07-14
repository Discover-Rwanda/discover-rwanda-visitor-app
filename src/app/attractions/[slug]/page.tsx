import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAttractionWithBooking, getAttractionsWithBooking } from '@/data/attractions';
import { AttractionWithBooking } from '@/lib/types';
import AttractionDetailHero from '@/components/widgets/attractions/AttractionDetailHero';
import AttractionMainContent from '@/components/widgets/attractions/AttractionMainContent';
import AttractionSidebar from '@/components/widgets/attractions/AttractionSidebar';
import RelatedAttractions from '@/components/widgets/attractions/RelatedAttractions';
import ListPageLoader from '@/components/ui/list-page-loader';

// Generate static params for all attractions
export async function generateStaticParams() {
  const attractions = await getAttractionsWithBooking();
  return attractions.map((attraction) => ({
    slug: attraction.slug,
  }));
}

// Generate metadata for each attraction
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const attraction = await getAttractionWithBooking(slug);

  if (!attraction) {
    return {
      title: 'Attraction Not Found | Discover Rwanda',
      description: 'The requested attraction could not be found.',
    };
  }

  return {
    title: `${attraction.name} | Discover Rwanda`,
    description: attraction.description,
    openGraph: {
      title: `${attraction.name} | Discover Rwanda`,
      description: attraction.description,
      url: `https://discoverrwanda.com/attractions/${attraction.slug}`,
      type: 'article',
      images: [
        {
          url: `https://discoverrwanda.com${attraction.image}`,
          width: 1200,
          height: 630,
          alt: attraction.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${attraction.name} | Discover Rwanda`,
      description: attraction.description,
      images: [`https://discoverrwanda.com${attraction.image}`],
    },
    alternates: {
      canonical: `https://discoverrwanda.com/attractions/${attraction.slug}`,
    },
  };
}

// Main page component
export default async function AttractionDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const attraction = await getAttractionWithBooking(slug);

  if (!attraction) {
    notFound();
  }

  // Get related attractions (same category or location, excluding current)
  const relatedAttractions = (await getAttractionsWithBooking())
    .filter((a: AttractionWithBooking) => 
      a.id !== attraction.id && 
      (a.category === attraction.category || a.location === attraction.location)
    )
    .slice(0, 3);

  // Generate JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": attraction.name,
    "description": attraction.description,
    "image": `https://discoverrwanda.com${attraction.image}`,
    "url": `https://discoverrwanda.com/attractions/${attraction.slug}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": attraction.location,
      "addressCountry": "RW"
    },
    "category": attraction.category,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  };

  return (
    <Suspense fallback={<ListPageLoader />}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <AttractionDetailHero attraction={attraction} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <AttractionMainContent attraction={attraction} />
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            <AttractionSidebar attraction={attraction} />
          </div>
        </div>
        
        {/* Related Attractions */}
        <RelatedAttractions attractions={relatedAttractions} />
      </div>
    </Suspense>
  );
}
