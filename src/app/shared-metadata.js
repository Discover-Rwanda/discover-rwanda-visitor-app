export const sharedMetadata = {
    title: "%s - Discover Rwanda | Explore Rwanda's Natural Wonders",
    titleTemplate: "%s | Discover Rwanda",
    description: "Discover Rwanda is the number one all in one go-to platform of dedicated to showcasing the incredible experiences, landscapes, and cultural heritage that make Rwanda a unique and unforgettable destination.",
    keywords: [
        "Rwanda", "Discover Rwanda", "Tourism", "Tourism in Rwanda", "Rwandan Geography", "Rwanda's beauty", "Rwanda a country of a thousand hills", "Rwanda Nziza", "Akagera National Park", "Kigali", "Kigali City"
    ],
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
                url: "https://www.discoverrwanda.rw/Landscape-of-the-Virunga-Mountains-in-Rwanda.jpg",
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
        images: ["https://www.discoverrwanda.rw/Landscape-of-the-Virunga-Mountains-in-Rwanda.jpg"],
        creator: "@DiscoverRwandaRW",
    },
    themeColor: "#ffffff",
    appleWebApp: {
        capable: true,
        statusBarStyle: "black-translucent",
        title: "Discover Rwanda",
        startupImage: [
            {
                url: "/Landscape-of-the-Virunga-Mountains-in-Rwanda.jpg",
                media: "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)",
            },
        ],
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
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    metadataBase: new URL("https://www.discoverrwanda.rw"),
}