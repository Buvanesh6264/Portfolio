import '../style/About.css';
import img from '../assets/buvaneshphoto.jpg'
const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Full Stack Developer with expertise in the MERN stack, Java, and React Native. 
              I love building innovative and scalable solutions that make a difference.
            </p>
            <p>
              My journey in software development began during my engineering studies, and since then 
              I've been constantly learning and improving my skills.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or enjoying outdoor activities.
            </p>
            <div className="about-info">
              <div className="info-item">
                <span className="info-label">Name:</span>
                <span className="info-value">Buvanesh M</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">bbuvanesh19@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">Phone:</span>
                <span className="info-value">+91 8098406902</span>
              </div>
              <div className="info-item">
                <span className="info-label">From:</span>
                <span className="info-value">Karur, Tamil Nadu, India</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src={img} alt="About Buvanesh" className="profile-image"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;