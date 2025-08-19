import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Track = {
  title: string;
  description: string;
  color: string;
  logo: string;
};

const tracks: Track[] = [
  {
    title: "Smart Automation",
    description:
      "Ideas focused on the intelligent use of resources for transforming and advancements of technology with combining the artificial intelligence to explore more various sources and get valuable insights.",
    
    color: "bg-green-500",
    logo: "/track-logo/icon_communication.png",
  },
  {
    title: "Fitness & Sports",
    description:
      "Ideas that can boost fitness activities and assist in keeping fit.",
    
    color: "bg-blue-500",
    logo: "/track-logo/icon_sport.png",
  },
  {
    title: "Heritage & Culture",
    description:
      "Ideas that showcase the rich cultural heritage and traditions of India.",
    
    color: "bg-pink-500",
    logo: "/track-logo/icon_heritage.png",
  },
  {
    title: "MedTech/BioTech/ HealthTech",
    description:
      "Cutting-edge technology in these sectors continues to be in demand. Recent shifts in healthcare trends, growing populations also present an array of opportunities for innovation.",
    
    color: "bg-yellow-500",
    logo: "/track-logo/icon_healthcare.png",
  },
  {
    title: "Agriculture, FoodTech & Rural Development",
    description:
      "Developing solutions, keeping in mind the need to enhance the primary sector of India - Agriculture and to manage and process our agriculture produce.",
    
    color: "bg-red-500",
    logo: "/track-logo/icon_rural.png",
  },
  {
    title: "Smart Vehicles",
    description:
      "Creating intelligent devices to improve commutation sector",
    color: "bg-teal-500",
    logo: "/track-logo/icon_automobiles.png",
  },
  {
    title: "Transportation & Logistics",
    description:
      "Submit your ideas to address the growing pressures on the city’s resources, transport networks, and logistic infrastructure.",
    color: "bg-teal-500",
    logo: "/track-logo/icon_agriculture.png",
  },
  {
    title: "Robotics & Drones",
    description:
      "There is a need to design drones and robots that can solve some of the pressing challenges of India such as handling medical emergencies, search and rescue operations, etc.",
    color: "bg-teal-500",
    logo: "/track-logo/icon_drone.png",
  },
  {
    title: "Clean & Green Technology",
    description:
      "Solutions could be in the form of waste segregation, disposal, and improve sanitization systems.",
    color: "bg-teal-500",
    logo: "/track-logo/icon_waste.png",
  },
  {
    title: "Tourism",
    description:
      "A solution/idea that can boost the current situation of the tourism industries including hotels, travel and others.",
    color: "bg-teal-500",
    logo: "/track-logo/icon_tourism.png",
  },
  {
    title: "Renewable/ sustainable Energy",
    description:
      "Innovative ideas that help manage and generate renewable /sustainable sources more efficiently.",
    color: "bg-teal-500",
    logo: "/track-logo/icon_renewable.png",
  },
  {
    title: "Blockchain & Cybersecurity",
    description:
      "Provide ideas in a decentralized and distributed ledger technology used to store digital information that powers cryptocurrencies and NFTs and can radically change multiple sectors.",
    color: "bg-teal-500",
    logo: "/track-logo/icon_security.png",
  },
  {
    title: "Smart Education",
    description:
      "Smart education,a concept that describes learning in digital age. It enables learners to learn more effectively, efficiently, flexibly and comfortably.",
    color: "bg-teal-500",
    logo: "/track-logo/smart-education.png",
  },
  {
    title: "Disaster Management",
    description:
      "Disaster management includes ideas related to risk mitigation, Planning and management before, after or during a disaster.",
    color: "bg-teal-500",
    logo: "/track-logo/disaster-management.png",
  },
  {
    title: "Toys & Games",
    description:
      "Challenge your creative mind to conceptualize and develop unique toys and games based on our civilization, history, and culture etc.",
    color: "bg-teal-500",
    logo: "/track-logo/toys-theme.png",
  },
  {
    title: "Miscellaneous",
    description:
      "Technology ideas in tertiary sectors like Hospitality, Financial Services, Entertainment and Retail.",
    color: "bg-teal-500",
    logo: "/track-logo/icon_education.png",
  },
  {
    title: "Space Technology",
    description:
      "Space technology refers to the application of engineering principles to the design, development, manufacture, and operation of devices and systems for space travel and exploration.",
    color: "bg-teal-500",
    logo: "/track-logo/icon_drone.png",
  },
];

const TracksSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = () => {
    if (scrollRef.current) {
      return scrollRef.current.offsetWidth; // shift ≈ width of 3 cards
    }
    return 0;
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollByAmount(),
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollByAmount(),
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="problem-statements" className="w-full py-16 bg-transparent backdrop-blur-md text-white flex flex-col items-center">
      <h1 className="text-3xl md:text-6xl font-bold text-center mb-10 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
        SIH 2025 
        <span className="text-white"> 🚀</span>
        <span className="invert-text"> Tracks</span>
      </h1>

      <div className="relative w-full max-w-6xl px-6">
        {/* Left Button */}
        {/* <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-purple-500 text-white shadow-lg hover:bg-purple-600 transition"
        >
          <ChevronLeft />
        </button> */}

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-12 scrollbar-hide"
        >
          {tracks.map((track, index) => (
            <div
              key={index}
              className="snap-start min-w-[300px] max-w-sm flex-shrink-0 rounded-2xl shadow-xl p-6 text-center bg-gray-900 border border-gray-700 hover:scale-105 transition"
            >
              <div
                    className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full ${track.color}`}
                    >
                    <img
                        src={track.logo}
                        alt={track.title}
                        className="w-20 h-16"
                    />
                    </div>
              <h2 className="mt-4 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                {track.title}
              </h2>
              <p className="text-gray-300 mt-2">{track.description}</p>
              
            </div>
            
          ))}
        </div>

        {/* Right Button */}
        {/* <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-purple-500 text-white shadow-lg hover:bg-purple-600 transition"
        >
          <ChevronRight />
        </button> */}
      </div>

        <p className="mt-8 text-white text-xl text-center max-w-6xl">
            Explore the diverse tracks for SIH 2025, each offering unique challenges and opportunities to innovate and make a difference.
            <br />
            <span className="text-purple-400 font-semibold">
                <a
                href={"https://www.sih.gov.in/sih2024PS"}
                className="inline-block mt-4 text-blue-400 underline hover:text-blue-500"
              >
                SIH 2024 Problem Statments
              </a>
            </span>
        </p>
    </section>
  );
};

export default TracksSection;
