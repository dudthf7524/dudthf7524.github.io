const About = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 translate-y-4 transition-all duration-500 opacity-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              I'm a frontend developer focused on crafting clean & user-friendly experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I build responsive websites that are fast, easy to use, and follow best coding practices. My
              expertise includes HTML, CSS, JavaScript, and modern frameworks to create dynamic, engaging
              interfaces with clean, optimized code.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, or enjoying a good book.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-blue-300/30 dark:hover:shadow-blue-500/20 shadow-blue-200/20 dark:shadow-blue-700/10 text-center"
              >
                Contact Me
              </button>
              <a
                href="#"
                className="px-8 py-3 bg-white dark:bg-dark-background-secondary text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-900 dark:hover:border-white transition-colors text-center"
              >
                Download Resume
              </a>
            </div>
          </div>
          {/* <div className="relative">
            <div className="w-72 h-72 mx-auto animate-morph bg-gradient-to-br from-primary via-secondary to-accent rounded-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-secondary/50 to-accent/50 rounded-full blur-2xl animate-morph"></div>
              <img
                src="/assets/profile-1.png"
                alt="Profile Photo"
                className="absolute inset-0 w-full h-full object-cover z-10"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;