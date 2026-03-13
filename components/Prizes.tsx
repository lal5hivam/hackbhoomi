'use client';

import React, { useState } from 'react';
import { Award, Gift, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Prizes: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'software' | 'hardware' | 'robowars'>('software');

  const prizeData = {
    software: {
      title: 'Software Track',
      prizes: [
        { place: '1st Place', amount: '₹11k', label: 'WINNER', color: 'yellow' },
        { place: '2nd Place', amount: '₹5.1k', label: 'RUNNER-UP', color: 'gray' },
        { place: '3rd Place', amount: '₹3.1k', label: '2ND RUNNER-UP', color: 'orange' },
      ],
    },
    hardware: {
      title: 'Hardware Track',
      prizes: [
        { place: '1st Place', amount: '₹11k', label: 'WINNER', color: 'yellow' },
        { place: '2nd Place', amount: '₹5.1k', label: 'RUNNER-UP', color: 'gray' },
        { place: '3rd Place', amount: '₹3.1k', label: '2ND RUNNER-UP', color: 'orange' },
      ],
    },
    robowars: {
      title: 'RoboWars Track',
      prizes: [
        { place: '1st Place', amount: '₹11k', label: 'WINNER', color: 'yellow' },
        { place: '2nd Place', amount: '₹5.1k', label: 'RUNNER-UP', color: 'gray' },
        { place: '3rd Place', amount: '₹3.1k', label: '2ND RUNNER-UP', color: 'orange' },
      ],
    },
  };

  const benefits = [
    "Winner's Trophy",
    'Certificates for all team members',
    'Mentorship opportunities',
    'Swag & Goodies',
  ];

  return (
    <section id="prizes" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Prize <span className="text-blue-600">Pool</span>
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Win exciting prizes and recognition for your innovative solutions
          </p>
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-3 rounded-full text-xl font-bold shadow-lg">
            Total Prize Pool: ₹60k
          </div>
        </div>

        {/* Competition Structure Info */}
        <div className="mb-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Competition Structure</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">🚀 Open Innovation</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Software Track</li>
                <li>Hardware Track</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">🤖 RoboWars</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Balloon Popping Competition</li>
                <li>Obstacle Path Challenge</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 flex-wrap gap-4">
          <button
            onClick={() => setActiveTab('software')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'software'
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            Software Track
          </button>
          <button
            onClick={() => setActiveTab('hardware')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'hardware'
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            Hardware Track
          </button>
          <button
            onClick={() => setActiveTab('robowars')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'robowars'
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            RoboWars Track
          </button>
        </div>

        {/* Prize Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {prizeData[activeTab].prizes.map((prize, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: index * 0.1,
                }}
                className={`relative bg-gradient-to-br ${
                  prize.color === 'yellow'
                    ? 'from-yellow-50 to-yellow-100 border-yellow-400'
                    : prize.color === 'gray'
                    ? 'from-gray-50 to-gray-100 border-gray-400'
                    : 'from-orange-50 to-orange-100 border-orange-400'
                } border-4 rounded-2xl p-8 shadow-xl`}
              >
              {/* Badge */}
              <div
                className={`absolute -top-4 left-1/2 transform -translate-x-1/2 ${
                  prize.color === 'yellow'
                    ? 'bg-yellow-500'
                    : prize.color === 'gray'
                    ? 'bg-gray-500'
                    : 'bg-orange-500'
                } text-white px-4 py-1 rounded-full text-xs font-bold uppercase`}
              >
                {prize.label}
              </div>

              {/* Icon */}
              <div
                className={`w-20 h-20 mx-auto mb-6 mt-4 rounded-full ${
                  prize.color === 'yellow'
                    ? 'bg-orange-500'
                    : prize.color === 'gray'
                    ? 'bg-gray-500'
                    : 'bg-orange-500'
                } flex items-center justify-center`}
              >
                {index === 0 ? (
                  <Award className="w-10 h-10 text-white" />
                ) : index === 1 ? (
                  <Trophy className="w-10 h-10 text-white" />
                ) : (
                  <Gift className="w-10 h-10 text-white" />
                )}
              </div>

              {/* Place */}
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">
                {prize.place}
              </h3>

              {/* Amount */}
              <p
                className={`text-4xl font-bold text-center mb-6 ${
                  prize.color === 'yellow'
                    ? 'text-orange-600'
                    : prize.color === 'gray'
                    ? 'text-gray-700'
                    : 'text-orange-600'
                }`}
              >
                {prize.amount}
              </p>

              {/* Benefits */}
              <div className="space-y-2">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center text-gray-700 text-sm">
                    <span className="text-yellow-500 mr-2">⭐</span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">
            All participants will receive certificates of participation
          </p>
        </div>
      </div>
    </section>
  );
};

export default Prizes;