import { useState } from "react";
import { FaLock } from "react-icons/fa";
import Page16 from "./Page16";
import Reveal from "./ui/Reveal";
import Lightbox from "./ui/Lightbox";
import { SectionHeader } from "./ui/Section";
import Food1 from "../assets/Food1.jpg";
import Food2 from "../assets/Food2.jpg";
import Food3 from "../assets/Food3.jpg";
import Servilance0 from "../assets/Servilance0.jpg";
import Servilance1 from "../assets/Servilance1.jpg";
import Servilance2 from "../assets/Servilance2.jpg";
import Servilance3 from "../assets/Servilace3.jpg";
import Automation1 from "../assets/Automation1.jpg";
import Automation2 from "../assets/Automation2.jpg";
import Automation3 from "../assets/Automation3.jpg";
import Trip1 from "../assets/Trip1.jpg";
import Trip2 from "../assets/Trip2.jpg";
import Trip3 from "../assets/Trip3.jpg";
import Trip4 from "../assets/Trip4.jpg";
import Trip5 from "../assets/Trip5.jpg";
import Invest1 from "../assets/investment1.png";
import Invest2 from "../assets/investment2.png";
import Invest3 from "../assets/investment3.png";
import Invest4 from "../assets/investment4.png";
import PT1 from "../assets/parents1.png";
import PT2 from "../assets/parents2.png";
import PT3 from "../assets/parents3.png";
import PT4 from "../assets/parents4.png";
import PT5 from "../assets/parents5.png";
import Vendor1 from "../assets/vendor1.jpg";
import Vendor2 from "../assets/vendor2.jpg";
import Vendor3 from "../assets/vendor3.jpg";
import Vendor4 from "../assets/vendor4.jpg";
import Vendor5 from "../assets/vendor5.jpg";
import Vendor6 from "../assets/vendor6.jpg";

const projects = [
  {
    title: "Parents–Teacher Communication Portal",
    category: "EdTech / Web Platform",
    desc: "A secure web platform designed to enhance communication between parents and teachers. It features student progress tracking, attendance monitoring, report generation, and direct messaging. The system promotes transparency and collaboration to support student growth and academic success.",
    images: [PT1, PT2, PT3, PT4, PT5],
  },
  {
    title: "Vendor Allocation & Management System",
    category: "Enterprise / Web Application",
    desc: "A web-based solution that streamlines vendor allocation, performance tracking, and contract management. It automates vendor selection based on predefined criteria, optimizes resource distribution, and provides analytics dashboards for better procurement decisions and operational efficiency.",
    images: [Vendor1, Vendor2, Vendor3, Vendor4, Vendor5, Vendor6],
  },
  {
    title: "Food Delivery App with Real-Time Tracking",
    category: "FoodTech / Mobile App",
    desc: "A mobile app for ordering food with real-time delivery tracking, integrated payment gateways, and personalized recommendations based on user preferences.",
    images: [Food1, Food2, Food3],
  },
  {
    title: "KYC Automation Tool",
    category: "FinTech / AI / Identity Verification",
    desc: "A next-gen platform streamlining Know Your Customer (KYC) processes with AI-driven automation, featuring secure document uploads, real-time validation status, intelligent co-pilot suggestions, and voice-assisted agents for ASHA workers with multi-language and offline capabilities to ensure fast, compliant identity verification in the digital age.",
    images: [Automation1, Automation2, Automation3],
  },
  {
    title: "TripYatra — Travel Booking Platform",
    category: "TravelTech / MERN Stack",
    desc: "A comprehensive travel booking platform offering flight, hotel, and car rental services with user-friendly search, secure payments, and personalized recommendations.",
    images: [Trip1, Trip2, Trip3, Trip4, Trip5],
  },
  {
    title: "Smart Investment Portal",
    category: "FinTech / Web Platform",
    desc: "A comprehensive web platform that enables users to manage portfolios, track market trends in real time, and invest in stocks, mutual funds, or crypto assets. Features include data visualization dashboards, AI-driven insights, and secure authentication for seamless investment experiences.",
    images: [Invest1, Invest2, Invest3, Invest4],
  },
  {
    title: "Live Surveillance System",
    category: "Security / AI / Real-Time Monitoring",
    desc: "An advanced AI-driven dashboard for real-time monitoring, featuring live camera feeds, intelligent alerts for offline cameras or violence detection, audio upload analysis for screams, and proactive notifications to enhance security in environments like offices and public spaces.",
    images: [Servilance0, Servilance1, Servilance2, Servilance3],
  },
];

