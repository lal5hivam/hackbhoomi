"use client"

import { useState } from "react"
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
  Sparkles,
  Cpu,
  Monitor,
  Bot,
  Crosshair,
  Route,
  Zap,
  Shield,
  Clock,
  AlertTriangle,
  Wrench,
  Rocket
} from "lucide-react"

// Category and Competition Types
type Category = "open-innovation" | "robowars"
type OpenInnovationTrack = "software" | "hardware"
type RoboWarsCompetition = "balloon-pop" | "obstacle-path"

// Open Innovation Data
const openInnovationTracks = {
  software: {
    title: "Software Track",
    icon: Monitor,
    color: "from-blue-600 to-cyan-600",
    glowColor: "shadow-blue-500/25",
    description: "Build innovative software solutions using cutting-edge technologies to solve real-world problems",
    highlights: [
      { icon: Code, label: "Tech Stack", value: "Any Technology", color: "text-blue-600" },
      { icon: Users, label: "Team Size", value: "3-6 Members", color: "text-purple-600" },
      { icon: Clock, label: "Duration", value: "24 Hours", color: "text-green-600" },
      { icon: Award, label: "Prizes", value: "₹25K+", color: "text-orange-600" }
    ],
    instructions: [
      "Form a team of 3-6 members with diverse skills (developers, designers, presenters)",
      "Browse and select a problem statement from the past year SIH problem statements",
      "Choose your preferred technology stack (Web, Mobile, AI/ML, Blockchain, etc.)",
      "Prepare your development environment and required tools before the event",
      "Build a working prototype/MVP within the 24-hour hackathon duration",
      "Create a compelling pitch deck explaining your solution's impact and feasibility",
      "Present your solution to judges with a live demo"
    ],
    rules: [
      "All code must be written during the hackathon - no pre-built solutions",
      "Teams can use open-source libraries and APIs",
      "Solution must directly address the chosen problem statement",
      "Working demo is mandatory for final evaluation",
      "Plagiarism will result in immediate disqualification"
    ]
  },
  hardware: {
    title: "Hardware Track",
    icon: Cpu,
    color: "from-orange-600 to-red-600",
    glowColor: "shadow-orange-500/25",
    description: "Design and build hardware prototypes combining electronics, IoT, and embedded systems",
    highlights: [
      { icon: Wrench, label: "Components", value: "Provided", color: "text-orange-600" },
      { icon: Users, label: "Team Size", value: "3-6 Members", color: "text-purple-600" },
      { icon: Clock, label: "Duration", value: "24 Hours", color: "text-green-600" },
      { icon: Award, label: "Prizes", value: "₹25K+", color: "text-red-600" }
    ],
    instructions: [
      "Form a team of 3-6 members with hardware and software expertise",
      "Select a hardware-focused problem statement from past SIH challenges",
      "Plan your prototype using Arduino, Raspberry Pi, ESP32, or similar platforms",
      "Bring your own basic components; additional components will be available",
      "Integrate sensors, actuators, and IoT connectivity as needed",
      "Develop both hardware prototype and supporting software/app",
      "Document your circuit design and present a working demonstration"
    ],
    rules: [
      "Hardware prototypes must be built during the hackathon",
      "Pre-designed PCBs are not allowed; breadboard prototypes are acceptable",
      "Teams must demonstrate real hardware functionality, not simulations",
      "Safety guidelines must be followed for all electrical components",
      "All components used must be declared to the organizers"
    ]
  }
}

