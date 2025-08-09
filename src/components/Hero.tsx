import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[calc(100vh-5rem)]">
            {/* Left Column - Profile Image (1/3 width) */}
            <div className="lg:col-span-1 flex justify-center lg:justify-start items-center">
              <div className="relative">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQHuUfaweR90uQ/profile-displayphoto-shrink_800_800/B56ZNoVk9rHYAc-/0/1732622309316?e=1757548800&v=beta&t=TLS3fd6rL0MKV-4suO9D-N1FUNg_D77TxPoQ_R3iQXw"
                  alt="Lakisuru Semasinghe"
                  className="w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full shadow-2xl ring-4 ring-white dark:ring-gray-700 object-cover"
                />
              </div>
            </div>

            {/* Right Column - Text and Buttons (2/3 width) */}
            <div className="lg:col-span-2 text-center lg:text-left flex flex-col justify-center lg:pl-8">
              {/* Main Content */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Lakisuru
                </span>
                <br />
                <span className="text-gray-800 dark:text-white">Semasinghe</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
                DevOps Engineer & Tech Enthusiast
              </p>

              <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl lg:max-w-none mx-auto lg:mx-0">
                Passionate about cloud technologies, automation, and building scalable systems. 
                <br />
                Based in Kurunegala, Sri Lanka
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <button
                  onClick={scrollToAbout}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Learn More
                </button>
                <a
                  href="#contact"
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-200"
                >
                  Get In Touch
                </a>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-6 mb-12">
                <a
                  href="https://github.com/lakizuru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
                >
                  <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="https://linkedin.com/in/lakizuru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
                >
                  <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="https://lakizuru.medium.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
                >
                  <svg
                    className="w-6 h-6 text-gray-700 dark:text-gray-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                  </svg>
                </a>
                <a
                  href="mailto:lakisuru@outlook.com"
                  className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
                >
                  <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
              </div>

              {/* Scroll Indicator */}
              <div className="lg:hidden">
                <button
                  onClick={scrollToAbout}
                  className="animate-bounce mx-auto block"
                >
                  <ArrowDown className="w-6 h-6 text-gray-400" />
                </button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator for desktop */}
          <div className="hidden lg:flex justify-center mt-8">
            <button
              onClick={scrollToAbout}
              className="animate-bounce"
            >
              <ArrowDown className="w-6 h-6 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}