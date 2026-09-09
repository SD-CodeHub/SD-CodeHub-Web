import { useEffect, useState } from "react";
import Reveal from "./ui/Reveal";
import CTA from "./ui/Button";
import { Eyebrow } from "./ui/Section";
import Automation from "../assets/Automation1.jpg";
import Surveillance from "../assets/Servilance1.jpg";
import Parents from "../assets/parents1.png";
import Trip from "../assets/Trip1.jpg";
import Invest from "../assets/investment1.png";

// Lightest asset first — it is the one loaded eagerly.
const showcase = [
  { img: Automation, name: "KYC Automation Tool", stack: "AI · Document Pipeline" },
  { img: Surveillance, name: "Live Surveillance System", stack: "AI · Real-Time Alerts" },
  { img: Parents, name: "Parents–Teacher Portal", stack: "MERN · Auth · Reporting" },
  { img: Trip, name: "TripYatra Booking", stack: "MERN · Payments" },
  { img: Invest, name: "Smart Investment Portal", stack: "React · Node · MongoDB" },
];

const ROTATE_MS = 4600;

export default function SelectedWork() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(
      () => setActive((i) => (i + 1) % showcase.length),
      ROTATE_MS
    );
    return () => clearTimeout(id);
  }, [active, paused]);

  const current = showcase[active];

  return (
    <section className="rule bg-ink-2 py-20 md:py-24 lg:py-28">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* ---- Copy + project tabs ---- */}
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow index="01">Selected work</Eyebrow>
            </Reveal>

            <Reveal as="h2" delay={80} className="display mt-6 text-[clamp(1.8rem,3.6vw,2.6rem)]">
              Work we’ve shipped
            </Reveal>

            <Reveal delay={140}>
              <p className="lede mt-5 max-w-md text-[0.95rem]">
                Each project is more than just code — it’s a story of
                innovation, teamwork, and client satisfaction.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <ul
                className="mt-8 divide-y divide-white/10 border-y border-white/10"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                {showcase.map((item, i) => (
                  <li key={item.name}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-current={i === active}
                      onFocus={() => {
                        setPaused(true);
                        setActive(i);
                      }}
                      onBlur={() => setPaused(false)}
                      className={`group flex w-full items-center gap-4 py-3.5 text-left text-sm transition-colors duration-300 ${
                        i === active
                          ? "text-accent"
                          : "text-[var(--muted)] hover:text-[var(--text)]"
                      }`}
                    >
                      <span className="label text-[0.6rem]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">{item.name}</span>
                      <span
                        aria-hidden="true"
                        className={`h-px transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${
                          i === active ? "w-6 bg-accent" : "w-0 bg-transparent"
                        }`}
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-8">
                <CTA to="/portfolio" variant="ghost">
                  View all work
                </CTA>
              </div>
            </Reveal>
          </div>

          {/* ---- Viewport ---- */}
          <div className="lg:col-span-8">
            <Reveal
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="border border-white/12 bg-ink"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-accent/70" />
                </div>
                <p className="label text-[0.6rem]">
                  {String(active + 1).padStart(2, "0")} —{" "}
                  {String(showcase.length).padStart(2, "0")}
                </p>
              </div>

              <div className="relative aspect-[16/9] overflow-hidden bg-ink-3">
                {showcase.map((item, i) => (
                  <img
                    key={item.name}
                    src={item.img}
                    alt={i === active ? `${item.name} interface` : ""}
                    loading="lazy"
                    aria-hidden={i !== active}
                    className={`absolute inset-0 h-full w-full object-cover object-top transition-all duration-[1100ms] ease-[cubic-bezier(.16,1,.3,1)] ${
                      i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
                    }`}
                  />
                ))}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>

              <div
                className="flex items-center justify-between gap-4 border-t border-white/10 px-4 py-4"
                aria-live="polite"
              >
                <p className="truncate font-display text-sm font-medium">
                  {current.name}
                </p>
                <p className="label shrink-0 text-[0.6rem]">{current.stack}</p>
              </div>
            </Reveal>

            <p className="label mt-3 text-right text-[0.6rem]">
              Screens from live client projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
