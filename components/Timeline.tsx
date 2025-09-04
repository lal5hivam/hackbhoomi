"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  UserPlus, 
  Users, 
  Clock, 
  FileText, 
  Trophy, 
  Rocket,
  Calendar,
  Sparkles
} from "lucide-react"

const events = [
  {
    title: "Registration Opens",
    date: "20th Aug",
    desc: "The race begins — Register, Team Up, Get Set & Ideate!",
    icon: UserPlus,
    color: "bg-blue-500"
  },
  {
    title: "Mentorship Sessions",
    date: "Ongoing",
    desc: "Get expert guidance regarding your ideas and solutions!",
    icon: Users,
    color: "bg-yellow-500"
  },
  {
    title: "Registration Deadline",
    date: "6th Sept",
    desc: "Get ready to innovate — Last chance to register!",
    icon: Clock,
    color: "bg-red-500"
  },
  {
    title: "Idea Submission Deadline",
    date: "7th Sept",
    desc: "Submit your innovative ideas and solutions!",
    icon: FileText,
    color: "bg-green-500"
  },
  {
    title: "Shortlisted Teams Announcement",
    date: "10th Sept",
    desc: "And the chosen ones are... Meet the finalists!",
    icon: Trophy,
    color: "bg-purple-500"
  },
  {
    title: "HACKATHON DAY - HackBhoomi 2025",
    date: "12th-13th Sept",
    desc: "Let the hacking begin! Build, code and create!",
    icon: Rocket,
    color: "bg-orange-500"
  },
];

export default function Timeline() {
  return (
    <section id="program" className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            Event Journey
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 sm:mb-6">
            HackBhoomi Timeline
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your complete journey from registration to representing Invertis University at SIH 2025
          </p>
        </div>

        {/* Simple Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 h-full rounded-full"></div>
          
          <div className="space-y-8 md:space-y-12">
            {events.map((event, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`w-12 h-12 ${event.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <event.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white">{event.title}</h3>
                          {event.date && (
                            <Badge variant="secondary" className="mt-1 bg-white/10 text-gray-300 border-white/20">
                              <Calendar className="w-3 h-3 mr-1" />
                              {event.date}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{event.desc}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className={`w-6 h-6 ${event.color} rounded-full border-4 border-white shadow-lg z-10`}></div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}