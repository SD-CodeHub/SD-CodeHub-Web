import React from "react";
import { FaHandshake, FaLightbulb, FaCogs, FaShieldAlt, FaUsers } from "react-icons/fa";
import Navbar from "./Navbar";

const Page32 = () => {
  return (
    <section className="bg-white text-gray-800 py-10 px-6 md:px-16 lg:px-24">
    
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Building Trust Through <br className="hidden md:block" /> Technology & Transparency
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          At <span className="font-semibold text-gray-900">SD CodeHub</span>, we don’t just develop software — 
          we engineer digital transformations.  
          Our focus is on building <span className="font-bold">meaningful partnerships</span> with our clients, driven by trust, collaboration, and innovation.
        </p>
      </div>

      {/* Approach Overview */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mt-20 items-center">
        {/* Left: Text */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-gray-900">
            Our Methodology — A Partnership for Growth
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Every project we take on is built upon <span className="font-bold">clear communication, modern technology, and a shared vision</span>.  
            From brainstorming to deployment, we work as an extension of your team — ensuring every step aligns 
            with your business goals.
          </p>
          <ul className="space-y-4 text-gray-700 text-base">
            <li className="flex items-start gap-3">
              <FaLightbulb className="text-yellow-500 text-xl mt-1" />
              <span><strong>Innovation-Driven Solutions:</strong> We leverage AI, automation, and modern tech stacks to deliver futuristic software.</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCogs className="text-blue-600 text-xl mt-1" />
              <span><strong>Agile Development:</strong> We follow flexible workflows for rapid prototyping and adaptive delivery.</span>
            </li>
            <li className="flex items-start gap-3">
              <FaUsers className="text-green-600 text-xl mt-1" />
              <span><strong>Client Collaboration:</strong> Our clients are part of every phase — strategy, design, testing, and launch.</span>
            </li>
            <li className="flex items-start gap-3">
              <FaShieldAlt className="text-red-500 text-xl mt-1" />
              <span><strong>Security & Reliability:</strong> Every solution is built with scalability, data security, and reliability in mind.</span>
            </li>
          </ul>
        </div>

        {/* Right: Visual Block */}
        <div className="bg-gray-900 text-white rounded-2xl p-10 flex flex-col justify-center space-y-6 shadow-lg">
          <FaHandshake className="text-6xl text-yellow-400" />
          <h4 className="text-2xl font-semibold">
            A Collaboration That Goes Beyond Code
          </h4>
          <p className="text-gray-300 leading-relaxed">
            We believe great products are built through <span className="font-bold">shared vision</span> and <span className="font-bold">mutual trust</span>.  
            That’s why we don’t act as vendors — we act as long-term partners helping businesses 
            evolve, innovate, and grow through technology.
          </p>
          <p className="text-gray-300 italic">
            “We measure our success not by lines of code, but by the value we create for our clients.”
          </p>
        </div>
      </div>

      {/* Bottom Section — Trust Statement */}
      <div className="max-w-5xl mx-auto text-center mt-24 space-y-6">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Businesses Choose SD CodeHub
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our team combines <span className="font-bold">technical excellence, design precision, and transparent communication</span>
          to deliver impactful software. From startups to enterprises, we ensure every project 
          reflects our commitment to <span className="font-bold">quality, trust, and innovation</span>.
        </p>
        <button className="mt-4 bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition">
          Let’s Build Together
        </button>
      </div>
    </section>
  );
};

export default Page32;
