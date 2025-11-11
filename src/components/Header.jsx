import { useState } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobileMenu();
  };

  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-white/95 dark:bg-dark-background/95 backdrop-blur-sm shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-xl font-extrabold hover:text-primary transition-colors cursor-pointer"
              >
                CYS's Portfolio
              </button>
            </div>
            <ul className="hidden md:flex space-x-8">
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('career')}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  Career
                </button>
              </li>
            </ul>
            <div className="flex items-center space-x-4">
              <button onClick={toggleDarkMode} className="">
                {darkMode ? (
                  <FaSun className="text-gray-600 dark:text-gray-400" />
                ) : (
                  <FaMoon className="text-gray-600 dark:text-gray-400" />
                )}
              </button>
              <button className="md:hidden p-2" onClick={toggleMobileMenu}>
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span className="w-full h-0.5 bg-gray-600 dark:bg-gray-400 transition-all"></span>
                  <span className="w-full h-0.5 bg-gray-600 dark:bg-gray-400 transition-all"></span>
                  <span className="w-full h-0.5 bg-gray-600 dark:bg-gray-400 transition-all"></span>
                </div>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white dark:bg-dark-background z-50 transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 md:hidden`}
      >
        <div className="container mx-auto px-4 h-full flex flex-col">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-xl font-extrabold hover:text-primary transition-colors"
              >
                CYS's Portfolio
              </button>
            </div>
            <button onClick={closeMobileMenu} className="p-2">
              <FaTimes className="text-gray-600 dark:text-gray-400 text-2xl" />
            </button>
          </div>
          <ul className="flex-1 flex flex-col justify-center items-center space-y-8">
            <li>
              <button
                onClick={() => scrollToSection('features')}
                className="text-2xl text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                About Me
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-2xl text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-2xl text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('career')}
                className="text-2xl text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Career
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;