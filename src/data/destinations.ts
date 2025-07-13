import { attractions } from './attractions';

// Define the destination interface
export interface Destination {
    title: string;
    image: string;
    location: string;
    link: string;
}

// Function to get destinations from attractions data
export const getDestinationsFromAttractions = (): Destination[] => {
    // Get featured attractions and map them to destinations
    const featuredAttractions = attractions.filter(attraction => attraction.featured);
    
    return featuredAttractions.map(attraction => ({
        title: attraction.name,
        image: attraction.image,
        location: attraction.location,
        link: `/attractions/${attraction.slug}`
    }));
};

// Static destinations for specific curated selection
export const staticDestinations: Destination[] = [
    {
        title: 'Volcanoes National Park',
        image: '/images/volcanoes-national-park-gorilla_AJ723tqm4-Photo-from-Getty-Images.jpg',
        location: 'Northern Province',
        link: '/attractions/volcanoes-national-park'
    },
    {
        title: 'Lake Kivu',
        image: '/images/lake-kivu_Photo-from-Getty-Images.jpg',
        location: 'Western Province',
        link: '/attractions/lake-kivu'
    },
    {
        title: 'Nyungwe Forest National Park',
        image: '/images/nyungwe_national_park.jpg',
        location: 'Southern Province',
        link: '/attractions/nyungwe-forest-national-park'
    },
    {
        title: 'Kigali Genocide Memorial',
        image: '/images/nyungwe_national_park.jpg',
        location: 'Kigali',
        link: '/attractions/kigali-genocide-memorial'
    },
    {
        title: 'Akagera National Park',
        image: '/images/giraffe-at-akagera-national-park_Photo-from-Getty-Images.jpg',
        location: 'Eastern Province',
        link: '/attractions/akagera-national-park'
    }, 
    {
        title: 'National Museum',
        image: '/images/nyungwe_national_park.jpg',
        location: 'Huye',
        link: '/attractions/national-museum'
    }
];

// Function to get all destinations (using static destinations for now)
export const getAllDestinations = (): Destination[] => {
    return staticDestinations;
};

// Function to get destinations from featured attractions
export const getFeaturedDestinations = (): Destination[] => {
    return getDestinationsFromAttractions();
};

// Export the destinations array for backward compatibility
export const destinations = getAllDestinations();