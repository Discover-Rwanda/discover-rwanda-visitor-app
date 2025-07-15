"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Clock, Star, Users, Calendar } from 'lucide-react';
import { Attraction, Review } from '@/data/attractions';
import ReviewForm from './ReviewForm';
import ImageGallery from '@/components/ui/image-gallery';

interface AttractionMainContentProps {
  attraction: Attraction;
}

const AttractionMainContent: React.FC<AttractionMainContentProps> = ({ attraction }) => {
  // Mock additional data for the attraction
  const attractionDetails = {
    openingHours: attraction.openingHours,
    bestTimeToVisit: attraction.bestTimeToVisit,
    priceRange: attraction.priceRange,
    tips: attraction.travelTips,
    images: attraction.images
  };

  // Local state for reviews
  const [reviews, setReviews] = useState<Review[]>(attraction.reviews);

  const handleAddReview = (review: Review) => {
    setReviews(prev => [review, ...prev]);
  };

  return (
    <div className="space-y-8">
      {/* Description */}
      <section>
        <div 
          className="html-content text-gray-700 leading-relaxed text-lg" 
          dangerouslySetInnerHTML={{ __html: attraction.description }} 
        />
      </section>

      {/* Image Gallery */}
      <ImageGallery
        images={attractionDetails.images}
        title="Gallery"
        columns={2}
        aspectRatio="auto"
        showTitle={true}
      />

      {/* Practical Information */}
      <section>
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Practical Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-rwanda-green mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Opening Hours</h4>
                <p className="text-gray-600">Mon-Fri: {attractionDetails.openingHours.monFri}</p>
                <p className="text-gray-600">Sat-Sun: {attractionDetails.openingHours.satSun}</p>
                {attractionDetails.openingHours.holidays && (
                  <p className="text-gray-600">Holidays: {attractionDetails.openingHours.holidays}</p>
                )}
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Calendar className="h-5 w-5 text-rwanda-green mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Best Time to Visit</h4>
                <p className="text-gray-600">{attractionDetails.bestTimeToVisit}</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Star className="h-5 w-5 text-rwanda-green mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Price Range</h4>
                <p className="text-gray-600">Foreigners: {attractionDetails.priceRange.foreigners}</p>
                <p className="text-gray-600">Citizens: {attractionDetails.priceRange.citizens}</p>
                {attractionDetails.priceRange.children && (
                  <p className="text-gray-600">Children: {attractionDetails.priceRange.children}</p>
                )}
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Users className="h-5 w-5 text-rwanda-green mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Group Size</h4>
                <p className="text-gray-600">Recommended: 2-8 people</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section>
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Travel Tips</h3>
        <ul className="space-y-2">
          {attractionDetails.tips.map((tip, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-rwanda-green rounded-full mt-2 flex-shrink-0" />
              <span className="text-gray-700">{tip}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Reviews Section */}
      <section>
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Visitor Reviews</h3>
        <div className="space-y-4">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{review.author}</h4>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-2">{review.date}</p>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
        {/* Review Form */}
        <ReviewForm attractionId={attraction.id} onSubmit={handleAddReview} />
      </section>
    </div>
  );
};

export default AttractionMainContent; 