export default function Loading() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-rwanda-blue mb-4" />
        <span className="text-rwanda-blue text-lg font-semibold">Loading Discover Rwanda...</span>
      </div>
    );
  }
  