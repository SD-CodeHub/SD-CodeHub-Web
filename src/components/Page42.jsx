import {
  FaLightbulb,
  FaHandshake,
  FaChartLine,
  FaRegSmileBeam,
  FaRocket,
  FaShieldAlt,
  FaCog,
  FaCommentDots,
} from "react-icons/fa";
import Reveal from "./ui/Reveal";
import { Eyebrow, SectionHeader } from "./ui/Section";

const phases = [
  {
    n: "Phase 1",
    title: "The Vision & Kickoff",
    body: "It began with a simple idea — transforming a traditional workflow into a seamless, intelligent ecosystem. Our client approached us with a concept but no technical clarity. Through multiple discovery calls, we converted that idea into a roadmap powered by modern web architecture, AI automation, and human insight.",
    tag: "Clarity through Collaboration",
    tagIcon: FaLightbulb,
    asideIcon: FaHandshake,
    aside:
      "From vision boards to technical blueprints — every decision was made with the client, not for them.",
  },
  {
    n: "Phase 2",
    title: "Facing the Storm",
    body: "Midway through, we hit turbulence — unexpected API failures, data security conflicts, and shifting timelines. But instead of crumbling under pressure, our team rose stronger. We implemented backup workflows, automated deployments, and continuous testing to maintain product stability and client confidence.",
    tag: "Resilience in Every Line of Code",
    tagIcon: FaShieldAlt,
    asideIcon: FaCog,
    aside:
      "Every issue we faced became a lesson. We didn’t just fix problems — we future-proofed the entire system to make sure they never happened again.",
  },
  {
    n: "Phase 3",
    title: "Launch & Beyond",
    body: "When the platform went live, it wasn’t just a deployment — it was a moment of shared pride. The client’s confidence grew, and so did our relationship. Even post-launch, we continued to offer updates, insights, and performance audits to ensure their success stayed consistent.",
    tag: "Success that Scales with Time",
    tagIcon: FaChartLine,
    asideIcon: FaRocket,
    aside:
      "What started as a project became a partnership — one that continues to grow through innovation, feedback, and mutual respect.",
  },
];

const offers = [
  {
    icon: FaRegSmileBeam,
    title: "Client-Centric Approach",
    desc: "Every feature is designed around the client’s real-world goals and needs, not assumptions.",
  },
  {
    icon: FaCommentDots,
    title: "Strong Communication",
    desc: "Weekly updates, transparent reporting, and milestone reviews keep everyone aligned and confident.",
  },
  {
    icon: FaChartLine,
    title: "Continuous Improvement",
    desc: "We never stop learning — each project refines our process and elevates the next.",
  },
];

export default function Page42() {
  return (
    <div id="main">
      {/* ================= Page hero ================= */}
      <section className="relative overflow-hidden bg-ink pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="grid-field pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="shell relative">
          <Reveal>
            <Eyebrow>Work &amp; process</Eyebrow>
          </Reveal>

          <Reveal as="h1" delay={80} className="display mt-8 max-w-4xl text-[clamp(2.4rem,6.2vw,4.75rem)]">
            <span className="mask-line">
              <span>Every challenge became</span>
            </span>
            <span className="mask-line">
              <span style={{ transitionDelay: "100ms" }}>
                a chapter of <span className="text-accent">growth.</span>
              </span>
            </span>
          </Reveal>

          <Reveal delay={160}>
            <p className="lede mt-8 max-w-2xl text-base md:text-lg">
              At SD CodeHub, we treat every project as a story — one filled with
              challenges, breakthroughs, and the trust that binds it all
              together. This is how we built, learned, and delivered — without
              losing sight of what matters most: our client’s confidence.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= The three phases ================= */}
      <section className="rule bg-ink-2 py-20 md:py-28 lg:py-32">
        <div className="shell">
          <ol className="space-y-px">
            {phases.map((phase, i) => {
              const TagIcon = phase.tagIcon;
              const AsideIcon = phase.asideIcon;
              return (
                <Reveal
                  as="li"
                  key={phase.n}
                  delay={i * 60}
                  className="grid gap-10 border-t border-white/10 py-14 lg:grid-cols-12 lg:gap-16 lg:py-20"
                >
                  <div className="lg:col-span-7">
                    <p className="label text-[0.6rem]">
                      <span className="text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>{" "}
                      / {phase.n}
                    </p>
                    <h2 className="display mt-5 text-[clamp(1.7rem,3.6vw,2.6rem)]">
                      {phase.title}
                    </h2>
                    <p className="lede mt-6 max-w-xl text-[0.95rem] md:text-base">
                      {phase.body}
                    </p>
                    <p className="mt-8 inline-flex items-center gap-3 border border-white/15 px-4 py-2.5 font-mono text-xs tracking-wide text-accent">
                      <TagIcon aria-hidden="true" />
                      {phase.tag}
                    </p>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="relative h-full border border-white/12 bg-ink p-8 md:p-10">
                      <AsideIcon
                        className="text-2xl text-accent"
                        aria-hidden="true"
                      />
                      <p className="lede mt-6 text-[0.95rem]">{phase.aside}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ================= What we offer ================= */}
      <section className="rule bg-ink py-20 md:py-28 lg:py-32">
        <div className="shell">
          <SectionHeader
            eyebrow="Takeaways"
            title="What we offer"
            lede="At SD CodeHub, we deliver more than just digital solutions — we provide scalable innovation, reliable performance, and long-term partnerships. Every project we take on reflects our passion for technology and our commitment to helping businesses grow, adapt, and succeed in a competitive world."
          />

          <div className="mt-16 grid gap-px border border-white/10 bg-white/10 md:mt-20 md:grid-cols-3">
            {offers.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.title}
                  delay={i * 90}
                  className="group bg-ink p-8 transition-colors duration-500 hover:bg-ink-2 md:p-10"
                >
                  <Icon
                    className="text-2xl text-[var(--muted)] transition-colors duration-500 group-hover:text-accent"
                    aria-hidden="true"
                  />
                  <h3 className="mt-7 font-display text-xl tracking-tight">
                    {item.title}
                  </h3>
                  <p className="lede mt-3 text-sm">{item.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
