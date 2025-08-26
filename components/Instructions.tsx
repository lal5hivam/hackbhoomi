"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download } from "lucide-react"

export default function Instructions() {
  return (
    <section id="instructions" className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50" aria-labelledby="instructions-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="instructions-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
            How to Participate
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your step-by-step guide to joining HackBhoomi and representing Invertis University
          </p>
        </div>

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
              <Badge className="bg-orange-500 text-white font-bold mb-2">HackBhoomi</Badge>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Happy Hacking</h3>
              <ul className="text-gray-600 mb-4 space-y-2">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  48-hour intensive hackathon at Invertis University campus
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Build, code, and create innovative solutions
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Access to mentors, resources, and technical support
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Present your solution to expert judges
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Network with fellow innovators and industry experts
                </li>
              </ul>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-indigo-900">Event Details</span>
                <Button
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                  onClick={() => window.open("https://forms.gle/fsCyrMx66uLinKU68", "_blank")}
                >
                  Register Now
                </Button>
              </div>
            </div>
          </article>

          <article className="bg-white overflow-hidden shadow-lg rounded-lg">
            <div className="h-48 overflow-hidden">
              <img
                src="https://oslo-pull.b-cdn.net/AI_JAM_L%C3%B8rdag-11%20Large.jpeg"
                alt="Team CodeCrafters vinner førsteplass med AI-chatbot"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <Badge className="bg-green-600 text-white font-bold mb-2">SIH 2025</Badge>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Represent Invertis</h3>
              <ul className="text-gray-600 mb-4 space-y-2">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Top 25 teams will be selected to represent Invertis University
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Compete at the national level Smart India Hackathon 2025
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Win cash prizes up to ₹1.5 Lakhs per team
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Gain national recognition and industry connections
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Opportunity to work on real government and industry projects
                </li>
              </ul>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-indigo-900">National Competition</span>
                <Button
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
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
                  Idea Form
                </Button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}