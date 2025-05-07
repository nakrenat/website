import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      company: "Google",
      position: "Trainee",
      period: "2022 - 2023",
      description: "I participated in the Google Game and App Academy, where I received training in mobile app development using Flutter. This program was supported by the Turkish Ministry of Industry and Technology and the T3 Entrepreneurship Center. Throughout the program, I had the opportunity to work in teams, improve my collaboration skills, and gain hands-on experience in developing applications in a real-world setting."
    },
    {
      company: "Private Tutoring",
      position: "Mathematics Tutor",
      period: "2022 - 2024",
      description: "I gave mathematics lessons to middle school students preparing for the high school entrance exam. This experience helped me strengthen my communication and teaching skills while supporting younger students in achieving their academic goals."
    },
    {
      company: "AFAD",
      position: "Volunteer",
      period: "2022 - Present",
      description: "I am also a certified volunteer at AFAD (Disaster and Emergency Management Authority) in Türkiye. I have completed the necessary training programs and am prepared to take action as a volunteer in the event of a disaster or emergency."
    },
    {
      company: "Hacettepe Automotive Branch",
      position: "Coordinator of the Organizing Committee",
      period: "March 2025 - Present",
      description: "I worked as an intern on the administrative board of the Hacettepe Automotive Branch. This role allowed me to strengthen my communication skills while actively taking part in events and organizations involving many well-known companies in the industry."
    }
  ];

  return (
    <section style={{
      padding: '5rem 2rem',
      background: 'linear-gradient(135deg, var(--background-alt) 0%, var(--background-section) 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradient 15s ease infinite',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: '900px',
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
          Work Experience
        </motion.h2>

        {/* Timeline vertical line */}
        <div style={{
          position: 'absolute',
          left: '32px',
          top: '0',
          bottom: '0',
          width: '4px',
          background: 'linear-gradient(var(--primary-color), var(--accent-peach))',
          borderRadius: '2px',
          zIndex: 0
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', position: 'relative' }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                position: 'relative',
                zIndex: 1
              }}
            >
              {/* Timeline dot/icon */}
              <div style={{
                minWidth: '64px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                zIndex: 2
              }}>
                <div style={{
                  background: 'var(--primary-color)',
                  color: 'var(--white)',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.3rem',
                  boxShadow: '0 2px 8px rgba(39, 79, 138, 0.10)',
                  border: '4px solid var(--background-alt)'
                }}>
                  <FiBriefcase size={20} />
                </div>
                {/* Line connector for all but last */}
                {index !== experiences.length - 1 && (
                  <div style={{
                    width: '4px',
                    flex: 1,
                    background: 'linear-gradient(var(--primary-color), var(--accent-peach))',
                    marginTop: '0.5rem',
                    borderRadius: '2px',
                    minHeight: '40px'
                  }} />
                )}
              </div>
              {/* Experience card */}
              <div style={{
                background: 'var(--white)',
                borderRadius: '16px',
                boxShadow: '0 4px 16px rgba(39, 79, 138, 0.08)',
                padding: '2rem',
                marginLeft: '1.5rem',
                flex: 1,
                minWidth: 0
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    margin: 0,
                    color: 'var(--primary-color)'
                  }}>{exp.company}</h3>
                  <span style={{ color: 'var(--text-light)', fontSize: '1rem' }}>{exp.period}</span>
                </div>
                <h4 style={{
                  fontSize: '1.1rem',
                  color: 'var(--text-color)',
                  marginBottom: '0.5rem',
                  fontWeight: 600
                }}>{exp.position}</h4>
                <p style={{
                  color: 'var(--text-light)',
                  lineHeight: '1.7',
                  fontSize: '1.05rem',
                  margin: 0
                }}>{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 