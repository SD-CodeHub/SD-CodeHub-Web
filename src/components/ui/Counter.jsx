import { useEffect, useRef, useState } from "react";

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/**
 * Counts a numeric stat up when scrolled into view. Non-numeric values
 * (e.g. "24/7") are rendered verbatim so the markup stays honest.
 */
export default function Counter({ value, className = "" }) {
  // Ratios like "24/7" are labels, not counts — leave them alone.
  const match = value.includes("/") ? null : /^(\d+)(.*)$/.exec(value);
  const target = match ? Number(match[1]) : null;
  const suffix = match ? match[2] : "";

  const [n, setN] = useState(target === null ? null : 0);
  const ref = useRef(null);

  useEffect(() => {
    if (target === null) return;
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setN(target);
      return;
    }
    if (prefersReduced()) {
      setN(target);
      return;
    }

    let frame;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const duration = 1400;
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setN(Math.round(target * eased));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target]);

  return (
    <span ref={ref} className={className}>
      {target === null ? value : `${n}${suffix}`}
    </span>
  );
}
