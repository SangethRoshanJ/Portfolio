import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Business Analyst & AI Specialist
          </h1>
          <p className="text-xl text-gray-600">
            Transforming business challenges into data-driven solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Skills & Expertise</h2>
            <ul className="space-y-2">
              <li>✓ Business Process Analysis</li>
              <li>✓ Data Analytics & Visualization</li>
              <li>✓ Requirements Engineering</li>
              <li>✓ Agile Project Management</li>
              <li>✓ AI & Machine Learning Integration</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
            <ul className="space-y-2">
              <li>🚀 Enterprise System Optimization</li>
              <li>📊 Data-Driven Decision Support</li>
              <li>🤖 AI Implementation Strategy</li>
              <li>📈 Process Automation Solutions</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Let's Connect
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
