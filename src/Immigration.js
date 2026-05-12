// src/Immigration.js
import React, { useEffect, useRef, useState } from "react";
import {
  FaPassport,
  FaPlaneDeparture,
  FaFileSignature,
  FaIdCard,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";

const STAGES = [
  {
    icon: <FaPlaneDeparture />,
    label: "OPT / CPT",
    title: "OPT & CPT Support",
    text:
      "International graduate? We guide you through OPT and CPT documentation, employer matching, and compliance — so you can start your training and begin working without missing a deadline.",
  },
  {
    icon: <FaFileSignature />,
    label: "H-1B",
    title: "H-1B Sponsorship & Filing",
    text:
      "We partner with hiring employers to sponsor and file your H-1B petition. Lottery preparation, LCA filing, RFE response support — and a back-up plan if the first lottery doesn't land.",
  },
  {
    icon: <FaIdCard />,
    label: "I-140",
    title: "I-140 / Green Card",
    text:
      "Long-term residency planning, EB-2 / EB-3 petition support, and PERM labor certification. Build your career in tech and your life in the US — together.",
  },
  {
    icon: <FaShieldAlt />,
    label: "Compliance",
    title: "Ongoing Compliance",
    text:
      "Status changes, extensions, transfers, and audits — handled with our network of immigration attorneys. You focus on your career; we handle the paperwork.",
  },
];

const Immigration = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.unobserve(e.target);
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
      className={`imm-section ${inView ? "imm-in" : ""}`}
      id="immigration"
    >
      {/* decorative blobs */}
      <span className="imm-blob imm-blob--1" />
      <span className="imm-blob imm-blob--2" />

      <div className="imm-inner">
        <div className="imm-heading">
          <div className="imm-eyebrow">
            <span className="imm-eyebrow__line" />
            <span className="imm-eyebrow__text">VISA &amp; IMMIGRATION</span>
          </div>
          <h2 className="imm-title">
            From OPT to{" "}
            <span className="imm-title__accent">Green Card</span> — we walk
            with you the entire way
          </h2>
          <p className="imm-lead">
            Tekstar partners with experienced immigration attorneys and
            sponsoring employers to support international students through
            every stage of their US tech career — from your first day on OPT
            to the day your Green Card is approved.
          </p>
        </div>

        {/* Timeline / stages */}
        <div className="imm-timeline">
          <div className="imm-timeline__rail" />
          {STAGES.map((s, i) => (
            <article
              className="imm-stage"
              key={i}
              style={{ "--i": i }}
            >
              <div className="imm-stage__node">
                <FaPassport className="imm-stage__corner" />
                <div className="imm-stage__icon">{s.icon}</div>
                <span className="imm-stage__label">{s.label}</span>
              </div>
              <div className="imm-stage__card">
                <h3 className="imm-stage__title">{s.title}</h3>
                <p className="imm-stage__text">{s.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="imm-cta">
          <a href="#contact" className="btn-primary imm-cta__btn">
            Talk to a counselor <FaArrowRight />
          </a>
          <p className="imm-cta__note">
            Free 30-minute consultation · Confidential · No commitment
          </p>
        </div>
      </div>
    </section>
  );
};

export default Immigration;
