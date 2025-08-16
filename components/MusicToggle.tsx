"use client";

import { useState, useEffect, useRef } from "react";
import { FaCompactDisc, FaQuestionCircle } from "react-icons/fa";
import Link from "next/link";

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/alone.mp3");
      audioRef.current.loop = true;
    }

    if (isPlaying) {
      void audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }

    return () => {
      audioRef.current?.pause();
    };
  }, [isPlaying]);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center space-y-3">
      {/* Help & Support Button */}
      <Link href="https://linktr.ee/logiclarq">
        <button
          className="inline-flex items-center justify-center bg-red-400 hover:bg-red-500 p-3 rounded-full shadow-md transition-all"
          aria-label="Help and Support"
        >
          <FaQuestionCircle className="text-xl text-black" />
        </button>
      </Link>

      {/* Music Toggle Button */}
      <button
        onClick={() => setIsPlaying((prev) => !prev)}
        className="inline-flex items-center justify-center bg-gray-200 hover:bg-gray-300 p-4 rounded-full shadow-md transition-all"
        aria-label="Toggle music"
      >
        <FaCompactDisc
          className={`text-5xl transition-all ${
            isPlaying
              ? "text-[#D4AF37] animate-spin"
              : "text-black"
          }`}
        />
      </button>
    </div>
  );
};

export default MusicToggle;
