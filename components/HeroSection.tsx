"use client"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center" role="main">
      {/* Enhanced gradient overlay with animated particles effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/60 z-10"></div>

      {/* Dynamic background elements */}


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">

        {/* Enhanced Announcement Badge */}
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-md border border-orange-400/30 text-white mb-8 animate-fade-in-up shadow-lg">
          <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 animate-pulse"></div>
          <span className="text-sm sm:text-base font-semibold">🎯 Your Gateway to National Recognition</span>
        </div>

        {/* Enhanced Main Heading with better animations */}
        <div className="mb-12 animate-fade-in-up">
          <h1 className="leading-tight">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 mb-3 animate-slide-in-left">
              SMART INDIA
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 mb-3 animate-pulse-glow">
              HACKATHON
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-mono text-white animate-slide-in-right">
              2025
            </span>
          </h1>
        </div>

        {/* Enhanced Subtitle with better typography */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-12 max-w-4xl mx-auto leading-relaxed font-medium animate-fade-in-up">
          Join India's largest innovation ecosystem and transform your ideas into
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-bold"> game-changing solutions</span>
        </p>

        {/* Enhanced CTA Buttons with better styling */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 animate-fade-in-up">
          <Button
            onClick={() => window.open("https://forms.gle/fsCyrMx66uLinKU68", "_blank")}
            className="group relative bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-bold text-lg sm:text-xl px-10 sm:px-14 py-4 sm:py-6 rounded-2xl shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 hover:scale-110 transform overflow-hidden"
          >
            <span className="relative z-10">Register Your Team</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </Button>
          <Button
            onClick={() => document.getElementById('SIH')?.scrollIntoView({ behavior: 'smooth' })}
            className="group border-2 border-white/40 bg-white/5 backdrop-blur-md text-white hover:bg-white/15 hover:border-white/60 font-semibold text-lg px-8 sm:px-12 py-4 sm:py-6 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <span className="group-hover:text-orange-300 transition-colors">Explore SIH</span>
          </Button>
        </div>

        {/* Enhanced Key Stats with better visual hierarchy */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto animate-fade-in-up">
          <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 hover:bg-white/15">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-3 group-hover:from-orange-300 group-hover:to-red-400 transition-all">
              ₹1.5L+
            </div>
            <div className="text-white/90 text-sm sm:text-base font-semibold">Prize Money</div>
            <div className="text-white/60 text-xs sm:text-sm mt-1">Per winning team</div>
          </div>
          <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:bg-white/15">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 mb-3 group-hover:from-blue-300 group-hover:to-cyan-400 transition-all">
              254+
            </div>
            <div className="text-white/90 text-sm sm:text-base font-semibold">Problem Statements</div>
            <div className="text-white/60 text-xs sm:text-sm mt-1">Across 17 tracks</div>
          </div>
          <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105 hover:bg-white/15">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-3 group-hover:from-green-300 group-hover:to-emerald-400 transition-all">
              48hrs
            </div>
            <div className="text-white/90 text-sm sm:text-base font-semibold">Innovation Marathon</div>
            <div className="text-white/60 text-xs sm:text-sm mt-1">Non-stop coding</div>
          </div>
        </div> */}

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}