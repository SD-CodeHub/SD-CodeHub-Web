import Reveal from "./ui/Reveal";
import CTA, { ENQUIRY_FORM } from "./ui/Button";
import { Eyebrow } from "./ui/Section";
import DetailImg from "../assets/image2.webp";
import MainImg from "../assets/image3.webp";

export default function Page12() {
  return (
    <section className="rule relative bg-ink py-20 md:py-28 lg:py-32">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* ---- Statement ---- */}
          <div className="lg:col-span-5 lg:pt-6">
            <Reveal>
              <Eyebrow index="02">What we do</Eyebrow>
            </Reveal>

            <Reveal as="h2" delay={80} className="display mt-7 text-[clamp(2rem,4.4vw,3.25rem)]">
              <span className="mask-line">
                <span>Innovative solutions</span>
              </span>
              <span className="mask-line">
                <span style={{ transitionDelay: "90ms" }}>for thriving</span>
              </span>
              <span className="mask-line">
                <span style={{ transitionDelay: "180ms" }}>businesses.</span>
              </span>
            </Reveal>

            <Reveal delay={160}>
              <p className="lede mt-7 max-w-md text-base md:text-lg">
                SD CodeHub specializes in crafting customized digital solutions
                that elevate our clients’ brands.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-6 font-display text-lg tracking-tight text-accent">
                Empowering businesses to succeed.
              </p>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <CTA href={ENQUIRY_FORM}>Get started</CTA>
                <CTA to="/portfolio" variant="ghost">
                  Discover more
                </CTA>
              </div>
            </Reveal>
          </div>

          {/* ---- Composition ---- */}
          <div className="lg:col-span-7">
            <Reveal className="relative">
              <div className="relative border border-white/12 bg-ink-2 p-2">
                <img
                  src={MainImg}
                  alt="SD CodeHub web application shown on a laptop"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-10 -left-4 hidden w-40 border border-white/15 bg-ink-2 p-1.5 shadow-2xl shadow-black/50 md:block lg:-left-10 lg:w-48">
                <img
                  src={DetailImg}
                  alt="Interface detail from a recent build"
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>

              <div
                className="absolute -right-3 -top-3 hidden h-24 w-24 border-r border-t border-accent/60 lg:block"
                aria-hidden="true"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
