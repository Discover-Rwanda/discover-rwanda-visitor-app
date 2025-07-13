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
import { ArrowRight } from 'lucide-react';
import { upcomingEvents } from '@/data/events';
import { featuredExperiences } from '@/data/experiences';
import { testimonials } from '@/data/testimonials';
import { getShowcaseAttractions } from '@/data/attractions';

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
        url: "https://www.discoverrwanda.rw/images/kigali.jpeg",
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
    images: ["https://www.discoverrwanda.rw/images/kigali.jpeg"],
    creator: "@DiscoverRwandaRW",
  },
  alternates: {
    canonical: "https://www.discoverrwanda.rw",
  },
});

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
                "url": "https://www.discoverrwanda.rw/images/kigali.jpeg"
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
          <div className="inline-block bg-yellow-100 px-4 py-2 rounded-full mb-4">
            <span className="text-rwanda-darkGreen font-medium">Explore the Pearl of Africa</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-rwanda-green">Rwanda Awaits Your Discovery</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            From the mist-covered mountains of Volcanoes National Park to the pristine shores of Lake Kivu, 
            Rwanda offers unforgettable experiences for every traveler. Immerse yourself in our rich culture, 
            encounter incredible wildlife, and witness the remarkable story of a nation transformed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Image src="/images/gorilla-icon.svg" alt="Wildlife" width={32} height={32} className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-green-600">Unique Wildlife</h3>
              <p className="text-gray-600">Encounter mountain gorillas, chimpanzees, and an abundance of bird species</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Image src="/images/landscape-icon.svg" alt="Landscapes" width={32} height={32} className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-blue-600">Stunning Landscapes</h3>
              <p className="text-gray-600">Explore volcanic mountains, lush rainforests, and serene lakes</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                <Image src="/images/culture-icon.svg" alt="Culture" width={32} height={32} className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-yellow-600">Rich Culture</h3>
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
        destinations={getShowcaseAttractions()}
      />
      <section className="py-16 bg-rwanda-blue text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
              <div className="inline-block bg-white/20 px-4 py-2 rounded-full mb-4">
                <span className="text-white font-medium">Rwanda Spotlight</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Africa&apos;s Leading Eco-Tourism Destination</h2>
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
                  <h3 className="text-xl font-bold mb-2 text-white">Cleanest Country</h3>
                  <p className="text-white/80">Rwanda is known as one of the cleanest countries in Africa</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
                  <h3 className="text-xl font-bold mb-2 text-white">Growing Gorilla Population</h3>
                  <p className="text-white/80">Rwanda&apos;s mountain gorilla population is steadily increasing thanks to conservation</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
                  <h3 className="text-xl font-bold mb-2 text-white">Sustainable Tourism</h3>
                  <p className="text-white/80">Eco-friendly initiatives and community-based tourism are at the heart of Rwanda&apos;s travel industry</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
                  <h3 className="text-xl font-bold mb-2 text-white">Award-Winning Destination</h3>
                  <p className="text-white/80">Rwanda has received global recognition for its tourism and conservation efforts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FeaturedSection 
        title="Upcoming Events"
        subtitle="Don't miss these exciting festivals, cultural celebrations, and special occasions."
        items={upcomingEvents.map(event => ({
          image: event.image,
          title: event.name,
          description: event.description,
          link: `/events/${event.slug}`
        }))}
      />
      <TestimonialSection testimonials={testimonials} />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gray-100 rounded-xl p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Plan Your Rwanda Journey</h2>
                <p className="text-gray-600 mb-6">
                  Ready to experience Rwanda? Our planning tools and resources make it easy to create your perfect trip. 
                  Find information on transportation, accommodations, guided tours, and must-see attractions.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link href="/plan" className="bg-rwanda-green hover:bg-rwanda-darkGreen text-white px-4 py-2 rounded-lg flex items-center">
                      Start Planning <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  <Link href="/contact" className="bg-white text-black hover:bg-white/90 px-4 py-2 rounded-lg border border-gray-300">
                    Contact Us
                  </Link>
                </div>
              </div>
              
              <div className="lg:w-1/2 lg:pl-12">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <Link href="/plan/getting-here" className="block group">
                      <div className="bg-white rounded-lg p-4 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:translate-y-[-2px]">
                        <h3 className="font-bold mb-2 flex items-center text-black">
                          Getting Here
                          <ArrowRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-sm text-gray-600">Flights, visas, and entry requirements</p>
                      </div>
                    </Link>
                    <Link href="/plan/itinerary" className="block group">
                      <div className="bg-white rounded-lg p-4 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:translate-y-[-2px]">
                        <h3 className="font-bold mb-2 flex items-center text-black">
                          Itinerary Builder
                          <ArrowRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-sm text-gray-600">Create your custom travel plan</p>
                      </div>
                    </Link>
                  </div>
                  
                  <div className="space-y-4 mt-8">
                    <Link href="/plan/getting-around" className="block group">
                      <div className="bg-white rounded-lg p-4 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:translate-y-[-2px]">
                        <h3 className="font-bold mb-2 flex items-center text-black">
                          Getting Around
                          <ArrowRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-sm text-gray-600">Transportation options within Rwanda</p>
                      </div>
                    </Link>
                    <Link href="/plan/travel-tips" className="block group">
                      <div className="bg-white rounded-lg p-4 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:translate-y-[-2px]">
                        <h3 className="font-bold mb-2 flex items-center text-black">
                          Travel Tips
                          <ArrowRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-sm text-gray-600">Weather, packing advice, and safety</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>  
      <NewsletterSection />
    </>
  );
}