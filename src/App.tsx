import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Brain, FileText, FlaskConical, Users } from 'lucide-react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import ResearchFormulation from './pages/ResearchFormulation';
import DataCollection from './pages/DataCollection';
import Analysis from './pages/Analysis';

function App() {
  const navItems = [
    { icon: Brain, label: 'Research', path: '/research' },
    { icon: Users, label: 'Data Collection', path: '/data-collection' },
    { icon: FlaskConical, label: 'Analysis', path: '/analysis' },
    { icon: FileText, label: 'Reports', path: '/reports' },
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar items={navItems} />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/research" element={<ResearchFormulation />} />
            <Route path="/data-collection" element={<DataCollection />} />
            <Route path="/analysis" element={<Analysis />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;