import { useState, useEffect } from "react";
import {
  FaGlobe,
  FaRocket,
  FaTools,
  FaBusinessTime,
  FaBuilding,
  FaCode,
} from "react-icons/fa";
import Page16 from "../components/Page16";
import Reveal from "../components/ui/Reveal";
import CTA, { ENQUIRY_FORM } from "../components/ui/Button";
import { Eyebrow, SectionHeader } from "../components/ui/Section";

const plans = [
  {
    title: "Starter Showcase Plan",
    price: "₹7,999",
    icon: FaGlobe,
    description:
      "Perfect for small shops or local businesses who just want to display their products online.",
    keyPoints: [
      "Up to 5 pages (Home, About, Products, Contact)",
      "Mobile-friendly layout",
      "WhatsApp / Call-to-action button",
      "1-year domain & basic hosting setup",
    ],
    details: {
      overview:
        "A simple yet professional website for small stores like pet shops, salons, or boutiques that want to showcase products and contact details attractively.",
      stack:
        "React.js for frontend | Node.js backend (if required) | MongoDB for optional content | Hosted on Vercel/Netlify.",
      workflow: [
        "Collect content (images, text) and understand requirements.",
        "Design a clean mobile-first layout.",
        "Build responsive static pages and connect contact forms.",
        "Deploy to hosting and handover simple update instructions.",
      ],
      breakdown: [
        "Domain & Hosting Setup: ₹1,000–₹2,000",
        "Frontend Development: ₹2,000",
        "Backend Setup (if required): ₹1,000",
        "Design & Testing: ₹1,000",
      ],
      addons: [
        "WhatsApp chat integration",
        "Basic SEO setup",
        "Color/theme customization",
      ],
      bestFor:
        "Small local shops and individual professionals who need a clean online showcase.",
    },
  },
  {
    title: "Business Growth Plan",
    price: "₹11,999",
    icon: FaBusinessTime,
    description:
      "For growing businesses who want a stronger online presence and better engagement.",
    keyPoints: [
      "Up to 10 pages",
      "Contact form + Google Map",
      "Basic on-page SEO",
      "1-month free content updates",
    ],
    details: {
      overview:
        "Ideal for small companies aiming to attract customers through enhanced design, SEO, and engagement tools.",
      stack:
        "React.js + Node.js | MongoDB for contact data | SEO-friendly structure | Hosted on Netlify or AWS.",
      workflow: [
        "Understand audience & competitors.",
        "Design and develop up to 10 responsive pages.",
        "Implement contact forms, map and inquiry system.",
        "On-page SEO and deployment to domain.",
      ],
      breakdown: [
        "Domain & Hosting: ₹1,000–₹2,000",
        "Design & Development: ₹4,000",
        "SEO Setup: ₹1,000",
        "Testing & Maintenance: ₹2,000",
      ],
      addons: ["Social media links", "Analytics setup", "Blog section"],
      bestFor:
        "Small and medium businesses wanting increased traffic and professional presentation.",
    },
  },
  {
    title: "Dynamic Admin Plan",
    price: "₹14,999 – ₹19,999",
    icon: FaTools,
    featured: true,
    description:
      "For businesses that want to manage products or content using their own admin panel.",
    keyPoints: [
      "Admin dashboard (add/edit/delete)",
      "Product statuses (Arriving Soon, Featured)",
      "Secure login for owner",
      "1-month maintenance support",
    ],
    details: {
      overview:
        "This plan gives business owners complete control — add, edit, or delete products anytime through a secure admin dashboard.",
      stack:
        "MERN Stack (MongoDB, Express, React, Node.js) | JWT authentication | Hosted on cloud platforms.",
      workflow: [
        "Gather admin needs and product categories.",
        "Design user-friendly admin with secure login.",
        "Connect dashboard to database for live updates.",
        "Test, deploy and provide admin guide.",
      ],
      breakdown: [
        "Domain & Hosting: ₹1,500",
        "Database Setup: ₹2,000",
        "Dashboard & CRUD Development: ₹7,000–₹8,000",
        "Testing & Support: ₹2,000",
      ],
      addons: [
        "AI chatbot for customer support",
        "Sales analytics dashboard",
        "Product recommendation AI",
      ],
      bestFor:
        "Shops that frequently update products (pet stores, boutiques, catalogs).",
    },
  },
  {
    title: "Professional Brand Plan",
    price: "₹24,999+",
    icon: FaRocket,
    description:
      "For brands and studios that want a premium design and advanced web features.",
    keyPoints: [
      "Custom design & animations",
      "Analytics & reports",
      "Monthly content updates",
      "Advanced SEO",
    ],
    details: {
      overview:
        "A high-end solution for established businesses and studios wanting a unique brand identity with animations, analytics, and SEO optimization.",
      stack:
        "React.js + Node.js backend | MongoDB + AWS | Integrated analytics & SEO tools.",
      workflow: [
        "Brand strategy and planning.",
        "UI/UX design with animations.",
        "Develop dynamic pages and analytics integration.",
        "Long-term testing and maintenance setup.",
      ],
      breakdown: [
        "Domain & Hosting: ₹2,000",
        "Design & Animation: ₹6,000",
        "Backend & Integration: ₹8,000",
        "SEO & Analytics: ₹4,000",
        "Testing & Maintenance: ₹3,000",
      ],
      addons: ["AI chatbot", "Custom animations", "SEO audit reports"],
      bestFor:
        "Creative agencies, studios, or brands needing a premium online presence.",
    },
  },
  {
    title: "Enterprise Plan",
    price: "₹49,999+",
    icon: FaBuilding,
    description:
      "For large businesses needing complex dashboards or custom web integrations.",
    keyPoints: [
      "Custom backend & APIs",
      "Scalable cloud hosting",
      "Automation and reporting",
      "Dedicated support",
    ],
    details: {
      overview:
        "Tailored for enterprises requiring large-scale dashboards, user management systems, APIs, or automation.",
      stack:
        "Java (Spring Boot) or Python (Django/FastAPI) backend | React frontend | MongoDB/Postgres | Cloud hosting.",
      workflow: [
        "Requirement gathering & project planning.",
        "Backend architecture & API design.",
        "Frontend dashboard development.",
        "AI/automation integration and scalable deployment.",
      ],
      breakdown: [
        "Cloud & Server Setup: ₹8,000",
        "Backend Development: ₹15,000",
        "Frontend Dashboard: ₹10,000",
        "Testing & QA: ₹5,000",
        "Maintenance & Support: ₹8,000",
      ],
      addons: ["Automation systems", "AI-driven analytics", "Custom APIs"],
      bestFor:
        "Large businesses needing automation, scalability and long-term technical support.",
    },
  },
  {
    title: "Custom Code Plan",
    price: "Based on requirements",
    icon: FaCode,
    description:
      "For clients who already have a website and want to modify, redesign, or add new features.",
    keyPoints: [
      "Code audit & quick fix",
      "UI/UX updates",
      "Feature additions or bug fixes",
      "AI/chatbot integration (optional)",
    ],
    details: {
      overview:
        "If you already have a website but want SD Code Hub to improve, debug, or modernize it — this plan is perfect.",
      stack:
        "We adapt to your stack: React, Node, Java, or Python. AI add-ons built with Python/Java as needed.",
      workflow: [
        "Audit current code and performance.",
        "List required fixes or enhancements.",
        "Implement changes and test thoroughly.",
        "Deploy updated site and provide notes.",
      ],
      breakdown: [
        "Audit & Discussion: ₹500–₹1,000",
        "UI/UX Redesign: ₹2,000–₹5,000",
        "Code Optimization: ₹2,000–₹4,000",
        "Feature Additions: ₹3,000–₹6,000",
      ],
      addons: ["Speed optimization", "Error fixes", "AI chatbot integration"],
      bestFor:
        "Clients who want to upgrade or enhance their existing websites without a full rebuild.",
    },
  },
];

