import { Link } from "react-router-dom";
import Reveal from "./ui/Reveal";
import { Eyebrow } from "./ui/Section";
import { ENQUIRY_FORM } from "./ui/Button";
import AppImg from "../assets/image4.webp";

/** The four partnership entry points, each pointing somewhere real. */
const paths = [
  { label: "Explore Partnerships", to: "/about", note: "How we work with clients" },
  { label: "Discover", to: "/portfolio", note: "Projects we have shipped" },
  { label: "Learn More", to: "/services", note: "Services and capabilities" },
  { label: "Get in Touch", href: ENQUIRY_FORM, note: "Tell us about your project" },
];

export default function Page13() {
  return (
    <section className="rule relative overflow-hidden bg-ink-2 py-20 md:py-28 lg:py-32">
      <div className="shell">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* ---- Product shot ---- */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm">
              <div
                className="absolute inset-x-8 bottom-0 top-16 border border-white/10 bg-ink"
                aria-hidden="true"
              />
              <img
                src={AppImg}
                alt="Mobile application built by SD CodeHub"
                loading="lazy"
                className="relative w-full object-contain float-soft"
              />
            </div>
          </Reveal>

          {/* ---- Copy ---- */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <Eyebrow index="03">Collaboration</Eyebrow>
            </Reveal>

            <Reveal as="h2" delay={80} className="display mt-7 text-[clamp(2rem,4.4vw,3.25rem)]">
              Partnering for success
            </Reveal>

            <Reveal delay={140}>
              <p className="lede mt-6 max-w-md text-base md:text-lg">
                At SD CodeHub, we believe that true success is achieved through
                meaningful partnerships and collaboration.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <ul className="mt-10 divide-y divide-white/10 border-y border-white/10">
                {paths.map((item, i) => {
                  const content = (
                    <>
                      <span className="label w-8 shrink-0 text-[0.6rem]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">
                        <span className="font-display text-lg tracking-tight">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block text-sm text-[var(--muted)]">
                          {item.note}
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </>
                  );

                  const cls =
                    "group flex w-full items-center gap-4 py-5 text-left transition-colors duration-300 hover:text-accent";

                  return (
                    <li key={item.label}>
                      {item.to ? (
                        <Link to={item.to} className={cls}>
                          {content}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cls}
                        >
                          {content}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
