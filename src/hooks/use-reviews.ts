import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Review } from '@/data/attractions';

// Mock API functions
const fetchReviews = async (attractionId: number): Promise<Review[]> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // For now, return empty array - in real app this would fetch from API
  // In a real implementation, you would use attractionId to fetch reviews for this specific attraction
  console.log(`Fetching reviews for attraction ${attractionId}`);
  return [];
};

const submitReview = async (data: {
  attractionId: number;
  author: string;
  rating: number;
  comment: string;
}): Promise<Review> => {
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

export const useReviews = (attractionId: number) => {
  const queryClient = useQueryClient();

  const {
    data: reviews = [],
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ['reviews', attractionId],
    queryFn: () => fetchReviews(attractionId),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });

  const submitReviewMutation = useMutation({
    mutationFn: submitReview,
    onSuccess: (newReview) => {
      // Optimistically update the cache
      queryClient.setQueryData(['reviews', attractionId], (old: Review[] = []) => [
        newReview,
        ...old
      ]);
      
      // Invalidate and refetch to ensure consistency
      queryClient.invalidateQueries({ queryKey: ['reviews', attractionId] });
    },
  });

  return {
    reviews,
    isLoading,
    error,
    submitReview: submitReviewMutation.mutate,
    isSubmitting: submitReviewMutation.isPending,
    submitError: submitReviewMutation.error,
    refetch
  };
}; 