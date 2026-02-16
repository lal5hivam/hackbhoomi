"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import AboutSIH from "@/components/AboutSIH"
import Milestones from "@/components/Milestones"
import Timeline from "@/components/Timeline"
import Instructions from "@/components/Instructions"
import TracksSection from "@/components/TracksSelection"
import ProblemStatements from "@/components/ProblemStatements"
import Prizes from "@/components/Prizes"
import Team from "@/components/Team"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"
import PerformanceMonitor from "@/components/PerformanceMonitor"
import RegistrationForm from "@/components/RegistrationForm"

export default function Page() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)

  // Add scroll effect for Navbar background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed">
      {/* Performance Monitoring */}
      <PerformanceMonitor />
      
      {/* Navbar */}
      <Navbar isScrolled={isScrolled} onRegisterClick={() => setIsRegistrationOpen(true)} />

      {/* Hero Section */}
      <HeroSection onRegisterClick={() => setIsRegistrationOpen(true)} />

      {/* About Hackathon / SIH */}
      {/* <AboutSIH /> */}

      {/* Milestones */}
      <Milestones />

      {/* Timeline */}
      <Timeline />

      {/* Instructions */}
      <Instructions onRegisterClick={() => setIsRegistrationOpen(true)} />

      {/* Problem Statements */}
      <ProblemStatements />

      {/* Tracks */}
      {/* <TracksSection /> */}

      {/* Prizes */}
      <Prizes />

      {/* Team */}
      {/* <Team /> */}

      {/* FAQ */}
      {/* <FAQ /> */}

      {/* Footer */}
      <Footer onRegisterClick={() => setIsRegistrationOpen(true)} />

      {/* Registration Form Modal */}
      <RegistrationForm 
        isOpen={isRegistrationOpen} 
        onClose={() => setIsRegistrationOpen(false)} 
      />
    </div>
  )
}
