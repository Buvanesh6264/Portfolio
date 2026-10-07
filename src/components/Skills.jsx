import { useState } from "react";
import "../style/Skills.css";
import Reveal from "./Reveal";
import { skills, categories } from "../data/skills";

const Skills = () => {
  const [active, setActive] = useState("All");

  return (
    <section id="skills" className="skills">
      <div className="container">
        <Reveal>
          <h2 className="section-title">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subtitle">
            Technologies I work with — pick a category to focus
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="skill-filters" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                className={`filter-btn ${active === cat ? "active" : ""}`}
                onClick={() => setActive(cat)}
              >
                {cat}
                <span className="filter-count">
                  {cat === "All" ? skills.length : skills.filter((s) => s.category === cat).length}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="skills-grid">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const match = active === "All" || skill.category === active;
            return (
              <Reveal
                key={skill.name}
                direction="zoom"
                delay={index * 50}
                className={`skill-icon glass ${match ? "" : "dimmed"}`}
              >
                <div className="skill-glow" style={{ background: skill.color }} />
                <Icon className="skill-svg" style={{ color: skill.color }} />
                <span className="skill-name">{skill.name}</span>
                <span className="skill-cat">{skill.category}</span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
