import { motion } from 'framer-motion';
import { useState } from 'react';

interface AIBuddyProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIBuddy = ({ isOpen, onClose }: AIBuddyProps) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:8000/ai-buddy?question=${encodeURIComponent(message)}`);
      const data = await res.json();
      setResponse(data.response);
      setMessage('');
    } catch (error) {
      console.error('Error:', error);
      setResponse('Sorry, I encountered an error. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className={`w-80 bg-white rounded-lg shadow-2xl ${isMinimized ? 'h-12' : ''}`}
    >
      <div className="flex justify-between items-center p-4 bg-blue-600 text-white rounded-t-lg">
        <h3 className="text-lg font-semibold">AI Buddy</h3>
        <div className="flex gap-2">
          <button 
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-white hover:text-gray-200"
          >
            {isMinimized ? '▲' : '▼'}
          </button>
          <button onClick={onClose} className="text-white hover:text-gray-200">
            ✕
          </button>
        </div>
      </div>
      
      {!isMinimized && (
        <div className="p-4">
          {response && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100"
            >
              <p className="text-gray-700">{response}</p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask me about resume, projects, or anything..."
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </motion.div>
  );
};

export default AIBuddy;
