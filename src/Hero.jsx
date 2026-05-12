// src/Hero.jsx
import React, { useEffect, useState, useRef } from "react";
import heroImage from "./assets/hero.jpg"; // put your image in src/assets/

const Hero = () => {
  const [showText, setShowText] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [years, setYears] = useState(1);

  // NEW: ref for the whole hero section (for text animation trigger)
  const heroRef = useRef(null);

  // EXISTING: Trigger for the orange notification card (near bottom of hero)
  const cardTriggerRef = useRef(null);

  // 1) TEXT: "Since 2003" + heading + paragraph
  //    Animate when the hero section is in view.
  //    This works:
  //      - on page load (if hero is at top)
  //      - when you scroll into the hero from somewhere else.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowText(true);            // start text animation
          observer.unobserve(entry.target); // run only once
        }
      },
      {
        threshold: 0.3, // hero visible ~30%
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  // 2) ORANGE CARD: Show ONLY when we scroll down to its area
  //    👉 This is your existing behavior; left unchanged.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !showCard) {
          setShowCard(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5, // at least half of the trigger area in view
      }
    );

    if (cardTriggerRef.current) {
      observer.observe(cardTriggerRef.current);
    }

    return () => {
      if (cardTriggerRef.current) {
        observer.unobserve(cardTriggerRef.current);
      }
    };
  }, [showCard]);

  // 3) Animate 1 → 5 once the card becomes visible
  //    👉 Also your existing behavior; left unchanged.
  useEffect(() => {
    if (!showCard) return;

    let current = 1;
    const target = 5;
    const duration = 2500; // 2.5 seconds
    const stepTime = Math.floor(duration / (target - current));

    const interval = setInterval(() => {
      current += 1;
      if (current > target) {
        clearInterval(interval);
      } else {
        setYears(current);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [showCard]);

  return (
    <section
      ref={heroRef} // 👈 NEW: attach heroRef so text animation observes this section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark overlay so white text is readable */}
      <div className="hero-overlay" />

      <div className="hero-content">
        {/* LEFT text (tagline) */}
        <div
          className={`hero-line hero-left ${
            showText ? "animate-left" : ""
          }`}
        >
          <span className="hero-tag">Train · Build · Get Placed</span>
        </div>

        {/* RIGHT big text block */}
        <div
          className={`hero-line hero-right ${
            showText ? "animate-right" : ""
          }`}
        >
          <h1 className="hero-title">
            Launch Your <br />
            Tech Career with <br />
            Real-World Training
          </h1>
          <p className="hero-subtitle">
            Industry-focused programs in DevOps, Cloud, AI, Data Science,
            Java, React &amp; Full Stack — paired with hands-on projects,
            interview prep, and dedicated job placement support.
          </p>
        </div>
      </div>

      {/* Invisible trigger at the same area where the orange card sits */}
      <div className="experience-card-trigger" ref={cardTriggerRef} />

      {/* Orange popup card */}
      <div className={`experience-card ${showCard ? "show" : ""}`}>
        <div className="experience-card-left">
          <span className="experience-number">{years}+</span>
          <span className="experience-label">YRS Training Tech Talent</span>
        </div>

        {/* Orange round icon */}
        <div className="experience-card-icon">
          <div
            style={{
              width: "24px",
              height: "24px",
              backgroundColor: "#F25B3C",
              borderRadius: "50%",
            }}
          />
        </div>

        <div className="experience-card-right">
          Tekstar IT Services is an industry-focused IT training and
          consulting firm — helping bachelor&rsquo;s and master&rsquo;s
          graduates build successful careers in technology through
          real-world projects, hands-on learning, and end-to-end placement
          support.
        </div>
      </div>
    </section>
  );
};

export default Hero;
