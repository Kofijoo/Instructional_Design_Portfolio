import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';

function Projects() {
  const featuredPresentations = [
    {
      title: "My L&D Approach",
      subtitle: "How I support learning and performance",
      description:
        "My approach to Learning & Development is people-centered and business-aligned. I partner with stakeholders to understand what success looks like, design practical learning journeys, and improve them using feedback and simple measurement.",
      thumbnail: `${process.env.PUBLIC_URL}/images/about_me.png`,
      link: "https://drive.google.com/file/d/1nYpSAgVi1EGzBbEkc5NXgHoWfe0m-czX/view?usp=drive_link"
    },
    {
      title: "How I Design Learning",
      subtitle: "From needs to rollout",
      description:
        "A clear look at how I approach L&D work: clarifying needs, defining outcomes, designing the learner experience, building supporting resources, and improving based on feedback and results.",
      thumbnail: `${process.env.PUBLIC_URL}/images/design_process.png`,
      link: "https://docs.google.com/document/d/1AzLWzjY8aQqasep5bVywRDtWqOG1aNDC38AEN-9LQSQ/edit?usp=drive_link"
    },
    {
      title: "Eco Explorers",
      subtitle: "Interactive learning sample",
      description:
        "A short interactive learning experience designed to keep learners engaged while practicing key concepts. Built to be accessible and easy to use, and designed for delivery through an LMS when needed.",
      thumbnail: `${process.env.PUBLIC_URL}/images/eco_explorers.png`,
      link: "https://kofijoo.github.io/scorm-testing/"
    },
    {
      title: "Legal Writing 101",
      subtitle: "Scenario-based training experience",
      description:
        "A scenario-based learning experience that guides learners through realistic situations and practice. Includes clear guidance, interactive activities, and a structured flow from introduction to completion.",
      thumbnail: `${process.env.PUBLIC_URL}/images/jus.png`,
      link: "https://kofijoo.github.io/legal-writing-101-simulation/"
    },
    {
      title: "Quest of the Sky Coders",
      subtitle: "Adaptive practice experience",
      description:
        "A practice-focused learning experience designed to adjust to learner progress and keep motivation high. Includes built-in feedback, progression, and a simple way to review learner activity and progress.",
      thumbnail: `${process.env.PUBLIC_URL}/images/learning_island.png`,
      link: "https://kofijoo.github.io/kid_game.github.io/"
    },
    {
      title: "Selling with Clarity",
      subtitle: "Sales enablement learning journey",
      description:
        "A guided learning journey built to strengthen product confidence, customer conversations, and handling objections. Uses realistic scenarios and practice activities to help learners apply skills on the job.",
      thumbnail: `${process.env.PUBLIC_URL}/images/sales.png`,
      link: "https://kofijoo.github.io/Selling_with_Clarity/"
    },
    {
      title: "SAM (Rapid Iteration) Overview",
      subtitle: "Practical design mindset",
      description:
        "A short presentation showing how I work in quick cycles: build, test, improve. This helps teams move faster while keeping learning clear, useful, and learner-friendly.",
      thumbnail: `${process.env.PUBLIC_URL}/images/sam.png`,
      link: "https://www.linkedin.com/posts/joshua-agyekum_instructionaldesign-sam-learningdesign-activity-7387115178187796480-g3N1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1UrkMByre9dMYUS_VYuSFrlo0ojG-wJhc"
    },
    {
      title: "Learning Insights Dashboard",
      subtitle: "Tracking engagement and progress",
      description:
        "A sample dashboard concept for understanding engagement and learning progress. Built to support decisions like where learners struggle, what's improving, and where extra support may be needed.",
      thumbnail: `${process.env.PUBLIC_URL}/images/EduAnalytics.png`,
      link: "https://eduanalytics-pro-garcy4kzhdd9nhuy3ffvgr.streamlit.app/"
    }
  ];

  const projects = [
    {
      title: "Eco Explorers — SCORM Learning Game",
      organization: "Self-initiated portfolio project",
      period: "2024",
      description:
        "Designed and built a 6-level interactive learning game compliant with SCORM 1.2 and xAPI. The goal was to create an experience that could slot into any LMS without modification while keeping young learners engaged through progression and immediate feedback.",
      highlights: [
        "Full SCORM 1.2 and xAPI implementation with completion tracking",
        "6 progressive levels with branching feedback",
        "Deployable in Moodle, Canvas, and other SCORM-compliant LMS platforms",
        "Built with vanilla HTML5, CSS3, and JavaScript — no authoring tool dependency"
      ]
    },
    {
      title: "Legal Writing 101 — Scenario-Based Simulation",
      organization: "Self-initiated portfolio project",
      period: "2024–2025",
      description:
        "Designed a scenario-based training experience that walks learners through realistic legal writing situations. Focused on decision-making practice rather than passive content consumption, with structured feedback at each choice point.",
      highlights: [
        "Scenario-based structure following the ADDIE model",
        "Branching decisions with contextual feedback",
        "Accessible design — readable on mobile and desktop",
        "Demonstrates application of content to real-world situations"
      ]
    },
    {
      title: "Quest of the Sky Coders — Adaptive Learning Platform",
      organization: "Self-initiated portfolio project",
      period: "2023–2024",
      description:
        "Built an adaptive learning game for learners aged 9–11 that adjusts difficulty and content based on performance. Designed multiple learning islands, each targeting a different skill, with real-time progress monitoring built in.",
      highlights: [
        "Adaptive difficulty based on learner responses",
        "Multiple learning islands with distinct skill targets",
        "Real-time progress monitoring for facilitators",
        "Designed to run inside LMS platforms or standalone"
      ]
    },
    {
      title: "EduAnalytics Pro — Learning Analytics Dashboard",
      organization: "Self-initiated portfolio project",
      period: "2024–2025",
      description:
        "Built a machine learning–powered dashboard in Python/Streamlit for analysing course engagement and predicting learner drop-off. Designed to give L&D teams actionable data without needing a data analyst on the team.",
      highlights: [
        "Predictive analytics for learner drop-off risk",
        "Engagement and completion visualisations",
        "Built with Python, Streamlit, and Power BI concepts",
        "Deployed as a live app — viewable by anyone without setup"
      ]
    },
    {
      title: "Phonics Learning Content — First Talk Education",
      organization: "First Talk Education",
      period: "Mar 2021 – Apr 2022",
      description:
        "As part of an ESL teaching role, designed and built digital learning content supporting the Jolly Phonics methodology. Created an interactive HTML/CSS/JavaScript game to reinforce phonics skills — deployable inside the school's LMS.",
      highlights: [
        "Interactive 6-level phonics game in HTML/CSS/JavaScript",
        "Runs inside LMS or as a standalone web app",
        "Designed for young learners — simple navigation, clear feedback",
        "Supplemented classroom instruction with self-paced digital practice"
      ]
    }
  ];

  return (
    <section className="page-section">
      <AnimatedBackground />
      <div className="page-container">
        <h1 className="page-title">Programs & Work Samples</h1>
        <p className="page-intro">
          A selection of learning programs, enablement experiences, and digital training samples built to support
          engagement, skills practice, and real-world application.
        </p>

        {featuredPresentations.map((presentation, index) => (
          <div key={index} className="featured-presentation">
            <div className="presentation-thumbnail">
              <img src={presentation.thumbnail} alt={presentation.title} />
            </div>
            <div className="presentation-content">
              <h2>{presentation.title}</h2>
              <p className="presentation-subtitle">{presentation.subtitle}</p>
              <p className="presentation-description">{presentation.description}</p>
              <a
                href={presentation.link}
                target="_blank"
                rel="noopener noreferrer"
                className="presentation-button"
              >
                View Sample →
              </a>
            </div>
          </div>
        ))}

        <h2 className="section-divider">Selected Case Studies</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h2>{project.title}</h2>
              <p className="project-meta">{project.organization} | {project.period}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-metrics">
                <h3>What I built / delivered:</h3>
                <ul>
                  {project.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
