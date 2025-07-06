import AutoSlider from '@/components/widgets/home/AutoSlider';
import FeaturedSection from '@/components/widgets/home/FeaturedSection';
import DestinationSection from '@/components/widgets/home/DestinationSection';
import NewsletterSection from '@/components/widgets/home/NewsletterSection';
import TestimonialSection from '@/components/widgets/home/TestimonialSection';
import ServicesCarousel from '@/components/widgets/home/ServicesCarousel';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => ({
  title: "Discover Rwanda | Explore the Land of a Thousand Hills",
  description: "Discover Rwanda is your ultimate guide to exploring the breathtaking landscapes, rich culture, and vibrant wildlife of Rwanda. From the majestic Volcanoes National Park to the serene shores of Lake Kivu, embark on an unforgettable journey through the heart of Africa.",
  openGraph: {
    title: "Discover Rwanda | Explore the Land of a Thousand Hills",
    description: "Discover Rwanda is your ultimate guide to exploring the breathtaking landscapes, rich culture, and vibrant wildlife of Rwanda.",
    url: "https://www.discoverrwanda.rw",
    siteName: "Discover Rwanda",
    images: [
      {
        url: "https://www.discoverrwanda.rw/Landscape-of-the-Virunga-Mountains-in-Rwanda.jpg",
        width: 1200,
        height: 630,
        alt: "Discover Rwanda - Explore Rwanda's Natural Wonders",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Discover Rwanda | Explore the Land of a Thousand Hills",
    description: "Discover Rwanda is your ultimate guide to exploring the breathtaking landscapes, rich culture, and vibrant wildlife of Rwanda.",
    images: ["https://www.discoverrwanda.rw/Landscape-of-the-Virunga-Mountains-in-Rwanda.jpg"],
    creator: "@DiscoverRwandaRW",
  },
  alternates: {
    canonical: "https://www.discoverrwanda.rw",
  },
});

const featuredExperiences = [
  {
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Gorilla Trekking',
    description: 'Get up close with mountain gorillas in their natural habitat at Volcanoes National Park, a once-in-a-lifetime wildlife encounter.',
    link: '/attractions/gorilla-trekking'
  },
  {
    image: 'https://images.unsplash.com/photo-1516939977171-9181a2dc1e6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Cultural Heritage',
    description: 'Immerse yourself in Rwanda&apos;s rich traditions with village visits, traditional dance performances, and artisan workshops.',
    link: '/attractions/cultural-heritage'
  },
  {
    image: 'https://images.unsplash.com/photo-1576356689199-cb17c544494a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Scenic Trails',
    description: 'Hike through breathtaking landscapes, from the Congo Nile Trail along Lake Kivu to the canopy walkway in Nyungwe Forest.',
    link: '/attractions/scenic-trails'
  }
];

const destinations = [
  {
    title: 'Volcanoes National Park',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    location: 'Northern Province',
    link: '/attractions/volcanoes-national-park'
  },
  {
    title: 'Lake Kivu',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Western Province',
    link: '/attractions/lake-kivu'
  },
  {
    title: 'Nyungwe Forest',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Southern Province',
    link: '/attractions/nyungwe-forest'
  },
  {
    title: 'Kigali City',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Kigali Province',
    link: '/attractions/kigali-city'
  },
  {
    title: 'Akagera National Park',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Eastern Province',
    link: '/attractions/akagera-national-park'
  }
];

const testimonials = [
  {
    quote: "Gorilla trekking in Volcanoes National Park was a profound experience. The guides were knowledgeable and the encounter with gorillas was intimate and respectful.",
    author: "Sarah Johnson",
    location: "United States",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "Rwanda&apos;s stunning landscape took my breath away. From the rolling hills to the pristine lakes, every view was picture-perfect.",
    author: "David Chen",
    location: "Canada",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "The cultural experiences in Rwanda were deeply moving. Learning about the country&apos;s history and witnessing its remarkable progress was truly inspiring.",
    author: "Emma Williams",
    location: "United Kingdom",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://www.discoverrwanda.rw",
            "name": "Discover Rwanda",
            "description": "Discover Rwanda is your ultimate guide to exploring the breathtaking landscapes, rich culture, and vibrant wildlife of Rwanda.",
            "publisher": {
              "@type": "Organization",
              "name": "Discover Rwanda",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.discoverrwanda.rw/DiscoverRwandaLogo.svg"
              }
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.discoverrwanda.rw/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      <AutoSlider />
      <ServicesCarousel />
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-rwanda-lightYellow/30 px-4 py-2 rounded-full mb-4">
            <span className="text-rwanda-darkGreen font-medium">Explore the Pearl of Africa</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Rwanda Awaits Your Discovery</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            From the mist-covered mountains of Volcanoes National Park to the pristine shores of Lake Kivu, 
            Rwanda offers unforgettable experiences for every traveler. Immerse yourself in our rich culture, 
            encounter incredible wildlife, and witness the remarkable story of a nation transformed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-rwanda-green/10 flex items-center justify-center mb-4">
                <Image src="/images/gorilla-icon.svg" alt="Wildlife" width={32} height={32} className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">Unique Wildlife</h3>
              <p className="text-gray-600">Encounter mountain gorillas, chimpanzees, and an abundance of bird species</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-rwanda-blue/10 flex items-center justify-center mb-4">
                <Image src="/images/landscape-icon.svg" alt="Landscapes" width={32} height={32} className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">Stunning Landscapes</h3>
              <p className="text-gray-600">Explore volcanic mountains, lush rainforests, and serene lakes</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-rwanda-yellow/10 flex items-center justify-center mb-4">
                <Image src="/images/culture-icon.svg" alt="Culture" width={32} height={32} className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">Rich Culture</h3>
              <p className="text-gray-600">Experience traditional dance, crafts, and warm Rwandan hospitality</p>
            </div>
          </div>
        </div>
      </section>
      <div className="section-divider"></div>
      <FeaturedSection 
        title="Top Experiences"
        subtitle="Discover the most unforgettable activities and attractions that Rwanda has to offer."
        items={featuredExperiences}
      />
      <DestinationSection 
        title="Must-Visit Destinations"
        subtitle="Explore Rwanda&apos;s most beautiful and culturally significant locations."
        destinations={destinations}
      />
      <section className="py-16 bg-rwanda-blue text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
              <div className="inline-block bg-white/20 px-4 py-2 rounded-full mb-4">
                <span className="text-white font-medium">Rwanda Spotlight</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Africa&apos;s Leading Eco-Tourism Destination</h2>
              <p className="text-white/80 mb-6">
                Rwanda is internationally recognized for its conservation efforts and sustainable tourism practices. 
                From banning plastic bags to restoring forests and protecting endangered species, we&apos;re committed to 
                preserving our natural heritage for future generations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-white text-rwanda-blue hover:bg-white/90">
                  <Link href="/about/conservation">Learn About Conservation</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
                  <h3 className="text-xl font-bold mb-2">Cleanest Country</h3>
                  <p className="text-white/80">Rwanda is known as one of the cleanest countries in Africa</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
                  <h3 className="text-xl font-bold mb-2">Growing Gorilla Population</h3>
                  <p className="text-white/80">Rwanda&apos;s mountain gorilla population is steadily increasing thanks to conservation</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
                  <h3 className="text-xl font-bold mb-2">Sustainable Tourism</h3>
                  <p className="text-white/80">Eco-friendly initiatives and community-based tourism are at the heart of Rwanda&apos;s travel industry</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
                  <h3 className="text-xl font-bold mb-2">Award-Winning Destination</h3>
                  <p className="text-white/80">Rwanda has received global recognition for its tourism and conservation efforts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TestimonialSection testimonials={testimonials} />
      <NewsletterSection />
    </>
  );
}