import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Search, Home, MapPin } from 'lucide-react';

export default function AttractionNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
            <Search className="h-12 w-12 text-gray-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Attraction Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            Sorry, the attraction you&apos;re looking for doesn&apos;t exist or may have been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Button asChild className="w-full bg-rwanda-green hover:bg-rwanda-darkGreen">
            <Link href="/attractions">
              <MapPin className="h-4 w-4 mr-2" />
              Browse All Attractions
            </Link>
          </Button>
          
          <Button variant="outline" asChild className="w-full">
            <Link href="/">
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>

        <div className="mt-8 p-4 bg-white rounded-lg shadow-sm">
          <h3 className="font-medium text-gray-900 mb-2">Popular Attractions</h3>
          <div className="space-y-2 text-sm">
            <Link 
              href="/attractions/volcanoes-national-park" 
              className="block text-rwanda-green hover:text-rwanda-darkGreen"
            >
              Volcanoes National Park
            </Link>
            <Link 
              href="/attractions/nyungwe-forest-national-park" 
              className="block text-rwanda-green hover:text-rwanda-darkGreen"
            >
              Nyungwe Forest National Park
            </Link>
            <Link 
              href="/attractions/lake-kivu" 
              className="block text-rwanda-green hover:text-rwanda-darkGreen"
            >
              Lake Kivu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 