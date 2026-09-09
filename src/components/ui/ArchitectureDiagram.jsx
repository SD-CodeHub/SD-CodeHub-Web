import { useState } from "react";

/**
 * The stack SD CodeHub actually builds, drawn as a wired schematic directly on
 * the page — client devices feed a Node service, which drives a database and an
 * automation layer. Wires draw themselves on mount, then requests flow along
 * them. Hovering or focusing a part isolates it and names the technology.
 */

const LINE = "rgba(255,255,255,.24)";
const ACCENT = "var(--color-accent)";
const FILL = "#0a0a0b";

const parts = {
  ui: {
    label: "REACT UI",
    detail:
      "Responsive interfaces on every device — built from a design system, not a template.",
  },
  api: {
    label: "NODE / API",
    detail:
      "Backend architecture, authentication and the business logic that holds it together.",
  },
  db: {
    label: "MONGODB",
    detail: "Data modelled around how your business actually reads and writes it.",
  },
  auto: {
    label: "AUTOMATION",
    detail:
      "AI services, document pipelines and integrations wired straight into the stack.",
  },
};

// [from, to, wire path]
const wires = [
  ["ui", "api", "M115 132 V152 Q115 162 125 162 H185 Q195 162 195 172 V194"],
  ["ui", "api", "M317 120 V152 Q317 162 307 162 H295 Q285 162 285 172 V194"],
  ["api", "db", "M190 272 V280 Q190 290 180 290 H105 Q95 290 95 300 V312"],
  ["api", "auto", "M290 272 V308 Q290 318 300 318 H366"],
];

const teeth = [0, 45, 90, 135, 180, 225, 270, 315];

const monoLabel = {
  fontFamily: "var(--font-mono)",
  fontSize: "11px",
  fontWeight: 500,
  letterSpacing: "0.16em",
};

