import React from 'react';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
// import { Button } from '@/components/ui/button';
import { attractions } from '@/data/attractions';

interface AttractionCardProps {
  attraction: typeof attractions[0];
}

const AttractionCard: React.FC<AttractionCardProps> = ({ attraction }) => {
  return (
      <div className="overflow-hidden hover:shadow-md transition-shadow attractions-card bg-white rounded-lg shadow-md">
          <div className="relative h-48 overflow-hidden">
              <Image
                  src={attraction.image}
                  alt={attraction.name}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 bg-rwanda-green text-white px-3 py-1 text-sm font-medium">
                  {attraction.category === 'natural' ? 'Natural Wonder' :
                      attraction.category === 'cultural' ? 'Cultural Site' : 'Urban Experience'}
              </div>
          </div>
          <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl text-rwanda-darkGreen font-bold">{attraction.name}</h3>
                  {attraction.featured && (
                      <span className="bg-rwanda-yellow/20 text-rwanda-darkGreen text-xs font-medium px-2 py-1 rounded">
                          Featured
                      </span>
                  )}
              </div>

              <div className="flex items-center text-gray-500 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{attraction.location}</span>
              </div>

              <p className="text-gray-600 mb-4">{attraction.shortDescription}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                  {attraction.tags.map((tag, index) => (
                      <span
                          key={index}
                          className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                      >
                          {tag}
                      </span>
                  ))}
              </div>

              <div className="flex justify-between items-center">
                  <Link
                      href={`/attractions/${attraction.slug}`}
                      className="text-rwanda-blue hover:text-rwanda-darkBlue font-medium"
                  >
                      View Details
                  </Link>
                  {/* <Button
                      variant="outline"
                      size="sm"
                      className="text-rwanda-green border-rwanda-green hover:bg-rwanda-green/10"
                  >
                      Add to Itinerary
                  </Button> */}
              </div>
          </div>
      </div>
  );
};

export default AttractionCard;
