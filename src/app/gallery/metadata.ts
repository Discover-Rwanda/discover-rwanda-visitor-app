import { Metadata } from 'next';

export const galleryMetadata: Metadata = {
  title: 'Rwanda Gallery - Stunning Photography of Rwanda\'s Beauty',
  description: 'Explore the beauty of Rwanda through our curated collection of stunning photographs showcasing wildlife, landscapes, culture, and urban scenes. Discover the diverse beauty of Rwanda.',
  keywords: [
    'Rwanda gallery',
    'Rwanda photography',
    'Rwanda wildlife photos',
    'Rwanda landscapes',
    'Rwanda culture photos',
    'Kigali photography',
    'gorilla photos Rwanda',
    'Rwanda travel photos',
    'African photography',
    'Rwanda tourism images'
  ],
  openGraph: {
    title: 'Rwanda Gallery - Stunning Photography of Rwanda\'s Beauty',
    description: 'Explore the beauty of Rwanda through our curated collection of stunning photographs showcasing wildlife, landscapes, culture, and urban scenes.',
    type: 'website',
    url: 'https://discover-rwanda.com/gallery',
    images: [
      {
        url: '/images/gorilla-at-akagera-national-park_Photo-from-Getty-Images.jpg',
        width: 1200,
        height: 630,
        alt: 'Mountain Gorillas in Rwanda'
      }
    ],
    siteName: 'Discover Rwanda'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rwanda Gallery - Stunning Photography of Rwanda\'s Beauty',
    description: 'Explore the beauty of Rwanda through our curated collection of stunning photographs.',
    images: ['/images/gorilla-at-akagera-national-park_Photo-from-Getty-Images.jpg']
  },
  alternates: {
    canonical: 'https://discover-rwanda.com/gallery'
  }
}; 