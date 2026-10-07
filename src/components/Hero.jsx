import "../style/Hero.css";
import img from "../assets/buvaneshphoto.jpg";
import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaDownload, FaArrowDown } from "react-icons/fa";
import resume from "../assets/Buvanesh.pdf";
import Particles from "./Particles";
import Tilt from "./Tilt";

import { experienceLabel } from "../data/experience";

const NAME = "Buvanesh M".split("");

const subtitles = ["Full Stack", "MERN Stack", "Next.js", "React Native"];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = subtitles[index];

    if (!deleting && subIndex === word.length) {
      const pause = setTimeout(() => setDeleting(true), 1200);
      return () => clearTimeout(pause);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % subtitles.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? 45 : 110
    );
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <section id="home" className="hero">
      <Particles />
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-badge anim" style={{ "--d": "0.1s" }}>
              <span className="pulse-dot" /> Full Stack Developer · {experienceLabel()}+ Years Experience
            </span>
            <h1 className="hero-title anim" style={{ "--d": "0.25s" }}>
              Hi, I'm{" "}
              <span className="gradient-text hero-name" aria-label="Buvanesh M">
                {NAME.map((ch, i) => (
                  <span key={i} className="letter" aria-hidden="true" style={{ "--i": i }}>
                    {ch === " " ? " " : ch}
                  </span>
                ))}
              </span>
            </h1>
            <h2 className="hero-subtitle anim" style={{ "--d": "0.4s" }}>
              I'm into <span className="typed">{subtitles[index].substring(0, subIndex)}</span>
              <span className="cursor" />
            </h2>
            <p className="hero-description anim" style={{ "--d": "0.55s" }}>
              Full Stack Developer with {experienceLabel()}+ years of hands-on experience building
              scalable, secure, and user-friendly web and mobile applications.
            </p>
            <div className="hero-actions anim" style={{ "--d": "0.7s" }}>
              <a href="#contact" className="btn btn-primary">Contact Me</a>
              <a href="#projects" className="btn btn-secondary">View Projects</a>
              <a href={resume} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <FaDownload /> Resume
              </a>
            </div>
            <div className="hero-socials anim" style={{ "--d": "0.85s" }}>
              <a href="https://www.linkedin.com/in/buvanesh-m-3a976b212" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Buvanesh6264" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
            </div>
          </div>

          <div className="hero-image anim-zoom" style={{ "--d": "0.4s" }}>
            <Tilt max={14}>
              <div className="image-wrapper">
                <span className="ring ring-1" />
                <span className="ring ring-2" />
                <img src={img} alt="Buvanesh M" />
                <span className="float-chip chip-1">⚛ React</span>
                <span className="float-chip chip-2">▲ Next.js</span>
                <span className="float-chip chip-3">🍃 MongoDB</span>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
      <a href="#about" className="scroll-hint" aria-label="Scroll down">
        <FaArrowDown />
      </a>
    </section>
  );
};

export default Hero;
