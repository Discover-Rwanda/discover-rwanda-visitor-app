 'use client';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Optionally log error to an error reporting service
    // console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h2 className="text-2xl font-bold mb-4 text-red-600">Something went wrong</h2>
      <p className="mb-6 text-gray-700">We&apos;re sorry, but an unexpected error occurred while loading the page.</p>
      <button
        onClick={() => reset()}
        className="px-6 py-2 bg-rwanda-blue text-white rounded hover:bg-rwanda-darkBlue transition"
      >
        Reload Page
      </button>
    </div>
  );
}
