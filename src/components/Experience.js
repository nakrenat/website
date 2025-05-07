import React from 'react';

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
      backgroundColor: 'white'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          marginBottom: '3rem',
          textAlign: 'center',
          color: '#333'
        }}>Work Experience</h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          {experiences.map((exp, index) => (
            <div key={index} style={{
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#fff',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
              ':hover': {
                transform: 'translateY(-5px)'
              }
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '1rem'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  color: '#333',
                  margin: 0
                }}>{exp.company}</h3>
                <span style={{
                  color: '#666'
                }}>{exp.period}</span>
              </div>
              
              <h4 style={{
                fontSize: '1.2rem',
                color: '#555',
                marginBottom: '1rem'
              }}>{exp.position}</h4>
              
              <p style={{
                color: '#666',
                lineHeight: '1.6'
              }}>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 