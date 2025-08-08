import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Award, Users } from 'lucide-react';

interface AboutData {
  title: string;
  description: string;
  details: {
    location: string;
    age: number;
    experience: string;
    education: string;
  };
  highlights: string[];
  stats: {
    experience: number;
    certifications: number;
    awards: number;
    communities: number;
  };
}

export function About() {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);

  useEffect(() => {
    fetch('/data/about.json')
      .then(response => response.json())
      .then(data => setAboutData(data))
      .catch(error => console.error('Error loading about data:', error));
  }, []);

  if (!aboutData) {
    return (
      <div className="py-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {aboutData.title}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {aboutData.description}
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Key Highlights
                </h3>
                <ul className="space-y-2">
                  {aboutData.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Personal Info */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Personal Info
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">{aboutData.details.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">{aboutData.details.age} years old</span>
                  </div>
                  <div className="flex items-start">
                    <Award className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{aboutData.details.education}</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Quick Stats
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{aboutData.stats.experience}+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{aboutData.stats.certifications}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Certifications</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{aboutData.stats.awards}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Awards</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{aboutData.stats.communities}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Communities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}