const slug = (title) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function Page41() {
  const [viewer, setViewer] = useState(null); // { project, index }

  const open = (project, index) => setViewer({ project, index });

  return (
    <>
      <section className="rule bg-ink-2 py-20 md:py-28 lg:py-32">
        <div className="shell">
          <SectionHeader
            eyebrow="Portfolio"
            title="Our major attractions"
            lede="Each project is more than just code — it’s a story of innovation, teamwork, and client satisfaction. Here’s what sets SD CodeHub apart in every collaboration."
          />

          {/* ---- Index of work ---- */}
          <Reveal className="mt-14 border-y border-white/10">
            <ol className="grid sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, i) => (
                <li key={project.title}>
                  <a
                    href={`#${slug(project.title)}`}
                    className="group flex items-baseline gap-3 py-3 text-sm transition-colors duration-300 hover:text-accent"
                  >
                    <span className="label text-[0.6rem]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="link-underline">{project.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </Reveal>

          {/* ---- Access note ---- */}
          <Reveal className="mt-8 flex items-start gap-3 border border-white/10 bg-ink p-5 text-sm text-[var(--muted)]">
            <FaLock className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
            <p>
              For security reasons, full project access is restricted. The
              screens below give a visual overview of our design and development
              quality.
            </p>
          </Reveal>

          {/* ---- Case blocks ---- */}
          <div className="mt-16 space-y-20 md:mt-24 md:space-y-28">
            {projects.map((project, i) => (
              <Reveal
                as="article"
                key={project.title}
                id={slug(project.title)}
                className="scroll-mt-28 border-t border-white/10 pt-12"
              >
                <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
                  {/* Meta column */}
                  <div className="lg:col-span-4">
                    <div className="lg:sticky lg:top-32">
                      <p className="label text-[0.6rem]">
                        <span className="text-accent">
                          {String(i + 1).padStart(2, "0")}
                        </span>{" "}
                        / {project.category}
                      </p>
                      <h3 className="display mt-5 text-[clamp(1.5rem,2.8vw,2.1rem)]">
                        {project.title}
                      </h3>
                      <p className="lede mt-5 text-sm md:text-[0.95rem]">
                        {project.desc}
                      </p>
                      <button
                        type="button"
                        onClick={() => open(project, 0)}
                        className="group mt-7 inline-flex items-center gap-3 border border-white/20 px-5 py-3 text-sm transition-colors duration-400 hover:border-accent hover:text-accent"
                      >
                        View all {project.images.length} screens
                        <span
                          aria-hidden="true"
                          className="transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Screens mosaic */}
                  <div className="lg:col-span-8">
                    <button
                      type="button"
                      onClick={() => open(project, 0)}
                      aria-label={`Open ${project.title} screenshots`}
                      className="group relative block w-full overflow-hidden border border-white/12 bg-ink"
                    >
                      <img
                        src={project.images[0]}
                        alt={`${project.title} — main screen`}
                        loading="lazy"
                        className="aspect-[16/9] w-full object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.03]"
                      />
                      <span className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/25" />
                    </button>

                    <div
                      className="mt-3 grid gap-3"
                      style={{
                        gridTemplateColumns: `repeat(${Math.min(
                          project.images.length - 1,
                          3
                        )}, minmax(0,1fr))`,
                      }}
                    >
                      {project.images.slice(1, 4).map((img, j) => {
                        const remaining = project.images.length - 4;
                        const isLast = j === 2 && remaining > 0;
                        return (
                          <button
                            key={img}
                            type="button"
                            onClick={() => open(project, j + 1)}
                            aria-label={`Open ${project.title} screenshot ${j + 2}`}
                            className="group relative block overflow-hidden border border-white/12 bg-ink"
                          >
                            <img
                              src={img}
                              alt={`${project.title} — screen ${j + 2}`}
                              loading="lazy"
                              className="aspect-[16/10] w-full object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105"
                            />
                            {isLast && (
                              <span className="absolute inset-0 flex items-center justify-center bg-ink/70 font-display text-lg tracking-tight">
                                +{remaining}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Page16 />

      {viewer && (
        <Lightbox
          images={viewer.project.images}
          index={viewer.index}
          title={viewer.project.title}
          onClose={() => setViewer(null)}
          onNavigate={(index) => setViewer((v) => ({ ...v, index }))}
        />
      )}
    </>
  );
}
