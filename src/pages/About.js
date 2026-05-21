import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';

function About() {
  return (
    <section className="about-hero">
      <AnimatedBackground />
      <div className="about-container">
        <div className="about-photo">
          <img
            src={`${process.env.PUBLIC_URL}/images/profile_photo.png`}
            alt="Joshua Agyekum - Instructional Designer"
          />
        </div>
        <div className="about-content">
          <h1>Joshua Agyekum</h1>
          <p className="subtitle">Instructional Designer & E-Learning Developer</p>

          <p className="bio">
            I design learning experiences that are interactive, standards-compliant, and built to last. With a First Class BSc and two Master's degrees in Educational Technology and International Relations, I bring both the theoretical grounding and the practical toolkit to create courses that actually work — from SCORM-compliant games to LMS-integrated platforms.
          </p>

          <p className="bio">
            My work spans three continents. I've designed and delivered digital learning in Ghana, China, and Norway, adapting content for diverse learners across cultures and contexts. That international experience shapes how I think about accessibility, localization, and learner engagement.
          </p>

          <p className="bio">
            I build things. Eco Explorers is a 6-level SCORM 1.2-compliant learning game with xAPI tracking. Quest of the Sky Coders is an AI-adaptive platform for young learners. EduAnalytics Pro uses machine learning to surface predictive insights from course data. These aren't mockups — they're deployed, working projects.
          </p>

          <p className="bio">
            I'm based in Oslo with a permanent Norwegian residence permit and work authorization across the EEA. I'm fluent in English, proficient in Norwegian (B1), and certified in Mandarin (HSK 3) — an asset when working in multilingual or global teams.
          </p>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/joshua-agyekum/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/Kofijoo" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.credly.com/users/joshua-agyekum.7b55a7d0/badges#credly" target="_blank" rel="noopener noreferrer">Credly</a>
            <a href="https://www.w3profile.com/kofijoo/" target="_blank" rel="noopener noreferrer">W3Profile</a>
            <a href="mailto:joshuaagyekum21@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
