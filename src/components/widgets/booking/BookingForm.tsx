"use client";

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { Calendar, Clock, Users, MapPin, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { BookingFormData, BookingOption, AttractionWithBooking } from '@/lib/types';

interface BookingFormProps {
  type: string;
  item: AttractionWithBooking;
  bookingOption: BookingOption;
}

// Dynamic schema generation based on booking option
const createBookingSchema = (bookingOption: BookingOption) => {
  const baseSchema = {
    bookingOptionId: z.string(),
    date: z.string().min(1, 'Please select a date'),
    timeSlot: bookingOption.availability.timeSlots ? z.string().min(1, 'Please select a time') : z.string().optional(),
    participants: z.number()
      .min(bookingOption.requirements.participants.minCount || 1, `Minimum ${bookingOption.requirements.participants.minCount || 1} participant required`)
      .max(bookingOption.requirements.participants.maxCount || 100, `Maximum ${bookingOption.requirements.participants.maxCount || 100} participants allowed`),
    
    // Contact info
    contactInfo: z.object({
      firstName: z.string().min(2, 'First name must be at least 2 characters'),
      lastName: z.string().min(2, 'Last name must be at least 2 characters'),
      email: z.string().email('Please enter a valid email'),
      phone: z.string().min(10, 'Please enter a valid phone number'),
      address: bookingOption.requirements.contactInfo.fields.includes('address') 
        ? z.string().min(10, 'Address is required') 
        : z.string().optional(),
    }),

    // Type-specific data
    specialRequests: z.string().optional(),
    emergencyContact: z.object({
      name: z.string().min(2, 'Emergency contact name is required'),
      phone: z.string().min(10, 'Emergency contact phone is required'),
      relationship: z.string().min(2, 'Relationship is required'),
    }).optional(),
  };

  // Add type-specific fields
  switch (bookingOption.type) {
    case 'tour':
    case 'activity':
      return z.object({
        ...baseSchema,
        tourData: z.object({
          fitnessLevel: bookingOption.requirements.tourSpecific?.fitnessLevel 
            ? z.enum(['easy', 'moderate', 'difficult'])
            : z.string().optional(),
          specialNeeds: z.string().optional(),
          dietaryRestrictions: z.array(z.string()).optional(),
          equipmentNeeded: z.array(z.string()).optional(),
        }).optional(),
      });

    case 'accommodation':
      return z.object({
        ...baseSchema,
        accommodationData: z.object({
          roomType: z.enum(['single', 'double', 'suite', 'family']),
          checkInDate: z.string().min(1, 'Check-in date is required'),
          checkOutDate: z.string().min(1, 'Check-out date is required'),
          specialRequests: z.string().optional(),
        }),
      });

    case 'dining':
      return z.object({
        ...baseSchema,
        diningData: z.object({
          mealType: z.enum(['breakfast', 'lunch', 'dinner', 'snack']),
          dietaryRestrictions: z.array(z.string()).optional(),
          specialOccasion: z.string().optional(),
          tableSize: z.number().min(1, 'Table size is required'),
        }),
      });

    case 'event':
      return z.object({
        ...baseSchema,
        eventData: z.object({
          seatingType: z.enum(['general', 'reserved', 'vip']),
          specialRequests: z.string().optional(),
        }),
      });

    default:
      return z.object(baseSchema);
  }
};

// Mock API function for submitting booking
const submitBooking = async (
  data: BookingFormData & { itemId: string; itemType: string },
  totalAmount: number
): Promise<{ id: string; confirmationCode: string; status: string; totalAmount: number; currency: string; createdAt: string }> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Simulate random success/failure
  if (Math.random() > 0.1) {
    return {
      id: Date.now().toString(),
      confirmationCode: `RW${Math.random().toString(36).substr(2, 8).toUpperCase()}`,
      status: 'confirmed',
      totalAmount,
      currency: 'USD',
      createdAt: new Date().toISOString(),
    };
  } else {
    throw new Error('Booking failed. Please try again.');
  }
};