const howWeWork = [
  { step: "01", title: "Discuss & Plan", desc: "We understand your goals and prepare a tailored plan." },
  { step: "02", title: "Design & Build", desc: "We design modern, responsive layouts and develop using the best tech stack." },
  { step: "03", title: "Test & Deploy", desc: "Your project is tested across devices and deployed to hosting." },
  { step: "04", title: "Support & Scale", desc: "We stay available for updates, analytics, and scaling needs." },
];

/** Slide-over panel holding the full breakdown for one plan. */
function PlanDrawer({ plan, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const Icon = plan.icon;
  const blocks = [
    { title: "Overview", body: <p className="lede text-sm">{plan.details.overview}</p> },
    {
      title: "Tech stack used",
      body: (
        <>
          <p className="lede text-sm">{plan.details.stack}</p>
          <p className="mt-2 text-xs text-[var(--muted)]/80">
            We use MERN primarily. For AI/chatbots or advanced backend work we
            use Python or Java as appropriate.
          </p>
        </>
      ),
    },
    { title: "Workflow", list: plan.details.workflow },
    {
      title: "Price distribution (example)",
      list: plan.details.breakdown,
      note: "These are example distributions to help you understand where costs go. Final quote depends on scope.",
    },
    {
      title: "Add-ons & AI options",
      list: plan.details.addons,
      note: "We can build chatbots, recommendation engines, or simple AI features using Python (Flask/FastAPI) or Java-based services where appropriate.",
    },
    { title: "Best for", body: <p className="lede text-sm">{plan.details.bestFor}</p> },
  ];

  return (
    <div className="fixed inset-0 z-[100]">
      <button
        type="button"
        aria-label="Close plan details"
        onClick={onClose}
        className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${plan.title} details`}
        className="absolute inset-y-0 right-0 flex w-full max-w-xl flex-col border-l border-white/12 bg-ink-2 fade-up"
      >
        <div className="flex items-start justify-between gap-6 border-b border-white/10 p-6 md:p-8">
          <div>
            <Icon className="text-2xl text-accent" aria-hidden="true" />
            <h3 className="display mt-4 text-2xl">{plan.title}</h3>
            <p className="mt-2 font-mono text-sm text-accent">{plan.price}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="label transition-colors hover:text-accent"
          >
            Close ✕
          </button>
        </div>

        <div className="scrollbar-hide flex-1 overflow-y-auto p-6 md:p-8">
          <div className="space-y-8">
            {blocks.map((block) => (
              <section key={block.title}>
                <h4 className="label text-[0.6rem]">{block.title}</h4>
                <div className="mt-3">
                  {block.body}
                  {block.list && (
                    <ul className="space-y-2.5">
                      {block.list.map((item) => (
                        <li key={item} className="flex gap-3 text-sm text-[var(--muted)]">
                          <span
                            className="mt-2 h-px w-4 shrink-0 bg-accent/70"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {block.note && (
                    <p className="mt-3 text-xs text-[var(--muted)]/80">{block.note}</p>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 p-6 md:p-8">
          <CTA href={ENQUIRY_FORM} className="w-full">
            Request a quote
          </CTA>
        </div>
      </div>
    </div>
  );
}

export default function Page5() {
  const [selected, setSelected] = useState(null);

  return (
    <div id="main">
      {/* ================= Hero ================= */}
      <section className="relative overflow-hidden bg-ink pb-16 pt-36 md:pb-20 md:pt-44">
        <div className="grid-field pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="shell relative">
          <Reveal>
            <Eyebrow>Pricing</Eyebrow>
          </Reveal>
          <Reveal as="h1" delay={80} className="display mt-8 max-w-3xl text-[clamp(2.4rem,6.2vw,4.75rem)]">
            <span className="mask-line">
              <span>Our website plans</span>
            </span>
          </Reveal>
          <Reveal delay={160}>
            <p className="lede mt-8 max-w-2xl text-base md:text-lg">
              Built for every business size — from local shops to enterprises.
              Simple, transparent pricing, crafted to help every business go
              digital with ease.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= Plans ================= */}
      <section className="bg-ink pb-20 md:pb-28 lg:pb-32">
        <div className="shell">
          <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan, i) => {
              const Icon = plan.icon;
              return (
                <Reveal
                  key={plan.title}
                  delay={(i % 3) * 80}
                  className={`group relative flex flex-col p-8 transition-colors duration-500 md:p-10 ${
                    plan.featured ? "bg-ink-3" : "bg-ink hover:bg-ink-2"
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute right-0 top-0 bg-accent px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-ink">
                      Most chosen
                    </span>
                  )}

                  <Icon
                    className="text-2xl text-[var(--muted)] transition-colors duration-500 group-hover:text-accent"
                    aria-hidden="true"
                  />

                  <h2 className="mt-7 font-display text-xl tracking-tight">
                    {plan.title}
                  </h2>
                  <p className="lede mt-3 text-sm">{plan.description}</p>

                  <p className="display mt-7 text-3xl text-accent">{plan.price}</p>

                  <ul className="mt-7 flex-1 space-y-3 border-t border-white/10 pt-7">
                    {plan.keyPoints.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-[var(--muted)]">
                        <span
                          className="mt-2 h-px w-4 shrink-0 bg-accent/70"
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => setSelected(plan)}
                    className="mt-8 inline-flex items-center justify-between gap-3 border border-white/20 px-5 py-3 text-sm transition-colors duration-400 hover:border-accent hover:text-accent"
                  >
                    See full breakdown
                    <span aria-hidden="true">→</span>
                  </button>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-8 text-sm text-[var(--muted)]">
            <p>
              Not sure which plan fits?{" "}
              <a
                href={ENQUIRY_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-accent"
              >
                Tell us about your project
              </a>{" "}
              and we’ll recommend one.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= How we work ================= */}
      <section className="rule bg-ink-2 py-20 md:py-28 lg:py-32">
        <div className="shell">
          <SectionHeader
            eyebrow="Delivery"
            title="How we work"
            lede="Our workflow is simple and efficient — designed to help businesses go live faster and smarter."
          />

          <ol className="mt-16 grid gap-px border border-white/10 bg-white/10 md:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {howWeWork.map((item, i) => (
              <Reveal
                as="li"
                key={item.step}
                delay={i * 80}
                className="group bg-ink-2 p-8 transition-colors duration-500 hover:bg-ink-3"
              >
                <span className="label text-[0.6rem] text-accent">{item.step}</span>
                <h3 className="mt-6 font-display text-lg tracking-tight">
                  {item.title}
                </h3>
                <p className="lede mt-3 text-sm">{item.desc}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <Page16 />

      {selected && (
        <PlanDrawer plan={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
