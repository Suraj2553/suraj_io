import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { projectsHeader, projects } from "../../portfolio";
import "./Projects.css";
import { Fade, Slide } from "react-reveal";

const JARVIS_STATS = [
  { label: "LLM Providers", value: "6-way" },
  { label: "Callable Tools", value: "50+" },
  { label: "Voice Personas", value: "Dual" },
  { label: "HUD FPS", value: "60" },
];

function FeaturedCard({ project, accentColor, theme }) {
  return (
    <Fade bottom duration={900} distance="50px">
      <div className="project-card-featured">
        <div className="featured-glow-ring" />
        <div className="featured-inner">
          <div className="featured-header-row">
            <div className="featured-badges">
              <span className="featured-badge-star">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Featured Project
              </span>
              <span
                className="project-category featured-category"
                style={{ background: `${accentColor}22`, color: accentColor }}
              >
                {project.category}
              </span>
              <span className="project-visibility public">Public</span>
            </div>
            <div className="featured-hud-dots">
              <span />
              <span />
              <span />
            </div>
          </div>

          <h2 className="featured-title">{project.name}</h2>

          <div className="featured-stats-row">
            {JARVIS_STATS.map((s) => (
              <div className="featured-stat" key={s.label}>
                <span
                  className="featured-stat-value"
                  style={{ color: accentColor }}
                >
                  {s.value}
                </span>
                <span className="featured-stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          <p
            className="project-description featured-desc"
            style={{ color: theme.secondaryText }}
          >
            {project.description}
          </p>

          <div className="project-tags featured-tags">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="project-tag"
                style={{ background: `${accentColor}14`, color: accentColor }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="project-card-footer featured-footer">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="featured-github-btn"
              style={{ background: accentColor }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View on GitHub
            </a>
            <span className="featured-repo-hint">
              Iron Man HUD • Voice AI • Windows
            </span>
          </div>
        </div>
      </div>
    </Fade>
  );
}

function Projects(props) {
  const theme = props.theme;
  const accentColor = theme.accentColor || theme.imageHighlight || theme.text;

  const featuredProjects = projects.data.filter((p) => p.featured);
  const regularProjects = projects.data.filter((p) => !p.featured);

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
            />
            <p
              className="projects-header-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {projectsHeader.description}
            </p>
          </div>
        </Fade>

        {featuredProjects.map((project) => (
          <FeaturedCard
            key={project.name}
            project={project}
            accentColor={accentColor}
            theme={theme}
          />
        ))}

        {regularProjects.length > 0 && (
          <div className="projects-cards-grid">
            {regularProjects.map((project, index) => (
              <Slide
                bottom
                duration={1000}
                delay={index * 200}
                key={project.name}
              >
                <div
                  className="project-card"
                  style={{
                    background:
                      theme.cardBackground || "rgba(255,255,255,0.05)",
                    boxShadow: `0 4px 20px ${
                      theme.shadowColor || "rgba(0,0,0,0.08)"
                    }`,
                    borderTop: `3px solid ${accentColor}`,
                  }}
                >
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
                      <span className="project-visibility private">
                        Private
                      </span>
                    )}
                  </div>

                  <h3 className="project-name" style={{ color: theme.text }}>
                    {project.name}
                  </h3>

                  <p
                    className="project-description"
                    style={{ color: theme.secondaryText }}
                  >
                    {project.description}
                  </p>

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
        )}

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
              style={{ background: accentColor, color: "#fff" }}
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
