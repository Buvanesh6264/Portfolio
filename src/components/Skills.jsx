 import '../style/Skills.css';


const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: "https://imgs.search.brave.com/rmetC_2nKrcvWMJsHoz4pzJc7k9BIdLPHxUO2l_o5qE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9icmFuZHMt/YW5kLXNvY2lhbC1t/ZWRpYS9odG1sLWlj/b24uc3Zn" },
    { name: 'CSS3', icon: "https://imgs.search.brave.com/7D1uAt3FTz7kD6XLJjfeG8dazQcmJ_gJjnPZi4SkmT4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pY29u/LmljZXBhbmVsLmlv/L1RlY2hub2xvZ3kv/c3ZnL0NTUzMuc3Zn" },
    { name: 'JavaScript', icon: "https://imgs.search.brave.com/hal1PgQLBcgo3zcQQYtiz_ydmTsNkJXQp0CWmPklOc4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9qYXZhc2Ny/aXB0LWpzLWljb24t/NTEyeDUxMi1xM2ln/d2xuNi5wbmc" },
    { name: 'React', icon: "https://imgs.search.brave.com/1Jq4ahUIZUSk0UCcCHR7bUsealVTOgcGkFZtIx0obVg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvOTE5LzkxOTg1/MS5wbmc" },
    { name: 'Node.js', icon: "https://imgs.search.brave.com/NVZxcNW8dtnRNm7DwJqdUceHPg1J4isHZFcDLq6uKZE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9ub2RlLWpz/LWljb24tOTA5eDEw/MjQtaWc0Z205azcu/cG5n" },
    { name: 'MongoDB', icon: "https://imgs.search.brave.com/NSSgp4dvEWMCQPZ289ugsE8tUZdMCXbBBsHziyopRlM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2Rl/dmljb25zL2Rldmlj/b24vbWFzdGVyL2lj/b25zL21vbmdvZGIv/bW9uZ29kYi1vcmln/aW5hbC5zdmc" },
    { name: 'Java', icon: "https://imgs.search.brave.com/a3Cl27Azg-8_pItKePdRS4dnG4EovBZUh5F1xVmbcyI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9qYXZhLWlj/b24tNzU2eDEwMjQt/c2kxY2Q2cXgucG5n" },
    { name: 'Spring Boot', icon: "https://imgs.search.brave.com/PDsYeYpj9PoR7JEEwYnPSpBaWH5G9tPRYajJt4C-Yw4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/Lzc5L1NwcmluZ19C/b290LnN2Zw" },
    { name: 'Mysql', icon: "https://imgs.search.brave.com/xAEflvdK3acsIVWHRlDFCYPBi9PT7n6eLwpbmCjguzo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaWNvbi1pY29u/cy5jb20vMzA1My9Q/TkcvOTYvbXlzcWxf/d29ya2JlbmNoX21h/Y29zX2JpZ3N1cl9p/Y29uXzE4OTkyNC5w/bmc" },
    { name: 'Express js', icon: "https://imgs.search.brave.com/_OC9FhryZDS2uIPLLrRwY1HmCw-YCG64wdO5Bc76-lo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuYmFjYW5jeXRl/Y2hub2xvZ3kuY29t/L21haW4tYm9vdC01/L2ltYWdlcy90ZWNo/LWljb24tc3ZnL2V4/cHJlc3MtanMuc3Zn" },
    { name: 'GitHub', icon: "https://imgs.search.brave.com/B0nJCx21s2v7Vt5Brw2ymmGIG1rrSfo-SHZDzei4B-o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9naXQtaWNv/bi0yMDQ4eDIwNDgt/anV6ZGYxbDUucG5n" },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Tech Stack</h2>
        <p className="section-subtitle">Technologies I've been working with currently</p>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-icon">
              <img src={skill.icon} alt={skill.name} />
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