export default function ArchitectureDiagram() {
  const [active, setActive] = useState(null);

  const lit = (id) => active === id;
  const stroke = (id) => (lit(id) ? ACCENT : LINE);
  const labelFill = (id) => (lit(id) ? ACCENT : "#ededea");
  const current = active ? parts[active] : null;

  // Props that make a group hoverable, focusable and screen-reader labelled.
  const handlers = (id, delay) => ({
    tabIndex: 0,
    role: "button",
    "aria-label": `${parts[id].label} — ${parts[id].detail}`,
    onMouseEnter: () => setActive(id),
    onMouseLeave: () => setActive(null),
    onFocus: () => setActive(id),
    onBlur: () => setActive(null),
    opacity: active !== null && active !== id ? 0.22 : 1,
    className: "cursor-pointer transition-opacity duration-500",
    style: {
      animation: `fade-up .6s cubic-bezier(.16,1,.3,1) ${delay}ms both`,
    },
  });

  return (
    <div>
      <svg
        viewBox="0 0 560 412"
        className="h-auto w-full overflow-visible"
        role="img"
        aria-label="Schematic of a typical SD CodeHub stack: desktop and mobile clients running a React interface are wired to a Node API, which drives a MongoDB database and an automation service."
      >
        <defs>
          <marker
            id="arw"
            viewBox="0 0 8 8"
            refX="7"
            refY="4"
            markerWidth="5"
            markerHeight="5"
            orient="auto"
          >
            <path d="M0 0 L8 4 L0 8 z" fill="currentColor" />
          </marker>
        </defs>

        {/* ================= Wires ================= */}
        {wires.map(([from, to, d], i) => {
          const hot = lit(from) || lit(to);
          return (
            <g
              key={i}
              className="transition-opacity duration-500"
              opacity={active !== null && !hot ? 0.12 : 1}
              style={{ color: hot ? ACCENT : "rgba(255,255,255,.32)" }}
            >
              <path
                d={d}
                pathLength="1"
                fill="none"
                stroke={hot ? ACCENT : LINE}
                strokeWidth="1"
                markerEnd="url(#arw)"
                className="draw-line transition-colors duration-500"
                style={{ "--draw-delay": `${340 + i * 130}ms` }}
              />
              <path
                d={d}
                pathLength="1"
                fill="none"
                stroke={ACCENT}
                strokeWidth="2.5"
                strokeLinecap="round"
                className="flow-line"
                style={{ "--flow-delay": `${i * 560}ms` }}
              />
            </g>
          );
        })}

        {/* ================= Client devices ================= */}
        <g {...handlers("ui", 0)}>
          <text
            x="40"
            y="10"
            fill={labelFill("ui")}
            className="transition-colors duration-500"
            style={monoLabel}
          >
            REACT UI
          </text>

          {/* Monitor */}
          <rect
            x="40"
            y="20"
            width="150"
            height="96"
            fill={FILL}
            stroke={stroke("ui")}
            className="transition-colors duration-500"
          />
          <rect x="40" y="20" width="150" height="15" fill="rgba(255,255,255,.05)" />
          <circle cx="51" cy="27.5" r="2" fill={LINE} />
          <circle cx="59" cy="27.5" r="2" fill={LINE} />
          <circle cx="67" cy="27.5" r="2" fill={ACCENT} opacity=".7" />
          <rect x="54" y="50" width="62" height="7" fill={ACCENT} opacity=".75" />
          <rect x="54" y="65" width="100" height="5" fill="rgba(255,255,255,.2)" />
          <rect x="54" y="77" width="78" height="5" fill="rgba(255,255,255,.14)" />
          <rect x="54" y="89" width="92" height="5" fill="rgba(255,255,255,.14)" />
          <path
            d="M115 116 V128"
            stroke={stroke("ui")}
            className="transition-colors duration-500"
          />
          <rect
            x="93"
            y="128"
            width="44"
            height="4"
            fill={stroke("ui")}
            className="transition-colors duration-500"
          />

          {/* Phone */}
          <rect
            x="290"
            y="26"
            width="54"
            height="94"
            rx="8"
            fill={FILL}
            stroke={stroke("ui")}
            className="transition-colors duration-500"
          />
          <rect x="308" y="32" width="18" height="3" rx="1.5" fill={LINE} />
          <rect x="298" y="44" width="38" height="5" fill={ACCENT} opacity=".7" />
          <rect x="298" y="56" width="26" height="4" fill="rgba(255,255,255,.18)" />
          <rect x="298" y="65" width="32" height="4" fill="rgba(255,255,255,.14)" />
          <rect x="298" y="79" width="38" height="26" fill="rgba(255,255,255,.06)" />
        </g>

        {/* ================= Server / API ================= */}
        <g {...handlers("api", 120)}>
          <rect
            x="150"
            y="196"
            width="180"
            height="76"
            fill={FILL}
            stroke={stroke("api")}
            className="transition-colors duration-500"
          />
          <path d="M150 214 H330" stroke="rgba(255,255,255,.1)" />
          <text
            x="166"
            y="208"
            fill={labelFill("api")}
            className="transition-colors duration-500"
            style={monoLabel}
          >
            NODE / API
          </text>

          {/* Rack slots with activity lights */}
          {[218, 234, 250].map((y, i) => (
            <g key={y}>
              <rect x="166" y={y} width="116" height="12" fill="rgba(255,255,255,.05)" />
              <circle
                cx="300"
                cy={y + 6}
                r="3"
                fill={ACCENT}
                className="db-ring"
                style={{ "--ring-delay": `${i * 420}ms` }}
              />
            </g>
          ))}
        </g>

        {/* ================= Database ================= */}
        <g {...handlers("db", 240)}>
          <path
            d="M49 326 V366 A46 12 0 0 0 141 366 V326"
            fill={FILL}
            stroke={stroke("db")}
            className="transition-colors duration-500"
          />
          <ellipse
            cx="95"
            cy="326"
            rx="46"
            ry="12"
            fill={FILL}
            stroke={stroke("db")}
            className="transition-colors duration-500"
          />
          {/* Platters, lighting in sequence like disk activity */}
          <path
            d="M49 340 A46 12 0 0 0 141 340"
            fill="none"
            stroke={ACCENT}
            className="db-ring"
          />
          <path
            d="M49 354 A46 12 0 0 0 141 354"
            fill="none"
            stroke={ACCENT}
            className="db-ring"
            style={{ "--ring-delay": "900ms" }}
          />
          <text
            x="95"
            y="400"
            textAnchor="middle"
            fill={labelFill("db")}
            className="transition-colors duration-500"
            style={monoLabel}
          >
            MONGODB
          </text>
        </g>

        {/* ================= Automation gears ================= */}
        <g {...handlers("auto", 360)}>
          {/* Large gear */}
          <g transform="translate(410 318)">
            <g className="gear-spin">
              {teeth.map((a) => (
                <rect
                  key={a}
                  x="-6"
                  y="-40"
                  width="12"
                  height="13"
                  fill={stroke("auto")}
                  transform={`rotate(${a})`}
                  className="transition-colors duration-500"
                />
              ))}
              <circle
                r="28"
                fill={FILL}
                stroke={stroke("auto")}
                strokeWidth="2"
                className="transition-colors duration-500"
              />
              <circle
                r="10"
                fill="none"
                stroke={stroke("auto")}
                className="transition-colors duration-500"
              />
            </g>
          </g>

          {/* Smaller gear, counter-rotating and meshing at the upper right */}
          <g transform="translate(462 278)">
            <g className="gear-spin-reverse">
              {teeth.map((a) => (
                <rect
                  key={a}
                  x="-4"
                  y="-24"
                  width="8"
                  height="9"
                  fill={lit("auto") ? ACCENT : "rgba(255,255,255,.16)"}
                  transform={`rotate(${a})`}
                  className="transition-colors duration-500"
                />
              ))}
              <circle
                r="16"
                fill={FILL}
                stroke={lit("auto") ? ACCENT : "rgba(255,255,255,.16)"}
                strokeWidth="1.5"
                className="transition-colors duration-500"
              />
              <circle
                r="6"
                fill="none"
                stroke={lit("auto") ? ACCENT : "rgba(255,255,255,.16)"}
                className="transition-colors duration-500"
              />
            </g>
          </g>

          <text
            x="428"
            y="400"
            textAnchor="middle"
            fill={labelFill("auto")}
            className="transition-colors duration-500"
            style={monoLabel}
          >
            AUTOMATION
          </text>
        </g>
      </svg>

      {/* Caption reacts to the hovered part */}
      <p
        className="mt-5 min-h-[2.75rem] max-w-md text-sm text-[var(--muted)]"
        aria-live="polite"
      >
        {current ? (
          <>
            <span className="font-display tracking-tight text-accent">
              {current.label}
            </span>{" "}
            — {current.detail}
          </>
        ) : (
          <span className="label text-[0.6rem]">Hover a layer to inspect it</span>
        )}
      </p>
    </div>
  );
}
