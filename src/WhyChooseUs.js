// src/WhyChooseUs.js
import React from "react";
import {
  FaUserTie,
  FaProjectDiagram,
  FaLaptopCode,
  FaComments,
  FaFileAlt,
  FaBriefcase,
} from "react-icons/fa";

const ITEMS = [
  {
    icon: <FaUserTie />,
    title: "Industry-Expert Trainers",
    text: "Learn from senior practitioners with real-world experience at product, cloud, and consulting companies — not just academic theory.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Real-Time Project Experience",
    text: "Build production-grade projects across the full development lifecycle. Walk into interviews with portfolio work, not toy demos.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Hands-On Learning",
    text: "Code every day with live labs, code reviews, pair programming, and instructor-led project sessions from week one.",
  },
  {
    icon: <FaComments />,
    title: "Interview Preparation",
    text: "Mock interviews, system-design coaching, and curated question banks for the exact roles you’re targeting.",
  },
  {
    icon: <FaFileAlt />,
    title: "Resume & LinkedIn Support",
    text: "Story-driven resumes, LinkedIn profile revamps, and recruiter outreach scripts that get responses.",
  },
  {
    icon: <FaBriefcase />,
    title: "Dedicated Job Placement",
    text: "Profile marketing, hiring-partner network, and unlimited interview support until you land the right offer.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-section" id="why-us">
      <div className="why-inner">
        <div className="why-heading">
          <div className="why-eyebrow">
            <span className="why-eyebrow__line" />
            <span className="why-eyebrow__text">WHY CHOOSE US</span>
          </div>
          <h2 className="why-title">
            Why Businesses Trust <span className="why-title__accent">Tekstar</span>
          </h2>
          <p className="why-lead">
            From scaling teams to transforming systems — we deliver outcomes,
            not just outputs.
          </p>
        </div>

        <div className="why-grid">
          {ITEMS.map((it, i) => (
            <article className="why-card" key={i}>
              <div className="why-card__icon">{it.icon}</div>
              <h3 className="why-card__title">{it.title}</h3>
              <p className="why-card__text">{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
