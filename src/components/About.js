import React from 'react';

const About = () => {
  return (
    <section style={{
      padding: '5rem 2rem',
      backgroundColor: '#f8f9fa'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          marginBottom: '2rem',
          textAlign: 'center',
          color: '#333'
        }}>About Me</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <div>
            <img 
              src="your-profile-image-url.jpg" 
              alt="Profile" 
              style={{
                width: '100%',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>
          
          <div>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: '#555',
              marginBottom: '1.5rem'
            }}>
              [Write a brief description about yourself here. Talk about your educational background,
              career goals, and passions.]
            </p>
            
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '1rem',
              color: '#333'
            }}>My Skills</h3>
            
            <ul style={{
              listStyle: 'none',
              padding: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem'
            }}>
              <li>✓ JavaScript</li>
              <li>✓ React.js</li>
              <li>✓ Node.js</li>
              <li>✓ HTML/CSS</li>
              <li>✓ Git</li>
              <li>✓ Database Management</li>
              <li>✓ Java</li>
              <li>✓ Python</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 