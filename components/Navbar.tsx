"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, MapPin, Calendar, Clock, AlertCircle } from "lucide-react"
import Image from "next/image"

interface NavbarProps {
  isScrolled: boolean;
  onRegisterClick: () => void;
}

export default function Navbar({ isScrolled, onRegisterClick }: NavbarProps) {
  const [isNavOpen, setIsNavOpen] = useState(false)

  // Smooth scroll function with enhanced animation
  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      const headerOffset = 100 // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsNavOpen(false) // Close mobile menu after navigation
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isNavOpen && !target.closest('header')) {
        setIsNavOpen(false)
      }
    }

    if (isNavOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isNavOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${isScrolled
        ? 'bg-white shadow-2xl border-b border-gray-200/30 py-3 sm:py-5'
        : 'bg-white shadow-xl border border-gray-200/50 rounded-3xl w-[98%] sm:w-[97%] mx-auto mt-2 sm:mt-4 py-4 sm:py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-7">
        <div className="flex items-center justify-between h-full">

          {/* Desktop Layout (when NOT scrolled) - Enhanced */}
          {!isScrolled && (
            <>
              {/* Left Section: Logo and University Name */}
              <div className="flex items-center space-x-3 sm:space-x-4">
                <Image
                  src="/invert.png"
                  alt="Inverthon Logo"
                  width={40}
                  height={40}
                  className="h-8 w-auto sm:h-10"
                  priority
                />
                <div
                  className="flex items-center space-x-1 sm:space-x-2 cursor-pointer group"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  <h1 className="text-sm sm:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">INVERTIS UNIVERSITY</h1>
                  {/* <h1 className="text-xl sm:text-2xl lg:text-2xl text-orange-600 font-bold">THON</h1> */}
                  {/* <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse ml-1"></div>
                  <span className="sm:inline text-base lg:text-lg font-bold text-blue-700">2.0</span> */}
                </div>
              </div>

              {/* Right Section: Partner Logos + Mobile Menu Button */}
              <div className="flex items-center space-x-0.5 sm:space-x-1 lg:space-x-4">
                {/* Partner Logos */}
                <div className="flex items-center space-x-0.5 sm:space-x-1 lg:space-x-2">
                  <button
                  onClick={() => window.open("https://invertisincubation.com/", "_blank")}
                  className="group"
                >
                  <Image
                    src="/images/incub.png"
                    alt="Incubation Center"
                    width={120}
                    height={36}
                    className="h-6 sm:h-8 lg:h-10 w-auto transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
                    priority
                  />
                </button>
                <button
                  onClick={() => window.open("https://startinup.up.gov.in/", "_blank")}
                  className="group"
                >
                  <Image
                    src="/StartInUP.png"
                    alt="StartInUP"
                    width={120}
                    height={36}
                    className="h-6 sm:h-8 lg:h-10 w-auto transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
                    loading="lazy"
                  />
                </button>
                <button
                  onClick={() => window.open("https://shapemyskills.in/", "_blank")}
                  className="group"
                >
                  <Image
                    src="/shapemyskills.jpg"
                    alt="Shape My Skills"
                    width={120}
                    height={36}
                    className="h-6 sm:h-8 lg:h-10 w-auto transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
                    loading="lazy"
                  />
                </button>
                <button
                  onClick={() => window.open("", "_blank")}
                  className="group"
                >
                  <Image
                    src="/images/abhiruchi.png"
                    alt="Abhiruchi Incubation Center"
                    width={120}
                    height={36}
                    className="h-6 sm:h-8 lg:h-10 w-auto transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
                    priority
                  />
                </button>
                <button
                  onClick={() => window.open("", "_blank")}
                  className="group"
                >
                  <Image
                    src="/itech-club.png"
                    alt="iTech Club"
                    width={120}
                    height={36}
                    className="h-6 sm:h-8 lg:h-10 w-auto transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
                    priority
                  />
                </button>
                </div>

                {/* Mobile Menu Button for Non-Scrolled State */}
                <button
                  onClick={() => setIsNavOpen(!isNavOpen)}
                  className="md:hidden p-0.5 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors ml-0.5"
                  aria-label="Toggle mobile menu"
                >
                  <Menu className="w-4 h-4 text-gray-700" />
                </button>
              </div>
            </>
          )}

          {/* Enhanced Scrolled Layout - Professional Design */}
          {isScrolled && (
            <>
              {/* Left: Enhanced Brand with Logos */}
              <div className="flex items-center space-x-3 sm:space-x-4">
                <Image
                  src="/invertis-logo.png"
                  alt="Inverthon Logo"
                  width={40}
                  height={40}
                  className="h-8 w-auto sm:h-10"
                  priority
                />
                <div
                  className="flex items-center space-x-1 sm:space-x-2 cursor-pointer group"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  <h1 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">INVER</h1>
                  <h1 className="text-xl sm:text-2xl lg:text-2xl text-orange-600 font-bold">THON</h1>
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse ml-1"></div>
                  <span className="sm:inline text-base lg:text-lg font-bold text-blue-700">2.0</span>
                </div>
              </div>

              {/* Center: Enhanced Navigation with Smooth Scroll */}
              <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
                <button onClick={() => smoothScrollTo('Milestones')} className="relative text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 text-xs xl:text-sm group">
                  ABOUT
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button onClick={() => smoothScrollTo('program')} className="relative text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 text-xs xl:text-sm group">
                  TIMELINE
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button onClick={() => smoothScrollTo('instructions')} className="relative text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 text-xs xl:text-sm group">
                  INSTRUCTIONS
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button onClick={() => smoothScrollTo('problem-statements')} className="relative text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 text-xs xl:text-sm group">
                  PROBLEMS
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
                {/* <button onClick={() => smoothScrollTo('tracks')} className="relative text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 text-xs xl:text-sm group">
                  TRACKS
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </button> */}
                <button onClick={() => smoothScrollTo('prizes')} className="relative text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 text-xs xl:text-sm group">
                  PRIZES
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
                {/* <button onClick={() => smoothScrollTo('team')} className="relative text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 text-xs xl:text-sm group">
                  TEAM
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </button> */}
                <button onClick={() => smoothScrollTo('faq')} className="relative text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 text-xs xl:text-sm group">
                  FAQ&apos;S
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </nav>

              {/* Right: Enhanced CTA Section */}
              <div className="flex items-center space-x-2 sm:space-x-3">
                {/* Event Info - Compact */}
                <div className="hidden xl:flex flex-col items-end text-right mr-2">
                  <div className="flex items-center space-x-1 text-gray-600">
                    <MapPin className="w-3 h-3 text-orange-500" />
                    <span className="text-xs font-medium">Bareilly</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-600">
                    <Calendar className="w-3 h-3 text-orange-500" />
                    <span className="text-xs font-medium">2-4th April</span>
                  </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsNavOpen(!isNavOpen)}
                  className="lg:hidden p-2 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 transition-all duration-300 shadow-sm"
                  aria-label="Toggle mobile menu"
                >
                  <Menu className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Partner Logos Banner - Only show when scrolled and NOT in mobile menu */}
      {isScrolled && !isNavOpen && (
        <div className="bg-white border-t border-gray-200/30 shadow-sm">
          <div className="px-3 py-3 sm:py-4">
            {/* Mobile-optimized responsive design */}
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
              {/* Partner Logos - Larger Size */}
              <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
                <button
                  onClick={() => window.open("https://invertisincubation.com/", "_blank")}
                  className="group"
                >
                  <Image
                    src="/images/incub.png"
                    alt="Incubation Center"
                    width={120}
                    height={36}
                    className="h-6 sm:h-8 lg:h-10 w-auto transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
                    priority
                  />
                </button>
                <button
                  onClick={() => window.open("https://startinup.up.gov.in/", "_blank")}
                  className="group"
                >
                  <Image
                    src="/StartInUP.png"
                    alt="StartInUP"
                    width={120}
                    height={36}
                    className="h-6 sm:h-8 lg:h-10 w-auto transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
                    loading="lazy"
                  />
                </button>
                <button
                  onClick={() => window.open("https://shapemyskills.in/", "_blank")}
                  className="group"
                >
                  <Image
                    src="/shapemyskills.jpg"
                    alt="Shape My Skills"
                    width={120}
                    height={36}
                    className="h-6 sm:h-8 lg:h-10 w-auto transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
                    loading="lazy"
                  />
                </button>
                <button
                  onClick={() => window.open("", "_blank")}
                  className="group"
                >
                  <Image
                    src="/images/abhiruchi.png"
                    alt="Abhiruchi Incubation Center"
                    width={120}
                    height={36}
                    className="h-6 sm:h-8 lg:h-10 w-auto transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
                    priority
                  />
                </button>
                <button
                  onClick={() => window.open("", "_blank")}
                  className="group"
                >
                  <Image
                    src="/itech-club.png"
                    alt="iTech Club"
                    width={120}
                    height={36}
                    className="h-6 sm:h-8 lg:h-10 w-auto transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
                    priority
                  />
                </button>
                
              </div>

              {/* Right: Call to action button */}
              <div className="flex items-center">
                <button
                  onClick={onRegisterClick}
                  className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  REGISTER NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Mobile Navigation Menu - Complete */}
      {isNavOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-200/50 z-40 animate-fade-in-up">
          {/* Registration Open Notice for Mobile */}
          <div className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 text-white px-4 py-3 text-center">
            <div className="flex items-center justify-center space-x-2">
              <AlertCircle className="w-4 h-4 animate-pulse" />
              <span className="font-bold text-sm text-white">REGISTRATION OPEN</span>
            </div>
            <p className="text-xs mt-1 text-emerald-100">Limited spots available - Register now!</p>
          </div>

          <nav className="px-3 py-4 space-y-1">
            <button
              onClick={() => smoothScrollTo('Milestones')}
              className="block w-full text-left py-2.5 px-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-all text-sm"
            >
              ABOUT
            </button>
            <button
              onClick={() => smoothScrollTo('program')}
              className="block w-full text-left py-2.5 px-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-all text-sm"
            >
              TIMELINE
            </button>
            <button
              onClick={() => smoothScrollTo('instructions')}
              className="block w-full text-left py-2.5 px-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-all text-sm"
            >
              INSTRUCTIONS
            </button>
            <button
              onClick={() => smoothScrollTo('problem-statements')}
              className="block w-full text-left py-2.5 px-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-all text-sm"
            >
              PROBLEM STATEMENTS
            </button>
            {/* <button
              onClick={() => smoothScrollTo('tracks')}
              className="block w-full text-left py-2.5 px-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-all text-sm"
            >
              TRACKS
            </button> */}
            <button
              onClick={() => smoothScrollTo('prizes')}
              className="block w-full text-left py-2.5 px-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-all text-sm"
            >
              PRIZES
            </button>
            {/* <button
              onClick={() => smoothScrollTo('team')}
              className="block w-full text-left py-2.5 px-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-all text-sm"
            >
              TEAM
            </button> */}
            {/* <button
              onClick={() => smoothScrollTo('faq')}
              className="block w-full text-left py-2.5 px-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-all text-sm"
            >
              FAQ&apos;S
            </button> */}

            {/* Mobile Event Info - Compact */}
            <div className="pt-3 mt-3 border-t border-gray-200">
              <div className="flex items-center space-x-2 text-gray-600 px-3 py-1.5">
                <MapPin className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                <span className="text-xs">Invertis University, Bareilly</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 px-3 py-1.5">
                <Calendar className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                <span className="text-xs">2-4th April, 2026</span>
              </div>

              {/* Mobile CTA Button */}
              <div className="px-3 pt-3">
                <Button
                  onClick={onRegisterClick}
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold py-2.5 text-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Register Now
                </Button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}