import { useEffect, useRef, useState } from "react";

// Fades/slides children in when they scroll into view.
const Reveal = ({ children, delay = 0, direction = "up", className = "", as: Tag = "div" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      setSettled(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Drop the stagger delay once the entrance finishes so hover effects stay snappy.
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setSettled(true), delay + 900);
    return () => clearTimeout(t);
  }, [visible, delay]);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${direction} ${visible ? "in-view" : ""} ${className}`}
      style={settled ? undefined : { transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
