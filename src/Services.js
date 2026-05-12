// src/Services.js
import React, { useEffect, useState } from "react";
import {
  FaCogs,
  FaCloud,
  FaBrain,
  FaChartBar,
  FaJava,
  FaReact,
  FaPython,
  FaDocker,
  FaServer,
  FaArrowRight,
  FaNodeJs,
  FaDatabase,
  FaProjectDiagram,
  FaUserShield,
  FaCubes,
} from "react-icons/fa";
import {
  SiKubernetes,
  SiSnowflake,
  SiTableau,
  SiTerraform,
  SiJenkins,
  SiGooglecloud,
} from "react-icons/si";
import ServiceDetail from "./ServiceDetail";

/**
 * Each program has a `details` object that powers the modal:
 *   - longText: extended program pitch
 *   - benefits: what trainees get
 *   - technologies: tools / topics covered (with brand colors)
 */
const SERVICES = [
  {
    id: "devops-sre",
    icon: <FaCogs />,
    title: "DevOps & SRE",
    text: "Master CI/CD, Kubernetes, infrastructure-as-code, and the operational mindset of senior site reliability engineers.",
    details: {
      longText:
        "Our DevOps & SRE program turns you into a full-cycle cloud engineer. You'll build CI/CD pipelines, run production-grade Kubernetes clusters, manage observability with Prometheus and Grafana, and codify infrastructure with Terraform. Real on-call simulations and incident-response drills mean you graduate ready to own production from day one.",
      benefits: [
        "12-week intensive program with daily hands-on labs",
        "Real-world projects deployed to AWS / Azure / GCP",
        "Live on-call simulations and incident response drills",
        "Resume + interview support targeting DevOps / SRE roles",
      ],
      technologies: [
        {
          icon: <SiKubernetes />,
          name: "Kubernetes",
          color: "#326CE5",
          text: "Production-grade clusters, Helm charts, GitOps with ArgoCD or Flux.",
        },
        {
          icon: <FaDocker />,
          name: "Docker",
          color: "#2496ED",
          text: "Containerization patterns, multi-stage builds, supply-chain security.",
        },
        {
          icon: <SiJenkins />,
          name: "Jenkins / GitHub Actions",
          color: "#D24939",
          text: "CI/CD pipeline design, secrets, environments, and deployment strategies.",
        },
        {
          icon: <SiTerraform />,
          name: "Terraform",
          color: "#7B42BC",
          text: "Infrastructure as code, modules, remote state, and reusable landing zones.",
        },
      ],
    },
  },
  {
    id: "cloud",
    icon: <FaReact />,
    title: "Cloud Engineering",
    text: "Architect, migrate, and operate workloads across AWS, Azure, and GCP — the way the industry actually does it.",
    details: {
      longText:
        "Cloud Engineering is the highest-leverage career track in tech right now. You'll learn how the big three clouds compare, when to use each, and how to design landing zones, identity models, networking, and cost-optimized workloads. Project-based learning means by the end you'll have launched real microservice architectures on production accounts.",
      benefits: [
        "AWS, Azure, and GCP fundamentals + a deep dive on AWS",
        "Multi-cloud landing zone and security baseline projects",
        "Cost optimization (FinOps) and tagging strategy hands-on",
        "Certification prep for AWS SAA / Azure AZ-104 / GCP ACE",
      ],
      technologies: [
        {
          icon: <FaServer />,
          name: "AWS",
          color: "#FF9900",
          text: "EKS, ECS, Lambda, RDS, S3, IAM, CloudFront, VPC architecture.",
        },
        {
          icon: <FaCloud />,
          name: "Microsoft Azure",
          color: "#0089D6",
          text: "AKS, App Service, Azure SQL, Synapse, and Entra ID for enterprise workloads.",
        },
        {
          icon: <SiGooglecloud />,
          name: "Google Cloud",
          color: "#4285F4",
          text: "GKE, BigQuery, Cloud Run, and Vertex AI for data and AI-first builds.",
        },
        {
          icon: <SiTerraform />,
          name: "Terraform / IaC",
          color: "#7B42BC",
          text: "Reusable modules, multi-environment patterns, policy as code.",
        },
      ],
    },
  },
  {
    id: "ai-ml",
    icon: <FaUserShield />,
    title: "AI & Machine Learning",
    text: "From statistics fundamentals to production ML — including LLMs, MLOps, modern AI workflows, model deployment, and real-world intelligent automation use cases.",
    details: {
      longText:
        "The AI / ML program goes beyond classroom theory. You'll build supervised and unsupervised models, neural networks, and LLM-powered applications — then ship them with proper MLOps, evaluation, and monitoring. Real datasets from finance, healthcare, and e-commerce mean your portfolio shows real domain depth, not toy MNIST work.",
      benefits: [
        "Math + statistics foundations (no prior background needed)",
        "Classical ML, deep learning, and applied LLM work",
        "MLOps with model versioning, evaluation, and monitoring",
        "Capstone project shipped to production with a real dataset",
      ],
      technologies: [
        {
          icon: <FaPython />,
          name: "Python + scikit-learn",
          color: "#3776AB",
          text: "End-to-end ML workflows: data prep, training, evaluation, serving.",
        },
        {
          icon: <FaBrain />,
          name: "TensorFlow / PyTorch",
          color: "#7C3AED",
          text: "Deep learning, computer vision, and natural-language models.",
        },
        {
          icon: <FaCubes />,
          name: "LLM / GenAI",
          color: "#FF6B6B",
          text: "Prompting, RAG, embeddings, evaluation, and guardrails.",
        },
        {
          icon: <FaProjectDiagram />,
          name: "MLOps",
          color: "#0aa15e",
          text: "MLflow, Weights & Biases, model registries, and online serving.",
        },
      ],
    },
  },
  {
    id: "data",
    icon: <FaChartBar />,
    title: "Data Science & Analytics",
    text: "Build the modern data stack end to end — warehousing, pipelines, SQL, dashboards, and storytelling.",
    details: {
      longText:
        "Data is the fastest-growing job family in tech. You'll learn the modern data stack the way teams actually use it: ingestion to Snowflake or BigQuery, transformation with dbt, orchestration with Airflow, and self-service BI in Tableau or Power BI. By graduation you'll have a portfolio of dashboards, dbt models, and a production data pipeline.",
      benefits: [
        "SQL fluency from beginner to advanced (window functions, CTEs)",
        "Modern data warehousing on Snowflake / BigQuery / Redshift",
        "Pipeline orchestration with Airflow and dbt",
        "Storytelling + executive dashboards in Tableau or Power BI",
      ],
      technologies: [
        {
          icon: <FaPython />,
          name: "Python + Pandas",
          color: "#3776AB",
          text: "Data wrangling, statistical analysis, and automation scripts.",
        },
        {
          icon: <SiSnowflake />,
          name: "Snowflake",
          color: "#29B5E8",
          text: "Cloud data warehouse design, performance tuning, and cost governance.",
        },
        {
          icon: <SiTableau />,
          name: "Tableau / Power BI",
          color: "#E97627",
          text: "Executive dashboards and self-service analytics with strong governance.",
        },
        {
          icon: <FaDatabase />,
          name: "dbt + Airflow",
          color: "#0aa15e",
          text: "Production data modeling, testing, and orchestration.",
        },
      ],
    },
  },
  {
    id: "java",
    icon: <FaJava />,
    title: "Java & Spring Boot",
    text: "Become a backend engineer in 12 weeks — Java fundamentals, Spring Boot, microservices, and cloud-native patterns.",
    details: {
      longText:
        "Java still powers more enterprise software than anything else, and senior Java backend engineers remain in extreme demand. Our program takes you from core language fundamentals through Spring Boot, JPA, microservices, Kafka messaging, and AWS deployment. You'll graduate ready for senior-IC interviews at banks, insurers, retailers, and product companies.",
      benefits: [
        "Core Java + OOP + design patterns from the ground up",
        "Spring Boot, JPA, Spring Security, REST + GraphQL APIs",
        "Microservices architecture with Kafka and event-driven design",
        "Oracle Java SE 11 / 17 certification prep included",
      ],
      technologies: [
        {
          icon: <FaJava />,
          name: "Core Java",
          color: "#E76F00",
          text: "Generics, streams, concurrency, JVM internals, and modern Java 17+ features.",
        },
        {
          icon: <FaServer />,
          name: "Spring Boot",
          color: "#6DB33F",
          text: "Auto-configuration, starters, profiles, and production-grade REST APIs.",
        },
        {
          icon: <FaDatabase />,
          name: "JPA + Hibernate",
          color: "#1053ab",
          text: "ORM patterns, entity mapping, query optimization, and N+1 fixes.",
        },
        {
          icon: <FaUserShield />,
          name: "Spring Security",
          color: "#7a4cf5",
          text: "OAuth2, JWT, role-based access, and method-level authorization.",
        },
      ],
    },
  },
  {
    id: "fullstack",
    icon: <FaCubes />,
    title: "React + Full Stack",
    text: "Modern web development end-to-end — React on the front, Node or Java on the back, and AWS to ship it all.",
    details: {
      longText:
        "Full-stack developers are the most versatile engineers on any team. You'll build modern React applications with TypeScript, Tailwind, and Next.js, then power them with Node.js or Java backends, PostgreSQL or MongoDB, and deploy to AWS or Vercel. Capstone projects mean by graduation you'll have shipped a portfolio of real apps that recruiters can click.",
      benefits: [
        "Modern React (hooks, suspense, Next.js) with TypeScript",
        "Backend track with Node.js + Express OR Java + Spring Boot",
        "Database design (relational + NoSQL) and REST/GraphQL APIs",
        "AWS / Vercel deployment with CI/CD on every project",
      ],
      technologies: [
        {
          icon: <FaReact />,
          name: "React + Next.js",
          color: "#61DAFB",
          text: "Hooks, suspense, server components, and modern app architecture.",
        },
        {
          icon: <FaNodeJs />,
          name: "Node.js + Express",
          color: "#339933",
          text: "High-throughput APIs, middleware, and serverless backends.",
        },
        {
          icon: <FaDatabase />,
          name: "PostgreSQL + MongoDB",
          color: "#1053ab",
          text: "Relational + NoSQL data design, indexes, and migrations.",
        },
        {
          icon: <FaCloud />,
          name: "AWS / Vercel",
          color: "#FF9900",
          text: "Edge deployments, lambdas, CDN, and CI/CD with every push.",
        },
      ],
    },
  },
];

