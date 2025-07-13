import { staticDestinations } from './destinations';

// Enhanced Attraction interface with all necessary fields
export interface Attraction {
    id: number;
    slug: string;
    name: string;
    description: string; // HTML content from rich text editor
    shortDescription: string; // Plain text for cards/lists
    image: string;
    images: string[]; // Gallery images
    location: string;
    category: string;
    tags: string[];
    featured: boolean;
    
    // Practical Information
    openingHours: {
        monFri: string;
        satSun: string;
        holidays?: string;
    };
    bestTimeToVisit: string;
    priceRange: {
        foreigners: string;
        citizens: string;
        children?: string;
    };
    coordinates: {
        latitude: number;
        longitude: number;
    };
    
    // Contact Information
    contact: {
        phone: string;
        email?: string;
        website?: string;
    };
    
    // Quick Facts
    quickFacts: string[];
    
    // Travel Tips
    travelTips: string[];
    
    // Reviews
    reviews: Review[];
    
    // Additional Information
    established?: string;
    area?: string;
    elevation?: string;
    climate?: string;
    accessibility?: string;
    parking?: string;
    facilities?: string[];
}

// Review interface
export interface Review {
    id: string;
    author: string;
    date: string;
    rating: number;
    comment: string;
    verified?: boolean;
}

