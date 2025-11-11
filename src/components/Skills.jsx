import { FaHtml5, FaCss3, FaJs, FaReact, FaJava, FaNodeJs } from 'react-icons/fa';
import { SiSpringboot, SiReduxsaga, SiTailwindcss, SiMysql, SiSpring } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Language',
      skills: [
        {
          icon: <FaJs className="text-yellow-500 text-3xl" />,
          title: 'JavaScript',
          percentage: 85,
          bgColor: 'bg-yellow-500/10'
        },
        {
          icon: <FaJava className="text-red-600 text-3xl" />,
          title: 'Java',
          percentage: 80,
          bgColor: 'bg-red-600/10'
        }
      ]
    },
    {
      category: 'Frontend',
      skills: [
        {
          icon: <FaReact className="text-blue-400 text-3xl" />,
          title: 'React',
          percentage: 85,
          bgColor: 'bg-blue-400/10'
        },
        {
          icon: <SiReduxsaga className="text-green-600 text-3xl" />,
          title: 'Redux-Saga',
          percentage: 75,
          bgColor: 'bg-green-600/10'
        },
        {
          icon: <SiTailwindcss className="text-cyan-500 text-3xl" />,
          title: 'Tailwind CSS',
          percentage: 80,
          bgColor: 'bg-cyan-500/10'
        },
        {
          icon: <FaHtml5 className="text-red-500 text-3xl" />,
          title: 'HTML',
          percentage: 90,
          bgColor: 'bg-red-500/10'
        },
        {
          icon: <FaCss3 className="text-blue-500 text-3xl" />,
          title: 'CSS',
          percentage: 85,
          bgColor: 'bg-blue-500/10'
        }
      ]
    },
    {
      category: 'Backend',
      skills: [
        {
          icon: <SiSpringboot className="text-green-500 text-3xl" />,
          title: 'Spring Boot',
          percentage: 80,
          bgColor: 'bg-green-500/10'
        },
        {
          icon: <SiSpring className="text-green-600 text-3xl" />,
          title: 'JPA',
          percentage: 75,
          bgColor: 'bg-green-600/10'
        },
        {
          icon: <FaNodeJs className="text-green-600 text-3xl" />,
          title: 'Node.js',
          percentage: 75,
          bgColor: 'bg-green-600/10'
        },
        {
          icon: <SiMysql className="text-blue-600 text-3xl" />,
          title: 'MySQL',
          percentage: 80,
          bgColor: 'bg-blue-600/10'
        }
      ]
    }
  ];

  return (
    <section
      id="skills"
      className="py-24 translate-y-4 transition-all duration-500 opacity-0"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4">SKILLS</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16">
        </p>

        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-primary">{category.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.skills.map((skill, index) => (
                <div key={index} className="bg-white dark:bg-dark-background p-8 rounded-lg shadow-lg">
                  <div className={`w-16 h-16 ${skill.bgColor} rounded-full flex items-center justify-center mb-6`}>
                    {skill.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-4">{skill.title}</h4>
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
        ))}
      </div>
    </section>
  );
};

export default Skills;