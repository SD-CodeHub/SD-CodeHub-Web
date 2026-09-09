import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE = "https://sdcodehub.tech";

/** Per-route title/description/canonical — no helmet dependency needed. */
const meta = {
  "/": {
    title:
      "SD CodeHub | AI Automation, MERN Stack & Full-Stack Development Services",
    description:
      "SD CodeHub provides AI automation, MERN stack development, full-stack solutions, UI/UX design, and technical consulting to help businesses scale with modern technology.",
  },
  "/about": {
    title: "About SD CodeHub | Our Process, Values & Industries We Serve",
    description:
      "How SD CodeHub works — a five-step delivery process, our mission and values, the industries we build for, and answers to common project questions.",
  },
  "/services": {
    title: "Services | AI Automation, MERN, Full-Stack, UI/UX & Consulting",
    description:
      "AI automation and integration, MERN stack development, full-stack solutions, UI/UX design and prototyping, and technical consulting from SD CodeHub.",
  },
  "/portfolio": {
    title: "Work | Web Platforms, AI Tools & Dashboards by SD CodeHub",
    description:
      "Selected SD CodeHub projects — EdTech portals, vendor management, KYC automation, travel booking, investment dashboards and AI surveillance systems.",
  },
  "/pricing": {
    title: "Pricing | Website & Web App Plans from ₹7,999 — SD CodeHub",
    description:
      "Transparent website plans for every business size, from a ₹7,999 starter showcase to enterprise dashboards, with a full cost breakdown for each plan.",
  },
  "/careers": {
    title: "Careers | Internships & Roles at SD CodeHub",
    description:
      "Open roles and internships at SD CodeHub in frontend, backend, UI/UX, AI and automation, sales and content — with real client project experience.",
  },
};

function setTag(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(attrs.rel ? "link" : "meta");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
}

export default function RouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname === "/carrer" ? "/careers" : pathname;
    const m = meta[path] || meta["/"];
    const url = `${SITE}${path === "/" ? "/" : path}`;

    document.title = m.title;
    setTag('meta[name="description"]', {
      name: "description",
      content: m.description,
    });
    setTag('link[rel="canonical"]', { rel: "canonical", href: url });
    setTag('meta[property="og:title"]', {
      property: "og:title",
      content: m.title,
    });
    setTag('meta[property="og:description"]', {
      property: "og:description",
      content: m.description,
    });
    setTag('meta[property="og:url"]', { property: "og:url", content: url });
  }, [pathname]);

  return null;
}
