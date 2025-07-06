import React from 'react';
import { Github, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        
       
        <div className="text-lg font-semibold text-gray-800">
          🏠 Roommate Tracker
        </div>

       
        <div className="flex items-center gap-6 text-sm">
          <a
            href="https://github.com/waleedkhan786 "
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center gap-1"
          >
            <Github size={18} /> GitHub
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>

        
        <div className="text-sm text-gray-500 flex items-center gap-1">
          Made by Waleed
        </div>
      </div>
    </footer>
  );
};

export default Footer;
