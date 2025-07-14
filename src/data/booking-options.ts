import { BookingOption } from '@/lib/types';

export const bookingOptions: Record<string, BookingOption[]> = {
  // Volcanoes National Park
  'volcanoes-national-park': [
    {
      id: 'vnp-gorilla-trekking',
      name: 'Gorilla Trekking Experience',
      description: 'Experience the thrill of encountering mountain gorillas in their natural habitat. This guided trek takes you through the beautiful Virunga Mountains to observe these magnificent creatures.',
      type: 'tour',
      price: {
        amount: 1500,
        currency: 'USD',
        perPerson: true
      },
      duration: '4-8 hours',
      maxGroupSize: 8,
      minGroupSize: 1,
      availability: {
        days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
        timeSlots: ['07:00', '08:00', '09:00'],
        seasonal: true,
        seasonStart: '2024-06-01',
        seasonEnd: '2024-09-30'
      },
      requirements: {
        contactInfo: {
          required: true,
          fields: ['name', 'email', 'phone']
        },
        participants: {
          required: true,
          maxCount: 8,
          minCount: 1,
          ageRestrictions: {
            minAge: 15
          }
        },
        dates: {
          required: true,
          advanceBooking: 180, // 6 months
          flexibleDates: false
        },
        tourSpecific: {
          fitnessLevel: 'moderate',
          equipmentProvided: true,
          specialNeeds: true,
          dietaryRestrictions: true
        }
      },
      includedServices: [
        'Professional guide',
        'Park permits',
        'Safety briefing',
        'Porter service (optional)',
        'Water and snacks'
      ],
      excludedServices: [
        'Transportation to park',
        'Accommodation',
        'Personal equipment'
      ],
      cancellationPolicy: 'Full refund if cancelled 30 days before. 50% refund if cancelled 7-30 days before. No refund if cancelled less than 7 days before.',
      images: [
        '/images/volcanoes-national-park-gorilla_AJ723tqm4-Photo-from-Getty-Images.jpg',
        '/images/Landscape-of-the-Virunga-Mountains-in-Rwanda.jpg'
      ]
    },
    {
      id: 'vnp-golden-monkey-trekking',
      name: 'Golden Monkey Trekking',
      description: 'Trek through the bamboo forest to observe the playful golden monkeys in their natural habitat.',
      type: 'tour',
      price: {
        amount: 100,
        currency: 'USD',
        perPerson: true
      },
      duration: '2-4 hours',
      maxGroupSize: 8,
      minGroupSize: 1,
      availability: {
        days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
        timeSlots: ['08:00', '09:00', '10:00']
      },
      requirements: {
        contactInfo: {
          required: true,
          fields: ['name', 'email', 'phone']
        },
        participants: {
          required: true,
          maxCount: 8,
          minCount: 1
        },
        dates: {
          required: true,
          advanceBooking: 30,
          flexibleDates: true
        },
        tourSpecific: {
          fitnessLevel: 'easy',
          equipmentProvided: true
        }
      },
      includedServices: [
        'Professional guide',
        'Park permits',
        'Safety briefing'
      ],
      excludedServices: [
        'Transportation',
        'Accommodation'
      ],
      cancellationPolicy: 'Full refund if cancelled 7 days before. No refund if cancelled less than 7 days before.'
    }
  ],

  // Nyungwe Forest National Park
  'nyungwe-forest-national-park': [
    {
      id: 'nyungwe-chimpanzee-trekking',
      name: 'Chimpanzee Trekking',
      description: 'Track and observe chimpanzees in their natural forest habitat with expert guides.',
      type: 'tour',
      price: {
        amount: 100,
        currency: 'USD',
        perPerson: true
      },
      duration: '3-6 hours',
      maxGroupSize: 8,
      minGroupSize: 1,
      availability: {
        days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
        timeSlots: ['06:00', '07:00']
      },
      requirements: {
        contactInfo: {
          required: true,
          fields: ['name', 'email', 'phone']
        },
        participants: {
          required: true,
          maxCount: 8,
          minCount: 1,
          ageRestrictions: {
            minAge: 12
          }
        },
        dates: {
          required: true,
          advanceBooking: 60,
          flexibleDates: true
        },
        tourSpecific: {
          fitnessLevel: 'moderate',
          equipmentProvided: true,
          specialNeeds: true
        }
      },
      includedServices: [
        'Professional guide',
        'Park permits',
        'Safety briefing',
        'Water'
      ],
      excludedServices: [
        'Transportation',
        'Accommodation',
        'Meals'
      ],
      cancellationPolicy: 'Full refund if cancelled 14 days before. 50% refund if cancelled 7-14 days before.'
    },
    {
      id: 'nyungwe-canopy-walk',
      name: 'Canopy Walkway Experience',
      description: 'Walk among the treetops on a spectacular canopy walkway 60 meters above the forest floor.',
      type: 'activity',
      price: {
        amount: 60,
        currency: 'USD',
        perPerson: true
      },
      duration: '2-3 hours',
      maxGroupSize: 12,
      minGroupSize: 1,
      availability: {
        days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
        timeSlots: ['09:00', '10:00', '11:00', '14:00', '15:00']
      },
      requirements: {
        contactInfo: {
          required: true,
          fields: ['name', 'email', 'phone']
        },
        participants: {
          required: true,
          maxCount: 12,
          minCount: 1,
          ageRestrictions: {
            minAge: 8
          }
        },
        dates: {
          required: true,
          advanceBooking: 7,
          flexibleDates: true
        },
        tourSpecific: {
          fitnessLevel: 'easy',
          equipmentProvided: true
        }
      },
      includedServices: [
        'Professional guide',
        'Safety equipment',
        'Safety briefing'
      ],
      excludedServices: [
        'Transportation',
        'Accommodation'
      ],
      cancellationPolicy: 'Full refund if cancelled 24 hours before.'
    }
  ],

  // Lake Kivu
  'lake-kivu': [
    {
      id: 'lake-kivu-boat-tour',
      name: 'Sunset Boat Tour',
      description: 'Enjoy a relaxing boat tour on Lake Kivu with stunning sunset views and refreshments.',
      type: 'tour',
      price: {
        amount: 50,
        currency: 'USD',
        perPerson: true
      },
      duration: '2 hours',
      maxGroupSize: 20,
      minGroupSize: 2,
      availability: {
        days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
        timeSlots: ['17:00', '18:00']
      },
      requirements: {
        contactInfo: {
          required: true,
          fields: ['name', 'email', 'phone']
        },
        participants: {
          required: true,
          maxCount: 20,
          minCount: 2
        },
        dates: {
          required: true,
          advanceBooking: 1,
          flexibleDates: true
        }
      },
      includedServices: [
        'Boat captain',
        'Life jackets',
        'Refreshments',
        'Safety briefing'
      ],
      excludedServices: [
        'Transportation to dock',
        'Accommodation'
      ],
      cancellationPolicy: 'Full refund if cancelled 2 hours before.'
    },
    {
      id: 'lake-kivu-kayaking',
      name: 'Kayaking Adventure',
      description: 'Explore the beautiful Lake Kivu by kayak with guided tours for all skill levels.',
      type: 'activity',
      price: {
        amount: 30,
        currency: 'USD',
        perPerson: true
      },
      duration: '1-3 hours',
      maxGroupSize: 10,
      minGroupSize: 1,
      availability: {
        days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
        timeSlots: ['09:00', '10:00', '14:00', '15:00']
      },
      requirements: {
        contactInfo: {
          required: true,
          fields: ['name', 'email', 'phone']
        },
        participants: {
          required: true,
          maxCount: 10,
          minCount: 1,
          ageRestrictions: {
            minAge: 12
          }
        },
        dates: {
          required: true,
          advanceBooking: 1,
          flexibleDates: true
        }
      },
      includedServices: [
        'Kayak and equipment',
        'Professional guide',
        'Safety briefing',
        'Water'
      ],
      excludedServices: [
        'Transportation',
        'Accommodation'
      ],
      cancellationPolicy: 'Full refund if cancelled 2 hours before.'
    }
  ],

  // Heaven Restaurant
  'heaven-restaurant-boutique-hotel': [
    {
      id: 'heaven-dinner-reservation',
      name: 'Dinner Reservation',
      description: 'Reserve a table for dinner at Heaven Restaurant with stunning views and exceptional cuisine.',
      type: 'dining',
      price: {
        amount: 0,
        currency: 'USD',
        perPerson: false
      },
      duration: '2-3 hours',
      maxGroupSize: 20,
      minGroupSize: 1,
      availability: {
        days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
        timeSlots: ['18:00', '19:00', '20:00', '21:00']
      },
      requirements: {
        contactInfo: {
          required: true,
          fields: ['name', 'email', 'phone']
        },
        participants: {
          required: true,
          maxCount: 20,
          minCount: 1
        },
        dates: {
          required: true,
          advanceBooking: 7,
          flexibleDates: true
        },
        diningSpecific: {
          mealType: 'dinner',
          dietaryOptions: ['vegetarian', 'vegan', 'gluten-free'],
          tableSize: 4,
          specialOccasion: true
        }
      },
      includedServices: [
        'Table reservation',
        'Professional service',
        'Menu consultation'
      ],
      excludedServices: [
        'Food and beverages',
        'Transportation'
      ],
      cancellationPolicy: 'Free cancellation up to 24 hours before reservation.'
    }
  ],

  // Bourbon Coffee
  'bourbon-coffee': [
    {
      id: 'bourbon-coffee-tasting',
      name: 'Coffee Tasting Experience',
      description: 'Learn about Rwandan coffee production and taste different varieties with expert baristas.',
      type: 'activity',
      price: {
        amount: 25,
        currency: 'USD',
        perPerson: true
      },
      duration: '1 hour',
      maxGroupSize: 8,
      minGroupSize: 2,
      availability: {
        days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
        timeSlots: ['10:00', '11:00', '14:00', '15:00']
      },
      requirements: {
        contactInfo: {
          required: true,
          fields: ['name', 'email', 'phone']
        },
        participants: {
          required: true,
          maxCount: 8,
          minCount: 2,
          ageRestrictions: {
            minAge: 16
          }
        },
        dates: {
          required: true,
          advanceBooking: 1,
          flexibleDates: true
        }
      },
      includedServices: [
        'Coffee tasting session',
        'Expert guide',
        'Coffee samples',
        'Educational materials'
      ],
      excludedServices: [
        'Transportation',
        'Additional food'
      ],
      cancellationPolicy: 'Full refund if cancelled 2 hours before.'
    }
  ]
};

// Helper function to get booking options for a specific attraction/event/dining
export function getBookingOptions(id: string): BookingOption[] {
  return bookingOptions[id] || [];
}

// Helper function to check if an attraction/event/dining has bookable services
export function hasBookableServices(id: string): boolean {
  return bookingOptions[id] && bookingOptions[id].length > 0;
}

// Helper function to get a specific booking option
export function getBookingOption(id: string, bookingOptionId: string): BookingOption | undefined {
  const options = getBookingOptions(id);
  return options.find(option => option.id === bookingOptionId);
} 