import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AIBuddy from './components/AIBuddy'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Certifications from './pages/Certifications'
import Freelancing from './pages/Freelancing'

function App() {
  const [isAIBuddyOpen, setIsAIBuddyOpen] = useState(true)

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar onAIBuddyClick={() => setIsAIBuddyOpen(true)} />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/freelancing" element={<Freelancing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <div className="fixed bottom-4 right-4 z-50">
          <AIBuddy isOpen={isAIBuddyOpen} onClose={() => setIsAIBuddyOpen(false)} />
        </div>
      </div>
    </Router>
  )
}

export default App
