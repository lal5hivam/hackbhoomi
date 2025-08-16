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
    "Elkjøp",
    "sommerfest",
    "hackathon",
    "AI",
    "innovasjon",
    "intern event",
    "Oslo",
    "teknologi",
    "team building",
    "kunstig intelligens",
  ],
  authors: [{ name: "Elkjøp Nordic AS" }],
  creator: "Elkjøp Nordic AS",
  publisher: "Elkjøp Nordic AS",
  robots: {
    index: false, // Internal site - don't index publicly
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "https://events.elkjop.no/sommerfest-2024",
    siteName: "Elkjøp Events",
    title: "Elkjøp Sommerfest 2024 - AI Hackathon",
    description:
      "Opplev høydepunktene fra Elkjøps mest innovative interne AI-hackathon. 150+ deltakere, 25 team-prosjekter, 48 timer med innovasjon.",
    images: [
      {
        url: "https://oslo-pull.b-cdn.net/AI_JAM_Fredag-24%20Large.jpeg",
        width: 1200,
        height: 630,
        alt: "Elkjøp AI Hackathon 2024 - Team samarbeid og innovasjon",
      },
      {
        url: "https://oslo-pull.b-cdn.net/Vibetank/AI_JAM_L%C3%B8rdag-25.jpeg",
        width: 1200,
        height: 630,
        alt: "Elkjøp Sommerfest 2024 - Feiring og networking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@elkjop",
    creator: "@elkjop",
    title: "Elkjøp Sommerfest 2024 - AI Hackathon",
    description: "Se høydepunktene fra vårt interne AI-hackathon med 150+ deltakere og 25 innovative prosjekter.",
    images: ["https://oslo-pull.b-cdn.net/AI_JAM_Fredag-24%20Large.jpeg"],
  },
  alternates: {
    canonical: "https://events.elkjop.no/sommerfest-2024",
    languages: {
      "nb-NO": "https://events.elkjop.no/sommerfest-2024",
      "sv-SE": "https://events.elkjop.se/sommarfest-2024",
      "da-DK": "https://events.elkjop.dk/sommerfest-2024",
    },
  },
  other: {
    company: "Elkjøp Nordic AS",
    "event-type": "Internal Hackathon",
    "event-date": "2024-06-15",
    location: "Oslo Innovation Hub",
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

        {/* Structured Data for Event */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "Elkjøp Sommerfest 2024 - AI Hackathon",
              description: "Intern AI-hackathon for Elkjøp-ansatte med fokus på innovasjon og teknologi",
              startDate: "2024-06-15T09:00:00+02:00",
              endDate: "2024-06-17T17:00:00+02:00",
              eventStatus: "https://schema.org/EventScheduled",
              eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
              location: {
                "@type": "Place",
                name: "Oslo Innovation Hub",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Innovasjonsveien 1",
                  addressLocality: "Oslo",
                  postalCode: "0123",
                  addressCountry: "NO",
                },
              },
              organizer: {
                "@type": "Organization",
                name: "Elkjøp Nordic AS",
                url: "https://www.elkjop.no",
              },
              performer: [
                {
                  "@type": "Organization",
                  name: "Team Innovators",
                },
                {
                  "@type": "Organization",
                  name: "Team TechWizards",
                },
                {
                  "@type": "Organization",
                  name: "Team DataDreamers",
                },
              ],
              image: [
                "https://oslo-pull.b-cdn.net/AI_JAM_Fredag-24%20Large.jpeg",
                "https://oslo-pull.b-cdn.net/Vibetank/AI_JAM_L%C3%B8rdag-25.jpeg",
              ],
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/SoldOut",
                price: "0",
                priceCurrency: "NOK",
                description: "Intern event kun for Elkjøp-ansatte",
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
              name: "Elkjøp Nordic AS",
              url: "https://www.elkjop.no",
              logo: "https://www.elkjop.no/logo.png",
              sameAs: [
                "https://www.facebook.com/elkjop",
                "https://www.instagram.com/elkjop",
                "https://www.linkedin.com/company/elkjop",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+47-815-35-400",
                contactType: "customer service",
                availableLanguage: ["Norwegian", "Swedish", "Danish"],
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ScrollProgressBar />
        <MusicToggle />
        {/* Main content */}
        {children}
      </body>
    </html>
  )
}
