import { useEffect, useState } from "react";
import "../style/Loader.css";

// Full-screen "B" intro. Counts up, then the two panels slide apart to reveal the page.
const Loader = ({ onDone }) => {
  const [percent, setPercent] = useState(0);
  const [opening, setOpening] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const start = performance.now();
    const duration = 2200;
    let raf;

    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      setPercent(Math.round(p * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setOpening(true);
        onDone && setTimeout(onDone, 350);
        setTimeout(() => {
          setGone(true);
          document.body.style.overflow = "";
        }, 1400);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (gone) return null;

  return (
    <div className={`loader ${opening ? "opening" : ""}`} aria-hidden="true">
      <div className="loader-panel loader-panel-top" />
      <div className="loader-panel loader-panel-bottom" />

      <div className="loader-center">
        <div className="loader-b-wrap">
          <span className="loader-ring" />
          <span className="loader-ring loader-ring-2" />
          <svg className="loader-b" viewBox="0 0 100 120">
            <defs>
              <linearGradient id="bGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            <text x="50" y="92" textAnchor="middle" className="loader-b-text" fill="url(#bGrad)" stroke="url(#bGrad)">
              B
            </text>
          </svg>
        </div>
        <div className="loader-bar">
          <span style={{ width: `${percent}%` }} />
        </div>
        <p className="loader-percent">{percent}%</p>
      </div>
    </div>
  );
};

export default Loader;
