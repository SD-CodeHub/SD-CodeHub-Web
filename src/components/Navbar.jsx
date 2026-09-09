import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { ENQUIRY_FORM } from "./ui/Button";

const navItems = [
  { name: "Home", path: "/", n: "01" },
  { name: "About", path: "/about", n: "02" },
  { name: "Services", path: "/services", n: "03" },
  { name: "Work", path: "/portfolio", n: "04" },
  { name: "Pricing", path: "/pricing", n: "05" },
  { name: "Careers", path: "/careers", n: "06" },
];

/** Black-on-white logo asset, keyed onto the ink background. */
function Wordmark({ className = "" }) {
  return (
    <img
      src={logo}
      alt="SD CodeHub"
      className={`object-contain mix-blend-screen invert ${className}`}
    />
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const height =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile panel on navigation and lock scroll while it is open.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev;
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[90] transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${
        scrolled || open
          ? "border-b border-white/10 bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-accent focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>

      <div
        className={`shell flex items-center justify-between transition-[height] duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${
          scrolled ? "h-16 md:h-16" : "h-20 md:h-24"
        }`}
      >
        <NavLink to="/" aria-label="SD CodeHub — home" className="relative z-10">
          <Wordmark
            className={`w-auto transition-[height] duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${
              scrolled ? "h-9 md:h-10" : "h-11 md:h-14"
            }`}
          />
        </NavLink>

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `link-underline text-sm tracking-tight transition-colors duration-300 ${
                  isActive
                    ? "text-accent"
                    : "text-[var(--muted)] hover:text-[var(--text)]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={ENQUIRY_FORM}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden border border-white/20 px-5 py-2.5 text-sm tracking-tight transition-colors duration-400 hover:border-accent hover:text-accent lg:inline-block"
          >
            Start a project
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
          >
            <span
              className={`h-px w-6 bg-[var(--text)] transition-transform duration-400 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-[var(--text)] transition-transform duration-400 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Scroll progress hairline */}
      <div
        aria-hidden="true"
        className="h-px origin-left bg-accent transition-transform duration-150"
        style={{ transform: `scaleX(${progress / 100})` }}
      />

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        hidden={!open}
        className={`fixed inset-x-0 bottom-0 z-0 overflow-y-auto bg-ink px-5 pb-12 pt-6 lg:hidden ${
          scrolled ? "top-16" : "top-20 md:top-24"
        }`}
      >
        <nav aria-label="Mobile">
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {navItems.map((item, i) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-baseline gap-5 py-5 font-display text-3xl tracking-tight transition-colors ${
                      isActive ? "text-accent" : "text-[var(--text)]"
                    }`
                  }
                  style={{ animationDelay: `${i * 45}ms` }}
                >
                  <span className="label text-[0.6rem]">{item.n}</span>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={ENQUIRY_FORM}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex w-full items-center justify-center gap-3 bg-accent px-6 py-4 font-medium text-ink"
        >
          Start a project <span aria-hidden="true">→</span>
        </a>

        <div className="mt-10 space-y-1 text-sm text-[var(--muted)]">
          <p>codehubsd@gmail.com</p>
          <p>+91 99309 94315</p>
          <p>Navi Mumbai, Maharashtra</p>
        </div>
      </div>
    </header>
  );
}
