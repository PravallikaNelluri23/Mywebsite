import React, { useEffect, useState } from "react";
import './App.css';
import Hero from "./Hero";
import tekstarLogo from "./assets/tekstar-logo.png";
import consultBg from "./assets/hero1.jpg";
import { IoLocationSharp, IoHomeOutline } from "react-icons/io5";
import { HiMail, HiPhone } from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import AboutSection from "./AboutSection";
import DynamicSection from "./DynamicSection";
import WhyChooseUs from "./WhyChooseUs";
import Services from "./Services";
import Technologies from "./Technologies";
import Stats from "./Stats";
import Immigration from "./Immigration";
import ContactForm from "./ContactForm";
import Careers from "./Careers";

/* Section ids that correspond to nav links (in document order) */
const NAV_SECTIONS = [
  "home",
  "industries",
  "why-us",
  "services",
  "technologies",
  "contact",
];

function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const compute = () => {
      const offset = 140; // sticky-header + buffer

      // Resolve all sections to their current viewport top, then sort by
      // ACTUAL document position. Iterating in nav order is wrong because
      // sections are arranged differently in the DOM (e.g. "industries"
      // sits above "services" in this page).
      const sections = NAV_SECTIONS
        .map((id) => {
          const el = document.getElementById(id);
          if (!el) return null;
          return { id, top: el.getBoundingClientRect().top };
        })
        .filter(Boolean)
        .sort((a, b) => a.top - b.top);

      // Find the LAST section whose top has crossed the offset.
      let current = sections[0] ? sections[0].id : "home";
      for (const s of sections) {
        if (s.top - offset <= 0) current = s.id;
        else break;
      }

      // Bottom-of-page fallback — pin to the section that physically lives last
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 4
      ) {
        current = sections[sections.length - 1].id;
      }

      setActive((prev) => (prev !== current ? current : prev));
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  return active;
}

