import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { skills } from "../data/skills";
import { getExperienceYears } from "../data/experience";

const years = getExperienceYears();

const stats = [
  { value: years, decimals: Number.isInteger(years) ? 0 : 1, suffix: "+", label: "Years Experience" },
  { value: 3, decimals: 0, suffix: "", label: "Projects Built" },
  { value: skills.length, decimals: 0, suffix: "+", label: "Technologies" },
  { value: 2, decimals: 0, suffix: "", label: "Companies" },
];

const Counter = ({ value, decimals, suffix }) => {
  const ref = useRef(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const duration = 1600;
      const tick = (now) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setN(value * eased);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
};

const Stats = () => (
  <div className="stats-grid">
    {stats.map((s, i) => (
      <Reveal key={s.label} direction="zoom" delay={i * 100} className="stat glass">
        <div className="stat-value gradient-text">
          <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
        </div>
        <div className="stat-label">{s.label}</div>
      </Reveal>
    ))}
  </div>
);

export default Stats;
