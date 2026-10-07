import { useState, useRef } from "react";
import "../style/Contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheck,
  FaExclamationCircle,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaRegCopy,
  FaUser,
  FaRegCommentDots,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Reveal from "./Reveal";

const EMAIL = "bbuvanesh19@gmail.com";
const MAX_MESSAGE = 500;

const details = [
  { icon: <FaEnvelope />, label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, copy: true },
  { icon: <FaPhoneAlt />, label: "Phone", value: "+91 8098406902", href: "tel:+918098406902" },
  { icon: <FaMapMarkerAlt />, label: "Location", value: "Karur, Tamil Nadu, India" },
];

const quickLinks = [
  {
    label: "WhatsApp",
    icon: <FaWhatsapp />,
    href: "https://wa.me/918098406902?text=Hi%20Buvanesh%2C%20I%20saw%20your%20portfolio",
    cls: "whatsapp",
  },
  { label: "LinkedIn", icon: <FaLinkedin />, href: "https://www.linkedin.com/in/buvanesh-m-3a976b212", cls: "linkedin" },
  { label: "GitHub", icon: <FaGithub />, href: "https://github.com/Buvanesh6264", cls: "github" },
];

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm("service_cy3lb6w", "template_rf1i83c", form.current, {
        publicKey: "e6cNkb-WMl2YBJ2UN",
      })
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("error");
          setTimeout(() => setStatus("idle"), 5000);
        }
      );
  };

  const copyEmail = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (err) {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-watermark" aria-hidden="true">LET'S TALK</div>

      <div className="container">
        <Reveal>
          <h2 className="section-title">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project, an opportunity or just want to say hi? My inbox is always open.
          </p>
        </Reveal>

        <div className="contact-wrapper">
          <Reveal direction="left" className="contact-info">
            <div className="contact-intro">
              <h3>
                Let's build something <span className="gradient-text">great</span> together.
              </h3>
              <p>
                Drop a message and I'll get back to you. Prefer a quicker chat? Reach me directly
                on any of these.
              </p>
            </div>

            {details.map((d) => (
              <div className="contact-card glass" key={d.label}>
                <span className="info-icon">{d.icon}</span>
                <div className="contact-card-text">
                  <span className="info-label">{d.label}</span>
                  {d.href ? (
                    <a href={d.href} className="info-value">{d.value}</a>
                  ) : (
                    <span className="info-value">{d.value}</span>
                  )}
                </div>
                {d.copy && (
                  <button
                    type="button"
                    className={`copy-btn ${copied ? "copied" : ""}`}
                    onClick={copyEmail}
                    aria-label="Copy email address"
                  >
                    {copied ? <FaCheck /> : <FaRegCopy />}
                    <span>{copied ? "Copied!" : "Copy"}</span>
                  </button>
                )}
              </div>
            ))}

            <div className="quick-links">
              {quickLinks.map((q) => (
                <a
                  key={q.label}
                  href={q.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`quick-btn ${q.cls}`}
                  aria-label={q.label}
                >
                  {q.icon}
                  <span>{q.label}</span>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal direction="right" className="contact-form-wrap">
            <div className="form-glow">
              <div className="contact-form-container">
                <div className="form-header">
                  <span className="form-header-icon"><FaRegCommentDots /></span>
                  <div>
                    <h3>Send me a message</h3>
                    <p>I'll reply as soon as I can.</p>
                  </div>
                </div>

                <form ref={form} onSubmit={handleSubmit} className="contact-form">
                  <div className="field">
                    <FaUser className="field-icon" />
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder=" "
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      required
                    />
                    <label htmlFor="name">Your name</label>
                  </div>
                  <div className="field">
                    <FaEnvelope className="field-icon" />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder=" "
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      required
                    />
                    <label htmlFor="email">Your email</label>
                  </div>
                  <div className="field field-area">
                    <FaRegCommentDots className="field-icon" />
                    <textarea
                      name="message"
                      id="message"
                      placeholder=" "
                      rows="5"
                      maxLength={MAX_MESSAGE}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <label htmlFor="message">Your message</label>
                    <span className={`char-count ${formData.message.length > MAX_MESSAGE - 50 ? "warn" : ""}`}>
                      {formData.message.length}/{MAX_MESSAGE}
                    </span>
                  </div>

                  <button
                    type="submit"
                    className={`send-btn ${status === "sending" ? "sending" : ""}`}
                    disabled={status === "sending"}
                  >
                    <span className="send-label">
                      {status === "sending" ? "Sending..." : "Send Message"}
                    </span>
                    <FaPaperPlane className="send-plane" />
                  </button>

                  <div className="form-status" role="status" aria-live="polite">
                    {status === "error" && (
                      <span className="status-error">
                        <FaExclamationCircle /> Something went wrong. Please try again later.
                      </span>
                    )}
                  </div>
                </form>

                <div className={`success-overlay ${status === "success" ? "show" : ""}`} aria-hidden={status !== "success"}>
                  <div className="success-check">
                    <FaCheck />
                  </div>
                  <h3>Message sent!</h3>
                  <p>Thank you for reaching out. I'll get back to you soon.</p>
                  <button type="button" className="btn btn-secondary" onClick={() => setStatus("idle")}>
                    Send another
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
