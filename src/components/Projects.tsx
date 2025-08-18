import React from 'react';
import { ExternalLink, Github, Sparkles, Share, Gamepad2, BarChart3 } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "AI Image Transformation SaaS Platform",
      description: "An AI-powered platform for image transformations like background removal, generative fill, colorization, and object removal. Includes user authentication, credits system, and image showcase features.",
      tech: ["Next.js 14", "Node.js", "MongoDB", "Cloudinary", "Clerk", "Stripe", "Tailwind CSS"],
      liveDemo: "https://nextjs-imaginify-beryl.vercel.app/",
      github: "https://github.com/Ankit-78/Nextjs---Imaginify",
      icon: <Sparkles className="text-purple-600" size={32} />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Custom Call Scheduling Calendar",
      description: "Built a calendar system for coaches to manage onboarding and recurring follow-up calls with Firebase backend and dynamic UI.",
      tech: ["React.js", "TypeScript", "Tailwind CSS", "Firebase"],
      liveDemo: "https://healthtick-calendar.netlify.app/",
      github: "https://github.com/Ankit-78/health-tick-calendar",
      icon: <Share className="text-blue-600" size={32} />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Flappy Bird Game Clone",
      description: "A browser-based clone of the classic Flappy Bird game built using HTML5, CSS3, and JavaScript. Features smooth animation, gravity-based mechanics, collision detection, and score tracking.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      liveDemo: "https://flappy-bird-game-umber.vercel.app/",
      github: "https://github.com/Ankit-78/Flappy-Bird-Game",
      icon: <Gamepad2 className="text-green-600" size={32} />,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "AI News Insight Dashboard",
      description: "A fully responsive, AI-powered dashboard to analyze and visualize real-time news. Search any topic → Fetch headlines → Get summaries → Analyze sentiment → Know the source.",
      tech: ["Vite", "React.js", "Tailwind CSS", "Node.js", "MongoDB", "HuggingFace Transformers"],
      liveDemo: "https://media-pulse-dashboard-madchatter-nk.vercel.app/",
      github: "https://github.com/Ankit-78/Media-Pulse-Dashboard---madchatter",
      icon: <BarChart3 className="text-orange-600" size={32} />,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-8">
                <div className="flex items-center mb-4">
                  {project.icon}
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 ml-3">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
                  >
                    <ExternalLink className="mr-2" size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transform hover:scale-105 transition-all duration-200"
                  >
                    <Github className="mr-2" size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;