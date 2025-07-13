"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Review } from '@/data/attractions';
import { toast } from 'sonner';

// Zod schema for form validation
const reviewSchema = z.object({
  author: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name must be less than 50 characters'),
  rating: z.number().min(1, 'Please select a rating').max(5, 'Rating must be between 1 and 5'),
  comment: z.string().min(10, 'Review must be at least 10 characters').max(500, 'Review must be less than 500 characters'),
});

type ReviewFormData = z.infer<typeof reviewSchema>;

interface ReviewFormProps {
  attractionId: number;
  onSubmit: (review: Review) => void;
}

// Mock API function for submitting reviews
const submitReview = async (data: ReviewFormData & { attractionId: number }): Promise<Review> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simulate random success/failure
  if (Math.random() > 0.1) {
    return {
      id: Date.now().toString(),
      author: data.author,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      rating: data.rating,
      comment: data.comment,
      verified: false
    };
  } else {
    throw new Error('Failed to submit review. Please try again.');
  }
};

const ReviewForm: React.FC<ReviewFormProps> = ({ attractionId, onSubmit }) => {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch,
    trigger
  } = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      author: '',
      rating: 0,
      comment: '',
    },
  });

  const watchedRating = watch('rating');

  // Mutation for submitting review
  const submitReviewMutation = useMutation({
    mutationFn: (data: ReviewFormData) => submitReview({ ...data, attractionId }),
    onSuccess: (review) => {
      onSubmit(review);
      reset();
      toast.success('Review submitted successfully!');
      
      // Invalidate and refetch reviews if we had a query for them
      queryClient.invalidateQueries({ queryKey: ['reviews', attractionId] });
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to submit review. Please try again.');
    },
  });

  const handleRatingChange = (rating: number) => {
    setValue('rating', rating);
    trigger('rating');
  };

  const onSubmitForm = (data: ReviewFormData) => {
    submitReviewMutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="bg-white rounded-lg p-6 shadow-md mt-8 border border-gray-200 text-black">
      <h4 className="text-lg font-bold mb-4 text-gray-900">Add Your Review</h4>
      
      <div className="space-y-4">
        {/* Author field */}
        <div>
          <label htmlFor="author" className="block text-gray-700 font-medium mb-1">
            Your Name *
          </label>
          <Input
            id="author"
            {...register('author')}
            placeholder="Enter your name"
            className={errors.author ? 'border-red-500 focus:ring-red-500' : ''}
          />
          {errors.author && (
            <p className="text-red-500 text-sm mt-1">{errors.author.message}</p>
          )}
        </div>

        {/* Rating field */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Your Rating *
          </label>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                onClick={() => handleRatingChange(star)}
                className="focus:outline-none focus:ring-2 focus:ring-rwanda-green focus:ring-offset-2 rounded"
                aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
              >
                <Star
                  className={`h-6 w-6 transition-colors ${
                    star <= watchedRating 
                      ? 'text-yellow-400 fill-current' 
                      : 'text-gray-300 hover:text-yellow-300'
                  }`}
                />
              </button>
            ))}
          </div>
          {errors.rating && (
            <p className="text-red-500 text-sm mt-1">{errors.rating.message}</p>
          )}
        </div>

        {/* Comment field */}
        <div>
          <label htmlFor="comment" className="block text-gray-700 font-medium mb-1">
            Your Review *
          </label>
          <Textarea
            id="comment"
            {...register('comment')}
            placeholder="Share your experience..."
            rows={4}
            className={errors.comment ? 'border-red-500 focus:ring-red-500' : ''}
          />
          {errors.comment && (
            <p className="text-red-500 text-sm mt-1">{errors.comment.message}</p>
          )}
          <p className="text-gray-500 text-sm mt-1">
            {watch('comment')?.length || 0}/500 characters
          </p>
        </div>

        {/* Submit button */}
        <Button 
          type="submit" 
          className="bg-rwanda-green hover:bg-rwanda-darkGreen text-white w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Review'}
        </Button>
      </div>

      {/* Help text */}
      <p className="text-gray-500 text-sm mt-4">
        * Required fields. Your review will be visible to other visitors.
      </p>
    </form>
  );
};

export default ReviewForm; 