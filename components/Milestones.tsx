"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Lightbulb, Zap, Trophy, Sparkles, Target, Users, Clock } from "lucide-react"

const features = [
  { 
    title: "Build & Create", 
    description: "Develop innovative solutions using cutting-edge technologies",
    icon: Code2,
    color: "from-blue-500 to-cyan-500"
  },
  { 
    title: "Think Outside", 
    description: "Push boundaries with creative and unique approaches",
    icon: Lightbulb,
    color: "from-purple-500 to-pink-500"
  },
  { 
    title: "Fast-Paced", 
    description: "Race against time in an exciting 2-day challenge",
    icon: Zap,
    color: "from-orange-500 to-red-500"
  },
  { 
    title: "Win Big", 
    description: "Compete for amazing prizes and recognition",
    icon: Trophy,
    color: "from-yellow-500 to-orange-500"
  },
];

export default function Milestones() {
  return (
    <section id="Milestones" className="bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="secondary" className="mb-4 bg-yellow-500/20 text-yellow-300 border-yellow-500/30 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            About The Event
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6">
            <span className="text-white">About </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Inverthon 2.0</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-200/90 max-w-3xl mx-auto leading-relaxed">
            A premier inter-college competition designed to challenge and inspire the next generation of innovators and problem solvers
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {features.map((item, index) => (
            <Card 
              key={index} 
              className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <CardContent className="p-6 sm:p-8 text-center">
                {/* Icon */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-5 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What is Inverthon Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/10">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
              <Target className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                What is Inverthon?
              </h3>
            </div>

            {/* Description Paragraphs */}
            <div className="space-y-4 sm:space-y-5 text-blue-100/90">
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                <span className="font-semibold text-yellow-300">Inverthon 2.0</span> is an inter-college innovation competition that brings together the brightest minds from colleges across the region. Participants will tackle real-world challenges through creative problem-solving, technical expertise, and teamwork.
              </p>
              
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                Over the course of <span className="font-semibold text-orange-400">3-Days</span>, teams will conceptualize, design, and develop solutions to challenging problems. Whether you&apos;re into software development, hardware hacking, design, or entrepreneurship, Inverthon has something for everyone.
              </p>
              
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                Join us for an unforgettable experience filled with learning, networking, mentorship from industry experts, and the chance to showcase your skills on a competitive platform.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5 text-orange-400" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white">3-Days</div>
                <div className="text-xs sm:text-sm text-blue-200/70">Non-Stop Hacking</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white">150+</div>
                <div className="text-xs sm:text-sm text-blue-200/70">Participating Teams</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white">₹60K+</div>
                <div className="text-xs sm:text-sm text-blue-200/70">Prize Pool</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}