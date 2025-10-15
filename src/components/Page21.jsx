import React, { useState } from "react";
import {
  FaBullseye,
  FaRocket,
  FaUsers,
  FaLinkedin,
  FaGithub,
  FaCogs,
  // Importing additional icons for the workflow steps
  FaCommentDots, 
  FaPaintBrush,
  FaCode,
  FaCheckCircle,
  FaHeadset
} from "react-icons/fa";
import Page16 from "./Page16";
import CEO1 from "../assets/swapnil_SD_Codehub.jpg";
import CEO2 from "../assets/sachin_SD_CodeHub.jpg";
import ChiefClient from "../assets/sanika_SD_Codehub.jpg";

const AboutPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const stats = [
    { value: "20+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "10+", label: "Industry Partners" },
    { value: "24/7", label: "Support Available" },
  ];

  const workflow = [
    { step: "1. Discussion", desc: "We understand your vision, business, and goals.", icon: FaCommentDots },
    { step: "2. Design", desc: "Our team creates modern UI/UX mockups for your approval.", icon: FaPaintBrush },
    { step: "3. Development", desc: "We code your website using latest technologies (MERN / React).", icon: FaCode },
    { step: "4. Testing & Launch", desc: "We test across devices and deploy it smoothly.", icon: FaCheckCircle },
    { step: "5. Support", desc: "We provide ongoing updates, security, and assistance.", icon: FaHeadset },
  ];

  const values = [
    {
      icon: <FaBullseye className="text-3xl text-black" />,
      title: "Mission",
      points: [
        "Empower every business with smart, scalable digital solutions.",
        "Deliver affordable websites and AI-powered tools with impact.",
        "Transform local startups into recognized online brands.",
      ],
    },
    {
      icon: <FaRocket className="text-3xl text-black" />,
      title: "Vision",
      points: [
        "To lead modern web and AI innovation for every industry.",
        "Focus on automation, usability, and long-term scalability.",
        "Make technology simple, human, and result-driven.",
      ],
    },
    {
      icon: <FaUsers className="text-3xl text-black" />,
      title: "Values",
      points: [
        "Transparency in every step.",
        "Commitment to client growth and satisfaction.",
        "Innovation through teamwork and learning.",
      ],
    },
  ];

  const team = [
    {
      img: CEO1,
      name: "Swapnil Patil",
      role: "Co-Founder & CEO | MERN Stack Developer",
      bio: "Leads full-stack and AI-driven innovation at SD CodeHub, turning complex business problems into clean, efficient web solutions.",
      tags: ["React.js", "Node.js", "AI/ML", "Cloud"],
      social: {
        linkedin: "https://www.linkedin.com/in/swapnil-patil-1029492bb/",
        github: "https://github.com/swapnil2382",
      },
    },
    {
      img: CEO2,
      name: "Sachin Rathod",
      role: "Co-Founder & CTO | Java Full Stack Developer",
      bio: "Specializes in enterprise-level backend architecture, automation, and system design with a focus on performance and security.",
      tags: ["Java", "Spring Boot", "Microservices"],
      social: {
        linkedin: "https://www.linkedin.com/in/sachin-rathod-469168310/",
        github: "https://github.com/FNICKE",
      },
    },
    {
      img: ChiefClient,
      name: "Sanika Jadhav",
      role: "Chief Client & Design Officer",
      bio: "Ensures every project is crafted with purpose — balancing usability, aesthetics, and client needs to deliver seamless digital experiences.",
      tags: ["UI/UX", "Product Design", "Client Strategy"],
      social: {
        linkedin: "https://www.linkedin.com/in/sanika-jadhav-aa8b53329/",
        github: "https://github.com/Sanika1017",
      },
    },
  ];

  const faqs = [
    {
      q: "How long does it take to complete a project?",
      a: "Project duration depends on the complexity — typically 1–3 weeks for standard websites and 4–6 weeks for advanced AI or full-stack apps.",
    },
    {
      q: "Do you provide post-launch support?",
      a: "Yes, we provide 24/7 technical support and maintenance to ensure smooth performance after deployment.",
    },
    {
      q: "What technologies do you use?",
      a: "We primarily use MERN Stack (MongoDB, Express, React, Node), along with Java, Python, and AI/ML frameworks when needed.",
    },
    {
      q: "Can I request custom AI or automation features?",
      a: "Absolutely! We specialize in building tailored automation, analytics dashboards, and AI-powered business tools.",
    },
  ];

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="py-16 px-6 sm:px-10 lg:px-20 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Building the Future, <br />
          <span className="text-black">One Solution at a Time</span>
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-10">
          We turn ideas into impactful digital products using the MERN stack,
          AI tools, and creative design thinking. Founded by passionate
          developers — built for real business growth.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-gray-100 p-6 rounded-xl border border-gray-200"
            >
              <div className="text-3xl font-bold text-black">{stat.value}</div>
              <div className="text-gray-700 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* *** UPDATED: How We Work Section (Black/Gray Steps) *** */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-3 flex justify-center items-center gap-3 text-gray-900">
            <FaCogs className="text-3xl text-gray-800" /> How We Work
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our streamlined workflow ensures every project is built with clarity,
            quality, and precision — from idea to launch.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Timeline Line (Dashed Black/Gray) */}
          <div className="absolute left-6 top-0 bottom-0 w-px border-l-2 border-dashed border-gray-400 hidden sm:block"></div>

          {workflow.map((item, i) => {
              const IconComponent = item.icon; 
              return (
                <div
                  key={i}
                  className={`flex items-start mb-12 sm:pl-16 relative ${i < workflow.length - 1 ? 'pb-4' : ''}`}
                >
                  {/* Step Indicator (Black Circle) */}
                  <div className="absolute left-0 top-0 sm:left-6 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white shadow-lg transform -translate-x-1/2 sm:-translate-x-1/2 z-10">
                    <IconComponent className="text-xl" />
                  </div>

                  {/* Step Content Card */}
                  <div className="bg-white border-t-4 border-black rounded-xl p-6 shadow-xl w-full hover:shadow-2xl transition-shadow duration-300">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.step}</h3>
                    <p className="text-gray-700 mt-2">{item.desc}</p>
                  </div>
                </div>
              )
            })}
        </div>
      </section>
      
