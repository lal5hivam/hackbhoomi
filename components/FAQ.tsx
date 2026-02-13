"use client";

import * as React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";

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
      "Hackbhoomi is an internal hackathon organized by Invertis University for SIH 2025. It brings together innovative minds to solve real-world problems through technology, creativity, and competitive engineering.",
  },
  {
    question: "What are the categories in Hackbhoomi?",
    answer:
      "Hackbhoomi consists of two main categories: Open Innovation and RoboWars. Participants can choose the category that best matches their skills and interests.",
  },
  {
    question: "What tracks are available under Open Innovation?",
    answer:
      "The Open Innovation category has two tracks: Software and Hardware. Teams can build software-based solutions such as apps, platforms, or AI tools, or hardware-based solutions involving electronics, IoT, embedded systems, or smart devices.",
  },
  {
    question: "What competitions are included in RoboWars?",
    answer:
      "RoboWars includes two exciting competitions: Balloon Popping RoboWar and Obstacle Path Challenge, both designed to test robotic design, control, and strategy.",
  },
  {
    question: "How does the Balloon Popping RoboWar work?",
    answer:
      "In this competition, each robo car will have a balloon mounted behind it. The objective is to pop the opponent’s balloon. Once a robot’s balloon is popped, it is immediately eliminated from the match.",
  },
  {
    question: "What is the Obstacle Path Challenge?",
    answer:
      "In the Obstacle Path Challenge, the robo car must reach the destination by successfully passing through a series of tough obstacles. The robot’s control, stability, and design play a crucial role in completing the course.",
  },
  {
    question: "Who can participate and what is the team size?",
    answer:
      "Hackbhoomi is open to all students of Invertis University. Teams can have up to 6 members, and having at least one female team member is mandatory.",
  },
  {
    question: "When and where will Hackbhoomi take place?",
    answer:
      "Hackbhoomi 2025 will be held on 12–13 September 2025 at Invertis University, Bareilly, India.",
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