'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Cpu, Lightbulb, X, BookOpen, Target } from 'lucide-react';

interface Description {
  background: string;
  expectedOutcome: string[];
}

interface ProblemStatement {
  id: string;
  title: string;
  description: Description;
}

const problemStatements: { software: ProblemStatement[]; hardware: ProblemStatement[] } = {
  software: [
    {
      id: 'SIH25008',
      title: 'Disaster Preparedness Education Platform',
      description: {
        background: 'Natural disasters cause widespread damage due to lack of community preparedness. Most citizens are unaware of proper emergency protocols, evacuation routes, and survival techniques. A digital platform can bridge this gap by providing accessible, localized disaster preparedness training.',
        expectedOutcome: [
          'Interactive web/mobile platform delivering region-specific disaster preparedness courses',
          'Quizzes and simulations to test and reinforce emergency knowledge',
          'Real-time disaster alerts integrated with weather and seismic data',
          'Multi-language support for regional accessibility',
          'Offline functionality for low-connectivity areas',
        ],
      },
    },
    {
      id: 'SIH25009',
      title: 'Gamified Environmental Education',
      description: {
        background: 'Environmental awareness among youth remains low despite growing climate concerns. Traditional teaching methods fail to engage younger audiences effectively. Gamification can transform environmental education into an engaging, habit-forming experience.',
        expectedOutcome: [
          'Gamified application teaching environmental conservation through challenges and rewards',
          'Community leaderboards to foster healthy competition',
          'Points system for real-world eco-friendly actions (recycling, tree planting, energy conservation)',
          'Progress tracking and achievement badges for sustained engagement',
        ],
      },
    },
    {
      id: 'SIH25010',
      title: 'Smart Crop Advisory App',
      description: {
        background: 'Indian farmers often face crop losses due to incorrect crop selection, poor weather predictions, and untimely pest management. Access to data-driven agricultural advice remains limited in rural areas, leading to suboptimal yields.',
        expectedOutcome: [
          'Personalized crop recommendations based on soil type, weather forecasts, and market trends',
          'Pest and disease detection using image recognition',
          'Integration with government agricultural schemes and subsidies',
          'Localized weather alerts and seasonal planting guidance',
        ],
      },
    },
    {
      id: 'SIH25011',
      title: 'Attendance & Activity App',
      description: {
        background: 'Educational institutions struggle to track student engagement beyond basic attendance. Extra-curricular participation, project involvement, and skill development activities are rarely documented systematically, making holistic student assessment difficult.',
        expectedOutcome: [
          'Comprehensive app tracking attendance alongside student activities',
          'Automated participation reports and analytics dashboards for educators',
          'QR/NFC-based check-in support for events and classes',
          'Integration with existing LMS platforms',
        ],
      },
    },
    {
      id: 'SIH25012',
      title: 'Rural School Attendance System',
      description: {
        background: 'Rural schools face severe attendance tracking challenges due to lack of digital infrastructure, unreliable internet, and limited technical literacy among staff. Paper-based systems are prone to errors and manipulation.',
        expectedOutcome: [
          'Lightweight, offline-first attendance system optimized for low-cost devices',
          'Biometric or image-based student verification',
          'Auto-sync with cloud when internet connectivity is available',
          'Automated report generation for education authorities',
        ],
      },
    },
    {
      id: 'SIH25013',
      title: 'Real-Time Public Transport Tracker',
      description: {
        background: 'Commuters in Indian cities waste significant time waiting for buses and other public transport due to lack of real-time tracking information. This leads to reduced public transport usage and increased private vehicle dependency.',
        expectedOutcome: [
          'Real-time tracking showing live bus locations and estimated arrival times',
          'Route information with stop details and interchange suggestions',
          'Crowd density indicators for each bus',
          'Multi-agency support and integrated trip planning features',
        ],
      },
    },
    {
      id: 'SIH25016',
      title: 'Attendance Analytics Dashboard',
      description: {
        background: 'Educational administrators lack tools to analyze attendance patterns across departments, courses, and time periods. Without data-driven insights, interventions for chronically absent students are reactive rather than proactive.',
        expectedOutcome: [
          'Visual analytics dashboard with attendance trends and pattern detection',
          'Predictive alerts identifying at-risk students before chronic absenteeism',
          'Drill-down views from institution level to individual student',
          'Automated intervention recommendations based on attendance data',
        ],
      },
    },
    {
      id: 'SIH25017',
      title: 'Alumni Engagement Portal',
      description: {
        background: 'Institutions struggle to maintain active relationships with alumni, missing opportunities for mentorship, fundraising, and industry connections. Existing alumni databases are outdated and engagement efforts are fragmented.',
        expectedOutcome: [
          'Portal connecting alumni with current students and faculty',
          'Mentorship program matching and job board features',
          'Event management and donation/fundraising campaigns',
          'Networking features with automated profile updates',
          'Engagement analytics for institutional administrators',
        ],
      },
    },
    {
      id: 'SIH25018',
      title: 'Telemedicine Access Portal',
      description: {
        background: 'Rural and semi-urban populations face severe healthcare access challenges due to shortage of doctors and long travel distances to hospitals. Telemedicine can democratize healthcare access but existing solutions are too complex for target users.',
        expectedOutcome: [
          'Simplified portal enabling video consultations with doctors',
          'Digital prescription management and health record maintenance',
          'Voice-based navigation for non-tech-savvy users',
          'Regional language support for wider accessibility',
          'Integration with local pharmacy networks for medicine delivery',
        ],
      },
    },
    {
      id: 'SIH25019',
      title: 'Rural Learning Platform',
      description: {
        background: 'Students in rural India have limited access to quality educational content and qualified teachers. Digital divide and language barriers further restrict learning opportunities, widening the urban-rural education gap.',
        expectedOutcome: [
          'Offline-capable learning platform with curriculum-aligned content',
          'Video lessons and interactive exercises in regional languages',
          'Student progress tracking and performance analytics',
          'Peer learning and discussion features',
          'Optimized for low-bandwidth environments and budget devices',
        ],
      },
    },
    {
      id: 'SIH25028',
      title: 'Smart Classroom Scheduler',
      description: {
        background: 'Institutions face inefficiencies in classroom and resource allocation, leading to scheduling conflicts, underutilized spaces, and faculty dissatisfaction. Manual scheduling processes cannot handle the complexity of modern academic requirements.',
        expectedOutcome: [
          'AI-powered scheduling system for optimal classroom, lab, and faculty allocation',
          'Constraint handling for room capacity, equipment, and faculty preferences',
          'Student batch size optimization and automatic conflict resolution',
          'Visual timetable views with drag-and-drop adjustments',
        ],
      },
    },
    {
      id: 'SIH25029',
      title: 'Academia Validator',
      description: {
        background: 'Academic credential fraud is a growing concern with fake degrees and certificates being used for employment and admissions. Manual verification is slow, expensive, and often unreliable across institutional boundaries.',
        expectedOutcome: [
          'Blockchain-based or cryptographically secure credential issuance platform',
          'Instant verification capability for employers and admissions offices',
          'Bulk credential issuance support for institutions',
          'Tamper-proof audit trails for all credential transactions',
        ],
      },
    },
    {
      id: 'SIH25031',
      title: 'Civic Issue Reporting Tool',
      description: {
        background: 'Citizens face difficulty reporting civic issues like potholes, broken streetlights, or garbage dumps to municipal authorities. The lack of a streamlined reporting mechanism results in unresolved issues and citizen frustration.',
        expectedOutcome: [
          'Mobile app for geotagged civic issue reporting with photo/video evidence',
          'Automatic routing of reports to relevant municipal departments',
          'Real-time status tracking for reported issues',
          'Community upvoting to surface high-priority problems',
          'Admin dashboard for authorities to manage and prioritize issues',
        ],
      },
    },
    {
      id: 'SIH25026',
      title: 'EMR API Integration',
      description: {
        background: 'Hospitals use disparate Electronic Medical Record (EMR) systems that cannot communicate with each other. This fragmentation hinders patient care continuity, research, and healthcare analytics across institutions.',
        expectedOutcome: [
          'Standardized API middleware enabling interoperability between different EMR systems',
          'Compliance with healthcare data standards (HL7/FHIR)',
          'Secure data exchange with end-to-end encryption',
          'Patient consent management for data sharing',
          'Format mapping and transformation between disparate data schemas',
        ],
      },
    },
    {
      id: 'SIH25027',
      title: 'Botanical Traceability Dashboard',
      description: {
        background: 'The herbal medicines and botanical products industry lacks traceability from raw material sourcing to finished products. This creates quality concerns, regulatory challenges, and difficulty in ensuring sustainable harvesting practices.',
        expectedOutcome: [
          'Dashboard tracking botanical raw materials from harvest to final product',
          'GPS mapping of source/harvest areas',
          'Quality test results linked to each batch',
          'End-to-end batch tracking through the supply chain',
          'Automated regulatory compliance report generation',
        ],
      },
    },
  ],
  hardware: [
    {
      id: 'SIH25014',
      title: 'Waste Segregation Monitoring',
      description: {
        background: 'Urban waste management systems struggle with improper segregation at source, leading to contaminated recyclables, overburdened landfills, and inefficient waste processing. Monitoring compliance at household level remains impractical with current methods.',
        expectedOutcome: [
          'Smart bin system with sensors detecting waste types (wet/dry/hazardous)',
          'Real-time fill level monitoring and collection service alerts',
          'Dashboard for municipal authorities with area-wise segregation compliance rates',
          'Data analytics for optimizing collection routes and schedules',
        ],
      },
    },
    {
      id: 'SIH25015',
      title: 'Intelligent Pesticide Sprinkler',
      description: {
        background: 'Excessive and indiscriminate pesticide usage harms soil health, contaminates water sources, and poses health risks to farmers. Manual spraying leads to uneven distribution and significant chemical waste.',
        expectedOutcome: [
          'Autonomous or semi-autonomous sprinkler system with computer vision',
          'Targeted pest-affected area identification and precision spraying',
          'Minimum 40% reduction in chemical pesticide usage',
          'Maintained or improved crop protection effectiveness',
        ],
      },
    },
    {
      id: 'SIH25020',
      title: 'Contactless Track Monitoring',
      description: {
        background: 'Railway track inspection is largely manual, slow, and hazardous. Undetected track defects like cracks, misalignments, and rail wear cause derailments. Continuous automated monitoring can prevent accidents and reduce maintenance costs.',
        expectedOutcome: [
          'Contactless monitoring using ultrasonic, laser, or vision-based sensors',
          'Mountable on rail vehicles for real-time defect detection',
          'Automatic defect severity classification',
          'GPS-tagged alerts transmitted to maintenance teams',
        ],
      },
    },
    {
      id: 'SIH25021',
      title: 'Laser QR Marking System',
      description: {
        background: 'Conventional product marking methods (ink printing, labels) are easily tampered with or degraded over time. Industries need permanent, machine-readable markings for traceability, anti-counterfeiting, and regulatory compliance.',
        expectedOutcome: [
          'Laser-based system for permanent QR code engraving on metal, plastic, and glass',
          'High-speed marking suitable for production lines',
          'Variable data encoding support for unique product identification',
          'Built-in readability verification with automatic quality grading',
        ],
      },
    },
    {
      id: 'SIH25025',
      title: 'E-tongue Sensor Device',
      description: {
        background: 'Quality assessment of food, beverages, and pharmaceuticals currently relies on trained human taste panels, which are subjective, expensive, and inconsistent. An electronic tasting device can provide objective, repeatable measurements.',
        expectedOutcome: [
          'Portable electronic tongue with sensor arrays for taste detection',
          'Quantification of basic taste profiles: sweet, sour, salty, bitter, umami',
          'Digital readouts with comparison against standard taste profiles',
          'Data logging and export capabilities for lab analysis',
        ],
      },
    },
    {
      id: 'SIH25051',
      title: 'Renewable Energy Monitor',
      description: {
        background: 'Small-scale renewable energy installations (rooftop solar, small wind turbines) often underperform due to lack of monitoring, maintenance alerts, and performance optimization. Owners cannot easily identify issues or track ROI.',
        expectedOutcome: [
          'IoT-based device tracking energy generation, consumption, and battery status',
          'System health monitoring for solar panels and wind turbines',
          'Mobile alerts for performance anomalies',
          'Performance analytics dashboard with ROI tracking',
          'Predictive maintenance recommendations',
        ],
      },
    },
    {
      id: 'SIH25053',
      title: 'Onion Storage Improvement System',
      description: {
        background: 'India loses 25-40% of its onion produce during storage due to sprouting, rotting, and weight loss caused by poor ventilation, humidity, and temperature control in traditional storage structures.',
        expectedOutcome: [
          'Automated environment control for temperature, humidity, and ventilation',
          'Sensors for early spoilage and sprouting detection',
          'Cost-effective design suitable for small-scale farmers',
          'Mobile alerts when storage conditions deviate from optimal range',
        ],
      },
    },
    {
      id: 'SIH25054',
      title: 'MCB Short-Circuit Tester',
      description: {
        background: 'Miniature Circuit Breakers (MCBs) are critical safety devices but testing their tripping characteristics requires expensive lab equipment. Field testing and quality verification of MCBs remains inaccessible to electricians and small manufacturers.',
        expectedOutcome: [
          'Portable, affordable MCB testing device for field use',
          'Verification of tripping current, tripping time, and insulation resistance',
          'Testing against BIS standards with pass/fail display',
          'Test certificate generation with calibration traceability',
        ],
      },
    },
    {
      id: 'SIH25055',
      title: 'Cable Prep Automation',
      description: {
        background: 'Cable preparation (stripping, cutting, crimping) in manufacturing and electrical work is labor-intensive, error-prone, and inconsistent when done manually. Poor cable preparation leads to unreliable electrical connections and safety hazards.',
        expectedOutcome: [
          'Automated machine for insulation stripping, cutting to length, and terminal crimping',
          'Support for multiple wire gauges and cable sizes',
          'Consistent quality output with minimal manual intervention',
          'Camera-based quality inspection and verification system',
        ],
      },
    },
    {
      id: 'SIH25056',
      title: 'Gold Testing Alternative System',
      description: {
        background: 'Traditional gold purity testing methods (acid test, fire assay) are destructive, hazardous, and time-consuming. Consumers and small jewelers need a non-destructive, quick, and affordable way to verify gold purity accurately.',
        expectedOutcome: [
          'Non-destructive gold purity testing using XRF, conductivity, or ultrasonic methods',
          'High-accuracy karat purity determination',
          'Portable form factor suitable for jewelers and consumers',
          'Results within seconds with clear digital display',
        ],
      },
    },
    {
      id: 'SIH25057',
      title: 'Metrology Compliance Checker',
      description: {
        background: 'Legal metrology enforcement agencies manually check weighing and measuring instruments at shops and businesses, a process that is slow, subjective, and prone to corruption. Automated verification can improve accuracy and transparency.',
        expectedOutcome: [
          'Portable device connecting to weighing/measuring instruments',
          'Automatic calibration accuracy check against legal metrology standards',
          'Tamper-proof compliance certificate generation',
          'Results uploaded to a central regulatory database',
        ],
      },
    },
    {
      id: 'SIH25058',
      title: 'Tamper Detection in Instruments',
      description: {
        background: 'Utility meters (electricity, water, gas) and commercial weighing instruments are frequently tampered with to show lower readings, causing revenue losses. Current tamper detection relies on periodic manual inspections.',
        expectedOutcome: [
          'Smart tamper detection module retrofittable onto existing instruments',
          'Detection of physical tampering, magnetic interference, and firmware manipulation',
          'Real-time alert transmission to authorities',
          'Photographic evidence capture upon tamper detection',
        ],
      },
    },
    {
      id: 'SIH25062',
      title: 'Smart Hilly Agriculture System',
      description: {
        background: 'Agriculture in hilly terrains faces unique challenges—steep slopes, terraced farming, water scarcity, and inaccessibility of modern farming equipment. These constraints lead to low productivity and farmer migration from hill regions.',
        expectedOutcome: [
          'Integrated system with soil moisture sensors and automated drip irrigation',
          'Slope-aware farming tools designed for terraced agriculture',
          'Solar-powered operation for off-grid hill areas',
          'Remote monitoring and control via mobile app',
        ],
      },
    },
    {
      id: 'SIH25063',
      title: 'Break Detection in AC Lines',
      description: {
        background: 'Broken or downed overhead AC power lines pose severe electrocution risks and cause power outages. Current protection systems may not detect high-impedance faults caused by broken conductors touching the ground.',
        expectedOutcome: [
          'Detection system for broken conductors in overhead AC distribution lines',
          'Current signature analysis, impedance monitoring, or sensor-based detection',
          'Automatic isolation of the faulty line section',
          'Real-time alerts to utility control room with fault location',
        ],
      },
    },
    {
      id: 'SIH25064',
      title: 'Grid Renewable Hosting Analyzer',
      description: {
        background: 'Power distribution grids have limited capacity to absorb distributed renewable energy without causing voltage fluctuations, reverse power flow, and equipment damage. Utilities need tools to assess how much renewable capacity a grid segment can host.',
        expectedOutcome: [
          'Hardware-software system measuring grid parameters (voltage, frequency, impedance)',
          'Calculation of maximum renewable energy hosting capacity per grid segment',
          'Visual reports with capacity heat maps',
          'Actionable recommendations for grid upgrades',
        ],
      },
    },
  ],
};

