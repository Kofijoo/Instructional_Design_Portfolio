import React from 'react';

function Recommendations() {
  const recommendations = [
    {
      name: "Liu Shiqing",
      title: "Senior Data Lead",
      company: "ALO7 Education",
      text: "Joshua delivered a forecasting model in Excel that cut our manual reporting time by over 70%. His Tableau dashboards helped us uncover hidden pricing trends across 80+ Airbnb variables, directly supporting our curriculum design on data storytelling. He's one of the few interns who delivered both technical precision and business relevance."
    },
    {
      name: "Melanie Sommerville",
      title: "Head of Data Science",
      company: "JOMACS Tech Academy",
      text: "Joshua built a full-stack CRM tracking system with React and PostgreSQL that included dynamic forecasting using Python. His Power BI dashboards visualized over 25 workforce metrics, helping our HR team prioritize hiring strategies across regions. His work brought structure and intelligence to areas we previously managed manually."
    }
  ];

  return (
    <section className="page-section">
      <div className="page-container">
        <h1 className="page-title">Professional Recommendations</h1>
        <p className="page-intro">
          Testimonials from colleagues and supervisors I've had the privilege to work with.
        </p>
        <div className="recommendations-grid">
          {recommendations.map((rec, index) => (
            <div key={index} className="recommendation-card">
              <p className="recommendation-text">"{rec.text}"</p>
              <div className="recommendation-author">
                <h3>{rec.name}</h3>
                <p>{rec.title}</p>
                <p className="company">{rec.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Recommendations;
