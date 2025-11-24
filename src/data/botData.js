// src/data/botData.js
// SD CodeHub — Organized Knowledge Base for Chatbot

export const botData = {
  // ---------------------------------------------
  // 1. PRICING & PLANS
  // ---------------------------------------------
  processGuidance: [
  {
keywords: [
  "website advice", "website guidance", "technical guidance", 
  "how to build website", "website planning", "website suggestions",
  "best options for website", "which website to choose", 
  "website features help", "help me choose website", "web project advice",
  "website setup guidance", "site recommendation", "website decision"
],
    answer:
"🛠 Website Guidance & Recommendations\n\n" +
"I can help you choose the right setup for your business goals. Here’s how we usually guide our users:\n\n" +

"1️⃣ Hosting Recommendations:\n" +
"- Small or static websites: Basic shared hosting is sufficient.\n" +
"- Dynamic websites or e-commerce: Cloud hosting or VPS ensures better speed, security, and scalability.\n" +
"- I can suggest specific hosting providers and plans based on your budget.\n\n" +

"2️⃣ Website Structure & Number of Pages:\n" +
"- Static sites typically handle 5–10 pages easily.\n" +
"- Dynamic sites with an admin panel can scale to 50+ pages.\n" +
"- I can advise on structuring menus, categories, and future expansion plans.\n\n" +

"3️⃣ Technology & Backend Options:\n" +
"- MERN Stack (MongoDB, Express, React, Node.js) — ideal for dynamic, scalable websites with custom features.\n" +
"- WordPress — perfect for content-focused sites, blogs, or quick deployment.\n" +
"- The choice depends on whether you want e-commerce, AI integrations, or other advanced features.\n\n" +

"💡 Next Steps:\n" +
"- Share your business type and goals.\n" +
"- I’ll suggest 2–3 website ideas, key features, and budget-friendly options.\n" +
"- I can also show example designs or templates to help you make an informed decision.\n\n" +
"With this guidance, you’ll have a clear roadmap for your website without confusion!"
  }
],
  pricing: [
    {
      keywords: [
        "price", "pricing", "cost", "charges", "how much", "rate", "fees",
        "budget", "website price", "site cost", "costing", "price list",
        "pricing plans", "your pricing", "website charges"
      ],
      answer:
        "💰 SD CodeHub — Pricing Overview\n\n" +
        "1) Single Page Website — ₹4,999\n" +
        "2) Double Page Website — ₹5,999\n" +
        "3) Display (Static) Website — ₹7,999 (up to 5 pages)\n" +
        "4) Dynamic Admin Panel Website — ₹14,999 – ₹19,999\n" +
        "5) Professional Brand Plan — ₹24,999+\n" +
        "6) Enterprise Plan — ₹49,999+\n\n" +
        "Notes:\n" +
        "• Prices depend on features & customization.\n" +
        "• 50% advance + 50% on delivery.\n" +
        "• Clear quote provided before starting."
    },
    {
      keywords: ["package", "plans", "plan", "options"],
      answer:
        "📦 SD CodeHub — Packages\n\n" +
        "• Basic Display Plan — ₹7,999\n" +
        "• Business Growth Plan — ₹11,999\n" +
        "• Dynamic Admin Plan — ₹14,999–₹19,999\n" +
        "• Professional Brand — ₹24,999+\n" +
        "• Enterprise — ₹49,999+\n\n" +
        "Custom packages available on request."
    },
    {
      keywords: ["discount", "offers", "promo", "coupon"],
      answer:
        "🎯 Discounts & Offers\n\n" +
        "• Special offers for long-term support clients.\n" +
        "• Bundle discounts (Hosting + Website + Support).\n" +
        "• Educational / NGO discounts available.\n\n" +
        "Ask for a quote to check available discounts."
    },
    {
      keywords: ["payment", "payment terms", "advance", "50%"],
      answer:
        "💳 Payment Terms\n\n" +
        "• 50% advance before starting.\n" +
        "• 50% after completion & approval.\n" +
        "• Domain & hosting renew annually.\n" +
        "• Payment via UPI, Bank Transfer, or Payment Link."
    },
    {
      keywords: ["quote", "estimate", "custom quote", "estimate price"],
      answer:
        "📝 Custom Quote\n\n" +
        "For a precise estimate, we need:\n" +
        "• Business type\n" +
        "• Number of pages\n" +
        "• Required features/integrations\n" +
        "• Timeline preference\n\n" +
        "Type 'start' to get a quick quote now."
    }
  ],

  // ---------------------------------------------
  // 2. HOSTING, DOMAIN & SSL
  // ---------------------------------------------
  hosting: [
    {
      keywords: [
        "hosting", "domain", "ssl", "server", "deploy", "deployment",
        "hosting price", "domain price", "host website", "buy domain",
        "website hosting", "hosting cost", "domain cost"
      ],
      answer:
        "🌐 Hosting & Domain Services\n\n" +
        "• Domain (.com/.in) — ₹799–₹999/year\n" +
        "• Basic Hosting — ₹1,499/year\n" +
        "• Premium Cloud Hosting — ₹3,499/year\n" +
        "• Free SSL on all plans\n\n" +
        "We also handle deployment & setup."
    },
    {
      keywords: ["migrate", "migration", "move website", "transfer domain"],
      answer:
        "🔄 Migration Service\n\n" +
        "Includes:\n" +
        "• Full backup & transfer\n" +
        "• DNS setup\n" +
        "• SSL installation\n" +
        "• Zero/minimal downtime\n\n" +
        "Share your hosting details for a migration plan."
    },
    {
      keywords: ["uptime", "speed", "performance", "cdn"],
      answer:
        "⚡ Performance & Uptime Optimization\n\n" +
        "We ensure fast loading using:\n" +
        "• Caching\n" +
        "• Image optimization\n" +
        "• CDN (Cloudflare)\n" +
        "• Optimized hosting\n\n" +
        "Goal: Under 3 seconds on mobile."
    }
  ],

  // ---------------------------------------------
  // 3. DYNAMIC WEBSITES / ADMIN PANEL
  // ---------------------------------------------
  dynamic: [
    {
      keywords: [
        "dynamic", "admin", "dashboard", "cms", "manage", "content",
        "edit website", "update website", "admin website", "admin panel",
        "backend panel", "web panel", "custom dashboard"
      ],
      answer:
        "⚙ Dynamic Websites & Admin Panel\n\n" +
        "Includes:\n" +
        "• Secure login\n" +
        "• Add/Edit/Delete content\n" +
        "• Image uploads\n" +
        "• Product & status management\n" +
        "• Order/inquiry management\n\n" +
        "Built using React + Node (or custom frameworks)."
    },
    {
      keywords: ["cms", "content management", "edit content", "update website"],
      answer:
        "✍ Content Management (CMS)\n\n" +
        "Manage:\n" +
        "• Text & images\n" +
        "• Blog posts\n" +
        "• Team/gallery\n\n" +
        "Includes CMS usage training."
    },
    {
      keywords: ["user roles", "permissions", "admin access"],
      answer:
        "🔐 User Roles & Permissions\n\n" +
        "• Owner (Full access)\n" +
        "• Editor (Content)\n" +
        "• Viewer (Reports)\n\n" +
        "Keeps your admin area secure."
    }
  ],

  // ---------------------------------------------
  // 4. E-COMMERCE & PAYMENTS
  // ---------------------------------------------
  ecommerce: [
    {
      keywords: [
        "ecommerce", "shop", "online store", "payment", "checkout",
        "cart", "buy products", "product website", "ecom", "estore",
        "ecommerce site", "payment integration"
      ],
      answer:
        "🛒 E-commerce Solutions\n\n" +
        "Features:\n" +
        "• Product catalog\n" +
        "• Cart + Checkout\n" +
        "• Razorpay / Stripe / PayU integration\n" +
        "• Order dashboard\n" +
        "• Basic inventory\n\n" +
        "Timeline: 15–25 days."
    },
    {
      keywords: ["payment gateway", "razorpay", "stripe", "payu", "upi"],
      answer:
        "💳 Payment Gateway Integration\n\n" +
        "Supports:\n" +
        "• Razorpay (UPI, Cards, Wallets)\n" +
        "• Stripe (International)\n" +
        "• PayU\n\n" +
        "Includes testing and secure callback setup."
    },
    {
      keywords: ["tax", "gst", "invoice", "billing"],
      answer:
        "📄 Taxation & Billing Features\n\n" +
        "• GST invoice fields\n" +
        "• PDF invoice generator\n" +
        "• Tax breakdown\n\n" +
        "Advanced ERP/Tally integration on request."
    }
  ],

  // ---------------------------------------------
  // 5. DELIVERY & TIMELINES
  // ---------------------------------------------
  delivery: [
    {
      keywords: [
        "delivery", "time", "timeline", "days", "how long", "duration",
        "completion time", "delivery days", "project time", "how many days"
      ],
      answer:
        "⏳ Delivery Timelines\n\n" +
        "• Static Website — 4–6 days\n" +
        "• Dynamic Admin Panel — 10–14 days\n" +
        "• E-commerce Website — 15–25 days\n\n" +
        "Fast-track options available."
    },
    {
      keywords: ["milestone", "sprint", "phase", "stages"],
      answer:
        "🗂 Project Phases\n\n" +
        "1) Requirements\n" +
        "2) Design\n" +
        "3) Development\n" +
        "4) Testing\n" +
        "5) Deployment\n\n" +
        "Milestone-based updates included."
    }
  ],

  // ---------------------------------------------
  // 6. DEVELOPMENT PROCESS & ONBOARDING
  // ---------------------------------------------
  process: [
    {
      keywords: [
        "process", "how do you work", "workflow", "onboarding",
        "how you work", "working process", "steps", "procedure",
        "project process", "work steps"
      ],
      answer:
        "🔁 Development Process\n\n" +
        "• Discovery\n" +
        "• Mockup approval\n" +
        "• Development\n" +
        "• QA\n" +
        "• Deployment + Training"
    },
    {
      keywords: ["content", "images", "logo", "assets"],
      answer:
        "🖼 Required Content & Assets\n\n" +
        "• Logo\n" +
        "• Brand colors/fonts\n" +
        "• Text for pages\n" +
        "• Product images\n\n" +
        "Content creation service available."
    }
  ],

  // ---------------------------------------------
  // 7. SEO, PERFORMANCE & ANALYTICS
  // ---------------------------------------------
  seo: [
    {
      keywords: [
        "seo", "search engine", "google", "meta", "sitemap",
        "rank", "ranking", "appear on google", "google seo", "seo work"
      ],
      answer:
        "🔎 Basic SEO Included\n\n" +
        "• Meta titles/descriptions\n" +
        "• XML sitemap\n" +
        "• Clean URLs\n" +
        "• Performance optimization\n\n" +
        "Advanced SEO available in maintenance plans."
    },
    {
      keywords: ["analytics", "google analytics", "gtm", "tracking"],
      answer:
        "📊 Analytics & Tracking\n\n" +
        "• GA4 integration\n" +
        "• Tag Manager setup\n" +
        "• Conversion tracking"
    }
  ],

  // ---------------------------------------------
  // 8. MAINTENANCE & SUPPORT
  // ---------------------------------------------
  maintenance: [
    {
      keywords: [
        "maintenance", "support", "monthly", "updates", "patches",
        "website support", "annual support", "site fix", "maintain website"
      ],
      answer:
        "🛠 Maintenance Plans\n\n" +
        "• Basic — ₹499/month\n" +
        "• Standard — ₹999/month\n" +
        "• Premium — ₹1,499/month (with SEO)\n"
    },
    {
      keywords: ["bug", "fix", "issue", "error"],
      answer:
        "🐞 Bug Fix & Emergency Support\n\n" +
        "• Minor bugs — ₹999–₹1,999\n" +
        "• UI changes — ₹2,999–₹4,999\n" +
        "• New feature — ₹5,000+\n"
    }
  ],

  // ---------------------------------------------
  // 9. INTEGRATIONS & APIS
  // ---------------------------------------------
  integrations: [
    {
      keywords: [
        "api", "integration", "crm", "erp", "zapier",
        "connect", "integrate", "api setup", "third party api",
        "connect software"
      ],
      answer:
        "🔗 Integrations & APIs\n\n" +
        "• CRM (Zoho / HubSpot)\n" +
        "• Payment gateways\n" +
        "• Inventory systems\n" +
        "• Zapier / Make automations"
    },
    {
      keywords: ["google map", "map", "gmap", "map integration"],
      answer:
        "📍 Google Maps Integration\n\n" +
        "Includes markers, directions & multiple locations."
    }
  ],

  // ---------------------------------------------
  // 10. SECURITY & PRIVACY
  // ---------------------------------------------
  security: [
    {
      keywords: [
        "security", "ssl", "https", "data", "gdpr",
        "secure", "site security", "privacy", "encrypt", "secure website"
      ],
      answer:
        "🔒 Security & Privacy\n\n" +
        "• Free SSL\n" +
        "• Input validation\n" +
        "• GDPR-friendly templates\n\n" +
        "Advanced security audits on request."
    },
    {
      keywords: ["backup", "restore", "snapshot"],
      answer:
        "💾 Backups & Restore\n\n" +
        "• Regular backups\n" +
        "• One-click restore\n" +
        "• Recommended daily for critical websites"
    }
  ],

  // ---------------------------------------------
  // 11. TROUBLESHOOTING & COMMON ISSUES
  // ---------------------------------------------
  troubleshooting: [
    {
      keywords: [
        "not loading", "site down", "down", "offline", "server error",
        "site slow", "lag", "problem", "error", "issue", "bug report"
      ],
      answer:
        "⚠️ Site Not Loading\n\n" +
        "Possible reasons:\n" +
        "• Domain expired\n" +
        "• DNS issue\n" +
        "• Hosting outage\n\n" +
        "Share your domain for a quick check."
    },
    {
      keywords: ["slow", "loading slow", "lag", "performance issue"],
      answer:
        "🐢 Slow Website Fixes\n\n" +
        "• Compress images\n" +
        "• Enable caching\n" +
        "• Reduce scripts\n" +
        "• Use CDN\n"
    },
    {
      keywords: ["contact form not working", "form not sending", "form error"],
      answer:
        "✉️ Contact Form Issues\n\n" +
        "Often caused by:\n" +
        "• Wrong backend endpoint\n" +
        "• CORS errors\n" +
        "• Missing required fields\n\n" +
        "We can fix or integrate EmailJS / backend."
    }
  ],

  // ---------------------------------------------
  // 12. PORTFOLIO, CASE STUDIES & EXAMPLES
  // ---------------------------------------------
  portfolio: [
    {
      keywords: [
        "portfolio", "work", "examples", "case study", "projects",
        "your work", "previous work", "samples", "demo sites"
      ],
      answer:
        "📁 Portfolio & Case Studies\n\n" +
        "We have delivered websites for:\n" +
        "• Boutiques & salons\n" +
        "• E-commerce stores\n" +
        "• Service businesses\n\n" +
        "Ask your industry for specific samples."
    },
    {
      keywords: ["testimonial", "reviews", "clients", "references"],
      answer:
        "⭐ Client Testimonials\n\n" +
        "Happy clients across multiple industries.\n" +
        "References available with permission."
    }
  ],

  // ---------------------------------------------
  // 13. LEGAL & CONTRACTS
  // ---------------------------------------------
  legal: [
    {
      keywords: [
        "contract", "terms", "agreement", "nda", "privacy policy",
        "legal", "refund", "cancellation", "dispute", "service terms"
      ],
      answer:
        "📜 Contracts & Legal\n\n" +
        "• Simple service agreement\n" +
        "• NDA available\n" +
        "• Privacy policy templates provided"
    },
    {
      keywords: ["refund", "cancellation", "dispute"],
      answer:
        "🔁 Refund & Cancellation\n\n" +
        "Handled case-by-case based on work completed.\n" +
        "We prioritize fair resolution."
    }
  ],

  // ---------------------------------------------
  // 14. SALES & PROPOSALS
  // ---------------------------------------------
  sales: [
    {
      keywords: [
        "bulk", "enterprise", "large project", "integration", "scalable",
        "proposal", "quotation", "quote", "bid", "rfp", "request proposal"
      ],
      answer:
        "🏢 Enterprise Solutions\n\n" +
        "Includes:\n" +
        "• Architecture planning\n" +
        "• AWS / DigitalOcean / Vercel deployment\n" +
        "• Dedicated support"
    },
    {
      keywords: ["quotation", "bid", "rfp", "proposal"],
      answer:
        "🧾 Proposal & Quotation\n\n" +
        "Includes:\n" +
        "• Scope\n" +
        "• Timeline\n" +
        "• Pricing\n" +
        "• Milestones\n\n" +
        "Type 'quote' to start."
    }
  ],

  // ---------------------------------------------
  // 15. SMALL TALK
  // ---------------------------------------------
  smalltalk: [
    {
      keywords: [
        "hello", "hi", "hey", "heyy", "heyyy", "helo", "hii",
        "hi bot", "hello bot", "hey bot", "yo", "sup", "wassup",
        "good morning", "good afternoon", "good evening",
        "gm", "ga", "ge", "namaste", "hi there"
      ],
      answer:
        "Hello! 👋 I'm your SD CodeHub Assistant. How can I help you today?"
    },
    {
      keywords: [
        "how are you", "how r u", "how’s you", "how r you", "are you fine",
        "are you good", "what’s up", "how’s it going", "how are u bot"
      ],
      answer:
        "I’m doing great! 😊 Ready to help you with anything related to SD CodeHub."
    },
    {
      keywords: [
        "joke", "funny", "tell me a joke", "make me laugh",
        "entertain me", "fun", "boring joke", "give joke", "another joke"
      ],
      answer:
        "Sure 😄 Here's a tech joke:\n\n💡 Why did the developer go broke?\n👉 Because he used up all his cache! 🤣"
    },
    {
      keywords: [
        "nothing", "nothing much", "just bored", "bored", "idk",
        "don’t know", "random", "time pass", "just checking", "testing"
      ],
      answer:
        "No worries 😊 I can help you explore website ideas, branding, or pricing whenever you're ready."
    },
    {
      keywords: [
        "thank you", "thanks", "thanku", "thankyou", "thank you so much",
        "thank u", "ty", "thanks a lot", "tysm", "thx", "tnx",
        "good bot", "nice bot", "appreciate", "you are good",
        "awesome", "amazing"
      ],
      answer:
        "You're welcome! 😊 Happy to help anytime."
    },
    {
      keywords: [
        "bye", "tata", "byee", "goodbye", "see you", "gtg",
        "got to go", "talk later", "see you later", "see ya", "ok bye"
      ],
      answer:
        "Goodbye! 👋 Have a great day!"
    }
  ],
 career: [
  {
    keywords: [
      "career", "careers", "job", "jobs", "internship", "internships",
      "vacancy", "vacancies", "hiring", "are you hiring", "any job",
      "career options", "work with you", "apply job", "join team",
      "intern", "intern roles", "intern openings", "apply internship",
      "sd codehub career", "sd codehub jobs", "sd codehub internship",
      "remote internship", "mern internship", "web developer internship",
      "ui ux internship", "sales internship", "designer internship"
    ],
    answer:
      "🚀 Join SD CodeHub – Careers & Internships\n\n" +

      "🔥 Available Roles:\n" +
      "- Sales & Marketing Intern (Remote)\n" +
      "- MERN Stack Developer Intern\n" +
      "- UI/UX Designer Intern\n" +
      "- Frontend Developer (React)\n" +
      "- Backend Developer (Node.js)\n" +
      "- AI & Automation Intern\n" +
      "- Content Writer (Remote)\n\n" +

      "🌟 Why Work With Us:\n" +
      "- Real client projects & portfolio-building\n" +
      "- Learn MERN, UI/UX, AI tools, SEO, and automation\n" +
      "- Flexible work schedule, remote options\n" +
      "- Certificate & mentorship for career growth\n\n" +

      "📩 Apply Now in Carrer Section\n\n" +
      "Or ask me about any role to get detailed info!"
  }
],
  // ---------------------------------------------
  // 16. FALLBACK (Catch-All)
  // ---------------------------------------------
  fallback: [
    {
      keywords: [""],
      answer:
        "I might not fully understand that, but I can help with SD CodeHub services.\n\n" +
        "You can ask about:\n" +
        "• Pricing\n" +
        "• Website development\n" +
        "• Hosting & domain\n" +
        "• Delivery timelines\n" +
        "• Maintenance & support"
    }
  ]
};
