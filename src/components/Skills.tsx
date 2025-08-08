import React, { useEffect, useState } from 'react';

interface Skill {
  name: string;
  icon: string;
  category: string;
}

interface SkillsData {
  categories: {
    name: string;
    skills: Skill[];
  }[];
}

export function Skills() {
  const [skillsData, setSkillsData] = useState<SkillsData | null>(null);

  useEffect(() => {
    fetch('/data/skills.json')
      .then(response => response.json())
      .then(data => setSkillsData(data))
      .catch(error => console.error('Error loading skills data:', error));
  }, []);

  if (!skillsData) {
    return (
      <div className="py-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Technologies I work with and am passionate about
            </p>
          </div>

          {/* Skills Categories */}
          <div className="space-y-12">
            {skillsData.categories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                  {category.name}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center group-hover:from-blue-100 group-hover:to-purple-100 dark:group-hover:from-blue-800/30 dark:group-hover:to-purple-800/30 transition-colors">
                          <span className="text-2xl">{skill.icon}</span>
                        </div>
                        <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}