import { FaUser, FaCalendarAlt, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGraduationCap } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaUser className="text-primary text-xl" />,
      title: '이름',
      description: '최영솔'
    },
    {
      icon: <FaCalendarAlt className="text-primary text-xl" />,
      title: '생년월일',
      description: '97.05.24'
    },
    {
      icon: <FaMapMarkerAlt className="text-primary text-xl" />,
      title: '위치',
      description: '경상북도 경산시'
    },
    {
      icon: <FaPhone className="text-primary text-xl" />,
      title: '연락처',
      description: '010-7751-4068'
    },
    {
      icon: <FaEnvelope className="text-primary text-xl" />,
      title: '이메일',
      description: 'dudthf7524@naver.com'
    },
    {
      icon: <FaGraduationCap className="text-primary text-xl" />,
      title: '학력',
      description: '영남대학교 기계공학부'
    }
  ];

  return (
    <section
      id="features"
      className="py-24 bg-gray-50 dark:bg-dark-background-secondary translate-y-4 transition-all duration-500 opacity-0"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4">ABOUT ME</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16">
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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