---
      {/* What Drives Us */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 bg-white">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3">What Drives Us</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our mission, vision, and values guide how we build — every website,
            app, and AI system is designed to create measurable business impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((val, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md border border-gray-200"
            >
              <div className="mb-4 flex items-center justify-center">
                <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center">
                  {val.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-gray-900">
                {val.title}
              </h3>
              <ul className="text-gray-700 text-sm space-y-2">
                {val.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="before:content-['✔'] before:mr-2 before:text-black"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

---
      {/* Team Section */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 bg-gray-50">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3">Meet Our Leadership</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            The core team behind SD CodeHub — passionate, skilled, and committed
            to building next-generation digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {team.map((person, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={person.img}
                alt={person.name}
                className="w-56 h-56 object-cover rounded-full mx-auto mb-4 border-4 border-black/50"
              />
              <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
              <p className="text-black text-sm mb-2 font-medium">{person.role}</p>
              <p className="text-gray-600 text-sm mb-4">{person.bio}</p>
              <div className="flex justify-center flex-wrap gap-2 mb-3">
                {person.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-center gap-3">
                <a
                  href={person.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-all"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={person.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center text-black hover:bg-black hover:text-white transition-all"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

---
      {/* FAQ Section */}
      <section className="py-20 px-6 sm:px-10 lg:px-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get quick answers to common queries about our process and services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl bg-gray-50 p-5 cursor-pointer hover:border-black transition-colors"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">{faq.q}</h3>
                <span className={`text-2xl font-bold transition-transform duration-300 ${openIndex === i ? 'rotate-45 text-black' : 'rotate-0 text-gray-500'}`}>
                  +
                </span>
            </div>
              {openIndex === i && (
                <p className="text-gray-700 mt-3 text-sm leading-relaxed animate-in fade-in duration-300">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <Page16 />
    </div>
  );
};

export default AboutPage;