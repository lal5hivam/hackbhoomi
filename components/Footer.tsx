"use client";

import * as React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { MapPin } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  onRegisterClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onRegisterClick }) => {
  // Smooth scroll function matching Navbar functionality
  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      const headerOffset = 100 // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Updated navigation links to match active sections
  const navigationLinks = [
    { label: "Home", sectionId: "hero" },
    { label: "Milestones", sectionId: "milestones" },
    { label: "Timeline", sectionId: "program" },
    { label: "Instructions", sectionId: "instructions" },
    { label: "Problem Statements", sectionId: "problem-statements" },
    { label: "Prizes", sectionId: "prizes" },
    { label: "FAQ", sectionId: "faq" },
  ];

  // Quick action links
  const quickActions = [
    {
      label: "Register Team",
      action: onRegisterClick,
      isExternal: false
    },
    {
      label: "Incubation Center",
      action: () => window.open("https://invertisincubation.com/", "_blank", "noopener,noreferrer"),
      isExternal: true
    },
    {
      label: "Invertis University",
      action: () => window.open("https://www.invertisuniversity.ac.in", "_blank", "noopener,noreferrer"),
      isExternal: true
    },
    {
      label: "Start In UP",
      action: () => window.open("https://startinup.up.gov.in/", "_blank", "noopener,noreferrer"),
      isExternal: true
    },
  ];

  return (
    <footer
      className="bg-indigo-900/90 backdrop-blur-sm py-10 text-white"
      aria-labelledby="footer-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {/* Branding Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div
                className="flex items-center space-x-1 sm:space-x-2 cursor-pointer group"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <h1 className="text-xl sm:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                  InverThon
                </h1>
                <div
                  className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-orange-500 rotate-90"
                  aria-hidden="true"
                ></div>
                <span className="text-lg font-medium text-orange-400">2.0</span>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Innovate, code, and collaborate at Invertis University’s premier hackathon.
            </p>
          </motion.div>

          {/* Navigation Links - Matching Navbar */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base font-semibold text-white mb-3">Navigation</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => smoothScrollTo(link.sectionId)}
                    className="text-white/80 hover:text-orange-400 transition-colors text-sm text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Actions */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base font-semibold text-white mb-3">Quick Actions</h3>
            <ul className="space-y-2">
              {quickActions.map((action) => (
                <li key={action.label}>
                  <button
                    onClick={action.action}
                    className="text-white/80 hover:text-orange-400 transition-colors text-sm text-left flex items-center"
                  >
                    {action.label}
                    {action.isExternal && (
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information - WhatsApp Community */}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-1">
            <h3 className="text-base font-semibold text-white mb-3">Join Our Community</h3>
            <div className="space-y-3">
              {/* WhatsApp Link */}
              <div>
                <a
                  href="https://chat.whatsapp.com/HsgN5VVcdNzH77RNShukg4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white/80 hover:text-orange-400 transition-colors text-sm group"
                >
                  <svg className="w-5 h-5 mr-2 text-green-400 group-hover:text-green-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span className="font-medium">WhatsApp Community</span>
                </a>
              </div>
              
              {/* QR Code */}
              <div className="flex flex-col items-start">
                <p className="text-white/80 text-sm mb-2">Scan QR code:</p>
                <div className="bg-white p-2 rounded-lg">
                  <Image
                    src="/community-qr.jpg"
                    alt="WhatsApp Community QR Code"
                    width={96}
                    height={96}
                    className="w-24 h-24"
                  />
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start pt-1">
                <MapPin className="w-4 h-4 mr-2 text-orange-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-white/80 text-sm leading-relaxed">
                  Invertis University, Bareilly, UP, India
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright and Developer Credit */}
        <motion.div
          className="mt-8 pt-6 border-t border-indigo-800 flex flex-col sm:flex-row justify-between items-center"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="text-white/80 text-sm mb-4 sm:mb-0">
            © 2026 Inverthon2.0, Invertis University.
          </p>
          {/* <div className="flex items-center space-x-2">
            <span className="text-white/80 text-sm">Website developed by</span>
            <Button
              variant="ghost"
              size="sm"
              className="text-orange-400 hover:text-orange-300 hover:bg-orange-400/10 transition-colors p-1 h-auto"
              asChild
            >
              <a
                href="https://github.com/ahqafcoder"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1"
              >
                <Github className="w-4 h-4" />
                <span className="font-medium">ahqafcoder</span>
              </a>
            </Button>
          </div> */}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;