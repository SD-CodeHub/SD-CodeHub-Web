import React, { useState } from "react";
import {
  FaGlobe,
  FaRocket,
  FaTools,
  FaBusinessTime,
  FaBuilding,
  FaCode,
} from "react-icons/fa";

const plans = [
  {
    title: "Starter Showcase Plan",
    price: "₹7,999",
    icon: <FaGlobe className="text-4xl mb-3" />,
    description:
      "Perfect for small shops or local businesses who just want to display their products online.",
    keyPoints: [
      "Up to 5 pages (Home, About, Products, Contact)",
      "Mobile-friendly layout",
      "WhatsApp / Call-to-action button",
      "1-year domain & basic hosting setup",
    ],
    details: {
      overview:
        "A simple yet professional website for small stores like pet shops, salons, or boutiques that want to showcase products and contact details attractively.",
      stack: "React.js for frontend | Node.js backend (if required) | MongoDB for optional content | Hosted on Vercel/Netlify.",
      workflow: [
        "Collect content (images, text) and understand requirements.",
        "Design a clean mobile-first layout.",
        "Build responsive static pages and connect contact forms.",
        "Deploy to hosting and handover simple update instructions.",
      ],
      breakdown: [
        "Domain & Hosting Setup: ₹1,000–₹2,000",
        "Frontend Development: ₹2,000",
        "Backend Setup (if required): ₹1,000",
        "Design & Testing: ₹1,000",
      ],
      addons: ["WhatsApp chat integration", "Basic SEO setup", "Color/theme customization"],
      bestFor:
        "Small local shops and individual professionals who need a clean online showcase.",
    },
  },
  {
    title: "Business Growth Plan",
    price: "₹11,999",
    icon: <FaBusinessTime className="text-4xl mb-3" />,
    description:
      "For growing businesses who want a stronger online presence and better engagement.",
    keyPoints: [
      "Up to 10 pages",
      "Contact form + Google Map",
      "Basic on-page SEO",
      "1-month free content updates",
    ],
    details: {
      overview:
        "Ideal for small companies aiming to attract customers through enhanced design, SEO, and engagement tools.",
      stack:
        "React.js + Node.js | MongoDB for contact data | SEO-friendly structure | Hosted on Netlify or AWS.",
      workflow: [
        "Understand audience & competitors.",
        "Design and develop up to 10 responsive pages.",
        "Implement contact forms, map and inquiry system.",
        "On-page SEO and deployment to domain.",
      ],
      breakdown: [
        "Domain & Hosting: ₹1,000–₹2,000",
        "Design & Development: ₹4,000",
        "SEO Setup: ₹1,000",
        "Testing & Maintenance: ₹2,000",
      ],
      addons: ["Social media links", "Analytics setup", "Blog section"],
      bestFor:
        "Small and medium businesses wanting increased traffic and professional presentation.",
    },
  },
  {
    title: "Dynamic Admin Plan",
    price: "₹14,999 – ₹19,999",
    icon: <FaTools className="text-4xl mb-3" />,
    description:
      "For businesses that want to manage products or content using their own admin panel.",
    keyPoints: [
      "Admin dashboard (add/edit/delete)",
      "Product statuses (Arriving Soon, Featured)",
      "Secure login for owner",
      "1-month maintenance support",
    ],
    details: {
      overview:
        "This plan gives business owners complete control — add, edit, or delete products anytime through a secure admin dashboard.",
      stack:
        "MERN Stack (MongoDB, Express, React, Node.js) | JWT authentication | Hosted on cloud platforms.",
      workflow: [
        "Gather admin needs and product categories.",
        "Design user-friendly admin with secure login.",
        "Connect dashboard to database for live updates.",
        "Test, deploy and provide admin guide.",
      ],
      breakdown: [
        "Domain & Hosting: ₹1,500",
        "Database Setup: ₹2,000",
        "Dashboard & CRUD Development: ₹7,000–₹8,000",
        "Testing & Support: ₹2,000",
      ],
      addons: [
        "AI chatbot for customer support",
        "Sales analytics dashboard",
        "Product recommendation AI",
      ],
      bestFor:
        "Shops that frequently update products (pet stores, boutiques, catalogs).",
    },
  },
  {
    title: "Professional Brand Plan",
    price: "₹24,999+",
    icon: <FaRocket className="text-4xl mb-3" />,
    description:
      "For brands and studios that want a premium design and advanced web features.",
    keyPoints: [
      "Custom design & animations",
      "Analytics & reports",
      "Monthly content updates",
      "Advanced SEO",
    ],
    details: {
      overview:
        "A high-end solution for established businesses and studios wanting a unique brand identity with animations, analytics, and SEO optimization.",
      stack:
        "React.js + Node.js backend | MongoDB + AWS | Integrated analytics & SEO tools.",
      workflow: [
        "Brand strategy and planning.",
        "UI/UX design with animations.",
        "Develop dynamic pages and analytics integration.",
        "Long-term testing and maintenance setup.",
      ],
      breakdown: [
        "Domain & Hosting: ₹2,000",
        "Design & Animation: ₹6,000",
        "Backend & Integration: ₹8,000",
        "SEO & Analytics: ₹4,000",
        "Testing & Maintenance: ₹3,000",
      ],
      addons: ["AI chatbot", "Custom animations", "SEO audit reports"],
      bestFor:
        "Creative agencies, studios, or brands needing a premium online presence.",
    },
  },
  {
    title: "Enterprise Plan",
    price: "₹49,999+",
    icon: <FaBuilding className="text-4xl mb-3" />,
    description:
      "For large businesses needing complex dashboards or custom web integrations.",
    keyPoints: [
      "Custom backend & APIs",
      "Scalable cloud hosting",
      "Automation and reporting",
      "Dedicated support",
    ],
    details: {
      overview:
        "Tailored for enterprises requiring large-scale dashboards, user management systems, APIs, or automation.",
      stack:
        "Java (Spring Boot) or Python (Django/FastAPI) backend | React frontend | MongoDB/Postgres | Cloud hosting.",
      workflow: [
        "Requirement gathering & project planning.",
        "Backend architecture & API design.",
        "Frontend dashboard development.",
        "AI/automation integration and scalable deployment.",
      ],
      breakdown: [
        "Cloud & Server Setup: ₹8,000",
        "Backend Development: ₹15,000",
        "Frontend Dashboard: ₹10,000",
        "Testing & QA: ₹5,000",
        "Maintenance & Support: ₹8,000",
      ],
      addons: ["Automation systems", "AI-driven analytics", "Custom APIs"],
      bestFor:
        "Large businesses needing automation, scalability and long-term technical support.",
    },
  },
  {
    title: "Custom Code Plan",
    price: "Based on requirements",
    icon: <FaCode className="text-4xl mb-3" />,
    description:
      "For clients who already have a website and want to modify, redesign, or add new features.",
    keyPoints: [
      "Code audit & quick fix",
      "UI/UX updates",
      "Feature additions or bug fixes",
      "AI/chatbot integration (optional)",
    ],
    details: {
      overview:
        "If you already have a website but want SD Code Hub to improve, debug, or modernize it — this plan is perfect.",
      stack:
        "We adapt to your stack: React, Node, Java, or Python. AI add-ons built with Python/Java as needed.",
      workflow: [
        "Audit current code and performance.",
        "List required fixes or enhancements.",
        "Implement changes and test thoroughly.",
        "Deploy updated site and provide notes.",
      ],
      breakdown: [
        "Audit & Discussion: ₹500–₹1,000",
        "UI/UX Redesign: ₹2,000–₹5,000",
        "Code Optimization: ₹2,000–₹4,000",
        "Feature Additions: ₹3,000–₹6,000",
      ],
      addons: ["Speed optimization", "Error fixes", "AI chatbot integration"],
      bestFor:
        "Clients who want to upgrade or enhance their existing websites without a full rebuild.",
    },
  },
];

