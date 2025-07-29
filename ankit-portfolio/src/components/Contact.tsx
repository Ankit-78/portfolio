import React from 'react';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-blue-600" size={24} />,
      label: "Email",
      value: "ankittrip2020@gmail.com",
      href: "mailto:ankittrip2020@gmail.com"
    },
    {
      icon: <Linkedin className="text-blue-600" size={24} />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/ankit-tripathi-62b773231/"
    },
    {
      icon: <Github className="text-gray-800 dark:text-gray-200" size={24} />,
      label: "GitHub",
      value: "@Ankit-78",
      href: "https://github.com/Ankit-78"
    },
    {
      icon: <MapPin className="text-red-600" size={24} />,
      label: "Location",
      value: "Fatehpur, Uttar Pradesh, India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                Contact Information
              </h3>
              
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className={`flex items-center p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ${
                    contact.href === '#' ? 'cursor-default' : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  <div className="mr-4">{contact.icon}</div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{contact.label}</p>
                    <p className="text-gray-800 dark:text-gray-200 font-medium">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                Let's Work Together!
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                I'm passionate about creating innovative solutions and would love to hear about your project. 
                Whether you're looking for a full-stack developer or need help with a specific technology, let's connect!
              </p>
              
              <div className="space-y-4">
                <a
                  href="mailto:ankittrip2020@gmail.com"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 w-full justify-center"
                >
                  <Send className="mr-2" size={18} />
                  Send me an email
                </a>
                
                <div className="text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">or</p>
                </div>
                
                <a
                  href="https://drive.google.com/file/d/1NYEmUsZi7zcFtuwKjQThUV5heUQHpaXi/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transform hover:scale-105 transition-all duration-200 w-full justify-center"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;