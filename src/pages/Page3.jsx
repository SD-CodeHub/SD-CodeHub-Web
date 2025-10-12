import React from "react";
import Img1 from "../assets/image4.webp";
import Img2 from "../assets/image5.webp";
import Navbar from "../components/Navbar";

const Page3 = () => {
  return (
   <div>
    <Navbar/>
    <section className="bg-white py-16 px-6 md:px-16 space-y-16">
      
      {/* ====== Service 1 ====== */}
      <div className="flex flex-col lg:flex-row items-center justify-between rounded-2xl shadow-lg bg-gray-50 overflow-hidden relative h-[700px]">
        {/* Left - Image */}
        <div className="relative w-full lg:w-2/5 h-full flex justify-center items-center">
          <img
            src={Img1}
            alt="AI Automation"
            className="absolute lg:left-0 top-1/2 -translate-y-1/2 w-full h-[800px] object-cover rounded-2xl"
          />
        </div>

        {/* Right - Text */}
        <div className="w-full lg:w-3/5 p-10 space-y-6 z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            AI Automation Solutions
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Harness the power of Artificial Intelligence to automate workflows,
            enhance decision-making, and reduce manual effort. We deliver smart
            automation systems designed to scale your business efficiently.
          </p>
          <button className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* ====== Service 2 ====== */}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between rounded-2xl shadow-lg bg-gray-50 overflow-hidden relative h-[700px]">
        {/* Right - Image */}
        <div className="relative w-full lg:w-2/5 h-full flex justify-center items-center">
          <img
            src={Img2}
            alt="Full Stack Development"
            className="absolute lg:right-0 top-1/2 -translate-y-1/2 w-full h-[800px] object-cover rounded-2xl"
          />
        </div>

        {/* Left - Text */}
        <div className="w-full lg:w-3/5 p-10 space-y-6 z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Full Stack Development
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            From frontend design to backend architecture, our full-stack
            solutions ensure high performance, scalability, and seamless user
            experience across platforms using MERN and other advanced
            technologies.
          </p>
          <button className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
            Explore More
          </button>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Page3;
