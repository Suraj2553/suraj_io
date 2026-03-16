import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { projectsHeader, projects } from "../../portfolio";
import "./Projects.css";
import { Fade, Slide } from "react-reveal";

function Projects(props) {
  const theme = props.theme;
  const accentColor = theme.accentColor || theme.imageHighlight || theme.text;

  return (
    <div className="projects-main">
      <Header theme={theme} />

      <div className="basic-projects">
        <Fade bottom duration={1000} distance="40px">
          <div className="projects-header-section">
            <h1 className="projects-heading-text" style={{ color: theme.text }}>
              {projectsHeader.title}
            </h1>
            <div
              className="projects-heading-underline"
              style={{ background: accentColor }}
            ></div>
            <p
              className="projects-header-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {projectsHeader.description}
            </p>
          </div>
        </Fade>

        <div className="projects-cards-grid">
          {projects.data.map((project, index) => (
            <Slide
              bottom
              duration={1000}
              delay={index * 200}
              key={project.name}
            >
              <div
                className="project-card"
                style={{
                  background: theme.cardBackground || "rgba(255,255,255,0.05)",
                  boxShadow: `0 4px 20px ${
                    theme.shadowColor || "rgba(0,0,0,0.08)"
                  }`,
                  borderTop: `3px solid ${accentColor}`,
                }}
              >
                {/* Category badge */}
                <div className="project-card-top">
                  <span
                    className="project-category"
                    style={{
                      background: `${accentColor}18`,
                      color: accentColor,
                    }}
                  >
                    {project.category}
                  </span>
                  {project.isPublic ? (
                    <span className="project-visibility public">Public</span>
                  ) : (
                    <span className="project-visibility private">Private</span>
                  )}
                </div>

                {/* Title */}
                <h3 className="project-name" style={{ color: theme.text }}>
                  {project.name}
                </h3>

                {/* Description */}
                <p
                  className="project-description"
                  style={{ color: theme.secondaryText }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="project-tag"
                      style={{
                        background: `${accentColor}12`,
                        color: accentColor,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="project-card-footer">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-github-link"
                      style={{ color: accentColor }}
                    >
                      <i className="fab fa-github"></i> View on GitHub
                    </a>
                  ) : (
                    <span
                      className="project-private-note"
                      style={{ color: theme.secondaryText }}
                    >
                      <i className="fas fa-lock"></i> Private Repository
                    </span>
                  )}
                </div>
              </div>
            </Slide>
          ))}
        </div>

        <Fade bottom duration={1000} distance="40px">
          <div className="projects-github-cta">
            <p style={{ color: theme.secondaryText }}>
              More projects and contributions on GitHub
            </p>
            <a
              href="https://github.com/Suraj2553"
              target="_blank"
              rel="noopener noreferrer"
              className="github-profile-btn"
              style={{
                background: accentColor,
                color: "#fff",
              }}
            >
              <i className="fab fa-github"></i> View GitHub Profile
            </a>
          </div>
        </Fade>
      </div>

      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}

export default Projects;
