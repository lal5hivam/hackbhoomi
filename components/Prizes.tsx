import React from 'react';

const Prizes: React.FC = () => {
  return (
    <section id="prizes" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Hackbhoomi Prizes & Awards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Top 5 Prizes */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Top 5 Teams
            </h3>
            <p className="text-gray-600 mb-4">
              Exciting prizes await the top 5 teams! Stay tuned for details on
              cash awards, gadgets, or exclusive opportunities.
            </p>
            <div className="flex justify-center space-x-4">
              <span className="text-yellow-500 text-3xl">🏆</span>
              <span className="text-gray-500 text-3xl">🎉</span>
            </div>
          </div>

          {/* Certificate of Participation */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Certificate of Participation
            </h3>
            <p className="text-gray-600 mb-4">
              Every participant will receive a digital Certificate of
              Participation to celebrate your contribution to Hackbhoomi.
            </p>
            <span className="text-blue-500 text-3xl">📜</span>
          </div>

          {/* Certificate of Achievement */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Certificate of Achievement
            </h3>
            <p className="text-gray-600 mb-4">
              Standout performers will be awarded a Certificate of Achievement to
              recognize their exceptional skills and creativity.
            </p>
            <span className="text-green-500 text-3xl">⭐</span>
          </div>
        </div>
        <p className="text-center text-gray-600 mt-12 italic">
          Final prize details will be announced soon. Keep innovating!
        </p>
      </div>
    </section>
  );
};

export default Prizes;