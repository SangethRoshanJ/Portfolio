import React from 'react';
import Timeline from '../components/Timeline';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      year: "2024 - Present",
      title: "Senior Business Analyst",
      company: "Tech Solutions Ltd",
      description: "Leading business analysis for enterprise-level AI implementations. Coordinating with stakeholders to define requirements and optimize business processes."
    },
    {
      year: "2022 - 2024",
      title: "Business Analyst",
      company: "Digital Innovations Inc",
      description: "Spearheaded process improvement initiatives resulting in 30% efficiency gain. Implemented data-driven decision-making frameworks."
    },
    {
      year: "2021 - 2022",
      title: "Junior Business Analyst",
      company: "StartUp Tech",
      description: "Conducted requirement gathering sessions and created detailed documentation. Assisted in implementing agile methodologies."
    }
  ];

  const education = [
    {
      year: "2020 - 2021",
      title: "Master's in Business Analytics",
      company: "University of Technology",
      description: "Specialized in Data Analytics and Business Process Management. Graduated with distinction."
    },
    {
      year: "2016 - 2020",
      title: "Bachelor of Technology",
      company: "Institute of Engineering",
      description: "Major in Information Technology with focus on Business Systems."
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
