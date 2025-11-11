import { FaCalendar } from 'react-icons/fa';

const Career = () => {
  const careers = [
    {
      company: '(주) 크림오프',
      logo: '/src/assets/creamoff.png',
      period: '2024.11 ~ 2025.11',
      description: [
        '주요 업무 내용 1',
        '주요 업무 내용 2',
        '주요 업무 내용 3'
      ],
      skills: ['FrontEnd 개발', 'BackEnd 개발']
    },
  ];

  return (
    <section
      id="career"
      className="py-24 translate-y-4 transition-all duration-500 opacity-0"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4">CAREER</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16">
        </p>
        <div className="space-y-16">
          {careers.map((career, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left side - Logo only */}
              <div className="lg:col-span-2">
                {career.logo && (
                  <div className="w-100 h-100 flex items-center justify-center">
                    <img
                      src={career.logo}
                      alt={career.company}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                )}
              </div>

              {/* Vertical line separator */}
              <div className="hidden lg:block lg:col-span-1 relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>
              </div>

              {/* Right side - All info */}
              <div className="lg:col-span-9">
                {/* Company info */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {career.company}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <span className="text-sm">{career.period}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {career.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 dark:bg-dark-background-secondary text-gray-600 dark:text-gray-400 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Job details */}
                <div className='mb-6 pb-6 border-b border-gray-500 dark:border-gray-700'>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    - 근태 관리 시스템 -
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    GPS 위치기반 출근/퇴근 플랫폼(Node.js, React, React Native)
                  </p>

                  {/* Store Links */}
                  <div className="flex flex-wrap gap-3">
                    {/* Play Store Link */}
                    <a
                      href='https://play.google.com/store/apps/details?id=com.tictec&hl=ko'
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-800 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-4.86 2.27-1.36zm2.27-1.36l-2.27-1.36-8.49-4.86 10.76 6.22zM13.69 12L3.84 2.85C4.08 2.61 4.42 2.5 4.78 2.5c.36 0 .7.11.95.33l15.09 8.68L13.69 12z" />
                      </svg>
                      Play Store
                    </a>

                    {/* App Store Link */}
                    <a
                      href='https://apps.apple.com/kr/app/tictec/id6751876375'
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-800 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                      </svg>
                      App Store
                    </a>
                  </div>
                </div>



                <div className='mb-6 pb-6 border-b border-gray-500 dark:border-gray-700'>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    - AI 피부 질환 분석 서비스 플랫폼 -
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    반려동물의 피부질환이 의심되는 이미지를 첨부하여 AI모델로 피부질환의 종류가 무엇인지 결과를 도출해주는 서비스 플랫폼(React, Node.js);
                  </p>

                  {/* Website Link */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href='https://talktail.co.kr'
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-800 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                      </svg>
                      Website
                    </a>
                  </div>
                </div>

                <div className='mb-6'>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    - 실시간 데이터 모니터링 -
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    동물병원에 입원한 동물에게 산소포화도, 심박수, 온도를 측정할 수 있는 디바이스를 착용시켜 각 수치를 모니터링
                    하는 서비스 (React Native, Node.js);
                  </p>

                  {/* Store Links */}
                  <div className="flex flex-wrap gap-3">
                    {/* Play Store Link */}
                    <a
                      href='https://play.google.com/store/apps/details?id=com.tailingapphub&hl=ko'
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-800 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-4.86 2.27-1.36zm2.27-1.36l-2.27-1.36-8.49-4.86 10.76 6.22zM13.69 12L3.84 2.85C4.08 2.61 4.42 2.5 4.78 2.5c.36 0 .7.11.95.33l15.09 8.68L13.69 12z" />
                      </svg>
                      Play Store
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
