import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import CEO1 from "../assets/image1.webp";
import CEO2 from "../assets/image2.webp";
import ChiefClient from "../assets/image3.webp";
import { FaRobot, FaCode, FaReact, FaPalette, FaHandshake } from "react-icons/fa";

const Page21 = () => {
  return (
    <section className="bg-white text-gray-800 min-h-screen flex flex-col items-center px-6 md:px-16 lg:px-24 py-16 space-y-20">

      {/* About Section */}
      <div className="max-w-5xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          About US
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-gray-700">
          At <span className="font-semibold">SD CodeHub</span>, we are passionate about turning ideas into intelligent digital solutions. 
          We specialize in AI automation, full-stack and MERN stack development, and UI/UX design — helping businesses modernize and scale through technology.
        </p>
        <p className="text-lg text-gray-700">
          Our mission is to bridge the gap between clients and technology through transparent communication, 
          creativity, and innovation. We don’t just build software — we build long-term partnerships with our clients.
        </p>
      </div>

      {/* Services Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <FaRobot className="text-5xl text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">AI Automation</h3>
          <p className="text-gray-600">Empowering workflows through intelligent automation and AI integration.</p>
        </div>

        <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <FaCode className="text-5xl text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Full-Stack Development</h3>
          <p className="text-gray-600">Robust end-to-end development with modern backend and frontend technologies.</p>
        </div>

        <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <FaReact className="text-5xl text-cyan-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">MERN Stack Solutions</h3>
          <p className="text-gray-600">Building fast, dynamic web apps using MongoDB, Express, React, and Node.js.</p>
        </div>

        <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <FaPalette className="text-5xl text-pink-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
          <p className="text-gray-600">Crafting seamless, user-friendly, and visually appealing digital experiences.</p>
        </div>
      </div>

      {/* Core Team Section */}
      <div className="w-full max-w-6xl text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Core Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* CEO 1 */}
          <div className="flex flex-col items-center">
            <img src={CEO1} alt="CEO 1" className="w-40 h-40 rounded-full object-cover shadow-md mb-4" />
            <h3 className="text-xl font-semibold">Saniya Deshmukh</h3>
            <p className="text-gray-600">Co-Founder & CEO</p>
          </div>

          {/* CEO 2 */}
          <div className="flex flex-col items-center">
            <img src={CEO2} alt="CEO 2" className="w-40 h-40 rounded-full object-cover shadow-md mb-4" />
            <h3 className="text-xl font-semibold">Sanika Jadhav</h3>
            <p className="text-gray-600">Co-Founder & CEO</p>
          </div>

          {/* Chief Client Officer */}
          <div className="flex flex-col items-center">
            <img src={ChiefClient} alt="Chief Client" className="w-40 h-40 rounded-full object-cover shadow-md mb-4" />
            <h3 className="text-xl font-semibold">Rohan Patil</h3>
            <p className="text-gray-600">Chief Client Officer</p>
          </div>
        </div>
      </div>

      {/* Client-Company Connection Section */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between bg-gray-100 rounded-2xl p-8 shadow-inner">
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <FaHandshake className="text-blue-600" /> Strong Client Connections
          </h3>
          <p className="text-gray-700">
            At SD CodeHub, we believe success comes from trust and collaboration. 
            Our team works closely with clients to understand their goals, offering personalized 
            solutions and continuous support throughout the project journey.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>

        <div className="flex-1 mt-8 md:mt-0 md:ml-8 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/9068/9068922.png"
            alt="Client Connection"
            className="w-56 mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Page21;
