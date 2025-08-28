"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { 
  Download, 
  Users, 
  Code, 
  Trophy, 
  CheckCircle, 
  ArrowRight,
  FileText,
  Lightbulb,
  Target,
  Award,
  ExternalLink,
  Sparkles
} from "lucide-react"

const steps = [
  {
    phase: "Phase 1",
    title: "Team Formation & Preparation",
    icon: Users,
    color: "from-blue-600 to-cyan-600",
    glowColor: "shadow-blue-500/25",
    description: "Form your team and prepare for the ultimate innovation challenge",
    requirements: [
      "Form teams of up to 6 members (female participation encouraged)",
      "Browse SIH 2025 official tracks and problem statements",
      "Choose your track and start ideating solutions",
      "Research and understand the problem domain thoroughly",
      "Plan your approach and technology stack"
    ],
    action: {
      label: "Team Instructions",
      type: "download",
      file: "/TeamInstruction.pdf",
      icon: Download
    }
  },
  {
    phase: "Phase 2", 
    title: "HackBhoomi - Internal Hackathon",
    icon: Code,
    color: "from-orange-600 to-red-600",
    glowColor: "shadow-orange-500/25",
    description: "36 hours of intensive coding, building, and innovation at Invertis University",
    requirements: [
      "Build a working prototype of your solution",
      "Develop and test your application thoroughly",
      "Prepare a compelling presentation and demo",
      "Access mentors and technical support throughout",
      "Present to expert judges and industry professionals"
    ],
    action: {
      label: "Register Now",
      type: "external",
      url: "https://forms.gle/fsCyrMx66uLinKU68",
      icon: ExternalLink
    }
  },
  {
    phase: "Phase 3",
    title: "Represent Invertis at SIH 2025",
    icon: Trophy,
    color: "from-green-600 to-emerald-600",
    glowColor: "shadow-green-500/25",
    description: "Top teams compete at the national level for recognition and prizes",
    requirements: [
      "Top 25 teams selected to represent Invertis University",
      "Compete at national Smart India Hackathon 2025",
      "Win cash prizes up to ₹1.5 Lakhs per team",
      "Gain national recognition and industry connections",
      "Opportunity to work on real government projects"
    ],
    action: {
      label: "Idea Submission Form",
      type: "download", 
      file: "/IdeaSubmission.pdf",
      icon: Download
    }
  }
];

const highlights = [
  { icon: Target, label: "Problem Solving", value: "Real-world challenges", color: "text-blue-600" },
  { icon: Award, label: "Prize Money", value: "Up to ₹1.5 Lakhs", color: "text-green-600" },
  { icon: Users, label: "Team Size", value: "Up to 6 members", color: "text-purple-600" },
  { icon: Lightbulb, label: "Innovation", value: "Cutting-edge solutions", color: "text-orange-600" }
];

