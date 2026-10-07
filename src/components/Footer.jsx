import "../style/Footer.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaArrowUp } from "react-icons/fa";

const links = ["home", "about", "skills", "experience", "projects", "contact"];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3 className="footer-brand">
            Buvanesh<span className="gradient-text">.</span>
          </h3>
          <p>
            Thank you for visiting my portfolio. Keep rising 🚀 — let's connect over socials.
          </p>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/buvanesh-m-3a976b212"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Buvanesh6264"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a href="mailto:bbuvanesh19@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            {links.map((id) => (
              <li key={id}>
                <a href={`#${id}`}>{id.charAt(0).toUpperCase() + id.slice(1)}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Designed with <span className="red-heart">❤️</span> by{" "}
          <span className="gradient-text">Buvanesh</span>
        </span>
        <a href="#home" className="to-top" aria-label="Back to top">
          <FaArrowUp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
