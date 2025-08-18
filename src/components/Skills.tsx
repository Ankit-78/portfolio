import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "C++", "Python", "SQL"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "RESTful APIs"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL"],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Postman", "Docker", "Vercel", "Render", "Firebase"],
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Other Skills",
      skills: ["CI/CD", "DevOps basics", "Cloud Computing", "Network Security"],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;