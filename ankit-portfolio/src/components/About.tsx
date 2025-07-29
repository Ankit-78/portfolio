import React from 'react';
import { Code, Server, Database, Cloud, Award, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  const interests = [
    { icon: <Code className="text-blue-600" size={24} />, title: "Frontend Development", desc: "React, Next.js, Tailwind CSS" },
    { icon: <Server className="text-green-600" size={24} />, title: "Backend Development", desc: "Node.js, Express.js, RESTful APIs" },
    { icon: <Database className="text-purple-600" size={24} />, title: "Database Management", desc: "MongoDB, MySQL, PostgreSQL" },
    { icon: <Cloud className="text-orange-600" size={24} />, title: "DevOps & Cloud", desc: "Docker, CI/CD, Cloud Computing" }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm especially interested in DevOps, cloud computing, and using AI to enhance user experiences and productivity. 
              My goal is to create innovative solutions that make a real impact in the digital world.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Award className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Certification</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Database Management System (DBMS) & SQL: Complete Pack
              </p>
              <a
                href="https://drive.google.com/file/d/18MptRCbz3gj3bfmiaxIK05AaTS6vtGwA/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                View Certificate
                <ExternalLink className="ml-1" size={16} />
              </a>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Current Focus</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Actively working on personal projects integrating AI, including the Imaginify platform for AI-powered image transformations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="mb-4">{interest.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {interest.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {interest.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;