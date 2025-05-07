import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section style={{
      padding: '5rem 2rem',
      background: 'linear-gradient(135deg, var(--background-section) 0%, var(--background-alt) 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradient 15s ease infinite',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2
      }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: '2.5rem',
            marginBottom: '3rem',
            textAlign: 'center',
            color: 'var(--text-color)'
          }}
        >
          About Me
        </motion.h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'relative'
            }}
          >
            <div style={{
              width: '100%',
              height: '400px',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
              position: 'relative'
            }}>
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="me.jpg" 
                alt="Profile" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
              />
            </div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p 
              variants={itemVariants}
              style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: 'var(--text-light)',
                marginBottom: '2rem'
              }}
            >
              I am a passionate Computer Engineering student with a strong interest in web development and software engineering. 
              I enjoy creating modern, user-friendly applications that solve real-world problems. 
              My goal is to continuously learn and grow as a developer while contributing to meaningful projects.
            </motion.p>
            
            <motion.h3 
              variants={itemVariants}
              style={{
                fontSize: '1.5rem',
                marginBottom: '1.5rem',
                color: 'var(--text-color)'
              }}
            >
              My Skills
            </motion.h3>
            
            <motion.div
              variants={containerVariants}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem'
              }}
            >
              {['JavaScript', 'React.js', 'Node.js', 'HTML/CSS', 'Git', 'Database Management', 'Java', 'Python'].map((skill, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    backgroundColor: 'var(--white)',
                    padding: '1rem',
                    borderRadius: '10px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <span style={{
                    color: 'var(--primary-color)',
                    fontSize: '1.2rem'
                  }}>✓</span>
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 