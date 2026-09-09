import { FaLaptopCode, FaChartLine, FaRocket, FaHandshake } from "react-icons/fa";
import Reveal from "../components/ui/Reveal";
import CTA, { CAREERS_FORM } from "../components/ui/Button";
import { Eyebrow, SectionHeader } from "../components/ui/Section";

const reasons = [
  {
    icon: FaHandshake,
    title: "Real Industry Exposure",
    desc: "Work on live client projects and learn how real businesses use technology to grow.",
  },
  {
    icon: FaChartLine,
    title: "Career Growth",
    desc: "We mentor interns and contributors to become independent professionals or join us long-term.",
  },
  {
    icon: FaRocket,
    title: "Innovation First",
    desc: "We experiment, build fast, and focus on learning modern stacks like MERN, AI, and automation.",
  },
];

const roles = [
  { title: "Frontend Developer", type: "MERN / React", desc: "Work with React.js and Tailwind to build dynamic, responsive UIs." },
  { title: "Backend Developer", type: "Node.js / Express", desc: "Build APIs, integrate databases, and ensure smooth backend logic." },
  { title: "UI/UX Designer", type: "Figma / Adobe XD", desc: "Design modern and user-friendly layouts for dashboards and apps." },
  { title: "AI & Automation", type: "Python / AI Tools", desc: "Work on chatbots, analytics dashboards, and automation projects." },
  { title: "Sales & Marketing", type: "Remote / Flexible", desc: "Help expand SD CodeHub’s reach through campaigns and lead generation." },
  { title: "Content Writer", type: "Remote / Part-Time", desc: "Write content for websites, blogs, and tech-related posts." },
];

const process = [
  { num: "01", title: "Apply", desc: "Fill out our simple Google Form with your details and skills." },
  { num: "02", title: "Connect", desc: "If shortlisted, we’ll schedule a short discussion or task." },
  { num: "03", title: "Collaborate", desc: "Join real-world projects, guided by our mentors." },
  { num: "04", title: "Grow", desc: "Build your portfolio and gain live project experience." },
];

export default function Page6() {
  return (
    <div id="main">
      {/* ================= Hero ================= */}
      <section className="relative overflow-hidden bg-ink pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="grid-field pointer-events-none absolute inset-0" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -top-32 right-1/4 h-[30rem] w-[30rem] rounded-full bg-accent/8 blur-[150px]"
          aria-hidden="true"
        />
        <div className="shell relative">
          <Reveal>
            <Eyebrow>Careers</Eyebrow>
          </Reveal>

          <Reveal as="h1" delay={80} className="display mt-8 max-w-4xl text-[clamp(2.4rem,6.2vw,4.75rem)]">
            <span className="mask-line">
              <span>Grow your career</span>
            </span>
            <span className="mask-line">
              <span style={{ transitionDelay: "100ms" }}>
                with <span className="text-accent">SD CodeHub.</span>
              </span>
            </span>
          </Reveal>

          <Reveal delay={160}>
            <p className="lede mt-8 max-w-2xl text-base md:text-lg">
              Join a team of innovators, developers, and designers passionate
              about building impactful digital solutions. Whether you’re a
              fresher or a learner — we value skills, creativity, and drive.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10">
              <CTA href={CAREERS_FORM} size="lg">
                Apply now
              </CTA>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= Why join ================= */}
      <section className="rule bg-ink-2 py-20 md:py-28 lg:py-32">
        <div className="shell">
          <SectionHeader
            index="01"
            eyebrow="Why us"
            title="Why join SD CodeHub?"
            lede="We’re not just another tech team — we’re a community of learners and builders shaping the digital future together."
          />

          <div className="mt-16 grid gap-px border border-white/10 bg-white/10 md:mt-20 md:grid-cols-3">
            {reasons.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.title}
                  delay={i * 90}
                  className="group bg-ink-2 p-8 transition-colors duration-500 hover:bg-ink-3 md:p-10"
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

      {/* ================= Open positions ================= */}
      <section className="rule bg-ink py-20 md:py-28 lg:py-32">
        <div className="shell">
          <SectionHeader
            index="02"
            eyebrow="Openings"
            title="Open positions"
            lede="We’re looking for talented learners, creators, and problem-solvers eager to collaborate and grow with us."
          />

          <ul className="mt-16 divide-y divide-white/10 border-y border-white/10 md:mt-20">
            {roles.map((job, i) => (
              <Reveal as="li" key={job.title} delay={i * 55}>
                <a
                  href={CAREERS_FORM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid items-baseline gap-3 py-7 transition-colors duration-300 hover:text-accent md:grid-cols-12 md:gap-6"
                >
                  <span className="label text-[0.6rem] md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-xl tracking-tight md:col-span-4 md:text-2xl">
                    {job.title}
                  </span>
                  <span className="font-mono text-xs text-[var(--muted)] md:col-span-3">
                    {job.type}
                  </span>
                  <span className="text-sm text-[var(--muted)] md:col-span-3">
                    {job.desc}
                  </span>
                  <span
                    aria-hidden="true"
                    className="hidden text-right transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-1 md:col-span-1 md:block"
                  >
                    →
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-8 flex items-center gap-3 text-sm text-[var(--muted)]">
            <FaLaptopCode className="text-accent" aria-hidden="true" />
            <p>Every role above applies through the same form.</p>
          </Reveal>
        </div>
      </section>

      {/* ================= Process ================= */}
      <section className="rule bg-ink-2 py-20 md:py-28 lg:py-32">
        <div className="shell">
          <SectionHeader
            index="03"
            eyebrow="Hiring"
            title="How we work"
            lede="We keep things simple, transparent, and growth-focused — giving every team member the freedom to learn and lead."
          />

          <ol className="mt-16 grid gap-px border border-white/10 bg-white/10 md:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <Reveal
                as="li"
                key={step.num}
                delay={i * 80}
                className="group bg-ink-2 p-8 transition-colors duration-500 hover:bg-ink-3"
              >
                <span className="label text-[0.6rem] text-accent">{step.num}</span>
                <h3 className="mt-6 font-display text-lg tracking-tight">
                  {step.title}
                </h3>
                <p className="lede mt-3 text-sm">{step.desc}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ================= Apply ================= */}
      <section
        id="contact-form"
        className="rule relative overflow-hidden bg-ink py-24 md:py-32"
      >
        <div className="grid-field pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="shell relative">
          <Reveal as="h2" className="display max-w-3xl text-[clamp(2.2rem,5.4vw,4rem)]">
            Interested in joining us?
          </Reveal>
          <Reveal delay={100}>
            <p className="lede mt-6 max-w-xl text-base md:text-lg">
              Fill out the form to apply for internships or collaborations.
              We’ll get back to you soon.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-10">
              <CTA href={CAREERS_FORM} size="lg">
                Apply to SD CodeHub
              </CTA>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
