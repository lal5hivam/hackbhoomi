"use client"

import { Trophy, Play, Calendar, MapPin } from "lucide-react"

export default function AboutSIH() {
  return (
    <section id="SIH" className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 text-white" aria-labelledby="about-sih-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 id="about-sih-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-6">
            Smart India Hackathon 2025
          </h2>
          <p className="text-xl sm:text-2xl text-blue-200 max-w-3xl mx-auto">
            India's largest open innovation platform for young minds
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left side: Enhanced Content Cards */}
          <div className="space-y-6">
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl flex items-center justify-center mr-4">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-orange-400">What is SIH?</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                The Smart India Hackathon (SIH) is India's largest open innovation model, 
                designed to promote a culture of problem-solving and product innovation among students.
              </p>
            </div>

            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-400">Scale & Impact</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Every year, SIH brings together lakhs of students from across the country 
                to solve real-world challenges posed by ministries, industries, and organizations.
              </p>
            </div>

            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-400">Opportunities</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Winners receive cash prizes up to ₹1.5 Lakhs, recognition, mentorship opportunities, 
                and the chance to work on impactful government and industry projects.
              </p>
            </div>
          </div>

          {/* Right side: Process Image */}
          <div className="flex justify-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <img 
                src="/SIH-process.png" 
                alt="SIH Process Flow" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Video & Timeline Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* YouTube Video */}
          <div className="order-2 lg:order-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Play className="w-6 h-6 mr-3 text-red-400" />
                Watch SIH 2024 Highlights
              </h3>
              <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/znMbKz6ZPno"
                  title="SIH 2024: Smart India Hackathon Highlights" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Timeline Image */}
          <div className="order-1 lg:order-2">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-orange-400" />
                SIH 2025 Process
              </h3>
              <img 
                src="/timeline.png" 
                alt="SIH 2025 Timeline and Process" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}