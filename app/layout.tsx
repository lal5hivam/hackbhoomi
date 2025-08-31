import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "HackBhoomi 2025 | Invertis University Hackathon",
  description:
    "HackBhoomi 2025 — Invertis University’s official Hackathon for Smart India Hackathon. Join us to innovate, build, and compete with the brightest minds.",
  keywords: [
    "HackBhoomi",
    "Invertis Hackathon",
    "Smart India Hackathon",
    "Invertis University",
    "Hackathon 2025",
    "Hackathon Bareilly",
  ],
  metadataBase: new URL("https://hackbhoomi.vercel.app"), // change to your domain
  openGraph: {
    type: "website",
    url: "https://hackbhoomi.vercel.app",
    title: "HackBhoomi 2025 | Invertis University Hackathon",
    description:
      "HackBhoomi 2025 — The official Invertis University Hackathon for SIH 2025.",
    siteName: "HackBhoomi",
    images: [
      {
        url: "https://hackbhoomi.vercel.app/hackbhoomi-banner.png", // 1200x630 recommended
        width: 1200,
        height: 630,
        alt: "HackBhoomi 2025 - Invertis University Hackathon",
      },
    ],
  },
  
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://hackbhoomi.vercel.app",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon + Apple Touch */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme color for mobile */}
        <meta name="theme-color" content="#0f172a" />

        {/* FAQ Schema (for Google Rich Results) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Who can participate in HackBhoomi?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "HackBhoomi is open for students of Invertis University participating in Smart India Hackathon 2025.",
                  },
                },
                {
                  "@type": "Question",
                  name: "When will HackBhoomi 2025 take place?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "HackBhoomi 2025 will be held from 25th to 27th August 2025 at Invertis University, Bareilly.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  )
}