const roboWarsCompetitions = {
  "balloon-pop": {
    title: "Balloon Popping RoboWar",
    icon: Crosshair,
    color: "from-red-600 to-pink-600",
    glowColor: "shadow-red-500/25",
    description: "An intense battle where robocars compete to pop opponents' balloons while protecting their own",
    highlights: [
      { icon: Bot, label: "Robot Type", value: "Wired/Wireless", color: "text-red-600" },
      { icon: Users, label: "Team Size", value: "2-4 Members", color: "text-purple-600" },
      { icon: Zap, label: "Arena", value: "Battle Zone", color: "text-yellow-600" },
      { icon: Trophy, label: "Format", value: "Elimination", color: "text-green-600" }
    ],
    instructions: [
      "Build a robocar with balloon mount attachment at the rear",
      "Each robot will have a balloon mounted on a designated spot",
      "Robots compete in 1v1 or multi-robot battle rounds",
      "The objective is to pop opponents' balloons using your robot",
      "Robot whose balloon gets popped is eliminated from the round",
      "Last robot standing with intact balloon wins the round",
      "Finals will be a knockout tournament format"
    ],
    rules: [
      "Robot dimensions: Max 30cm x 30cm x 30cm (excluding balloon mount)",
      "Weight limit: Maximum 3kg including all attachments",
      "Balloon position and mount specifications will be standardized",
      "No sharp/dangerous weapons - only pushing/bumping mechanisms allowed",
      "Remote control must be wired or wireless (2.4GHz)",
      "Battery voltage must not exceed 24V DC",
      "Intentional damage to arena or safety violations = disqualification"
    ],
    specifications: [
      "Arena Size: 4m x 4m enclosed battle zone",
      "Match Duration: 3 minutes per round",
      "Balloon Size: Standard 9-inch latex balloons (provided)",
      "Mount Height: 15-20cm from robot base"
    ]
  },
  "obstacle-path": {
    title: "Obstacle Path Challenge",
    icon: Route,
    color: "from-green-600 to-emerald-600",
    glowColor: "shadow-green-500/25",
    description: "Navigate your robocar through a challenging obstacle course to reach the destination in minimum time",
    highlights: [
      { icon: Bot, label: "Robot Type", value: "Autonomous/Manual", color: "text-green-600" },
      { icon: Users, label: "Team Size", value: "2-4 Members", color: "text-purple-600" },
      { icon: Route, label: "Course", value: "Multi-Level", color: "text-blue-600" },
      { icon: Clock, label: "Format", value: "Time Trial", color: "text-orange-600" }
    ],
    instructions: [
      "Design a robocar optimized for maneuverability and speed",
      "Robot must navigate through various obstacles including ramps, tunnels, and barriers",
      "Course includes tight turns, uneven surfaces, and precision challenges",
      "Both autonomous and manual control modes are allowed",
      "Complete the course from start to finish line",
      "Time starts when robot crosses start line and stops at finish",
      "Touching or knocking obstacles adds time penalties"
    ],
    rules: [
      "Robot dimensions: Max 25cm x 25cm x 20cm",
      "Weight limit: Maximum 2kg",
      "Both wired and wireless control permitted",
      "Autonomous robots get bonus time reduction",
      "Touching obstacles: +5 seconds penalty per touch",
      "Knocking down obstacles: +10 seconds penalty",
      "Robot must complete course unaided - no manual intervention in arena",
      "Maximum 2 attempts allowed; best time counts"
    ],
    specifications: [
      "Course Length: Approximately 10-15 meters",
      "Obstacle Types: Ramps, Tunnels, Narrow Paths, Speed Bumps, Maze Sections",
      "Surface: Mixed terrain (smooth, rough, inclined)",
      "Maximum Course Completion Time: 5 minutes"
    ]
  }
}

