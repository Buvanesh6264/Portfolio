import "../style/Projects.css";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import Reveal from "./Reveal";
import Tilt from "./Tilt";

const projects = [
  {
    title: "Anime Page",
    description: "Full-stack Anime info app with trailers, characters, and watchlist functionality.",
    technologies: ["MERN Stack", "JWT", "MongoDB"],
    githubLink: "https://github.com/Buvanesh6264/MYANIMEREACTPAGE",
  },
  {
    title: "Book Store",
    description: "Managed book records using CRUD operations, Spring MVC, and MySQL database.",
    technologies: ["Spring Boot", "Thymeleaf", "MySQL"],
    githubLink: "https://github.com/Buvanesh6264/bookstore/tree/master/bookStore",
  },
  {
    title: "Support Staff App",
    description: "Cross-platform mobile app for managing device inventory and parcel tracking.",
    technologies: ["React Native", "Express.js", "MongoDB"],
    githubLink: "https://github.com/Buvanesh6264/Yahvipay_Support_Staff_App",
  },
];

// Moves a soft spotlight under the cursor for a hover glow effect.
const handleMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
};

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <Reveal>
          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">Some things I've built recently</p>
        </Reveal>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 120} className="project-wrap">
              <Tilt max={7} className="project-tilt">
              <div className="project-card glass" onMouseMove={handleMove}>
                <div className="project-content">
                  <span className="project-number">0{index + 1}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="project-actions">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub /> View on GitHub <FaArrowRight className="arrow" />
                  </a>
                </div>
              </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
