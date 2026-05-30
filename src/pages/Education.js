import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';

function Education() {
  const education = [
    {
      degree: "Master of Science (International Relations)",
      institution: "Norwegian University of Life Sciences (NMBU), Norway",
      period: "2022–2024",
      grade: "Distinction",
      highlights: [
        "Thesis: Children's Rights to a Voice and Participation in Primary Education Decision-Making in Ghana (30 ECTS)",
        "Coursework: International Organizations, Research Methods, Global Political Economy, Climate Change and Society, Development Thinking",
        "Research focus: education governance, child participation rights, and policy analysis in the Ghanaian context"
      ],
      verificationLabel: "Verify Credential",
      link: "https://app.vitnemalsportalen.no/vp/shared/CB4FE2E65C384FFD9D37D41C780F362A"
    },
    {
      degree: "Master of Science (Educational Technology)",
      institution: "Huzhou University, China",
      period: "2019–2022",
      highlights: [
        "Thesis: A Comparative Study on STEAM Education Between China and Ghana: A Case Study of Zhejiang Province and Accra Metropolis",
        "Zhejiang Provincial Scholarship Type A recipient",
        "Focus areas: digital learning design, LMS administration, content development, and educational research",
        "Published three peer-reviewed articles on STEAM education, classroom management, and science pedagogy during this period"
      ],
      verificationLabel: "Verify Degree",
      link: "https://www.chsi.com.cn/xlrz/bgcx.jsp?v=12846877-223-F82B0102",
      recognition: {
        label: "Recognised by HK-dir",
        detail: "Equivalent to a Norwegian 2-year Master's degree (120 ECTS), plus 1 additional year of master's-level education."
      }
    },
    {
      degree: "Bachelor of Science (Educational Technology)",
      institution: "University of Education, Winneba, Ghana",
      period: "2014–2018",
      grade: "First Class Honours, GPA 3.69",
      highlights: [
        "Thesis: Using Manipulative Tools to Aid Primary 2 Pupils of Osubonpanyin/Ateitu Municipal Assembly School at Winneba in Overcoming the Problem of Adding Two-Digit Numbers",
        "Dean's Award of Excellence (2015)",
        "Foundation in instructional design principles, learning facilitation, and educational research methods"
      ],
      recognition: {
        label: "Recognised by HK-dir",
        detail: "Equivalent to a Norwegian Bachelor's degree (180 ECTS) and aligned with Norway's academic requirements for teaching-related roles."
      }
    }
  ];

  return (
    <section className="page-section">
      <AnimatedBackground />
      <div className="page-container">
        <h1 className="page-title">Education</h1>
        <p className="page-intro">
          Three degrees, three research projects, all asking the same question from different angles:
          how do children and adults in diverse contexts access quality learning, and what tools and
          rights support that process.
        </p>

        <div className="cards-grid">
          {education.map((edu, index) => (
            <div key={index} className="info-card">
              <h3>{edu.degree}</h3>
              <p className="card-institution">{edu.institution}</p>
              <p className="card-period">{edu.period}</p>
              {edu.grade && <p className="card-grade">{edu.grade}</p>}

              {edu.highlights && (
                <ul className="card-description" style={{ marginTop: '0.75rem' }}>
                  {edu.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {edu.recognition && (
                <div style={{ marginTop: '0.9rem' }}>
                  <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{edu.recognition.label}</p>
                  <p className="card-description" style={{ marginTop: 0 }}>{edu.recognition.detail}</p>
                </div>
              )}

              {edu.link && (
                <p style={{ marginTop: '1rem' }}>
                  <a
                    href={edu.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="article-link"
                  >
                    {edu.verificationLabel || "Verify Credential"}
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="section-block" style={{ marginTop: '2rem' }}>
          <p className="page-intro" style={{ marginBottom: 0 }}>
            HK-dir recognition documents and supporting certificates are available upon request.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
