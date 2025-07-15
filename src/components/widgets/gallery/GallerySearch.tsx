"use client";

import React from 'react';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GallerySearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function GallerySearch({ value, onChange, placeholder }: GallerySearchProps) {
  return (
    <div className="max-w-md mx-auto mb-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rwanda-green focus:border-transparent"
        />
        {value && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-gray-200"
            onClick={() => onChange('')}
          >
            <X className="h-4 w-4 text-gray-600" />
          </Button>
        )}
      </div>
    </div>
  );
} 