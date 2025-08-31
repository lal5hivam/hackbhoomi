"use client"

import { useEffect } from 'react'

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production and if performance API is available
    if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          // Log performance metrics (you can send to analytics service)
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime)
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime)
          }
          if (entry.entryType === 'layout-shift') {
            console.log('CLS:', entry.value)
          }
        })
      })

      // Observe different performance metrics
      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
      } catch (e) {
        // Fallback for browsers that don't support all entry types
        console.log('Performance monitoring not fully supported')
      }

      // Cleanup
      return () => {
        observer.disconnect()
      }
    }
  }, [])

  // This component doesn't render anything
  return null
}