import "../style/Hero.css";
import img from "../assets/buvaneshphoto.jpg";
import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import resume from "../assets/Buvanesh.pdf";

const subtitles = [
  "Full Stack",
  "MERN Stack",
  "Java Full Stack",
  "React Native",
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  useEffect(() => {
    if (subIndex === subtitles[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % subtitles.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? 50 : 150
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span>Buvanesh M</span>
            </h1>
            <h2 className="hero-subtitle">
              <span style={{ color: "#333" }}>I Am Into </span>
              {subtitles[index].substring(0, subIndex)}
              <span className="cursor">{blink ? "|" : " "}</span>
            </h2>
            <p className="hero-description">
              I build exceptional digital experiences with modern technologies.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Contact Me
              </a>
              <a href="#projects" className="btn btn-secondary">
                View Projects
              </a>
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Download Resume
              </a>
            </div>
            <div className="hero-socials">
              <a
                href="https://www.linkedin.com/in/buvanesh-m-3a976b212"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Buvanesh6264"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <img src={img} alt="Buvanesh M" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