function App() {
  const activeSection = useActiveSection();
  const isActive = (id) => (activeSection === id ? "nav-link active" : "nav-link");
  const [careersOpen, setCareersOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [servicesDropdownLocked, setServicesDropdownLocked] = useState(false);

  // Set the tab title (favicon stays as the default favicon.ico from public/)
  useEffect(() => {
    document.title = "Tekstar | Consulting | IT Services";
  }, []);

  return (
    <div className="App">
      {careersOpen && <Careers onClose={() => setCareersOpen(false)} />}
      {/* TOP CONTACT BAR */}
      <div className="top-bar">
        <div className="top-bar-inner">
          <div className="top-bar-left">
            <span className="top-item">
            <HiMail className="top-icon" />
            pravallikanelluri76@gmail.com
            </span>

          <span className="top-item">
            <IoLocationSharp className="top-icon" />
            Libertyhill, TX 78642
          </span>
          </div>
        </div>
      </div>
    
      {/* HEADER + NAV */}
      <header>
        <div className="nav-inner">
          <a href="#home" className="logo">
            
              <div className="navbar__logo">
        <img src={tekstarLogo} alt="Tekstar Logo" className="navbar__logo-img" />
      </div>
            
          </a>

          <nav id="site-nav">
            <ul className="nav-links">
              <li className="nav-item--home">
                <IoHomeOutline className="nav-home-icon" />
                <a href="#home" className={isActive("home")}>Home</a>
              </li>
              <li>
                <a href="#industries" className={`${isActive("industries")} has-dropdown`}>Industries</a>
              </li>
              <li>
                <a href="#why-us" className={isActive("why-us")}>Why Us</a>
              </li>
              <li
                className={`nav-item--dropdown ${servicesDropdownOpen ? "is-open" : ""}`}
                onMouseEnter={() => {
                  if (!servicesDropdownLocked) setServicesDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  setServicesDropdownOpen(false);
                  setServicesDropdownLocked(false);
                }}
              >
                <a
                  href="#services"
                  className={`${isActive("services")} has-dropdown`}
                  onClick={() => {
                    setServicesDropdownOpen(false);
                    setServicesDropdownLocked(true);
                  }}
                >
                  Services
                </a>
                <ul className="nav-dropdown">
                  {[
                    { id: "devops-sre", label: "DevOps & SRE" },
                    { id: "cloud", label: "Cloud Engineering" },
                    { id: "ai-ml", label: "AI & Machine Learning" },
                    { id: "data", label: "Data Science & Analytics" },
                    { id: "java", label: "Java & Spring Boot" },
                    { id: "fullstack", label: "React + Full Stack" },
                  ].map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        className="nav-dropdown__item"
                        onClick={() => {
                          setServicesDropdownOpen(false);
                          setServicesDropdownLocked(true);
                          window.dispatchEvent(
                            new CustomEvent("openService", { detail: item.id })
                          );
                        }}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <a href="#technologies" className={isActive("technologies")}>Technologies</a>
              </li>
              <li>
                <a href="#contact" className={isActive("contact")}>Contact us</a>
              </li>
            </ul>
            <button
              className="btn-primary"
              onClick={() => setCareersOpen(true)}
            >
              Careers
            </button>
          </nav>

        </div>
      </header>
      <div id="home">
        <Hero />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <AboutSection />

      {/* WE ARE DYNAMIC — data viz built in code (no image) */}
      <DynamicSection />

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* OUR SERVICES */}
      <Services />

      {/* TECHNOLOGIES */}
      <Technologies />

      {/* STATS */}
      <Stats />

      {/* IMMIGRATION & VISA SUPPORT */}
      <Immigration />

      {/* CONTACT FORM */}
      <ContactForm />

      <div style={{ height: '60px' }} />
      {/* CONSULTATION BANNER (image background + button) */}
      <section
        className="consult-hero"
        style={{ backgroundImage: `url(${consultBg})` }}
      >
        <div className="consult-hero__overlay" />
        <div className="consult-hero__inner">
          <h2 className="consult-hero__title">
            Want to explore more with us? Get a consultation
          </h2>
          <button
            className="btn-primary consult-hero__btn"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Start Consultation
          </button>
        </div>
      </section>

      {/* MOVING TEXT (like ticker) */}
      <div className="ticker">
        <div className="ticker__inner">
          <span>
            Tekstar is Hiring Professionals in all Technologies/Domains.{"\u00A0\u00A0\u00A0\u00A0"}|{"\u00A0\u00A0"}•{"\u00A0\u00A0"}Tekstar sponsors new/transfer work visas (H-1B).{"\u00A0\u00A0\u00A0\u00A0"}|{"\u00A0\u00A0"}•{"\u00A0\u00A0"}Tekstar has its own in-house training center for all technologies.{"\u00A0\u00A0\u00A0\u00A0"}|{" "}
          </span>
          <span>
            Tekstar is Hiring Professionals in all Technologies/Domains.{"\u00A0\u00A0\u00A0\u00A0"}|{"\u00A0\u00A0"}•{"\u00A0\u00A0"}Tekstar sponsors new/transfer work visas (H-1B).{"\u00A0\u00A0\u00A0\u00A0"}|{"\u00A0\u00A0"}•{"\u00A0\u00A0"}Tekstar has its own in-house training center for all technologies.{"\u00A0\u00A0\u00A0\u00A0"}|{" "}
          </span>
          <span>
            Tekstar is Hiring Professionals in all Technologies/Domains.{"\u00A0\u00A0\u00A0\u00A0"}|{"\u00A0\u00A0"}•{"\u00A0\u00A0"}Tekstar sponsors new/transfer work visas (H-1B).{"\u00A0\u00A0\u00A0\u00A0"}|{"\u00A0\u00A0"}•{"\u00A0\u00A0"}Tekstar has its own in-house training center for all technologies.{"\u00A0\u00A0\u00A0\u00A0"}|{" "}
          </span>
        </div>
      </div>

      {/* MAIN FOOTER (contact cards + columns + bottom bar — one block) */}
      <footer className="site-footer">
        {/* 3 contact cards row */}
        <div className="main-inner footer-contact__inner">
          <div className="contact-card">
            <div className="contact-card__icon">
              <HiPhone />
            </div>
            <div className="contact-card__text">
              <div className="contact-card__value">+1 512-866-3539</div>
              <div className="contact-card__label">Give Us A Call</div>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card__icon">
              <HiMail />
            </div>
            <div className="contact-card__text">
              <div className="contact-card__value">pravallikanelluri76@gmail.com</div>
              <div className="contact-card__label">Drop Us a Line</div>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card__icon">
              <IoLocationSharp />
            </div>
            <div className="contact-card__text">
              <div className="contact-card__value">
                305 Valletta Way, Liberty Hill
                <br />
                Texas, 78642
              </div>
              <div className="contact-card__label">Head Office</div>
            </div>
          </div>
        </div>

        <div className="main-inner footer-main">
          <div className="footer-brand">
            <div className="navbar__logo footer-logo">
              <img
                src={tekstarLogo}
                alt="Tekstar Logo"
                className="navbar__logo-img"
              />
            </div>
            <p className="footer-tagline">TRAINING · PROJECTS · PLACEMENTS</p>

            <div className="footer-social">
              <a href="#facebook" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#twitter" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#instagram" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul className="footer-links__row">
              <li>
                <a href="#home" className="footer-link footer-link--active">Home</a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setCareersOpen(true);
                  }}
                >
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link">Contact us</a>
              </li>
              <li>
                <a href="#technologies" className="footer-link">Technologies</a>
              </li>
              <li>
                <a href="#unsubscribe" className="footer-link">Unsubscribe</a>
              </li>
            </ul>
          </div>

          <div className="footer-request">
            <h4>Request Consultation</h4>
            <div className="footer-input-row">
              <input
                type="email"
                placeholder="Your Email Address"
                className="footer-input"
              />
              <button className="btn-primary footer-send-btn">Send</button>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="footer-bottom">
          <div>Copyright © 2025. All rights reserved.</div>
          <div className="footer-bottom__links">
            <a href="#terms">Terms and Conditions</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