export default function Instructions() {
  const handleDownload = (filename: string) => {
    const link = document.createElement('a');
    link.href = filename;
    link.download = filename.split('/').pop() || 'download.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="instructions" className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden" aria-labelledby="instructions-heading">
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-28 h-28 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Header */}
        <div className="text-center mb-8 sm:mb-10">
          <Badge variant="secondary" className="mb-3 bg-white/80 backdrop-blur-md text-indigo-700 border-indigo-200/50 px-3 py-1.5 shadow-lg text-sm">
            <FileText className="w-3 h-3 mr-1.5" />
            Participation Guide
          </Badge>
          <h2 id="instructions-heading" className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-3 sm:mb-4">
            How to Participate
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700/90 max-w-2xl mx-auto leading-relaxed">
            Your complete step-by-step guide to joining HackBhoomi and representing Invertis University at SIH 2025
          </p>
        </div>

        {/* Compact Highlights with Glass Morphism */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
          {highlights.map((highlight, index) => (
            <Card key={index} className="bg-white/60 backdrop-blur-md border-white/40 hover:bg-white/70 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-500 hover:scale-105 group">
              <CardContent className="p-3 sm:p-4 text-center">
                <div className="relative">
                  <highlight.icon className={`w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 ${highlight.color} group-hover:scale-110 transition-transform duration-300`} />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                </div>
                <div className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1">{highlight.value}</div>
                <div className="text-xs text-gray-600">{highlight.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Compact Steps with Professional Glass Morphism */}
        <div className="space-y-6 sm:space-y-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-white/40 backdrop-blur-xl border-white/30 hover:bg-white/50 hover:shadow-xl transition-all duration-500 hover:scale-[1.01] group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="pb-3 sm:pb-4 relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center shadow-lg ${step.glowColor} hover:shadow-xl flex-shrink-0 group-hover:scale-110 transition-all duration-300 ring-1 ring-white/20`}>
                      <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-1.5 font-medium bg-white/80 backdrop-blur-sm text-gray-700 border-white/40 text-xs">
                        {step.phase}
                      </Badge>
                      <CardTitle className="text-lg sm:text-xl lg:text-2xl text-gray-900 leading-tight">
                        {step.title}
                      </CardTitle>
                    </div>
                  </div>
                  
                  {/* Compact Action Button */}
                  <Button
                    size="sm"
                    className={`bg-gradient-to-r ${step.color} hover:opacity-90 text-white shadow-lg hover:shadow-xl ${step.glowColor} transition-all duration-300 flex-shrink-0 backdrop-blur-sm border border-white/20`}
                    onClick={() => {
                      if (step.action.type === 'download') {
                        handleDownload(step.action.file!);
                      } else {
                        window.open(step.action.url!, '_blank');
                      }
                    }}
                  >
                    <step.action.icon className="w-3 h-3 mr-1.5" />
                    {step.action.label}
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="pt-0 relative z-10">
                <p className="text-gray-700/90 text-sm leading-relaxed mb-4">
                  {step.description}
                </p>

                <Separator className="mb-4 bg-white/30" />

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm mb-2 flex items-center">
                    <Sparkles className="w-3 h-3 mr-1.5 text-indigo-600" />
                    Key Requirements:
                  </h4>
                  <div className="grid gap-2">
                    {step.requirements.map((requirement, idx) => (
                      <div key={idx} className="flex items-start space-x-2 p-2.5 rounded-lg bg-white/30 backdrop-blur-sm border border-white/20 hover:bg-white/40 transition-all duration-300">
                        <CheckCircle className="w-3.5 h-3.5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compact Progress Indicator */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center mt-6">
                    <div className="flex items-center space-x-2 text-gray-400 bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-pulse"></div>
                      <ArrowRight className="w-3 h-3" />
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse animation-delay-500"></div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Compact Call to Action with Glass Morphism */}
        <div className="text-center mt-8 sm:mt-10">
          <Card className="bg-gradient-to-r from-indigo-600/90 via-purple-600/90 to-pink-600/90 backdrop-blur-xl border-white/20 max-w-xl mx-auto shadow-xl hover:shadow-indigo-500/25 transition-all duration-500 hover:scale-105">
            <CardContent className="p-5 sm:p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-50"></div>
              <div className="relative z-10">
                <Trophy className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 text-yellow-300 animate-pulse" />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Ready to Innovate?</h3>
                <p className="text-indigo-100/90 mb-4 text-sm leading-relaxed">
                  Join hundreds of students in solving India's most pressing challenges and represent Invertis University at the national level
                </p>
                <Button 
                  size="default"
                  className="bg-white/90 backdrop-blur-sm text-indigo-600 hover:bg-white hover:shadow-lg font-semibold px-5 sm:px-6 py-2.5 sm:py-3 border border-white/20 transition-all duration-300 hover:scale-105"
                  onClick={() => window.open("https://forms.gle/fsCyrMx66uLinKU68", "_blank")}
                >
                  Start Your Journey
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}