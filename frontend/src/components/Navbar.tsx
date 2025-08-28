import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavbarProps {
  onAIBuddyClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAIBuddyClick }) => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-blue-600">
            BA Portfolio
          </Link>
          
          <div className="hidden md:flex space-x-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/certifications">Certifications</NavLink>
            <NavLink to="/freelancing">Freelancing</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onAIBuddyClick}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Ask AI Buddy
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
  >
    {children}
  </Link>
);

export default Navbar;
