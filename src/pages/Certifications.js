import React from 'react';

function Certifications() {
  const certifications = [
    { name: "JavaScript Developer", issuer: "W3Schools", date: "Sep 2025" },
    { name: "Aha! Product Management Professional", issuer: "Aha!", date: "Jul 2025" },
    { name: "Norwegian Language Proficiency B1", issuer: "Kompetanse Norge", date: "2024" },
    { name: "TEFL Certificate", issuer: "TEFL Professional", date: "2023", grade: "High Distinction" },
    { name: "AWS Cloud Essentials", issuer: "Amazon Web Services", date: "2024" },
    { name: "Power BI Essential Training", issuer: "LinkedIn Learning", date: "2024" },
    { name: "Python Developer", issuer: "W3Schools", date: "2024" },
    { name: "Data Scientist", issuer: "W3Schools", date: "2024" },
    { name: "SQL Developer", issuer: "W3Schools", date: "2024" },
    { name: "Backend Developer", issuer: "W3Schools", date: "2024" }
  ];

  return (
    <section className="page-section">
      <div className="page-container">
        <h1 className="page-title">Professional Certifications</h1>
        <p className="page-intro">
          Continuous learning and professional development through industry-recognized certifications.
        </p>
        
        <div className="certifications-list">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-item">
              <h3>{cert.name}</h3>
              <p>{cert.issuer} {cert.date && `| ${cert.date}`}</p>
              {cert.grade && <span className="cert-badge">{cert.grade}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
