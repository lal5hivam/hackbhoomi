'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, AlertTriangle, User, Mail, Phone, Github, Hash } from 'lucide-react';

interface TeamMember {
  name: string;
  studentId: string;
  mobile: string;
  github: string;
  email: string;
}

interface FormData {
  track: 'open-innovation' | 'robowars' | 'both' | '';
  category: 'hardware' | 'software' | '';
  problemStatement: string[];
  teamName: string;
  teamLead: TeamMember;
  members: TeamMember[];
}

interface RegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const problemStatements = {
  hardware: [
    'SIH25014 – Waste Segregation Monitoring',
    'SIH25015 – Intelligent Pesticide Sprinkler',
    'SIH25020 – Contactless Track Monitoring',
    'SIH25021 – Laser QR Marking System',
    'SIH25025 – E-tongue Sensor Device',
    'SIH25051 – Renewable Energy Monitor',
    'SIH25053 – Onion Storage Improvement System',
    'SIH25054 – MCB Short-Circuit Tester',
    'SIH25055 – Cable Prep Automation',
    'SIH25056 – Gold Testing Alternative System',
    'SIH25057 – Metrology Compliance Checker',
    'SIH25058 – Tamper Detection in Instruments',
    'SIH25062 – Smart Hilly Agriculture System',
    'SIH25063 – Break Detection in AC Lines',
    'SIH25064 – Grid Renewable Hosting Analyzer',
  ],
  software: [
    'SIH25008 – Disaster Preparedness Education Platform',
    'SIH25009 – Gamified Environmental Education',
    'SIH25010 – Smart Crop Advisory App',
    'SIH25011 – Attendance & Activity App',
    'SIH25012 – Rural School Attendance System',
    'SIH25013 – Real-Time Public Transport Tracker',
    'SIH25016 – Attendance Analytics Dashboard',
    'SIH25017 – Alumni Engagement Portal',
    'SIH25018 – Telemedicine Access Portal',
    'SIH25019 – Rural Learning Platform',
    'SIH25028 – Smart Classroom Scheduler',
    'SIH25029 – Academia Validator',
    'SIH25031 – Civic Issue Reporting Tool',
    'SIH25026 – EMR API Integration',
    'SIH25027 – Botanical Traceability Dashboard',
  ],
};

