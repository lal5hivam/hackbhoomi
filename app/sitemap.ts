import type { MetadataRoute } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hackbhoomi.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    // Main page - highest priority
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "daily",
      priority: 1.0,
    },
    // Note: Fragment URLs (#section) are not indexed by search engines
    // All content is on the main page, so we only need the main URL
    // This is more SEO-effective than fragment URLs
  ]
}