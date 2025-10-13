import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaUser,
  FaClipboardList,
  FaRegPaperPlane,
  FaMapMarkerAlt,
  FaClock,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const ContactPage = () => {
  const [enquiryType, setEnquiryType] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, enquiryType, selectedService });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ====== Hero Section ====== */}
      <section className="pt-10 pb-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
              Start Your Next Digital Journey
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Transform your vision into reality. Our team is ready to collaborate on innovative solutions
              that drive real business impact.
            </p>
          </div>

          {/* ====== Main Content Grid ====== */}
          <div className="grid lg:grid-cols-3 gap-10 justify-center">
            {/* ===== Contact Form ===== */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-gray-300 p-6 sm:p-8 md:p-10">
                <div className="mb-8 text-center sm:text-left">
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
                    Send us a message
                  </h2>
                  <p className="text-gray-500 text-sm sm:text-base">
                    We typically respond within 24 hours
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-black flex items-center gap-2">
                        <FaUser className="text-black text-xs" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-2 focus:ring-gray-200 outline-none transition bg-white text-black placeholder-gray-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-black flex items-center gap-2">
                        <FaEnvelope className="text-black text-xs" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-2 focus:ring-gray-200 outline-none transition bg-white text-black placeholder-gray-500"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-black flex items-center gap-2">
                      <FaPhoneAlt className="text-black text-xs" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="contact"
                      placeholder="+91 98765 43210"
                      value={formData.contact}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-2 focus:ring-gray-200 outline-none transition bg-white text-black placeholder-gray-500"
                    />
                  </div>

                  {/* Enquiry Type */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-black block">
                      What can we help you with?
                    </label>

                    <div className="grid grid-cols-2 gap-3">
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() => setEnquiryType("service")}
                        onKeyPress={(e) => e.key === "Enter" && setEnquiryType("service")}
                        className={`cursor-pointer text-center select-none px-5 py-3 rounded-xl font-medium transition-all duration-200 ${
                          enquiryType === "service"
                            ? "bg-gray-200 text-black shadow-inner"
                            : "bg-white text-black border border-gray-300 hover:bg-gray-100"
                        }`}
                      >
                        Service Enquiry
                      </div>

                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() => setEnquiryType("general")}
                        onKeyPress={(e) => e.key === "Enter" && setEnquiryType("general")}
                        className={`cursor-pointer text-center select-none px-5 py-3 rounded-xl font-medium transition-all duration-200 ${
                          enquiryType === "general"
                            ? "bg-gray-200 text-black shadow-inner"
                            : "bg-white text-black border border-gray-300 hover:bg-gray-100"
                        }`}
                      >
                        General Enquiry
                      </div>
                    </div>
                  </div>

                  {/* Service Dropdown */}
                  {enquiryType === "service" && (
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-black flex items-center gap-2">
                        <FaClipboardList className="text-black text-xs" />
                        Select Service
                      </label>
                      <select
                        name="service"
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-2 focus:ring-gray-200 outline-none transition bg-white text-black"
                      >
                        <option value="">Choose a service...</option>
                        <option value="ai">AI Automation & Integration</option>
                        <option value="mern">MERN Stack Development</option>
                        <option value="fullstack">Full-Stack Solutions</option>
                        <option value="uiux">UI/UX Design & Prototyping</option>
                        <option value="consulting">Technical Consulting</option>
                      </select>
                    </div>
                  )}

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-black block">
                      Tell us about your project
                    </label>
                    <textarea
                      name="message"
                      placeholder="Share your ideas, requirements, or questions..."
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-2 focus:ring-gray-200 outline-none transition bg-white text-black placeholder-gray-500 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full bg-black text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-3"
                  >
                    <FaRegPaperPlane className="text-lg" />
                    Send Message
                  </button>
                </div>
              </div>
            </div>

            {/* ===== Contact Info Sidebar ===== */}
            <div className="flex justify-center">
              <div className="w-full max-w-md space-y-6">
                {/* Quick Contact Card */}
                <div className="bg-gray-900 rounded-2xl p-8 text-white shadow-xl border border-gray-800">
                  <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="bg-gray-800 p-3 rounded-lg">
                        <FaEnvelope className="text-lg" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Email Us</p>
                        <p className="font-semibold">codehubsd@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-gray-800 p-3 rounded-lg">
                        <FaPhoneAlt className="text-lg" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Call Us</p>
                        <p className="font-semibold">+91 9604787967</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-gray-800 p-3 rounded-lg">
                        <FaMapMarkerAlt className="text-lg" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Location</p>
                        <p className="font-semibold">Navi Mumbai, Maharashtra</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-gray-800 p-3 rounded-lg">
                        <FaClock className="text-lg" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Working Hours</p>
                        <p className="font-semibold">Mon - Fri, 9AM - 6PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-800">
                    <p className="text-sm text-gray-400 mb-4">Follow Us</p>
                    <div className="flex gap-3">
                      <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition">
                        <FaLinkedin className="text-lg" />
                      </a>
                      <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition">
                        <FaTwitter className="text-lg" />
                      </a>
                      <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition">
                        <FaGithub className="text-lg" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Response Time Card */}
                <div className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-900 p-2 rounded-lg">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-white">We're Online</p>
                      <p className="text-sm text-gray-400">Average response time: 2 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