const Page5 = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <section className="bg-white text-black py-16 px-6 sm:px-10 lg:px-20">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold mb-2">Our Website Plans</h2>
        <p className="text-gray-600 text-lg mb-4">
          Built for every business size — from local shops to enterprises.
        </p>
        <p className="text-gray-600 text-base">
          Simple, transparent pricing — crafted to help every business go digital with ease.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-gray-100 p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl hover:scale-105 transition-transform"
          >
            <div className="flex flex-col items-center text-center">
              <div className="text-black">{plan.icon}</div>
              <h3 className="text-2xl font-semibold mt-2 mb-1">{plan.title}</h3>
              <p className="text-gray-700 text-sm mb-3">{plan.description}</p>
              <p className="text-2xl font-bold text-black mb-4">{plan.price}</p>
            </div>

            <ul className="text-gray-800 space-y-2 text-sm mb-4">
              {plan.keyPoints.map((kp, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-black mt-0.5">✔</span>
                  <span>{kp}</span>
                </li>
              ))}
            </ul>

            <div className="text-center mt-2">
              <button
                onClick={() => setSelectedPlan(plan)}
                className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition-all"
              >
                learn more
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup with blur background (detailed report) */}
      {selectedPlan && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/20 flex items-center justify-center z-50 px-4">
<div className="bg-white text-black rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 shadow-2xl relative scrollbar-hide">
            <button
              className="absolute top-3 right-4 text-gray-100 text-xl hover:text-white font-bold"
              onClick={() => setSelectedPlan(null)}
            >
              ✖
            </button>

            <div className="text-center mb-4">
              <div className="flex justify-center mb-3">{selectedPlan.icon}</div>
              <h3 className="text-2xl font-bold mb-1">{selectedPlan.title}</h3>
              <p className="text-gray-700 mb-2 font-semibold">{selectedPlan.price}</p>
            </div>

            <div className="space-y-5 text-sm text-gray-700">
              <div>
                <h4 className="font-bold text-black">Overview:</h4>
                <p>{selectedPlan.details.overview}</p>
              </div>

              <div>
                <h4 className="font-bold text-black">Tech Stack Used:</h4>
                <p>{selectedPlan.details.stack}</p>
                <p className="mt-1 text-xs text-gray-600">
                  (We use MERN primarily. For AI/chatbots or advanced backend work we use Python or Java as appropriate.)
                </p>
              </div>

              <div>
                <h4 className="font-bold text-black">Workflow:</h4>
                <ul className="list-disc ml-6">
                  {selectedPlan.details.workflow.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-black">Price Distribution (example):</h4>
                <ul className="list-disc ml-6">
                  {selectedPlan.details.breakdown.map((cost, i) => (
                    <li key={i}>{cost}</li>
                  ))}
                </ul>
                <p className="mt-2 text-xs text-gray-600">
                  These are example distributions to help you understand where costs go. Final quote depends on scope.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-black">Add-ons & AI Options:</h4>
                <ul className="list-disc ml-6">
                  {selectedPlan.details.addons.map((addon, i) => (
                    <li key={i}>{addon}</li>
                  ))}
                </ul>
                <p className="mt-1 text-xs text-gray-600">
                  We can build chatbots, recommendation engines, or simple AI features using Python (Flask/FastAPI) or Java-based services where appropriate.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-black">Best For:</h4>
                <p>{selectedPlan.details.bestFor}</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdwXjgxgZbFSsouidjZUw9MjPz2KbVdKBVEho5Y2B_LyGFY4Q/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-8 py-2 rounded-full font-semibold hover:bg-gray-800 transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Page5;
