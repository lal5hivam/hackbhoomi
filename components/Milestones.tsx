"use client"

const milestones = [
  { number: "13,91,884+", label: "Participating Students" },
  { number: "12800+", label: "SIH Alumni Network" },
  { number: "6497", label: "Participating Institutes" },
  { number: "2877", label: "Total Problem Statements" },
  { number: "133", label: "Startups Details Submitted" },
];

export default function Milestones() {
  return (
    <section id="Milestones" className="bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-4">
            SIH MILESTONES
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Witness the scale and impact of India's largest innovation platform
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {milestones.map((item, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-red-500 mb-3">
                {item.number}
              </div>
              <div className="text-sm sm:text-base text-gray-300 font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}