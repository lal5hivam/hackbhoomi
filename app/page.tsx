"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Calendar, Trophy, X, MapPin, Download, Share2, Link } from "lucide-react"
import Head from "next/head"
import TracksSection from "@/components/TracksSelection"

const events = [
    {
      title: "Registration Starts",
      date: "20 Aug",
      desc: "The race begins — Register, Team Up, Get Set & Ideate!",
      color: "bg-blue-200",
    },
    {
      title: "Mentorship Sessions",
      date: "",
      desc: "Get expert guidance regarding your ideas and solutions!",
      color: "bg-yellow-200",
    },
    {
      title: "Registration Deadline",
      date: "31st Sept.",
      desc: "Get ready to innovate — Last chance to register!",
      color: "bg-green-200",
    },
    {
      title: "Idea Submission Deadline",
      date: "06 Sept.",
      desc: "Submit your innovative ideas and solutions!",
      color: "bg-green-200",
    },
    {
      title: "Shortlisted Teams Announcement",
      date: "10 Sept",
      desc: "And the chosen ones are... Meet the finalists!",
      color: "bg-red-200",
    },
    {
      title: "HACKATHON DAY - HackBhoomi 2025",
      date: "12-13 Sept.",
      desc: "Let the hacking begin! Build, code and create!",
      color: "bg-blue-200",
    },
  ];

const ETcoverImages = [
  "/edtech/PS1.png",
  "/edtech/PS2.png",
  "/edtech/PS3.png",
];

const EdTech = [
  "/edtech/ps1.png",
  "/edtech/ps2.png",
  "/edtech/ps3.png",
]

const HealthCare = [
  "/healthcare/ps1.png",
  "/healthcare/ps2.png",
  "/healthcare/ps3.png",
]

const HCcoverImages = [
  "/healthcare/hc1.png",
  "/healthcare/hc2.png",
  "/healthcare/hc3.png",
]

const Environment = [
  "/environment/ps1.png",
  "/environment/ps2.png",
  "/environment/ps3.png",
]


const EnvironmentcoverImages = [
  "/environment/env1.jpg",
  "/environment/env2.jpg",
  "/environment/env3.jpg",
]

const Finance = [
  "/finance/ps1.png",
  "/finance/ps2.png",
  "/finance/ps3.png",
]

const FinancecoverImages = [
  "/finance/fin1.jpg",
  "/finance/fin2.jpg",
  "/finance/fin3.jpg",
]




const videos = [
  "https://oslo-pull.b-cdn.net/Vibetank/IMG_7636.mp4",
  "https://oslo-pull.b-cdn.net/Vibetank/IMG_7638.mp4",
]

