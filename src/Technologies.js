// src/Technologies.js
import React, { useEffect, useRef, useState } from "react";
import {
  FaJava,
  FaPython,
  FaBrain,
  FaCogs,
  FaChartLine,
  FaChartBar,
} from "react-icons/fa";

const TECHNOLOGIES = [
  {
    name: "Java",
    icon: <FaJava />,
    color: "#F4914E",
    color2: "#FFB98A",
    colorDark: "#C2410C",
    tagline: "Enterprise-grade development",
    description:
      "Become a backend engineer in 12 weeks. Core Java, Spring Boot, microservices, JPA, and Spring Security — taught by senior architects with hiring partners across banking, retail, and product companies.",
    skills: ["Spring Boot", "Microservices", "JPA", "Kafka", "AWS"],
  },
  {
    name: "Python",
    icon: <FaPython />,
    color: "#5BA3DB",
    color2: "#FFD86B",
    colorDark: "#1D4ED8",
    tagline: "From zero to production",
    description:
      "Go from no programming experience to production-ready Python developer. Web dev with Django/Flask, automation, data engineering with Pandas — all with hands-on labs and real datasets.",
    skills: ["Django", "Flask", "Pandas", "NumPy", "FastAPI"],
  },
  {
    name: "Data Science",
    icon: <FaBrain />,
    color: "#C084FC",
    color2: "#FBCFE8",
    colorDark: "#7C3AED",
    tagline: "Models that drive decisions",
    description:
      "Statistical foundations, classical ML, deep learning, and applied LLMs. Build, evaluate, and ship production ML models with TensorFlow, PyTorch, and modern MLOps — using real-world datasets.",
    skills: ["ML Models", "Statistics", "TensorFlow", "PyTorch", "MLOps"],
  },
  {
    name: "DevOps",
    icon: <FaCogs />,
    color: "#5DC9E8",
    color2: "#A0F0E0",
    colorDark: "#0E7490",
    tagline: "Ship fast, ship safely",
    description:
      "Master the full delivery lifecycle: containers, Kubernetes, infrastructure-as-code, CI/CD, observability, and on-call response. Graduates land DevOps and SRE roles with strong portfolios.",
    skills: ["Kubernetes", "Docker", "Jenkins", "Terraform", "GitOps"],
  },
  {
    name: "Data Analytics",
    icon: <FaChartLine />,
    color: "#5BD4A4",
    color2: "#A7F3D0",
    colorDark: "#047857",
    tagline: "Modern data stack, end to end",
    description:
      "SQL fluency, dimensional modeling, dbt, Airflow, and self-service BI. Build governed metrics on Snowflake or BigQuery — exactly the way modern data teams operate.",
    skills: ["Snowflake", "SQL", "dbt", "Looker", "Airflow"],
  },
  {
    name: "Power BI",
    icon: <FaChartBar />,
    color: "#F2B85C",
    color2: "#FFE4A8",
    colorDark: "#B45309",
    tagline: "Enterprise BI, simplified",
    description:
      "Design semantic models, write powerful DAX measures, and ship pixel-perfect dashboards. Microsoft Fabric integration, row-level security, and real client-style reporting projects.",
    skills: ["DAX", "Power Query", "Dashboards", "Fabric", "RLS"],
  },
];

const Technologies = () => {
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
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`tech-section ${inView ? "tech-in" : ""}`}
      id="technologies"
    >
      {/* Decorative blobs */}
      <div className="tech-blob tech-blob--1" />
      <div className="tech-blob tech-blob--2" />

      <div className="tech-inner">
        <div className="tech-heading">
          <div className="tech-eyebrow">OUR TECHNOLOGIES</div>
          <h2 className="tech-title">
            <span className="tech-title__bold">What</span>{" "}
            <span className="tech-title__light">We Do.</span>
          </h2>
          <p className="tech-lead">
            Industry-leading expertise across the technology stack — from
            modern data platforms to enterprise application development.
          </p>
        </div>

        <div className="tech-grid">
          {TECHNOLOGIES.map((t, i) => (
            <article
              className="tech-card"
              key={t.name}
              style={{
                "--brand": t.color,
                "--brand2": t.color2,
                "--brand-dark": t.colorDark,
                "--i": i,
              }}
            >
              {/* gradient top stripe */}
              <span className="tech-card__stripe" />

              {/* glow on hover */}
              <span className="tech-card__glow" />

              {/* icon block */}
              <div className="tech-card__icon-wrap">
                <div className="tech-card__icon-bg" />
                <div className="tech-card__icon">{t.icon}</div>
                <div className="tech-card__pulse" />
              </div>

              {/* content */}
              <h3 className="tech-card__name">{t.name}</h3>
              <div className="tech-card__tagline">{t.tagline}</div>
              <p className="tech-card__desc">{t.description}</p>

              <ul className="tech-card__skills">
                {t.skills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
