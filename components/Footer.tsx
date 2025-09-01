"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, Variants } from "framer-motion";
;
import { Mail, MapPin, Phone, Github } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

const Footer: React.FC = () => {
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

  // Updated navigation links to match Navbar
  const navigationLinks = [
    { label: "About SIH", sectionId: "SIH" },
    { label: "Timeline", sectionId: "program" },
    { label: "Instructions", sectionId: "instructions" },
    { label: "Tracks", sectionId: "tracks" },
    { label: "Prizes", sectionId: "prizes" },
    { label: "Team", sectionId: "team" },
    { label: "FAQ", sectionId: "faq" },
  ];

  // Quick action links
  const quickActions = [
    {
      label: "Register Team",
      action: () => window.open("https://forms.gle/fsCyrMx66uLinKU68", "_blank", "noopener,noreferrer"),
      isExternal: true
    },
    {
      label: "SIH Website",
      action: () => window.open("https://www.sih.gov.in", "_blank", "noopener,noreferrer"),
      isExternal: true
    },
    {
      label: "Invertis University",
      action: () => window.open("https://www.invertisuniversity.ac.in", "_blank", "noopener,noreferrer"),
      isExternal: true
    },
  ];

  const contactInfo: FooterLink[] = [
    { label: "l.singhshivam1@gmail.com", href: "mailto:l.singhshivam1@gmail.com" },
    { label: "+91-581-246-0442", href: "tel:+915812460442" },
    { label: "Invertis University, Bareilly, UP, India", href: "#" },
  ];



  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add newsletter signup logic here (e.g., API call)
    console.log("Newsletter signup submitted");
  };

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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {/* Branding Section */}
          <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div
                className="flex items-center space-x-1 sm:space-x-2 cursor-pointer group"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <h1 className="text-xl sm:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                  Hackभूमि
                </h1>
                <div
                  className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-orange-500 rotate-90"
                  aria-hidden="true"
                ></div>
                <span className="text-lg font-medium text-orange-400">SIH 2025</span>
              </div>
            </div>
            <p className="text-white/80 text-sm max-w-xs">
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

          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base font-semibold text-white mb-3">Contact Us</h3>
            <ul className="space-y-2">
              {contactInfo.map((info, index) => (
                <li key={info.label} className="flex items-center">
                  {index === 0 && <Mail className="w-4 h-4 mr-2 text-orange-400" aria-hidden="true" />}
                  {index === 1 && <Phone className="w-4 h-4 mr-2 text-orange-400" aria-hidden="true" />}
                  {index === 2 && <MapPin className="w-4 h-4 mr-2 text-orange-400" aria-hidden="true" />}
                  <a
                    href={info.href}
                    className="text-white/80 hover:text-orange-400 transition-colors text-sm"
                  >
                    {info.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base font-semibold text-white mb-3">Stay Updated</h3>
            <p className="text-white/80 text-sm mb-3">
              Subscribe for Hackbhoomi updates and event news.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-indigo-800/50 border-indigo-700 text-white placeholder-white/60 text-sm"
              />
              <Button
                type="submit"
                variant="default"
                className="bg-orange-400 text-white hover:bg-orange-500 text-sm"
              >
                Subscribe
              </Button>
            </form>
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
            © 2025 Hackbhoomi, Invertis University.
          </p>
          <div className="flex items-center space-x-2">
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
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;