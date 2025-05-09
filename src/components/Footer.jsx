import "../style/Footer.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3>Buvanesh's Portfolio</h3>
          <p>
            Thank you for visiting my personal portfolio website. Connect with
            me over socials.
          </p>
          <p>Keep Rising 🚀 . Connect with me over live chat!</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">➤ Home</a>
            </li>
            <li>
              <a href="#about">➤ About</a>
            </li>
            <li>
              <a href="#skills">➤ Skills</a>
            </li>
            <li>
              <a href="#experience">➤ Experience</a>
            </li>
            <li>
              <a href="#projects">➤ Projects</a>
            </li>
            <li>
              <a href="#contact">➤ Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>
            <FaPhoneAlt /> +91 8098406902
          </p>
          <p>
            <FaEnvelope />
            <a href="mailto:bbuvanesh19@gmail.com" className="email-link">
              bbuvanesh19@gmail.com
            </a>
          </p>
          <p>
            <FaMapMarkerAlt /> Karur, India- 639114
          </p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/buvanesh-m-3a976b212">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Buvanesh6264">
              <FaGithub />
            </a>
            {/* <a href="#"><FaInstagram /></a> */}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        Designed With <span className="red-heart">❤️</span> By{" "}
        <span className="highlight">Buvanesh</span>
      </div>
    </footer>
  );
};

export default Footer;
