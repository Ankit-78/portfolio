import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center">
            Made with{' '}
            <Heart className="text-red-500 mx-1" size={16} fill="currentColor" />
            by Ankit Tripathi
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;