export const attractions: Attraction[] = [
    {
        id: 1,
        slug: 'volcanoes-national-park',
        name: 'Volcanoes National Park',
        description: `
            <h2>About Volcanoes National Park</h2>
            <p>Volcanoes National Park is a national park in northwestern Rwanda. It covers <strong>160 sq km</strong> of rainforest and encompasses five of the eight volcanoes in the Virunga Mountains, namely Karisimbi, Bisoke, Muhabura, Gahinga and Sabyinyo.</p>
            
            <div class="info-box">
                <p><strong>Quick Fact:</strong> This was the first National Park to be created in Africa, established in 1925 to protect the endangered mountain gorillas.</p>
            </div>
            
            <h3>Gorilla Trekking Experience</h3>
            <p>Volcanoes National Park is best known as a sanctuary for the region's rare mountain gorillas. Visitors trek up the volcano slopes to spend a predetermined time with a gorilla family. The experience is truly unforgettable, offering a rare opportunity to observe these magnificent creatures in their natural habitat.</p>
            
            <div class="warning-box">
                <p><strong>Important:</strong> Gorilla trekking permits must be booked well in advance (6+ months recommended) and are limited to 8 people per group.</p>
            </div>
            
            <h3>Wildlife and Biodiversity</h3>
            <p>The park also hosts golden monkeys, spotted hyenas, buffaloes, elephants, black-fronted duikers, and bushbucks. There are also reported sightings of the forest elephants. There are <span class="highlight">178 bird species</span> recorded, with at least 13 species and 16 subspecies endemic to the Virunga area.</p>
            
            <h3>Historical Significance</h3>
            <p>The park was first gazetted in 1925, as a small area bounded by Karisimbi, Bisoke and Mikeno volcanoes, intended to protect the gorillas from poachers. It was the first National Park to be created in Africa. Subsequently, in 1929, the borders of the park were extended into Rwanda and the then Belgian Congo.</p>
            
            <blockquote>
                <p>"The experience of encountering mountain gorillas in their natural habitat is one of the most profound wildlife experiences on Earth." - Dian Fossey</p>
            </blockquote>
            
            <p>During the Rwandan Civil War, the park suffered terribly. The park headquarters were attacked, and the tourism infrastructure destroyed. During this time, poaching depleted the park's wildlife populations. After the war, the park headquarters were rebuilt, and the park was reopened to tourists in 1999.</p>
            
            <div class="success-box">
                <p><strong>Conservation Success:</strong> Thanks to dedicated conservation efforts, the mountain gorilla population has been steadily increasing, making this one of the greatest conservation success stories in Africa.</p>
            </div>
        `,
        shortDescription: 'Home to endangered mountain gorillas and golden monkeys, offering trekking experiences in a stunning volcanic landscape.',
        image: '/images/volcanoes-national-park-gorilla_AJ723tqm4-Photo-from-Getty-Images.jpg',
        images: [
            '/images/volcanoes-national-park-gorilla_AJ723tqm4-Photo-from-Getty-Images.jpg',
            '/images/Landscape-of-the-Virunga-Mountains-in-Rwanda.jpg',
            '/images/nyungwe_national_park.jpg',
            '/images/kigali.jpeg'
        ],
        location: 'Northern Province',
        category: 'natural',
        tags: ['wildlife', 'hiking', 'gorillas', 'trekking', 'conservation'],
        featured: true,
        
        openingHours: {
            monFri: '8:00 AM - 6:00 PM',
            satSun: '9:00 AM - 5:00 PM',
            holidays: '9:00 AM - 4:00 PM'
        },
        bestTimeToVisit: 'June to September (Dry Season)',
        priceRange: {
            foreigners: '$1,500 for gorilla trekking permit',
            citizens: 'RWF 30,000 for park entry',
            children: 'RWF 15,000 (under 12)'
        },
        coordinates: {
            latitude: -1.4833,
            longitude: 29.4833
        },
        contact: {
            phone: '+250 788 123 456',
            email: 'info@volcanoesnationalpark.rw',
            website: 'www.volcanoesnationalpark.rw'
        },
        quickFacts: [
            'Established in 1925',
            'First National Park in Africa',
            'Home to mountain gorillas',
            'Over 178 bird species',
            'UNESCO World Heritage Site',
            'Covers 160 sq km'
        ],
        travelTips: [
            'Book your gorilla trekking permit well in advance (6+ months recommended)',
            'Wear sturdy hiking boots and long pants for trekking',
            'Bring a waterproof jacket even in dry season',
            'Hire a porter to help with your backpack and assist on steep sections',
            'Photography is allowed but without flash',
            'Maximum 8 people per gorilla group',
            'Trekking duration varies from 1-8 hours'
        ],
        reviews: [
            {
                id: '1',
                author: 'Sarah Johnson',
                date: 'March 15, 2024',
                rating: 5,
                comment: 'Gorilla trekking was the most incredible wildlife experience of my life. Worth every penny. Our guide was knowledgeable and we spent an amazing hour with a gorilla family.',
                verified: true
            },
            {
                id: '2',
                author: 'Michael Chen',
                date: 'February 28, 2024',
                rating: 4,
                comment: 'Beautiful park and amazing gorilla encounter. The trek was more strenuous than I expected, but our guide was patient and helpful. Bring good hiking boots!',
                verified: true
            },
            {
                id: '3',
                author: 'Emma Williams',
                date: 'January 10, 2024',
                rating: 5,
                comment: 'Absolutely breathtaking experience. We were fortunate to see a silverback gorilla up close. The park is well-maintained and staff are professional.',
                verified: true
            }
        ],
        established: '1925',
        area: '160 sq km',
        elevation: '2,500 - 4,507 meters',
        climate: 'Tropical highland',
        accessibility: 'Moderate - requires hiking',
        parking: 'Available at park headquarters',
        facilities: ['Visitor Center', 'Gift Shop', 'Restrooms', 'Guided Tours', 'Porter Services']
    },
    {
        id: 2,
        slug: 'nyungwe-forest-national-park',
        name: 'Nyungwe Forest National Park',
        description: `
            <h2>About Nyungwe Forest National Park</h2>
            <p>Nyungwe Forest National Park is one of the oldest rainforests in Africa, dating back to before the Ice Age. This ancient forest covers over 1,000 square kilometers and is home to an incredible diversity of wildlife and plant species.</p>
            
            <h3>Canopy Walkway Experience</h3>
            <p>The park features a spectacular canopy walkway that allows visitors to walk among the treetops, offering a unique perspective of the forest ecosystem. The walkway spans 200 meters and reaches heights of up to 60 meters above the forest floor.</p>
            
            <h3>Chimpanzee Trekking</h3>
            <p>Nyungwe is famous for its chimpanzee trekking experiences. Visitors can track and observe these fascinating primates in their natural habitat, learning about their behavior and social structures from expert guides.</p>
            
            <h3>Biodiversity Hotspot</h3>
            <p>The forest is home to over 1,000 plant species, 85 mammal species, 310 bird species, and 32 amphibian species. It's particularly known for its 13 species of primates, making it one of the most important primate habitats in Africa.</p>
        `,
        shortDescription: 'Ancient rainforest with incredible biodiversity, canopy walkway, and chimpanzee trekking opportunities.',
        image: '/images/nyungwe_national_park.jpg',
        images: [
            '/images/nyungwe_national_park.jpg',
            '/images/nyungwe-forests.jpg',
            '/images/kigali.jpeg',
            '/images/lake-kivu_Photo-from-Getty-Images.jpg'
        ],
        location: 'Southern Province',
        category: 'natural',
        tags: ['wildlife', 'hiking', 'canopy walk', 'chimpanzees', 'rainforest'],
        featured: true,
        
        openingHours: {
            monFri: '7:00 AM - 6:00 PM',
            satSun: '8:00 AM - 5:00 PM'
        },
        bestTimeToVisit: 'December to February and June to August',
        priceRange: {
            foreigners: '$100 for chimpanzee trekking',
            citizens: 'RWF 20,000 for park entry',
            children: 'RWF 10,000 (under 12)'
        },
        coordinates: {
            latitude: -2.4667,
            longitude: 29.1833
        },
        contact: {
            phone: '+250 788 234 567',
            email: 'info@nyungweforest.rw',
            website: 'www.nyungweforest.rw'
        },
        quickFacts: [
            'One of Africa\'s oldest rainforests',
            'Over 1,000 plant species',
            '13 species of primates',
            '310 bird species',
            'Canopy walkway 60m high',
            'Covers 1,000+ sq km'
        ],
        travelTips: [
            'Book chimpanzee trekking in advance',
            'Wear comfortable hiking shoes',
            'Bring binoculars for bird watching',
            'The canopy walkway is not for those afraid of heights',
            'Best time for chimpanzee viewing is early morning',
            'Guides are mandatory for all activities'
        ],
        reviews: [
            {
                id: '4',
                author: 'David Thompson',
                date: 'April 5, 2024',
                rating: 5,
                comment: 'The canopy walkway was absolutely thrilling! The views of the forest from above were incredible. Our guide was very knowledgeable about the local wildlife.',
                verified: true
            },
            {
                id: '5',
                author: 'Lisa Rodriguez',
                date: 'March 20, 2024',
                rating: 4,
                comment: 'Amazing chimpanzee trekking experience. We saw a large family group and learned so much about their behavior. The forest is beautiful and well-preserved.',
                verified: true
            }
        ],
        established: '2004',
        area: '1,019 sq km',
        elevation: '1,600 - 2,950 meters',
        climate: 'Tropical rainforest',
        accessibility: 'Moderate - requires hiking',
        parking: 'Available at park entrance',
        facilities: ['Visitor Center', 'Restrooms', 'Guided Tours', 'Canopy Walkway', 'Hiking Trails']
    },
    {
        id: 3,
        slug: 'lake-kivu',
        name: 'Lake Kivu',
        description: `
            <h2>About Lake Kivu</h2>
            <p>Lake Kivu is one of Africa's Great Lakes, located on the border between Rwanda and the Democratic Republic of Congo. It's the sixth-largest lake in Africa and is known for its stunning beauty and unique characteristics.</p>
            
            <h3>Natural Beauty</h3>
            <p>The lake is surrounded by rolling hills and volcanic mountains, creating a breathtaking landscape. The clear blue waters and sandy beaches make it a perfect destination for relaxation and water activities.</p>
            
            <h3>Water Activities</h3>
            <p>Visitors can enjoy various water activities including swimming, kayaking, boat tours, and fishing. The lake is also famous for its methane gas deposits, which are being harnessed for energy production.</p>
            
            <h3>Beach Destinations</h3>
            <p>The lake features several beautiful beach destinations including Gisenyi, Kibuye, and Cyangugu, each offering unique experiences and stunning views of the surrounding landscape.</p>
        `,
        shortDescription: 'One of Africa\'s Great Lakes offering beautiful beaches, boat tours, and water sports in a serene setting.',
        image: '/images/lake-kivu_Photo-from-Getty-Images.jpg',
        images: [
            '/images/lake-kivu_Photo-from-Getty-Images.jpg',
            '/images/Lake-Kivu-Kayak-Phto-from-Arcadiasafaris-1024x552.jpg',
            '/images/View-of-Lake-Kivu-in-Rwanda-Photo-credit-Oscar-Espinova-from-Getty-Images-via-Canva-1920x1080.jpg',
            '/images/kigali.jpeg'
        ],
        location: 'Western Province',
        category: 'natural',
        tags: ['water', 'beaches', 'relaxation', 'water sports', 'lake'],
        featured: true,
        
        openingHours: {
            monFri: '6:00 AM - 8:00 PM',
            satSun: '6:00 AM - 9:00 PM'
        },
        bestTimeToVisit: 'Year-round, but June to September is ideal',
        priceRange: {
            foreigners: '$20 - $100 for activities',
            citizens: 'RWF 5,000 - 25,000 for activities'
        },
        coordinates: {
            latitude: -2.0000,
            longitude: 29.0000
        },
        contact: {
            phone: '+250 788 345 678',
            email: 'info@lakekivu.rw',
            website: 'www.lakekivu.rw'
        },
        quickFacts: [
            'Sixth-largest lake in Africa',
            'Shared with DRC',
            'Methane gas deposits',
            'Volcanic origin',
            '2,700 sq km surface area',
            'Maximum depth 480m'
        ],
        travelTips: [
            'Best beaches are in Gisenyi and Kibuye',
            'Book water activities in advance',
            'Bring sunscreen and swimwear',
            'Try local fish dishes',
            'Sunset boat tours are highly recommended',
            'Water is safe for swimming'
        ],
        reviews: [
            {
                id: '6',
                author: 'Maria Garcia',
                date: 'February 15, 2024',
                rating: 5,
                comment: 'Lake Kivu is absolutely stunning! The water is crystal clear and the beaches are pristine. We enjoyed kayaking and the sunset boat tour was magical.',
                verified: true
            },
            {
                id: '7',
                author: 'James Wilson',
                date: 'January 30, 2024',
                rating: 4,
                comment: 'Great place to relax and unwind. The lake views are spectacular and the local restaurants serve delicious fresh fish. Highly recommend the boat tour.',
                verified: true
            }
        ],
        established: 'Natural formation',
        area: '2,700 sq km',
        elevation: '1,460 meters',
        climate: 'Tropical',
        accessibility: 'Easy - accessible by road',
        parking: 'Available at beach areas',
        facilities: ['Beach Access', 'Boat Tours', 'Water Sports', 'Restaurants', 'Accommodations']
    },
    {
        id: 4,
        slug: 'kigali-genocide-memorial',
        name: 'Kigali Genocide Memorial',
        description: `
            <h2>About Kigali Genocide Memorial</h2>
            <p>The Kigali Genocide Memorial serves as a place of remembrance and learning about Rwanda's tragic history and remarkable journey of reconciliation. It honors the memory of the more than one million Rwandans killed in the 1994 genocide against the Tutsi.</p>
            
            <h3>Historical Significance</h3>
            <p>The memorial was established in 2004, ten years after the genocide, and serves as the final resting place for more than 250,000 victims. It stands as a powerful reminder of the consequences of hatred and division, and the importance of unity and reconciliation.</p>
            
            <h3>Educational Experience</h3>
            <p>Visitors can learn about the history of Rwanda, the events leading to the genocide, and the country's remarkable recovery and reconciliation process. The memorial includes exhibits, testimonies, and educational materials that help visitors understand this dark chapter in human history.</p>
        `,
        shortDescription: 'A place of remembrance and learning about Rwanda\'s tragic history and remarkable journey of reconciliation.',
        image: '/images/nyungwe_national_park.jpg',
        images: [
            '/images/nyungwe_national_park.jpg',
            '/images/kigali.jpeg',
            '/images/nyungwe-forests.jpg',
            '/images/lake-kivu_Photo-from-Getty-Images.jpg'
        ],
        location: 'Kigali',
        category: 'cultural',
        tags: ['history', 'education', 'memorial', 'genocide'],
        featured: false,
        
        openingHours: {
            monFri: '8:00 AM - 5:00 PM',
            satSun: '9:00 AM - 4:00 PM'
        },
        bestTimeToVisit: 'Year-round',
        priceRange: {
            foreigners: 'Free entry',
            citizens: 'Free entry'
        },
        coordinates: {
            latitude: -1.9441,
            longitude: 30.0619
        },
        contact: {
            phone: '+250 788 456 789',
            email: 'info@kigalimemorial.org',
            website: 'www.kigalimemorial.org'
        },
        quickFacts: [
            'Established in 2004',
            'Final resting place for 250,000+ victims',
            'Free admission',
            'Educational exhibits',
            'Guided tours available',
            'Peace garden on site'
        ],
        travelTips: [
            'Dress respectfully',
            'Photography is restricted',
            'Allow 2-3 hours for visit',
            'Guided tours are recommended',
            'Visit during weekdays for fewer crowds',
            'Be prepared for emotional content'
        ],
        reviews: [
            {
                id: '8',
                author: 'Robert Kim',
                date: 'March 10, 2024',
                rating: 5,
                comment: 'A deeply moving and educational experience. The memorial is beautifully designed and provides important historical context. Essential visit for understanding Rwanda\'s journey.',
                verified: true
            }
        ],
        established: '2004',
        area: '2.5 hectares',
        accessibility: 'Easy - wheelchair accessible',
        parking: 'Available on site',
        facilities: ['Visitor Center', 'Exhibition Halls', 'Peace Garden', 'Restrooms', 'Guided Tours']
    },
    {
        id: 5,
        slug: 'ethnographic-museum',
        name: 'Ethnographic Museum',
        description: `
            <h2>About Ethnographic Museum</h2>
            <p>The Ethnographic Museum, located in Huye (formerly Butare), is one of Rwanda's most important cultural institutions. It houses an extensive collection of traditional artifacts, art, and historical exhibits that showcase Rwanda's rich cultural heritage.</p>
            
            <h3>Cultural Heritage</h3>
            <p>The museum's collection includes traditional tools, weapons, musical instruments, clothing, and household items that provide insight into Rwanda's pre-colonial and colonial history. The exhibits are organized thematically to help visitors understand different aspects of Rwandan culture.</p>
            
            <h3>Educational Value</h3>
            <p>Visitors can learn about traditional Rwandan society, including social structures, economic activities, religious practices, and artistic traditions. The museum also features temporary exhibitions on contemporary Rwandan art and culture.</p>
        `,
        shortDescription: 'Explore Rwanda\'s cultural heritage through traditional artifacts, art, and historical exhibits.',
        image: '/images/nyungwe_national_park.jpg',
        images: [
            '/images/nyungwe_national_park.jpg',
            '/images/Nyanza-Traditional-Intore-Dancers-1650x1100.jpg',
            '/images/kigali.jpeg',
            '/images/nyungwe-forests.jpg'
        ],
        location: 'Huye',
        category: 'cultural',
        tags: ['museum', 'culture', 'history', 'art'],
        featured: false,
        
        openingHours: {
            monFri: '8:00 AM - 6:00 PM',
            satSun: '9:00 AM - 5:00 PM'
        },
        bestTimeToVisit: 'Year-round',
        priceRange: {
            foreigners: 'RWF 5,000',
            citizens: 'RWF 2,000',
            children: 'RWF 1,000 (under 12)'
        },
        coordinates: {
            latitude: -2.6000,
            longitude: 29.7500
        },
        contact: {
            phone: '+250 788 567 890',
            email: 'info@ethnographicmuseum.rw',
            website: 'www.ethnographicmuseum.rw'
        },
        quickFacts: [
            'Located in Huye (Butare)',
            'Extensive cultural collection',
            'Traditional artifacts',
            'Historical exhibits',
            'Educational programs',
            'Guided tours available'
        ],
        travelTips: [
            'Allow 2-3 hours for visit',
            'Guided tours are informative',
            'Photography is allowed',
            'Visit during weekdays',
            'Combine with other Huye attractions',
            'Check for special exhibitions'
        ],
        reviews: [
            {
                id: '9',
                author: 'Anna Smith',
                date: 'February 20, 2024',
                rating: 4,
                comment: 'Fascinating collection of traditional Rwandan artifacts. The guided tour was very informative and helped us understand the cultural context better.',
                verified: true
            }
        ],
        established: '1989',
        accessibility: 'Easy - wheelchair accessible',
        parking: 'Available on site',
        facilities: ['Exhibition Halls', 'Gift Shop', 'Restrooms', 'Guided Tours', 'Café']
    },
    {
        id: 6,
        slug: 'akagera-national-park',
        name: 'Akagera National Park',
        description: `
            <h2>About Akagera National Park</h2>
            <p>Akagera National Park is Rwanda's only savannah park, offering a classic African safari experience. The park is home to the Big Five (lions, elephants, buffaloes, leopards, and rhinos) and features a stunning landscape of lakes, valleys, and rolling hills.</p>
            
            <h3>Wildlife Safari</h3>
            <p>Visitors can enjoy game drives to spot a wide variety of wildlife including lions, elephants, giraffes, zebras, antelopes, and over 500 bird species. The park's diverse ecosystems support both savannah and wetland wildlife.</p>
            
            <h3>Scenic Beauty</h3>
            <p>The park is named after the Akagera River and features several lakes including Lake Ihema, the second-largest lake in Rwanda. The landscape is characterized by rolling hills, savannah grasslands, and papyrus swamps.</p>
        `,
        shortDescription: 'Savannah park with lions, elephants, giraffes and hippos in a stunning landscape of lakes and valleys.',
        image: '/images/giraffe-at-akagera-national-park_Photo-from-Getty-Images.jpg',
        images: [
            '/images/giraffe-at-akagera-national-park_Photo-from-Getty-Images.jpg',
            '/images/nyungwe_national_park.jpg',
            '/images/kigali.jpeg',
            '/images/lake-kivu_Photo-from-Getty-Images.jpg'
        ],
        location: 'Eastern Province',
        category: 'natural',
        tags: ['wildlife', 'safari', 'big five', 'savannah'],
        featured: true,
        
        openingHours: {
            monFri: '6:00 AM - 6:00 PM',
            satSun: '6:00 AM - 6:00 PM'
        },
        bestTimeToVisit: 'June to September (Dry Season)',
        priceRange: {
            foreigners: '$100 for game drive',
            citizens: 'RWF 25,000 for park entry',
            children: 'RWF 12,500 (under 12)'
        },
        coordinates: {
            latitude: -1.7500,
            longitude: 30.7500
        },
        contact: {
            phone: '+250 788 678 901',
            email: 'info@akageranationalpark.rw',
            website: 'www.akageranationalpark.rw'
        },
        quickFacts: [
            'Only savannah park in Rwanda',
            'Home to the Big Five',
            'Over 500 bird species',
            '1,122 sq km area',
            'Lakes and wetlands',
            'Safari experiences'
        ],
        travelTips: [
            'Book game drives in advance',
            'Best wildlife viewing at dawn and dusk',
            'Bring binoculars and camera',
            'Stay at least 2-3 days',
            'Professional guides are mandatory',
            'Check weather conditions'
        ],
        reviews: [
            {
                id: '10',
                author: 'Thomas Brown',
                date: 'April 12, 2024',
                rating: 5,
                comment: 'Amazing safari experience! We saw lions, elephants, and many other animals. The landscape is beautiful and our guide was excellent. Highly recommend the boat safari on Lake Ihema.',
                verified: true
            }
        ],
        established: '1934',
        area: '1,122 sq km',
        elevation: '1,300 - 1,825 meters',
        climate: 'Tropical savannah',
        accessibility: 'Moderate - requires vehicle',
        parking: 'Available at park entrance',
        facilities: ['Visitor Center', 'Lodges', 'Camping', 'Game Drives', 'Boat Safaris', 'Restrooms']
    },
    {
        id: 7,
        slug: 'kimironko-market',
        name: 'Kimironko Market',
        description: `
            <h2>About Kimironko Market</h2>
            <p>Kimironko Market is one of Kigali's largest and most vibrant local markets, offering an authentic shopping experience with colorful textiles, crafts, fresh produce, and local goods.</p>
            
            <h3>Local Experience</h3>
            <p>This bustling market provides visitors with a glimpse into everyday Rwandan life. You can find everything from traditional fabrics and handmade crafts to fresh fruits, vegetables, and local spices.</p>
            
            <h3>Shopping Opportunities</h3>
            <p>The market is particularly famous for its textile section, where you can find beautiful traditional Rwandan fabrics, modern clothing, and accessories. Bargaining is expected and part of the local culture.</p>
        `,
        shortDescription: 'Vibrant local market offering colorful textiles, crafts, fresh produce, and an authentic shopping experience.',
        image: '/images/nyungwe_national_park.jpg',
        images: [
            '/images/nyungwe_national_park.jpg',
            '/images/kigali.jpeg',
            '/images/nyungwe-forests.jpg',
            '/images/lake-kivu_Photo-from-Getty-Images.jpg'
        ],
        location: 'Kigali',
        category: 'urban',
        tags: ['shopping', 'local experience', 'crafts', 'market'],
        featured: false,
        
        openingHours: {
            monFri: '6:00 AM - 7:00 PM',
            satSun: '7:00 AM - 6:00 PM'
        },
        bestTimeToVisit: 'Morning hours for fresh produce',
        priceRange: {
            foreigners: 'Variable - bargaining expected',
            citizens: 'Variable - bargaining expected'
        },
        coordinates: {
            latitude: -1.9441,
            longitude: 30.0619
        },
        contact: {
            phone: '+250 788 789 012',
            email: 'info@kimironkomarket.rw'
        },
        quickFacts: [
            'Largest market in Kigali',
            'Traditional textiles',
            'Fresh produce',
            'Local crafts',
            'Bargaining culture',
            'Authentic experience'
        ],
        travelTips: [
            'Bargain for better prices',
            'Visit early for fresh produce',
            'Bring cash in small denominations',
            'Be respectful of vendors',
            'Take photos with permission',
            'Wear comfortable shoes'
        ],
        reviews: [
            {
                id: '11',
                author: 'Jennifer Lee',
                date: 'March 25, 2024',
                rating: 4,
                comment: 'Great place to experience local culture and buy authentic souvenirs. The textile section is amazing with beautiful traditional fabrics.',
                verified: true
            }
        ],
        accessibility: 'Easy - accessible by road',
        parking: 'Available nearby',
        facilities: ['Market Stalls', 'Restrooms', 'Food Vendors', 'ATM']
    },
    {
        id: 8,
        slug: 'kings-palace-museum',
        name: 'King\'s Palace Museum',
        description: `
            <h2>About King's Palace Museum</h2>
            <p>The King's Palace Museum is a historical royal residence that showcases traditional Rwandan monarchy and cultural practices. The museum provides insight into Rwanda's pre-colonial royal heritage.</p>
            
            <h3>Royal Heritage</h3>
            <p>The palace complex includes traditional royal buildings, artifacts, and exhibits that demonstrate the lifestyle and customs of Rwanda's traditional monarchy. Visitors can see how kings lived and ruled in pre-colonial Rwanda.</p>
            
            <h3>Cultural Significance</h3>
            <p>The museum preserves important aspects of Rwandan cultural heritage, including traditional architecture, royal regalia, and historical artifacts that tell the story of Rwanda's monarchy.</p>
        `,
        shortDescription: 'Historical royal residence showcasing traditional Rwandan monarchy and cultural practices.',
        image: '/images/nyungwe_national_park.jpg',
        images: [
            '/images/nyungwe_national_park.jpg',
            '/images/Nyanza-Traditional-Intore-Dancers-1650x1100.jpg',
            '/images/kigali.jpeg',
            '/images/nyungwe-forests.jpg'
        ],
        location: 'Southern Province',
        category: 'cultural',
        tags: ['history', 'museum', 'royal', 'palace'],
        featured: false,
        
        openingHours: {
            monFri: '8:00 AM - 6:00 PM',
            satSun: '9:00 AM - 5:00 PM'
        },
        bestTimeToVisit: 'Year-round',
        priceRange: {
            foreigners: 'RWF 3,000',
            citizens: 'RWF 1,500',
            children: 'RWF 750 (under 12)'
        },
        coordinates: {
            latitude: -2.4667,
            longitude: 29.7500
        },
        contact: {
            phone: '+250 788 890 123',
            email: 'info@kingspalace.rw',
            website: 'www.kingspalace.rw'
        },
        quickFacts: [
            'Traditional royal palace',
            'Pre-colonial history',
            'Royal artifacts',
            'Cultural exhibits',
            'Traditional architecture',
            'Historical significance'
        ],
        travelTips: [
            'Allow 1-2 hours for visit',
            'Guided tours available',
            'Photography allowed',
            'Combine with other cultural sites',
            'Learn about royal history',
            'Respect cultural significance'
        ],
        reviews: [
            {
                id: '12',
                author: 'Carlos Rodriguez',
                date: 'February 15, 2024',
                rating: 4,
                comment: 'Interesting insight into Rwanda\'s royal history. The traditional architecture is impressive and the exhibits are well-curated.',
                verified: true
            }
        ],
        established: 'Pre-colonial',
        accessibility: 'Easy - wheelchair accessible',
        parking: 'Available on site',
        facilities: ['Exhibition Halls', 'Traditional Buildings', 'Restrooms', 'Guided Tours']
    },
    {
        id: 9,
        slug: 'congo-nile-trail',
        name: 'Congo Nile Trail',
        description: `
            <h2>About Congo Nile Trail</h2>
            <p>The Congo Nile Trail is a scenic hiking and biking route that follows the shores of Lake Kivu, passing through rural villages and beautiful landscapes. This 227-kilometer trail offers an authentic Rwandan experience.</p>
            
            <h3>Trail Experience</h3>
            <p>The trail can be completed on foot or by bicycle, with various sections suitable for different fitness levels. It passes through traditional villages, tea plantations, and offers stunning views of Lake Kivu and the surrounding mountains.</p>
            
            <h3>Cultural Immersion</h3>
            <p>Along the trail, visitors can experience rural Rwandan life, interact with local communities, and learn about traditional farming practices and local customs.</p>
        `,
        shortDescription: 'Scenic hiking and biking route along Lake Kivu, passing through rural villages and beautiful landscapes.',
        image: '/images/nyungwe_national_park.jpg',
        images: [
            '/images/nyungwe_national_park.jpg',
            '/images/lake-kivu_Photo-from-Getty-Images.jpg',
            '/images/Lake-Kivu-Kayak-Phto-from-Arcadiasafaris-1024x552.jpg',
            '/images/kigali.jpeg'
        ],
        location: 'Western Province',
        category: 'natural',
        tags: ['hiking', 'biking', 'scenery', 'trail'],
        featured: false,
        
        openingHours: {
            monFri: '6:00 AM - 6:00 PM',
            satSun: '6:00 AM - 6:00 PM'
        },
        bestTimeToVisit: 'June to September (Dry Season)',
        priceRange: {
            foreigners: 'Free - self-guided',
            citizens: 'Free - self-guided'
        },
        coordinates: {
            latitude: -2.0000,
            longitude: 29.0000
        },
        contact: {
            phone: '+250 788 901 234',
            email: 'info@congoniletrail.rw',
            website: 'www.congoniletrail.rw'
        },
        quickFacts: [
            '227 km trail length',
            'Hiking and biking',
            'Lake Kivu views',
            'Rural villages',
            'Tea plantations',
            'Cultural experience'
        ],
        travelTips: [
            'Plan your route in advance',
            'Bring sufficient water and snacks',
            'Wear comfortable hiking shoes',
            'Respect local communities',
            'Check weather conditions',
            'Consider hiring a guide'
        ],
        reviews: [
            {
                id: '13',
                author: 'Mark Johnson',
                date: 'April 8, 2024',
                rating: 5,
                comment: 'Amazing trail with breathtaking views of Lake Kivu. The rural villages along the way provide an authentic Rwandan experience. Highly recommend for nature lovers.',
                verified: true
            }
        ],
        established: '2009',
        area: '227 km trail',
        elevation: '1,460 - 2,000 meters',
        climate: 'Tropical',
        accessibility: 'Moderate - requires hiking/biking',
        parking: 'Available at trailheads',
        facilities: ['Trail Markers', 'Rest Areas', 'Local Guides', 'Accommodations']
    },
    {
        id: 10,
        slug: 'gisenyi-beach',
        name: 'Gisenyi Beach',
        description: `
            <h2>About Gisenyi Beach</h2>
            <p>Gisenyi Beach is a popular beach destination on Lake Kivu, known for its beautiful views and water activities. The beach offers a perfect escape for relaxation and recreation.</p>
            
            <h3>Beach Activities</h3>
            <p>Visitors can enjoy swimming, sunbathing, beach volleyball, and various water sports. The clear waters of Lake Kivu provide excellent conditions for swimming and water activities.</p>
            
            <h3>Scenic Beauty</h3>
            <p>The beach offers stunning views of Lake Kivu and the surrounding volcanic mountains. It's a perfect spot for photography and enjoying the natural beauty of Rwanda.</p>
        `,
        shortDescription: 'A popular beach destination on Lake Kivu with beautiful views and water activities.',
        image: '/images/lake-kivu_Photo-from-Getty-Images.jpg',
        images: [
            '/images/lake-kivu_Photo-from-Getty-Images.jpg',
            '/images/Lake-Kivu-Kayak-Phto-from-Arcadiasafaris-1024x552.jpg',
            '/images/View-of-Lake-Kivu-in-Rwanda-Photo-credit-Oscar-Espinova-from-Getty-Images-via-Canva-1920x1080.jpg',
            '/images/kigali.jpeg'
        ],
        location: 'Gisenyi',
        category: 'natural',
        tags: ['beach', 'lake', 'relaxation', 'water sports'],
        featured: false,
        
        openingHours: {
            monFri: '6:00 AM - 8:00 PM',
            satSun: '6:00 AM - 9:00 PM'
        },
        bestTimeToVisit: 'Year-round, but June to September is ideal',
        priceRange: {
            foreigners: 'Free entry',
            citizens: 'Free entry'
        },
        coordinates: {
            latitude: -1.7000,
            longitude: 29.2500
        },
        contact: {
            phone: '+250 788 012 345',
            email: 'info@gisenyibeach.rw'
        },
        quickFacts: [
            'Popular beach destination',
            'Lake Kivu location',
            'Water activities',
            'Scenic views',
            'Free access',
            'Family-friendly'
        ],
        travelTips: [
            'Bring sunscreen and swimwear',
            'Best time is morning or evening',
            'Try local restaurants nearby',
            'Water is safe for swimming',
            'Bring beach towels and chairs',
            'Check weather conditions'
        ],
        reviews: [
            {
                id: '14',
                author: 'Lisa Chen',
                date: 'March 18, 2024',
                rating: 4,
                comment: 'Beautiful beach with crystal clear water. Perfect for swimming and relaxing. The views of the lake and mountains are spectacular.',
                verified: true
            }
        ],
        established: 'Natural formation',
        accessibility: 'Easy - accessible by road',
        parking: 'Available nearby',
        facilities: ['Beach Access', 'Water Sports', 'Restaurants', 'Accommodations']
    },
    {
        id: 11,
        slug: 'inema-arts-center',
        name: 'Inema Arts Center',
        description: `
            <h2>About Inema Arts Center</h2>
            <p>Inema Arts Center is a vibrant contemporary art gallery and creative space in Kigali. It showcases the work of local and international artists, promoting Rwandan contemporary art and culture.</p>
            
            <h3>Art Exhibitions</h3>
            <p>The center features rotating exhibitions of contemporary art, including paintings, sculptures, installations, and multimedia works. It provides a platform for emerging and established artists to showcase their work.</p>
            
            <h3>Cultural Hub</h3>
            <p>Beyond exhibitions, the center hosts workshops, artist talks, and cultural events that bring together the local art community and visitors interested in contemporary African art.</p>
        `,
        shortDescription: 'A vibrant contemporary art gallery and creative space in Kigali.',
        image: '/images/kigali.jpeg',
        images: [
            '/images/kigali.jpeg',
            '/images/nyungwe_national_park.jpg',
            '/images/nyungwe-forests.jpg',
            '/images/lake-kivu_Photo-from-Getty-Images.jpg'
        ],
        location: 'Kigali',
        category: 'urban',
        tags: ['art', 'gallery', 'culture', 'contemporary'],
        featured: false,
        
        openingHours: {
            monFri: '9:00 AM - 6:00 PM',
            satSun: '10:00 AM - 5:00 PM'
        },
        bestTimeToVisit: 'Year-round',
        priceRange: {
            foreigners: 'RWF 5,000',
            citizens: 'RWF 2,000',
            children: 'Free (under 12)'
        },
        coordinates: {
            latitude: -1.9441,
            longitude: 30.0619
        },
        contact: {
            phone: '+250 788 123 456',
            email: 'info@inemaartscenter.rw',
            website: 'www.inemaartscenter.rw'
        },
        quickFacts: [
            'Contemporary art gallery',
            'Local and international artists',
            'Rotating exhibitions',
            'Art workshops',
            'Cultural events',
            'Creative space'
        ],
        travelTips: [
            'Check current exhibitions online',
            'Attend artist talks if available',
            'Photography may be restricted',
            'Support local artists',
            'Visit during weekdays for fewer crowds',
            'Allow 1-2 hours for visit'
        ],
        reviews: [
            {
                id: '15',
                author: 'Sophie Martin',
                date: 'March 30, 2024',
                rating: 5,
                comment: 'Wonderful contemporary art space! The exhibitions are thought-provoking and the artists are incredibly talented. Great place to experience modern Rwandan art.',
                verified: true
            }
        ],
        established: '2012',
        accessibility: 'Easy - wheelchair accessible',
        parking: 'Available nearby',
        facilities: ['Exhibition Space', 'Gift Shop', 'Café', 'Workshop Area', 'Restrooms']
    },
    {
        id: 12,
        slug: 'rusumo-falls',
        name: 'Rusumo Falls',
        description: `
            <h2>About Rusumo Falls</h2>
            <p>Rusumo Falls is a scenic waterfall located on the border between Rwanda and Tanzania. The falls are surrounded by lush greenery and offer a peaceful natural setting for visitors.</p>
            
            <h3>Natural Beauty</h3>
            <p>The waterfall cascades over rocks creating a beautiful natural spectacle. The surrounding area is rich in biodiversity and provides excellent opportunities for nature photography and bird watching.</p>
            
            <h3>Border Location</h3>
            <p>Located on the Akagera River, the falls mark the border between Rwanda and Tanzania, making it a unique geographical landmark and a symbol of the connection between the two countries.</p>
        `,
        shortDescription: 'A scenic waterfall on the border with Tanzania, surrounded by lush greenery.',
        image: '/images/nyungwe-forests.jpg',
        images: [
            '/images/nyungwe-forests.jpg',
            '/images/nyungwe_national_park.jpg',
            '/images/kigali.jpeg',
            '/images/lake-kivu_Photo-from-Getty-Images.jpg'
        ],
        location: 'Eastern Province',
        category: 'natural',
        tags: ['waterfall', 'nature', 'scenery', 'border'],
        featured: false,
        
        openingHours: {
            monFri: '6:00 AM - 6:00 PM',
            satSun: '6:00 AM - 6:00 PM'
        },
        bestTimeToVisit: 'After rainy season for maximum flow',
        priceRange: {
            foreigners: 'RWF 3,000',
            citizens: 'RWF 1,500',
            children: 'RWF 750 (under 12)'
        },
        coordinates: {
            latitude: -2.3833,
            longitude: 30.8167
        },
        contact: {
            phone: '+250 788 234 567',
            email: 'info@rusumofalls.rw'
        },
        quickFacts: [
            'Border waterfall',
            'Akagera River',
            'Natural beauty',
            'Bird watching',
            'Photography spot',
            'Peaceful setting'
        ],
        travelTips: [
            'Visit after rains for best flow',
            'Bring camera for photos',
            'Wear comfortable shoes',
            'Check border regulations',
            'Best time is morning',
            'Respect natural environment'
        ],
        reviews: [
            {
                id: '16',
                author: 'David Wilson',
                date: 'April 15, 2024',
                rating: 4,
                comment: 'Beautiful waterfall in a peaceful setting. The border location makes it unique. Great for photography and enjoying nature.',
                verified: true
            }
        ],
        established: 'Natural formation',
        accessibility: 'Moderate - requires walking',
        parking: 'Available nearby',
        facilities: ['Viewing Area', 'Walking Trails', 'Restrooms', 'Information Center']
    },
    {
        id: 13,
        slug: 'nyanza-royal-palace',
        name: 'Nyanza Royal Palace',
        description: `
            <h2>About Nyanza Royal Palace</h2>
            <p>Nyanza Royal Palace is a historical site that showcases Rwanda's royal heritage and traditional architecture. The palace complex provides insight into the lifestyle and customs of Rwanda's traditional monarchy.</p>
            
            <h3>Royal Heritage</h3>
            <p>The palace features traditional royal buildings, artifacts, and exhibits that demonstrate how kings lived and ruled in pre-colonial Rwanda. The architecture reflects traditional Rwandan building techniques and royal customs.</p>
            
            <h3>Cultural Significance</h3>
            <p>This site preserves important aspects of Rwandan cultural heritage, including royal regalia, traditional architecture, and historical artifacts that tell the story of Rwanda's monarchy and its role in society.</p>
        `,
        shortDescription: 'A historical site showcasing Rwanda\'s royal heritage and traditional architecture.',
        image: '/images/Nyanza-Traditional-Intore-Dancers-1650x1100.jpg',
        images: [
            '/images/Nyanza-Traditional-Intore-Dancers-1650x1100.jpg',
            '/images/nyungwe_national_park.jpg',
            '/images/kigali.jpeg',
            '/images/nyungwe-forests.jpg'
        ],
        location: 'Nyanza',
        category: 'cultural',
        tags: ['royal', 'history', 'palace', 'heritage'],
        featured: false,
        
        openingHours: {
            monFri: '8:00 AM - 6:00 PM',
            satSun: '9:00 AM - 5:00 PM'
        },
        bestTimeToVisit: 'Year-round',
        priceRange: {
            foreigners: 'RWF 3,000',
            citizens: 'RWF 1,500',
            children: 'RWF 750 (under 12)'
        },
        coordinates: {
            latitude: -2.4667,
            longitude: 29.7500
        },
        contact: {
            phone: '+250 788 345 678',
            email: 'info@nyanzapalace.rw',
            website: 'www.nyanzapalace.rw'
        },
        quickFacts: [
            'Traditional royal palace',
            'Pre-colonial history',
            'Royal artifacts',
            'Traditional architecture',
            'Cultural heritage',
            'Historical significance'
        ],
        travelTips: [
            'Allow 1-2 hours for visit',
            'Guided tours available',
            'Photography allowed',
            'Learn about royal history',
            'Respect cultural significance',
            'Combine with other cultural sites'
        ],
        reviews: [
            {
                id: '17',
                author: 'Maria Garcia',
                date: 'March 22, 2024',
                rating: 4,
                comment: 'Fascinating insight into Rwanda\'s royal history. The traditional architecture is impressive and the exhibits are well-presented.',
                verified: true
            }
        ],
        established: 'Pre-colonial',
        accessibility: 'Easy - wheelchair accessible',
        parking: 'Available on site',
        facilities: ['Palace Buildings', 'Exhibition Halls', 'Restrooms', 'Guided Tours']
    },
    {
        id: 14,
        slug: 'kibuye-peace-island',
        name: 'Kibuye Peace Island',
        description: `
            <h2>About Kibuye Peace Island</h2>
            <p>Kibuye Peace Island is a tranquil island retreat on Lake Kivu, perfect for relaxation and birdwatching. The island offers a peaceful escape from the mainland with beautiful lake views.</p>
            
            <h3>Natural Retreat</h3>
            <p>The island is covered in lush vegetation and provides excellent opportunities for bird watching, nature walks, and peaceful contemplation. The surrounding waters are perfect for swimming and water activities.</p>
            
            <h3>Peaceful Atmosphere</h3>
            <p>As the name suggests, the island offers a peaceful atmosphere ideal for relaxation and meditation. Visitors can enjoy the natural beauty and tranquility of this unique location on Lake Kivu.</p>
        `,
        shortDescription: 'A tranquil island retreat on Lake Kivu, perfect for relaxation and birdwatching.',
        image: '/images/Lake-Kivu-Kayak-Phto-from-Arcadiasafaris-1024x552.jpg',
        images: [
            '/images/Lake-Kivu-Kayak-Phto-from-Arcadiasafaris-1024x552.jpg',
            '/images/lake-kivu_Photo-from-Getty-Images.jpg',
            '/images/View-of-Lake-Kivu-in-Rwanda-Photo-credit-Oscar-Espinova-from-Getty-Images-via-Canva-1920x1080.jpg',
            '/images/kigali.jpeg'
        ],
        location: 'Kibuye',
        category: 'natural',
        tags: ['island', 'lake', 'relaxation', 'birdwatching'],
        featured: false,
        
        openingHours: {
            monFri: '6:00 AM - 6:00 PM',
            satSun: '6:00 AM - 6:00 PM'
        },
        bestTimeToVisit: 'Year-round, but June to September is ideal',
        priceRange: {
            foreigners: 'RWF 5,000 for boat transfer',
            citizens: 'RWF 2,500 for boat transfer'
        },
        coordinates: {
            latitude: -2.0667,
            longitude: 29.3500
        },
        contact: {
            phone: '+250 788 456 789',
            email: 'info@kibuyepeaceisland.rw'
        },
        quickFacts: [
            'Tranquil island retreat',
            'Lake Kivu location',
            'Bird watching',
            'Peaceful atmosphere',
            'Natural beauty',
            'Relaxation destination'
        ],
        travelTips: [
            'Book boat transfer in advance',
            'Bring binoculars for bird watching',
            'Pack light for island visit',
            'Bring water and snacks',
            'Respect natural environment',
            'Check weather conditions'
        ],
        reviews: [
            {
                id: '18',
                author: 'John Smith',
                date: 'April 5, 2024',
                rating: 5,
                comment: 'Perfect peaceful retreat! The island is beautiful and the bird watching is excellent. Great place to relax and enjoy nature.',
                verified: true
            }
        ],
        established: 'Natural formation',
        accessibility: 'Moderate - requires boat transfer',
        parking: 'Available at mainland dock',
        facilities: ['Walking Trails', 'Bird Watching', 'Swimming Area', 'Rest Areas']
    },
    {
        id: 15,
        slug: 'camp-kigali-memorial',
        name: 'Camp Kigali Memorial',
        description: `
            <h2>About Camp Kigali Memorial</h2>
            <p>Camp Kigali Memorial is a memorial site commemorating Belgian UN peacekeepers killed during the genocide. The site serves as a reminder of the international community's involvement and the tragic events of 1994.</p>
            
            <h3>Historical Significance</h2>
            <p>The memorial honors the Belgian soldiers who were killed while serving as UN peacekeepers during the genocide. It stands as a testament to the international community's efforts and the challenges faced during this dark period.</p>
            
            <h3>Educational Value</h3>
            <p>Visitors can learn about the role of the international community during the genocide and the sacrifices made by peacekeepers. The memorial provides important historical context for understanding the events of 1994.</p>
        `,
        shortDescription: 'A memorial site commemorating Belgian UN peacekeepers killed during the genocide.',
        image: '/images/kigali.jpeg',
        images: [
            '/images/kigali.jpeg',
            '/images/nyungwe_national_park.jpg',
            '/images/nyungwe-forests.jpg',
            '/images/lake-kivu_Photo-from-Getty-Images.jpg'
        ],
        location: 'Kigali',
        category: 'cultural',
        tags: ['memorial', 'history', 'education', 'peacekeepers'],
        featured: false,
        
        openingHours: {
            monFri: '8:00 AM - 5:00 PM',
            satSun: '9:00 AM - 4:00 PM'
        },
        bestTimeToVisit: 'Year-round',
        priceRange: {
            foreigners: 'Free entry',
            citizens: 'Free entry'
        },
        coordinates: {
            latitude: -1.9441,
            longitude: 30.0619
        },
        contact: {
            phone: '+250 788 567 890',
            email: 'info@campkigalimemorial.rw'
        },
        quickFacts: [
            'Belgian peacekeepers memorial',
            'UN involvement',
            'Historical significance',
            'Free admission',
            'Educational site',
            'Peace and reconciliation'
        ],
        travelTips: [
            'Dress respectfully',
            'Photography may be restricted',
            'Allow 1 hour for visit',
            'Learn about UN involvement',
            'Visit during weekdays',
            'Be prepared for emotional content'
        ],
        reviews: [
            {
                id: '19',
                author: 'Robert Kim',
                date: 'March 12, 2024',
                rating: 4,
                comment: 'Important memorial that honors the international peacekeepers. Provides valuable historical context about the UN\'s role during the genocide.',
                verified: true
            }
        ],
        established: '1994',
        accessibility: 'Easy - wheelchair accessible',
        parking: 'Available nearby',
        facilities: ['Memorial Site', 'Information Panels', 'Restrooms', 'Guided Tours']
    },
    {
        id: 16,
        slug: 'gorilla-guardians-village',
        name: 'Gorilla Guardians Village',
        description: `
            <h2>About Gorilla Guardians Village</h2>
            <p>Gorilla Guardians Village is a cultural village offering immersive experiences in Rwandan traditions and dance. The village showcases traditional Rwandan culture and provides visitors with authentic cultural experiences.</p>
            
            <h3>Cultural Immersion</h3>
            <p>Visitors can participate in traditional dance performances, learn about Rwandan customs, and experience the daily life of a traditional Rwandan village. The village offers hands-on cultural activities and demonstrations.</p>
            
            <h3>Traditional Arts</h3>
            <p>The village features traditional crafts, music, and dance performances that showcase Rwanda's rich cultural heritage. Visitors can learn about traditional farming, cooking, and other aspects of rural Rwandan life.</p>
        `,
        shortDescription: 'A cultural village offering immersive experiences in Rwandan traditions and dance.',
        image: '/images/IbyIwacu-Cultural-Village.jpg',
        images: [
            '/images/IbyIwacu-Cultural-Village.jpg',
            '/images/Nyanza-Traditional-Intore-Dancers-1650x1100.jpg',
            '/images/kigali.jpeg',
            '/images/nyungwe_national_park.jpg'
        ],
        location: 'Musanze',
        category: 'cultural',
        tags: ['culture', 'village', 'tradition', 'dance'],
        featured: false,
        
        openingHours: {
            monFri: '8:00 AM - 6:00 PM',
            satSun: '9:00 AM - 5:00 PM'
        },
        bestTimeToVisit: 'Year-round',
        priceRange: {
            foreigners: 'RWF 10,000',
            citizens: 'RWF 5,000',
            children: 'RWF 2,500 (under 12)'
        },
        coordinates: {
            latitude: -1.4833,
            longitude: 29.4833
        },
        contact: {
            phone: '+250 788 678 901',
            email: 'info@gorillaguardiansvillage.rw',
            website: 'www.gorillaguardiansvillage.rw'
        },
        quickFacts: [
            'Cultural village experience',
            'Traditional dance performances',
            'Hands-on activities',
            'Rwandan traditions',
            'Local crafts',
            'Cultural immersion'
        ],
        travelTips: [
            'Participate in activities',
            'Respect local customs',
            'Bring camera for photos',
            'Try traditional food',
            'Learn about culture',
            'Support local community'
        ],
        reviews: [
            {
                id: '20',
                author: 'Emma Williams',
                date: 'April 20, 2024',
                rating: 5,
                comment: 'Amazing cultural experience! The traditional dance performances were incredible and we learned so much about Rwandan culture. Highly recommend for cultural immersion.',
                verified: true
            }
        ],
        established: '2004',
        accessibility: 'Easy - accessible by road',
        parking: 'Available on site',
        facilities: ['Cultural Center', 'Performance Area', 'Craft Workshops', 'Restrooms', 'Gift Shop']
    }
];

