import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from './providers'
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner";
import Footer from "@/components/widgets/Footer";
import Navbar from "@/components/widgets/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "%s - Discover Rwanda | Explore Rwanda's Natural Wonders",
  description: "Discover Rwanda is the number one all in one go-to platform of dedicated to showcasing the incredible experiences, landscapes, and cultural heritage that make Rwanda a unique and unforgettable destination.",
  keywords: "Rwanda, Discover Rwanda, Tourism, Tourism in Rwanda, Rwandan Geography, Rwanda's beauty, Rwanda a country of a thousand hills, Rwanda Nziza, Akagera National Park, Kigali, Kigali City",
  icons: {
    icon: "/DiscoverRwandaLogo.svg",
  },
  openGraph: {
    title: "%s - Discover Rwanda | Explore Rwanda's Natural Wonders",
    description: "Discover Rwanda is the number one all in one go-to platform of dedicated to showcasing the incredible experiences, landscapes, and cultural heritage that make Rwanda a unique and unforgettable destination.",
    url: "https://www.discoverrwanda.rw",
    siteName: "Discover Rwanda",
    images: [
      {
        url: "https://wwww.discoverrwanda.rw/images/Landscape-of-the-Virunga-Mountains-in-Rwanda.jpg",
        width: 1200,
        height: 630,
        alt: "Discover Rwanda - Explore Rwanda's Natural Wonders",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "%s - Discover Rwanda | Explore Rwanda's Natural Wonders",
    description: "Discover Rwanda is the number one all in one go-to platform of dedicated to showcasing the incredible experiences, landscapes, and cultural heritage that make Rwanda a unique and unforgettable destination.",
    images: ["https://www.discoverrwanda.rw/images/Landscape-of-the-Virunga-Mountains-in-Rwanda.jpg"],
    creator: "@DiscoverRwandaRW",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://www.discoverrwanda.rw",
    types: {
      "application/rss+xml": "/feed.xml",
      "application/atom+xml": "/feed.atom",
      "application/json": "/feed.json",
      "application/ld+json": "/feed.json-ld",
    },
  },
  verification: {
    google: "google-site-verification=your-google-verification-code",
    yandex: "yandex-verification: your-yandex-verification-code",
    me: "your-me-verification-code",
    other: {
      "example-verification": "example-verification-code",
    },
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
    url: false,
  },
  metadataBase: new URL("https://www.discoverrwanda.rw"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
