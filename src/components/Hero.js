import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import sampleAnimation from '../assets/sample-animation.json';

const Hero = ({ projectsRef, contactRef }) => {
  const handleScrollToProjects = () => {
    if (projectsRef && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleScrollToContact = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 50%, var(--accent-peach) 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradient 15s ease infinite',
      color: 'var(--white)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'url("/particles.svg")',
        opacity: 0.1,
        zIndex: 1
      }} />
      
      <div style={{
        maxWidth: '800px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2,
        padding: '2rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <Lottie animationData={sampleAnimation} style={{ width: 100, height: 100 }} />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              fontSize: '4rem',
              marginBottom: '1.5rem',
              fontWeight: '700',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)'
            }}
          >
            Hello, I'm Erkan Tan
          </motion.h1>
        </div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{
            fontSize: '2.5rem',
            marginBottom: '2rem',
            fontWeight: '300',
            opacity: 0.9
          }}
        >
          Computer Engineering Student
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          style={{
            fontSize: '1.25rem',
            marginBottom: '3rem',
            lineHeight: '1.8',
            maxWidth: '600px',
            margin: '0 auto 3rem',
            color: 'var(--text-color)'
          }}
        >
          Developing creative solutions with modern web technologies.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center'
          }}
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              backgroundColor: 'var(--white)',
              color: 'var(--primary-color)',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontWeight: '500'
            }}
            onClick={handleScrollToProjects}
          >
            View My Projects
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              backgroundColor: 'var(--accent-peach)',
              color: 'var(--text-color)',
              border: '2px solid var(--accent-peach)',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontWeight: '600',
              boxShadow: '0 2px 8px rgba(39, 79, 138, 0.10)'
            }}
            onClick={handleScrollToContact}
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 