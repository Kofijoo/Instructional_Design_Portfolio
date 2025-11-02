import React from 'react';

function Articles() {
  const articles = [
    {
      title: "Quick share from today's work as an Instructional Designer",
      date: "1 week ago",
      excerpt: "I had to give a short talk on the Successive Approximation Model (SAM) in Instructional Design, so I designed a concise, visually structured PowerPoint presentation using the Section Zoom feature and some animations.",
      link: "https://www.linkedin.com/in/joshua-agyekum/",
      tags: ["InstructionalDesign", "SAM", "LearningDesign", "PowerPoint", "EdTech"]
    },
    {
      title: "W3Schools JavaScript Certification Achievement",
      date: "1 month ago",
      excerpt: "Proud to share that I've officially completed the W3Schools JavaScript Certification and earned the title of Certified JavaScript Developer! After weeks of dedication, completing 206/206 lessons and 267/267 exercises.",
      link: "https://www.linkedin.com/in/joshua-agyekum/",
      tags: ["JavaScript", "Certification", "WebDevelopment", "ContinuousLearning"]
    }
  ];

  return (
    <section className="page-section">
      <div className="page-container">
        <h1 className="page-title">LinkedIn Articles & Posts</h1>
        <p className="page-intro">
          Sharing insights on instructional design, educational technology, and professional development.
        </p>
        <div className="articles-grid">
          {articles.map((article, index) => (
            <div key={index} className="article-card">
              <h2>{article.title}</h2>
              <p className="article-date">{article.date}</p>
              <p className="article-excerpt">{article.excerpt}</p>
              <div className="article-tags">
                {article.tags.map((tag, i) => (
                  <span key={i} className="tag">#{tag}</span>
                ))}
              </div>
              <a href={article.link} target="_blank" rel="noopener noreferrer" className="article-link">
                Read on LinkedIn →
              </a>
            </div>
          ))}
        </div>
        <div className="linkedin-cta">
          <p>Follow me on LinkedIn for more insights and updates</p>
          <a href="https://www.linkedin.com/in/joshua-agyekum/" target="_blank" rel="noopener noreferrer" className="cta-button">
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Articles;
