import React, { useState, useEffect, useRef } from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

const HERO_STATS = [
  { num: 4, suffix: "+", label: "Years at TCS" },
  { num: 3, suffix: "", label: "Awards Won" },
  { num: 50, suffix: "+", label: "Tools Built" },
  { num: 6, suffix: "", label: "LLM Providers" },
];

function useCounter(target, duration, active) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, active]);
  return value;
}

function AnimatedStat({ num, suffix, label, theme, active }) {
  const count = useCounter(num, 1600, active);
  return (
    <div className="hero-stat">
      <span className="hero-stat-num">
        {count}
        {suffix}
      </span>
      <span className="hero-stat-label" style={{ color: theme.secondaryText }}>
        {label}
      </span>
    </div>
  );
}

function useTypewriter(text, speed = 48, delay = 900) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (!text) return;
    let i = 0;
    setDisplayed("");
    setDone(false);
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);
  return { displayed, done };
}

export default function Greeting(props) {
  const theme = props.theme;
  const [statsActive, setStatsActive] = useState(false);
  const statsRef = useRef(null);
  const { displayed: typedTagline, done: taglineDone } = useTypewriter(
    greeting.tagline || "",
    46,
    1000
  );

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsActive(true);
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="greet-main" id="greeting">
      {/* Animated mesh grid overlay */}
      <div className="hero-mesh" aria-hidden="true" />

      {/* Animated background blobs */}
      <div className="hero-blob hero-blob-1" aria-hidden="true" />
      <div className="hero-blob hero-blob-2" aria-hidden="true" />
      <div className="hero-blob hero-blob-3" aria-hidden="true" />
      <div className="hero-blob hero-blob-4" aria-hidden="true" />

      <Fade bottom duration={900} distance="40px">
        <div className="greeting-main">
          {/* ── Left: Text ── */}
          <div className="greeting-text-div">
            <div>
              {/* Availability badge */}
              <div className="hero-availability">
                <span className="hero-avail-dot" />
                Available for new opportunities
              </div>

              {/* Name — gradient animated */}
              <h1 className="greeting-text">{greeting.title}</h1>

              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ({greeting.nickname})
                </h2>
              )}

              {/* Typewriter tagline */}
              {greeting.tagline && (
                <p
                  className="greeting-tagline"
                  style={{ color: theme.imageHighlight }}
                >
                  {typedTagline}
                  <span
                    className={`typer-cursor${
                      taglineDone ? " typer-cursor--blink" : ""
                    }`}
                    aria-hidden="true"
                  />
                </p>
              )}

              {/* Bio */}
              <p
                className="greeting-text-p"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>

              {/* Animated stats */}
              <div className="hero-stats" ref={statsRef}>
                {HERO_STATS.map((s) => (
                  <AnimatedStat
                    key={s.label}
                    num={s.num}
                    suffix={s.suffix}
                    label={s.label}
                    theme={theme}
                    active={statsActive}
                  />
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
