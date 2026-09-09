/**
 * Continuous horizontal ticker. The item list is duplicated so the CSS
 * translate loop is seamless; the copy is hidden from assistive tech.
 */
export default function Marquee({ items, className = "" }) {
  const Row = ({ hidden }) => (
    <ul
      className="flex shrink-0 items-center"
      aria-hidden={hidden ? "true" : undefined}
    >
      {items.map((item, i) => (
        <li key={i} className="flex items-center whitespace-nowrap">
          <span className="font-display px-8 text-sm tracking-tight text-[var(--muted)] md:px-12 md:text-base">
            {item}
          </span>
          <span className="text-accent/60" aria-hidden="true">
            ◆
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`marquee overflow-hidden ${className}`}>
      <div className="marquee-track">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
