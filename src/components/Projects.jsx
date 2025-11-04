import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Crypto Platform',
      description: 'A modern cryptocurrency trading platform with real-time price tracking and portfolio management.',
      image: '/assets/item-1.jpg',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'API'],
      youtubeLink: '#',
      githubLink: '#'
    },
    {
      title: 'AI Landing Page',
      description: 'A stunning landing page showcasing AI services with interactive animations and modern design.',
      image: '/assets/item-2.jpg',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'API'],
      youtubeLink: '#',
      githubLink: '#'
    },
    {
      title: 'AI Image Detector',
      description: 'An intelligent image detection system that can identify and classify objects in real-time.',
      image: '/assets/item-3.jpg',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'API'],
      youtubeLink: '#',
      githubLink: '#'
    }
  ];

  return (
    <section id="projects" className="py-24 translate-y-4 transition-all duration-500 opacity-0">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Featured Projects</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16">
          Check out some of my recent work
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-dark-background rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-48 relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 h-16">{project.description}</p>
                <div className="flex flex-wrap gap-2 my-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-dark-background-secondary text-gray-600 dark:text-gray-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.youtubeLink}
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Youtube
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    <FaGithub className="mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;