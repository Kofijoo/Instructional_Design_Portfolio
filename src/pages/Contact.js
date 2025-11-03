import React from 'react';

function Contact() {
  return (
    <section className="page-section contact-section">
      <div className="page-container">
        <h1 className="page-title">Get in Touch</h1>
        <p className="page-intro">
          Ready to discuss how I can help create impactful learning experiences for your organization? Let's connect and explore opportunities to transform education through innovative design and technology.
        </p>
        
        <div className="contact-grid">
          <div className="contact-card">
            <h2>📍 Location</h2>
            <p>Oslo, Norway</p>
            <p className="contact-note">Permanent residence + Valid work permit</p>
          </div>
          
          <div className="contact-card">
            <h2>📧 Email</h2>
            <a href="mailto:joshuaagyekum21@gmail.com">joshuaagyekum21@gmail.com</a>
          </div>
          
          <div className="contact-card">
            <h2>📱 Phone</h2>
            <a href="tel:+4746399384">+47 463 99 384</a>
          </div>
          
          <div className="contact-card">
            <h2>💼 LinkedIn</h2>
            <a href="https://www.linkedin.com/in/joshua-agyekum/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/joshua-agyekum
            </a>
          </div>
          
          <div className="contact-card">
            <h2>💻 GitHub</h2>
            <a href="https://github.com/Kofijoo" target="_blank" rel="noopener noreferrer">
              github.com/Kofijoo
            </a>
          </div>
          
          <div className="contact-card">
            <h2>🏆 Credly</h2>
            <a href="https://www.credly.com/users/joshua-agyekum.7b55a7d0/badges" target="_blank" rel="noopener noreferrer">
              View Badges
            </a>
          </div>
          
          <div className="contact-card">
            <h2>📊 W3Profile</h2>
            <a href="https://www.w3profile.com/kofijoo/" target="_blank" rel="noopener noreferrer">
              w3profile.com/kofijoo
            </a>
          </div>
          
          <div className="contact-card">
            <h2>🌐 Languages</h2>
            <p>English (Fluent)</p>
            <p>Norwegian (B1)</p>
            <p>Mandarin (HSK 3)</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
