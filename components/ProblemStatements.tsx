'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Lightbulb } from 'lucide-react';

const problemStatements = {
  software: [
    { id: 'SIH25008', title: 'Disaster Preparedness Education Platform' },
    { id: 'SIH25009', title: 'Gamified Environmental Education' },
    { id: 'SIH25010', title: 'Smart Crop Advisory App' },
    { id: 'SIH25011', title: 'Attendance & Activity App' },
    { id: 'SIH25012', title: 'Rural School Attendance System' },
    { id: 'SIH25013', title: 'Real-Time Public Transport Tracker' },
    { id: 'SIH25016', title: 'Attendance Analytics Dashboard' },
    { id: 'SIH25017', title: 'Alumni Engagement Portal' },
    { id: 'SIH25018', title: 'Telemedicine Access Portal' },
    { id: 'SIH25019', title: 'Rural Learning Platform' },
    { id: 'SIH25028', title: 'Smart Classroom Scheduler' },
    { id: 'SIH25029', title: 'Academia Validator' },
    { id: 'SIH25031', title: 'Civic Issue Reporting Tool' },
    { id: 'SIH25026', title: 'EMR API Integration' },
    { id: 'SIH25027', title: 'Botanical Traceability Dashboard' },
  ],
  hardware: [
    { id: 'SIH25014', title: 'Waste Segregation Monitoring' },
    { id: 'SIH25015', title: 'Intelligent Pesticide Sprinkler' },
    { id: 'SIH25020', title: 'Contactless Track Monitoring' },
    { id: 'SIH25021', title: 'Laser QR Marking System' },
    { id: 'SIH25025', title: 'E-tongue Sensor Device' },
    { id: 'SIH25051', title: 'Renewable Energy Monitor' },
    { id: 'SIH25053', title: 'Onion Storage Improvement System' },
    { id: 'SIH25054', title: 'MCB Short-Circuit Tester' },
    { id: 'SIH25055', title: 'Cable Prep Automation' },
    { id: 'SIH25056', title: 'Gold Testing Alternative System' },
    { id: 'SIH25057', title: 'Metrology Compliance Checker' },
    { id: 'SIH25058', title: 'Tamper Detection in Instruments' },
    { id: 'SIH25062', title: 'Smart Hilly Agriculture System' },
    { id: 'SIH25063', title: 'Break Detection in AC Lines' },
    { id: 'SIH25064', title: 'Grid Renewable Hosting Analyzer' },
  ],
};

export default function ProblemStatements() {
  const [activeTab, setActiveTab] = useState<'software' | 'hardware'>('software');

  return (
    <section id="problem-statements" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Lightbulb className="w-8 h-8 text-orange-500 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Problem Statements
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our curated list of problem statements across Software and Hardware tracks
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-lg shadow-md p-1">
            <button
              onClick={() => setActiveTab('software')}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'software'
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Code className="w-5 h-5 mr-2" />
              Software Track
            </button>
            <button
              onClick={() => setActiveTab('hardware')}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'hardware'
                  ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Cpu className="w-5 h-5 mr-2" />
              Hardware Track
            </button>
          </div>
        </div>

        {/* Problem Statements Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {problemStatements[activeTab].map((problem, index) => (
            <motion.div
              key={problem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`p-6 rounded-xl shadow-lg border-2 transition-all duration-300 ${
                activeTab === 'software'
                  ? 'bg-gradient-to-br from-blue-50 to-white border-blue-200 hover:border-blue-400 hover:shadow-xl'
                  : 'bg-gradient-to-br from-purple-50 to-white border-purple-200 hover:border-purple-400 hover:shadow-xl'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${
                    activeTab === 'software'
                      ? 'bg-blue-500 text-white'
                      : 'bg-purple-500 text-white'
                  }`}
                >
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3
                    className={`font-bold text-sm mb-2 ${
                      activeTab === 'software' ? 'text-blue-600' : 'text-purple-600'
                    }`}
                  >
                    {problem.id}
                  </h3>
                  <p className="text-gray-800 font-medium text-base leading-relaxed">
                    {problem.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 p-6 bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-xl"
        >
          <p className="text-gray-700 text-center">
            <span className="font-bold text-orange-600">Note:</span> Teams participating in Open Innovation must select{' '}
            <span className="font-bold">exactly 3 problem statements</span> from their chosen track (Software or Hardware) during registration.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
