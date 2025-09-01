import type { Viewport } from "next"
import "./globals.css"
import { baseMetadata, structuredData } from "@/lib/metadata"

export const metadata = baseMetadata

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

        {/* Favicon + Apple Touch - Invertis University Logo */}
        <link rel="icon" href="/invlogo.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/invlogo.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/invlogo.png" sizes="180x180" />
        <link rel="apple-touch-icon" href="/invlogo.png" sizes="152x152" />
        <link rel="apple-touch-icon" href="/invlogo.png" sizes="144x144" />
        <link rel="apple-touch-icon" href="/invlogo.png" sizes="120x120" />
        <link rel="apple-touch-icon" href="/invlogo.png" sizes="114x114" />
        <link rel="apple-touch-icon" href="/invlogo.png" sizes="76x76" />
        <link rel="apple-touch-icon" href="/invlogo.png" sizes="72x72" />
        <link rel="apple-touch-icon" href="/invlogo.png" sizes="60x60" />
        <link rel="apple-touch-icon" href="/invlogo.png" sizes="57x57" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Comprehensive Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </head>
      <body className="bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}