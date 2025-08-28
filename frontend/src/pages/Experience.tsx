import React from 'react';
import Timeline from '../components/Timeline';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      year: "Dec 2023 - Present",
      title: "Programmer Analyst - Ariba Business Practice",
      company: "CTS, Chennai",
      description: `• Led business requirements analysis & stakeholder management across global teams
      • Conducted data analysis using advanced analytics for critical decision-making
      • Designed custom Ariba Forms achieving 50% reduction in request errors
      • Created detailed functional specifications and technical documentation
      • Managed end-to-end SAP Ariba Procurement solutions deployment
      • Implemented quality assurance and risk mitigation strategies
      • Developed custom approval flows and exception handling mechanisms`
    }
  ];

  const education = [
    {
      year: "Jan 2025 - Present",
      title: "Executive MBA in Finance",
      company: "Indian Institute of Technology, Patna",
      description: "Focusing on AI-driven business transformation and financial analytics."
    },
    {
      year: "Aug 2019 - May 2023",
      title: "Bachelor of Engineering in Civil",
      company: "Sri Ramakrishna Engineering College, Coimbatore",
      description: "Developed strong analytical and problem-solving skills through engineering education."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      <h1 className="text-3xl font-bold mb-8 text-center">Professional Journey</h1>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
        <Timeline items={experiences} />
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Education</h2>
        <Timeline items={education} />
      </div>
    </motion.div>
  );
};

export default Experience;
