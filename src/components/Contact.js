import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can process the form data
    console.log('Form data:', formData);
    // Clear form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <FiMail size={24} color="#2563eb" />, label: 'E-mail', value: 'erkantan338@gmail.com', link: 'mailto:erkantan338@gmail.com'
    },
    {
      icon: <FiPhone size={24} color="#2563eb" />, label: 'Phone', value: '+90 533 405 9030', link: 'tel:+905334059030'
    },
    {
      icon: <FiMapPin size={24} color="#2563eb" />, label: 'Location', value: 'Ankara, Türkiye', link: null
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/nakrenat',
      icon: <FaGithub size={22} color="#333" />
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: <FaLinkedin size={22} color="#0a66c2" />
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: <FaTwitter size={22} color="#1da1f2" />
    }
  ];

  return (
    <section style={{
      padding: '5rem 2rem',
      backgroundColor: 'var(--background-light)'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
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
          Contact
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'start'
        }}>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <div style={{
              background: 'var(--white)',
              borderRadius: '15px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.07)',
              padding: '2rem',
              marginBottom: '1rem'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '1.5rem',
                color: 'var(--text-color)'
              }}>Contact Information</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {contactInfo.map((info, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    {info.icon}
                    {info.link ? (
                      <a href={info.link} style={{ color: 'var(--text-color)', textDecoration: 'none', fontSize: '1.1rem' }}>{info.value}</a>
                    ) : (
                      <span style={{ color: 'var(--text-color)', fontSize: '1.1rem' }}>{info.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div style={{
              background: 'var(--white)',
              borderRadius: '15px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.07)',
              padding: '2rem'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '1.2rem',
                color: 'var(--text-color)'
              }}>Social Media</h3>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.5rem 1rem',
                      backgroundColor: '#f3f4f6',
                      color: 'var(--text-color)',
                      textDecoration: 'none',
                      borderRadius: '8px',
                      fontWeight: 500,
                      transition: 'background 0.2s',
                    }}
                  >
                    {link.icon}
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              background: 'var(--white)',
              borderRadius: '15px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.07)',
              padding: '2rem'
            }}>
              <div>
                <label 
                  htmlFor="name"
                  style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'var(--text-light)'
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                    fontSize: '1rem'
                  }}
                />
              </div>
              <div>
                <label 
                  htmlFor="email"
                  style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'var(--text-light)'
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                    fontSize: '1rem'
                  }}
                />
              </div>
              <div>
                <label 
                  htmlFor="message"
                  style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'var(--text-light)'
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  padding: '1rem 2rem',
                  backgroundColor: 'var(--primary-color)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  fontWeight: 500,
                  transition: 'background-color 0.3s ease'
                }}
              >
                Send
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 