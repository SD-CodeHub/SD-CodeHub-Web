import { FaLightbulb, FaCogs, FaShieldAlt, FaUsers } from "react-icons/fa";
import Reveal from "./ui/Reveal";
import CTA, { ENQUIRY_FORM } from "./ui/Button";
import { Eyebrow } from "./ui/Section";

const principles = [
  {
    icon: FaLightbulb,
    title: "Innovation-Driven Solutions",
    desc: "We leverage AI, automation, and modern tech stacks to deliver futuristic software.",
  },
  {
    icon: FaCogs,
    title: "Agile Development",
    desc: "We follow flexible workflows for rapid prototyping and adaptive delivery.",
  },
  {
    icon: FaUsers,
    title: "Client Collaboration",
    desc: "Our clients are part of every phase — strategy, design, testing, and launch.",
  },
  {
    icon: FaShieldAlt,
    title: "Security & Reliability",
    desc: "Every solution is built with scalability, data security, and reliability in mind.",
  },
];

export default function Page32() {
  return (
    <div id="main">
      {/* ================= Page hero ================= */}
      <section className="relative overflow-hidden bg-ink pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="grid-field pointer-events-none absolute inset-0" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -top-32 left-1/3 h-[32rem] w-[32rem] rounded-full bg-accent/8 blur-[150px]"
          aria-hidden="true"
        />
        <div className="shell relative">
          <Reveal>
            <Eyebrow>Services</Eyebrow>
          </Reveal>

          <Reveal as="h1" delay={80} className="display mt-8 max-w-4xl text-[clamp(2.4rem,6.2vw,4.75rem)]">
            <span className="mask-line">
              <span>Building trust through</span>
            </span>
            <span className="mask-line">
              <span style={{ transitionDelay: "100ms" }}>
                technology &amp; <span className="text-accent">transparency.</span>
              </span>
            </span>
          </Reveal>

          <Reveal delay={160}>
            <p className="lede mt-8 max-w-2xl text-base md:text-lg">
              At SD CodeHub, we don’t just develop software — we engineer
              digital transformations. Our focus is on building meaningful
              partnerships with our clients, driven by trust, collaboration, and
              innovation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= Approach ================= */}
      <section className="rule bg-ink-2 py-20 md:py-28 lg:py-32">
        <div className="shell">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow index="01">Approach</Eyebrow>
              </Reveal>

              <Reveal as="h2" delay={80} className="display mt-7 text-[clamp(1.9rem,4vw,3rem)]">
                Our methodology — a partnership for growth
              </Reveal>

              <Reveal delay={140}>
                <p className="lede mt-6 max-w-2xl text-[0.95rem] md:text-base">
                  Every project we take on is built upon clear communication,
                  modern technology, and a shared vision. From brainstorming to
                  deployment, we work as an extension of your team — ensuring
                  every step aligns with your business goals.
                </p>
              </Reveal>

              <ul className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
                {principles.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <Reveal
                      as="li"
                      key={item.title}
                      delay={i * 70}
                      className="group bg-ink-2 p-7 transition-colors duration-500 hover:bg-ink-3"
                    >
                      <Icon
                        className="text-xl text-[var(--muted)] transition-colors duration-500 group-hover:text-accent"
                        aria-hidden="true"
                      />
                      <h3 className="mt-5 font-display text-base tracking-tight">
                        {item.title}
                      </h3>
                      <p className="lede mt-2 text-sm">{item.desc}</p>
                    </Reveal>
                  );
                })}
              </ul>
            </div>

            {/* Pull quote */}
            <div className="lg:col-span-5">
              <Reveal className="relative h-full border border-white/12 bg-ink p-8 md:p-10">
                <div
                  className="absolute -right-px -top-px h-16 w-16 border-r border-t border-accent"
                  aria-hidden="true"
                />
                <p className="label text-[0.6rem]">Beyond code</p>
                <h3 className="display mt-6 text-2xl md:text-[1.75rem]">
                  A collaboration that goes beyond code
                </h3>
                <p className="lede mt-6 text-[0.95rem]">
                  We believe great products are built through shared vision and
                  mutual trust. That’s why we don’t act as vendors — we act as
                  long-term partners helping businesses evolve, innovate, and
                  grow through technology.
                </p>
                <blockquote className="mt-8 border-l border-accent/60 pl-5 font-display text-lg italic leading-snug tracking-tight">
                  “We measure our success not by lines of code, but by the value
                  we create for our clients.”
                </blockquote>
              </Reveal>
            </div>
          </div>

          {/* Trust statement */}
          <Reveal className="mt-20 border-t border-white/10 pt-14 md:mt-28">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <h3 className="display text-[clamp(1.8rem,3.6vw,2.75rem)]">
                  Why businesses choose SD CodeHub
                </h3>
                <p className="lede mt-5 max-w-2xl text-[0.95rem] md:text-base">
                  Our team combines technical excellence, design precision, and
                  transparent communication to deliver impactful software. From
                  startups to enterprises, we ensure every project reflects our
                  commitment to quality, trust, and innovation.
                </p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <CTA href={ENQUIRY_FORM} size="lg">
                  Let’s build together
                </CTA>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
