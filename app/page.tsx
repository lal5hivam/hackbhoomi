"use client"

import { useState, useEffect } from "react"
import Head from "next/head"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import AboutSIH from "@/components/AboutSIH"
import Milestones from "@/components/Milestones"
import Timeline from "@/components/Timeline"
import Instructions from "@/components/Instructions"
import TracksSection from "@/components/TracksSelection"
import Prizes from "@/components/Prizes"
import Team from "@/components/Team"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"

export default function HackBhoomi() {
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Head>
        {/* Page-specific meta tags */}
        <link rel="preload" href="/herobg.jpg" as="image" />
        <link rel="preload" href="/edtech/PS1.png" as="image" />
      </Head>

      <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed">
        {/* Navigation */}
        <Navbar isScrolled={isScrolled} />

        {/* Hero Section */}
        <HeroSection />

        {/* About SIH Section */}
        <AboutSIH />

        {/* Milestones Section */}
        <Milestones />

        {/* Timeline Section */}
        <Timeline />

        {/* Instructions Section */}
        <Instructions />

        {/* Tracks Section */}
        <TracksSection />

        <Prizes />
      
        <Team />
        <FAQ />
        <Footer />
      </div>
    </>
  )
}