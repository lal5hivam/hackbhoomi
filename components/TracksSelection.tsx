"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { 
  Cpu, 
  Heart, 
  Landmark, 
  Stethoscope, 
  Wheat, 
  Car,
  Truck,
  Bot,
  Leaf,
  MapPin,
  Zap,
  Shield,
  GraduationCap,
  AlertTriangle,
  Gamepad2,
  Building,
  Rocket,
  ExternalLink,
  Sparkles
} from "lucide-react"

type Track = {
  title: string;
  description: string;
  icon: any;
  color: string;
  category: string;
};

const tracks: Track[] = [
  {
    title: "Smart Automation",
    description: "Intelligent use of resources with AI to explore various sources and get valuable insights for technological advancement.",
    icon: Cpu,
    color: "from-blue-600 to-cyan-600",
    category: "Technology"
  },
  {
    title: "Fitness & Sports",
    description: "Innovative ideas to boost fitness activities and assist people in maintaining healthy lifestyles.",
    icon: Heart,
    color: "from-red-600 to-pink-600",
    category: "Health"
  },
  {
    title: "Heritage & Culture",
    description: "Showcase India's rich cultural heritage and traditions through innovative technological solutions.",
    icon: Landmark,
    color: "from-amber-600 to-orange-600",
    category: "Culture"
  },
  {
    title: "MedTech/BioTech/HealthTech",
    description: "Cutting-edge healthcare technology solutions addressing growing population needs and healthcare trends.",
    icon: Stethoscope,
    color: "from-green-600 to-emerald-600",
    category: "Healthcare"
  },
  {
    title: "Agriculture & Rural Development",
    description: "Enhance India's primary sector through innovative agriculture solutions and rural development initiatives.",
    icon: Wheat,
    color: "from-lime-600 to-green-600",
    category: "Agriculture"
  },
  {
    title: "Smart Vehicles",
    description: "Create intelligent devices and systems to revolutionize the transportation and commutation sector.",
    icon: Car,
    color: "from-purple-600 to-violet-600",
    category: "Transport"
  },
  {
    title: "Transportation & Logistics",
    description: "Address growing pressures on city resources, transport networks, and logistic infrastructure.",
    icon: Truck,
    color: "from-indigo-600 to-blue-600",
    category: "Logistics"
  },
  {
    title: "Robotics & Drones",
    description: "Design robots and drones for medical emergencies, search and rescue operations, and other critical applications.",
    icon: Bot,
    color: "from-slate-600 to-gray-600",
    category: "Robotics"
  },
  {
    title: "Clean & Green Technology",
    description: "Innovative solutions for waste segregation, disposal, and improved sanitization systems.",
    icon: Leaf,
    color: "from-teal-600 to-cyan-600",
    category: "Environment"
  },
  {
    title: "Tourism",
    description: "Boost tourism industries including hotels, travel, and hospitality through innovative solutions.",
    icon: MapPin,
    color: "from-rose-600 to-pink-600",
    category: "Tourism"
  },
  {
    title: "Renewable Energy",
    description: "Innovative ideas for managing and generating renewable and sustainable energy sources efficiently.",
    icon: Zap,
    color: "from-yellow-600 to-amber-600",
    category: "Energy"
  },
  {
    title: "Blockchain & Cybersecurity",
    description: "Decentralized ledger technology solutions for cryptocurrencies, NFTs, and multi-sector applications.",
    icon: Shield,
    color: "from-emerald-600 to-teal-600",
    category: "Security"
  },
  {
    title: "Smart Education",
    description: "Digital age learning solutions enabling effective, efficient, flexible, and comfortable education.",
    icon: GraduationCap,
    color: "from-blue-600 to-indigo-600",
    category: "Education"
  },
  {
    title: "Disaster Management",
    description: "Risk mitigation, planning, and management solutions for before, during, and after disasters.",
    icon: AlertTriangle,
    color: "from-red-600 to-orange-600",
    category: "Safety"
  },
  {
    title: "Toys & Games",
    description: "Creative toys and games based on Indian civilization, history, culture, and educational values.",
    icon: Gamepad2,
    color: "from-pink-600 to-rose-600",
    category: "Entertainment"
  },
  {
    title: "Miscellaneous",
    description: "Technology solutions for hospitality, financial services, entertainment, and retail sectors.",
    icon: Building,
    color: "from-gray-600 to-slate-600",
    category: "Business"
  },
  {
    title: "Space Technology",
    description: "Engineering solutions for space travel, exploration, and satellite technology applications.",
    icon: Rocket,
    color: "from-violet-600 to-purple-600",
    category: "Space"
  }
];

export default function TracksSelection() {
  const [isLoading, setIsLoading] = useState(false);

  const handleViewProblems = () => {
    setIsLoading(true);
    // Open in new tab
    const newWindow = window.open("https://www.sih.gov.in/sih2025PS", "_blank", "noopener,noreferrer");
    
    // Reset loading state after a short delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    // Fallback if window.open fails
    if (!newWindow) {
      window.location.href = "https://www.sih.gov.in/sih2025PS";
    }
  };

  return (
    <section id="tracks" className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-28 h-28 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Professional Header */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="secondary" className="mb-4 bg-white/10 backdrop-blur-md text-blue-300 border-blue-500/30 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            Innovation Tracks
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-4 sm:mb-6">
            SIH 2025 Tracks
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-200/90 max-w-3xl mx-auto leading-relaxed">
            Explore diverse innovation tracks, each offering unique challenges and opportunities to create impactful solutions for India's future
          </p>
        </div>

        {/* Professional Carousel */}
        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {tracks.map((track, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 group h-full">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-12 h-12 bg-gradient-to-r ${track.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <track.icon className="w-6 h-6 text-white" />
                        </div>
                        <Badge variant="outline" className="bg-white/10 text-blue-300 border-white/20 text-xs">
                          {track.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg sm:text-xl text-white leading-tight group-hover:text-blue-300 transition-colors duration-300">
                        {track.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-300/90 text-sm leading-relaxed line-clamp-4">
                        {track.description}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 -left-4 sm:-left-12" />
            <CarouselNext className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 -right-4 sm:-right-12" />
          </Carousel>
        </div>

        {/* Enhanced Call to Action with Fixed Button */}
        <div className="text-center mt-12 sm:mt-16">
          <Card className="bg-white/5 backdrop-blur-xl border-white/10 max-w-2xl mx-auto overflow-hidden">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Explore Problem Statements</h3>
              <p className="text-blue-200/90 mb-6 text-sm sm:text-base leading-relaxed">
                Dive deeper into specific problem statements and challenges for each track to find the perfect match for your innovation
              </p>
              <div className="flex justify-center">
                <Button 
                  size="lg"
                  onClick={handleViewProblems}
                  disabled={isLoading}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold px-4 sm:px-6 py-2.5 sm:py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer w-full sm:w-auto max-w-full"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2 flex-shrink-0"></div>
                      <span className="truncate">Loading...</span>
                    </>
                  ) : (
                    <>
                      <span className="truncate">View SIH 2025 Problem Statements</span>
                      <ExternalLink className="w-4 h-4 ml-2 flex-shrink-0" />
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}