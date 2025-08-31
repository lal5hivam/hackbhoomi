"use client";

import * as React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { HelpCircle, Mail } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const faqs: FAQItem[] = [
    {
      question: "What is Hackbhoomi?",
      answer:
        "Hackbhoomi is an Internal hackathon organized by Invertis University for SIH 2025, bringing together students, developers, and innovators to solve real-world problems through technology. It fosters creativity, collaboration, and innovation.",
    },
    {
      question: "Who can participate in Hackbhoomi?",
      answer:
        "Hackbhoomi is open to all the students of Invertis University, allowing tech entusiasts with multi-disciplinary courses with a passion for coding and problem-solving. Participants can in teams of 6 members(One girl member mandatory).",
    },
    {
      question: "What are the event dates and location?",
      answer:
        "Hackbhoomi 2025 will take place on 12-13th sept, 2025 at Invertis University, Bareilly, India.",
    },
    {
      question: "How can I register for Hackbhoomi?",
      answer:
        "Registration can be completed through the official Hackbhoomi website. Follow the instructions there to sign up as a team. Early registration is recommended due to limited spots.",
    },
    {
      question: "Are there any prizes for winners?",
      answer:
        "Yes, Hackbhoomi offers exciting prizes for top-performing teams. Detailed prize information will be announced closer to the event.",
    },
  ];

  return (
    <section
      id="faq"
      className="bg-gradient-to-b from-gray-900 to-gray-800 py-16"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <motion.h2
            id="faq-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white flex items-center justify-center"
            variants={itemVariants}
          >
            <HelpCircle className="w-8 h-8 mr-2 text-blue-400" aria-hidden="true" />
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Find answers to common questions about Hackbhoomi. If you have additional queries, feel free to reach out to our team.
          </motion.p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <Card className="bg-gray-800 border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-white text-center">
                Hackbhoomi FAQs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <AccordionItem value={`item-${index}`}>
                      <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-blue-400">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="text-lg text-gray-300 mb-4">
            Still have questions? Contact us for more information.
          </p>
          <Button
            variant="outline"
            className="bg-transparent border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-colors"
            asChild
          >
            <a href="mailto:support@hackbhoomi.com">
              <Mail className="w-5 h-5 mr-2" aria-hidden="true" />
              Contact Support
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;