import React from 'react';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl animate-bounce-slow">
            AT
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Ankit Tripathi
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6 animate-fade-in-up animation-delay-200">
            Aspiring Software Developer | AI Enthusiast
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-up animation-delay-400">
            I'm a passionate Frontend Developer with a B.Tech in Computer Science (IoT specialization) from PSIT Kanpur (AKTU). 
            I specialize in building scalable web applications with clean UI/UX and efficient backend architectures.
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 animate-fade-in-up animation-delay-600">
            📍 Fatehpur, Uttar Pradesh, India
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-800">
            <a
              href='https://drive.google.com/file/d/1IM3On5gnL3VnfaoRfpHDWp84lwDFRzdS/view'
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transform hover:scale-105 transition-all duration-300"
            >
              <ExternalLink className="mr-2" size={20} />
              View Projects
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400 dark:text-gray-600" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;