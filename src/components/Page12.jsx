import React from "react";
import TopLeftImg from "../assets/image2.webp"; // top-left image
import LaptopImg from "../assets/image3.webp"; // laptop image

const Page12 = () => {
  return (
    <section className="relative min-h-screen bg-white w-full">
      <div className="flex flex-col md:flex-row min-h-screen relative z-10">

        {/* Block 1: Top-left decorative image (20% width, hidden on mobile) */}
        <div className="hidden md:flex md:w-1/5 justify-start items-start relative">
          <img
            src={TopLeftImg}
            alt="Top Left Decorative"
            className="absolute top-0 left-0 w-40 h-100 md:w-56 md:h-auto object-cover pointer-events-none animate-float rounded-r-xl"
          />
        </div>

        {/* Block 2: Text content (40% width) */}
        <div className="w-full md:w-2/5 flex flex-col justify-center items-start px-6 md:px-12 space-y-6 mt-12 md:mt-0">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Innovative Solutions <br />
            for Thriving <br /> Businesses
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            5D CodeHub specializes in crafting customized digital solutions that
            elevate our clients’ brands.
          </p>

          <p className="text-gray-700 text-sm md:text-base tracking-wide">
            Empowering Businesses to Succeed
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition w-full sm:w-auto text-center">
              Get Started
            </button>
            <button className="flex items-center gap-2 text-white hover:text-gray-200 transition w-full sm:w-auto justify-center sm:justify-start">
              Discover More
              <span className="w-6 h-6 flex items-center justify-center bg-gray-900 text-white rounded-full text-sm">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Block 3: Laptop image (40% width, centered, 60vh on desktop) */}
        <div className="w-full md:w-2/5 flex justify-center items-center mt-8 md:mt-0 px-6 md:px-0">
          <img
            src={LaptopImg}
            alt="Laptop mockup"
            className="w-full lg:w-[90%] h-auto md:h-[60vh] object-contain max-w-lg rounded-lg "
          />
        </div>

      </div>
    </section>
  );
};

export default Page12;
