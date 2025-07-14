import { Metadata } from 'next';
import { CheckCircle, Calendar, Users, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Booking Confirmed - Discover Rwanda',
  description: 'Your booking has been confirmed successfully.',
};

export default function BookingConfirmationPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h1>
          <p className="text-lg text-gray-600">
            Thank you for your booking. We&apos;ve sent a confirmation email with all the details.
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Booking Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-600">Date</p>
                  <p className="font-medium">December 15, 2024</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-600">Participants</p>
                  <p className="font-medium">2 people</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-medium">Volcanoes National Park</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-600">Confirmation Code</p>
                  <p className="font-medium font-mono">RW12345678</p>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 text-sm">
                <strong>Important:</strong> Please arrive 15 minutes before your scheduled time. 
                Bring your confirmation code and a valid ID.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild className="flex-1 bg-rwanda-green hover:bg-rwanda-darkGreen">
            <Link href="/attractions">
              Explore More Attractions
            </Link>
          </Button>
          
          <Button variant="outline" asChild className="flex-1">
            <Link href="/">
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 