const BookingForm: React.FC<BookingFormProps> = ({ type, item, bookingOption }) => {
  const [totalAmount, setTotalAmount] = useState(0);

  const schema = createBookingSchema(bookingOption);
  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      bookingOptionId: bookingOption.id,
      participants: bookingOption.requirements.participants.minCount || 1,
      contactInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
      },
    },
  });

  const watchedParticipants = watch('participants') || 1;

  // Calculate total amount
  React.useEffect(() => {
    const baseAmount = bookingOption.price.amount;
    const multiplier = bookingOption.price.perPerson ? watchedParticipants : 1;
    setTotalAmount(baseAmount * multiplier);
  }, [watchedParticipants, bookingOption.price]);

  // Booking mutation
  const bookingMutation = useMutation({
    mutationFn: (data: FormData) => submitBooking({ 
      ...data, 
      itemId: item.id?.toString() || item.slug, 
      itemType: type
    }, totalAmount),
    onSuccess: (result) => {
      toast.success('Booking confirmed!', {
        description: `Confirmation code: ${result.confirmationCode}`,
      });
      // Redirect to confirmation page or show success state
    },
    onError: (error) => {
      toast.error('Booking failed', {
        description: error.message || 'Please try again.',
      });
    },
  });

  const onSubmit = (data: FormData) => {
    bookingMutation.mutate(data);
  };

  const renderTypeSpecificFields = () => {
    switch (bookingOption.type) {
      case 'tour':
      case 'activity':
        return (
          <Card className="bg-white text-black border-slate-200 ">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Tour Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {bookingOption.requirements.tourSpecific?.fitnessLevel && (
                <div>
                  <label className="block text-sm font-medium mb-2">Fitness Level</label>
                  <Controller
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    name={"tourData.fitnessLevel" as any}
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger className="border-slate-200">
                          <SelectValue placeholder="Select fitness level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="easy">Easy</SelectItem>
                          <SelectItem value="moderate">Moderate</SelectItem>
                          <SelectItem value="difficult">Difficult</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {(errors as any).tourData?.fitnessLevel && (
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    <p className="text-red-500 text-sm mt-1">{(errors as any).tourData.fitnessLevel.message}</p>
                  )}
                </div>
              )}

              {bookingOption.requirements.tourSpecific?.specialNeeds && (
                <div>
                  <label className="block text-sm font-medium mb-2">Special Needs</label>
                  <Controller
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    name={"tourData.specialNeeds" as any}
                    control={control}
                    render={({ field }) => (
                      <Textarea
                        {...field}
                        placeholder="Please describe any special needs or requirements..."
                        rows={3}
                        className="border-slate-200"
                      />
                    )}
                  />
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {(errors as any).tourData?.specialNeeds && (
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    <p className="text-red-500 text-sm mt-1">{(errors as any).tourData.specialNeeds.message}</p>
                  )}
                </div>
              )}

              {bookingOption.requirements.tourSpecific?.dietaryRestrictions && (
                <div>
                  <label className="block text-sm font-medium mb-2">Dietary Restrictions</label>
                  <div className="space-y-2">
                    {['Vegetarian', 'Vegan', 'Gluten-free', 'Dairy-free', 'Nut-free'].map((diet) => (
                      <div key={diet} className="flex items-center space-x-2">
                        <Checkbox
                          id={diet}
                          onCheckedChange={(checked) => {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            const current = watch("tourData.dietaryRestrictions" as any) || [];
                            if (checked) {
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              setValue('tourData.dietaryRestrictions' as any, [...current, diet]);
                            } else {
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              setValue('tourData.dietaryRestrictions' as any, current.filter((d: string) => d !== diet));
                            }
                          }}
                        />
                        <label htmlFor={diet} className="text-sm">{diet}</label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        );

      case 'dining':
        return (
          <Card className="bg-white text-black border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Dining Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Meal Type</label>
                <Controller
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  name={"diningData.mealType" as any}
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="border-slate-200">
                        <SelectValue placeholder="Select meal type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="breakfast">Breakfast</SelectItem>
                        <SelectItem value="lunch">Lunch</SelectItem>
                        <SelectItem value="dinner">Dinner</SelectItem>
                        <SelectItem value="snack">Snack</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {(errors as any).diningData?.mealType && (
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  <p className="text-red-500 text-sm mt-1">{(errors as any).diningData.mealType.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Table Size</label>
                <Controller
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  name={"diningData.tableSize" as any}
                  control={control}
                  render={({ field }) => (
                    <Input
                      type="number"
                      {...field}
                      min={1}
                      max={20}
                      className="border-slate-200"
                    />
                  )}
                />
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {(errors as any).diningData?.tableSize && (
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  <p className="text-red-500 text-sm mt-1">{(errors as any).diningData.tableSize.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Special Occasion</label>
                <Controller
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  name={"diningData.specialOccasion" as any}
                  control={control}
                  render={({ field }) => (
                    <Textarea
                      {...field}
                      placeholder="Birthday, anniversary, business meeting, etc."
                      rows={2}
                      className="border-slate-200"
                    />
                  )}
                />
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6 w-full">
      {/* Booking Summary */}
      <Card className="bg-green-100 text-black border-slate-200 w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Booking Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-gray-600">{bookingOption.name}</p>
              <div className="flex items-center gap-2 mt-2">
                <Clock className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">{bookingOption.duration}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-rwanda-green">
                ${totalAmount.toLocaleString()}
              </div>
              <p className="text-sm text-gray-600">
                {bookingOption.price.perPerson ? 'per person' : 'total'}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Basic Information */}
        <Card className="bg-white text-black border-slate-200 w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Basic Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Date</label>
                <Input
                  type="date"
                  {...register('date')}
                  min={new Date().toISOString().split('T')[0]}
                  className="border-slate-200"
                />
                {errors.date && (
                  <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
                )}
              </div>

              {bookingOption.availability.timeSlots && (
                <div>
                  <label className="block text-sm font-medium mb-2">Time</label>
                  <Controller
                    name="timeSlot"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger className="border-slate-200">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {bookingOption.availability.timeSlots?.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.timeSlot && (
                    <p className="text-red-500 text-sm mt-1">{errors.timeSlot.message}</p>
                  )}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Number of Participants</label>
              <Input
                type="number"
                {...register('participants', { valueAsNumber: true })}
                min={bookingOption.requirements.participants.minCount || 1}
                max={bookingOption.requirements.participants.maxCount || 100}
                className="border-slate-200"
              />
              {errors.participants && (
                <p className="text-red-500 text-sm mt-1">{errors.participants.message}</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="bg-white text-black border-slate-200 w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">First Name *</label>
                <Input {...register('contactInfo.firstName')} className="border-slate-200" />
                {errors.contactInfo?.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.contactInfo.firstName.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name *</label>
                <Input {...register('contactInfo.lastName')} className="border-slate-200" />
                {errors.contactInfo?.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.contactInfo.lastName.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <Input type="email" {...register('contactInfo.email')} className="border-slate-200" />
                {errors.contactInfo?.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.contactInfo.email.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone *</label>
                <Input {...register('contactInfo.phone')} className="border-slate-200" />
                {errors.contactInfo?.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.contactInfo.phone.message}</p>
                )}
              </div>
            </div>

            {bookingOption.requirements.contactInfo.fields.includes('address') && (
              <div>
                <label className="block text-sm font-medium mb-2">Address *</label>
                <Textarea {...register('contactInfo.address')} rows={3} className="border-slate-200" />
                {errors.contactInfo?.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.contactInfo.address.message}</p>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Type-specific fields */}
        {renderTypeSpecificFields()}

        {/* Emergency Contact */}
        <Card className="bg-white text-black border-slate-200 w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5" />
              Emergency Contact
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input {...register('emergencyContact.name')} className="border-slate-200" />
                {errors.emergencyContact?.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.emergencyContact.name.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <Input {...register('emergencyContact.phone')} className="border-slate-200" />
                {errors.emergencyContact?.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.emergencyContact.phone.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Relationship</label>
                <Input {...register('emergencyContact.relationship')} className="border-slate-200" />
                {errors.emergencyContact?.relationship && (
                  <p className="text-red-500 text-sm mt-1">{errors.emergencyContact.relationship.message}</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Special Requests */}
        <Card className="bg-white text-black border-slate-200 w-full">
          <CardHeader>
            <CardTitle>Special Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              {...register('specialRequests')}
              className="border-slate-200"
              placeholder="Any special requests or additional information..."
              rows={3}
            />
          </CardContent>
        </Card>

        {/* Terms and Conditions */}
        <Card className="bg-white text-black border-slate-200 w-full">
          <CardHeader>
            <CardTitle>Terms & Conditions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm text-gray-600 space-y-2">
              <p><strong>Cancellation Policy:</strong> {bookingOption.cancellationPolicy}</p>
              <p><strong>Included Services:</strong> {bookingOption.includedServices?.join(', ')}</p>
              {bookingOption.excludedServices && bookingOption.excludedServices.length > 0 && (
                <p><strong>Excluded Services:</strong> {bookingOption.excludedServices.join(', ')}</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-between items-center">
          <div className="text-right items-start">
            <div className="text-2xl font-bold text-rwanda-green">
              Total: ${totalAmount.toLocaleString()}
            </div>
            <p className="text-sm text-gray-600">
              {bookingOption.price.currency} • {bookingOption.price.perPerson ? 'per person' : 'total'}
            </p>
          </div>
          <Button
            type="submit"
            size="lg"
            className="cursor-pointer bg-rwanda-green hover:bg-rwanda-darkGreen text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : 'Confirm Booking'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm; 