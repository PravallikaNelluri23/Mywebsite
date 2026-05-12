// src/Careers.js
import React, { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaChevronDown,
  FaUserGraduate,
  FaSearchPlus,
  FaGift,
  FaUpload,
  FaPlaneDeparture,
  FaFileSignature,
  FaIdCard,
} from "react-icons/fa";

const WHY_WORK = [
  {
    title: "Why train with Tekstar",
    body: (
      <>
        We&rsquo;re not a one-size-fits-all bootcamp. Every cohort is built
        around real industry needs, taught by senior practitioners, and
        backed by a placement and immigration team that walks with you long
        after you finish your final project.
        <ul>
          <li>Senior trainers from product and consulting backgrounds</li>
          <li>Real-time projects on tools companies actually use</li>
          <li>1:1 career coaching, mock interviews, resume reviews</li>
        </ul>
      </>
    ),
  },
  {
    title: "Who we look for",
    body: (
      <>
        Most of our graduates are bachelor&rsquo;s and master&rsquo;s
        students who want to break into the US tech industry — but
        we&rsquo;ve also placed career switchers from finance, accounting,
        and engineering. The common thread is curiosity and follow-through.
        <ul>
          <li>Recent CS / Engineering / Math grads (US or international)</li>
          <li>OPT / CPT students looking for sponsorship-ready roles</li>
          <li>Career changers serious about a year of focused work</li>
        </ul>
      </>
    ),
  },
  {
    title: "What you get",
    body: (
      <>
        Every Tekstar program comes with the full package — training, real
        projects, career services, and immigration support — under one roof
        and one fixed program fee.
        <ul>
          <li>Live cohort training (12&ndash;16 weeks per track)</li>
          <li>Capstone project + portfolio you&rsquo;ll show in interviews</li>
          <li>Resume + LinkedIn revamps, recruiter outreach, mock interviews</li>
          <li>Profile marketing to our hiring partner network</li>
          <li>OPT / CPT / H-1B / I-140 paperwork support</li>
        </ul>
      </>
    ),
  },
];

const Careers = ({ onClose }) => {
  // Lock body scroll while careers page is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const [openWhy, setOpenWhy] = useState(0);

  const handleResume = () => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  return (
    <div className="careers-page">
      {/* HERO */}
      <section className="careers-hero">
        <div className="careers-hero__overlay" />
        <button
          className="careers-back"
          onClick={onClose}
          aria-label="Back to home"
        >
          <FaArrowLeft /> <span>Back</span>
        </button>
        <div className="careers-hero__inner">
          <h1 className="careers-hero__title">Your Career Starts Here</h1>
          <p className="careers-hero__lead">
            Train with senior practitioners. Build real projects. Get placed
            with full visa and immigration support — all under one roof.
          </p>
        </div>
      </section>

      {/* WHY WORK WITH US — accordion */}
      <section className="careers-section">
        <div className="careers-eyebrow">
          <span className="careers-eyebrow__line" />
          <span className="careers-eyebrow__text">Train with Tekstar</span>
        </div>
        <h2 className="careers-h2">Why Tekstar</h2>
        <p className="careers-lead">
          We&rsquo;re a training, placement, and immigration partner — not
          just a classroom. Here&rsquo;s what you can expect when you join a
          cohort.
        </p>

        <div className="why-acc">
          {WHY_WORK.map((it, i) => {
            const isOpen = openWhy === i;
            return (
              <div
                key={i}
                className={`why-acc__item ${isOpen ? "is-open" : ""}`}
              >
                <button
                  className="why-acc__head"
                  onClick={() => setOpenWhy(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="why-acc__title">{it.title}</span>
                  <FaChevronDown className="why-acc__chev" />
                </button>
                <div className="why-acc__body">
                  <div className="why-acc__inner">{it.body}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PERKS PILLARS */}
      <section className="careers-pillars">
        <div className="careers-pillars__inner">
          <div className="careers-pillar">
            <div className="careers-pillar__icon">
              <FaUserGraduate />
            </div>
            <div className="careers-pillar__title">Real Training</div>
            <p>
              Live instructor-led cohorts, daily labs, and capstone projects
              built with senior trainers who&rsquo;ve done the work.
            </p>
          </div>
          <div className="careers-pillar">
            <div className="careers-pillar__icon">
              <FaSearchPlus />
            </div>
            <div className="careers-pillar__title">Placement Support</div>
            <p>
              Profile marketing, recruiter network, mock interviews, and
              unlimited interview support until you sign an offer you love.
            </p>
          </div>
          <div className="careers-pillar">
            <div className="careers-pillar__icon">
              <FaGift />
            </div>
            <div className="careers-pillar__title">Immigration Help</div>
            <p>
              OPT, CPT, H-1B, and I-140 support through our network of
              attorneys and sponsoring employers — included in your program.
            </p>
          </div>
        </div>
      </section>

      {/* IMMIGRATION HIGHLIGHT */}
      <section className="careers-section careers-imm">
        <div className="careers-eyebrow">
          <span className="careers-eyebrow__line" />
          <span className="careers-eyebrow__text">Visa &amp; Immigration</span>
        </div>
        <h2 className="careers-h2">From OPT to Green Card</h2>
        <p className="careers-lead">
          We don&rsquo;t hand you a certificate and walk away. Every Tekstar
          graduate gets paperwork support and attorney access for the long
          haul of building a US tech career.
        </p>

        <div className="careers-imm__grid">
          <div className="careers-imm__card">
            <div className="careers-imm__icon">
              <FaPlaneDeparture />
            </div>
            <h3>OPT &amp; CPT</h3>
            <p>
              Documentation, employer matching, and compliance guidance so
              you start working without delay.
            </p>
          </div>
          <div className="careers-imm__card">
            <div className="careers-imm__icon">
              <FaFileSignature />
            </div>
            <h3>H-1B Sponsorship</h3>
            <p>
              Sponsoring employer relationships, lottery prep, LCA, and
              full filing support — including RFE response.
            </p>
          </div>
          <div className="careers-imm__card">
            <div className="careers-imm__icon">
              <FaIdCard />
            </div>
            <h3>I-140 / Green Card</h3>
            <p>
              EB-2 / EB-3 petitions, PERM labor certification, and long-term
              residency planning with our partner attorneys.
            </p>
          </div>
        </div>
      </section>

      {/* CONNECT / SUBMIT RESUME */}
      <section className="careers-connect">
        <div className="careers-connect__overlay" />
        <div className="careers-connect__inner">
          <h2>Ready to start?</h2>
          <p>
            Tell us your background, target role, and visa status — we&rsquo;ll
            recommend the right cohort and walk you through the next steps.
          </p>
          <button
            className="btn-primary careers-connect__btn"
            onClick={handleResume}
          >
            <FaUpload /> Apply / Submit Resume
          </button>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker">
        <div className="ticker__inner">
          <span>
            New cohorts every month — DevOps · Cloud · AI · Data Science · Java · React · Full Stack.{" "}
          </span>
          <span>
            New cohorts every month — DevOps · Cloud · AI · Data Science · Java · React · Full Stack.{" "}
          </span>
          <span>
            New cohorts every month — DevOps · Cloud · AI · Data Science · Java · React · Full Stack.{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Careers;
