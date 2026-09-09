import Reveal from "./ui/Reveal";
import CTA, { ENQUIRY_FORM, WHATSAPP } from "./ui/Button";
import { Eyebrow } from "./ui/Section";

const details = [
  { label: "Email", value: "codehubsd@gmail.com", href: "mailto:codehubsd@gmail.com" },
  { label: "Phone", value: "+91 99309 94315", href: "tel:+919930994315" },
  { label: "Location", value: "Navi Mumbai, Maharashtra" },
];

/**
 * Closing contact band. Repeated at the foot of every page, so it stays
 * typographic and light rather than competing with the page above it.
 */
export default function Page16() {
  return (
    <section
      id="contact"
      className="rule relative overflow-hidden bg-ink py-24 md:py-32 lg:py-40"
      aria-labelledby="contact-heading"
    >
      <div className="grid-field pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -bottom-40 left-1/4 h-[30rem] w-[30rem] rounded-full bg-accent/8 blur-[150px]"
        aria-hidden="true"
      />

      <div className="shell relative">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
        </Reveal>

        <Reveal
          as="h2"
          id="contact-heading"
          delay={80}
          className="display mt-8 max-w-4xl text-[clamp(2.4rem,6.4vw,4.75rem)]"
        >
          <span className="mask-line">
            <span>Let’s build something</span>
          </span>
          <span className="mask-line">
            <span style={{ transitionDelay: "100ms" }} className="text-accent">
              incredible together.
            </span>
          </span>
        </Reveal>

        <Reveal delay={160}>
          <p className="lede mt-8 max-w-xl text-base md:text-lg">
            Have a project in mind or want to discuss how SD CodeHub can help
            your business grow? We’d love to hear from you. Get in touch with
            our expert team today.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <CTA href={ENQUIRY_FORM} size="lg">
              Send a message
            </CTA>
            <span className="label text-[0.6rem]">or</span>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border border-white/20 px-6 py-4 text-[0.95rem] transition-colors duration-400 hover:border-[#25D366] hover:text-[#25D366]"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5 fill-current"
              >
                <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35M12.05 21.8h-.01a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-3.71.97.99-3.62-.23-.37a9.8 9.8 0 0 1-1.5-5.23c0-5.41 4.4-9.81 9.82-9.81 2.62 0 5.08 1.02 6.93 2.88a9.74 9.74 0 0 1 2.87 6.94c0 5.41-4.4 9.82-9.81 9.82M20.52 3.45A11.72 11.72 0 0 0 12.05 0C5.56 0 .28 5.28.28 11.77c0 2.07.54 4.1 1.57 5.89L.18 24l6.49-1.7a11.72 11.72 0 0 0 5.38 1.31h.01c6.49 0 11.77-5.28 11.77-11.77 0-3.14-1.22-6.1-3.44-8.32" />
              </svg>
              Message us on WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={280}>
          <dl className="mt-16 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
            {details.map((item) => (
              <div key={item.label}>
                <dt className="label text-[0.6rem]">{item.label}</dt>
                <dd className="mt-2 font-display text-lg tracking-tight">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="link-underline transition-colors hover:text-accent"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