const RegistrationForm: React.FC<RegistrationFormProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showWarning, setShowWarning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<FormData>({
    track: '',
    category: '',
    problemStatement: [],
    teamName: '',
    teamLead: { name: '', studentId: '', mobile: '', github: '', email: '' },
    members: Array(3).fill({ name: '', studentId: '', mobile: '', github: '', email: '' }),
  });

  const totalSteps = formData.track === 'open-innovation' ? 6 : formData.track === 'robowars' ? 5 : formData.track === 'both' ? 6 : 1;

  const handleClose = () => {
    setShowWarning(true);
  };

  const confirmClose = () => {
    setShowWarning(false);
    setCurrentStep(1);
    setFormData({
      track: '',
      category: '',
      problemStatement: [],
      teamName: '',
      teamLead: { name: '', studentId: '', mobile: '', github: '', email: '' },
      members: Array(3).fill({ name: '', studentId: '', mobile: '', github: '', email: '' }),
    });
    onClose();
  };

  const cancelClose = () => {
    setShowWarning(false);
  };

  const handleNext = () => {
    // Clear previous errors
    setErrors({});
    
    // Validate current step
    const newErrors: Record<string, string> = {};
    
    if (currentStep === 1) {
      // Step 1 validation
      if (!formData.track) {
        newErrors.track = 'Please select a track';
      }
      if (!formData.teamName.trim()) {
        newErrors.teamName = 'Team name is required';
      }
      if (!formData.teamLead.name.trim()) {
        newErrors.teamLeadName = 'Team lead name is required';
      }
      if (!formData.teamLead.studentId.trim()) {
        newErrors.teamLeadStudentId = 'Student ID is required';
      }
      if (!formData.teamLead.mobile.trim()) {
        newErrors.teamLeadMobile = 'Mobile number is required';
      }
      if (!formData.teamLead.email.trim()) {
        newErrors.teamLeadEmail = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.teamLead.email)) {
        newErrors.teamLeadEmail = 'Please enter a valid email';
      }
    } else if (currentStep === 2 && (formData.track === 'open-innovation' || formData.track === 'both')) {
      // Step 2 validation for Open Innovation/Both
      if (!formData.category) {
        newErrors.category = 'Please select a category';
      }
      if (formData.problemStatement.length !== 3) {
        newErrors.problemStatement = 'Please select exactly 3 problem statements';
      }
    } else if (currentStep >= (formData.track === 'open-innovation' || formData.track === 'both' ? 3 : 2)) {
      // Team member validation
      const memberIndex = formData.track === 'open-innovation' || formData.track === 'both' ? currentStep - 3 : currentStep - 2;
      const member = formData.members[memberIndex];
      
      if (!member.name.trim()) {
        newErrors[`member${memberIndex}Name`] = 'Name is required';
      }
      if (!member.studentId.trim()) {
        newErrors[`member${memberIndex}StudentId`] = 'Student ID is required';
      }
      if (!member.mobile.trim()) {
        newErrors[`member${memberIndex}Mobile`] = 'Mobile number is required';
      }
      if (!member.email.trim()) {
        newErrors[`member${memberIndex}Email`] = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(member.email)) {
        newErrors[`member${memberIndex}Email`] = 'Please enter a valid email';
      }
    }
    
    // If there are errors, don't proceed
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Proceed to next step
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setErrors({}); // Clear errors when going back
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    // Validate all fields one last time
    const newErrors: Record<string, string> = {};
    
    // Check if all team members are filled
    const memberIndex = formData.track === 'open-innovation' || formData.track === 'both' ? currentStep - 3 : currentStep - 2;
    const member = formData.members[memberIndex];
    
    if (!member.name.trim()) newErrors[`member${memberIndex}Name`] = 'Name is required';
    if (!member.studentId.trim()) newErrors[`member${memberIndex}StudentId`] = 'Student ID is required';
    if (!member.mobile.trim()) newErrors[`member${memberIndex}Mobile`] = 'Mobile number is required';
    if (!member.email.trim()) {
      newErrors[`member${memberIndex}Email`] = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(member.email)) {
      newErrors[`member${memberIndex}Email`] = 'Please enter a valid email';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Show loading state
    setIsSubmitting(true);

    try {
      // Import the submission service
      const { submitToGoogleSheets } = await import('@/lib/googleSheets');
      
      // Prepare data for submission
      const submissionData = {
        teamName: formData.teamName,
        track: formData.track,
        category: formData.category,
        problemStatements: formData.problemStatement,
        teamLead: formData.teamLead,
        members: formData.members,
        timestamp: new Date().toLocaleString('en-IN', { 
          timeZone: 'Asia/Kolkata',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        }),
      };

      // Submit to Google Sheets
      const result = await submitToGoogleSheets(submissionData);

      setIsSubmitting(false);

      if (result.success) {
        // Show success modal
        setShowSuccessModal(true);
      } else {
        // Show error modal
        setErrorMessage(result.message);
        setShowErrorModal(true);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setIsSubmitting(false);
      setErrorMessage('An unexpected error occurred. Please check your internet connection and try again.');
      setShowErrorModal(true);
    }
  };

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
    confirmClose();
  };

  const handleErrorClose = () => {
    setShowErrorModal(false);
  };

  const updateTeamLead = (field: keyof TeamMember, value: string) => {
    setFormData({
      ...formData,
      teamLead: { ...formData.teamLead, [field]: value },
    });
  };

  const updateMember = (index: number, field: keyof TeamMember, value: string) => {
    const newMembers = [...formData.members];
    newMembers[index] = { ...newMembers[index], [field]: value };
    setFormData({ ...formData, members: newMembers });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={handleClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 relative">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-3xl font-bold text-white mb-2">Inverthon Registration</h2>
            <p className="text-indigo-100">Join the innovation revolution</p>
            
            {/* Progress Bar */}
            <div className="mt-4 bg-white/20 rounded-full h-2 overflow-hidden">
              <motion.div
                className="bg-white h-full rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <p className="text-white text-sm mt-2">Step {currentStep} of {totalSteps}</p>
          </div>

          {/* Form Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-250px)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step 1: Track Selection & Team Lead Info */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Team Lead Information</h3>
                    
                    {/* Track Selection */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Select Track <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {[
                          { value: 'open-innovation', label: 'Open Innovation', icon: '💡' },
                          { value: 'robowars', label: 'RoboWars', icon: '🤖' },
                          { value: 'both', label: 'Both', icon: '🚀' },
                        ].map((track) => (
                          <button
                            key={track.value}
                            onClick={() => {
                              setFormData({ ...formData, track: track.value as any });
                              setErrors({ ...errors, track: '' });
                            }}
                            className={`p-4 rounded-xl border-2 transition-all ${
                              formData.track === track.value
                                ? 'border-indigo-600 bg-indigo-50 shadow-lg scale-105'
                                : errors.track
                                ? 'border-red-300 hover:border-red-400'
                                : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
                            }`}
                          >
                            <div className="text-3xl mb-2">{track.icon}</div>
                            <div className="font-semibold text-gray-800">{track.label}</div>
                          </button>
                        ))}
                      </div>
                      {errors.track && (
                        <p className="mt-2 text-sm text-red-600 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.track}
                        </p>
                      )}
                    </div>

                    {/* Team Name */}
                    <InputField
                      icon={<User />}
                      label="Team Name"
                      required
                      value={formData.teamName}
                      onChange={(e) => {
                        setFormData({ ...formData, teamName: e.target.value });
                        setErrors({ ...errors, teamName: '' });
                      }}
                      placeholder="Enter your team name"
                      error={errors.teamName}
                    />

                    {/* Team Lead Details */}
                    <div className="space-y-4">
                      <InputField
                        icon={<User />}
                        label="Team Lead Name"
                        required
                        value={formData.teamLead.name}
                        onChange={(e) => {
                          updateTeamLead('name', e.target.value);
                          setErrors({ ...errors, teamLeadName: '' });
                        }}
                        placeholder="Enter full name"
                        error={errors.teamLeadName}
                      />
                      <InputField
                        icon={<Hash />}
                        label="Student ID"
                        required
                        value={formData.teamLead.studentId}
                        onChange={(e) => {
                          updateTeamLead('studentId', e.target.value);
                          setErrors({ ...errors, teamLeadStudentId: '' });
                        }}
                        placeholder="Enter student ID"
                        error={errors.teamLeadStudentId}
                      />
                      <InputField
                        icon={<Phone />}
                        label="Mobile Number"
                        required
                        type="tel"
                        value={formData.teamLead.mobile}
                        onChange={(e) => {
                          updateTeamLead('mobile', e.target.value);
                          setErrors({ ...errors, teamLeadMobile: '' });
                        }}
                        placeholder="+91 XXXXX XXXXX"
                        error={errors.teamLeadMobile}
                      />
                      <InputField
                        icon={<Mail />}
                        label="Email ID"
                        required
                        type="email"
                        value={formData.teamLead.email}
                        onChange={(e) => {
                          updateTeamLead('email', e.target.value);
                          setErrors({ ...errors, teamLeadEmail: '' });
                        }}
                        placeholder="email@example.com"
                        error={errors.teamLeadEmail}
                      />
                      <InputField
                        icon={<Github />}
                        label="GitHub Username"
                        value={formData.teamLead.github}
                        onChange={(e) => updateTeamLead('github', e.target.value)}
                        placeholder="github.com/username (Optional)"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Category & Problem Statement (Only for Open Innovation) */}
                {currentStep === 2 && formData.track === 'open-innovation' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Project Details</h3>
                    
                    {/* Category Selection */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Choose Category <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { value: 'hardware', label: 'Hardware', icon: '⚙️' },
                          { value: 'software', label: 'Software', icon: '💻' },
                        ].map((cat) => (
                          <button
                            key={cat.value}
                            onClick={() => setFormData({ ...formData, category: cat.value as any, problemStatement: [] })}
                            className={`p-6 rounded-xl border-2 transition-all ${
                              formData.category === cat.value
                                ? 'border-purple-600 bg-purple-50 shadow-lg scale-105'
                                : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                            }`}
                          >
                            <div className="text-4xl mb-2">{cat.icon}</div>
                            <div className="font-semibold text-gray-800 text-lg">{cat.label}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Problem Statement Selection */}
                    {formData.category && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <div className="mb-3">
                          <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Choose any THREE Problem Statements <span className="text-red-500">*</span>
                          </label>
                          <p className="text-xs text-gray-500">
                            Selected: {formData.problemStatement.length} / 3
                          </p>
                        </div>
                        <div className="space-y-2">
                          {problemStatements[formData.category].map((ps, index) => {
                            const isSelected = formData.problemStatement.includes(ps);
                            const canSelect = formData.problemStatement.length < 3 || isSelected;
                            
                            return (
                              <button
                                key={index}
                                onClick={() => {
                                  if (isSelected) {
                                    setFormData({
                                      ...formData,
                                      problemStatement: formData.problemStatement.filter(p => p !== ps)
                                    });
                                  } else if (formData.problemStatement.length < 3) {
                                    setFormData({
                                      ...formData,
                                      problemStatement: [...formData.problemStatement, ps]
                                    });
                                  }
                                }}
                                disabled={!canSelect}
                                className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                                  isSelected
                                    ? 'border-indigo-600 bg-indigo-50 shadow-md'
                                    : canSelect
                                    ? 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
                                    : 'border-gray-200 bg-gray-100 opacity-50 cursor-not-allowed'
                                }`}
                              >
                                <div className="flex items-center">
                                  <div className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center flex-shrink-0 ${
                                    isSelected ? 'border-indigo-600 bg-indigo-600' : 'border-gray-300'
                                  }`}>
                                    {isSelected && (
                                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                      </svg>
                                    )}
                                  </div>
                                  <span className="font-medium text-gray-800">{ps}</span>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </div>
                )}

                {/* Step 2 for Both track */}
                {currentStep === 2 && formData.track === 'both' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Project Details</h3>
                    
                    {/* Category Selection */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Choose Category <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { value: 'hardware', label: 'Hardware', icon: '⚙️' },
                          { value: 'software', label: 'Software', icon: '💻' },
                        ].map((cat) => (
                          <button
                            key={cat.value}
                            onClick={() => setFormData({ ...formData, category: cat.value as any, problemStatement: [] })}
                            className={`p-6 rounded-xl border-2 transition-all ${
                              formData.category === cat.value
                                ? 'border-purple-600 bg-purple-50 shadow-lg scale-105'
                                : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                            }`}
                          >
                            <div className="text-4xl mb-2">{cat.icon}</div>
                            <div className="font-semibold text-gray-800 text-lg">{cat.label}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Problem Statement Selection */}
                    {formData.category && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <div className="mb-3">
                          <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Choose any THREE Problem Statements <span className="text-red-500">*</span>
                          </label>
                          <p className="text-xs text-gray-500">
                            Selected: {formData.problemStatement.length} / 3
                          </p>
                        </div>
                        <div className="space-y-2">
                          {problemStatements[formData.category].map((ps, index) => {
                            const isSelected = formData.problemStatement.includes(ps);
                            const canSelect = formData.problemStatement.length < 3 || isSelected;
                            
                            return (
                              <button
                                key={index}
                                onClick={() => {
                                  if (isSelected) {
                                    setFormData({
                                      ...formData,
                                      problemStatement: formData.problemStatement.filter(p => p !== ps)
                                    });
                                  } else if (formData.problemStatement.length < 3) {
                                    setFormData({
                                      ...formData,
                                      problemStatement: [...formData.problemStatement, ps]
                                    });
                                  }
                                }}
                                disabled={!canSelect}
                                className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                                  isSelected
                                    ? 'border-indigo-600 bg-indigo-50 shadow-md'
                                    : canSelect
                                    ? 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
                                    : 'border-gray-200 bg-gray-100 opacity-50 cursor-not-allowed'
                                }`}
                              >
                                <div className="flex items-center">
                                  <div className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center flex-shrink-0 ${
                                    isSelected ? 'border-indigo-600 bg-indigo-600' : 'border-gray-300'
                                  }`}>
                                    {isSelected && (
                                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                      </svg>
                                    )}
                                  </div>
                                  <span className="font-medium text-gray-800">{ps}</span>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </div>
                )}

                {/* Steps 3-7: Team Members */}
                {currentStep >= (formData.track === 'open-innovation' || formData.track === 'both' ? 3 : 2) && currentStep <= totalSteps && (
                  <div className="space-y-6">
                    {(() => {
                      const memberIndex = formData.track === 'open-innovation' || formData.track === 'both' ? currentStep - 3 : currentStep - 2;
                      return (
                        <>
                          <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Team Member {memberIndex + 2}
                          </h3>
                          <div className="space-y-4">
                            <InputField
                              icon={<User />}
                              label="Name"
                              required
                              value={formData.members[memberIndex]?.name || ''}
                              onChange={(e) => updateMember(memberIndex, 'name', e.target.value)}
                              placeholder="Enter full name"
                            />
                            <InputField
                              icon={<Hash />}
                              label="Student ID"
                              required
                              value={formData.members[memberIndex]?.studentId || ''}
                              onChange={(e) => updateMember(memberIndex, 'studentId', e.target.value)}
                              placeholder="Enter student ID"
                            />
                            <InputField
                              icon={<Phone />}
                              label="Mobile Number"
                              required
                              type="tel"
                              value={formData.members[memberIndex]?.mobile || ''}
                              onChange={(e) => updateMember(memberIndex, 'mobile', e.target.value)}
                              placeholder="+91 XXXXX XXXXX"
                            />
                            <InputField
                              icon={<Mail />}
                              label="Email ID"
                              required
                              type="email"
                              value={formData.members[memberIndex]?.email || ''}
                              onChange={(e) => updateMember(memberIndex, 'email', e.target.value)}
                              placeholder="email@example.com"
                            />
                            <InputField
                              icon={<Github />}
                              label="GitHub Username"
                              value={formData.members[memberIndex]?.github || ''}
                              onChange={(e) => updateMember(memberIndex, 'github', e.target.value)}
                              placeholder="github.com/username (Optional)"
                            />
                          </div>
                        </>
                      );
                    })()}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer with Navigation Buttons */}
          <div className="bg-gray-50 p-6 border-t border-gray-200 flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all ${
                currentStep === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-50'
              }`}
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Previous
            </button>

            {currentStep < totalSteps ? (
              <button
                onClick={handleNext}
                className="flex items-center px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
              >
                Next
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`px-8 py-3 rounded-lg font-semibold transition-all shadow-lg ${
                  isSubmitting
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 hover:shadow-xl'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Registration'}
              </button>
            )}
          </div>
        </motion.div>

        {/* Loading Overlay */}
        <AnimatePresence>
          {isSubmitting && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 rounded-2xl"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white rounded-2xl p-8 shadow-2xl text-center max-w-sm"
              >
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <motion.div
                    className="absolute inset-0 border-4 border-indigo-200 rounded-full"
                  />
                  <motion.div
                    className="absolute inset-0 border-4 border-indigo-600 rounded-full border-t-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Submitting Registration</h3>
                <p className="text-gray-600">Please wait while we process your registration...</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Success Modal */}
        <AnimatePresence>
          {showSuccessModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70 flex items-center justify-center p-4 z-50 rounded-2xl"
              onClick={handleSuccessClose}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful! 🎉</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Your team has been successfully registered for Inverthon 2.0. 
                    You will receive a confirmation email shortly with further details.
                  </p>
                  <button
                    onClick={handleSuccessClose}
                    className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error Modal */}
        <AnimatePresence>
          {showErrorModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70 flex items-center justify-center p-4 z-50 rounded-2xl"
              onClick={handleErrorClose}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Submission Failed</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {errorMessage}
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={handleErrorClose}
                      className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => {
                        handleErrorClose();
                        handleSubmit();
                      }}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Warning Modal */}
        <AnimatePresence>
          {showWarning && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70 flex items-center justify-center p-4"
              onClick={cancelClose}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                  Warning!
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  All your progress will be lost. Are you sure you want to close the registration form?
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={cancelClose}
                    className="flex-1 px-4 py-3 rounded-lg font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmClose}
                    className="flex-1 px-4 py-3 rounded-lg font-semibold bg-red-600 text-white hover:bg-red-700 transition-colors"
                  >
                    Yes, Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

// Input Field Component
interface InputFieldProps {
  icon: React.ReactNode;
  label: string;
  required?: boolean;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  icon,
  label,
  required,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
}) => {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          {icon}
        </div>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:ring-2 outline-none transition-all ${
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
              : 'border-gray-200 focus:border-indigo-500 focus:ring-indigo-200'
          }`}
          required={required}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
};

export default RegistrationForm;
