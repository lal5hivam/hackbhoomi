"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { Mail, MapPin, Phone, Github, Twitter, Linkedin } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  label: string;
  href: string;
  icon: React.ElementType;
}

const Footer: React.FC = () => {
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

  const hackbhoomiLinks: FooterLink[] = [
    { label: "Home", href: "/" },
    { label: "About Hackbhoomi", href: "/about" },
    { label: "Events", href: "/events" },
    { label: "FAQ", href: "/#faq" },
    { label: "Register", href: "/register" },
  ];

  const contactInfo: FooterLink[] = [
    { label: "l.singhshivam1@gmail.com", href: "mailto:l.singhshivam1@gmail.com" },
    { label: "+91-581-246-0442", href: "tel:+915812460442" },
    { label: "Invertis University, Bareilly, UP, India", href: "#" },
  ];

  const socialLinks: SocialLink[] = [
    { label: "GitHub", href: "https://github.com/hackbhoomi", icon: Github },
    { label: "Twitter", href: "https://twitter.com/hackbhoomi", icon: Twitter },
    { label: "LinkedIn", href: "https://linkedin.com/company/hackbhoomi", icon: Linkedin },
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
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

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {hackbhoomiLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-orange-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
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

        {/* Social Media and Copyright */}
        <motion.div
          className="mt-8 pt-6 border-t border-indigo-800 flex flex-col sm:flex-row justify-between items-center"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex space-x-3 mb-4 sm:mb-0">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="outline"
                size="icon"
                className="bg-transparent border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white transition-colors"
                asChild
              >
                <a href={social.href} aria-label={social.label}>
                  <social.icon className="w-4 h-4" aria-hidden="true" />
                </a>
              </Button>
            ))}
          </div>
          <p className="text-white/80 text-sm">
            © 2025 Hackbhoomi, Invertis University.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;