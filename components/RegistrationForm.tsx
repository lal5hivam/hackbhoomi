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
  problemStatement: string;
  teamLead: TeamMember;
  members: TeamMember[];
}

interface RegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const problemStatements = {
  hardware: [
    'IoT-based Smart Agriculture System',
    'Renewable Energy Monitoring Device',
    'Healthcare Wearable Technology',
    'Disaster Management Hardware Solution',
    'Smart Home Automation System',
  ],
  software: [
    'AI-powered Education Platform',
    'Blockchain-based Supply Chain',
    'Mental Health Support Application',
    'Smart City Management System',
    'Fintech Innovation Solution',
  ],
};

const RegistrationForm: React.FC<RegistrationFormProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    track: '',
    category: '',
    problemStatement: '',
    teamLead: { name: '', studentId: '', mobile: '', github: '', email: '' },
    members: Array(4).fill({ name: '', studentId: '', mobile: '', github: '', email: '' }),
  });

  const totalSteps = formData.track === 'open-innovation' ? 7 : formData.track === 'robowars' ? 6 : formData.track === 'both' ? 7 : 1;

  const handleClose = () => {
    setShowWarning(true);
  };

  const confirmClose = () => {
    setShowWarning(false);
    setCurrentStep(1);
    setFormData({
      track: '',
      category: '',
      problemStatement: '',
      teamLead: { name: '', studentId: '', mobile: '', github: '', email: '' },
      members: Array(4).fill({ name: '', studentId: '', mobile: '', github: '', email: '' }),
    });
    onClose();
  };

  const cancelClose = () => {
    setShowWarning(false);
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // TODO: Add submission logic
    alert('Form submission functionality to be implemented');
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
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
        onClick={handleClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 sm:p-6 relative flex-shrink-0">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:bg-white/20 rounded-full p-1.5 sm:p-2 transition-colors"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2 pr-8">
              Hackbhoomi Registration
            </h2>
            <p className="text-sm sm:text-base text-indigo-100">Join the innovation revolution</p>
            
            {/* Progress Bar */}
            <div className="mt-3 sm:mt-4 bg-white/20 rounded-full h-1.5 sm:h-2 overflow-hidden">
              <motion.div
                className="bg-white h-full rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <p className="text-white text-xs sm:text-sm mt-1.5 sm:mt-2">
              Step {currentStep} of {totalSteps}
            </p>
          </div>

          {/* Form Content */}
          <div className="p-4 sm:p-6 overflow-y-auto flex-1">
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
                  <div className="space-y-4 sm:space-y-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                      Team Lead Information
                    </h3>
                    
                    {/* Track Selection */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                        Select Track <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-3 gap-2 sm:gap-3">
                        {[
                          { value: 'open-innovation', label: 'Open Innovation', icon: '💡' },
                          { value: 'robowars', label: 'RoboWars', icon: '🤖' },
                          { value: 'both', label: 'Both', icon: '🚀' },
                        ].map((track) => (
                          <button
                            key={track.value}
                            onClick={() => setFormData({ ...formData, track: track.value as any })}
                            className={`p-2 sm:p-4 rounded-lg sm:rounded-xl border-2 transition-all ${
                              formData.track === track.value
                                ? 'border-indigo-600 bg-indigo-50 shadow-lg scale-105'
                                : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
                            }`}
                          >
                            <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{track.icon}</div>
                            <div className="font-semibold text-gray-800 text-xs sm:text-sm">
                              {track.label}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Team Lead Details */}
                    <div className="space-y-3 sm:space-y-4">
                      <InputField
                        icon={<User />}
                        label="Team Lead Name"
                        required
                        value={formData.teamLead.name}
                        onChange={(e) => updateTeamLead('name', e.target.value)}
                        placeholder="Enter full name"
                      />
                      <InputField
                        icon={<Hash />}
                        label="Student ID"
                        required
                        value={formData.teamLead.studentId}
                        onChange={(e) => updateTeamLead('studentId', e.target.value)}
                        placeholder="Enter student ID"
                      />
                      <InputField
                        icon={<Phone />}
                        label="Mobile Number"
                        required
                        type="tel"
                        value={formData.teamLead.mobile}
                        onChange={(e) => updateTeamLead('mobile', e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                      />
                      <InputField
                        icon={<Mail />}
                        label="Email ID"
                        required
                        type="email"
                        value={formData.teamLead.email}
                        onChange={(e) => updateTeamLead('email', e.target.value)}
                        placeholder="email@example.com"
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
                  <div className="space-y-4 sm:space-y-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                      Project Details
                    </h3>
                    
                    {/* Category Selection */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                        Choose Category <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        {[
                          { value: 'hardware', label: 'Hardware', icon: '⚙️' },
                          { value: 'software', label: 'Software', icon: '💻' },
                        ].map((cat) => (
                          <button
                            key={cat.value}
                            onClick={() => setFormData({ ...formData, category: cat.value as any, problemStatement: '' })}
                            className={`p-4 sm:p-6 rounded-lg sm:rounded-xl border-2 transition-all ${
                              formData.category === cat.value
                                ? 'border-purple-600 bg-purple-50 shadow-lg scale-105'
                                : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                            }`}
                          >
                            <div className="text-3xl sm:text-4xl mb-1 sm:mb-2">{cat.icon}</div>
                            <div className="font-semibold text-gray-800 text-sm sm:text-lg">
                              {cat.label}
                            </div>
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
                        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                          Choose Problem Statement <span className="text-red-500">*</span>
                        </label>
                        <div className="space-y-2">
                          {problemStatements[formData.category].map((ps, index) => (
                            <button
                              key={index}
                              onClick={() => setFormData({ ...formData, problemStatement: ps })}
                              className={`w-full p-3 sm:p-4 rounded-lg border-2 text-left transition-all ${
                                formData.problemStatement === ps
                                  ? 'border-indigo-600 bg-indigo-50 shadow-md'
                                  : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
                              }`}
                            >
                              <div className="flex items-center">
                                <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 mr-2 sm:mr-3 flex items-center justify-center flex-shrink-0 ${
                                  formData.problemStatement === ps ? 'border-indigo-600 bg-indigo-600' : 'border-gray-300'
                                }`}>
                                  {formData.problemStatement === ps && (
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full" />
                                  )}
                                </div>
                                <span className="font-medium text-gray-800 text-xs sm:text-sm">
                                  {ps}
                                </span>
                              </div>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                )}

                {/* Step 2 for Both track */}
                {currentStep === 2 && formData.track === 'both' && (
                  <div className="space-y-4 sm:space-y-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                      Project Details
                    </h3>
                    
                    {/* Category Selection */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                        Choose Category <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        {[
                          { value: 'hardware', label: 'Hardware', icon: '⚙️' },
                          { value: 'software', label: 'Software', icon: '💻' },
                        ].map((cat) => (
                          <button
                            key={cat.value}
                            onClick={() => setFormData({ ...formData, category: cat.value as any, problemStatement: '' })}
                            className={`p-4 sm:p-6 rounded-lg sm:rounded-xl border-2 transition-all ${
                              formData.category === cat.value
                                ? 'border-purple-600 bg-purple-50 shadow-lg scale-105'
                                : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                            }`}
                          >
                            <div className="text-3xl sm:text-4xl mb-1 sm:mb-2">{cat.icon}</div>
                            <div className="font-semibold text-gray-800 text-sm sm:text-lg">
                              {cat.label}
                            </div>
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
                        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                          Choose Problem Statement <span className="text-red-500">*</span>
                        </label>
                        <div className="space-y-2">
                          {problemStatements[formData.category].map((ps, index) => (
                            <button
                              key={index}
                              onClick={() => setFormData({ ...formData, problemStatement: ps })}
                              className={`w-full p-3 sm:p-4 rounded-lg border-2 text-left transition-all ${
                                formData.problemStatement === ps
                                  ? 'border-indigo-600 bg-indigo-50 shadow-md'
                                  : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
                              }`}
                            >
                              <div className="flex items-center">
                                <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 mr-2 sm:mr-3 flex items-center justify-center flex-shrink-0 ${
                                  formData.problemStatement === ps ? 'border-indigo-600 bg-indigo-600' : 'border-gray-300'
                                }`}>
                                  {formData.problemStatement === ps && (
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full" />
                                  )}
                                </div>
                                <span className="font-medium text-gray-800 text-xs sm:text-sm">
                                  {ps}
                                </span>
                              </div>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                )}

                {/* Steps 3-7: Team Members */}
                {currentStep >= (formData.track === 'open-innovation' || formData.track === 'both' ? 3 : 2) && currentStep <= totalSteps && (
                  <div className="space-y-4 sm:space-y-6">
                    {(() => {
                      const memberIndex = formData.track === 'open-innovation' || formData.track === 'both' ? currentStep - 3 : currentStep - 2;
                      return (
                        <>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                            Team Member {memberIndex + 2}
                          </h3>
                          <div className="space-y-3 sm:space-y-4">
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
          <div className="bg-gray-50 p-3 sm:p-6 border-t border-gray-200 flex justify-between gap-2 sm:gap-4 flex-shrink-0">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className={`flex items-center px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all text-sm sm:text-base ${
                currentStep === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-50'
              }`}
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 sm:mr-2" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            {currentStep < totalSteps ? (
              <button
                onClick={handleNext}
                className="flex items-center px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                <span className="hidden sm:inline">Next</span>
                <span className="sm:hidden">Next</span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 sm:ml-2" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-4 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                Submit
              </button>
            )}
          </div>
        </motion.div>

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
                className="bg-white rounded-xl p-4 sm:p-6 max-w-sm sm:max-w-md w-full shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full mx-auto mb-3 sm:mb-4">
                  <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 text-center mb-2">
                  Warning!
                </h3>
                <p className="text-sm sm:text-base text-gray-600 text-center mb-4 sm:mb-6">
                  All your progress will be lost. Are you sure you want to close the registration form?
                </p>
                <div className="flex gap-2 sm:gap-3">
                  <button
                    onClick={cancelClose}
                    className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors text-sm sm:text-base"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmClose}
                    className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-semibold bg-red-600 text-white hover:bg-red-700 transition-colors text-sm sm:text-base"
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
}

const InputField: React.FC<InputFieldProps> = ({
  icon,
  label,
  required,
  type = 'text',
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div>
      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <div className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <div className="w-4 h-4 sm:w-5 sm:h-5">{icon}</div>
        </div>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
          required={required}
        />
      </div>
    </div>
  );
};

export default RegistrationForm;
