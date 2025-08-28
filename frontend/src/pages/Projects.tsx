import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  skills: string[];
  type: 'official' | 'personal';
  impact?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "AI-Enhanced Source to Pay Platform",
      description: `• Analyzed multi-region procurement operations and designed optimized B&I workflows
      • Worked with 200+ suppliers on PunchOut/CIF catalogs implementation
      • Created analytics dashboards achieving 60% reduction in manual holds
      • Implemented intelligent invoice exception handling with 45% improved accuracy`,
      skills: ["Process Optimization", "Supplier Integration", "Analytics", "SAP Ariba"],
      type: "official",
      impact: "60% reduction in manual holds, 45% improvement in processing accuracy"
    },
    {
      title: "AI Procurement ChatBot",
      description: `• Led requirements gathering and feature specification for procurement chatbot
      • Implemented RAG architecture and advanced prompt engineering
      • Executed LLM fine-tuning for procurement-specific queries
      • Developed testing frameworks and performance monitoring systems`,
      skills: ["AI Development", "RAG Architecture", "LLM Fine-tuning", "Prompt Engineering"],
      type: "official",
      impact: "Streamlined procurement process automation"
    },
    {
      title: "Mars Ariba Integration",
      description: `• Managed onboarding and integration of 15+ suppliers
      • Coordinated process flows for orders, invoices, and confirmations
      • Resolved critical incidents including price mismatches and ASN failures
      • Ensured minimal business disruption through effective problem-solving`,
      skills: ["Supplier Integration", "Process Management", "Issue Resolution", "SAP Ariba"],
      type: "official",
      impact: "Successfully integrated 15+ suppliers"
    }
  ];
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-8"
    >
      <h1 className="text-3xl font-bold mb-8 text-center">Projects Portfolio</h1>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Official Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects
            .filter(project => project.type === 'official')
            .map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Personal Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects
            .filter(project => project.type === 'personal')
            .map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      {project.impact && (
        <p className="text-green-600 font-semibold mb-4">Impact: {project.impact}</p>
      )}
      <div className="flex flex-wrap gap-2">
        {project.skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
