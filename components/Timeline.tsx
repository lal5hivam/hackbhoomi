"use client"

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
    date: "31st Aug.",
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

export default function Timeline() {
  return (
    <section id="program" className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
            Event Timeline
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your journey from registration to representing Invertis University at SIH 2025
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line - hidden on mobile, visible on larger screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 h-full rounded-full"></div>
          
          <div className="space-y-8 md:space-y-12">
            {events.map((event, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">{event.title}</h3>
                      {event.date && (
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {event.date}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 leading-relaxed">{event.desc}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}