const Services = () => {
  const [activeId, setActiveId] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(2); // 3rd card (center) highlighted by default — Eureka style
  const active = SERVICES.find((s) => s.id === activeId);

  // Listen for global "openService" events (from the Services nav dropdown)
  useEffect(() => {
    const handler = (e) => {
      const id = e.detail;
      if (SERVICES.some((s) => s.id === id)) setActiveId(id);
    };
    window.addEventListener("openService", handler);
    return () => window.removeEventListener("openService", handler);
  }, []);

  // Helper to render a single card (so the JSX below stays clean).
  // Only the "Read More" button triggers navigation — clicking elsewhere
  // on the card does nothing.
  const renderCard = (s, originalIndex, areaClass = "") => (
    <article
      className={
        "service-card " +
        areaClass +
        " " +
        (originalIndex === hoverIndex ? "service-card--highlighted" : "")
      }
      key={s.id}
      onMouseEnter={() => setHoverIndex(originalIndex)}
    >
      <div className="service-card__icon">{s.icon}</div>
      <h3 className="service-card__title">{s.title}</h3>
      <p className="service-card__text">{s.text}</p>
      <button
        type="button"
        className="service-card__more"
        onClick={() => setActiveId(s.id)}
        aria-label={`Read more about ${s.title}`}
      >
        Read More <FaArrowRight />
      </button>
    </article>
  );

  return (
    <section className="services-section" id="services">
      <div className="services-inner">
        {/* Eureka 3-column asymmetric layout:
            COL 1 — Title block on top + 1 card below
            COL 2 — Highlighted card (taller) + 1 card below
            COL 3 — 3 cards stacked */}
        <div className="services-eu-flex">
          <div className="services-eu-heading">
            <div className="services-eyebrow">
              <span className="services-eyebrow__line" />
              <span className="services-eyebrow__text">Our Services</span>
            </div>
            <h2 className="services-title--eu">
              Tekstar IT Services
              <br />
              End-to-End IT Training &amp; Placements
            </h2>
            <p className="services-lead--eu">
              We deliver industry-focused training programs in high-demand
              technologies — paired with hands-on projects, real-time
              mentorship, and dedicated job placement support to get you
              hired.
            </p>
          </div>

          {renderCard(SERVICES[1], 1, "service-card--app")}
          {renderCard(SERVICES[0], 0, "service-card--tech")}
          {renderCard(SERVICES[2], 2, "service-card--staffing")}
          {renderCard(SERVICES[3], 3, "service-card--data")}
          {renderCard(SERVICES[4], 4, "service-card--cloud")}
          {renderCard(SERVICES[5], 5, "service-card--ecommerce")}
        </div>
      </div>

      {/* FULL-PAGE detail view */}
      {active && (
        <ServiceDetail
          service={active}
          all={SERVICES}
          onSelect={(id) => setActiveId(id)}
          onClose={() => setActiveId(null)}
        />
      )}
    </section>
  );
};

export default Services;
