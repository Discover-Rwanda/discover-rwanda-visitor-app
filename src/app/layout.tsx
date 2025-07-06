import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from './providers'

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
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "%s - "
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
