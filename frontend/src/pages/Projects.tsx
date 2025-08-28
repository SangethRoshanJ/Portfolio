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
      title: "Enterprise Process Optimization",
      description: "Led a team in implementing an AI-driven process optimization solution that reduced manual workload by 40% and improved accuracy by 25%.",
      skills: ["Business Analysis", "Process Mapping", "AI Integration", "Change Management"],
      type: "official",
      impact: "40% reduction in processing time"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Developed a comprehensive analytics dashboard for real-time monitoring of key business metrics and predictive analytics.",
      skills: ["Data Analysis", "Dashboard Design", "SQL", "Power BI"],
      type: "official",
      impact: "Improved decision-making time by 60%"
    },
    {
      title: "AI-Powered Portfolio Website",
      description: "Personal project showcasing modern web development with AI integration for enhanced user experience.",
      skills: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
      type: "personal"
    },
    {
      title: "Process Automation Tool",
      description: "Created an automation tool for streamlining repetitive business processes using Python and machine learning.",
      skills: ["Python", "Machine Learning", "Process Automation"],
      type: "personal"
    }
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
