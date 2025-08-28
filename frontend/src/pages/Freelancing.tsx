import React from 'react';
import { motion } from 'framer-motion';

interface Service {
  title: string;
  description: string;
  deliverables: string[];
  rate: string;
}

const Freelancing = () => {
  const services: Service[] = [
    {
      title: "Business Process Analysis & Optimization",
      description: "Comprehensive analysis and optimization of business processes to improve efficiency and reduce costs.",
      deliverables: [
        "Process mapping and documentation",
        "Gap analysis report",
        "Optimization recommendations",
        "Implementation roadmap"
      ],
      rate: "Starting from $80/hour"
    },
    {
      title: "AI Implementation Strategy",
      description: "Strategic planning and implementation of AI solutions for business process automation and optimization.",
      deliverables: [
        "AI feasibility assessment",
        "Implementation strategy",
        "ROI analysis",
        "Training materials"
      ],
      rate: "Starting from $100/hour"
    },
    {
      title: "Requirements Engineering",
      description: "Detailed gathering and documentation of business requirements for software development projects.",
      deliverables: [
        "Requirements specification document",
        "Use case diagrams",
        "User stories",
        "Acceptance criteria"
      ],
      rate: "Starting from $75/hour"
    },
    {
      title: "Data Analytics Consulting",
      description: "Data-driven insights and recommendations for business decision-making.",
      deliverables: [
        "Data analysis report",
        "Visual dashboards",
        "Actionable recommendations",
        "Implementation support"
      ],
      rate: "Starting from $90/hour"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-8"
    >
      <h1 className="text-3xl font-bold mb-8 text-center">Freelance Services</h1>

      <div className="mb-12 text-center">
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Expert business analysis and AI implementation services to help your business thrive in the digital age.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            
            <h4 className="font-semibold mb-2">Deliverables:</h4>
            <ul className="list-disc list-inside mb-4 text-gray-600">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="mb-1">{item}</li>
              ))}
            </ul>

            <div className="mt-4 pt-4 border-t">
              <p className="text-blue-600 font-semibold">{service.rate}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-12 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Ready to Work Together?</h2>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Get in Touch
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Freelancing;
