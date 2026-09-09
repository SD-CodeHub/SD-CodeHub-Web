import { Link } from "react-router-dom";
import { FaLinkedin, FaEnvelope, FaGlobe, FaInstagram } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { ENQUIRY_FORM, CAREERS_FORM, WHATSAPP } from "./ui/Button";

const explore = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Work", to: "/portfolio" },
  { name: "Pricing", to: "/pricing" },
  { name: "Careers", to: "/careers" },
];

const company = [
  { name: "Start a project", href: ENQUIRY_FORM },
  { name: "Apply for a role", href: CAREERS_FORM },
  { name: "Chat on WhatsApp", href: WHATSAPP },
];

const social = [
  { name: "codehubsd@gmail.com", href: "mailto:codehubsd@gmail.com", icon: FaEnvelope },
  { name: "bit.ly/SD-CodeHub", href: "https://bit.ly/SD-CodeHub", icon: FaGlobe },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/sd-codehub-97aa91389/", icon: FaLinkedin },
  { name: "Instagram", href: "https://www.instagram.com/sd_codehub/", icon: FaInstagram },
];

export default function Footer() {
  return (
    <footer className="rule relative overflow-hidden bg-ink-2 pt-20 md:pt-24">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Identity */}
          <div className="lg:col-span-4">
            <img
              src={Logo}
              alt="SD CodeHub"
              className="h-14 w-auto object-contain mix-blend-screen invert"
            />
            <p className="lede mt-6 max-w-xs text-sm">
              AI automation, MERN and full-stack development, UI/UX design and
              technical consulting — built in Navi Mumbai, delivered anywhere.
            </p>
          </div>

          {/* Explore */}
          <nav aria-label="Footer" className="lg:col-span-3">
            <h2 className="label text-[0.6rem]">Explore</h2>
            <ul className="mt-6 space-y-3">
              {explore.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="link-underline text-sm text-[var(--muted)] transition-colors hover:text-[var(--text)]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Work with us */}
          <div className="lg:col-span-2">
            <h2 className="label text-[0.6rem]">Work with us</h2>
            <ul className="mt-6 space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  {item.to ? (
                    <Link
                      to={item.to}
                      className="link-underline text-sm text-[var(--muted)] transition-colors hover:text-[var(--text)]"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-sm text-[var(--muted)] transition-colors hover:text-[var(--text)]"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & social */}
          <div className="lg:col-span-3">
            <h2 className="label text-[0.6rem]">Contact &amp; social</h2>
            <ul className="mt-6 space-y-3">
              {social.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group inline-flex items-center gap-3 text-sm text-[var(--muted)] transition-colors hover:text-[var(--text)]"
                    >
                      <Icon
                        className="text-base transition-colors group-hover:text-accent"
                        aria-hidden="true"
                      />
                      <span className="link-underline">{item.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <address className="mt-6 not-italic text-sm text-[var(--muted)]">
              <a href="tel:+919930994315" className="link-underline hover:text-[var(--text)]">
                +91 99309 94315
              </a>
              <br />
              Navi Mumbai, Maharashtra, India
            </address>
          </div>
        </div>
      </div>

      {/* Oversized wordmark, clipped at the base — a quiet sign-off */}
      <div
        aria-hidden="true"
        className="pointer-events-none mt-16 select-none overflow-hidden md:mt-20"
      >
        <p className="display translate-y-[14%] whitespace-nowrap text-center text-[11vw] leading-[0.8] text-white/[0.05]">
          SD CodeHub
        </p>
      </div>

      <div className="rule">
        <div className="shell flex flex-col items-center justify-between gap-3 py-6 text-xs text-[var(--muted)] sm:flex-row">
          <p>© {new Date().getFullYear()} SD CodeHub. All rights reserved.</p>
          <p>Designed &amp; developed by SD CodeHub.</p>
        </div>
      </div>
    </footer>
  );
}
