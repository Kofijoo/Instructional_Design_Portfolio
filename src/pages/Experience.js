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
        "I build SCORM-compliant courses, educational games, and LMS-integrated experiences using Articulate Storyline, Adobe Captivate, and custom HTML5/JavaScript."
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
        "I've designed and delivered learning across Ghana, China, and Norway. I adapt tone, format, and context for different audiences — including multilingual and international teams."
    }
  ];

  const experiences = [
    {
      title: "ESL Teacher & Digital Content Developer",
      company: "First Talk Education",
      period: "Mar 2021 – Apr 2022",
      location: "Changxing County, Zhejiang, China · Hybrid",
      description:
        "Delivered English language instruction using the Jolly Phonics methodology and designed supporting digital learning content for young learners. Built an interactive 6-level educational game in HTML/CSS/JavaScript that ran on both open web and inside LMS platforms.",
      skills: [
        "Content development",
        "Learner engagement",
        "HTML/CSS/JavaScript",
        "LMS integration",
        "Phonics-based instruction",
        "Learning materials design"
      ]
    },
    {
      title: "ESL Teacher & STEM Learning Contributor",
      company: "Alo7",
      period: "Jan 2020 – Feb 2021",
      location: "Ningbo, Zhejiang, China · Hybrid",
      description:
        "Delivered live online English and STEM lessons via virtual classroom platforms to young learners. Contributed to the development of interactive STEM learning modules and the Little Explorers educational platform alongside the instructional design team.",
      skills: [
        "Live online facilitation",
        "STEM learning design",
        "Virtual classroom platforms",
        "Interactive content",
        "Digital learning",
        "Learner-centered delivery"
      ]
    },
    {
      title: "Visual Arts Tutor",
      company: "Brainhill International School",
      period: "Aug 2018 – Oct 2019",
      location: "East Legon, Accra, Ghana · On-site",
      description:
        "Taught creative design principles and visual arts to primary pupils through project-based learning. Developed lesson plans that integrated art fundamentals with digital design concepts. Awarded Best Teacher (Q2 2019).",
      skills: [
        "Facilitation",
        "Project-based learning",
        "Lesson planning",
        "Creative instruction",
        "Learner engagement",
        "Visual communication"
      ]
    },
    {
      title: "Instructional Support Specialist",
      company: "Kaneshie Awudome JHS",
      period: "Sep 2018 – Oct 2019",
      location: "Accra, Ghana · On-site",
      description:
        "Supported classroom instruction and learning design activities. Assisted in developing visual learning materials and managing educational resources to improve learner engagement and lesson clarity.",
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
        "Facilitated STEM learning for primary students using creative and visual teaching approaches. Designed activities that combined mathematical concepts with artistic expression to build engagement and confidence.",
      skills: [
        "Facilitation",
        "STEM learning activities",
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
          Roles spanning instructional design, digital content development, and learning facilitation across
          Ghana, China, and Norway — with a consistent focus on learner engagement and practical outcomes.
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
