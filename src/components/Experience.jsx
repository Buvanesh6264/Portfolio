import { useEffect, useRef, useState } from "react";
import "../style/Experience.css";
import { FaBriefcase, FaExternalLinkAlt, FaChevronDown } from "react-icons/fa";
import Reveal from "./Reveal";

// Chronological: where it started -> where I am now.
const experiences = [
  {
    title: "Software Development Intern",
    company: "Renambl Technology",
    url: "https://www.renambl.com/",
    duration: "Feb 2025 – Apr 2025",
    current: false,
    description: [
      "Worked with React, React Native, Express.js, and MongoDB to build secure, scalable, and user-friendly applications.",
      "Gained experience in secure authentication using JWT, bcrypt for password encryption, and API development using Express.js.",
    ],
    tech: ["React", "React Native", "Express.js", "MongoDB", "JWT"],
  },
  {
    title: "Full Stack Developer",
    company: "Knock the Globe",
    url: "https://knocktheglobe.com/",
    duration: "July 2025 – Present",
    current: true,
    description: [
      "Building and maintaining full-stack web applications with React, Next.js, Node.js and Express.js.",
      "Integrating third-party and internal APIs to power product features end to end.",
      "Using Redis for caching to keep applications fast and responsive.",
    ],
    tech: ["React", "Next.js", "Node.js", "Redis", "API Integration"],
  },
];

const Experience = () => {
  const [open, setOpen] = useState(experiences.length - 1);
  const [reached, setReached] = useState(() => experiences.map(() => false));
  const timelineRef = useRef(null);
  const itemRefs = useRef([]);

  // Scroll-linked progress: the line fills as you scroll and lights up each stop it passes.
  useEffect(() => {
    let raf = null;

    const update = () => {
      raf = null;
      const el = timelineRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const trigger = window.innerHeight * 0.6;
      const filled = Math.min(Math.max(trigger - rect.top, 0), rect.height);
      el.style.setProperty("--fill", `${filled}px`);

      const next = itemRefs.current.map((node) =>
        node ? filled >= node.offsetTop + 30 : false
      );
      setReached((prev) =>
        prev.every((v, i) => v === next[i]) ? prev : next
      );
    };

    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf !== null) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="experience" className="experience">
      <div className="container">
        <Reveal>
          <h2 className="section-title">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            My journey so far — scroll along the line, click a card for more
          </p>
        </Reveal>

        <div className="timeline" ref={timelineRef}>
          <div className="timeline-track" aria-hidden="true">
            <span className="timeline-pulse" />
            <div className="timeline-fill">
              <span className="timeline-head" />
            </div>
          </div>

          {experiences.map((exp, index) => {
            const isOpen = open === index;
            return (
              <div
                key={exp.company}
                ref={(n) => (itemRefs.current[index] = n)}
                className={`timeline-container ${index % 2 === 0 ? "left" : "right"} ${
                  reached[index] ? "reached" : ""
                }`}
              >
                <div className="timeline-icon">
                  <FaBriefcase />
                </div>
                <Reveal direction={index % 2 === 0 ? "left" : "right"}>
                  <div
                    className={`timeline-content glass ${isOpen ? "open" : ""}`}
                    onClick={() => setOpen(isOpen ? -1 : index)}
                  >
                    <div className="exp-top">
                      <p className="duration">{exp.duration}</p>
                      {exp.current && (
                        <span className="now-badge">
                          <span className="pulse-dot" /> Currently working
                        </span>
                      )}
                    </div>
                    <h3>{exp.title}</h3>
                    <a
                      className="company-link"
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {exp.company} <FaExternalLinkAlt />
                    </a>

                    <div className="exp-tags">
                      {exp.tech.map((t) => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                    </div>

                    <div className="exp-details">
                      <ul>
                        {exp.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>

                    <button
                      className="exp-toggle"
                      aria-expanded={isOpen}
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpen(isOpen ? -1 : index);
                      }}
                    >
                      {isOpen ? "Hide details" : "View details"} <FaChevronDown />
                    </button>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
