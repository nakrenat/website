import React from 'react';

const Hero = () => {
  return (
    <section className="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '2rem'
    }}>
      <div style={{
        maxWidth: '800px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          marginBottom: '1rem'
        }}>Hello, I'm Erkan Tan</h1>
        <h2 style={{
          fontSize: '2rem',
          marginBottom: '2rem',
          fontWeight: '300'
        }}>Computer Engineering Student</h2>
        <p style={{
          fontSize: '1.2rem',
          marginBottom: '2rem',
          lineHeight: '1.6'
        }}>
          Developing creative solutions with modern web technologies.
        </p>
        <button style={{
          padding: '1rem 2rem',
          fontSize: '1.1rem',
          backgroundColor: 'white',
          color: '#764ba2',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}>
          View My Projects
        </button>
      </div>
    </section>
  );
};

export default Hero; 