import { FaPaintBrush, FaCode, FaBolt, FaMobileAlt } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaPaintBrush className="text-primary text-xl" />,
      title: 'Modern UI Design',
      description: 'Creating beautiful, responsive interfaces that look great on any device using the latest design trends.'
    },
    {
      icon: <FaCode className="text-primary text-xl" />,
      title: 'Clean Code',
      description: 'Writing maintainable, efficient code following best practices and modern development standards.'
    },
    {
      icon: <FaBolt className="text-primary text-xl" />,
      title: 'Performance Optimization',
      description: 'Ensuring fast load times and smooth experiences through efficient code and asset optimization.'
    },
    {
      icon: <FaMobileAlt className="text-primary text-xl" />,
      title: 'Responsive Development',
      description: 'Building websites that work flawlessly across all screen sizes, from phones to large displays.'
    }
  ];

  return (
    <section
      id="features"
      className="py-24 bg-gray-50 dark:bg-dark-background-secondary translate-y-4 transition-all duration-500 opacity-0"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What's in my Toolkit</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16">
          Everything needed to build great products on the web.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-dark-background p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;