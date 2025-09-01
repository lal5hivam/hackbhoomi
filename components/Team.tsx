"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Users } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const Team: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <section
      id="team"
      className="bg-gradient-to-b from-gray-900 to-indigo-900 py-16"
      aria-labelledby="team-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="team-heading"
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-center mb-8 text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Users className="inline-block w-8 h-8 mr-2 text-orange-400" aria-hidden="true" />
          Hackbhoomi Organizers
        </motion.h2>
        <Separator className="mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 h-1 rounded" />

        {/* Organizing Faculty */}
        <motion.h3
          className="text-2xl sm:text-3xl font-semibold text-center mb-8 text-orange-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Organizing Faculty
        </motion.h3>
        <Separator className="mb-10 bg-orange-400/30" />
        <motion.div
          className="flex justify-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Card className="bg-gray-800 border-none w-full sm:w-3/4 md:w-1/2 lg:w-1/3 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl">
            <CardHeader>
              <CardTitle className="text-center text-white text-xl sm:text-2xl font-bold">
                Mohd Talha Khan
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <Avatar className="mx-auto h-24 w-24 mb-4 ring-2 ring-orange-500">
                <AvatarImage
                  src="/images/talhaSir.png"
                  alt="Mohd Talha Khan, Director CSED (SPOC)"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <AvatarFallback className="text-lg bg-gray-700 text-white">MT</AvatarFallback>
              </Avatar>
              <Badge variant="secondary" className="bg-orange-500 text-black font-medium">
                Director, CSED (SPOC)
              </Badge>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            {
              name: 'Dr. Gaurav Agarwal',
              role: 'HOD, CSE',
              image: '/images/gauravSir.png',
            },
            {
              name: 'Dr. Akash Sanghai',
              role: 'HOD, Computer Applications',
              image: '/images/akashSir.png',
            },
            {
              name: 'Dr. Ashish Kumar Sharma',
              role: 'Assistant Prof. CSE',
              image: '/images/ashishSir.png',
            },
            {
              name: 'Prof. Kaushal Johari',
              role: 'Assistant Prof. Computer Applications',
              image: '/images/kaushalSir.jpg',
            },
          ].map((member) => (
            <motion.div key={member.name} variants={cardVariants}>
              <Card className="bg-gray-800 border-none shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
                <CardContent className="text-center p-6">
                  <Avatar className="mx-auto h-20 w-20 mb-4 ring-2 ring-orange-500/50">
                    <AvatarImage
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <AvatarFallback className="bg-gray-700 text-white">{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h4 className="text-lg font-semibold text-white">{member.name}</h4>
                  <Badge variant="secondary" className="mt-2 bg-orange-500 text-black font-medium">
                    {member.role}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Mentors */}
        <motion.h3
          className="text-2xl sm:text-3xl font-semibold text-center mb-8 text-orange-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Mentors
        </motion.h3>
        <Separator className="mb-10 bg-orange-400/30" />
        <motion.div
          className="flex justify-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Card className="bg-gray-800 border-none w-full sm:w-3/4 md:w-1/2 lg:w-1/3 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl">
            <CardHeader>
              <CardTitle className="text-center text-white text-xl sm:text-2xl font-bold">
                Pranav Thakur
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <Avatar className="mx-auto h-24 w-24 mb-4 ring-2 ring-orange-500">
                <AvatarImage
                  src="/images/pranav.jpg"
                  alt="Pranav Thakur, Alumni and Mentor"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <AvatarFallback className="text-lg bg-gray-700 text-white">PT</AvatarFallback>
              </Avatar>
              <Badge variant="secondary" className="bg-orange-500 text-black font-medium mb-2">
                Alumni, Invertis University
              </Badge>
              <p className="text-white/90 text-sm">Mentorship & Guidance</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Core Organizers */}
        <motion.h3
          className="text-2xl sm:text-3xl font-semibold text-center mb-8 text-orange-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Core Organizers
        </motion.h3>
        <Separator className="mb-10 bg-orange-400/30" />
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { name: 'Lal Shivam Singh', image: '/images/lalshivam.jpg' },
            { name: 'Aryan Singh', image: '/images/aryan.png' },
            { name: 'Ashish Kumar', image: '/images/ashish.jpg' },
            { name: 'Ayush Ranjan', image: '/images/ayush.jpg' },
          ].map((member) => (
            <motion.div key={member.name} variants={cardVariants}>
              <Card className="bg-gray-800 border-none shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
                <CardContent className="text-center p-6">
                  <Avatar className="mx-auto h-20 w-20 mb-4 ring-2 ring-orange-500/50">
                    <AvatarImage
                      src={member.image}
                      alt={`${member.name}, Core Organizer`}
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <AvatarFallback className="bg-gray-700 text-white">{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h4 className="text-lg font-semibold text-white">{member.name}</h4>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Lead Volunteers */}
        <motion.h3
          className="text-2xl sm:text-3xl font-semibold text-center mb-8 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Lead Volunteers
        </motion.h3>
        <Separator className="mb-10 bg-white/30" />
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { name: 'Trisha Bhardwaj', image: '/images/trisha.jpg' },
            { name: 'Tarun Maurya', image: '/images/tarun.jpg' },
            { name: 'Shivanshu Singh', image: '/images/shivanshu.jpg' },
            { name: 'Arpit Mathur', image: '/images/arpit.jpg' },
          ].map((member) => (
            <motion.div key={member.name} variants={cardVariants}>
              <Card className="bg-gray-800 border-none shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
                <CardContent className="text-center p-6">
                  <Avatar className="mx-auto h-20 w-20 mb-4 ring-2 ring-white/50">
                    <AvatarImage
                      src={member.image}
                      alt={`${member.name}, Lead Volunteer`}
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <AvatarFallback className="bg-gray-700 text-white">{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h4 className="text-lg font-semibold text-white">{member.name}</h4>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Community Partners */}
        <motion.h3
          className="text-2xl sm:text-3xl font-semibold text-center mb-8 text-lime-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Community Partners
        </motion.h3>
        <Separator className="mb-10 bg-lime-400/30" />
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            {
              name: 'Invertis Innovation And Incubation',
              role: 'Invertis University',
              image: '/images/incub.png',
            },
            { name: 'I-Tech', role: 'Abhiruchi', image: '/images/itech.PNG' },
            {
              name: 'CrewXIAL',
              role: 'Challenges = Opportunities',
              image: '/images/crewxial.png',
            },
          ].map((partner) => (
            <motion.div key={partner.name} variants={cardVariants}>
              <Card className="bg-gray-800 border-none shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
                <CardContent className="text-center p-6">
                  <Avatar className="mx-auto h-20 w-20 mb-4 ring-2 ring-lime-500/50">
                    <AvatarImage
                      src={partner.image}
                      alt={`${partner.name}, Community Partner`}
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <AvatarFallback className="bg-gray-700 text-white">{partner.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h4 className="text-lg font-semibold text-white">{partner.name}</h4>
                  <Badge variant="secondary" className="mt-2 bg-lime-500 text-black font-medium">
                    {partner.role}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;