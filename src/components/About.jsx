import "../style/About.css";
import img from "../assets/buvaneshphoto.jpg";
import { FaUser, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Reveal from "./Reveal";
import Stats from "./Stats";
import { experienceLabel } from "../data/experience";

const info = [
  { icon: <FaUser />, label: "Name", value: "Buvanesh M" },
  { icon: <FaEnvelope />, label: "Email", value: "bbuvanesh19@gmail.com" },
  { icon: <FaPhoneAlt />, label: "Phone", value: "+91 8098406902" },
  { icon: <FaMapMarkerAlt />, label: "From", value: "Karur, Tamil Nadu, India" },
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <Reveal>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">A little about who I am and what I do</p>
        </Reveal>
        <div className="about-content">
          <Reveal direction="left" className="about-image">
            <div className="photo-frame">
              <img src={img} alt="About Buvanesh" className="profile-image" />
            </div>
          </Reveal>
          <div className="about-text">
            <Reveal delay={100}>
              <p>
                I'm a passionate Full Stack Developer with {experienceLabel()}+ years of experience in the MERN
                stack, Next.js, and React Native. I love building innovative and scalable solutions
                that make a difference.
              </p>
              <p>
                My journey in software development began during my engineering studies, and since
                then I've been constantly learning and improving my skills.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to
                open-source projects, or enjoying outdoor activities.
              </p>
            </Reveal>
            <div className="about-info">
              {info.map((item, i) => (
                <Reveal key={item.label} delay={200 + i * 100} direction="zoom" className="info-item glass">
                  <span className="info-icon">{item.icon}</span>
                  <div>
                    <span className="info-label">{item.label}</span>
                    <span className="info-value">{item.value}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
        <Stats />
      </div>
    </section>
  );
};

export default About;
