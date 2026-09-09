import Reveal from "./ui/Reveal";
import CTA from "./ui/Button";
import { Eyebrow } from "./ui/Section";
import ProcessImg from "../assets/image14.webp";

const steps = [
  { name: "Ideate", desc: "We start with your vision and define clear goals." },
  { name: "Design & Develop", desc: "Our experts craft seamless, scalable solutions." },
  { name: "Test & Deploy", desc: "We ensure quality and launch with confidence." },
  { name: "Support & Grow", desc: "Continuous improvement and lasting partnerships." },
];

export default function Page15() {
  return (
    <section className="rule relative bg-ink-2">
      <div className="grid lg:grid-cols-2">
        {/* ---- Full-bleed image half ---- */}
        <div className="relative min-h-[46vh] overflow-hidden lg:min-h-[42rem]">
          <img
            src={ProcessImg}
            alt="The SD CodeHub team at work on a client build"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-ink/60 via-ink/10 to-ink-2/90"
            aria-hidden="true"
          />
        </div>

        {/* ---- Method half ---- */}
        <div className="flex items-center px-5 py-20 md:px-12 lg:px-16 xl:px-20">
          <div className="w-full max-w-xl">
            <Reveal>
              <Eyebrow index="05">Methodology</Eyebrow>
            </Reveal>

            <Reveal as="h2" delay={80} className="display mt-7 text-[clamp(1.9rem,4vw,3rem)]">
              Our methodology for building exceptional software
            </Reveal>

            <Reveal delay={140}>
              <p className="lede mt-6 text-[0.95rem] md:text-base">
                At SD CodeHub, our development process is guided by
                collaboration, innovation, and precision. We combine
                cutting-edge technology with creative thinking to deliver
                scalable and efficient digital solutions tailored to our
                clients’ goals.
              </p>
            </Reveal>

            <ol className="mt-10 space-y-0 divide-y divide-white/10 border-y border-white/10">
              {steps.map((step, i) => (
                <Reveal
                  as="li"
                  key={step.name}
                  delay={180 + i * 70}
                  className="group flex items-baseline gap-5 py-5 transition-colors duration-300 hover:text-accent"
                >
                  <span className="label shrink-0 text-[0.6rem]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="font-display text-lg tracking-tight">
                      {step.name}
                    </span>
                    <span className="ml-2 text-sm text-[var(--muted)] transition-colors group-hover:text-[var(--muted)]">
                      — {step.desc}
                    </span>
                  </span>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={480}>
              <div className="mt-10">
                <CTA to="/about" variant="ghost">
                  Learn more about us
                </CTA>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
