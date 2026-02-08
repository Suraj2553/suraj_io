import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { experience } from "../../portfolio";
import "./Experience.css";
import { Fade, Slide } from "react-reveal";

// Import company logo
import tcsLogo from "../../assets/images/tcs_logo.png";

function Experience(props) {
  const theme = props.theme;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("experience-card-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".experience-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="experience-main">
      <Header theme={theme} />

      <div className="basic-experience">
        <Fade bottom duration={1000} distance="40px">
          <div className="experience-header-section">
            <h1
              className="experience-heading-text"
              style={{ color: theme.text }}
            >
              Professional Experience
            </h1>
            <div
              className="experience-heading-underline"
              style={{ background: theme.accentColor }}
            ></div>
            <p
              className="experience-header-subtitle"
              style={{ color: theme.secondaryText }}
            >
              4+ years of experience in Python automation, Azure cloud services,
              and enterprise application development
            </p>
          </div>
        </Fade>

        <div className="experience-timeline">
          {experience.sections[0].experiences.map((exp, index) => (
            <div key={exp.title} className="timeline-row">
              {/* Left side - Logo and line */}
              <div className="timeline-left">
                <div className="company-logo-container">
                  <img
                    src={tcsLogo}
                    alt={exp.company}
                    className="company-logo"
                  />
                </div>
                {index !== experience.sections[0].experiences.length - 1 && (
                  <div
                    className="timeline-connector"
                    style={{ background: theme.accentColor }}
                  ></div>
                )}
              </div>

              {/* Right side - Card */}
              <div className="timeline-right">
                <Slide left duration={1000} delay={index * 200}>
                  <div
                    className="experience-card"
                    style={{
                      background:
                        theme.cardBackground || "rgba(255,255,255,0.05)",
                      boxShadow: `0 4px 20px ${
                        theme.shadowColor || "rgba(0,0,0,0.08)"
                      }`,
                    }}
                  >
                    {/* Card Header */}
                    <div className="experience-card-header">
                      <div className="experience-title-row">
                        <h3 style={{ color: theme.text }}>{exp.title}</h3>
                        <span
                          className="experience-date"
                          style={{ color: theme.secondaryText }}
                        >
                          {exp.duration}
                        </span>
                      </div>
                      <p
                        className="experience-company"
                        style={{ color: theme.accentColor }}
                      >
                        {exp.company}
                      </p>
                      <p
                        className="experience-location"
                        style={{ color: theme.secondaryText }}
                      >
                        📍 {exp.location}
                      </p>
                    </div>

                    {/* Card Body */}
                    <div className="experience-card-body">
                      {exp.descriptions ? (
                        <ul className="experience-descriptions">
                          {exp.descriptions.map((desc, i) => (
                            <li key={i} style={{ color: theme.secondaryText }}>
                              {desc}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p style={{ color: theme.secondaryText }}>
                          {exp.description}
                        </p>
                      )}

                      {/* Technologies */}
                      {exp.technologies && (
                        <div className="experience-technologies">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="tech-tag"
                              style={{
                                background: `${theme.accentColor}15`,
                                color: theme.accentColor,
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Slide>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}

export default Experience;
