// src/AboutSection.js
import React from "react";
import "./App.css";

import aboutImage from "./assets/about-company.jpg";
import aboutBg from "./assets/about-bg.jpg";

const AboutSection = () => {
  return (
    <section
      className="about-section about-section--bg"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div className="about-section__inner">
        {/* LEFT: PERFECT DIAMOND IMAGE */}
        <div className="diamond-wrap">
          <div className="diamond">
            <img src={aboutImage} alt="About Company" />
          </div>
        </div>

        {/* RIGHT: CONTENT */}
        <div className="about-section__content">
          <div className="about-section__heading">
            <span className="about-section__heading-line" />
            <span className="about-section__heading-text">
              ABOUT TEKSTAR
            </span>
          </div>

          <p className="about-section__intro">
            Tekstar IT Services is an industry-focused IT training and
            consulting company. We help bachelor&rsquo;s and master&rsquo;s
            graduates build successful careers in high-demand technologies —
            and we walk with them all the way through placement.
          </p>

          <ul className="about-section__list">
            <li>Real-time project experience built into every program</li>
            <li>Trainers from product, cloud, and consulting backgrounds</li>
            <li>End-to-end career support: resume, LinkedIn, interviews, placement</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
