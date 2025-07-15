export interface GalleryImage {
    id: string;
    title: string;
    location: string;
    category: string;
    description: string;
    imageUrl: string;
    photographer: string;
}

export const galleryImages: GalleryImage[] = [
    {
        id: '1',
        title: 'Mountain Gorillas',
        location: 'Volcanoes National Park',
        category: 'wildlife',
        description: 'A family of mountain gorillas in their natural habitat in Rwanda\'s Volcanoes National Park. Rwanda is one of only three countries where these endangered primates can be seen in the wild.',
        imageUrl: '/images/gorilla-at-akagera-national-park_Photo-from-Getty-Images.jpg',
        photographer: 'Wildlife Explorer'
    },
    {
        id: '2',
        title: 'Kigali Cityscape',
        location: 'Kigali',
        category: 'urban',
        description: 'A panoramic view of Rwanda\'s capital city Kigali, known for its cleanliness, safety, and beautiful hillside setting.',
        imageUrl: '/images/kigali.jpeg',
        photographer: 'Urban Photographer'
    },
    {
        id: '3',
        title: 'Traditional Dance Performance',
        location: 'Iby\'Iwacu Cultural Village',
        category: 'culture',
        description: 'Intore dancers performing traditional Rwandan dance, showcasing the country\'s rich cultural heritage through music, dance, and colorful costumes.',
        imageUrl: '/images/Nyanza-Traditional-Intore-Dancers-1650x1100.jpg',
        photographer: 'Cultural Enthusiast'
    },
    {
        id: '4',
        title: 'Lake Kivu Sunset',
        location: 'Lake Kivu',
        category: 'landscape',
        description: 'A breathtaking sunset over Lake Kivu, one of Africa\'s Great Lakes that forms the border between Rwanda and the Democratic Republic of Congo.',
        imageUrl: '/images/View-of-Lake-Kivu-in-Rwanda-Photo-credit-Oscar-Espinosa-from-Getty-Images-via-Canva-1920x1080.jpg',
        photographer: 'Nature Lover'
    },
    {
        id: '5',
        title: 'Nyungwe Forest Canopy Walk',
        location: 'Nyungwe National Park',
        category: 'adventure',
        description: 'The famous canopy walkway suspended above Nyungwe Forest, offering visitors a unique perspective of one of Africa\'s oldest rainforests.',
        imageUrl: '/images/nyungwe-forests.jpg',
        photographer: 'Adventure Seeker'
    },
    {
        id: '6',
        title: 'Tea Plantations',
        location: 'Gisakura',
        category: 'landscape',
        description: 'Rwanda\'s verdant tea plantations are not only an important export crop but also create some of the country\'s most beautiful landscapes.',
        imageUrl: '/images/rwanda-produces-fantastic-tea-and-the-country-s-landscape-is-jewelled-with-rows-of-shiny-green-plantations_Photo-from-Getty-Images.jpg',
        photographer: 'Landscape Artist'
    },
    {
        id: '7',
        title: 'Akagera Wildlife',
        location: 'Akagera National Park',
        category: 'wildlife',
        description: 'Elephants roaming freely in Akagera National Park, Rwanda\'s only savanna park and home to the Big Five.',
        imageUrl: '/images/giraffe-at-akagera-national-park_Photo-from-Getty-Images.jpg',
        photographer: 'Safari Photographer'
    },
    {
        id: '8',
        title: 'Kigali Genocide Memorial',
        location: 'Kigali',
        category: 'history',
        description: 'A solemn place of remembrance that honors the victims of the 1994 genocide against the Tutsi. The memorial serves as an important educational center for visitors.',
        imageUrl: '/images/kandt-house-museum-of-natural-history-Photo-from-Arcadiasafaris1024x683.jpg',
        photographer: 'Historical Documentarian'
    },
    {
        id: '9',
        title: 'Local Market',
        location: 'Kimironko Market, Kigali',
        category: 'culture',
        description: 'Colorful displays of fresh produce, textiles, and crafts at a bustling local market in Rwanda, offering a glimpse into everyday life.',
        imageUrl: '/images/Local-cuisine.jpg',
        photographer: 'Street Photographer'
    },
    {
        id: '10',
        title: 'Volcanoes National Park',
        location: 'Virunga Mountains',
        category: 'landscape',
        description: 'The majestic Virunga Mountains provide a stunning backdrop for gorilla trekking and hiking adventures in Rwanda.',
        imageUrl: '/images/Landscape-of-the-Virunga-Mountains-in-Rwanda.jpg',
        photographer: 'Mountain Explorer'
    },
    {
        id: '11',
        title: 'Coffee Plantation',
        location: 'Huye',
        category: 'culture',
        description: 'Rwanda\'s high-quality coffee beans are grown in the fertile hills, creating both economic opportunity and beautiful landscapes.',
        imageUrl: '/images/rwandan-coffee_Image-from-getty-images.avif',
        photographer: 'Coffee Enthusiast'
    },
    {
        id: '12',
        title: 'Cultural Village',
        location: 'Iby\'Iwacu Cultural Village',
        category: 'culture',
        description: 'Experience traditional Rwandan life and customs at the Iby\'Iwacu Cultural Village, where visitors can learn about local traditions.',
        imageUrl: '/images/IbyIwacu-Cultural-Village.jpg',
        photographer: 'Cultural Photographer'
    }
];

export const galleryCategories = [
    { value: 'all', label: 'All Photos' },
    { value: 'wildlife', label: 'Wildlife' },
    { value: 'landscape', label: 'Landscapes' },
    { value: 'culture', label: 'Culture' },
    { value: 'urban', label: 'Urban' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'history', label: 'History' },
];