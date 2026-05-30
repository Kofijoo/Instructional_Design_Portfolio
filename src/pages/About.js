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
          <p className="subtitle">Instructional Designer and Education Development Specialist</p>

          <p className="bio">
            I design learning experiences that are interactive, standards-compliant, and built to last.
            With a First Class BSc and two Master's degrees in Educational Technology and International
            Relations, I bring both the theoretical grounding and the practical toolkit to create learning
            that actually works.
          </p>

          <p className="bio">
            My research background sits at the intersection of education policy and learning design.
            My MSc thesis at NMBU examined children's rights to voice and participation in primary
            education decision-making in Ghana. My earlier research compared STEAM education systems
            between China and Ghana. I have published peer-reviewed articles on STEAM education and
            classroom management.
          </p>

          <p className="bio">
            I build things. Eco Explorers is a 6-level SCORM 1.2-compliant learning game with xAPI
            tracking. Quest of the Sky Coders is an AI-adaptive platform for young learners.
            EduAnalytics Pro uses machine learning to surface predictive insights from course data.
            These are deployed, working projects.
          </p>

          <p className="bio">
            I am based in Oslo with a permanent Norwegian residence permit and work authorization
            across the EEA. I am fluent in English, proficient in Norwegian at B1 level with a
            Norskbevis certificate, and certified in Mandarin at HSK 3 level, an asset when working
            in multilingual or international teams.
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
