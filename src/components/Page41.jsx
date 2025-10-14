import React, { useState } from "react";
import { FaLock, FaCode, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import Page16 from "./Page16";
import Food1 from "../assets/Food1.jpg";
import Food2 from "../assets/Food2.jpg";
import Food3 from "../assets/Food3.jpg";
import Servilance0 from "../assets/Servilance0.jpg";
import Servilance1 from "../assets/Servilance1.jpg";
import Servilance2 from "../assets/Servilance2.jpg";
import Servilance3 from "../assets/Servilace3.jpg";
import Automation1 from "../assets/Automation1.jpg";
import Automation2 from "../assets/Automation2.jpg";
import Automation3 from "../assets/Automation3.jpg";
import Trip1 from"../assets/Trip1.jpg";
import Trip2 from"../assets/Trip2.jpg";
import Trip3 from"../assets/Trip3.jpg";
import Trip4 from"../assets/Trip4.jpg";
import Trip5 from"../assets/Trip5.jpg";
import Invest1 from"../assets/investment1.png";
import Invest2 from"../assets/investment2.png";
import Invest3 from"../assets/investment3.png";
import Invest4 from"../assets/investment4.png"; 
import PT1 from"../assets/parents1.png";
import PT2 from"../assets/parents2.png";
import PT3 from"../assets/parents3.png";
import PT4 from"../assets/parents4.png";
import PT5 from"../assets/parents5.png";
import Vendor1 from"../assets/vendor1.jpg";
import Vendor2 from"../assets/vendor2.jpg";
import Vendor3 from"../assets/vendor3.jpg";
import Vendor4 from"../assets/vendor4.jpg";
import Vendor5 from"../assets/vendor5.jpg";
import Vendor6 from"../assets/vendor6.jpg";
 

const projects = [
  {
  title: "Parents–Teacher Communication Portal",
  category: "EdTech / Web Platform",
  desc: "A secure web platform designed to enhance communication between parents and teachers. It features student progress tracking, attendance monitoring, report generation, and direct messaging. The system promotes transparency and collaboration to support student growth and academic success.",
  images: [PT1, PT2, PT3, PT4, PT5],
},
{
  title: "Vendor Allocation & Management System",
  category: "Enterprise / Web Application",
  desc: "A web-based solution that streamlines vendor allocation, performance tracking, and contract management. It automates vendor selection based on predefined criteria, optimizes resource distribution, and provides analytics dashboards for better procurement decisions and operational efficiency.",
  images: [Vendor1, Vendor2, Vendor3, Vendor4, Vendor5, Vendor6],
},


  {
    title: "Food Delivery App with Real-Time Tracking",
    category: "FoodTech / Mobile App",
    desc: "A mobile app for ordering food with real-time delivery tracking, integrated payment gateways, and personalized recommendations based on user preferences.",
    images: [Food1, Food2, Food3],
  },
  
  {
    title: "KYC Automation Tool",
    category: "FinTech / AI / Identity Verification",
    desc: "A next-gen platform streamlining Know Your Customer (KYC) processes with AI-driven automation, featuring secure document uploads, real-time validation status, intelligent co-pilot suggestions, and voice-assisted agents for ASHA workers with multi-language and offline capabilities to ensure fast, compliant identity verification in the digital age.",
    images: [Automation1, Automation2, Automation3],
  },
  {
    title: "TripYatra - Travel Booking Platform",
    category: "TravelTech / MERN Stack",
    desc: "A comprehensive travel booking platform offering flight, hotel, and car rental services with user-friendly search, secure payments, and personalized recommendations.",
    images: [Trip1, Trip2, Trip3, Trip4, Trip5],
  },
{
  title: "Smart Investment Portal",
  category: "FinTech / Web Platform",
  desc: "A comprehensive web platform that enables users to manage portfolios, track market trends in real time, and invest in stocks, mutual funds, or crypto assets. Features include data visualization dashboards, AI-driven insights, and secure authentication for seamless investment experiences.",
  images: [Invest1, Invest2, Invest3, Invest4],
},

{
    title: "Live Servilance System",
    category: "Security / AI / Real-Time Monitoring",
    desc: "An advanced AI-driven dashboard for real-time monitoring, featuring live camera feeds, intelligent alerts for offline cameras or violence detection, audio upload analysis for screams, and proactive notifications to enhance security in environments like offices and public spaces",
    images: [Servilance0, Servilance1, Servilance2, Servilance3],
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
