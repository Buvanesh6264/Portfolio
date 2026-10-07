import { useEffect, useRef } from "react";
import "../style/Cursor.css";

// Custom pointer: gradient dot + trailing ring + ambient glow, with click ripples.
// Only runs on devices with a fine pointer (mouse/trackpad).
const CursorGlow = () => {
  const glow = useRef(null);
  const ring = useRef(null);
  const dot = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const root = document.documentElement;
    root.classList.add("custom-cursor");

    let tx = -100, ty = -100, rx = -100, ry = -100, gx = -100, gy = -100, raf;

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${tx}px, ${ty}px)`;
      [glow, ring, dot].forEach((r) => r.current?.classList.add("active"));
    };

    const onOver = (e) => {
      const t = e.target;
      const isText = !!t.closest("input, textarea");
      const hot = !isText && !!t.closest("a, button, [role='tab'], .timeline-content, .skill-icon, .project-card");
      ring.current?.classList.toggle("hot", hot);
      glow.current?.classList.toggle("hot", hot);
      ring.current?.classList.toggle("text", isText);
      dot.current?.classList.toggle("text", isText);
    };

    const onDown = (e) => {
      ring.current?.classList.add("down");
      const ripple = document.createElement("span");
      ripple.className = "cursor-ripple";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    };
    const onUp = () => ring.current?.classList.remove("down");

    const onLeave = () =>
      [glow, ring, dot].forEach((r) => r.current?.classList.remove("active"));

    const loop = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      gx += (tx - gx) * 0.08;
      gy += (ty - gy) * 0.08;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`;
      if (glow.current) glow.current.style.transform = `translate(${gx}px, ${gy}px)`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      root.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <div ref={glow} className="cursor-glow" aria-hidden="true" />
      <div ref={ring} className="cursor-ring" aria-hidden="true"><span /></div>
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
    </>
  );
};

export default CursorGlow;
