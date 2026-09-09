import { useState, useId } from "react";

/**
 * Accessible disclosure list. Items: { q, a } or { title, body }.
 */
export default function Accordion({ items, className = "" }) {
  const [open, setOpen] = useState(null);
  const uid = useId();

  return (
    <div className={`divide-y divide-white/10 border-y border-white/10 ${className}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const title = item.q ?? item.title;
        const body = item.a ?? item.body;

        return (
          <div key={i}>
            <h3>
              <button
                type="button"
                id={`${uid}-btn-${i}`}
                aria-expanded={isOpen}
                aria-controls={`${uid}-panel-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center justify-between gap-6 py-6 text-left transition-colors duration-300 hover:text-accent"
              >
                <span className="font-display text-lg font-medium md:text-xl">
                  {title}
                </span>
                <span
                  aria-hidden="true"
                  className={`relative h-4 w-4 shrink-0 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
                  <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current" />
                </span>
              </button>
            </h3>
            <div
              id={`${uid}-panel-${i}`}
              role="region"
              aria-labelledby={`${uid}-btn-${i}`}
              hidden={!isOpen}
            >
              <p className="lede max-w-2xl pb-7 text-[0.95rem] fade-up">{body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
