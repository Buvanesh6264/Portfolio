import { useEffect, useRef } from "react";

// Lightweight connected-dots canvas that reacts to the mouse. Pauses when off screen.
const Particles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    let width, height, raf, visible = true;
    const mouse = { x: -999, y: -999 };
    let dots = [];

    const color = () =>
      document.documentElement.getAttribute("data-theme") === "light"
        ? "124, 58, 237"
        : "167, 139, 250";

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(70, Math.floor((width * height) / 18000));
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.8 + 0.6,
      }));
    };

    const draw = () => {
      raf = requestAnimationFrame(draw);
      if (!visible) return;
      ctx.clearRect(0, 0, width, height);
      const c = color();

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > width) d.vx *= -1;
        if (d.y < 0 || d.y > height) d.vy *= -1;

        const mx = d.x - mouse.x;
        const my = d.y - mouse.y;
        const md = Math.hypot(mx, my);
        if (md < 120) {
          d.x += (mx / md) * 1.2;
          d.y += (my / md) * 1.2;
        }

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c}, 0.8)`;
        ctx.fill();

        for (let j = i + 1; j < dots.length; j++) {
          const o = dots[j];
          const dist = Math.hypot(d.x - o.x, d.y - o.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(o.x, o.y);
            ctx.strokeStyle = `rgba(${c}, ${0.25 * (1 - dist / 120)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = mouse.y = -999;
    };

    const observer = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    observer.observe(canvas);

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="particles" aria-hidden="true" />;
};

export default Particles;