// Merge static destinations into attractions if not already present
const mergedAttractions: Attraction[] = [
    ...attractions
];

staticDestinations.forEach(dest => {
    const slug = dest.link.replace('/attractions/', '');
    if (!mergedAttractions.some(a => a.slug === slug)) {
        mergedAttractions.push({
            id: mergedAttractions.length + 1,
            slug,
            name: dest.title,
            description: '',
            image: dest.image,
            location: dest.location,
            category: 'natural',
            tags: [],
            featured: false,
            shortDescription: '',
            images: [],
            openingHours: {
                monFri: '',
                satSun: ''
            },  
            bestTimeToVisit: '',
            priceRange: {
                foreigners: '',
                citizens: '',
                children: ''
            },
            coordinates: {
                latitude: 0,
                longitude: 0
            },
            contact: {
                phone: '',
                email: '',
                website: ''
            },
            quickFacts: [],
            travelTips: [],
            reviews: [],
            established: '',
        });
    }
});

// Helper to get 6 attractions, at least one from each province
export function getShowcaseAttractions() {
    const provinces = [
        'Kigali',
        'Northern Province',
        'Southern Province',
        'Eastern Province',
        'Western Province'
    ];
    const selected: Attraction[] = [];
    const usedSlugs = new Set<string>();
    // Pick one from each province
    provinces.forEach(prov => {
        const found = mergedAttractions.find(a => a.location === prov && !usedSlugs.has(a.slug));
        if (found) {
            selected.push(found);
            usedSlugs.add(found.slug);
        }
    });
    // Fill up to 6 with any others
    for (const a of mergedAttractions) {
        if (selected.length >= 6) break;
        if (!usedSlugs.has(a.slug)) {
            selected.push(a);
            usedSlugs.add(a.slug);
        }
    }
    // Map to DestinationSection shape
    return selected.slice(0, 6).map(a => ({
        title: a.name,
        image: a.image,
        location: a.location,
        link: `/attractions/${a.slug}`
    }));
}

export const getAttractions = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return attractions;
}

export async function findAttractionBySlug(slug: string) {
    return attractions.find(a => a.slug === slug);
}

export async function filterAndPaginateAttractions({
  search = '',
  filters = {},
//   sort = '',
  page = 1,
  pageSize = 8,
}: {
  search?: string;
  filters?: { category?: string[]; location?: string[] };
  sort?: string;
  page?: number;
  pageSize?: number;
}) {
  let filtered = attractions;
  if (search) {
    const s = search.toLowerCase();
    filtered = filtered.filter(a =>
      a.name.toLowerCase().includes(s) ||
      a.description.toLowerCase().includes(s) ||
      a.location.toLowerCase().includes(s)
    );
  }
  if (filters.category && filters.category.length > 0) {
    filtered = filtered.filter(a => filters.category!.includes(a.category));
  }
  if (filters.location && filters.location.length > 0) {
    filtered = filtered.filter(a => filters.location!.includes(a.location));
  }
  // Add sort logic if needed
  const total = filtered.length;
  const items = filtered.slice((page - 1) * pageSize, page * pageSize);
  return { items, total };
}