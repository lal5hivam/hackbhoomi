import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hackbhoomi.vercel.app"
const siteName = "HackBhoomi 2025"
const siteDescription = "HackBhoomi 2025 — Invertis University's official internal hackathon for Smart India Hackathon 2025. Join us to innovate, build, and compete with the brightest minds in technology."

// Base metadata configuration
export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Invertis University Hackathon`,
    template: `%s | ${siteName}`
  },
  description: siteDescription,
  keywords: [
    // Primary Keywords
    "HackBhoomi",
    "HackBhoomi 2025",
    "Invertis University Hackathon",
    "Smart India Hackathon",
    "SIH 2025",
    
    // Location-based Keywords
    "Hackathon Bareilly",
    "UP University Hackathon",
    "North India Hackathon",
    "Bareilly Tech Event",
    
    // Event-specific Keywords
    "Innovation Competition",
    "Student Hackathon",
    "Technology Competition",
    "Coding Competition",
    "Programming Contest",
    "Tech Innovation",
    
    // Long-tail Keywords
    "Invertis University internal hackathon",
    "Smart India Hackathon selection",
    "University hackathon 2025",
    "Student innovation competition",
    "Tech startup competition",
    
    // Technical Keywords
    "Web Development Competition",
    "Mobile App Development",
    "AI ML Competition",
    "Blockchain Hackathon",
    "IoT Innovation",
    "Cybersecurity Competition"
  ],
  authors: [
    { name: "HackBhoomi Team", url: siteUrl },
    { name: "Invertis University", url: "https://www.invertisuniversity.ac.in" },
    { name: "ahqafcoder", url: "https://github.com/ahqafcoder" }
  ],
  creator: "Invertis University",
  publisher: "Invertis University",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName,
    title: `${siteName} | Invertis University Hackathon`,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/hackbhoomi-banner.png`,
        width: 1200,
        height: 630,
        alt: `${siteName} - Invertis University's gateway to Smart India Hackathon`,
        type: "image/png"
      },
      {
        url: `${siteUrl}/SIH.png`,
        width: 512,
        height: 512,
        alt: "Smart India Hackathon 2025 Logo",
        type: "image/png"
      }
    ],
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Invertis University Hackathon`,
    description: siteDescription,
    images: [`${siteUrl}/hackbhoomi-banner.png`],
    creator: "@InvertisUniv",
    site: "@InvertisUniv"
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Other metadata
  alternates: {
    canonical: siteUrl,
  },
  category: "Education",
  classification: "Hackathon Event",
  referrer: "origin-when-cross-origin",
}

// Structured Data for SEO
export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    // Main Event Schema
    {
      "@type": "Event",
      "@id": `${siteUrl}/#event`,
      "name": "HackBhoomi 2025",
      "alternateName": "Invertis University Internal Hackathon",
      "description": "Internal hackathon at Invertis University for Smart India Hackathon 2025 selection. Students compete to represent the university at the national level.",
      "startDate": "2025-09-12T09:00:00+05:30",
      "endDate": "2025-09-13T18:00:00+05:30",
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
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "28.3670",
          "longitude": "79.4304"
        }
      },
      "organizer": {
        "@type": "Organization",
        "name": "Invertis University",
        "url": "https://www.invertisuniversity.ac.in",
        "logo": `${siteUrl}/invertis.png`,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-581-246-0442",
          "contactType": "Event Organization",
          "email": "l.singhshivam1@gmail.com"
        }
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "url": "https://forms.gle/fsCyrMx66uLinKU68",
        "validFrom": "2025-08-20T00:00:00+05:30",
        "validThrough": "2025-08-31T23:59:59+05:30"
      },
      "image": [
        `${siteUrl}/hackbhoomi-banner.png`,
        `${siteUrl}/SIH.png`
      ],
      "url": siteUrl,
      "isAccessibleForFree": true,
      "maximumAttendeeCapacity": 500,
      "typicalAgeRange": "18-25"
    },
    
    // Organization Schema
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      "name": "Invertis University",
      "alternateName": "Invertis University Bareilly",
      "url": "https://www.invertisuniversity.ac.in",
      "logo": `${siteUrl}/invertis.png`,
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-581-246-0442",
          "contactType": "Event Support",
          "email": "l.singhshivam1@gmail.com",
          "availableLanguage": ["English", "Hindi"]
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Delhi Lucknow Highway, NH-24",
        "addressLocality": "Bareilly",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "243123",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.facebook.com/invertisuniversity",
        "https://www.linkedin.com/school/invertis-university",
        "https://twitter.com/invertisuniv"
      ]
    },
    
    // FAQ Schema
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
            "text": "HackBhoomi 2025 will be held on 12-13 September 2025 at Invertis University, Bareilly. Registration opens on 20 August 2025 and closes on 31 August 2025."
          }
        },
        {
          "@type": "Question",
          "name": "What are the prizes for HackBhoomi 2025?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Winners of HackBhoomi 2025 will represent Invertis University at Smart India Hackathon 2025, with opportunities to win cash prizes up to ₹1.5 Lakhs at the national level. Additional prizes and certificates will be awarded to top performers."
          }
        },
        {
          "@type": "Question",
          "name": "How do I register for HackBhoomi 2025?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Registration is open through our official Google Form. Visit the HackBhoomi website and click on 'Register Your Team' button to access the registration form. Registration deadline is 31st August 2025."
          }
        },
        {
          "@type": "Question",
          "name": "What tracks are available in Smart India Hackathon 2025?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SIH 2025 offers 17 different tracks including Smart Automation, Healthcare Technology, Agriculture & Rural Development, Clean & Green Technology, Blockchain & Cybersecurity, Smart Education, and many more innovative domains."
          }
        }
      ]
    },
    
    // WebSite Schema
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "url": siteUrl,
      "name": siteName,
      "description": siteDescription,
      "publisher": {
        "@id": `${siteUrl}/#organization`
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
      ],
      "inLanguage": "en-IN"
    },
    
    // Educational Event Schema
    {
      "@type": "EducationalEvent",
      "@id": `${siteUrl}/#educational-event`,
      "name": "HackBhoomi 2025 - Smart India Hackathon Selection",
      "description": "Educational hackathon event for university students to learn, innovate, and compete in technology solutions for real-world problems.",
      "educationalLevel": "University",
      "teaches": [
        "Problem Solving",
        "Software Development",
        "Innovation",
        "Teamwork",
        "Presentation Skills",
        "Technology Implementation"
      ],
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "student"
      },
      "startDate": "2025-09-12T09:00:00+05:30",
      "endDate": "2025-09-13T18:00:00+05:30",
      "location": {
        "@id": `${siteUrl}/#organization`
      }
    }
  ]
}

// Page-specific metadata generators
export const generatePageMetadata = (
  title: string,
  description?: string,
  keywords?: string[],
  image?: string
): Metadata => ({
  ...baseMetadata,
  title,
  description: description || siteDescription,
  keywords: keywords ? [...(baseMetadata.keywords as string[]), ...keywords] : baseMetadata.keywords,
  openGraph: {
    ...baseMetadata.openGraph,
    title,
    description: description || siteDescription,
    images: image ? [
      {
        url: `${siteUrl}${image}`,
        width: 1200,
        height: 630,
        alt: title,
      }
    ] : baseMetadata.openGraph?.images,
  },
  twitter: {
    ...baseMetadata.twitter,
    title,
    description: description || siteDescription,
    images: image ? [`${siteUrl}${image}`] : baseMetadata.twitter?.images,
  }
})

export { siteUrl, siteName, siteDescription }