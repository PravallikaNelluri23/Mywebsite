// src/DynamicSection.js
import React, { useEffect, useRef, useState } from "react";

/**
 * "We Are Dynamic" — light background, centered layout.
 *  - Title + intro centered at top
 *  - Circular dashboard visual in the middle
 *  - Industry labels radiate around the circle
 *      (1 top, 5 left, 5 right, 1 bottom — 12 total, matching reference)
 */

const LEFT_INDUSTRIES = [
  "SRE",
  "Cloud Engineering",
  "AI / Machine Learning",
  "Java & Spring Boot",
  "Python",
];

const RIGHT_INDUSTRIES = [
  "Data Science",
  "Data Analytics",
  "React.js",
  "Full Stack Development",
  "Power BI",
];

const DynamicSection = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`dyn-section ${inView ? "dyn-in" : ""}`}
      id="industries"
    >
      <div className="dyn-inner">
        {/* HEADER */}
        <div className="dyn-header">
          <h2 className="dyn-title">We are dynamic</h2>
          <p className="dyn-lead">
            Our strength is in building distinctive learning paths — current
            with industry, taught by senior practitioners, and grounded in
            real-world projects.{" "}
            <strong>
              Tekstar trains graduates in the following high-demand
              technology tracks:
            </strong>
          </p>
        </div>

        {/* TOP track */}
        <div className="dyn-top-label">DevOps</div>

        {/* CIRCLE + side labels */}
        <div className="dyn-radial">
          {/* LEFT column */}
          <ul className="dyn-side dyn-side--left">
            {LEFT_INDUSTRIES.map((name, i) => (
              <li
                key={i}
                className="dyn-side-item"
                style={{ "--i": i }}
              >
                <span className="dyn-side-text">{name}</span>
                <span className="dyn-side-dot" />
              </li>
            ))}
          </ul>

          {/* CENTER — circular dashboard visual */}
          <div className="dyn-visual">
            <div className="dyn-ring" />
            <div className="dyn-circle">
              <svg
                viewBox="0 0 600 600"
                xmlns="http://www.w3.org/2000/svg"
                className="dyn-svg"
              >
                <defs>
                  <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#ff7a28" />
                    <stop offset="100%" stopColor="#ffd28a" />
                  </linearGradient>
                  <linearGradient
                    id="areaGrad"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="rgba(255,122,40,0.55)"
                    />
                    <stop offset="100%" stopColor="rgba(255,122,40,0)" />
                  </linearGradient>
                  <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ffb27a" />
                    <stop offset="100%" stopColor="#d63a20" />
                  </linearGradient>
                </defs>

                {/* Faint grid background */}
                <g opacity="0.18" stroke="#ffffff" strokeWidth="0.5">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <line
                      key={"h" + i}
                      x1="40"
                      x2="560"
                      y1={60 + i * 50}
                      y2={60 + i * 50}
                    />
                  ))}
                  {Array.from({ length: 10 }).map((_, i) => (
                    <line
                      key={"v" + i}
                      y1="60"
                      y2="540"
                      x1={60 + i * 50}
                      x2={60 + i * 50}
                    />
                  ))}
                </g>

                {/* TOP-LEFT — area chart */}
                <g transform="translate(60,90)">
                  <rect
                    width="200"
                    height="120"
                    rx="6"
                    fill="rgba(0,0,0,0.55)"
                    stroke="rgba(255,255,255,0.15)"
                  />
                  <text x="10" y="18" fontSize="9" fill="#ffb27a">
                    Tech &amp; Innovation
                  </text>
                  <path
                    className="dyn-area"
                    d="M10,90 L40,70 L70,80 L100,55 L130,65 L160,40 L190,50 L190,110 L10,110 Z"
                    fill="url(#areaGrad)"
                  />
                  <path
                    className="dyn-line"
                    d="M10,90 L40,70 L70,80 L100,55 L130,65 L160,40 L190,50"
                    fill="none"
                    stroke="url(#lineGrad)"
                    strokeWidth="2"
                  />
                  {[
                    [10, 90],
                    [40, 70],
                    [70, 80],
                    [100, 55],
                    [130, 65],
                    [160, 40],
                    [190, 50],
                  ].map(([x, y], i) => (
                    <circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="2.5"
                      fill="#fff"
                      className="dyn-dot"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </g>

                {/* TOP-RIGHT — climbing line */}
                <g transform="translate(330,90)">
                  <rect
                    width="210"
                    height="120"
                    rx="6"
                    fill="rgba(0,0,0,0.55)"
                    stroke="rgba(255,255,255,0.15)"
                  />
                  <text x="10" y="18" fontSize="9" fill="#ffb27a">
                    Growth Trend
                  </text>
                  <path
                    className="dyn-area"
                    d="M10,100 L40,90 L70,75 L100,80 L130,55 L160,45 L190,30 L200,25 L200,110 L10,110 Z"
                    fill="url(#areaGrad)"
                  />
                  <path
                    className="dyn-line dyn-line--slow"
                    d="M10,100 L40,90 L70,75 L100,80 L130,55 L160,45 L190,30 L200,25"
                    fill="none"
                    stroke="url(#lineGrad)"
                    strokeWidth="2"
                  />
                </g>

                {/* BOTTOM-LEFT — bars */}
                <g transform="translate(60,260)">
                  <rect
                    width="200"
                    height="140"
                    rx="6"
                    fill="rgba(0,0,0,0.55)"
                    stroke="rgba(255,255,255,0.15)"
                  />
                  <text x="10" y="18" fontSize="9" fill="#ffb27a">
                    Performance
                  </text>
                  {[40, 60, 35, 80, 55, 95, 70, 50].map((h, i) => (
                    <rect
                      key={i}
                      x={15 + i * 22}
                      y={120 - h}
                      width="14"
                      height={h}
                      rx="2"
                      fill="url(#barGrad)"
                      className="dyn-bar"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </g>

                {/* BOTTOM-RIGHT — world map + pins */}
                <g transform="translate(330,260)">
                  <rect
                    width="210"
                    height="140"
                    rx="6"
                    fill="rgba(0,0,0,0.55)"
                    stroke="rgba(255,255,255,0.15)"
                  />
                  <text x="10" y="18" fontSize="9" fill="#ffb27a">
                    Global Reach
                  </text>
                  <g
                    fill="rgba(255,255,255,0.18)"
                    transform="translate(15,30) scale(0.18)"
                  >
                    <path d="M50,120 q20,-30 60,-25 q30,5 60,-10 q25,-12 60,0 q40,15 80,5 q40,-8 80,10 q30,15 60,5 l30,40 q-10,40 -50,55 q-50,20 -100,10 q-40,-8 -80,5 q-50,15 -100,0 q-50,-20 -90,-25 q-20,-3 -10,-50 z" />
                    <path d="M180,260 q30,-15 70,-10 q40,5 80,15 q40,10 70,5 q-10,30 -50,45 q-40,15 -90,10 q-50,-5 -80,-30 q-20,-15 0,-35 z" />
                    <path d="M620,150 q30,-20 80,-10 q40,8 70,30 q-10,30 -50,40 q-40,10 -70,-5 q-30,-15 -30,-55 z" />
                    <path d="M820,220 q40,-10 60,15 q15,25 -10,40 q-30,15 -55,-5 q-20,-15 5,-50 z" />
                  </g>
                  {[
                    [40, 70],
                    [85, 55],
                    [120, 95],
                    [155, 60],
                    [180, 85],
                  ].map(([x, y], i) => (
                    <g key={i}>
                      <circle
                        cx={x}
                        cy={y}
                        r="6"
                        fill="#ff7a28"
                        opacity="0.25"
                        className="dyn-pulse"
                        style={{ animationDelay: `${i * 0.4}s` }}
                      />
                      <circle cx={x} cy={y} r="2.2" fill="#ff9750" />
                    </g>
                  ))}
                </g>

                {/* Centerpiece line */}
                <g>
                  <path
                    className="dyn-line dyn-line--xl"
                    d="M40,460 C140,440 200,520 280,470 S420,400 560,440"
                    fill="none"
                    stroke="url(#lineGrad)"
                    strokeWidth="2.5"
                    opacity="0.95"
                  />
                  <circle
                    cx="560"
                    cy="440"
                    r="4"
                    fill="#fff"
                    className="dyn-dot dyn-dot--big"
                  />
                </g>

                {/* Floating numbers */}
                <g
                  fontFamily="system-ui, sans-serif"
                  fill="rgba(255,255,255,0.75)"
                  fontSize="10"
                >
                  <text x="62" y="225" className="dyn-num">
                    +24.8%
                  </text>
                  <text x="332" y="225" className="dyn-num">
                    ↑ 1.4K
                  </text>
                  <text x="62" y="415" className="dyn-num">
                    98 ops/s
                  </text>
                  <text x="332" y="415" className="dyn-num">
                    42 nodes
                  </text>
                </g>
              </svg>

              {/* orbiting accents */}
              <span className="dyn-orbit dyn-orbit--1" />
              <span className="dyn-orbit dyn-orbit--2" />
              <span className="dyn-orbit dyn-orbit--3" />
            </div>
          </div>

          {/* RIGHT column */}
          <ul className="dyn-side dyn-side--right">
            {RIGHT_INDUSTRIES.map((name, i) => (
              <li
                key={i}
                className="dyn-side-item"
                style={{ "--i": i }}
              >
                <span className="dyn-side-dot" />
                <span className="dyn-side-text">{name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* BOTTOM track */}
        <div className="dyn-bottom-label">Career Support &amp; Placements</div>
      </div>
    </section>
  );
};

export default DynamicSection;
