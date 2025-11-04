import { useState, useEffect } from 'react';

const Hero = () => {
  const [commandText, setCommandText] = useState('');
  const commands = [
    '백엔드 개발자 최영솔입니다.',
    'npm install tailwindcss',
    'git commit -m "Initial commit"',
    'npm run build'
  ];
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);

  useEffect(() => {
    const command = commands[currentCommandIndex];
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= command.length) {
        setCommandText(command.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentCommandIndex((prev) => (prev + 1) % commands.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentCommandIndex]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            WelCome{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              cys's portfolio
            </span>{' '}
            For The Web
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
            Creating <strong>high-quality web applications</strong> with modern tools and best practices for
            exceptional user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-blue-300/30 dark:hover:shadow-blue-500/20 shadow-blue-200/20 dark:shadow-blue-700/10"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-3 bg-white dark:bg-dark-background-secondary text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-900 dark:hover:border-white transition-colors"
            >
              Learn More
            </button>
          </div>
          <div className="bg-gray-100 dark:bg-dark-background-secondary rounded-lg overflow-hidden shadow-lg max-w-2xl mx-auto">
            <div className="flex items-center space-x-2 p-3 bg-gray-200 dark:bg-dark-background">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>
            <div className="p-6 font-mono terminal-content">
              <span className="text-green-500">$</span>{' '}
              <span className="command-text text-gray-900 dark:text-white">
                {commandText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;