export default function Instructions() {
  const [activeCategory, setActiveCategory] = useState<Category>("open-innovation")
  const [activeOpenTrack, setActiveOpenTrack] = useState<OpenInnovationTrack>("software")
  const [activeRoboWars, setActiveRoboWars] = useState<RoboWarsCompetition>("balloon-pop")

  const handleDownload = (filename: string) => {
    const link = document.createElement('a');
    link.href = filename;
    link.download = filename.split('/').pop() || 'download.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const currentOpenTrack = openInnovationTracks[activeOpenTrack]
  const currentRoboWars = roboWarsCompetitions[activeRoboWars]

  return (
    <section id="instructions" className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden" aria-labelledby="instructions-heading">
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-28 h-28 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <Badge variant="secondary" className="mb-3 bg-white/80 backdrop-blur-md text-indigo-700 border-indigo-200/50 px-3 py-1.5 shadow-lg text-sm">
            <FileText className="w-3 h-3 mr-1.5" />
            Competition Guide
          </Badge>
          <h2 id="instructions-heading" className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-3 sm:mb-4">
            Competition Categories
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700/90 max-w-2xl mx-auto leading-relaxed">
            Choose your arena - Build innovative solutions or battle with robots!
          </p>
        </div>

        {/* Main Category Tabs */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex bg-white/60 backdrop-blur-md rounded-2xl p-1.5 border border-white/40 shadow-lg">
            <button
              onClick={() => setActiveCategory("open-innovation")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                activeCategory === "open-innovation"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
              }`}
            >
              <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Open Innovation</span>
            </button>
            <button
              onClick={() => setActiveCategory("robowars")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                activeCategory === "robowars"
                  ? "bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
              }`}
            >
              <Bot className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>RoboWars</span>
            </button>
          </div>
        </div>

        {/* Category Description Card */}
        <Card className="bg-white/40 backdrop-blur-xl border-white/30 mb-6 sm:mb-8 overflow-hidden">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r ${
                activeCategory === "open-innovation" 
                  ? "from-blue-600 to-purple-600" 
                  : "from-red-600 to-orange-600"
              } shadow-lg flex-shrink-0`}>
                {activeCategory === "open-innovation" 
                  ? <Lightbulb className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  : <Bot className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                }
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                  {activeCategory === "open-innovation" ? "Open Innovation Category" : "RoboWars Category"}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {activeCategory === "open-innovation" 
                    ? "Solve real-world problems from past SIH problem statements. Choose between Software or Hardware track based on your expertise."
                    : "Battle your robots in exciting competitions! Participate in Balloon Popping RoboWar or navigate through the Obstacle Path Challenge."
                  }
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sub-category Tabs */}
        <div className="flex justify-center mb-6 sm:mb-8">
          {activeCategory === "open-innovation" ? (
            <div className="inline-flex bg-white/50 backdrop-blur-sm rounded-xl p-1 border border-white/30 shadow-md">
              <button
                onClick={() => setActiveOpenTrack("software")}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  activeOpenTrack === "software"
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md"
                    : "text-gray-600 hover:text-blue-600 hover:bg-white/50"
                }`}
              >
                <Monitor className="w-4 h-4" />
                <span>Software Track</span>
              </button>
              <button
                onClick={() => setActiveOpenTrack("hardware")}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  activeOpenTrack === "hardware"
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md"
                    : "text-gray-600 hover:text-orange-600 hover:bg-white/50"
                }`}
              >
                <Cpu className="w-4 h-4" />
                <span>Hardware Track</span>
              </button>
            </div>
          ) : (
            <div className="inline-flex bg-white/50 backdrop-blur-sm rounded-xl p-1 border border-white/30 shadow-md">
              <button
                onClick={() => setActiveRoboWars("balloon-pop")}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  activeRoboWars === "balloon-pop"
                    ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-md"
                    : "text-gray-600 hover:text-red-600 hover:bg-white/50"
                }`}
              >
                <Crosshair className="w-4 h-4" />
                <span>Balloon Pop</span>
              </button>
              <button
                onClick={() => setActiveRoboWars("obstacle-path")}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  activeRoboWars === "obstacle-path"
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md"
                    : "text-gray-600 hover:text-green-600 hover:bg-white/50"
                }`}
              >
                <Route className="w-4 h-4" />
                <span>Obstacle Path</span>
              </button>
            </div>
          )}
        </div>

        {/* Content Based on Selection */}
        {activeCategory === "open-innovation" ? (
          // Open Innovation Content
          <div className="space-y-6">
            {/* Track Header Card */}
            <Card className={`bg-white/40 backdrop-blur-xl border-white/30 overflow-hidden hover:shadow-xl transition-all duration-500`}>
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${currentOpenTrack.color} rounded-xl flex items-center justify-center shadow-lg ${currentOpenTrack.glowColor}`}>
                    <currentOpenTrack.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl sm:text-2xl text-gray-900 mb-1">{currentOpenTrack.title}</CardTitle>
                    <p className="text-gray-600 text-sm sm:text-base">{currentOpenTrack.description}</p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {currentOpenTrack.highlights.map((highlight, index) => (
                <Card key={index} className="bg-white/60 backdrop-blur-md border-white/40 hover:bg-white/70 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                  <CardContent className="p-3 sm:p-4 text-center">
                    <highlight.icon className={`w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 ${highlight.color} group-hover:scale-110 transition-transform duration-300`} />
                    <div className="text-sm sm:text-base font-bold text-gray-900 mb-1">{highlight.value}</div>
                    <div className="text-xs text-gray-600">{highlight.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Instructions Card */}
            <Card className="bg-white/40 backdrop-blur-xl border-white/30 overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg sm:text-xl text-gray-900 flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-indigo-600" />
                  How to Participate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {currentOpenTrack.instructions.map((instruction, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-3 rounded-lg bg-white/30 backdrop-blur-sm border border-white/20 hover:bg-white/40 transition-all duration-300">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${currentOpenTrack.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <span className="text-white text-xs font-bold">{idx + 1}</span>
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">{instruction}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Rules Card */}
            <Card className="bg-white/40 backdrop-blur-xl border-white/30 overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg sm:text-xl text-gray-900 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-red-600" />
                  Rules & Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {currentOpenTrack.rules.map((rule, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-3 rounded-lg bg-red-50/50 backdrop-blur-sm border border-red-100/50 hover:bg-red-50/70 transition-all duration-300">
                      <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">{rule}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Problem Statement Note */}
            <Card className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-xl border-indigo-200/30 overflow-hidden">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 text-base sm:text-lg">Problem Statements</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Problem statements will be sourced from past years&apos; Smart India Hackathon (SIH). 
                      Teams must choose one problem statement and build their solution around it. 
                      The problem statements cover various domains including healthcare, education, finance, and more.
                    </p>
                    <Button
                      size="sm"
                      className="mt-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90"
                      onClick={() => handleDownload("/ProblemStatements.pdf")}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Problem Statements
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          // RoboWars Content
          <div className="space-y-6">
            {/* Competition Header Card */}
            <Card className={`bg-white/40 backdrop-blur-xl border-white/30 overflow-hidden hover:shadow-xl transition-all duration-500`}>
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${currentRoboWars.color} rounded-xl flex items-center justify-center shadow-lg ${currentRoboWars.glowColor}`}>
                    <currentRoboWars.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl sm:text-2xl text-gray-900 mb-1">{currentRoboWars.title}</CardTitle>
                    <p className="text-gray-600 text-sm sm:text-base">{currentRoboWars.description}</p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {currentRoboWars.highlights.map((highlight, index) => (
                <Card key={index} className="bg-white/60 backdrop-blur-md border-white/40 hover:bg-white/70 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                  <CardContent className="p-3 sm:p-4 text-center">
                    <highlight.icon className={`w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 ${highlight.color} group-hover:scale-110 transition-transform duration-300`} />
                    <div className="text-sm sm:text-base font-bold text-gray-900 mb-1">{highlight.value}</div>
                    <div className="text-xs text-gray-600">{highlight.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Instructions Card */}
            <Card className="bg-white/40 backdrop-blur-xl border-white/30 overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg sm:text-xl text-gray-900 flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-indigo-600" />
                  How to Participate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {currentRoboWars.instructions.map((instruction, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-3 rounded-lg bg-white/30 backdrop-blur-sm border border-white/20 hover:bg-white/40 transition-all duration-300">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${currentRoboWars.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <span className="text-white text-xs font-bold">{idx + 1}</span>
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">{instruction}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Rules Card */}
            <Card className="bg-white/40 backdrop-blur-xl border-white/30 overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg sm:text-xl text-gray-900 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-red-600" />
                  Rules & Regulations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {currentRoboWars.rules.map((rule, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-3 rounded-lg bg-red-50/50 backdrop-blur-sm border border-red-100/50 hover:bg-red-50/70 transition-all duration-300">
                      <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">{rule}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Specifications Card */}
            <Card className="bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-xl border-white/10 overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg sm:text-xl text-white flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-yellow-400" />
                  Technical Specifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-3">
                  {currentRoboWars.specifications.map((spec, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-3 rounded-lg bg-white/5 border border-white/10">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-200 text-sm leading-relaxed">{spec}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-8 sm:mt-10">
          <Card className="bg-gradient-to-r from-indigo-600/90 via-purple-600/90 to-pink-600/90 backdrop-blur-xl border-white/20 max-w-xl mx-auto shadow-xl hover:shadow-indigo-500/25 transition-all duration-500 hover:scale-105">
            <CardContent className="p-5 sm:p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-50"></div>
              <div className="relative z-10">
                <Trophy className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 text-yellow-300 animate-pulse" />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Ready to Compete?</h3>
                <p className="text-indigo-100/90 mb-4 text-sm leading-relaxed">
                  Register now and showcase your skills in {activeCategory === "open-innovation" ? "Open Innovation" : "RoboWars"}!
                </p>
                <Button 
                  size="default"
                  className="bg-white/90 backdrop-blur-sm text-indigo-600 hover:bg-white hover:shadow-lg font-semibold px-5 sm:px-6 py-2.5 sm:py-3 border border-white/20 transition-all duration-300 hover:scale-105"
                  onClick={() => window.open("https://forms.gle/fsCyrMx66uLinKU68", "_blank")}
                >
                  Register Now
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