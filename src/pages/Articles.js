import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';

function Articles() {
  const publications = [
    {
      title: "Rationale of the Essence of Innovative STEAM Education Model towards Effective Teaching Practices",
      journal: "International Journal of Management Sciences and Business Research (IJMSBR)",
      year: "April 2021, Volume 10, Issue 4",
      authors: "Joshua Agyekum",
      link: "https://www.ijmsbr.com/publications-of-ijmsbr/article/1728/#abstract"
    },
    {
      title: "Research on the Influence of Linking Natural Science Conceptions to Real Life Situations to Basic School Students in Winneba; A Case of Central Region of Ghana",
      journal: "International Journal of Management Sciences and Business Research (IJMSBR)",
      year: "April 2021, Volume 10, Issue 4",
      authors: "Joshua Agyekum and Bonah Emmanuel Obeng",
      link: "https://www.ijmsbr.com/publications-of-ijmsbr/article/1737/#abstract"
    },
    {
      title: "Impact of Efficiency of Classroom Management on Reducing High School Students Level of Stress in the Kumasi Metropolis in Ghana",
      journal: "International Journal of Management Sciences and Business Research (IJMSBR)",
      year: "February 2021, Volume 10, Issue 2",
      authors: "Bonah Emmanuel Obeng, Wang Yanhong, and Joshua Agyekum",
      link: "https://www.ijmsbr.com/publications-of-ijmsbr/article/1680/#abstract"
    }
  ];

  return (
    <section className="page-section">
      <AnimatedBackground />
      <div className="page-container">
        <h1 className="page-title">Articles & Insights</h1>
        <p className="page-intro">
          Peer-reviewed research published while at Huzhou University, China. All three articles appear in the
          International Journal of Management Sciences and Business Research (ISSN 2226-8235).
        </p>

        <div className="section-block">
          <div className="articles-grid">
            {publications.map((pub, index) => (
              <div key={index} className="article-card">
                <h2>{pub.title}</h2>
                <p className="article-date">{pub.journal} | {pub.year}</p>
                <p className="article-excerpt">
                  <strong>Authors:</strong> {pub.authors}
                </p>
                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="article-link">
                  Read Publication →
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="linkedin-cta">
          <p>Interested in more writing and reflections on learning and development?</p>
          <a
            href="https://www.linkedin.com/in/joshua-agyekum/recent-activity/all/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            View All Articles on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Articles;
