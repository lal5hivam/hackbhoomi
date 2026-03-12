'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Cpu, Lightbulb, X, BookOpen, Target, Sparkles, Monitor, Wrench, Globe, Database, Cloud } from 'lucide-react';

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
      title: 'Disaster Preparedness and Response Education System for Schools and Colleges',
      description: {
        background:
          'Natural disasters cause widespread damage due to lack of community preparedness. Most citizens are unaware of proper emergency protocols, evacuation routes, and survival techniques. A digital platform can bridge this gap by providing accessible, localized disaster preparedness training.',
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
        background:
          'Environmental awareness among youth remains low despite growing climate concerns. Traditional teaching methods fail to engage younger audiences effectively. Gamification can transform environmental education into an engaging, habit-forming experience.',
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
      title: 'Smart Crop Advisory System for Small and Marginal Farmers',
      description: {
        background:
          'Indian farmers often face crop losses due to incorrect crop selection, poor weather predictions, and untimely pest management. Access to data-driven agricultural advice remains limited in rural areas, leading to suboptimal yields.',
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
        background:
          'Educational institutions struggle to track student engagement beyond basic attendance. Extra-curricular participation, project involvement, and skill development activities are rarely documented systematically, making holistic student assessment difficult.',
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
        background:
          'Rural schools face severe attendance tracking challenges due to lack of digital infrastructure, unreliable internet, and limited technical literacy among staff. Paper-based systems are prone to errors and manipulation.',
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
        background:
          'Commuters in Indian cities waste significant time waiting for buses and other public transport due to lack of real-time tracking information. This leads to reduced public transport usage and increased private vehicle dependency.',
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
        background:
          'Educational administrators lack tools to analyze attendance patterns across departments, courses, and time periods. Without data-driven insights, interventions for chronically absent students are reactive rather than proactive.',
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
        background:
          'Institutions struggle to maintain active relationships with alumni, missing opportunities for mentorship, fundraising, and industry connections. Existing alumni databases are outdated and engagement efforts are fragmented.',
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
      title: 'Digital Learning Platform for Rural School Students in Nabha',
      description: {
        background:
          'Students in rural India have limited access to quality educational content and qualified teachers. Digital divide and language barriers further restrict learning opportunities, widening the urban-rural education gap.',
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
      id: 'SIH25019',
      title: 'Rural Learning Platform',
      description: {
        background:
          'Students in rural India have limited access to quality educational content and qualified teachers. Digital divide and language barriers further restrict learning opportunities, widening the urban-rural education gap.',
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
      id: 'SIH25022',
      title: 'Maximizing Section Throughput Using AI-Powered Precise Train Traffic Control',
      description: {
        background:
          'Indian Railways faces congestion on high-density routes. Traditional manual traffic control limits the maximum number of trains that can safely pass through a section at any given time.',
        expectedOutcome: [
          'AI algorithm to predict and optimize train movements dynamically',
          'Real-time traffic control dashboard for section controllers',
          'Increased train throughput and reduced waiting times',
          'Automated conflict resolution for scheduling overlaps',
        ],
      },
    },
    {
      id: 'SIH25023',
      title: 'Comprehensive Cloud-Based Practice Management & Nutrient Analysis Software for Ayurvedic Dietitians',
      description: {
        background:
          'Ayurvedic dietitians lack specialized software to manage their practice and calculate nutritional values according to holistic Ayurvedic principles (such as Prakriti and Dosha).',
        expectedOutcome: [
          'Cloud-based patient management and appointment system',
          'Nutrient analysis engine tailored specifically to Ayurvedic ingredients',
          'Automated Ayurveda-focused diet plan generation',
          'Progress tracking dashboard for patient health metrics',
        ],
      },
    },
    {
      id: 'SIH25026',
      title: 'Develop API Code to Integrate NAMASTE and/or ICD-11 via Traditional Medicine Module 2 into Existing EMR Systems',
      description: {
        background:
          'Hospitals use disparate Electronic Medical Record (EMR) systems that cannot easily communicate or standardize traditional medicine data alongside allopathic records. This fragmentation hinders patient care continuity.',
        expectedOutcome: [
          'Standardized API middleware enabling interoperability between different EMR systems',
          'Integration of NAMASTE and ICD-11 TM2 coding standards',
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
        background:
          'The herbal medicines and botanical products industry lacks traceability from raw material sourcing to finished products. This creates quality concerns, regulatory challenges, and difficulty in ensuring sustainable harvesting practices.',
        expectedOutcome: [
          'Dashboard tracking botanical raw materials from harvest to final product',
          'GPS mapping of source/harvest areas',
          'Quality test results linked to each batch',
          'End-to-end batch tracking through the supply chain',
          'Automated regulatory compliance report generation',
        ],
      },
    },
    {
      id: 'SIH25028',
      title: 'Smart Classroom and Timetable Scheduler for Optimizing University Operations',
      description: {
        background:
          'Institutions face inefficiencies in classroom and resource allocation, leading to scheduling conflicts, underutilized spaces, and faculty dissatisfaction. Manual scheduling processes cannot handle the complexity of modern academic requirements.',
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
        background:
          'Academic credential fraud is a growing concern with fake degrees and certificates being used for employment and admissions. Manual verification is slow, expensive, and often unreliable across institutional boundaries.',
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
        background:
          'Citizens face difficulty reporting civic issues like potholes, broken streetlights, or garbage dumps to municipal authorities. The lack of a streamlined reporting mechanism results in unresolved issues and citizen frustration.',
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
      id: 'SIH25035',
      title: 'Sentiment Analysis System to Process Public Feedback from an eConsultation Module for Draft Laws',
      description: {
        background:
          'Government eConsultation portals receive massive amounts of public feedback on draft laws. Manually analyzing this unstructured text data is time-consuming and inefficient.',
        expectedOutcome: [
          'NLP-based sentiment analysis engine to process text feedback',
          'Automated categorization of public comments (positive, negative, neutral)',
          'Dashboard visualizing public opinion trends and key concerns on draft laws',
          'Summary report generation for policymakers',
        ],
      },
    },
    {
      id: 'SIH25067',
      title: 'Real-Time Groundwater Resource Evaluation Using DWLR (Digital Water Level Recorder) Data',
      description: {
        background:
          'Groundwater depletion is a critical issue. Evaluating resources in real-time using Digital Water Level Recorder (DWLR) data is necessary for sustainable water management and policy enforcement.',
        expectedOutcome: [
          'Data pipeline to ingest and clean real-time DWLR telemetry',
          'Analytics dashboard mapping groundwater level trends geospatially',
          'Predictive modeling for future groundwater availability and depletion alerts',
          'Automated reporting for water resource management authorities',
        ],
      },
    },
  ],
  hardware: [
    {
      id: 'SIH25001',
      title: 'Smart Community Health Monitoring and Early Warning System for Water-Borne Diseases in Rural Northeast India',
      description: {
        background:
          'Rural Northeast India faces frequent outbreaks of water-borne diseases due to contaminated sources. A smart monitoring and early warning system is required to track water quality and predict local health outbreaks.',
        expectedOutcome: [
          'IoT-based water quality monitoring sensors deployed at community water sources',
          'Early warning alert system delivering SMS/app notifications to local communities',
          'Health data dashboard for rural healthcare workers to track outbreak clusters',
          'Solar-powered hardware design for continuous operation in remote areas',
        ],
      },
    },
    {
      id: 'SIH25005',
      title: 'Image-Based Animal Type Classification for Cattle and Buffaloes',
      description: {
        background:
          'Accurate identification and classification of cattle and buffaloes are essential for livestock management, breeding programs, and insurance claims. Manual classification is subjective and error-prone.',
        expectedOutcome: [
          'Edge AI camera system or mobile integration for rapid animal image capture',
          'Machine learning model trained for specific breed and type classification',
          'Digital registry system for farmers to log and track their livestock',
          'Offline processing capabilities for use in remote farms',
        ],
      },
    },
    {
      id: 'SIH25014',
      title: 'Waste Segregation Monitoring',
      description: {
        background:
          'Urban waste management systems struggle with improper segregation at source, leading to contaminated recyclables, overburdened landfills, and inefficient waste processing. Monitoring compliance at household level remains impractical with current methods.',
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
      title: 'Intelligent Pesticide Sprinkling System',
      description: {
        background:
          'Excessive and indiscriminate pesticide usage harms soil health, contaminates water sources, and poses health risks to farmers. Manual spraying leads to uneven distribution and significant chemical waste.',
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
        background:
          'Railway track inspection is largely manual, slow, and hazardous. Undetected track defects like cracks, misalignments, and rail wear cause derailments. Continuous automated monitoring can prevent accidents and reduce maintenance costs.',
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
      title: 'AI-Based Development of Laser-Based QR Code Marking on Track Fittings on Indian Railways',
      description: {
        background:
          'Conventional product marking methods are easily tampered with or degraded over time in harsh railway environments. The industry needs permanent, machine-readable markings for traceability and regulatory compliance.',
        expectedOutcome: [
          'Laser-based system for permanent QR code engraving on metal railway track fittings',
          'High-speed marking suitable for industrial production lines',
          'Variable data encoding support for unique product identification',
          'Built-in AI readability verification with automatic quality grading',
        ],
      },
    },
    {
      id: 'SIH25025',
      title: 'E-tongue Sensor Device',
      description: {
        background:
          'Quality assessment of food, beverages, and pharmaceuticals currently relies on trained human taste panels, which are subjective, expensive, and inconsistent. An electronic tasting device can provide objective, repeatable measurements.',
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
        background:
          'Small-scale renewable energy installations (rooftop solar, small wind turbines) often underperform due to lack of monitoring, maintenance alerts, and performance optimization. Owners cannot easily identify issues or track ROI.',
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
        background:
          'India loses 25-40% of its onion produce during storage due to sprouting, rotting, and weight loss caused by poor ventilation, humidity, and temperature control in traditional storage structures.',
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
        background:
          'Miniature Circuit Breakers (MCBs) are critical safety devices but testing their tripping characteristics requires expensive lab equipment. Field testing and quality verification of MCBs remains inaccessible to electricians and small manufacturers.',
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
        background:
          'Cable preparation (stripping, cutting, crimping) in manufacturing and electrical work is labor-intensive, error-prone, and inconsistent when done manually. Poor cable preparation leads to unreliable electrical connections and safety hazards.',
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
      title: 'Exploring New/Alternative Non-Destructive Assaying Methods for Testing Gold Jewellery and Artefacts',
      description: {
        background:
          'Traditional gold purity testing methods (like fire assay) are destructive, hazardous, and time-consuming. Jewelers need a non-destructive, quick, and highly accurate way to verify gold purity.',
        expectedOutcome: [
          'Non-destructive gold purity testing equipment using alternative methods (e.g., XRF, ultrasonic)',
          'High-accuracy karat purity determination without damaging the artefact',
          'Portable or desktop form factor suitable for assaying centers',
          'Instant digital test certificate generation',
        ],
      },
    },
    {
      id: 'SIH25057',
      title: 'Metrology Compliance Checker',
      description: {
        background:
          'Legal metrology enforcement agencies manually check weighing and measuring instruments at shops and businesses, a process that is slow, subjective, and prone to corruption. Automated verification can improve accuracy and transparency.',
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
        background:
          'Utility meters (electricity, water, gas) and commercial weighing instruments are frequently tampered with to show lower readings, causing revenue losses. Current tamper detection relies on periodic manual inspections.',
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
        background:
          'Agriculture in hilly terrains faces unique challenges—steep slopes, terraced farming, water scarcity, and inaccessibility of modern farming equipment. These constraints lead to low productivity and farmer migration from hill regions.',
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
        background:
          'Broken or downed overhead AC power lines pose severe electrocution risks and cause power outages. Current protection systems may not detect high-impedance faults caused by broken conductors touching the ground.',
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
        background:
          'Power distribution grids have limited capacity to absorb distributed renewable energy without causing voltage fluctuations, reverse power flow, and equipment damage. Utilities need tools to assess how much renewable capacity a grid segment can host.',
        expectedOutcome: [
          'Hardware-software system measuring grid parameters (voltage, frequency, impedance)',
          'Calculation of maximum renewable energy hosting capacity per grid segment',
          'Visual reports with capacity heat maps',
          'Actionable recommendations for grid upgrades',
        ],
      },
    },
    {
      id: 'SIH25071',
      title: 'AI-Based Rockfall Prediction and Alert System for Open-Pit Mines',
      description: {
        background:
          'Rockfalls in open-pit mines pose severe safety hazards to workers and heavy machinery. An early prediction system utilizing field sensors is critical to prevent fatal accidents and operational downtime.',
        expectedOutcome: [
          'Sensor network (e.g., LiDAR, radar, or vibration sensors) deployed along mine slopes',
          'AI model to analyze continuous sensor data and predict imminent rock slope failures',
          'Real-time alert sirens and mobile notifications for immediate site evacuation',
          'Geospatial dashboard tracking slope stability trends over time',
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
            <span className="font-bold text-orange-600">Note:</span> Teams participating in PS-Based mode must select{' '}
            <span className="font-bold">exactly 3 problem statements</span> from their chosen track (Software or Hardware) during registration.
          </p>
        </motion.div>

        {/* Open Innovation Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-purple-500 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Open Innovation
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-10">
            Have your own idea? Build a creative solution from scratch — no fixed problem statement needed!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Software Open Innovation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-md">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Software Track</h3>
                  <p className="text-sm text-gray-600">Choose a field and build your own solution</p>
                </div>
              </div>

              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-500" />
                Choose Your Field
              </h4>
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-blue-200 shadow-sm">
                  <Globe className="w-4 h-4 text-blue-600" />
                  <span className="font-semibold text-gray-800 text-sm">Web Development</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-blue-200 shadow-sm">
                  <Database className="w-4 h-4 text-green-600" />
                  <span className="font-semibold text-gray-800 text-sm">Data Science</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-blue-200 shadow-sm">
                  <Cloud className="w-4 h-4 text-cyan-600" />
                  <span className="font-semibold text-gray-800 text-sm">Cloud</span>
                </div>
              </div>

              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-500" />
                Instructions
              </h4>
              <ul className="space-y-2">
                {[
                  'Define your own real-world problem and propose a creative software solution',
                  'Select one of the three fields: Web Development, Data Science, or Cloud',
                  'Build a working prototype/MVP demonstrating your solution',
                  'All code must be organized in a GitHub repository with proper documentation',
                  'Prepare a compelling pitch deck explaining your solution\'s impact and feasibility',
                  'Present your solution to judges with a live demo',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-gray-700 text-sm leading-relaxed">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                      {idx + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Hardware Open Innovation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-md">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Hardware Track</h3>
                  <p className="text-sm text-gray-600">Design and build your own hardware idea</p>
                </div>
              </div>

              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-purple-500" />
                Instructions
              </h4>
              <ul className="space-y-2">
                {[
                  'Identify a real-world problem that can be solved with a hardware solution',
                  'Design your prototype using Arduino, Raspberry Pi, ESP32, or similar platforms',
                  'Integrate sensors, actuators, and IoT connectivity as needed',
                  'Develop both the hardware prototype and any supporting software/app',
                  'Bring your own components — prototypes can be built before the hackathon',
                  'Document your circuit design, components used, and system architecture',
                  'Demonstrate real hardware functionality — simulations are not accepted',
                  'Present a working demonstration to the judges with a clear pitch',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-gray-700 text-sm leading-relaxed">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-500 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                      {idx + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
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
              className="relative w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gradient Header */}
              <div className={`relative flex-shrink-0 px-6 pt-6 pb-8 sm:px-8 sm:pt-8 sm:pb-10 ${
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
              <div className="bg-white overflow-y-auto flex-1 min-h-0 p-6 sm:p-8 space-y-6">
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
              <div className="flex-shrink-0 bg-gray-50 border-t border-gray-200 px-6 py-4 sm:px-8 flex justify-end">
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
