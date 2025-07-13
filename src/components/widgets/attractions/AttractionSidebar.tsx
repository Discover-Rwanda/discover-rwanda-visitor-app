"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Globe, 
  Star, 
  Users, 
  Info,
  Share2
} from 'lucide-react';
import { Attraction } from '@/data/attractions';

interface AttractionSidebarProps {
  attraction: Attraction;
}

const AttractionSidebar: React.FC<AttractionSidebarProps> = ({ attraction }) => {
  // Mock additional data
  const sidebarData = {
    rating: 4.8,
    reviewCount: 127,
    phone: '+250 788 123 456',
    website: 'www.example.com',
    coordinates: {
      latitude: -1.4833,
      longitude: 29.4833
    },
    quickFacts: [
      'Established in 1925',
      'UNESCO World Heritage Site',
      'Home to mountain gorillas',
      'Over 178 bird species'
    ]
  };

  return (
    <div className="space-y-6 text-black bg-white">
      {/* Quick Info Card */}
      <Card className="bg-white text-black border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-rwanda-green" />
            Quick Info
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Rating</span>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="font-medium">{sidebarData.rating}</span>
              <span className="text-gray-500">({sidebarData.reviewCount})</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gray-500" />
            <span className="text-gray-600">{attraction.location}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-gray-500" />
            <span className="text-gray-600">8:00 AM - 6:00 PM</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-gray-500" />
            <span className="text-gray-600">Open to public</span>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card className="bg-white text-black border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-rwanda-green" />
            Contact
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-1">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-gray-500" />
            <span className="text-gray-600">{sidebarData.phone}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-gray-500" />
            <a 
              href={`https://${sidebarData.website}`} 
              className="text-rwanda-green hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {sidebarData.website}
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Quick Facts */}
      <Card className="bg-white text-black border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-rwanda-green" />
            Quick Facts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {sidebarData.quickFacts.map((fact, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-rwanda-green rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{fact}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Category & Tags */}
      <Card className="bg-white text-black border-slate-200">
        <CardHeader>
          <CardTitle>Categories & Tags</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <span className="text-sm text-gray-600">Category:</span>
            <Badge variant="secondary" className="ml-2 capitalize">
              {attraction.category}
            </Badge>
          </div>
          
          <div>
            <span className="text-sm text-gray-600">Tags:</span>
            <div className="flex flex-wrap gap-1 mt-1">
              {attraction.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full border border-gray-200">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button className="w-full bg-rwanda-green hover:bg-rwanda-darkGreen text-white">
          Book Your Visit
        </Button>
        
        <Button variant="outline" className="w-full text-rwanda-green border-rwanda-green border-2 hover:bg-rwanda-green hover:text-white">
          <Share2 className="h-4 w-4 mr-2" />
          Share
        </Button>
      </div>

      {/* Map Coordinates */}
      <Card className="bg-white text-black border-slate-200">
        <CardHeader>
          <CardTitle className="text-sm">Location Coordinates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-gray-600">
            <p>Latitude: {sidebarData.coordinates.latitude}°</p>
            <p>Longitude: {sidebarData.coordinates.longitude}°</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AttractionSidebar; 