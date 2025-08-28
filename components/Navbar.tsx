"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, MapPin, Calendar } from "lucide-react"

interface NavbarProps {
  isScrolled: boolean
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const [isNavOpen, setIsNavOpen] = useState(false)

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
        ? 'bg-white shadow-2xl border-b border-gray-200/30 py-5'
        : 'bg-white shadow-xl border border-gray-200/50 rounded-3xl w-[98%] sm:w-[97%] mx-auto mt-2 sm:mt-4 py-4 sm:py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-7">
        <div className="flex items-center justify-between h-full">

          {/* Desktop Layout (when NOT scrolled) - Enhanced */}
          {!isScrolled && (
            <>
              {/* Left Section: Enhanced Brand */}
              <div className="flex items-center space-x-3 sm:space-x-5">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 transition-all duration-300">Hack</h1>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl text-orange-600 font-bold transition-all duration-300">भूमि</h1>
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-orange-500 rounded-full animate-pulse ml-2"></div>
                  <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-700 transition-all duration-300">SIH 2025</span>
                </div>
              </div>

              {/* Center Section: Partner Logos - Smaller on Mobile */}
              <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
                <button
                  onClick={() => window.open("https://www.invertisuniversity.ac.in/", "_blank")}
                  className="group"
                >
                  <img
                    src="/invertis.png"
                    alt="Invertis University"
                    className="h-6 sm:h-8 lg:h-9 w-auto transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
                  />
                </button>
                <button
                  onClick={() => window.open("https://invertisincubation.com/", "_blank")}
                  className="group"
                >
                  <img
                    src="/images/incub.png"
                    alt="Invertis Incubation Center"
                    className="h-6 sm:h-8 lg:h-9 w-auto transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
                  />
                </button>
                <button
                  onClick={() => window.open("https://www.sih.gov.in", "_blank")}
                  className="group"
                >
                  <img
                    src="/SIH.png"
                    alt="Smart India Hackathon"
                    className="h-6 sm:h-8 lg:h-9 w-auto transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
                  />
                </button>
              </div>

              {/* Right Section: Event Info & CTA - More Compact */}
              <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                <div className="hidden lg:flex flex-col items-end text-right">
                  <div className="flex items-center space-x-1 text-gray-600">
                    <MapPin className="w-3 h-3 text-orange-500" />
                    <span className="text-xs font-medium">Invertis University, Bareilly</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-600 mt-0.5">
                    <Calendar className="w-3 h-3 text-orange-500" />
                    <time dateTime="2025-09-12" className="text-xs font-medium">
                      12-13th Sept, 2025
                    </time>
                  </div>
                </div>

                {/* Mobile Menu Button for Non-Scrolled State */}
                <button
                  onClick={() => setIsNavOpen(!isNavOpen)}
                  className="md:hidden p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Toggle mobile menu"
                >
                  <Menu className="w-5 h-5 text-gray-700" />
                </button>


              </div>
            </>
          )}

          {/* Enhanced Scrolled Layout - Professional Design */}
          {isScrolled && (
            <>
              {/* Left: Enhanced Brand with Logos */}
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div
                  className="flex items-center space-x-1 sm:space-x-2 cursor-pointer group"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  <h1 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Hack</h1>
                  <h1 className="text-xl sm:text-2xl lg:text-2xl text-orange-600 font-bold">भूमि</h1>
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse ml-1"></div>
                  <span className=" sm:inline text-base lg:text-lg font-bold text-blue-700">SIH 2025</span>
                </div>

                {/* Partner Logos - Compact for Scrolled State */}

              </div>

              {/* Center: Enhanced Navigation with All Fields */}
              <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
                <a href="#SIH" className="relative text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 text-xs xl:text-sm group">
                  ABOUT SIH
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#program" className="relative text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 text-xs xl:text-sm group">
                  TIMELINE
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#instructions" className="relative text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 text-xs xl:text-sm group">
                  INSTRUCTIONS
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#problem-statements" className="relative text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 text-xs xl:text-sm group">
                  PROBLEM STATEMENTS
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#prizes" className="relative text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 text-xs xl:text-sm group">
                  PRIZES
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#team" className="relative text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 text-xs xl:text-sm group">
                  TEAM
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#faq" className="relative text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 text-xs xl:text-sm group">
                  FAQ'S
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
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
                    <span className="text-xs font-medium">12-13 Sept</span>
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

      {/* Enhanced Announcement Banner */}
      {isScrolled && (
        <div className="bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 text-white py-2.5 overflow-hidden shadow-lg mt-2">
          <div className="whitespace-nowrap animate-marquee-slow font-bold text-center text-sm sm:text-base tracking-wide">
            🚨 Registration Open - Form Your Team Now! • Deadline: 31st August • Don't Miss Out! 🚨
          </div>
        </div>
      )}

      {/* Enhanced Mobile Navigation Menu - Complete */}
      {isNavOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-200/50 z-40 animate-fade-in-up">
          <nav className="px-3 py-4 space-y-1">
            <a
              href="#SIH"
              className="block py-2.5 px-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-all text-sm"
              onClick={() => setIsNavOpen(false)}
            >
              ABOUT SIH
            </a>
            <a
              href="#program"
              className="block py-2.5 px-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-all text-sm"
              onClick={() => setIsNavOpen(false)}
            >
              TIMELINE
            </a>
            <a
              href="#instructions"
              className="block py-2.5 px-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-all text-sm"
              onClick={() => setIsNavOpen(false)}
            >
              INSTRUCTIONS
            </a>
            <a
              href="#problem-statements"
              className="block py-2.5 px-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-all text-sm"
              onClick={() => setIsNavOpen(false)}
            >
              PROBLEM STATEMENTS
            </a>
            <a
              href="#prizes"
              className="block py-2.5 px-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-all text-sm"
              onClick={() => setIsNavOpen(false)}
            >
              PRIZES
            </a>
            <a
              href="#team"
              className="block py-2.5 px-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-all text-sm"
              onClick={() => setIsNavOpen(false)}
            >
              TEAM
            </a>
            <a
              href="#faq"
              className="block py-2.5 px-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg font-medium transition-all text-sm"
              onClick={() => setIsNavOpen(false)}
            >
              FAQ'S
            </a>

            {/* Mobile Event Info - Compact */}
            <div className="pt-3 mt-3 border-t border-gray-200">
              <div className="flex items-center space-x-2 text-gray-600 px-3 py-1.5">
                <MapPin className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                <span className="text-xs">Invertis University, Bareilly</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 px-3 py-1.5">
                <Calendar className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                <span className="text-xs">12-13th Sept, 2025</span>
              </div>

              {/* Mobile CTA Button */}
              <div className="px-3 pt-3">
                <Button
                  onClick={() => {
                    window.open("https://forms.gle/fsCyrMx66uLinKU68", "_blank");
                    setIsNavOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-2.5 text-sm rounded-lg shadow-lg transition-all duration-300"
                >
                  Register Your Team
                </Button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}