import '../style/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Anime Page',
      description: 'Full-stack Anime info app with trailers, characters, and watchlist functionality.',
      technologies: ['MERN Stack', 'JWT', 'MongoDB'],
      githubLink: 'https://github.com/Buvanesh6264/MYANIMEREACTPAGE'
    },
    {
      title: 'Book Store',
      description: 'Managed book records using CRUD operations, Spring MVC, and MySQL database.',
      technologies: ['Spring Boot', 'Thymeleaf', 'MySQL'],
      githubLink: 'https://github.com/Buvanesh6264/bookstore/tree/master/bookStore'
    },
    {
      title: 'Support Staff App',
      description: 'Cross-platform mobile app for managing device inventory and parcel tracking.',
      technologies: ['React Native', 'Express.js', 'MongoDB'],
      githubLink: 'https://github.com/Buvanesh6264/Yahvipay_Support_Staff_App'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
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
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;