import { useState } from "react";
import { WHATSAPP } from "./ui/Button";

/** Dismissible WhatsApp prompt shown inside the assistant panel. */
export default function PopupAd() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="flex items-center gap-2 border-b border-white/10 bg-ink px-3 py-2">
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-1 items-center gap-2.5 text-[0.7rem] text-[var(--muted)] transition-colors hover:text-[#25D366]"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 shrink-0 fill-[#25D366]">
          <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35M12.05 21.8h-.01a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-3.71.97.99-3.62-.23-.37a9.8 9.8 0 0 1-1.5-5.23c0-5.41 4.4-9.81 9.82-9.81 2.62 0 5.08 1.02 6.93 2.88a9.74 9.74 0 0 1 2.87 6.94c0 5.41-4.4 9.82-9.81 9.82M20.52 3.45A11.72 11.72 0 0 0 12.05 0C5.56 0 .28 5.28.28 11.77c0 2.07.54 4.1 1.57 5.89L.18 24l6.49-1.7a11.72 11.72 0 0 0 5.38 1.31h.01c6.49 0 11.77-5.28 11.77-11.77 0-3.14-1.22-6.1-3.44-8.32" />
        </svg>
        <span className="link-underline">Reach our team directly on WhatsApp</span>
      </a>
      <button
        type="button"
        onClick={() => setVisible(false)}
        aria-label="Dismiss WhatsApp prompt"
        className="shrink-0 text-xs text-[var(--muted)] transition-colors hover:text-accent"
      >
        ✕
      </button>
    </div>
  );
}
