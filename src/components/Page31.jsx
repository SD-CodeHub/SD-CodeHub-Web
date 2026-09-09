import { useState, useId } from "react";
import Page16 from "./Page16";
import Reveal from "./ui/Reveal";
import CTA, { ENQUIRY_FORM } from "./ui/Button";
import { SectionHeader } from "./ui/Section";
import Img1 from "../assets/aiautomationserviece.webp";
import Img2 from "../assets/mernservieces4.webp";
import Img3 from "../assets/fullstackservieces.jpg";
import Img4 from "../assets/uiuxservieces.jpg";
import Img5 from "../assets/consultingservieses.webp";

const services = [
  {
    title: "AI Automation & Integration",
    desc: "Empower your business with AI-driven automation and seamless system integrations. We develop intelligent workflows that boost efficiency, minimize manual work, and connect your tools for maximum productivity.",
    img: Img1,
    details: [
      "Process automation using AI tools like ChatGPT & Zapier",
      "System integration for CRM, ERP, and APIs",
      "Data workflow automation and analytics pipelines",
      "Business process optimization consulting",
    ],
  },
  {
    title: "MERN Stack Development",
    desc: "We specialize in end-to-end MERN stack solutions — from building robust APIs to crafting responsive UIs. Our scalable, high-performance web apps deliver exceptional user experiences and fast performance.",
    img: Img2,
    details: [
      "Full-stack web app development (MongoDB, Express, React, Node.js)",
      "API design and backend architecture",
      "UI/UX implementation with React and Tailwind",
      "Deployment, scaling, and optimization",
    ],
  },
  {
    title: "Full-Stack Solutions",
    desc: "From frontend interfaces to backend systems, we deliver complete full-stack development solutions. Our team ensures seamless integration, security, and maintainability across all platforms and technologies.",
    img: Img3,
    details: [
      "Frontend + backend integrated systems",
      "Cloud deployment and CI/CD setup",
      "Microservice architecture design",
      "Security and performance consulting",
    ],
  },
  {
    title: "UI/UX Design & Prototyping",
    desc: "Create stunning, user-centered designs with our UI/UX expertise. We focus on usability, aesthetics, and prototyping to ensure that every interaction feels intuitive and visually engaging.",
    img: Img4,
    details: [
      "User research and journey mapping",
      "Wireframing and Figma prototyping",
      "UI design systems and accessibility",
      "Design consultation and testing",
    ],
  },
  {
    title: "Technical Consulting",
    desc: "Get expert technical guidance to plan, optimize, and scale your digital ecosystem. We help you choose the right technologies, streamline architecture, and align IT strategies with business goals.",
    img: Img5,
    details: [
      "Technology stack recommendation",
      "Architecture design and scalability",
      "Cost optimization and cloud setup",
      "DevOps and performance reviews",
    ],
  },
];

function ServiceRow({ service, index }) {
  const [open, setOpen] = useState(false);
  const uid = useId();
  const reverse = index % 2 === 1;

  return (
    <Reveal
      as="article"
      className="border-t border-white/10 py-14 first:border-t-0 md:py-20"
    >
      <div
        className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
          reverse ? "lg:[&>figure]:order-2" : ""
        }`}
      >
        <figure className="group relative overflow-hidden border border-white/12 bg-ink-2">
          <img
            src={service.img}
            alt={`${service.title} at SD CodeHub`}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent"
            aria-hidden="true"
          />
        </figure>

        <div>
          <p className="label text-[0.6rem]">
            <span className="text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>{" "}
            / Service
          </p>

          <h3 className="display mt-5 text-[clamp(1.6rem,3.2vw,2.4rem)]">
            {service.title}
          </h3>

          <p className="lede mt-5 max-w-xl text-[0.95rem] md:text-base">
            {service.desc}
          </p>

          <button
            type="button"
            aria-expanded={open}
            aria-controls={`${uid}-detail`}
            onClick={() => setOpen((v) => !v)}
            className="group mt-8 inline-flex items-center gap-3 border border-white/20 px-6 py-3 text-sm transition-colors duration-400 hover:border-accent hover:text-accent"
          >
            {open ? "Hide details" : "What we cover"}
            <span
              aria-hidden="true"
              className={`transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${
                open ? "rotate-180" : ""
              }`}
            >
              ↓
            </span>
          </button>

          <div id={`${uid}-detail`} hidden={!open}>
            <div className="mt-8 border-l border-accent/50 pl-6 fade-up">
              <p className="label text-[0.6rem]">You can consult us for</p>
              <ul className="mt-5 space-y-3">
                {service.details.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm text-[var(--muted)]"
                  >
                    <span
                      className="mt-2 h-px w-4 shrink-0 bg-accent/70"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <CTA href={ENQUIRY_FORM} size="md">
                  Enquire about this service
                </CTA>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Page31() {
  return (
    <>
      <section className="rule bg-ink py-20 md:py-28 lg:py-32">
        <div className="shell">
          <SectionHeader
            index="02"
            eyebrow="Capabilities"
            title="Services we provide"
            lede="Empowering your business with cutting-edge software, scalable systems, and intelligent automation — designed for performance and reliability."
          />

          <div className="mt-16 md:mt-20">
            {services.map((service, i) => (
              <ServiceRow key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Page16 />
    </>
  );
}
