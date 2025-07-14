import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { getAttractionWithBooking } from '@/data/attractions';
import { getBookingOption } from '@/data/booking-options';
import BookingForm from '@/components/widgets/booking/BookingForm';
import { Metadata } from 'next';
import { AttractionWithBooking, BookingOption } from '@/lib/types';

interface BookingPageProps {
  searchParams: Promise<{
    type?: string; // 'attraction', 'event', 'dining'
    id?: string; // attraction/event/dining slug
    option?: string; // booking option id
  }>;
}

export async function generateMetadata({ searchParams }: BookingPageProps): Promise<Metadata> {
  const params = await searchParams;
  const { type, id, option } = params;
  
  if (!type || !id || !option) {
    return {
      title: 'Booking - Discover Rwanda',
      description: 'Book your visit to Rwanda&apos;s amazing attractions, events, and dining experiences.'
    };
  }

  let title = 'Booking';
  let description = 'Book your experience';

  if (type === 'attraction') {
    const attraction = await getAttractionWithBooking(id);
    const bookingOption = getBookingOption(id, option);
    
    if (attraction && bookingOption) {
      title = `Book ${bookingOption.name} - ${attraction.name}`;
      description = `Book your ${bookingOption.name} experience at ${attraction.name}`;
    }
  }

  return {
    title,
    description
  };
}

export default async function BookingPage({ searchParams }: BookingPageProps) {
  const params = await searchParams;
  const { type, id, option } = params;

  // Validate required parameters
  if (!type || !id || !option) {
    notFound();
  }

  let item: AttractionWithBooking | null = null;
  let bookingOption: BookingOption | null = null;

  try {
    // Fetch data based on type
    switch (type) {
      case 'attraction':
        item = (await getAttractionWithBooking(id)) ?? null;
        if (item) {
          bookingOption = item.bookingOptions?.find((opt: BookingOption) => opt.id === option) || null;
        }
        break;
      case 'event':
        // TODO: Implement event booking
        notFound();
        break;
      case 'dining':
        // TODO: Implement dining booking
        notFound();
        break;
      default:
        notFound();
    }

    // Validate that the item and booking option exist
    if (!item || !bookingOption) {
      notFound();
    }

    // Validate that the item has bookable services
    if (!item.hasBookableServices) {
      notFound();
    }

  } catch (error) {
    console.error('Error fetching booking data:', error);
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg overflow-hidden text-black border border-slate-200 w-full">
          {/* Header */}
          <div className="bg-gradient-to-r from-rwanda-green to-rwanda-blue px-6 pt-8 text-black">
            <h1 className="text-3xl font-bold mb-2">Book Your Experience</h1>
            <p className="text-lg opacity-90">
              {item.name} - {bookingOption.name}
            </p>
          </div>

          {/* Booking Form */}
          <div className="p-6">
            <Suspense fallback={<div>Loading booking form...</div>}>
              <BookingForm
                type={type}
                item={item}
                bookingOption={bookingOption}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
} 