import { useEffect, useRef } from "react";
import CTA, { ENQUIRY_FORM } from "./ui/Button";
import Marquee from "./ui/Marquee";
import Reveal from "./ui/Reveal";
import ArchitectureDiagram from "./ui/ArchitectureDiagram";

const capabilities = [
  "AI Automation & Integration",
  "MERN Stack Development",
  "Full-Stack Solutions",
  "UI/UX Design & Prototyping",
  "Technical Consulting",
];

export default function Hero() {
  const frameRef = useRef(null);

  // Gentle pointer parallax on the diagram (desktop pointers only).
  useEffect(() => {
    const node = frameRef.current;
    if (!node || !window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e) => {
      const r = node.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      node.style.transform = `perspective(1600px) rotateY(${x * 3}deg) rotateX(${-y * 3}deg)`;
    };
    const reset = () => {
      node.style.transform = "";
    };

    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerleave", reset);
    return () => {
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", reset);
    };
  }, []);

  return (
    <section
      id="main"
      className="relative flex min-h-svh flex-col overflow-hidden bg-ink pt-24 md:pt-28"
      aria-label="Introduction"
    >
      <div className="grid-field pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[36rem] w-[36rem] rounded-full bg-accent/8 blur-[140px]"
        aria-hidden="true"
      />

      <div className="shell relative flex flex-1 flex-col justify-center py-8 md:py-10">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* ---- Statement ---- */}
          <div className="lg:col-span-6">
            <p className="label flex items-center gap-3 fade-up">
              <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
              The Standard of Digital Excellence
            </p>

            <Reveal
              as="h1"
              className="display mt-5 text-[clamp(2.25rem,5.6vw,4.25rem)]"
            >
              <span className="mask-line">
                <span>Mastering the art</span>
              </span>
              <span className="mask-line">
                <span style={{ transitionDelay: "110ms" }}>of digital</span>
              </span>
              <span className="mask-line">
                <span style={{ transitionDelay: "220ms" }} className="text-accent">
                  creation.
                </span>
              </span>
            </Reveal>

            <p
              className="lede mt-6 max-w-xl text-[0.95rem] md:text-base fade-up"
              style={{ animationDelay: "260ms" }}
            >
              SD CodeHub builds AI automation, MERN and full-stack systems, UI/UX
              design and technical consulting for businesses that need software
              which actually holds up in production.
            </p>

            <div
              className="mt-7 flex flex-col gap-3 sm:flex-row fade-up"
              style={{ animationDelay: "340ms" }}
            >
              <CTA href={ENQUIRY_FORM} size="lg">
                Start a project
              </CTA>
              <CTA to="/services" variant="ghost" size="lg" arrow={false}>
                View our services
              </CTA>
            </div>

            <blockquote
              className="mt-8 border-l border-accent/50 pl-5 text-sm italic text-[var(--muted)] fade-up"
              style={{ animationDelay: "420ms" }}
            >
              “Excellence is not an act, but a habit.” We craft enduring digital
              solutions built on precision, reliability, and timeless quality.
            </blockquote>
          </div>

          {/* ---- The stack we build ---- */}
          <div className="lg:col-span-6">
            <div
              ref={frameRef}
              className="transition-transform duration-500 ease-out"
            >
              <ArchitectureDiagram />
            </div>
          </div>
        </div>

        {/* ---- Scroll cue ---- */}
        <div className="mt-10 flex items-center gap-4">
          <span
            className="scroll-hint relative h-8 w-px overflow-hidden bg-white/12"
            aria-hidden="true"
          />
          <span className="label text-[0.6rem]">Scroll to explore</span>
        </div>
      </div>

      <div className="border-t border-white/10 py-4">
        <Marquee items={capabilities} />
      </div>
    </section>
  );
}
