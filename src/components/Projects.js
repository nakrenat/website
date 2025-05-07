import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaRegHeart, FaShareAlt } from 'react-icons/fa';

const PORTFOLIO_URL = "https://nakrenat.github.io/website";

const Projects = () => {
  const [modalProject, setModalProject] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [copied, setCopied] = useState({ project: false, portfolio: false });

  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website built with React. Features include a clean and professional design, smooth animations, and sections for showcasing skills, experience, and projects. The website is fully responsive and optimized for all devices.",
      image: "portfolio-image.jpg",
      // video: "portfolio-demo.mp4", // örnek video desteği
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      liveLink: "https://your-portfolio-url.com",
      githubLink: "https://github.com/nakrenat",
      details: "This project demonstrates advanced React patterns, responsive design, and modern UI/UX best practices. It is optimized for performance and accessibility."
    },
    {
      title: "Shopping App Backend",
      description: "Developed a RESTful backend for an e-commerce platform using Spring Boot and MySQL. Implemented product management, user authentication, shopping cart, and checkout functionalities. Used JPA for database interactions and followed MVC architecture.",
      image: "shopping-backend.jpg",
      video: "shopping-demo.gif", // örnek gif desteği
      technologies: ["Java", "Spring Boot", "MySQL", "REST API", "JPA"],
      liveLink: "https://shopping-app-backend.com",
      githubLink: "https://github.com/nakrenat",
      details: "The backend supports scalable e-commerce operations, secure authentication, and robust data management. Includes comprehensive API documentation."
    },
    {
      title: "Console-Based Shopping App",
      description: "Early version of the shopping system implemented as a command-line application in Java. Handled user input with Scanner and database operations via JDBC. Later refactored into the Spring Boot-based web service.",
      image: "shopping-cli.jpg",
      technologies: ["Java", "JDBC", "CLI", "MySQL"],
      liveLink: null,
      githubLink: "https://github.com/nakrenat",
      details: "A simple CLI-based shopping experience, demonstrating Java basics, JDBC, and user interaction in the terminal."
    }
  ];

  const toggleFavorite = (title) => {
    setFavorites((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  const handleShare = (project) => {
    const url = project.liveLink || project.githubLink;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopied((prev) => ({ ...prev, project: true }));
      setTimeout(() => setCopied((prev) => ({ ...prev, project: false })), 1200);
    }
  };

  const handleSharePortfolio = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(PORTFOLIO_URL);
      setCopied((prev) => ({ ...prev, portfolio: true }));
      setTimeout(() => setCopied((prev) => ({ ...prev, portfolio: false })), 1200);
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
        maxWidth: '1200px',
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
          My Projects
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
        }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              style={{
                backgroundColor: 'var(--white)',
                borderRadius: '18px',
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(39, 79, 138, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '480px',
                transition: 'transform 0.3s',
                position: 'relative',
              }}
              whileHover={{ y: -8, boxShadow: '0 8px 32px rgba(39, 79, 138, 0.12)' }}
            >
              <div style={{ width: '100%', height: '200px', background: 'var(--background-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                {project.video ? (
                  project.video.endsWith('.mp4') ? (
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopLeftRadius: '18px', borderTopRightRadius: '18px' }}
                    />
                  ) : (
                    <img
                      src={project.video}
                      alt={project.title + ' demo'}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopLeftRadius: '18px', borderTopRightRadius: '18px' }}
                    />
                  )
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopLeftRadius: '18px', borderTopRightRadius: '18px' }}
                  />
                )}
              </div>
              <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  color: 'var(--primary-color)'
                }}>{project.title}</h3>
                <p style={{
                  color: 'var(--text-light)',
                  marginBottom: '1.5rem',
                  lineHeight: '1.6',
                  fontSize: '1.08rem'
                }}>{project.description}</p>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1.5rem'
                }}>
                  {project.technologies.map((tech, i) => (
                    <span key={i} style={{
                      backgroundColor: 'var(--background-alt)',
                      padding: '0.4rem 1rem',
                      borderRadius: '15px',
                      fontSize: '0.95rem',
                      color: 'var(--primary-color)',
                      fontWeight: 500,
                      letterSpacing: '0.01em',
                      boxShadow: '0 1px 4px rgba(39, 79, 138, 0.04)'
                    }}>{tech}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', alignItems: 'center' }}>
                  <button
                    onClick={() => toggleFavorite(project.title)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: 22,
                      color: favorites.includes(project.title) ? 'var(--primary-color)' : 'var(--text-light)',
                      transition: 'color 0.2s',
                      marginRight: '0.2rem',
                    }}
                    aria-label="Add to favorites"
                    title="Add to favorites"
                  >
                    {favorites.includes(project.title) ? <FaHeart /> : <FaRegHeart />}
                  </button>
                  <button
                    onClick={() => handleShare(project)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: 20,
                      color: 'var(--primary-color)',
                      transition: 'color 0.2s',
                      marginRight: '0.2rem',
                    }}
                    aria-label="Share project link"
                    title="Share project link"
                  >
                    <FaShareAlt />
                  </button>
                  <button
                    onClick={handleSharePortfolio}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: 20,
                      color: 'var(--accent-peach)',
                      transition: 'color 0.2s',
                      marginRight: '0.2rem',
                    }}
                    aria-label="Share portfolio link"
                    title="Share portfolio link"
                  >
                    <FaShareAlt />
                  </button>
                  {(copied.project || copied.portfolio) && (
                    <span style={{ color: copied.project ? 'var(--primary-color)' : 'var(--accent-peach)', fontSize: '0.95rem' }}>
                      {copied.project ? 'Project Copied!' : 'Portfolio Copied!'}
                    </span>
                  )}
                  <button
                    onClick={() => setModalProject(project)}
                    style={{
                      padding: '0.5rem 1.2rem',
                      backgroundColor: 'var(--accent-peach)',
                      color: 'var(--text-color)',
                      border: 'none',
                      borderRadius: '8px',
                      fontWeight: 500,
                      fontSize: '1rem',
                      cursor: 'pointer',
                      marginLeft: 'auto',
                      transition: 'background 0.2s, color 0.2s',
                    }}
                  >
                    More Details
                  </button>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '0.7rem 1.4rem',
                        backgroundColor: 'var(--primary-color)',
                        color: 'var(--white)',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        fontWeight: 500,
                        transition: 'background 0.2s',
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
                      padding: '0.7rem 1.4rem',
                      backgroundColor: 'var(--accent-peach)',
                      color: 'var(--text-color)',
                      textDecoration: 'none',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontWeight: 500,
                      transition: 'background 0.2s',
                    }}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Modal for project details */}
      <AnimatePresence>
        {modalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(30,34,54,0.7)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => setModalProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'var(--white)',
                borderRadius: '18px',
                boxShadow: '0 8px 32px rgba(39, 79, 138, 0.18)',
                padding: '2.5rem',
                maxWidth: '480px',
                width: '90vw',
                color: 'var(--text-color)',
                position: 'relative',
              }}
              onClick={e => e.stopPropagation()}
            >
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>{modalProject.title}</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-light)' }}>{modalProject.details}</p>
              <button
                onClick={() => setModalProject(null)}
                style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  background: 'none',
                  border: 'none',
                  fontSize: 24,
                  color: 'var(--text-light)',
                  cursor: 'pointer',
                }}
                aria-label="Close details"
                title="Close details"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects; 