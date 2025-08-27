import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ScrollProgressBar from "@/components/ScrollProgressBar"
import MusicToggle from "@/components/MusicToggle"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HackBhoomi || InvertisUniversity",
  description:
    "An Internal Hackathon for SIH'2025 at Invertis University. Join us for a weekend of innovation, collaboration, and creativity as we build solutions for the Smart India Hackathon 2025.",
  keywords: [
    "HackBhoomi",
    "Invertis University",
    "Hackathon",
    "Smart India Hackathon",
    "SIH 2025",
    "Innovation",
    "Coding",
    "Technology",
  ],
  authors: [{ name: "Invertis University" }],
  creator: "Lal Shivam Singh",
  publisher: "Hackbhoomi Team",
  robots: {
    index: true, // Internal site - don't index publicly
    follow: true,
    noarchive: true,
    nosnippet: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hackbhoomi.vercel.app/",
    siteName: "HackBhoomi - Invertis University",
    title: "HackBhoomi 2025 || Invertis University",
    description:
      "An Internal Hackathon for SIH'2025 at Invertis University. Join us for a weekend of innovation, collaboration, and creativity as we build solutions for the Smart India Hackathon 2025.",
    images: [
      {
        url: "https://hackbhoomi.vercel.app/hackbhoomi-banner.png",
        width: 1200,
        height: 630,
        alt: "HackBhoomi - Invertis University",
      },
    ],
  },
  alternates: {
    canonical: "https://hackbhoomi.vercel.app/",
  },
  other: {
    company: "Invertis University",
    "event-type": "Internal Hackathon",
    "event-date": "2025-25-08",
    location: "Invertis University, Bareilly, India",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nb-NO">
      <head>
        {/* Additional SEO meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#1e1b4b" />
        <meta name="msapplication-TileColor" content="#1e1b4b" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="google-site-verification" content="KKtvtbOY9eUhl9HO2_ZuEtHkDINQ1RunUT_JiiJxH00" />
        {/* Structured Data for Event */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "HackBhoomi 2025 - Internal Hackathon",
              description: "Internal Hackathon at Invertis University for SIH 2025.",
              startDate: "2024-06-15T09:00:00+02:00",
              endDate: "2024-06-17T17:00:00+02:00",
              eventStatus: "https://schema.org/EventScheduled",
              eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
              location: {
                "@type": "Place",
                name: "Invertis University, Bareilly",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Invertis University Campus, Bareilly",
                  addressLocality: "Rajau Paraspur",
                  postalCode: "243123",
                  addressCountry: "IN",
                },
              },
              organizer: {
                "@type": "Organization",
                name: "SPOC - Invertis University",
                url: "https://www.invertisuniversity.ac.in/",
              },
              performer: [
                {
                  "@type": "Organizing Committee",
                  name: "Lal Shivam Singh",
                },
                {
                  "@type": "Organizing Committee",
                  name: "Ashish Kumar",
                },
                {
                  "@type": "Organization",
                  name: "Team DataDreamers",
                },
              ],
              image: [
                "https://hackbhoomi.vercel.app/hackbhoomi-banner.png",
              ],
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/SoldOut",
                price: "0",
                priceCurrency: "INR",
                description: "Free Registrations for Students of Invertis University",
              },
            }),
          }}
        />

        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Invertis University",
              url: "https://invertisuniversity.ac.in",
              logo: "https://hackbhoomi.vercel.app/invertis.png",
              sameAs: [
                "https://www.facebook.com/invertisuniversity",
                "https://www.instagram.com/invertisuniversity",
                "https://www.linkedin.com/school/invertis-university",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "support",
                availableLanguage: ["English", "Hindi"],
              },
            }),
          }}
        />

      </head>
      <body className={inter.className}>
        <ScrollProgressBar />
        
        {/* Main content */}
        {children}
      </body>
    </html>
  )
}
