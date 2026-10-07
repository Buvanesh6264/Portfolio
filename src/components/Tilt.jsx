import { useRef } from "react";

// Wraps children in a 3D tilt that follows the cursor.
const Tilt = ({ children, max = 10, className = "" }) => {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * max}deg) rotateY(${x * max}deg) scale(1.02)`;
  };
  const onLeave = () => {
    ref.current.style.transform = "";
  };

  return (
    <div ref={ref} className={`tilt ${className}`} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  );
};

export default Tilt;
