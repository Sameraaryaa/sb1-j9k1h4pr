import React from 'react';
import { Button } from '@/components/ui/button';
import { BarChart2, PieChart, TrendingUp, Brain } from 'lucide-react';

const Analysis = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Data Analysis
        </h1>
        <p className="text-gray-600">
          Analyze your research data with AI-powered statistical tools.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <BarChart2 className="h-8 w-8 text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Statistical Analysis
          </h2>
          <p className="text-gray-600 mb-4">
            Run statistical tests and generate insights from your data.
          </p>
          <Button>Start Analysis</Button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <Brain className="h-8 w-8 text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            AI Insights
          </h2>
          <p className="text-gray-600 mb-4">
            Get AI-powered interpretations and recommendations.
          </p>
          <Button variant="outline">Generate Insights</Button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Visualization Tools
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="ghost" className="h-24 flex flex-col items-center justify-center">
            <PieChart className="h-8 w-8 mb-2" />
            Charts
          </Button>
          <Button variant="ghost" className="h-24 flex flex-col items-center justify-center">
            <TrendingUp className="h-8 w-8 mb-2" />
            Trends
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Analysis;