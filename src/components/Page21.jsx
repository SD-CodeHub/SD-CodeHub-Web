import {
  FaBullseye,
  FaRocket,
  FaUsers,
  FaCommentDots,
  FaPaintBrush,
  FaCode,
  FaCheckCircle,
  FaHeadset,
  FaLaptopCode,
  FaGraduationCap,
  FaShoppingCart,
  FaBuilding,
  FaHospital,
  FaChartLine,
} from "react-icons/fa";
import Page16 from "./Page16";
import Reveal from "./ui/Reveal";
import Counter from "./ui/Counter";
import Accordion from "./ui/Accordion";
import CTA from "./ui/Button";
import { Eyebrow, SectionHeader } from "./ui/Section";

const stats = [
  { value: "20+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "10+", label: "Industry Partners" },
  { value: "24/7", label: "Support Available" },
];

const workflow = [
  { step: "Discussion", desc: "We understand your vision, business, and goals.", icon: FaCommentDots },
  { step: "Design", desc: "Our team creates modern UI/UX mockups for your approval.", icon: FaPaintBrush },
  { step: "Development", desc: "We code your website using latest technologies (MERN / React).", icon: FaCode },
  { step: "Testing & Launch", desc: "We test across devices and deploy it smoothly.", icon: FaCheckCircle },
  { step: "Support", desc: "We provide ongoing updates, security, and assistance.", icon: FaHeadset },
];

const values = [
  {
    icon: FaBullseye,
    title: "Mission",
    points: [
      "Empower every business with smart, scalable digital solutions.",
      "Deliver affordable websites and AI-powered tools with impact.",
      "Transform local startups into recognized online brands.",
    ],
  },
  {
    icon: FaRocket,
    title: "Vision",
    points: [
      "To lead modern web and AI innovation for every industry.",
      "Focus on automation, usability, and long-term scalability.",
      "Make technology simple, human, and result-driven.",
    ],
  },
  {
    icon: FaUsers,
    title: "Values",
    points: [
      "Transparency in every step.",
      "Commitment to client growth and satisfaction.",
      "Innovation through teamwork and learning.",
    ],
  },
];

const industries = [
  {
    title: "Tech Startups",
    desc: "Helping startups go from idea to launch with fast, scalable MVPs built using MERN and AI tools.",
    icon: FaLaptopCode,
  },
  {
    title: "Education",
    desc: "Creating e-learning platforms, dashboards, and LMS systems that make learning accessible and engaging.",
    icon: FaGraduationCap,
  },
  {
    title: "E-Commerce",
    desc: "Building secure, high-performance online stores with personalized recommendations and analytics.",
    icon: FaShoppingCart,
  },
  {
    title: "Real Estate",
    desc: "Developing property listing platforms, automation tools, and CRM systems for agents and builders.",
    icon: FaBuilding,
  },
  {
    title: "Healthcare",
    desc: "Designing health portals and AI-based tracking systems for clinics and wellness startups.",
    icon: FaHospital,
  },
  {
    title: "Finance & Automation",
    desc: "Delivering smart dashboards, automation bots, and AI analytics tools for modern fintech growth.",
    icon: FaChartLine,
  },
];

const faqs = [
  {
    q: "How long does it take to complete a project?",
    a: "Project duration depends on the complexity — typically 1–3 weeks for standard websites and 4–6 weeks for advanced AI or full-stack apps.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes, we provide 24/7 technical support and maintenance to ensure smooth performance after deployment.",
  },
  {
    q: "What technologies do you use?",
    a: "We primarily use MERN Stack (MongoDB, Express, React, Node), along with Java, Python, and AI/ML frameworks when needed.",
  },
  {
    q: "Can I request custom AI or automation features?",
    a: "Absolutely! We specialize in building tailored automation, analytics dashboards, and AI-powered business tools.",
  },
];

export default function AboutPage() {
  return (
    <div id="main">
      {/* ================= Hero ================= */}
      <section className="relative overflow-hidden bg-ink pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="grid-field pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="shell relative">
          <Reveal>
            <Eyebrow>About SD CodeHub</Eyebrow>
          </Reveal>

          <Reveal as="h1" delay={80} className="display mt-8 max-w-4xl text-[clamp(2.6rem,6.6vw,5rem)]">
            <span className="mask-line">
              <span>Building the future,</span>
            </span>
            <span className="mask-line">
              <span style={{ transitionDelay: "100ms" }}>
                one <span className="text-accent">solution</span> at a time.
              </span>
            </span>
          </Reveal>

          <Reveal delay={160}>
            <p className="lede mt-8 max-w-2xl text-base md:text-lg">
              We turn ideas into impactful digital products using the MERN
              stack, AI tools, and creative design thinking. Founded by
              passionate developers — built for real business growth.
            </p>
          </Reveal>

          <dl className="mt-16 grid grid-cols-2 gap-px border border-white/10 bg-white/10 md:mt-20 md:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80} className="bg-ink p-6 md:p-8">
                <dt className="label text-[0.6rem]">{stat.label}</dt>
                <dd className="display mt-3 text-4xl md:text-5xl">
                  <Counter value={stat.value} />
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* ================= How we work ================= */}
      <section className="rule bg-ink-2 py-20 md:py-28 lg:py-32">
        <div className="shell">
          <SectionHeader
            index="01"
            eyebrow="Process"
            title="How we work"
            lede="Our streamlined workflow ensures every project is built with clarity, quality, and precision — from idea to launch."
          />

          <ol className="mt-16 grid gap-px border border-white/10 bg-white/10 md:mt-20 md:grid-cols-5">
            {workflow.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal
                  as="li"
                  key={item.step}
                  delay={i * 70}
                  className="group relative flex flex-col bg-ink-2 p-7 transition-colors duration-500 hover:bg-ink-3"
                >
                  <span className="label text-[0.6rem] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon
                    className="mt-6 text-2xl text-[var(--muted)] transition-colors duration-500 group-hover:text-accent"
                    aria-hidden="true"
                  />
                  <h3 className="mt-6 font-display text-lg tracking-tight">
                    {item.step}
                  </h3>
                  <p className="lede mt-3 text-sm">{item.desc}</p>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ================= What drives us ================= */}
      <section className="rule bg-ink py-20 md:py-28 lg:py-32">
        <div className="shell">
          <SectionHeader
            index="02"
            eyebrow="Principles"
            title="What drives us"
            lede="Our mission, vision, and values guide how we build — every website, app, and AI system is designed to create measurable business impact."
          />

          <div className="mt-16 grid gap-px border border-white/10 bg-white/10 md:mt-20 md:grid-cols-3">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <Reveal key={val.title} delay={i * 90} className="card border-0 p-8 md:p-10">
                  <div className="flex items-center gap-4">
                    <Icon className="text-xl text-accent" aria-hidden="true" />
                    <h3 className="font-display text-xl tracking-tight">
                      {val.title}
                    </h3>
                  </div>
                  <ul className="mt-7 space-y-4">
                    {val.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-[var(--muted)]">
                        <span className="mt-2 h-px w-4 shrink-0 bg-accent/70" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= Industries ================= */}
      <section className="rule bg-ink-2 py-20 md:py-28 lg:py-32">
        <div className="shell">
          <SectionHeader
            index="03"
            eyebrow="Sectors"
            title="Industries we serve"
            lede="At SD CodeHub, we build customized digital solutions for diverse industries — empowering every business to grow, automate, and scale with technology."
          />

          <div className="mt-16 grid gap-px border border-white/10 bg-white/10 md:mt-20 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <Reveal
                  key={industry.title}
                  delay={(i % 3) * 80}
                  className="group bg-ink-2 p-8 transition-colors duration-500 hover:bg-ink-3 md:p-10"
                >
                  <Icon
                    className="text-2xl text-[var(--muted)] transition-colors duration-500 group-hover:text-accent"
                    aria-hidden="true"
                  />
                  <h3 className="mt-7 font-display text-xl tracking-tight">
                    {industry.title}
                  </h3>
                  <p className="lede mt-3 text-sm">{industry.desc}</p>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-16 flex flex-col items-start gap-6 border-t border-white/10 pt-12 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="display text-2xl md:text-3xl">
                Interested in working with us?
              </h3>
              <p className="lede mt-3 max-w-xl text-sm md:text-base">
                We’re always open to collaborating with talented individuals and
                innovative businesses.
              </p>
            </div>
            <CTA to="/careers" size="lg">
              See open roles
            </CTA>
          </Reveal>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="rule bg-ink py-20 md:py-28 lg:py-32">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <SectionHeader
                  index="04"
                  eyebrow="Questions"
                  title="Frequently asked questions"
                  lede="Get quick answers to common queries about our process and services."
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <Reveal>
                <Accordion items={faqs} />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Page16 />
    </div>
  );
}
