import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { degrees, certifications } from "../../portfolio";
import "./EducationComponent.css";
import { Fade, Slide } from "react-reveal";

// Direct imports for logos
import jisLogo from "../../assets/images/jis_logo.png";
import azureLogo from "../../assets/images/azure_logo.png";
import kafkaLogo from "../../assets/images/kafka_logo.png";
import genaiLogo from "../../assets/images/gen_ai_logo.png";

// Map logos to certification titles
const certLogos = {
  "Microsoft Azure Fundamentals (AZ-900)": azureLogo,
  "Confluent Developer – Apache Kafka": kafkaLogo,
  "Gen AI E2 Certification": genaiLogo,
};

// Map certification colors
const certColors = {
  "Microsoft Azure Fundamentals (AZ-900)": "#0078D4",
  "Confluent Developer – Apache Kafka": "#231F20",
  "Gen AI E2 Certification": "#4285F4",
};

function Education(props) {
  const theme = props.theme;

  // Fallback colors if theme properties don't exist
  const accentColor = theme.accentColor || theme.primaryColor || theme.text;
  const secondaryColor =
    theme.secondaryColor || theme.primaryColor || theme.text;

  return (
    <div className="education-main">
      <Header theme={theme} />

      <div className="basic-education">
        <Fade bottom duration={1000} distance="40px">
          <div className="education-header-section">
            <h1
              className="education-heading-text"
              style={{ color: theme.text }}
            >
              Education
            </h1>
            <div
              className="education-heading-underline"
              style={{ background: accentColor }}
            ></div>
          </div>
        </Fade>

        <div className="education-degrees-grid">
          {degrees.degrees.map((degree, index) => (
            <Slide left duration={1000} delay={index * 200} key={degree.title}>
              <div
                className="education-card"
                style={{
                  borderLeft: `4px solid ${accentColor}`,
                  background: theme.cardBackground || "rgba(255,255,255,0.05)",
                  boxShadow: `0 4px 20px ${
                    theme.shadowColor || "rgba(0,0,0,0.1)"
                  }`,
                }}
              >
                <div className="education-card-header">
                  {/* Grad cap icon on left */}
                  <div
                    className="education-icon"
                    style={{
                      background: `${accentColor}20`,
                      color: accentColor,
                    }}
                  >
                    🎓
                  </div>

                  <div className="education-title-group">
                    <h3 style={{ color: theme.text }}>{degree.title}</h3>
                    <p
                      className="education-subtitle"
                      style={{ color: theme.secondaryText }}
                    >
                      {degree.subtitle}
                    </p>
                  </div>

                  {/* College logo on right */}
                  {degree.logo_path && (
                    <img
                      src={jisLogo}
                      alt={degree.alt_name || degree.title}
                      className="education-logo-right"
                      style={{ width: "250px", height: "150px" }}
                    />
                  )}
                </div>

                <div className="education-card-body">
                  <div
                    className="education-duration"
                    style={{ color: accentColor }}
                  >
                    <span className="duration-icon">📅</span>
                    {degree.duration}
                  </div>

                  {degree.descriptions && (
                    <ul className="education-descriptions">
                      {degree.descriptions.map((desc, i) => (
                        <li key={i} style={{ color: theme.secondaryText }}>
                          <span style={{ color: accentColor }}>▸</span> {desc}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Slide>
          ))}
        </div>

        <Fade bottom duration={1000} distance="40px">
          <div className="certifications-header-section">
            <h2
              className="education-subheading-text"
              style={{ color: theme.text }}
            >
              Certifications
            </h2>
            <div
              className="education-heading-underline short"
              style={{ background: secondaryColor }}
            ></div>
          </div>
        </Fade>

        <div className="certifications-grid">
          {certifications.certifications.map((cert, index) => (
            <Slide right duration={1000} delay={index * 150} key={cert.title}>
              <div
                className="certification-card"
                style={{
                  borderTop: `3px solid ${secondaryColor}`,
                  background: theme.cardBackground || "rgba(255,255,255,0.05)",
                  boxShadow: `0 4px 20px ${
                    theme.shadowColor || "rgba(0,0,0,0.1)"
                  }`,
                }}
              >
                <div
                  className="certification-badge-large"
                  style={{
                    background: `${certColors[cert.title] || secondaryColor}15`,
                  }}
                >
                  {cert.logo_path ? (
                    <img
                      src={certLogos[cert.title] || genaiLogo}
                      alt={cert.title}
                      className="certification-logo-large"
                    />
                  ) : (
                    "🏆"
                  )}
                </div>
                <div className="certification-content">
                  <strong style={{ color: theme.text }}>{cert.title}</strong>
                  <p style={{ color: theme.secondaryText }}>{cert.subtitle}</p>
                  {/* Always show CERTIFIED tag in blue */}
                  <span className="certification-tag">CERTIFIED</span>
                </div>
              </div>
            </Slide>
          ))}
        </div>
      </div>

      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}

export default Education;