export default function hackBhoomi() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState("fredag")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(true)

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const shareEvent = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "HackBhoomi - InvertisUniversity",
          text: "An Internal Hackathon for SIH2025",
          url: window.location.href,
        })
      } catch (err) {
        // Error handling for sharing functionality
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href)
      alert("Link not Available!")
    }
  }

  const milestones = [
    { number: "13,91,884+", label: "Participating Students" },
    { number: "12800+", label: "SIH Alumni Network" },
    { number: "6497", label: "Participating Institutes" },
    { number: "2877", label: "Total Problem Statements" },
    { number: "133", label: "Startups Details Submitted" },
  ];

  return (
    <>
      <Head>
        {/* Page-specific meta tags */}
        <link rel="preload" href="/herobg.jpg" as="image" />
        <link rel="preload" href="/edtech/PS1.png" as="image" />
      </Head>

      <div 
        className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      >
      
      
        {/* Header - Elkjøp Internal Style */}
       <header 
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
              ? 'bg-gray-900/80 text-white backdrop-blur-sm shadow-lg py-3' 
              : 'bg-gray-300 backdrop-blur-lg border border-gray-300/30 shadow-lg rounded-2xl w-[95%] mx-auto mt-3 py-4  '
          } text-black`} 
          // role="banner" 
          // id="header"
        >
          <div className="max-w-7xl mx-auto ">
            <div className="flex items-center justify-between w-full">

              {/* -------- TOP LAYOUT (when NOT scrolled) -------- */}
              {!isScrolled && (
                <>
                  {/* Left Section: Hamburger + Logo + Title */}
                  <div className="flex items-center space-x-4">
                    {/* Hamburger */}
                    

                    {/* Logo + Title */}
                    <div className="flex items-center">
                      <h1 className="text-4xl font-bold font-mono">Hack</h1>
                      <h1 className="text-4xl text-orange-600 font-bold font-serif ml-2">भूमि</h1>

                      <div
                        className="w-0 h-0 ml-2 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-orange-500 rotate-90"
                      ></div>

                      <span className="text-2xl font-semibold text-blue-800 ml-2">SIH 2025</span>

                      <button
                        onClick={() => window.open("https://www.invertisuniversity.ac.in/", "_blank")}
                        className="ml-6"
                      >
                        <img
                          src="/invertis.png"
                          alt="Invertis University Logo"
                          className="h-12 w-auto transition duration-300 ease-in-out hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                        />
                      </button>

                      <button
                        onClick={() => window.open("https://invertisincubation.com/", "_blank")}
                        className="ml-6"
                      >
                        <img
                          src="/images/incub.png"
                          alt="Invertis Incubation Center Logo"
                          className="h-12 w-auto transition duration-300 ease-in-out hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                        />
                      </button>

                      <button
                        onClick={() => window.open("https://www.sih.gov.in", "_blank")}
                        className="ml-8"
                      >
                        <img
                          src="/SIH.png"
                          alt="SIH Logo"
                          className="h-12 w-auto hover:drop-shadow-[0_0_6px_rgba(0,0,0,0.8)] drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
                        />
                      </button>
                      
                    </div>
                    <div className="flex items-center ">
                      <MapPin className="w-5 h-5 text-orange-400" />
                      <span className="text-sm">Invertis University, Bareilly</span>
                    </div>
                    <div className="flex items-center ">
                      <Calendar className="w-5 h-5 text-orange-400" />
                      <time dateTime="2025-08-25" className="text-sm">
                        12-13th Sept, 2025
                      </time>
                    </div>
                    <Button 
                      className="bg-orange-500 text-black relative overflow-hidden transition-all duration-300 hover:scale-125 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] group hover:bg-orange-600 px-4 py-2 rounded-lg shadow-md"
                      onClick={() => window.open("https://forms.gle/fsCyrMx66uLinKU68", "_blank")}>
                      Register
                    </Button>

                  </div>
                  
                  
                </>
              )}

              {/* -------- SCROLLED LAYOUT -------- */}
              {isScrolled && (
                <>
                  {/* Left: Logo */}
                  <div className="flex items-center space-x-3" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} >
                      <h1 className="text-3xl font-bold">Hack</h1>
                      <h1 className="text-3xl text-orange-300 font-bold">भूमि</h1>
                  </div>

                  {/* Middle: Navbar */}
                  <nav className="hidden md:flex space-x-8 text-sm font-medium">
                    <a href="#SIH" className="hover:text-orange-400">ABOUT SIH</a>
                    <a href="#program" className="hover:text-orange-400">TIMELINE</a>
                    <a href="#instructions" className="hover:text-orange-400">INSTRUCTIONS</a>
                    <a href="#problem-statements" className="hover:text-orange-400">PROBLEM STATEMENTS</a>
                    <a href="#vinnere" className="hover:text-orange-400">PRIZES</a>
                    <a href="#team" className="hover:text-orange-400">TEAM</a>
                    <a href="#faq" className="hover:text-orange-400">FAQ's</a>
                  </nav>

                  {/* Right: Register */}
                  <Button 
                    onClick={() => window.open("https://forms.gle/fsCyrMx66uLinKU68", "_blank")}
                    className="bg-orange-500 text-black hover:bg-orange-600 px-4 py-2 relative overflow-hidden transition-all duration-300 hover:scale-125 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] group rounded-lg shadow-md">
                    Register
                  </Button>
                  
                </>
              )}
              
            </div>

          </div>
          {isScrolled && (
            <div className="w-full bg-transparent py-2 overflow-hidden">
              <div className="whitespace-nowrap animate-marquee-slow animate-blink font-extrabold text-lg hover:animate-marquee-pause">
                🚨 The registrations are OPEN, create your team now !! ⚠️ &nbsp;&nbsp;&nbsp; 
              </div>
            </div>
          )}

        </header>





        {/* Hero Section - Centered Style */}
        <section className="relative overflow-hidden h-screen  flex backdrop-blur-sm items-center justify-center" role="main">
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          

          <div className="max-w-7xl mx-auto px-4 py-8 relative z-20 h-full flex flex-col items-center justify-center text-center">
            
            <p className="text-xl text-white mb-8 max-w-xl">
              Your CHANCE to represent Invertis University at
            </p>
            <h2 className="text-8xl font-black leading-none mb-4">
              <span className="text-blue-500 text-6xl font-sans">SMART INDIA</span>
              <br />
              <span className="text-orange-400 font-serif">HACKATHON</span>
              <br />
              <span className="text-white font-mono">2025</span>
            </h2>

            

            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                onClick={() => window.open("https://forms.gle/fsCyrMx66uLinKU68", "_blank")}
                className="bg-orange-500  hover:bg-orange-600 text-black font-bold text-2xl px-16 py-10 relative overflow-hidden transition-all duration-300 hover:scale-125 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] group rounded-md">
                Register
              </Button>
            </div>
          </div>
        </section>


        {/* Event Stats */}
        

        {/* Tracks Section */}
        

        {/* About SIH Section */}

        {/* About SIH */}

        <section id="SIH" className="bg-indigo-900/90 backdrop-blur-sm py-16 text-white" aria-labelledby="about-sih-heading">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left side: Text paragraphs */}
            <div>
              <h2 id="winners-heading" className="text-5xl font-black text-orange-400 mb-12 text-center">
                Smart India Hackathon 2025
              </h2>
              <p className="mb-4 leading-relaxed text-gray-300">
                The Smart India Hackathon (SIH) is India’s largest open innovation model, 
                designed to promote a culture of problem-solving and product innovation.
              </p>
              <p className="mb-4 leading-relaxed text-gray-300">
                Every year, SIH brings together lakhs of students from across the country 
                to solve real-world challenges posed by ministries, industries, and organizations.
              </p>
              <p className="mb-4 leading-relaxed">
                With 254+ problem statements released, SIH provides a platform for 
                young innovators to showcase their technical creativity.
              </p>
              <p className="mb-4 leading-relaxed text-gray-300">
                Winners not only receive cash prizes up to ₹1.5 Lakhs, 
                but also gain recognition, mentorship opportunities, and the chance 
                to work on impactful government and industry projects.
              </p>
              <p className="mb-4 leading-relaxed text-gray-300">
                The motive of SIH is to create a vibrant innovation ecosystem and 
                prepare students for building scalable solutions for a smarter India.
              </p>
            </div>

            {/* Right side: Process Image */}
            <div className="flex justify-center">
              <img 
                  src="/SIH-process.png" 
                  alt="SIH Process" 
                  className="w-auto ml-6"
              />
            </div>
          </div>

          {/* NEW DIV: Video + Timeline */}
          <div className="max-w-6xl mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* YouTube Video */}
            <div className="w-full aspect-video">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/znMbKz6ZPno"
                title="SIH 2024: Smart India Hackathon" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>

            {/* Timeline Image */}
            <div className="flex justify-center">
              <img 
                src="/timeline.png" 
                alt="SIH 2025 Timeline" 
                
              />
            </div>
          </div>
        </section>

        {/* Milestones Section */}

        <section id="Milestones" className="bg-[#1B168C]/90 backdrop-blur-sm text-white py-12">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">SIH MILESTONES</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
              {milestones.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <span className="text-3xl md:text-4xl font-bold">
                    {item.number}
                  </span>
                  <span className="text-sm md:text-base mt-2">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section id="program" className="bg-transparent backdrop-blur-md py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-center text-5xl font-extrabold text-white mb-12">
              Timeline
            </h2>
            <div className="relative border-l-4 border-gray-300">
              {events.map((event, idx) => (
                <div key={idx} className="mb-10 ml-6">
                  {/* Dot */}
                  <div className="absolute w-4 h-4 bg-gray-600 rounded-full -left-2.5 border border-white"></div>
                  {/* Card */}
                  <div className={`${event.color} p-5 rounded-lg shadow-md`}>
                    <h3 className="text-lg font-bold text-gray-900">{event.title}</h3>
                    <span className="block text-sm font-semibold text-gray-700">
                      {event.date}
                    </span>
                    <p className="mt-2 text-gray-700 text-sm">{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Program Section */}
        {/* <section id="program" className="py-16 bg-gray-transparent backdrop-blur-md" aria-labelledby="program-heading">
          <div className="max-w-6xl mx-auto px-4">
            <h2 id="program-heading" className="text-6xl font-black text-white mb-12 text-center">
              TIMELINE
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <article className="bg-white border-2 border-indigo-900 overflow-hidden rounded-lg">
                <header className="bg-indigo-900 text-white p-4">
                  <h3 className="text-xl font-bold">Team Registrations</h3>
                  <time dateTime="2024-06-15" className="text-orange-400">
                    18 Jul - 23 Jul
                  </time>
                </header>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <time className="min-w-[60px] text-right text-indigo-900 font-bold" dateTime="09:00">
                        09:00
                      </time>
                      <div>
                        <p className="font-bold">nikg</p>
                        <p className="text-sm text-gray-600">Lobby, 1. etasje</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <time className="min-w-[60px] text-right text-indigo-900 font-bold" dateTime="10:00">
                        10:00
                      </time>
                      <div>
                        <p className="font-bold">Åpningsseremoni</p>
                        <p className="text-sm text-gray-600">Hovedscene</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <time className="min-w-[60px] text-right text-indigo-900 font-bold" dateTime="11:30">
                        11:30
                      </time>
                      <div>
                        <p className="font-bold">Team-dannelse</p>
                        <p className="text-sm text-gray-600">Innovasjonshallen</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <time className="min-w-[60px] text-right text-indigo-900 font-bold" dateTime="12:30">
                        12:30
                      </time>
                      <div>
                        <p className="font-bold">Lunsj</p>
                        <p className="text-sm text-gray-600">Kantinen</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <time className="min-w-[60px] text-right text-indigo-900 font-bold" dateTime="13:30">
                        13:30
                      </time>
                      <div>
                        <p className="font-bold">Hackathon starter!</p>
                        <p className="text-sm text-gray-600">Alle områder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <article className="bg-white border-2 border-orange-500 overflow-hidden rounded-lg">
                <header className="bg-orange-500 text-black p-4">
                  <h3 className="text-xl font-bold">Hacking BEGINS!</h3>
                  <time dateTime="2024-06-16" className="text-indigo-900">
                    25th Aug, 10:00 AM
                  </time>
                </header>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <time className="min-w-[60px] text-right text-indigo-900 font-bold" dateTime="09:00">
                        10:00
                      </time>
                      <div>
                        <p className="font-bold">Orientation</p>
                        <p className="text-sm text-gray-600">Orientation</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <time className="min-w-[60px] text-right text-indigo-900 font-bold" dateTime="10:00">
                        10:00
                      </time>
                      <div>
                        <p className="font-bold">Mentoring-sesjon</p>
                        <p className="text-sm text-gray-600">Innovasjonshallen</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <time className="min-w-[60px] text-right text-indigo-900 font-bold" dateTime="12:30">
                        12:30
                      </time>
                      <div>
                        <p className="font-bold">Lunsj</p>
                        <p className="text-sm text-gray-600">Kantinen</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <time className="min-w-[60px] text-right text-indigo-900 font-bold" dateTime="19:00">
                        19:00
                      </time>
                      <div>
                        <p className="font-bold">Middag & Fest</p>
                        <p className="text-sm text-gray-600">Takterrassen</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <article className="bg-white border-2 border-indigo-900 overflow-hidden rounded-lg">
                <header className="bg-indigo-900 text-white p-4">
                  <h3 className="text-xl font-bold">SIH Registrations</h3>
                  <time dateTime="2024-06-17" className="text-orange-400">
                    September
                  </time>
                </header>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <time className="min-w-[60px] text-right text-indigo-900 font-bold" dateTime="09:00">
                        09:00
                      </time>
                      <div>
                        <p className="font-bold">Frokost</p>
                        <p className="text-sm text-gray-600">Kantinen</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <time className="min-w-[60px] text-right text-indigo-900 font-bold" dateTime="11:00">
                        11:00
                      </time>
                      <div>
                        <p className="font-bold">Siste forberedelser</p>
                        <p className="text-sm text-gray-600">Alle områder</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <time className="min-w-[60px] text-right text-indigo-900 font-bold" dateTime="13:00">
                        13:00
                      </time>
                      <div>
                        <p className="font-bold">Presentasjoner</p>
                        <p className="text-sm text-gray-600">Hovedscene</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <time className="min-w-[60px] text-right text-indigo-900 font-bold" dateTime="16:00">
                        16:00
                      </time>
                      <div>
                        <p className="font-bold">Premieutdeling</p>
                        <p className="text-sm text-gray-600">Hovedscene</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section> */}

        {/* Instructions */}
        <section id="instructions" className="py-16 bg-white/90 backdrop-blur-sm" aria-labelledby="instructions-heading">
          <div className="max-w-6xl mx-auto px-4">
            <h2 id="instructions-heading" className="text-4xl font-black text-indigo-900 mb-12 text-center">
              INSTRUCTIONS
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <article className="bg-white overflow-hidden shadow-lg rounded-lg">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://oslo-pull.b-cdn.net/AI_JAM_Fredag-13%20Large.jpeg"
                    alt="Team Innovators arbeider med AI-løsning for kundeservice"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <Badge className="bg-indigo-900 text-white font-bold mb-2">Get Ready</Badge>
                  <h3 className="text-xl font-bold text-indigo-900 mb-2">Team-Up & Prepare</h3>
                  <ul className="text-gray-600 mb-4 space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      Teams should consist of up to 6 members (with at least one female participant encouraged)
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      Browse through the SIH 2025 official Tracks/Theme and Problem Statements
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      Choose a Track and start building your solution
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      Build a working prototype solution for the problem statement or Track you have chosen.
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      The internal hackathon will be conducted on campus, where teams will build, present, and demonstrate their prototype/solution
                    </li>
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-indigo-900">Team Formation</span>
                    <Button
                      variant="outline"
                      className="border-indigo-900 text-indigo-900 hover:bg-indigo-900 hover:text-white"
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/TeamInstruction.pdf';
                        link.download = 'TeamInstruction.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Instructions
                    </Button>
                  </div>
                </div>
              </article>

              <article className="bg-white overflow-hidden shadow-lg rounded-lg">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://oslo-pull.b-cdn.net/AI_JAM_S%C3%B8ndag-12%20Large.jpeg"
                    alt="Team TechWizards demonstrerer AR-app for produktvisualisering"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <Badge className="bg-orange-500 text-white font-bold mb-2">Hackभूमि</Badge>
                  <h3 className="text-xl font-bold text-indigo-900 mb-2">Happy Hacking</h3>
                  <ul className="text-gray-600 mb-4 space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      Read the problem statement carefully and identify the key pain points it highlights
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      Use any technology stack of your choice
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      Break down your solution into small modules (UI, backend, database, APIs, etc.) so everyone in the team contributes
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      Develop working prototype solutions
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      Focus on solving the core problem first – additional features can be added later
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      Prepare a final demo presentation with your Problem Overview, Approach, Tech-Stack and Live Demo
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      Present in-front of the Judges Panel
                    </li>
                    <li className="flex items-start text-black">
                      <span className="text-orange-500 mr-2">•</span>
                      Winning teams from the Internal Hackathon will be nominated by the institute for SIH 2025
                    </li>
                  </ul>
                  
                </div>
              </article>

              <article className="bg-white overflow-hidden shadow-lg rounded-lg">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://oslo-pull.b-cdn.net/AI_JAM_S%C3%B8ndag-14%20Large.jpeg"
                    alt="Team DataDreamers presenterer prediktivt analyseverktøy"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <Badge className="bg-orange-500 text-white font-bold mb-2">SIH 2025</Badge>
                  <h3 className="text-xl font-bold text-indigo-900 mb-2">Enter the HackArena!</h3>
                  <ul className="text-gray-600 mb-4 space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      Top 25 teams get Nominated to SIH 2025
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      Nominated teams must strictly follow the SIH rules, deadlines, and submission requirements
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      Teams will represent the college at the national level and compete with innovators across the country
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      Cash prizes up to ₹1.5 Lakhs. Certificates and recognition
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      Teams will have to select their problem statement among 250+ from the SIH official website
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      Winners at SIH 2025 will get a chance to showcase their solutions, gain recognition, and access career opportunities, funding, or incubation support
                    </li>
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-indigo-900">Idea Submission</span>
                    <Button
                      variant="outline"
                      className="border-indigo-900 text-indigo-900 hover:bg-indigo-900 hover:text-white"
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/IdeaSubmission.pdf';
                        link.download = 'IdeaSubmission.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Instructions
                    </Button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        {/*<section id="problem-statements" className="bg-gray-transparent backdrop-blur-md py-16" aria-labelledby="gallery-heading">
          <div className="max-w-7xl mx-auto px-4">
            <h2 id="gallery-heading" className="text-6xl font-black text-black text-ellipsis text-center mb-12">
              Problem Statements
            </h2>


            <nav className="flex justify-center mb-8" aria-label="Problem Statements ">
              <div className="bg-white rounded-md p-1 shadow-lg">
                <Button
                  variant={activeSection === "edtech" ? "default" : "ghost"}
                  className={`font-bold ${
                    activeSection === "edtech"
                      ? "bg-indigo-900 text-white hover:bg-indigo-800"
                      : "text-indigo-900 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveSection("edtech")}
                  aria-pressed={activeSection === "edtech"}
                >
                  Ed-Tech
                </Button>
                <Button
                  variant={activeSection === "HealthCare" ? "default" : "ghost"}
                  className={`font-bold ${
                    activeSection === "HealthCare"
                      ? "bg-orange-500 text-black hover:bg-orange-600"
                      : "text-indigo-900 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveSection("HealthCare")}
                  aria-pressed={activeSection === "HealthCare"}
                >
                  HealthCare
                </Button>
                <Button
                  variant={activeSection === "Environment" ? "default" : "ghost"}
                  className={`font-bold ${
                    activeSection === "Environment"
                      ? "bg-indigo-900 text-white hover:bg-indigo-800"
                      : "text-indigo-900 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveSection("Environment")}
                  aria-pressed={activeSection === "Environment"}
                >
                  Environment
                </Button>
                <Button
                  variant={activeSection === "Finance" ? "default" : "ghost"}
                  className={`font-bold ${
                    activeSection === "Finance"
                      ? "bg-indigo-900 text-white hover:bg-indigo-800"
                      : "text-indigo-900 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveSection("Finance")}
                  aria-pressed={activeSection === "Finance"}
                >
                  Finance
                </Button>
                <Button
                  variant={activeSection === "Open-Innovation" ? "default" : "ghost"}
                  className={`font-bold ${
                    activeSection === "Open-Innovation"
                      ? "bg-orange-500 text-black hover:bg-orange-600"
                      : "text-indigo-900 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveSection("Open-Innovation")}
                  aria-pressed={activeSection === "Open-Innovation"}
                >
                  Open-Innovation
                </Button>
              </div>
            </nav>

            {activeSection === "edtech" && (
              <div
                className="flex flex-col items-center gap-6"
                role="region"
                aria-label="edtech bilder"
              >
                {ETcoverImages.map((src, index) => (
                  <div key={index} className="w-full max-w-3xl">
                    <img
                      src={src || "placeholder.svg"}
                      alt={`Hackathon aktivitet edtech cover, bilde ${index + 1}`}
                      className="w-full h-auto rounded-lg hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] hover:scale-110 ease-in-out shadow-lg"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}



            {activeSection === "HealthCare" && (
              <div
                className="flex flex-col items-center gap-6"
                role="region"
                aria-label="edtech bilder"
              >
                {HealthCare.map((src, index) => (
                  <div key={index} className="w-full max-w-3xl">
                    <img
                      src={src || "placeholder.svg"}
                      alt={`Hackathon aktivitet edtech cover, bilde ${index + 1}`}
                      className="w-full h-auto rounded-lg hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] hover:scale-110 ease-in-out shadow-lg"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}

            {activeSection === "Environment" && (
              <div
                className="flex flex-col items-center gap-6"
                role="region"
                aria-label="edtech bilder"
              >
                {Environment.map((src, index) => (
                  <div key={index} className="w-full max-w-3xl">
                    <img
                      src={src || "placeholder.svg"}
                      alt={`Hackathon aktivitet edtech cover, bilde ${index + 1}`}
                      className="w-full h-auto rounded-lg hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] hover:scale-110 ease-in-out shadow-lg"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}


            {activeSection === "Finance" && (
              <div
                className="flex flex-col items-center gap-6"
                role="region"
                aria-label="edtech bilder"
              >
                {Finance.map((src, index) => (
                  <div key={index} className="w-full max-w-3xl">
                    <img
                      src={src || "placeholder.svg"}
                      alt={`Hackathon aktivitet edtech cover, bilde ${index + 1}`}
                      className="w-full h-auto rounded-lg hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] hover:scale-110 ease-in-out shadow-lg"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}

            {activeSection === "Open-Innovation" && (
              <div className="grid md:grid-cols-2 gap-8">
                {videos.map((video, index) => (
                  <div key={index} className="aspect-video rounded-lg overflow-hidden shadow-lg">
                    <video
                      controls
                      className="w-full h-full object-cover"
                      aria-label={`Video høydepunkt ${index + 1} fra Open-Innovation`}
                      preload="metadata"
                    >
                      <source src={video} type="video/mp4" />
                      <p>
                        Din nettleser støtter ikke video-elementet. <a href={video}>Last ned videoen</a>.
                      </p>
                    </video>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>*/}

        <TracksSection />

        {/* Winners Section */}
        <section id="vinnere" className="bg-indigo-900/90 backdrop-blur-sm py-16 text-white" aria-labelledby="winners-heading">
          <div className="max-w-6xl mx-auto px-4">
            <h2 id="winners-heading" className="text-6xl font-black text-orange-400 mb-12 text-center">
              🏆 WINNERS 🏆
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <article className="text-center relative rounded-lg overflow-hidden transition-all duration-300 hover:scale-125 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] group">
                <div className="w-24 h-24 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-12 h-12 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold mb-2">2nd Runner-up</h3>
                <p className="text-lg font-bold text-orange-400 mb-1">Team Innovators</p>
                <p className="text-white/80">prize : TBD</p>
              </article>

              <article className="text-center relative rounded-lg overflow-hidden transition-all duration-300 hover:scale-125 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] group">
                <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-12 h-12 text-black" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Champion</h3>
                <p className="text-lg font-bold text-orange-400 mb-1">Team TechWizards</p>
                <p className="text-white/80">prize : TBD</p>
              </article>

              <article className="text-center relative rounded-lg overflow-hidden transition-all duration-300 hover:scale-125 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] group">
                <div className="w-24 h-24 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-12 h-12 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Runner-up</h3>
                <p className="text-lg font-bold text-orange-400 mb-1">Team DataDreamers</p>
                <p className="text-white/80">prize : TBD</p>
              </article>
            </div>
              
            {/* SIH 2025 Nomination Note */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-center mb-3">
                  <Trophy className="w-8 h-8 text-white mr-3" />
                  <h3 className="text-2xl font-bold text-white">SIH 2025 Nomination</h3>
                </div>
                <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto">
                  The <span className="font-bold text-yellow-200">top 25 teams</span> from HackBhoomi will be nominated 
                  to represent Invertis University at the Smart India Hackathon 2025. 
                  This is your gateway to national recognition and prizes up to ₹1.5 Lakhs!
                </p>
                <div className="mt-4 flex items-center justify-center space-x-2">
                  <span className="text-yellow-200 font-semibold">🏆</span>
                  <span className="text-yellow-200 font-semibold">🏆</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        

        {/* Next Event CTA */}
        

        <section id="team" className="bg-black/80 backdrop-blur-sm py-12" aria-labelledby="support-heading">
          <div className="max-w-6xl mx-auto justify-center px-4">
            <h1 id="support-heading" className="text-7xl  font-bold text-center mb-10 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              👤 Committee Members 👤
            </h1>

            <h2 className="text-4xl font-bold text-center mb-10 text-orange-400">
              Faculty & Staff
            </h2>

            {/* Top single card */}
            <div className="flex justify-center  mb-10">
              <div className="text-center bg-transparent  rounded-lg p-10 w-full md:w-1/2">
                <img 
                  src="/images/talhaSir.png" 
                  alt="Organizing Committee" 
                  className="mx-auto h-24 w-24 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] rounded-full object-contain mb-4"
                />
                <div className="text-white font-bold text-xl">Mohd Talha Khan</div>
                <p className="text-white text-sm mt-2">Director, CSED (SPOC)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 place-items-center">
            
            {/* Technical Team */}
            <div className="text-center bg-transparent rounded-lg p-6 w-64">
              <img 
                src="/images/gauravSir.png" 
                alt="Hod CSE" 
                className="mx-auto h-20 w-20 rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] object-contain mb-4"
              />
              <div className="text-white font-bold text-lg">Dr. Gaurav Agarwal</div>
              <p className="text-white text-sm mt-2">HOD, CSE</p>
            </div>

            {/* Mentors */}
            <div className="text-center bg-transparent rounded-lg p-6 w-64">
              <img 
                src="/images/akashSir.png" 
                alt="Hod CA" 
                className="mx-auto h-20 w-20 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] rounded-full object-contain mb-4"
              />
              <div className="text-white font-bold text-lg">Dr. Akash Sanghai</div>
              <p className="text-white text-sm mt-2">HOD, Computer Applications</p>
            </div>

            {/* Assistant Prof */}
            <div className="text-center bg-transparent rounded-lg p-6 w-64">
              <img 
                src="/images/ashishSir.png" 
                alt="Assistant Prof" 
                className="mx-auto h-20 w-20 rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] object-contain mb-4"
              />
              <div className="text-white font-bold text-lg">Dr. Ashish Kumar Sharma</div>
              <p className="text-white text-sm mt-2">Assistant Prof. CSE</p>
            </div>

            {/* New Member */}
            <div className="text-center bg-transparent rounded-lg p-6 w-64">
              <img 
                src="/images/kaushalSir.jpg" 
                alt="New Member" 
                className="mx-auto h-20 w-20 rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] object-contain mb-4"
              />
              <div className="text-white font-bold text-lg">Prof. Kaushal Johari</div>
              <p className="text-white text-sm mt-2">Assistant Prof. Computer Applications</p>
            </div>

          </div>

          
          <h2 className="text-4xl font-bold text-center mb-10 text-orange-400">
              Mentors
            </h2>

          <div className="flex justify-center mb-10">
              <div className="text-center bg-transparent  rounded-lg p-6 w-full md:w-1/2">
                <img 
                  src="/images/pranav.jpg" 
                  alt="Pranav Thakur" 
                  className="mx-auto h-24 w-24 rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] object-contain mb-4"
                />
                <div className="text-white font-bold text-xl">Pranav Thakur</div>
                <p className="text-white text-sm mt-2">Alumni, Invertis University</p>
                
                <p className="text-white text-sm mt-2">Mentorship & Guidance</p>
              </div>
            </div>

            

            <h2 className="text-4xl font-bold text-center mb-10 text-orange-400">
              Core Members
            </h2>

            {/* Bottom three cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              
              {/* Technical Team */}
              <div className="text-center bg-transparent rounded-lg p-6">
                <img 
                  src="/images/lalshivam.jpg" 
                  alt="Lead Organizer" 
                  className="mx-auto h-20 w-20 rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] object-contain mb-4"
                />
                <div className="text-white font-bold text-lg">Lal Shivam Singh</div>
              </div>
              
              {/* Mentors */}
              <div className="text-center bg-transparent rounded-lg p-6">
                <img 
                  src="/images/aryan.png" 
                  alt="Technical Club" 
                  className="mx-auto h-20 w-20 rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] object-contain mb-4"
                />
                <div className="text-white font-bold text-lg">Aryan Singh</div>
              </div>
              
              {/* Sponsors & Partners */}
              <div className="text-center bg-transparent rounded-lg p-6">
                <img 
                  src="/images/ashish.jpg" 
                  alt="Incubation Center" 
                  className="mx-auto h-20 w-20 rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] object-contain mb-4"
                />
                <div className="text-white font-bold text-lg">Ashish Kumar</div>
              </div>

              {/* New Member */}
              <div className="text-center bg-transparent rounded-lg p-6">
                <img 
                  src="/images/ayush.jpg" 
                  alt="New Member" 
                  className="mx-auto h-20 w-20 rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] object-contain mb-4"
                />
                <div className="text-white font-bold text-lg">Ayush Ranjan</div>
              </div>

            </div>
<h2 className="text-4xl font-bold text-center mb-10 text-white">
              Head Volunteers
            </h2>

            {/* Bottom three cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              
              {/* Technical Team */}
              <div className="text-center bg-transparent rounded-lg p-6">
                <img 
                  src="/images/trisha.jpg" 
                  alt="Lead Organizer" 
                  className="mx-auto h-20 w-20 rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] object-contain mb-4"
                />
                <div className="text-white font-bold text-lg">Trisha Bhardwaj</div>
              </div>
              
              {/* Mentors */}
              <div className="text-center bg-transparent rounded-lg p-6">
                <img 
                  src="/images/tarun.jpg" 
                  alt="Technical Club" 
                  className="mx-auto h-20 w-20 rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] object-contain mb-4"
                />
                <div className="text-white font-bold text-lg">Tarun Maurya</div>
              </div>
              
              {/* Sponsors & Partners */}
              <div className="text-center bg-transparent rounded-lg p-6">
                <img 
                  src="/images/shivanshu.jpg" 
                  alt="Incubation Center" 
                  className="mx-auto h-20 w-20 rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] object-contain mb-4"
                />
                <div className="text-white font-bold text-lg">Shivanshu Singh</div>
              </div>

              {/* New Member */}
              <div className="text-center bg-transparent rounded-lg p-6">
                <img 
                  src="/images/arpit.jpg" 
                  alt="New Member" 
                  className="mx-auto h-20 w-20 rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] object-contain mb-4"
                />
                <div className="text-white font-bold text-lg">Arpit Mathur</div>
              </div>

            </div>
            <h2 className="text-4xl font-bold text-center mb-10 text-lime-400">
              Community Partners
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Technical Team */}
              <div className="text-center bg-transparent rounded-lg p-6">
                <img 
                  src="/images/incub.png" 
                  alt="Lead Organizer" 
                  className="mx-auto h-20 w-20 rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] object-contain mb-4"
                />
                <div className="text-white font-bold text-lg">Incubation and Innovation Center</div>
                <p className="text-white text-sm mt-2">Invertis University</p>
              </div>
              
              {/* Mentors */}
              <div className="text-center bg-transparent rounded-lg p-6">
                <img 
                  src="/images/itech.PNG" 
                  alt="Technical Club" 
                  className="mx-auto h-20 w-20 rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] object-contain mb-4"
                />
                <div className="text-white font-bold text-lg">iTech</div>
                <p className="text-white text-sm mt-2">Abhiruchi</p>
              </div>
              
              {/* Sponsors & Partners */}
              <div className="text-center bg-transparent rounded-lg p-6">
                <img 
                  src="/images/nexus.png" 
                  alt="Incubation Center" 
                  className="mx-auto h-20 w-20 rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] object-contain mb-4"
                />
                <div className="text-white font-bold text-lg">Nexus</div>
                <p className="text-white text-sm mt-2">Bridging Opportunities</p>
              </div>

            </div>

          </div>
        </section>

        <section id="neste" className="bg-white/90 backdrop-blur-sm py-16" aria-labelledby="next-event-heading">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 id="next-event-heading" className="text-4xl font-black text-indigo-900 mb-6">
              Ready for SIH 2025?
            </h2>
            <p className="text-2xl text-gray-600 mb-10">
            ⚡ Remember: Innovation is not always about complexity — even a simple, usable solution can win!
            </p>
            <article className="bg-gray-100 p-8 rounded-lg mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Calendar className="w-6 h-6 text-indigo-900" aria-hidden="true" />
                <time dateTime="2025-08-25" className="text-xl font-bold text-indigo-900">
                  12th-13th September 2025
                </time>
              </div>
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">HACKBHOOOMI INTERNAL HACKATHON</h3>
              <p className="text-gray-600 mb-6">
                Theme: "Innovation for a Smarter India" - Solve real-world problems and make a difference!
              </p>
              <Button 
                onClick={() => window.open("https://forms.cloud.microsoft/r/C3tHRkCuHt", "_blank")}
                className="bg-orange-500 hover:bg-orange-600 text-black font-bold text-lg px-8 py-3 rounded-md">
                Register Now
              </Button>
            </article>
          </div>
        </section>



        {/* FAQ Section */}
        <section id="faq" className="bg-gray-50/80 backdrop-blur-sm py-16" aria-labelledby="faq-heading">
          <div className="max-w-4xl mx-auto px-4">
            <h2 id="faq-heading" className="text-4xl font-black text-indigo-900 mb-12 text-center">
              FAQ's
            </h2>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* FAQ Item 1 */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => setActiveSection(activeSection === "faq1" ? "" : "faq1")}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-blue-600 font-medium">What is HackBhoomi?</span>
                  <svg
                    className={`w-5 h-5 text-blue-600 transition-transform ${
                      activeSection === "faq1" ? "rotate-90" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                {activeSection === "faq1" && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      HackBhoomi is an internal hackathon organized by Invertis University to select the best teams 
                      to represent the university at the Smart India Hackathon (SIH) 2025. It's a platform for students 
                      to showcase their innovation and problem-solving skills.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ Item 2 */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => setActiveSection(activeSection === "faq2" ? "" : "faq2")}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-blue-600 font-medium">Who can participate?</span>
                  <svg
                    className={`w-5 h-5 text-blue-600 transition-transform ${
                      activeSection === "faq2" ? "rotate-90" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                {activeSection === "faq2" && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      All students from Invertis University can participate. Teams should consist of 2-6 members. 
                      Students from different branches and years are encouraged to form interdisciplinary teams.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ Item 3 */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => setActiveSection(activeSection === "faq3" ? "" : "faq3")}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-blue-600 font-medium">What are the problem statement categories?</span>
                  <svg
                    className={`w-5 h-5 text-blue-600 transition-transform ${
                      activeSection === "faq3" ? "rotate-90" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                {activeSection === "faq3" && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      The hackathon covers SIH 2025 official Themes/Tracks, mentioned above. 
                      Participants can chose from SIH 2024 problem statements from https://www.sih.gov.in/sih2024PS
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ Item 4 */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => setActiveSection(activeSection === "faq4" ? "" : "faq4")}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-blue-600 font-medium">What is the duration of the hackathon?</span>
                  <svg
                    className={`w-5 h-5 text-blue-600 transition-transform ${
                      activeSection === "faq4" ? "rotate-90" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                {activeSection === "faq4" && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      The main hacking phase starts on September 12th, 2025 at 09:00 AM. 
                      Although, students can start brainstorming and building their solutions the moment they create their team cna chose their tracks.
                      Teams will have to finish up their prototypes in the actuaal hackathon day and then pitch it to the Judges panel.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ Item 5 */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => setActiveSection(activeSection === "faq5" ? "" : "faq5")}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-blue-600 font-medium">What are the prizes?</span>
                  <svg
                    className={`w-5 h-5 text-blue-600 transition-transform ${
                      activeSection === "faq5" ? "rotate-90" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                {activeSection === "faq5" && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      Finalists will be recieving certificates and recognizations.
                      Top Teams will get the opportunity to represent Invertis University at SIH 2025, where they can win 
                      cash prizes up to ₹1.5 Lakhs. Additionally, they'll receive certificates and National Level recognition.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ Item 6 */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => setActiveSection(activeSection === "faq6" ? "" : "faq6")}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-blue-600 font-medium">How do I register my team?</span>
                  <svg
                    className={`w-5 h-5 text-blue-600 transition-transform ${
                      activeSection === "faq6" ? "rotate-90" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                {activeSection === "faq6" && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      Team registrations are open from 20th Aug to 23rd Aug. Click the Register button above to submit 
                      your team details. Make sure to include all team member information and your preferred Theme/Track.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ Item 7 */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => setActiveSection(activeSection === "faq7" ? "" : "faq7")}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-blue-600 font-medium">What technologies can I use?</span>
                  <svg
                    className={`w-5 h-5 text-blue-600 transition-transform ${
                      activeSection === "faq7" ? "rotate-90" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                {activeSection === "faq7" && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      You can use any technology stack of your choice - web technologies, mobile apps, AI/ML, IoT, 
                      blockchain, or any other emerging technology. The focus is on innovative problem-solving based on your chosen Track.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ Item 8 */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => setActiveSection(activeSection === "faq8" ? "" : "faq8")}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-blue-600 font-medium">Will there be mentors available?</span>
                  <svg
                    className={`w-5 h-5 text-blue-600 transition-transform ${
                      activeSection === "faq8" ? "rotate-90" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                {activeSection === "faq8" && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      Yes, experienced mentors and industry professionals of Invertis Incubartion Center will be available during the hackathon to guide 
                      teams and provide technical assistance. There will also be orientation sessions before the main event.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Support */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Still have questions? We're here to help!
              </p>
              <div className="flex items-center justify-center space-x-4">
                <Button 
                  className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-6 py-3 rounded-md"
                  onClick={() => window.open("mailto:l.singhshivam1@gmail.com", "_blank")}
                >
                  <Link className="w-4 h-4 mr-2" />
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-indigo-900/90 backdrop-blur-sm py-12 text-white" role="contentinfo">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <span className="text-2xl font-bold">Hackभूमि</span>
                <div
                  className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-orange-500 rotate-90"
                  aria-hidden="true"
                ></div>
                <span className="text-lg font-medium text-orange-400">SIH 2025</span>
              </div>
              <div className="text-white/80 text-center md:text-right">
                <p>© 2025 Invertis University.</p>
                <p className="mt-1">
                  Contact:{" "}
                  <a href="mailto:l.singhshivam1@gmail.com" className="text-orange-400 hover:underline">
                    l.singhshivam1@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="relative max-w-4xl max-h-full">
              <h2 id="modal-title" className="sr-only">
                Fullscreen Image
              </h2>
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:bg-white/10"
                onClick={() => setSelectedImage(null)}
                aria-label="Close fullscreen image"
              >
                <X className="w-6 h-6" />
              </Button>
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Fullscreen image from hackathon"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}

      </div>
    </>
  )
}
