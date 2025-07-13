"use client";

import React, { useState } from 'react';
import HeroSection from './hero-section';

// Example usage of the HeroSection component
const HeroSectionExample: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      {/* Example 1: With background image and search */}
      <HeroSection
        title="Discover Rwanda's Attractions"
        description="Explore Rwanda's stunning natural wonders, rich cultural heritage, and vibrant urban experiences."
        searchPlaceholder="Search attractions..."
        backgroundImageUrl="/images/volcanoes-national-park-gorilla_AJ723tqm4-Photo-from-Getty-Images.jpg"
        searchValue={searchTerm}
        onSearchChange={setSearchTerm}
      />

      {/* Example 2: Without search */}
      <HeroSection
        title="About Rwanda"
        description="Learn about Rwanda's history, culture, and people."
        backgroundImageUrl="/images/kigali.jpeg"
        showSearch={false}
      />

      {/* Example 3: Default background (gray) */}
      <HeroSection
        title="Contact Us"
        description="Get in touch with our team for any inquiries."
        searchPlaceholder="Search help articles..."
        searchValue={searchTerm}
        onSearchChange={setSearchTerm}
      />
    </div>
  );
};

export default HeroSectionExample; 