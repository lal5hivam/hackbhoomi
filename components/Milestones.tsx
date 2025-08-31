"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, GraduationCap, Building2, FileText, Rocket, Sparkles } from "lucide-react"

const milestones = [
  { 
    number: "13,91,884+", 
    label: "Participating Students",
    icon: Users,
    color: "from-blue-500 to-cyan-500"
  },
  { 
    number: "12,800+", 
    label: "SIH Alumni Network",
    icon: GraduationCap,
    color: "from-green-500 to-emerald-500"
  },
  { 
    number: "6,497", 
    label: "Participating Institutes",
    icon: Building2,
    color: "from-purple-500 to-pink-500"
  },
  { 
    number: "2,877", 
    label: "Problem Statements",
    icon: FileText,
    color: "from-orange-500 to-red-500"
  },
  { 
    number: "133", 
    label: "Startup Submissions",
    icon: Rocket,
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
            Impact & Scale
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-4 sm:mb-6">
            SIH MILESTONES
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-200/90 max-w-2xl mx-auto">
            Witness the scale and impact of India&apos;s largest innovation platform
          </p>
        </div>

        {/* Milestones Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {milestones.map((item, index) => (
            <Card 
              key={index} 
              className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-4 sm:p-6 text-center">
                {/* Icon */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center`}>
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>

                {/* Number */}
                <div className={`text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br ${item.color} mb-2 sm:mb-3`}>
                  {item.number}
                </div>

                {/* Label */}
                <div className="text-xs sm:text-sm lg:text-base text-gray-300 font-medium">
                  {item.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}