// src/ServiceDetail.js
import React, { useEffect } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import heroBg from "./assets/hero1.jpg";

/**
 * Full-page service detail view.
 * Props:
 *   - service: the active service object (from SERVICES list)
 *   - all: full SERVICES list (used for the left nav)
 *   - onSelect(id): switch to another service (clicked from left nav)
 *   - onClose(): close the detail view and return to home
 */
const ServiceDetail = ({ service, all, onSelect, onClose }) => {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  // Scroll to top of the detail view whenever the active service changes
  useEffect(() => {
    const el = document.querySelector(".sdet-page");
    if (el) el.scrollTo({ top: 0, behavior: "smooth" });
  }, [service.id]);

  return (
    <div className="sdet-page">
      {/* HERO */}
      <section
        className="sdet-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="sdet-hero__overlay" />
        <button
          className="sdet-back"
          onClick={onClose}
          aria-label="Back to home"
        >
          <FaArrowLeft /> <span>Back</span>
        </button>
        <div className="sdet-hero__inner">
          <h1 className="sdet-hero__title">{service.title}</h1>
          <p className="sdet-hero__lead">
            {service.details.longText.split(".")[0] + "."}
          </p>
        </div>
      </section>

      {/* TWO-COLUMN: side nav (left) + content (right) */}
      <section className="sdet-section">
        <div className="sdet-grid">
          {/* LEFT — list of all services as a side nav */}
          <aside className="sdet-side">
            <div className="sdet-side__title">All Programs</div>
            <ul className="sdet-side__list">
              {all.map((s) => (
                <li
                  key={s.id}
                  className={
                    "sdet-side__item " +
                    (s.id === service.id ? "is-active" : "")
                  }
                >
                  <button
                    type="button"
                    onClick={() => onSelect(s.id)}
                  >
                    <span>{s.title}</span>
                    <FaArrowRight />
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* RIGHT — content body */}
          <div className="sdet-body">
            <div className="sdet-body__icon">{service.icon}</div>
            <h2 className="sdet-body__h2">{service.title}</h2>
            <p className="sdet-body__lead">{service.details.longText}</p>

            <div className="sdet-benefits">
              <h3>What you get</h3>
              <ul>
                {service.details.benefits.map((b, i) => (
                  <li key={i}>
                    <FaCheckCircle className="sdet-check" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sdet-tech">
              <div className="sdet-tech__eyebrow">TOOLS YOU'LL MASTER</div>
              <h3>
                Tech <span style={{ color: "#1053ab" }}>Stack</span>
              </h3>
              <div className="sdet-tech__grid">
                {service.details.technologies.map((t, i) => (
                  <div className="sdet-tech-card" key={i}>
                    <div
                      className="sdet-tech-card__icon"
                      style={{ color: t.color }}
                    >
                      {t.icon}
                    </div>
                    <h4
                      className="sdet-tech-card__name"
                      style={{ color: t.color }}
                    >
                      {t.name}
                    </h4>
                    <p className="sdet-tech-card__text">{t.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="sdet-cta">
              <button
                className="btn-primary sdet-cta__btn"
                onClick={() => {
                  onClose();
                  setTimeout(() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }, 80);
                }}
              >
                Enroll in this program <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
