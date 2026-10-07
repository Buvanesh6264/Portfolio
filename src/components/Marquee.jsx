const words = [
  "React", "Next.js", "Node.js", "Express", "MongoDB", "Redis",
  "MySQL", "React Native", "JavaScript", "JWT", "API Integration", "Git",
];

// Infinite scrolling tech strip; the list is doubled so the loop is seamless.
const Marquee = () => (
  <div className="marquee" aria-hidden="true">
    <div className="marquee-track">
      {[...words, ...words].map((w, i) => (
        <span key={i} className="marquee-item">
          {w} <span className="marquee-star">✦</span>
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;
