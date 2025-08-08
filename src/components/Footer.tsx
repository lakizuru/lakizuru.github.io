import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="flex items-center space-x-2">
              <span>© 2025 Lakisuru Semasinghe. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>and React</span>
            </p>
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <a
              href="#about"
              className="hover:text-blue-400 transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="hover:text-blue-400 transition-colors"
            >
              Resume
            </a>
            <a
              href="#blog"
              className="hover:text-blue-400 transition-colors"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}