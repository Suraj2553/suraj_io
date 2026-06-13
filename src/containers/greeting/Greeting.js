import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import FeelingProud from "./FeelingProud";
import HeroThreeBackground from "../../components/threeBackground/HeroThreeBackground";

/* ─── Animated counter hook ─────────────────────────────── */
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
    let startTs = null;
    const step = (ts) => {
      if (!startTs) startTs = ts;
      const progress = Math.min((ts - startTs) / duration, 1);
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

/* ─── Typewriter hook ────────────────────────────────────── */
function useTypewriter(text, speed = 46, delay = 1400) {
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

/* ─── Component ──────────────────────────────────────────── */
export default function Greeting(props) {
  const theme = props.theme;
  const [statsActive, setStatsActive] = useState(false);

  /* GSAP refs */
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const nameRef = useRef(null);
  const taglineRef = useRef(null);
  const bioRef = useRef(null);
  const statsRef = useRef(null);
  const socialRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);

  const { displayed: typedTagline, done: taglineDone } = useTypewriter(
    greeting.tagline || "",
    46,
    1400
  );

  /* ── GSAP entrance timeline ─────────────────────────── */
  useEffect(() => {
    const targets = [
      badgeRef.current,
      nameRef.current,
      taglineRef.current,
      bioRef.current,
      statsRef.current,
      socialRef.current,
      ctaRef.current,
    ].filter(Boolean);

    gsap.set(targets, { opacity: 0, y: 36 });
    if (imageRef.current) gsap.set(imageRef.current, { opacity: 0, x: 70 });

    const tl = gsap.timeline({ paused: true });

    tl.to(badgeRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.55,
      ease: "power2.out",
    })
      .to(
        nameRef.current,
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        "-=0.28"
      )
      .to(
        taglineRef.current,
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      )
      .to(
        bioRef.current,
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.25"
      )
      .to(
        statsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          onStart: () => setStatsActive(true),
        },
        "-=0.2"
      )
      .to(
        socialRef.current,
        { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" },
        "-=0.2"
      )
      .to(
        ctaRef.current,
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
        "-=0.18"
      )
      .to(
        imageRef.current,
        { opacity: 1, x: 0, duration: 0.75, ease: "power3.out" },
        "<-0.7"
      );

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          tl.play();
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);

    return () => {
      obs.disconnect();
      tl.kill();
    };
  }, []);

  return (
    <div className="greet-main" id="greeting" ref={sectionRef}>
      {/* WebGL bokeh particle background */}
      <HeroThreeBackground />

      {/* Subtle mesh grid overlay */}
      <div className="hero-mesh" aria-hidden="true" />

      <div className="greeting-main">
        {/* ── Left: Text ── */}
        <div className="greeting-text-div">
          <div ref={badgeRef} className="hero-availability">
            <span className="hero-avail-dot" />
            Available for new opportunities
          </div>

          <h1 ref={nameRef} className="greeting-text">
            {greeting.title}
          </h1>

          {greeting.tagline && (
            <p
              ref={taglineRef}
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

          <p
            ref={bioRef}
            className="greeting-text-p"
            style={{ color: theme.secondaryText }}
          >
            {greeting.subTitle}
          </p>

          <div className="hero-stats" ref={statsRef}>
            {HERO_STATS.map((s) => (
              <AnimatedStat
                key={s.label}
                {...s}
                theme={theme}
                active={statsActive}
              />
            ))}
          </div>

          <div ref={socialRef}>
            <SocialMedia theme={theme} />
          </div>

          <div ref={ctaRef} className="portfolio-repo-btn-div">
            <Button
              text="⭐ Star Me On Github"
              newTab={true}
              href={greeting.portfolio_repository}
              theme={theme}
            />
          </div>
        </div>

        {/* ── Right: Illustration ── */}
        <div className="greeting-image-div" ref={imageRef}>
          <FeelingProud theme={theme} />
        </div>
      </div>
    </div>
  );
}
