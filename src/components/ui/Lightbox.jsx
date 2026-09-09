import { useEffect, useCallback } from "react";

/**
 * Full-screen image viewer with keyboard control and body-scroll locking.
 */
export default function Lightbox({ images, index, title, onClose, onNavigate }) {
  const go = useCallback(
    (dir) => {
      const next = (index + dir + images.length) % images.length;
      onNavigate(next);
    },
    [index, images.length, onNavigate]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [go, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} — image ${index + 1} of ${images.length}`}
      className="fixed inset-0 z-[100] flex flex-col bg-ink/97 backdrop-blur-md fade-up"
    >
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 md:px-10">
        <p className="label">
          {title} <span className="text-accent">/</span> {String(index + 1).padStart(2, "0")}—
          {String(images.length).padStart(2, "0")}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className="label transition-colors hover:text-accent"
        >
          Close ✕
        </button>
      </div>

      <div className="flex flex-1 items-center justify-center overflow-hidden p-4 md:p-10">
        <img
          key={index}
          src={images[index]}
          alt={`${title} screenshot ${index + 1}`}
          className="max-h-full max-w-full object-contain fade-up"
        />
      </div>

      <div className="flex items-center justify-center gap-4 border-t border-white/10 px-5 py-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous image"
          className="border border-white/20 px-5 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
        >
          ←
        </button>
        <div className="flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onNavigate(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`h-1 w-8 transition-colors duration-300 ${
                i === index ? "bg-accent" : "bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next image"
          className="border border-white/20 px-5 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
        >
          →
        </button>
      </div>
    </div>
  );
}