export default function ProblemStatements() {
  const [activeTab, setActiveTab] = useState<'software' | 'hardware'>('software');
  const [selectedProblem, setSelectedProblem] = useState<ProblemStatement | null>(null);

  const closePopup = useCallback(() => setSelectedProblem(null), []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePopup();
    };
    if (selectedProblem) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedProblem, closePopup]);

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
              onClick={() => setSelectedProblem(problem)}
              className={`p-6 rounded-xl shadow-lg border-2 transition-all duration-300 cursor-pointer group ${
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
                  <span className={`inline-block mt-3 text-xs font-semibold tracking-wide uppercase ${
                    activeTab === 'software' ? 'text-blue-400 group-hover:text-blue-600' : 'text-purple-400 group-hover:text-purple-600'
                  } transition-colors`}>
                    Click to view details &rarr;
                  </span>
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

      {/* Problem Statement Detail Popup */}
      <AnimatePresence>
        {selectedProblem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={closePopup}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-hidden rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gradient Header */}
              <div className={`relative px-6 pt-6 pb-8 sm:px-8 sm:pt-8 sm:pb-10 ${
                activeTab === 'software'
                  ? 'bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800'
                  : 'bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800'
              }`}>
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/3" />

                {/* Close button */}
                <button
                  onClick={closePopup}
                  className="absolute top-4 right-4 text-white/70 hover:text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Badge */}
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-4 ${
                  activeTab === 'software'
                    ? 'bg-blue-500/30 text-blue-100 ring-1 ring-blue-400/30'
                    : 'bg-purple-500/30 text-purple-100 ring-1 ring-purple-400/30'
                }`}>
                  {activeTab === 'software' ? <Code className="w-3.5 h-3.5 mr-1.5" /> : <Cpu className="w-3.5 h-3.5 mr-1.5" />}
                  {activeTab} &middot; {selectedProblem.id}
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {selectedProblem.title}
                </h3>
              </div>

              {/* Body */}
              <div className="bg-white overflow-y-auto max-h-[calc(85vh-180px)] p-6 sm:p-8 space-y-6">
                {/* Background Section */}
                <div className="group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
                      activeTab === 'software' ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'
                    }`}>
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Background</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed pl-[52px]">
                    {selectedProblem.description.background}
                  </p>
                </div>

                {/* Divider */}
                <div className="border-t border-dashed border-gray-200" />

                {/* Expected Outcome Section */}
                <div className="group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
                      activeTab === 'software' ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'
                    }`}>
                      <Target className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Expected Outcome</h4>
                  </div>
                  <ul className="space-y-2.5 pl-[52px]">
                    {selectedProblem.description.expectedOutcome.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-gray-600 leading-relaxed">
                        <span className={`flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 ${
                          activeTab === 'software' ? 'bg-emerald-500' : 'bg-amber-500'
                        }`} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 border-t border-gray-200 px-6 py-4 sm:px-8 flex justify-end">
                <button
                  onClick={closePopup}
                  className={`px-6 py-2.5 rounded-lg font-semibold text-white transition-all shadow-md hover:shadow-lg ${
                    activeTab === 'software'
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                      : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700'
                  }`}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
