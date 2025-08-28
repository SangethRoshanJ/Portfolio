import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  year: string;
  title: string;
  company?: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, company, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-8 border-l border-gray-300 last:pb-0"
    >
      <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full" />
      <div className="text-sm text-gray-500">{year}</div>
      <h3 className="mt-1 text-lg font-semibold">{title}</h3>
      {company && <div className="text-gray-600">{company}</div>}
      <p className="mt-2 text-gray-700">{description}</p>
    </motion.div>
  );
};

const Timeline: React.FC<{ items: TimelineItemProps[] }> = ({ items }) => {
  return (
    <div className="max-w-3xl mx-auto py-8">
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Timeline;
