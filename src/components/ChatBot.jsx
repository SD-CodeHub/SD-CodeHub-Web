import { useState, useEffect, useRef } from "react";
import { getBotReply } from "../utils/botEngine";
import PopupAd from "./PopupAd";
import logo from "../assets/sdchatboatlogo.png";

const GREETING =
  "Hi — I’m the SD CodeHub assistant.\n\nAsk me about pricing, hosting, delivery time or anything else about working with us.";

const suggestions = [
  "Pricing",
  "Hosting & domain",
  "Admin panel",
  "Delivery time",
  "Maintenance",
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", content: GREETING },
  ]);
  const [input, setInput] = useState("");

  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const send = (text) => {
    const value = (text ?? input).trim();
    if (!value) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", content: value },
      { role: "bot", content: getBotReply(value) },
    ]);
    setInput("");
  };

  return (
    <>
      {/* Launcher */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="sd-chat"
        className="group fixed bottom-6 right-6 z-[95] flex items-center gap-3 border border-white/20 bg-ink px-4 py-3 text-sm shadow-2xl shadow-black/50 transition-colors duration-400 hover:border-accent hover:text-accent"
      >
        <span
          className="h-2 w-2 shrink-0 rounded-full bg-accent"
          aria-hidden="true"
        />
        <span className="hidden sm:inline">
          {open ? "Close assistant" : "Ask our assistant"}
        </span>
        <span className="sm:hidden">{open ? "Close" : "Ask"}</span>
      </button>

      {/* Panel */}
      <div
        id="sd-chat"
        hidden={!open}
        role="dialog"
        aria-label="SD CodeHub assistant"
        className="fixed bottom-24 right-4 z-[95] flex w-[calc(100vw-2rem)] max-w-sm flex-col border border-white/15 bg-ink-2 shadow-2xl shadow-black/60 fade-up sm:right-6"
        style={{ height: "min(70vh, 33rem)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt=""
              className="h-8 w-8 object-contain mix-blend-screen invert"
            />
            <div>
              <p className="font-display text-sm tracking-tight">
                Customer Assistant
              </p>
              <p className="label text-[0.55rem]">Usually replies instantly</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close assistant"
            className="text-[var(--muted)] transition-colors hover:text-accent"
          >
            ✕
          </button>
        </div>

        <PopupAd />

        {/* Messages */}
        <div
          ref={scrollRef}
          className="scrollbar-hide flex-1 space-y-3 overflow-y-auto px-4 py-4"
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[85%] whitespace-pre-line px-4 py-3 text-[0.8125rem] leading-relaxed ${
                  msg.role === "user"
                    ? "bg-accent text-ink"
                    : "border border-white/10 bg-ink text-[var(--text)]"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        {/* Suggestions */}
        <div className="scrollbar-hide flex gap-2 overflow-x-auto border-t border-white/10 px-4 py-3">
          {suggestions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => send(s)}
              className="shrink-0 border border-white/15 px-3 py-1.5 font-mono text-[0.65rem] text-[var(--muted)] transition-colors hover:border-accent hover:text-accent"
            >
              {s}
            </button>
          ))}
        </div>

        {/* Composer */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send();
          }}
          className="flex gap-2 border-t border-white/10 p-3"
        >
          <label htmlFor="sd-chat-input" className="sr-only">
            Message
          </label>
          <input
            id="sd-chat-input"
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message…"
            className="min-w-0 flex-1 border border-white/15 bg-ink px-3 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--muted)]/70 focus:border-accent focus:outline-none"
          />
          <button
            type="submit"
            className="bg-accent px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-white"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}
