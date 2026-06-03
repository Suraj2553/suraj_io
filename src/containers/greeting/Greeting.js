import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

const HERO_STATS = [
  { num: "4+", label: "Years at TCS" },
  { num: "3", label: "Awards Won" },
  { num: "50+", label: "Tools Built" },
  { num: "6", label: "LLM Providers" },
];

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <div className="greet-main" id="greeting">
      {/* Animated background blobs */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />

      <Fade bottom duration={1000} distance="40px">
        <div className="greeting-main">
          {/* ── Left: Text ── */}
          <div className="greeting-text-div">
            <div>
              {/* Available badge */}
              <div className="hero-availability">
                <span className="hero-avail-dot" />
                Available for new opportunities
              </div>

              {/* Name — gradient handled by CSS, no inline color */}
              <h1 className="greeting-text">{greeting.title}</h1>

              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ({greeting.nickname})
                </h2>
              )}

              {/* Tagline pill */}
              {greeting.tagline && (
                <p
                  className="greeting-tagline"
                  style={{ color: theme.imageHighlight }}
                >
                  {greeting.tagline}
                </p>
              )}

              {/* Bio */}
              <p
                className="greeting-text-p"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>

              {/* Stats row */}
              <div className="hero-stats">
                {HERO_STATS.map((s) => (
                  <div className="hero-stat" key={s.label}>
                    <span className="hero-stat-num">{s.num}</span>
                    <span
                      className="hero-stat-label"
                      style={{ color: theme.secondaryText }}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              <SocialMedia theme={theme} />

              <div className="portfolio-repo-btn-div">
                <Button
                  text="⭐ Star Me On Github"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
            </div>
          </div>

          {/* ── Right: Illustration ── */}
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </Fade>
    </div>
  );
}
