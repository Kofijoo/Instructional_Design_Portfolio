import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';

function Experience() {
  const alignmentHighlights = [
    {
      title: "Learner-centered design",
      description:
        "I design with the learner's context in mind — clear language, accessible structure, and content that respects different backgrounds, roles, and learning needs."
    },
    {
      title: "Interactive content development",
      description:
        "I build SCORM-compliant courses, educational games, and LMS-integrated experiences using custom HTML5/JavaScript and web-based authoring approaches."
    },
    {
      title: "Change enablement",
      description:
        "I create learning interventions that help people adopt new tools, processes, and ways of working — reducing confusion and building confidence during transitions."
    },
    {
      title: "Data-informed improvement",
      description:
        "I use xAPI tracking, LMS analytics, and tools like Power BI to measure what's working and iterate. Learning that can't be measured can't be improved."
    },
    {
      title: "Cross-cultural facilitation",
      description:
        "I've worked across educational and professional contexts in Ghana and Norway, with academic study in China. I adapt content, tone, and structure for different audiences and cultural settings."
    }
  ];

  const experiences = [
    {
      title: "Substitute Kindergarten Assistant (Assistent)",
      company: "Brobyggere",
      period: "Jun–Dec 2025",
      location: "Oslo, Norway · On-site",
      description:
        "Supported children aged 0–6 with daily routines, play-based learning, care, and outdoor activities in a Norwegian barnehage setting. Worked in a fully Norwegian-language team alongside qualified pedagogues, serving families from diverse cultural backgrounds. Applied Assistentprøven training in a live practice environment.",
      skills: [
        "Norwegian language (professional context)",
        "Play-based learning",
        "Child development support",
        "Cross-cultural communication",
        "Team collaboration",
        "Inclusive practice"
      ]
    },
    {
      title: "Grocery Associate",
      company: "Wolt",
      period: "Jul 2024 – Present",
      location: "Oslo, Norway · On-site · Part-time",
      description:
        "Part-time role supporting daily grocery operations at Wolt in Oslo, running alongside my instructional design portfolio and development work. Responsibilities include inventory management, order fulfilment, quality control, and customer service in a fast-paced Norwegian retail environment.",
      skills: [
        "Norwegian language (daily operations)",
        "Inventory management",
        "Order fulfilment",
        "Quality control",
        "Customer service",
        "Team collaboration"
      ]
    },
    {
      title: "General Secretary (Elected)",
      company: "National Service Personnel Association (NASPA), Ga South",
      period: "2018–2019",
      location: "Ga South, Ghana · On-site",
      description:
        "Elected General Secretary during Ghana's mandatory National Service year post-graduation. Coordinated professional development activities and individual follow-up for national service personnel across public and private sector placements. Managed documentation and stakeholder communication across multiple government bodies and institutions.",
      skills: [
        "Stakeholder coordination",
        "Documentation",
        "Communication",
        "Organisation",
        "Leadership",
        "Independent initiative"
      ]
    },
    {
      title: "Primary School Teacher",
      company: "Brainhill International School",
      period: "Apr 2017 – Mar 2019",
      location: "Accra, Ghana · On-site",
      description:
        "Taught primary school pupils, initially part-time during university academic holidays and then as a full-time position following graduation. Designed and delivered lessons across subjects, managed the classroom, and adapted teaching approaches to different learning needs and backgrounds.",
      skills: [
        "Classroom management",
        "Lesson planning",
        "Learner engagement",
        "Differentiated instruction",
        "Communication",
        "Team collaboration"
      ]
    },
    {
      title: "Instructional Support Specialist",
      company: "Kaneshie Awudome JHS",
      period: "Sep 2018 – Aug 2019",
      location: "Accra, Ghana · On-site",
      description:
        "Supported classroom instruction and learning design activities during Ghana's National Service year. Assisted in developing visual learning materials and managing educational resources to improve learner engagement and lesson clarity.",
      skills: [
        "Learning support",
        "Resource development",
        "Learner engagement",
        "Classroom collaboration",
        "Communication",
        "Organization"
      ]
    },
    {
      title: "Creative Learning Facilitator",
      company: "Global Access Academy",
      period: "Oct 2013 – Nov 2014",
      location: "Accra, Ghana · On-site",
      description:
        "Facilitated learning for primary students using creative and visual teaching approaches. Designed activities that combined conceptual learning with practical engagement to build confidence and motivation.",
      skills: [
        "Facilitation",
        "Creative instruction",
        "Learner motivation",
        "Inclusive approach",
        "Session planning"
      ]
    }
  ];

  return (
    <section className="page-section">
      <AnimatedBackground />
      <div className="page-container">
        <h1 className="page-title">Experience</h1>
        <p className="page-intro">
          Roles spanning teaching, instructional design, digital content development, and learning
          facilitation across Ghana and Norway — with a consistent focus on learner engagement
          and practical outcomes.
        </p>

        <div className="section-block">
          <h2 className="section-divider">What I bring to L&D roles</h2>
          <p className="page-intro" style={{ marginTop: 0 }}>
            The themes below reflect where I do my best work — learner-centered design, interactive content,
            change enablement, analytics-driven improvement, and cross-cultural facilitation.
          </p>

          <div className="projects-grid">
            {alignmentHighlights.map((item, idx) => (
              <div key={idx} className="project-card">
                <h2>{item.title}</h2>
                <p className="project-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <h2>{exp.title}</h2>
                <h3>{exp.company}</h3>
                <p className="timeline-period">{exp.period}</p>
                <p className="timeline-location">{exp.location}</p>
                <p className="timeline-description">{exp.description}</p>

                <div className="timeline-skills">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
