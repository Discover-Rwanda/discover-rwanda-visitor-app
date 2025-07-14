// Base booking types
export interface BookingOption {
  id: string;
  name: string;
  description: string;
  type: BookingType;
  price: {
    amount: number;
    currency: string;
    perPerson?: boolean;
    perGroup?: boolean;
    perHour?: boolean;
    perDay?: boolean;
  };
  duration?: string; // e.g., "2 hours", "1 day"
  maxGroupSize?: number;
  minGroupSize?: number;
  availability: {
    days: string[]; // ["monday", "tuesday", etc.]
    timeSlots?: string[]; // ["09:00", "14:00", etc.]
    seasonal?: boolean;
    seasonStart?: string;
    seasonEnd?: string;
  };
  requirements: BookingRequirements;
  includedServices?: string[];
  excludedServices?: string[];
  cancellationPolicy: string;
  images?: string[];
}

export type BookingType = 
  | 'tour' 
  | 'activity' 
  | 'accommodation' 
  | 'dining' 
  | 'event' 
  | 'transport' 
  | 'guide';

// Specific booking requirements based on type
export interface BookingRequirements {
  // Common fields
  contactInfo: {
    required: boolean;
    fields: ('name' | 'email' | 'phone' | 'address')[];
  };
  participants: {
    required: boolean;
    maxCount?: number;
    minCount?: number;
    ageRestrictions?: {
      minAge?: number;
      maxAge?: number;
    };
  };
  dates: {
    required: boolean;
    advanceBooking?: number; // days in advance
    flexibleDates?: boolean;
  };
  
  // Tour/Activity specific
  tourSpecific?: {
    fitnessLevel?: 'easy' | 'moderate' | 'difficult';
    equipmentProvided?: boolean;
    equipmentRequired?: string[];
    specialNeeds?: boolean;
    dietaryRestrictions?: boolean;
  };
  
  // Accommodation specific
  accommodationSpecific?: {
    roomType?: 'single' | 'double' | 'suite' | 'family';
    checkInTime?: string;
    checkOutTime?: string;
    amenities?: string[];
    smokingPolicy?: 'allowed' | 'not-allowed' | 'designated-areas';
  };
  
  // Dining specific
  diningSpecific?: {
    mealType?: 'breakfast' | 'lunch' | 'dinner' | 'snack';
    dietaryOptions?: string[];
    tableSize?: number;
    specialOccasion?: boolean;
  };
  
  // Event specific
  eventSpecific?: {
    eventType?: 'concert' | 'festival' | 'workshop' | 'exhibition';
    seatingType?: 'general' | 'reserved' | 'vip';
    ageRestriction?: number;
    dressCode?: string;
  };
}

// Booking form data
export interface BookingFormData {
  // Basic info
  bookingOptionId: string;
  date: string;
  timeSlot?: string;
  participants: number;
  
  // Contact info
  contactInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address?: string;
  };
  
  // Type-specific data
  tourData?: {
    fitnessLevel?: 'easy' | 'moderate' | 'difficult';
    specialNeeds?: string;
    dietaryRestrictions?: string[];
    equipmentNeeded?: string[];
  };
  
  accommodationData?: {
    roomType: 'single' | 'double' | 'suite' | 'family';
    checkInDate: string;
    checkOutDate: string;
    specialRequests?: string;
  };
  
  diningData?: {
    mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
    dietaryRestrictions?: string[];
    specialOccasion?: string;
    tableSize: number;
  };
  
  eventData?: {
    seatingType: 'general' | 'reserved' | 'vip';
    specialRequests?: string;
  };
  
  // Additional info
  specialRequests?: string;
  emergencyContact?: {
    name: string;
    phone: string;
    relationship: string;
  };
}

// Booking status
export type BookingStatus = 
  | 'pending' 
  | 'confirmed' 
  | 'cancelled' 
  | 'completed' 
  | 'refunded';

// Booking record
export interface Booking {
  id: string;
  bookingOptionId: string;
  attractionId: string;
  userId?: string; // Optional for guest bookings
  status: BookingStatus;
  formData: BookingFormData;
  totalAmount: number;
  currency: string;
  createdAt: string;
  updatedAt: string;
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  paymentMethod?: string;
  confirmationCode: string;
}

// Extended attraction interface with booking options
export interface AttractionWithBooking extends Attraction {
  bookingOptions?: BookingOption[];
  hasBookableServices: boolean;
}

// Extended event interface with booking options
export interface EventWithBooking extends Event {
  bookingOptions?: BookingOption[];
  hasBookableServices: boolean;
}

// Extended dining interface with booking options
export interface DiningWithBooking extends Dining {
  bookingOptions?: BookingOption[];
  hasBookableServices: boolean;
}

// Import existing types
import { Attraction } from '@/data/attractions';
import { Event } from '@/data/events';
import { Dining } from '@/data/dining'; 