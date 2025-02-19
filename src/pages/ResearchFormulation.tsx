import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, BookOpen, Lightbulb } from 'lucide-react';

const ResearchFormulation = () => {
  const [researchArea, setResearchArea] = useState('');

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Research Formulation
        </h1>
        <p className="text-gray-600">
          Define your research area and let AI help you formulate research questions and hypotheses.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Research Area
        </h2>
        <div className="space-y-4">
          <textarea
            value={researchArea}
            onChange={(e) => setResearchArea(e.target.value)}
            placeholder="Describe your research area (e.g., Impact of social media on mental health)"
            className="w-full h-32 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="flex space-x-4">
            <Button className="flex items-center">
              <Search className="mr-2 h-4 w-4" />
              Generate Research Questions
            </Button>
            <Button variant="outline" className="flex items-center">
              <BookOpen className="mr-2 h-4 w-4" />
              Literature Review
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Lightbulb className="mr-2 h-5 w-5 text-yellow-500" />
          AI Suggestions
        </h2>
        <p className="text-gray-600">
          Enter your research area above to receive AI-powered suggestions for research questions,
          hypotheses, and relevant literature.
        </p>
      </div>
    </div>
  );
};

export default ResearchFormulation;