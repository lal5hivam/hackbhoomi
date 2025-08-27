"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Trophy, Users, Target, Award, Play, Calendar, MapPin, ExternalLink, Lightbulb, Rocket, Star } from "lucide-react"

export default function AboutSIH() {
  const features = [
    {
      icon: Trophy,
      title: "What is SIH?",
      description: "India's largest open innovation model designed to promote problem-solving and product innovation among students nationwide.",
      color: "from-orange-500 to-red-500",
      textColor: "text-orange-400"
    },
    {
      icon: Users,
      title: "Scale & Impact",
      description: "Brings together lakhs of students from across India to solve real-world challenges posed by ministries and industries.",
      color: "from-blue-500 to-cyan-500",
      textColor: "text-blue-400"
    },
    {
      icon: Award,
      title: "Opportunities",
      description: "Winners receive cash prizes up to ₹1.5 Lakhs, recognition, mentorship, and chances to work on impactful projects.",
      color: "from-green-500 to-emerald-500",
      textColor: "text-green-400"
    }
  ]

  const stats = [
    { label: "Students Participated", value: "15+ Lakh", icon: Users },
    { label: "Problem Statements", value: "1000+", icon: Target },
    { label: "Winning Teams", value: "500+", icon: Trophy },
    { label: "Prize Money", value: "₹1.5L", icon: Award }
  ]

  return (
    <section id="SIH" className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-12 sm:py-16 lg:py-20 text-white overflow-hidden" aria-labelledby="about-sih-heading">

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Professional Header */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="secondary" className="mb-4 bg-orange-500/20 text-orange-300 border-orange-500/30 px-4 py-2">
            <Rocket className="w-4 h-4 mr-2" />
            Innovation Platform
          </Badge>
          <h2 id="about-sih-heading" className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-4 sm:mb-6">
            Smart India Hackathon 2025
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-200/90 max-w-3xl mx-auto leading-relaxed">
            India's largest open innovation platform connecting young minds with real-world challenges
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <CardContent className="p-4 sm:p-6 text-center">
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-orange-400" />
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-blue-200/80">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 sm:mb-16">

          {/* Feature Cards */}
          <div className="space-y-4 sm:space-y-6">
            {features.map((feature, index) => (
              <Card key={index} className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <CardTitle className={`text-lg sm:text-xl lg:text-2xl font-bold ${feature.textColor}`}>
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Image */}
          <div className="flex justify-center">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 w-full">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl text-white flex items-center">
                  <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-yellow-400" />
                  SIH Process Flow
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="/SIH-process.png"
                  alt="SIH Process Flow showing the complete hackathon journey"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="bg-white/20 mb-12 sm:mb-16" />

        {/* Video & Timeline Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* YouTube Video */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl text-white flex items-center justify-between">
                <div className="flex items-center">
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-red-400" />
                  SIH 2024 Highlights
                </div>
                <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 hover:bg-red-400/10">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </CardTitle>
              <CardDescription className="text-gray-400">
                Watch the journey of innovation and excellence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video rounded-lg overflow-hidden shadow-2xl bg-black/20">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/znMbKz6ZPno"
                  title="SIH 2024: Smart India Hackathon Highlights"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl text-white flex items-center">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-orange-400" />
                SIH 2025 Timeline
              </CardTitle>
              <CardDescription className="text-gray-400">
                Complete process and important dates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="/timeline.png"
                alt="SIH 2025 Timeline showing all important dates and milestones"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}