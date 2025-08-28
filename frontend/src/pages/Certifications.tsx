import React from 'react';
import { motion } from 'framer-motion';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
}

const Certifications = () => {
  const certifications: Certification[] = [
    {
      title: "Business Analysis Professional Certification",
      issuer: "IIBA",
      date: "2024",
      credentialId: "BA-2024-1234",
      skills: ["Requirements Analysis", "Process Modeling", "Stakeholder Management"]
    },
    {
      title: "AI Business Strategy",
      issuer: "Google",
      date: "2023",
      credentialId: "AI-2023-5678",
      skills: ["AI Implementation", "Strategy Development", "Change Management"]
    },
    {
      title: "Data Analytics Specialization",
      issuer: "Microsoft",
      date: "2023",
      credentialId: "DA-2023-9012",
      skills: ["Data Analysis", "Power BI", "SQL", "Data Visualization"]
    },
    {
      title: "Agile Project Management",
      issuer: "PMI",
      date: "2022",
      credentialId: "APM-2022-3456",
      skills: ["Scrum", "Kanban", "Sprint Planning", "Agile Methodologies"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      <h1 className="text-3xl font-bold mb-8 text-center">Professional Certifications</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
            <p className="text-gray-600 mb-2">Issued by {cert.issuer}</p>
            <p className="text-gray-500 mb-3">Date: {cert.date}</p>
            {cert.credentialId && (
              <p className="text-sm text-gray-500 mb-3">
                Credential ID: {cert.credentialId}
              </p>
            )}
            <div className="flex flex-wrap gap-2">
              {cert.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Certifications;
