export const events: Event[] = [
  {
    id: 1,
    slug: 'kigali-peace-marathon',
    name: 'Kigali Peace Marathon',
    description: 'Annual marathon event promoting peace and unity in Rwanda.',
    image: '/images/kigali.jpeg',
    location: 'Kigali',
    date: '2025-06-15',
    category: 'sports',
    tags: ['marathon', 'sports', 'peace'],
    featured: true
  },
  {
    id: 2,
    slug: 'gorilla-naming-ceremony-kwita-izina',
    name: 'Gorilla Naming Ceremony (Kwita Izina)',
    description: 'A world-renowned conservation event where baby gorillas are named.',
    image: '/images/COPYRIGHT_HoneyTrek_20230901-6_Kwita.jpg',
    location: 'Volcanoes National Park',
    date: '2025-09-01',
    category: 'culture',
    tags: ['conservation', 'gorillas', 'ceremony'],
    featured: true
  },
  {
    id: 3,
    slug: 'rwanda-film-festival',
    name: 'Rwanda Film Festival',
    description: 'Celebrating Rwandan and African cinema with screenings and workshops.',
    image: '/images/kigali.jpeg',
    location: 'Kigali',
    date: '2025-08-10',
    category: 'arts',
    tags: ['film', 'festival', 'cinema'],
    featured: false
  },
  {
    id: 4,
    slug: 'umuganura-festival',
    name: 'Umuganura Festival',
    description: 'Traditional harvest festival celebrating Rwandan culture and unity.',
    image: '/images/Umuganura-Muhondo-Gakenke-Paying-tribute-to-the-king.jpg',
    location: 'All Provinces',
    date: '2025-08-02',
    category: 'culture',
    tags: ['harvest', 'tradition', 'festival'],
    featured: false
  },
  {
    id: 5,
    slug: 'kigali-fashion-week',
    name: 'Kigali Fashion Week',
    description: 'Showcasing Rwandan and African fashion designers.',
    image: '/images/kigali.jpeg',
    location: 'Kigali',
    date: '2025-11-20',
    category: 'fashion',
    tags: ['fashion', 'design', 'runway'],
    featured: false
  }
];

export const upcomingEvents = events.filter(event => {
  const eventDate = new Date(event.date);
  const today = new Date();
  return eventDate >= today;
}).slice(0, 6); // Limit to 6 upcoming events

export const getEvents = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return events;
};

export async function findEventBySlug(slug: string) {
  return events.find(e => e.slug === slug);
}

export async function filterAndPaginateEvents({
  search = '',
  filters = {},
  // sort = '',
  page = 1,
  pageSize = 8,
}: {
  search?: string;
  filters?: { category?: string[]; location?: string[]; month?: string };
  sort?: string;
  page?: number;
  pageSize?: number;
}) {
  let filtered = events;
  if (search) {
    const s = search.toLowerCase();
    filtered = filtered.filter(e =>
      e.name.toLowerCase().includes(s) ||
      e.description.toLowerCase().includes(s) ||
      e.location.toLowerCase().includes(s)
    );
  }
  if (filters.category && filters.category.length > 0) {
    filtered = filtered.filter(e => filters.category!.includes(e.category));
  }
  if (filters.location && filters.location.length > 0) {
    filtered = filtered.filter(e => filters.location!.includes(e.location));
  }
  if (filters.month && filters.month !== 'all') {
    filtered = filtered.filter(e => {
      const eventMonth = new Date(e.date).getMonth() + 1;
      return String(eventMonth) === filters.month;
    });
  }
  // Add sort logic if needed
  const total = filtered.length;
  const items = filtered.slice((page - 1) * pageSize, page * pageSize);
  return { items, total };
}

export interface Event {
  id: number;
  slug: string;
  name: string;
  description: string;
  image: string;
  location: string;
  date: string;
  category: string;
  tags: string[];
  featured: boolean;
}