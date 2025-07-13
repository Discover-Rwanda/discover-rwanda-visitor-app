export const dining: Dining[] = [
  {
    id: 1,
    slug: 'heaven-restaurant-boutique-hotel',
    name: 'Heaven Restaurant & Boutique Hotel',
    description: 'A top-rated restaurant in Kigali offering international and Rwandan cuisine.',
    image: '/images/heaven-restaurant-boutique.jpg',
    location: 'Kigali',
    category: 'fine dining',
    tags: ['international', 'rwandan', 'fine dining'],
    featured: true
  },
  {
    id: 2,
    slug: 'khana-khazana',
    name: 'Khana Khazana',
    description: 'Popular Indian restaurant known for its authentic flavors and vibrant atmosphere.',
    image: '/images/kigali.jpeg',
    location: 'Kigali',
    category: 'indian',
    tags: ['indian', 'spicy', 'vegetarian'],
    featured: false
  },
  {
    id: 3,
    slug: 'the-hut',
    name: 'The Hut',
    description: 'A cozy spot serving a mix of African and international dishes.',
    image: '/images/kigali.jpeg',
    location: 'Kigali',
    category: 'casual',
    tags: ['african', 'international', 'casual'],
    featured: false
  },
  {
    id: 4,
    slug: 'repub-lounge',
    name: 'Repub Lounge',
    description: 'Trendy lounge with great cocktails and a menu of Rwandan favorites.',
    image: '/images/kigali.jpeg',
    location: 'Kigali',
    category: 'lounge',
    tags: ['cocktails', 'rwandan', 'lounge'],
    featured: false
  },
  {
    id: 5,
    slug: 'bourbon-coffee',
    name: 'Bourbon Coffee',
    description: 'Famous coffee shop chain serving Rwandan coffee and light meals.',
    image: '/images/rwandan-coffee_Image-from-getty-images.avif',
    location: 'Kigali',
    category: 'cafe',
    tags: ['coffee', 'cafe', 'breakfast'],
    featured: false
  }
];

export const getDining = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return dining;
};

export async function findDiningBySlug(slug: string) {
  return dining.find(d => d.slug === slug);
}

export async function filterAndPaginateDining({
  search = '',
  filters = {},
  page = 1,
  pageSize = 8,
}: {
  search?: string;
  filters?: { category?: string[]; location?: string[] };
  page?: number;
  pageSize?: number;
}) {
  let filtered = dining;
  if (search) {
    const s = search.toLowerCase();
    filtered = filtered.filter(d =>
      d.name.toLowerCase().includes(s) ||
      d.description.toLowerCase().includes(s) ||
      d.location.toLowerCase().includes(s)
    );
  }
  if (filters.category && filters.category.length > 0) {
    filtered = filtered.filter(d => filters.category!.includes(d.category));
  }
  if (filters.location && filters.location.length > 0) {
    filtered = filtered.filter(d => filters.location!.includes(d.location));
  }
  // Add sort logic if needed
  const total = filtered.length;
  const items = filtered.slice((page - 1) * pageSize, page * pageSize);
  return { items, total };
}

export interface Dining {
  id: number;
  slug: string;
  name: string;
  description: string;
  image: string;
  location: string;
  category: string;
  tags: string[];
  featured: boolean;
} 