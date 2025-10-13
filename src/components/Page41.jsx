import React, { useState } from "react";
import { FaLock, FaCode, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import Page16 from "./Page16";

const dummyImg =
  "https://www.webstacks.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fq9c9g16o%2Fproduction%2Fe46f94c21c8de559bccf868916b5549d1011a63d-1600x840.webp&w=3840&q=100";
const dummyImg2 =
  "https://guptadeepak.com/content/images/size/w2000/2024/06/future-of-website-building-AI-automated.webp";
const dummyImg3 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh-nDDohxKUv7mk4JvpRbuGiRCwZ583y7xeQ&s";
const dummyImg4 =
  "https://miro.medium.com/v2/resize:fit:1400/1*O2cB1LBTdHp22-eRukNKog.png";

const projects = [
  {
    title: "Nova Retail AI Platform",
    category: "AI / E-Commerce / Automation",
    desc: "An AI-powered retail system optimizing inventory, analyzing customer trends, and predicting market behavior with advanced machine learning models and real-time analytics.",
    images: [dummyImg, dummyImg2, dummyImg3, dummyImg4],
  },
  {
    title: "EduVerse – Online Learning Portal",
    category: "EdTech / MERN Stack",
    desc: "A next-gen learning platform for seamless collaboration between students and teachers, featuring interactive dashboards, real-time performance tracking, and integrated course management.",
    images: [dummyImg2, dummyImg3, dummyImg, dummyImg4],
  },
  {
    title: "FinCore Banking Dashboard",
    category: "FinTech / Data Visualization",
    desc: "A data-driven platform providing financial institutions with secure access to analytics, risk monitoring, and AI-generated insights for decision-making.",
    images: [dummyImg3, dummyImg, dummyImg2, dummyImg4],
  },
  {
    title: "MedEase – Healthcare Management System",
    category: "Healthcare / Automation / Security",
    desc: "A HIPAA-compliant healthcare management system for hospitals and clinics offering digital patient records, smart appointment scheduling, and analytics dashboards.",
    images: [dummyImg4, dummyImg3, dummyImg2, dummyImg],
  },
];

const Page4 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectImages, setCurrentProjectImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (images, index) => {
    setCurrentProjectImages(images);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? currentProjectImages.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === currentProjectImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="portfolio"
      className="bg-white text-gray-900 flex flex-col items-center px-6 md:px-16 lg:px-24 pt-32 pb-24 space-y-24"
    >
      {/* ==== Project List ==== */}
      <div className="w-full max-w-6xl space-y-20">
         <div className="text-center space-y-6">
    <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
      Our Major Attractions
    </h3>
    <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
      Each project is more than just code — it’s a story of <span className="font-semibold text-gray-900">innovation, teamwork,</span> 
      and <span className="font-semibold text-gray-900">client satisfaction.</span>  
      Here’s what sets <span className="text-blue-600 font-bold">SD CodeHub</span> apart in every collaboration.
    </p>
    <div className="w-20 h-1 bg-black mx-auto rounded-full"></div>
  </div>
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-gray-50 rounded-3xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            {/* ==== Image Section ==== */}
            <div className="p-4">
              {/* Desktop / Tablet View */}
              <div className="hidden md:flex flex-row gap-3">
                {/* Left large image */}
                <div className="relative w-2/3 aspect-[16/9] overflow-hidden rounded-2xl">
                  <img
                    src={project.images[0]}
                    alt={`${project.title} main`}
                    className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Right stacked images */}
                <div className="w-1/3 flex flex-col gap-3">
                  <div className="relative flex-1 aspect-[16/9] overflow-hidden rounded-2xl">
                    <img
                      src={project.images[1]}
                      alt={`${project.title} secondary`}
                      className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div
                    className="relative flex-1 aspect-[16/9] overflow-hidden rounded-2xl cursor-pointer"
                    onClick={() => openModal(project.images, 2)}
                  >
                    <img
                      src={project.images[2]}
                      alt={`${project.title} tertiary`}
                      className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                    />
                    {project.images.length > 3 && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-semibold">
                        +{project.images.length - 3}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Mobile View (One large image with +X overlay) */}
              <div className="md:hidden relative w-full aspect-[16/10] overflow-hidden rounded-2xl">
                <img
                  src={project.images[0]}
                  alt={`${project.title} main`}
                  className="w-full h-full object-cover"
                />
                {project.images.length > 1 && (
                  <div
                    onClick={() => openModal(project.images, 1)}
                    className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer hover:bg-opacity-90 transition"
                  >
                    +{project.images.length - 1}
                  </div>
                )}
              </div>
            </div>

            {/* ==== Project Info ==== */}
            <div className="p-8 space-y-3 text-left">
              <h2 className="text-3xl font-bold text-gray-900">
                {project.title}
              </h2>
              <p className="text-blue-600 text-sm font-semibold uppercase tracking-wide">
                {project.category}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                {project.desc}
              </p>
            </div>

            {/* ==== Security Disclaimer ==== */}
            <div className="p-5 bg-gray-100 border-t border-gray-200 text-gray-500 text-sm flex items-center justify-center gap-2">
              <FaLock className="text-gray-400" />
              <p>
                For security reasons, full project access is restricted. You can
                view screenshots above for a visual overview of our design and
                development quality.
              </p>
            </div>
          </div>
        ))}
      </div>

      <Page16 />

      {/* ==== Modal (Image Viewer) ==== */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300 transition"
            onClick={closeModal}
          >
            <FaTimes />
          </button>

          {/* Left Arrow */}
          <button
            className="absolute left-6 text-white text-4xl hover:text-gray-300 transition"
            onClick={prevImage}
          >
            <FaChevronLeft />
          </button>

          {/* Image */}
          <div className="max-w-4xl w-full">
            <img
              src={currentProjectImages[currentIndex]}
              alt="Project"
              className="w-full h-auto rounded-lg shadow-2xl object-contain"
            />
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-6 text-white text-4xl hover:text-gray-300 transition"
            onClick={nextImage}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default Page4;
