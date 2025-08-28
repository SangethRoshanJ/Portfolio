import React from 'react';
import { motion } from 'framer-motion';

interface AIBuddyProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIBuddy: React.FC<AIBuddyProps> = ({ isOpen, onClose }) => {
  const [message, setMessage] = React.useState('');
  const [response, setResponse] = React.useState('');

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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-xl p-4"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">AI Buddy</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          ✕
        </button>
      </div>
      
      {response && (
        <div className="mb-4 p-3 bg-gray-100 rounded-lg">
          <p>{response}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask me anything..."
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
      </form>
    </motion.div>
  );
};

export default AIBuddy;
