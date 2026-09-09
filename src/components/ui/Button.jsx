import { Link } from "react-router-dom";

const base =
  "group relative inline-flex items-center justify-center gap-3 font-medium tracking-tight " +
  "transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] disabled:opacity-50";

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-[0.95rem]",
};

const variants = {
  // Warm accent — the single loudest element on any screen. Use once per view.
  primary:
    "bg-accent text-ink hover:bg-white",
  // Hairline outline on ink
  ghost:
    "border border-white/20 text-[var(--text)] hover:border-accent hover:text-accent",
  // Inverted, for use on paper/light surfaces
  solid: "bg-[var(--text)] text-ink hover:bg-accent",
};

function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="inline-block transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-1"
    >
      →
    </span>
  );
}

/**
 * One CTA component for router links, external links and buttons so hover,
 * focus and sizing stay identical everywhere.
 */
export default function CTA({
  to,
  href,
  onClick,
  variant = "primary",
  size = "md",
  arrow = true,
  className = "",
  children,
  ...rest
}) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {arrow && <Arrow />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {inner}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={cls}
        {...rest}
      >
        {inner}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={cls} {...rest}>
      {inner}
    </button>
  );
}

/** Shared destination for every "start a project" call to action. */
export const ENQUIRY_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSdwXjgxgZbFSsouidjZUw9MjPz2KbVdKBVEho5Y2B_LyGFY4Q/viewform?usp=header";

export const CAREERS_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSfqQS_gK0Wc8qHqv2qRLMbmLKopXst7k4D8L3qxyjwMnu06hg/viewform?usp=header";

export const WHATSAPP =
  "https://wa.me/919930994315?text=Hello!%20I%20want%20to%20know%20about%20your%20services.";
