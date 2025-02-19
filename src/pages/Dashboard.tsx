import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Users, FlaskConical, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  const features = [
    {
      icon: Brain,
      title: 'Research Formulation',
      description: 'Define research questions and develop hypotheses with AI assistance',
      path: '/research'
    },
    {
      icon: Users,
      title: 'Data Collection',
      description: 'Create surveys and manage participant responses',
      path: '/data-collection'
    },
    {
      icon: FlaskConical,
      title: 'Analysis',
      description: 'Analyze data and generate insights with AI-powered tools',
      path: '/analysis'
    },
    {
      icon: FileText,
      title: 'Report Generation',
      description: 'Create professional research reports with automated formatting',
      path: '/reports'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to ResearchAI
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your intelligent research assistant powered by AI
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <Link
            key={feature.title}
            to={feature.path}
            className="block group"
          >
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 transition-all duration-200 hover:shadow-md">
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
              <Button
                variant="ghost"
                className="group-hover:bg-blue-50 group-hover:text-blue-600"
              >
                Get Started →
              </Button>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Recent Projects
        </h2>
        <p className="text-gray-600">
          You haven't created any projects yet. Start by creating a new research project.
        </p>
        <Button className="mt-4">
          Create New Project
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;