import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-50 dark:bg-dark-background-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl font-extrabold hover:text-primary transition-colors cursor-pointer"
            >
              CYS's Portfolio
            </button>
          </div>
          <ul className="flex flex-wrap justify-center gap-6 mb-0">
            <li>
              <button
                onClick={() => scrollToSection('features')}
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              >
                About Me
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('career')}
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Career
              </button>
            </li>
          </ul>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>&copy; 2025 Choi Yeong Sol. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;