import type { Metadata, Viewport } from "next"
import "./globals.css"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hackbhoomi.vercel.app"

export const metadata: Metadata = {
  title: {
    default: "HackBhoomi 2025 | Invertis University Hackathon",
    template: "%s | HackBhoomi 2025"
  },
  description: "HackBhoomi 2025 — Invertis University's official internal hackathon for Smart India Hackathon 2025. Join us to innovate, build, and compete with the brightest minds in technology.",
  keywords: [
    "HackBhoomi",
    "HackBhoomi 2025",
    "Invertis Hackathon",
    "Smart India Hackathon",
    "SIH 2025",
    "Invertis University",
    "Hackathon Bareilly",
    "Innovation Competition",
    "Student Hackathon",
    "Technology Competition",
    "Coding Competition",
    "Programming Contest"
  ],
  authors: [{ name: "HackBhoomi Team", url: siteUrl }],
  creator: "Invertis University",
  publisher: "Invertis University",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: "HackBhoomi 2025 | Invertis University Hackathon",
    description: "Join India's largest innovation ecosystem at HackBhoomi 2025 - The official Invertis University hackathon for Smart India Hackathon 2025.",
    siteName: "HackBhoomi 2025",
    images: [
      {
        url: `${siteUrl}/hackbhoomi-banner.png`,
        width: 1200,
        height: 630,
        alt: "HackBhoomi 2025 - Invertis University's gateway to Smart India Hackathon",
        type: "image/png"
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HackBhoomi 2025 | Invertis University Hackathon",
    description: "Join India's largest innovation ecosystem at HackBhoomi 2025",
    images: [`${siteUrl}/hackbhoomi-banner.png`],
    creator: "@InvertisUniv"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Education",
  classification: "Hackathon Event",
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3B82F6' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' }
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://forms.gle" />
        <link rel="preconnect" href="https://www.sih.gov.in" />

        {/* Favicon + Apple Touch */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Enhanced Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Event",
                  "@id": `${siteUrl}/#event`,
                  "name": "HackBhoomi 2025",
                  "description": "Internal hackathon at Invertis University for Smart India Hackathon 2025 selection",
                  "startDate": "2025-09-12",
                  "endDate": "2025-09-13",
                  "eventStatus": "https://schema.org/EventScheduled",
                  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                  "location": {
                    "@type": "Place",
                    "name": "Invertis University",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "Delhi Lucknow Highway, NH-24",
                      "addressLocality": "Bareilly",
                      "addressRegion": "Uttar Pradesh",
                      "postalCode": "243123",
                      "addressCountry": "IN"
                    }
                  },
                  "organizer": {
                    "@type": "Organization",
                    "name": "Invertis University",
                    "url": "https://www.invertisuniversity.ac.in"
                  },
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "INR",
                    "availability": "https://schema.org/InStock"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": `${siteUrl}/#faq`,
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Who can participate in HackBhoomi 2025?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "HackBhoomi 2025 is open for students of Invertis University who want to participate in Smart India Hackathon 2025. Students can participate individually or in teams of up to 6 members."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "When will HackBhoomi 2025 take place?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "HackBhoomi 2025 will be held on 12-13 September 2025 at Invertis University, Bareilly. Registration opens on 20 August 2025."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What are the prizes for HackBhoomi 2025?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Winners of HackBhoomi 2025 will represent Invertis University at Smart India Hackathon 2025, with opportunities to win cash prizes up to ₹1.5 Lakhs at the national level."
                      }
                    }
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": `${siteUrl}/#website`,
                  "url": siteUrl,
                  "name": "HackBhoomi 2025",
                  "description": "Official website for HackBhoomi 2025 - Invertis University's internal hackathon",
                  "publisher": {
                    "@type": "Organization",
                    "name": "Invertis University"
                  },
                  "potentialAction": [
                    {
                      "@type": "SearchAction",
                      "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": `${siteUrl}/?q={search_term_string}`
                      },
                      "query-input": "required name=search_term_string"
                    }
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body className="bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}