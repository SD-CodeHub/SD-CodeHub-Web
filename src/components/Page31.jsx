import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Page16 from "./Page16";
import Img1 from "../assets/aiautomationserviece.webp";
import Img2 from "../assets/mernservieces4.webp";
import Img3 from "../assets/fullstackservieces.jpg";
import Img4 from "../assets/uiuxservieces.jpg";
import Img5 from "../assets/consultingservieses.webp";

const services = [
  {
    title: "AI Automation & Integration",
    desc: "Empower your business with AI-driven automation and seamless system integrations. We develop intelligent workflows that boost efficiency, minimize manual work, and connect your tools for maximum productivity.",
    img: Img1,
    reverse: false,
    btn: "Learn More",
    details: [
      "Process automation using AI tools like ChatGPT & Zapier",
      "System integration for CRM, ERP, and APIs",
      "Data workflow automation and analytics pipelines",
      "Business process optimization consulting"
    ],
  },
  {
    title: "MERN Stack Development",
    desc: "We specialize in end-to-end MERN stack solutions — from building robust APIs to crafting responsive UIs. Our scalable, high-performance web apps deliver exceptional user experiences and fast performance.",
    img: Img2,
    reverse: true,
    btn: "Learn More",
    details: [
      "Full-stack web app development (MongoDB, Express, React, Node.js)",
      "API design and backend architecture",
      "UI/UX implementation with React and Tailwind",
      "Deployment, scaling, and optimization"
    ],
  },
  {
    title: "Full-Stack Solutions",
    desc: "From frontend interfaces to backend systems, we deliver complete full-stack development solutions. Our team ensures seamless integration, security, and maintainability across all platforms and technologies.",
    img: Img3,
    reverse: false,
    btn: "Learn More",
    details: [
      "Frontend + backend integrated systems",
      "Cloud deployment and CI/CD setup",
      "Microservice architecture design",
      "Security and performance consulting"
    ],
  },
  {
    title: "UI/UX Design & Prototyping",
    desc: "Create stunning, user-centered designs with our UI/UX expertise. We focus on usability, aesthetics, and prototyping to ensure that every interaction feels intuitive and visually engaging.",
    img: Img4,
    reverse: true,
    btn: "Learn More",
    details: [
      "User research and journey mapping",
      "Wireframing and Figma prototyping",
      "UI design systems and accessibility",
      "Design consultation and testing"
    ],
  },
  {
    title: "Technical Consulting",
    desc: "Get expert technical guidance to plan, optimize, and scale your digital ecosystem. We help you choose the right technologies, streamline architecture, and align IT strategies with business goals.",
    img: Img5,
    reverse: false,
    btn: "Learn More",
    details: [
      "Technology stack recommendation",
      "Architecture design and scalability",
      "Cost optimization and cloud setup",
      "DevOps and performance reviews"
    ],
  },
];

const Page3 = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleOpen = (service) => setSelectedService(service);
  const handleClose = () => setSelectedService(null);

  return (
    <div>
      <Navbar />
      <section className="bg-white py-24 px-6 md:px-16 space-y-28">
        {/* ======= Section Heading ======= */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Services We Provide
          </h1>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Empowering your business with cutting-edge software, scalable systems, 
            and intelligent automation — designed for performance and reliability.
          </p>
        </div>

        {/* ======= Service Cards ======= */}
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative flex flex-col ${
              service.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center justify-center h-auto lg:h-[70vh]`}
          >
            <div className="relative w-full lg:w-[80%] h-auto lg:h-[55vh] border border-black rounded-3xl bg-gray-50 shadow-xl flex flex-col lg:flex-row items-center justify-between overflow-visible">
              
              {/* Image Section */}
              <div
                className={`relative ${
                  service.reverse ? "lg:right-[4%]" : "lg:left-[4%]"
                } lg:absolute top-1/2 lg:-translate-y-1/2 w-full lg:w-[38%] h-[45vh] lg:h-[65vh] overflow-visible z-10`}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-3xl border border-black"
                />
              </div>

              {/* Text Section */}
              <div
                className={`relative z-20 w-full lg:w-[50%] px-6 md:px-10 py-8 lg:py-0 ${
                  service.reverse
                    ? "lg:ml-[10%] text-left"
                    : "lg:ml-auto lg:mr-[10%] text-right"
                }`}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                  {service.desc}
                </p>
                <div className={`${service.reverse ? "text-left" : "text-right"} lg:text-inherit`}>
                  <button
                    onClick={() => handleOpen(service)}
                    className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* ======= Modal Popup ======= */}
        {selectedService && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-2xl shadow-2xl w-[90%] md:w-[60%] max-h-[80vh] overflow-y-auto p-8 relative">
             cd
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedService.title}
              </h2>
              <p className="text-gray-700 mb-6">{selectedService.desc}</p>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                You can consult us for:
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {selectedService.details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div className="mt-8 text-center">
                <button
                  onClick={handleClose}
                  className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
      <Page16 />
    </div>
  );
};

export default Page3;
