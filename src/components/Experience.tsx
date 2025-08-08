import React, { useEffect, useState } from 'react';
import { Briefcase, GraduationCap, Award, Users } from 'lucide-react';

interface ExperienceItem {
  type: 'work' | 'education' | 'certification' | 'volunteer';
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
}

interface ExperienceData {
  items: ExperienceItem[];
}

export function Experience() {
  const [experienceData, setExperienceData] = useState<ExperienceData | null>(null);
  const [activeTab, setActiveTab] = useState<'work' | 'education' | 'certification' | 'volunteer'>('work');

  useEffect(() => {
    fetch('/data/experience.json')
      .then(response => response.json())
      .then(data => setExperienceData(data))
      .catch(error => console.error('Error loading experience data:', error));
  }, []);

  const getIcon = (type: string) => {
    switch (type) {
      case 'work': return <Briefcase className="w-5 h-5" />;
      case 'education': return <GraduationCap className="w-5 h-5" />;
      case 'certification': return <Award className="w-5 h-5" />;
      case 'volunteer': return <Users className="w-5 h-5" />;
      default: return <Briefcase className="w-5 h-5" />;
    }
  };

  const tabs = [
    { id: 'work', label: 'Work Experience', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'education', label: 'Education', icon: <GraduationCap className="w-5 h-5" /> },
    { id: 'certification', label: 'Certifications', icon: <Award className="w-5 h-5" /> },
    { id: 'volunteer', label: 'Volunteer Work', icon: <Users className="w-5 h-5" /> },
  ] as const;

  if (!experienceData) {
    return (
      <div className="py-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const filteredItems = experienceData.items.filter(item => item.type === activeTab);

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Experience & Education
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My professional journey and educational background
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 mx-2 mb-4 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {filteredItems.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index < filteredItems.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-gray-200 dark:bg-gray-700 -z-10"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg">
                    {getIcon(item.type)}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          {item.organization}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {item.location}
                        </p>
                      </div>
                      <div className="mt-2 lg:mt-0">
                        <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
                          {item.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {item.description}
                    </p>

                    {item.highlights && item.highlights.length > 0 && (
                      <ul className="space-y-2">
                        {item.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-600 dark:text-gray-400 text-sm">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}