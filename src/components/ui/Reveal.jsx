import { useEffect, useRef } from "react";

/**
 * Wraps children in an element that fades/slides in the first time it enters
 * the viewport. Falls back to visible content if IntersectionObserver is
 * unavailable, and is neutralised by prefers-reduced-motion in index.css.
 */
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      node.setAttribute("data-reveal", "in");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-reveal", "in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      style={{ "--reveal-delay": `${delay}ms` }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}
