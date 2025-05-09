import "../style/Experience.css";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    title: "Java Full Stack Developer Certification",
    company: "Besant Technology",
    duration: "July 2024 – Jan 2025",
    description: [
      "Worked with React, Java, MySQL, and Spring Boot to build secure, scalable, and user-friendly applications."
    ],
    side: "right"
  },
  {
    title: "Software Development Intern",
    company: "Renambl Technology",
    duration: "Feb 2025 – Apr 2025",
    description: [
      "Worked with React, React Native, Express.js, and MongoDB to build secure, scalable, and user-friendly applications.",
      "Gained experience in secure authentication using JWT, bcrypt for password encryption, and API development using Express.js."
    ],
    side: "left"
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2 className="experience-title">
        <FaBriefcase className="title-icon" /> Experience
      </h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`timeline-container ${exp.side}`}
          >
            <div className="timeline-icon">
              <FaBriefcase />
            </div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className="duration">{exp.duration}</p>
              <ul>
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
