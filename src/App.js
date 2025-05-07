import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import OnlineUsers from "./components/OnlineUsers";

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Section animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  return (
    <div className="App">
      {/* Sticky Navigation Bar */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 200,
        background: 'var(--background-main)',
        boxShadow: '0 2px 8px rgba(39, 79, 138, 0.04)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        padding: '1rem 0',
        borderBottom: '1px solid var(--background-alt)',
      }}>
        <button onClick={() => scrollToRef(heroRef)} style={navBtnStyle}>Home</button>
        <button onClick={() => scrollToRef(aboutRef)} style={navBtnStyle}>About</button>
        <button onClick={() => scrollToRef(experienceRef)} style={navBtnStyle}>Experience</button>
        <button onClick={() => scrollToRef(projectsRef)} style={navBtnStyle}>Projects</button>
        <button onClick={() => scrollToRef(contactRef)} style={navBtnStyle}>Contact</button>
      </nav>
      {/* Dark mode toggle */}
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        style={{
          position: 'fixed',
          top: 24,
          right: 32,
          zIndex: 300,
          background: 'var(--background-section)',
          color: 'var(--text-color)',
          border: '2px solid var(--primary-color)',
          borderRadius: '50%',
          width: 48,
          height: 48,
          fontSize: 22,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(39, 79, 138, 0.10)',
          cursor: 'pointer',
          transition: 'background 0.2s, color 0.2s',
        }}
        aria-label="Toggle dark mode"
        title="Toggle dark mode"
      >
        {darkMode ? '🌙' : '☀️'}
      </button>
      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: 32,
            right: 32,
            zIndex: 250,
            background: 'var(--primary-color)',
            color: 'var(--white)',
            border: 'none',
            borderRadius: '50%',
            width: 48,
            height: 48,
            fontSize: 22,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(39, 79, 138, 0.15)',
            cursor: 'pointer',
            transition: 'background 0.2s, color 0.2s, opacity 0.3s',
            opacity: showTopBtn ? 1 : 0,
          }}
          aria-label="Back to top"
          title="Back to top"
        >
          ↑
        </button>
      )}
      {/* CV Download Button */}
      <a
        href="/assets/cv.pdf"
        download
        style={{
          position: 'fixed',
          bottom: 32,
          left: 32,
          zIndex: 250,
          background: 'var(--accent-peach)',
          color: 'var(--text-color)',
          border: 'none',
          borderRadius: '24px',
          padding: '0.9rem 1.7rem',
          fontSize: '1.1rem',
          fontWeight: 600,
          boxShadow: '0 2px 8px rgba(39, 79, 138, 0.10)',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '0.7rem',
          transition: 'background 0.2s, color 0.2s',
        }}
        aria-label="Download CV / Portfolio PDF"
        title="Download CV / Portfolio PDF"
      >
        🧑‍💼 CV / Portfolio
      </a>
      <motion.div ref={heroRef} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}><Hero projectsRef={projectsRef} contactRef={contactRef} /></motion.div>
      <motion.div ref={aboutRef} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}><About /></motion.div>
      <motion.div ref={experienceRef} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}><Experience /></motion.div>
      <motion.div ref={projectsRef} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}><Projects /></motion.div>
      <motion.div ref={contactRef} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}><Contact /></motion.div>
      <OnlineUsers />
    </div>
  );
}

const navBtnStyle = {
  background: 'none',
  border: 'none',
  color: 'var(--text-color)',
  fontSize: '1.1rem',
  fontWeight: 500,
  cursor: 'pointer',
  padding: '0.5rem 1rem',
  borderRadius: '8px',
  transition: 'background 0.2s, color 0.2s',
};

export default App;
