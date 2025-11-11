import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Skills from './components/Skills';
import Career from './components/Career';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('translate-y-4', 'opacity-0');
          entry.target.classList.add('translate-y-0', 'opacity-100');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="font-sans text-gray-900 dark:text-white bg-white dark:bg-dark-background transition-colors duration-300">
      {/* Dark mode background gradients */}
      <div className="fixed inset-0 -z-10 opacity-0 dark:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
      </div>

      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <Features />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Career />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App
