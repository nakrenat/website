import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website built with React. Features include a clean and professional design, smooth animations, and sections for showcasing skills, experience, and projects. The website is fully responsive and optimized for all devices.",
      image: "portfolio-image.jpg",
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      liveLink: "https://your-portfolio-url.com",
      githubLink: "https://github.com/nakrenat/portfolio"
    },
    {
      title: "Shopping App Backend",
      description: "Developed a RESTful backend for an e-commerce platform using Spring Boot and MySQL. Implemented product management, user authentication, shopping cart, and checkout functionalities. Used JPA for database interactions and followed MVC architecture.",
      image: "shopping-backend.jpg",
      technologies: ["Java", "Spring Boot", "MySQL", "REST API", "JPA"],
      liveLink: "https://shopping-app-backend.com",
      githubLink: "https://github.com/nakrenat/shopping-backend"
    },
    {
      title: "Console-Based Shopping App",
      description: "Early version of the shopping system implemented as a command-line application in Java. Handled user input with Scanner and database operations via JDBC. Later refactored into the Spring Boot-based web service.",
      image: "shopping-cli.jpg",
      technologies: ["Java", "JDBC", "CLI", "MySQL"],
      liveLink: null,
      githubLink: "https://github.com/nakrenat/shopping-cli-prototyp"
    }
  ];

  return (
    <section style={{
      padding: '5rem 2rem',
      backgroundColor: '#f8f9fa'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          marginBottom: '3rem',
          textAlign: 'center',
          color: '#333'
        }}>My Projects</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {projects.map((project, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
              ':hover': {
                transform: 'translateY(-5px)'
              }
            }}>
              <img 
                src={project.image} 
                alt={project.title}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover'
                }}
              />
              
              <div style={{
                padding: '1.5rem'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  color: '#333'
                }}>{project.title}</h3>
                
                <p style={{
                  color: '#666',
                  marginBottom: '1rem',
                  lineHeight: '1.6'
                }}>{project.description}</p>
                
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1rem'
                }}>
                  {project.technologies.map((tech, i) => (
                    <span key={i} style={{
                      backgroundColor: '#e9ecef',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '15px',
                      fontSize: '0.9rem',
                      color: '#555'
                    }}>{tech}</span>
                  ))}
                </div>
                
                <div style={{
                  display: 'flex',
                  gap: '1rem'
                }}>
                  {project.liveLink && (
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: '#007bff',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '5px',
                        fontSize: '0.9rem'
                      }}
                    >
                      Live Demo
                    </a>
                  )}
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: '#333',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '5px',
                      fontSize: '0.9rem'
                    }}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 