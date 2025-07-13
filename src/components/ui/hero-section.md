# HeroSection Component

A reusable hero section component that can be used across different pages with customizable content and background images.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | **required** | The main heading text |
| `description` | `string` | **required** | The subtitle/description text |
| `searchPlaceholder` | `string` | `"Search..."` | Placeholder text for the search input |
| `backgroundImageUrl` | `string` | `undefined` | URL for the background image |
| `searchValue` | `string` | `""` | Current value of the search input |
| `onSearchChange` | `(value: string) => void` | `undefined` | Callback function for search input changes |
| `showSearch` | `boolean` | `true` | Whether to show the search input |

## Usage Examples

### Basic Usage with Search
```tsx
import HeroSection from '@/components/ui/hero-section';

const [searchTerm, setSearchTerm] = useState("");

<HeroSection
  title="Discover Rwanda's Attractions"
  description="Explore Rwanda's stunning natural wonders, rich cultural heritage, and vibrant urban experiences."
  searchPlaceholder="Search attractions..."
  searchValue={searchTerm}
  onSearchChange={setSearchTerm}
/>
```

### With Background Image
```tsx
<HeroSection
  title="About Rwanda"
  description="Learn about Rwanda's history, culture, and people."
  backgroundImageUrl="/images/kigali.jpeg"
  showSearch={false}
/>
```

### Without Search
```tsx
<HeroSection
  title="Contact Us"
  description="Get in touch with our team for any inquiries."
  showSearch={false}
/>
```

## Features

- **Responsive Design**: Automatically adjusts padding and text sizes for different screen sizes
- **Background Image Support**: Can use custom background images or fall back to default gray background
- **Optional Search**: Can be configured to show/hide the search functionality
- **Customizable Content**: All text content is configurable through props
- **Accessible**: Proper semantic HTML structure and ARIA labels

## Styling

The component uses Tailwind CSS classes and includes:
- Responsive typography (`text-4xl md:text-5xl` for title)
- Semi-transparent search input with white text
- Proper spacing and layout
- Hover effects on interactive elements

## Notes

- The background image will override the default gray background when provided
- The search functionality is only rendered when both `showSearch` is true and `onSearchChange` is provided
- The component is marked as a client component (`"use client"`) to support interactive features 