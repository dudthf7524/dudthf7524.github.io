import { FaHtml5, FaCss3, FaJs, FaReact, FaGitAlt, FaDesktop } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    {
      icon: <FaHtml5 className="text-red-500 text-3xl" />,
      title: 'HTML5',
      percentage: 95,
      bgColor: 'bg-red-500/10'
    },
    {
      icon: <FaCss3 className="text-blue-500 text-3xl" />,
      title: 'CSS3',
      percentage: 90,
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: <FaJs className="text-yellow-500 text-3xl" />,
      title: 'JavaScript',
      percentage: 85,
      bgColor: 'bg-yellow-500/10'
    },
    {
      icon: <FaReact className="text-blue-400 text-3xl" />,
      title: 'React',
      percentage: 80,
      bgColor: 'bg-blue-400/10'
    },
    {
      icon: <FaGitAlt className="text-orange-500 text-3xl" />,
      title: 'Git',
      percentage: 85,
      bgColor: 'bg-orange-500/10'
    },
    {
      icon: <FaDesktop className="text-purple-500 text-3xl" />,
      title: 'Responsive Design',
      percentage: 90,
      bgColor: 'bg-purple-500/10'
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gray-50 dark:bg-dark-background-secondary translate-y-4 transition-all duration-500 opacity-0"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">My Skills</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16">
          Technologies and tools I use to bring products to life
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white dark:bg-dark-background p-8 rounded-lg shadow-lg">
              <div className={`w-16 h-16 ${skill.bgColor} rounded-full flex items-center justify-center mb-6`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
              <div className="w-full h-2 bg-gray-200 dark:bg-dark-background rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000`}
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;