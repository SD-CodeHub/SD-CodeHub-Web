import Reveal from "./ui/Reveal";
import { Eyebrow } from "./ui/Section";

const pillars = [
  {
    title: "Powering Digital Transformation",
    description:
      "Our team of experts guides organizations through their digital transformation journey, leveraging innovative technologies to optimize processes, improve efficiency, and create competitive advantage. We focus on measurable results that truly transform businesses.",
  },
  {
    title: "Driving Business Growth",
    description:
      "We help companies unlock new revenue streams and expand market presence through data-driven strategies, process automation, and customer-centric solutions. Our approach ensures sustainable growth that aligns with your long-term objectives.",
  },
  {
    title: "Empowering Businesses to Succeed",
    description:
      "By combining technical expertise with industry insights, we empower companies to make informed decisions, adopt cutting-edge technologies, and build scalable solutions that drive operational excellence and strategic success.",
  },
];

export default function Page14() {
  return (
    <section className="rule relative bg-ink py-20 md:py-28 lg:py-32">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Sticky statement — stays put while the pillars scroll past it. */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <Eyebrow index="04">Impact</Eyebrow>
              </Reveal>
              <Reveal as="h2" delay={80} className="display mt-7 text-[clamp(2rem,4.6vw,3.5rem)]">
                Revolutionizing the tech landscape
              </Reveal>
              <Reveal delay={160}>
                <p className="lede mt-7 max-w-md text-base md:text-lg">
                  We help businesses achieve excellence through innovative
                  solutions, industry expertise, and a focus on measurable
                  results.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ol className="divide-y divide-white/10 border-t border-white/10">
              {pillars.map((item, i) => (
                <Reveal as="li" key={item.title} delay={i * 90} className="group py-10 md:py-14">
                  <div className="flex items-start gap-6 md:gap-10">
                    <span className="font-mono text-sm text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl tracking-tight md:text-[1.75rem]">
                        {item.title}
                      </h3>
                      <p className="lede mt-4 text-[0.95rem] md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
