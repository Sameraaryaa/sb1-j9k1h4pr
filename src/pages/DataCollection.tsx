import React from 'react';
import { Button } from '@/components/ui/button';
import { FileSpreadsheet, Users, BarChart } from 'lucide-react';

const DataCollection = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Data Collection
        </h1>
        <p className="text-gray-600">
          Create and manage surveys, interviews, and other data collection tools.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <FileSpreadsheet className="h-8 w-8 text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Survey Builder
          </h2>
          <p className="text-gray-600 mb-4">
            Create professional surveys with AI-assisted question formulation.
          </p>
          <Button>Create Survey</Button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <Users className="h-8 w-8 text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Participant Management
          </h2>
          <p className="text-gray-600 mb-4">
            Track responses and manage participant information.
          </p>
          <Button variant="outline">View Participants</Button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Active Surveys
          </h2>
          <BarChart className="h-6 w-6 text-gray-400" />
        </div>
        <p className="text-gray-600">
          No active surveys. Create a new survey to get started with data collection.
        </p>
      </div>
    </div>
  );
};

export default DataCollection;