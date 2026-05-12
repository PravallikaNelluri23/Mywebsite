// src/ContactForm.js
import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { HiMail, HiPhone } from "react-icons/hi";

/**
 * SETUP — one-time, takes 60 seconds, no account needed:
 *
 *   1. Go to https://web3forms.com/
 *   2. Enter pravallikanelluri76@gmail.com in the box and click "Create Access Key"
 *   3. Web3Forms will email you an Access Key (long random string)
 *   4. Paste it below in place of "YOUR_WEB3FORMS_ACCESS_KEY"
 *
 * After that, every message sent from this form lands in your Gmail inbox
 * (within a few seconds, no mail client needed on the visitor's side).
 */
const WEB3FORMS_ACCESS_KEY = "c9792e3a-803c-4d16-8067-53e9e3a12426";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error | unconfigured

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    // Honest status if no key has been pasted yet.
    if (
      !WEB3FORMS_ACCESS_KEY ||
      WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY"
    ) {
      setStatus("unconfigured");
      setTimeout(() => setStatus("idle"), 6000);
      return;
    }

    try {
      setStatus("sending");
      const formData = new FormData();
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone || "Not provided");
      formData.append("subject", form.subject || `New contact from ${form.name}`);
      formData.append("message", form.message);
      formData.append("from_name", "Tekstar Website");
      formData.append("replyto", form.email);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <div className="contact-eyebrow">
          <span className="contact-eyebrow__line" />
          <span className="contact-eyebrow__text">GET IN TOUCH</span>
        </div>
        <h2 className="contact-title">
          Ready to launch your{" "}
          <span className="contact-title__accent">tech career?</span>
        </h2>
        <p className="contact-lead">
          Book a free counseling session, ask about a program, or tell us
          where you want your career to go — we usually reply within one
          business day.
        </p>

        <div className="contact-grid">
          {/* Left: details */}
          <div className="contact-info">
            <div className="contact-info__item">
              <div className="contact-info__icon">
                <HiPhone />
              </div>
              <div>
                <div className="contact-info__label">Call us</div>
                <div className="contact-info__value">+1 512-866-3539</div>
              </div>
            </div>

            <div className="contact-info__item">
              <div className="contact-info__icon">
                <HiMail />
              </div>
              <div>
                <div className="contact-info__label">Email</div>
                <div className="contact-info__value">pravallikanelluri76@gmail.com</div>
              </div>
            </div>

            <div className="contact-info__item">
              <div className="contact-info__icon">
                <IoLocationSharp />
              </div>
              <div>
                <div className="contact-info__label">Office</div>
                <div className="contact-info__value">
                  305 Valletta Way, Liberty Hill, TX 78642
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="contact-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={onChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={onChange}
                required
              />
            </div>
            <div className="contact-row">
              <input
                type="tel"
                name="phone"
                placeholder="Phone (optional)"
                value={form.phone}
                onChange={onChange}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={onChange}
              />
            </div>
            <textarea
              name="message"
              rows="5"
              placeholder="Tell us which program you're interested in, your background, or what you'd like to learn..."
              value={form.message}
              onChange={onChange}
              required
            />
            <button
              type="submit"
              className="btn-primary contact-submit"
              disabled={status === "sending"}
            >
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                ? "Message Sent ✓"
                : status === "error"
                ? "Failed — try again"
                : status === "unconfigured"
                ? "Set up Web3Forms key first"
                : "Send Message"}
            </button>
            {status === "unconfigured" && (
              <p
                style={{
                  marginTop: "0.6rem",
                  color: "#c2410c",
                  fontSize: "0.88rem",
                  lineHeight: 1.5,
                }}
              >
                The form isn't connected yet. Visit{" "}
                <a
                  href="https://web3forms.com/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#f25b3c", fontWeight: 600 }}
                >
                  web3forms.com
                </a>
                , create an Access Key with your Gmail, then paste it into{" "}
                <code>src/ContactForm.js</code> (the{" "}
                <code>WEB3FORMS_ACCESS_KEY</code> constant).
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
