import Reveal from "./Reveal";

/** Small monospaced section marker, e.g. "02 — Services" */
export function Eyebrow({ index, children, className = "" }) {
  return (
    <p className={`label flex items-center gap-3 ${className}`}>
      {index && <span className="text-accent">{index}</span>}
      <span className="h-px w-8 bg-white/20" aria-hidden="true" />
      {children}
    </p>
  );
}

/**
 * Standard section header: eyebrow, headline, optional lede.
 * `align` controls left (default, editorial) vs centre.
 */
export function SectionHeader({
  index,
  eyebrow,
  title,
  lede,
  align = "left",
  as: Heading = "h2",
  className = "",
}) {
  const centered = align === "center";

  return (
    <div
      className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow index={index} className={centered ? "justify-center" : ""}>
            {eyebrow}
          </Eyebrow>
        </Reveal>
      )}
      <Reveal delay={80}>
        <Heading className="display mt-6 text-[clamp(2rem,4.6vw,3.5rem)]">
          {title}
        </Heading>
      </Reveal>
      {lede && (
        <Reveal delay={160}>
          <p
            className={`lede mt-6 text-base md:text-lg ${centered ? "mx-auto" : ""} max-w-2xl`}
          >
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/** Page section with consistent vertical rhythm and an optional hairline top. */
export function Section({
  id,
  divider = true,
  tone = "ink",
  className = "",
  children,
}) {
  const tones = {
    ink: "bg-ink",
    raised: "bg-ink-2",
  };

  return (
    <section
      id={id}
      className={`relative ${tones[tone] || tones.ink} ${
        divider ? "rule" : ""
      } py-20 md:py-28 lg:py-32 ${className}`}
    >
      <div className="shell">{children}</div>
    </section>
  );
}
