import React, { useState } from 'react';

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

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: '🐱'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: '💼'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: '🐦'
    }
  ];

  return (
    <section style={{
      padding: '5rem 2rem',
      backgroundColor: 'white'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          marginBottom: '3rem',
          textAlign: 'center',
          color: '#333'
        }}>Contact</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'start'
        }}>
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              <div>
                <label 
                  htmlFor="name"
                  style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: '#555'
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
                    color: '#555'
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
                    color: '#555'
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
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}
              >
                Send
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div style={{
              marginBottom: '2rem'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '1rem',
                color: '#333'
              }}>Contact Information</h3>
              <p style={{
                color: '#666',
                marginBottom: '0.5rem'
              }}>
                📧 email@example.com
              </p>
              <p style={{
                color: '#666',
                marginBottom: '0.5rem'
              }}>
                📱 +90 555 555 5555
              </p>
              <p style={{
                color: '#666'
              }}>
                📍 Istanbul, Turkey
              </p>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '1rem',
                color: '#333'
              }}>Social Media</h3>
              <div style={{
                display: 'flex',
                gap: '1rem'
              }}>
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.5rem 1rem',
                      backgroundColor: '#f8f9fa',
                      color: '#333',
                      textDecoration: 'none',
                      borderRadius: '5px',
                      transition: 'background-color 0.3s ease'
                    }}
                  >
                    <span>{link.icon}</span>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 