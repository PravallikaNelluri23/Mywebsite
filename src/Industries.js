// src/Industries.js
import React from "react";
import {
  FaUniversity,
  FaHeartbeat,
  FaShoppingCart,
  FaBroadcastTower,
  FaIndustry,
  FaMicrochip,
  FaPlane,
  FaGraduationCap,
} from "react-icons/fa";

const INDUSTRIES = [
  { icon: <FaUniversity />, name: "Banking & Finance" },
  { icon: <FaHeartbeat />, name: "Healthcare" },
  { icon: <FaShoppingCart />, name: "Retail & E-commerce" },
  { icon: <FaBroadcastTower />, name: "Telecom & Media" },
  { icon: <FaIndustry />, name: "Manufacturing" },
  { icon: <FaMicrochip />, name: "Technology" },
  { icon: <FaPlane />, name: "Travel & Hospitality" },
  { icon: <FaGraduationCap />, name: "Education" },
];

const Industries = () => {
  return (
    <section className="industries-section" id="industries">
      <div className="industries-inner">
        <div className="industries-heading">
          <div className="industries-eyebrow">
            <span className="industries-eyebrow__line" />
            <span className="industries-eyebrow__text">INDUSTRIES WE SERVE</span>
          </div>
          <h2 className="industries-title">
            Domain Expertise Across{" "}
            <span className="industries-title__accent">Industries</span>
          </h2>
          <p className="industries-lead">
            We bring deep, sector-specific know-how to every engagement —
            from regulated enterprises to fast-moving startups.
          </p>
        </div>

        <div className="industries-grid">
          {INDUSTRIES.map((it, i) => (
            <div className="industry-tile" key={i}>
              <div className="industry-tile__icon">{it.icon}</div>
              <div className="industry-tile__name">{it.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
