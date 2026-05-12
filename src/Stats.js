// src/Stats.js
import React, { useEffect, useRef, useState } from "react";

const STATS = [
  { num: 5, suffix: "+", label: "Years of Training Excellence" },
  { num: 100, suffix: "+", label: "Graduates Trained" },
  { num: 80, suffix: "+", label: "Successful Placements" },
  { num: 50, suffix: "+", label: "Hiring Partners" },
];

function useInView(threshold = 0.3) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          obs.unobserve(e.target);
        }
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, seen];
}

const StatCounter = ({ target, suffix, active }) => {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    const dur = 1600;
    const start = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);
  return (
    <span>
      {n}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const [ref, seen] = useInView(0.4);
  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-overlay" />
      <div className="stats-inner">
        {STATS.map((s, i) => (
          <div className="stat-item" key={i}>
            <div className="stat-num">
              <StatCounter target={s.num} suffix={s.suffix} active={seen} />
            </div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
