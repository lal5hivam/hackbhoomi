"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles } from "lucide-react"
import { memo, useCallback } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const HeroSection = memo(function HeroSection() {
  const handleRegisterClick = useCallback(() => {
    // Registration closed - button does nothing
  }, [])

  const router = useRouter()
  
  const handleExploreClick = useCallback(() => {
    router.push('/teams')
  }, [router])

  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center justify-center"
      role="main"
      aria-labelledby="hero-heading"
    >
      {/* Optimized Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/herobg.jpg"
          alt="HackBhoomi 2025 background - Innovation and technology theme"
          fill
          priority
          quality={85}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-slate-900/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30" />
      </div>
      {/* Optimized Background Elements */}
      <div className="absolute inset-0 z-10">
        {/* Elegant floating particles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-float opacity-40 blur-sm"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-float opacity-30 animation-delay-1000 blur-sm"></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-float opacity-25 animation-delay-2000 blur-sm"></div>
        <div className="absolute top-2/3 right-1/4 w-2.5 h-2.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-float opacity-35 animation-delay-3000 blur-sm"></div>

        {/* Professional geometric elements */}
        <div className="absolute top-1/5 right-1/5 w-20 h-20 border border-orange-400/15 rotate-45 animate-float animation-delay-800 rounded-lg"></div>
        <div className="absolute bottom-1/5 left-1/5 w-16 h-16 border border-blue-400/15 rounded-full animate-float animation-delay-1000"></div>

        {/* Sophisticated gradient orbs */}
        <div className="absolute top-1/2 left-1/6 w-40 h-40 bg-gradient-to-r from-orange-500/8 to-red-500/8 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/6 w-32 h-32 bg-gradient-to-r from-blue-500/8 to-purple-500/8 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/6 right-1/3 w-28 h-28 bg-gradient-to-r from-cyan-500/6 to-blue-500/6 rounded-full blur-2xl animate-pulse animation-delay-1500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center max-w-6xl pt-16 sm:pt-20 lg:pt-24">

        {/* Compact Professional Announcement Badge */}
        <div className="mb-4 animate-fade-in-up">
          <Badge
            variant="secondary"
            className="inline-flex items-center px-4 py-2 rounded-full bg-transaparent backdrop-blur-md border border-orange-400/30 text-white shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105 text-xs sm:text-sm font-medium"
          >
            <Sparkles className="w-3 h-3 mr-2 text-orange-300 animate-pulse" />
            🎯 Your Gateway to National Recognition
          </Badge>
        </div>

        {/* SEO Optimized Main Heading */}
        <div className="mb-5 animate-fade-in-up">
          <h1 id="hero-heading" className="leading-tight">
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 mb-2 animate-slide-in-left drop-shadow-lg">
              SMART INDIA
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 mb-2 animate-pulse-glow drop-shadow-lg">
              HACKATHON
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-mono text-white animate-slide-in-right drop-shadow-lg">
              2025
            </span>
          </h1>
        </div>

        {/* Compact Professional Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed font-normal animate-fade-in-up drop-shadow-sm">
          Join India&apos;s largest innovation ecosystem and transform your ideas into
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-semibold"> game-changing solutions</span>
        </p>

        {/* Optimized CTA Buttons with proper accessibility */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center items-center mb-6 animate-fade-in-up">
          <Button
            size="default"
            onClick={handleRegisterClick}
            disabled
            aria-label="Registration closed for HackBhoomi 2025"
            className="group relative bg-gradient-to-r from-red-700 via-red-600 to-red-700 hover:from-red-800 hover:via-red-700 hover:to-red-800 text-white/80 font-medium text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-lg cursor-not-allowed opacity-90 transform overflow-hidden border-0 w-full sm:w-auto max-w-xs sm:max-w-none"
          >
            <span className="relative z-10 flex items-center justify-center">
              Registration Closed
              <ArrowRight className="ml-2 w-4 h-4 opacity-50" aria-hidden="true" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" aria-hidden="true"></div>
          </Button>
          <Button
            size="default"
            variant="outline"
            onClick={handleExploreClick}
            aria-label="Learn more about Smart India Hackathon"
            className="group border border-white/40 bg-white/5 backdrop-blur-md text-white hover:bg-white/15 hover:border-white/60 font-medium text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-sm w-full sm:w-auto max-w-xs sm:max-w-none"
          >
            <span className="group-hover:text-orange-300 transition-colors">Teams Status</span>
          </Button>
        </div>

      </div>
    </section>
  )
})

export default HeroSection