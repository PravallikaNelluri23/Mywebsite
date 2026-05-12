// src/RPOSection.js
import React, { useEffect, useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const STATS = [
  { num: 20, suffix: "+", label: "Years of Experience" },
  { num: 500, suffix: "+", label: "Successful Projects" },
  { num: 250, suffix: "+", label: "Happy Clients" },
  { num: 1200, suffix: "+", label: "Professionals Placed" },
];

function useInView(threshold = 0.3) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          obs.unobserve(e.target);
        }
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, seen];
}

const StatCounter = ({ target, suffix, active }) => {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    const dur = 1600;
    const start = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);
  return (
    <span>
      {n}
      {suffix}
    </span>
  );
};

const RPOSection = () => {
  const [statsRef, statsSeen] = useInView(0.4);

  return (
    <>
      {/* RPO ----------------------------------------------------- */}
      <section className="rpo-section" id="rpo">
        <div className="rpo-inner">
          <div className="rpo-eyebrow">
            <span className="rpo-eyebrow__line" />
            <span className="rpo-eyebrow__text">
              RECRUITMENT PROCESS OUTSOURCING
            </span>
          </div>
          <h2 className="rpo-title">
            Smart RPO that{" "}
            <span className="rpo-title__accent">Scales With You</span>
          </h2>

          <div className="rpo-grid">
            <div className="rpo-copy">
              <p className="rpo-lead">
                Our RPO programs help you hire faster, hire better, and reduce
                cost-per-hire — without sacrificing quality. From sourcing
                to onboarding, we own the funnel so your team can focus on
                growth.
              </p>
              <ul className="rpo-list">
                <li>
                  <FaCheckCircle className="rpo-check" />
                  Dedicated sourcing &amp; recruiting pods
                </li>
                <li>
                  <FaCheckCircle className="rpo-check" />
                  AI-assisted candidate screening &amp; matching
                </li>
                <li>
                  <FaCheckCircle className="rpo-check" />
                  Transparent SLAs and weekly hiring metrics
                </li>
                <li>
                  <FaCheckCircle className="rpo-check" />
                  Flexible models — full RPO, project, or on-demand
                </li>
                <li>
                  <FaCheckCircle className="rpo-check" />
                  Diversity-first, compliance-ready hiring
                </li>
              </ul>
            </div>

            <div className="rpo-card">
              <div className="rpo-card__title">Our Hiring Funnel</div>
              <ol className="rpo-steps">
                <li>
                  <span>01</span>Discover
                </li>
                <li>
                  <span>02</span>Source
                </li>
                <li>
                  <span>03</span>Screen
                </li>
                <li>
                  <span>04</span>Interview
                </li>
                <li>
                  <span>05</span>Offer &amp; Onboard
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* STATS --------------------------------------------------- */}
      <section className="stats-section" ref={statsRef}>
        <div className="stats-overlay" />
        <div className="stats-inner">
          {STATS.map((s, i) => (
            <div className="stat-item" key={i}>
              <div className="stat-num">
                <StatCounter
                  target={s.num}
                  suffix={s.suffix}
                  active={statsSeen}
                />
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default RPOSection;
