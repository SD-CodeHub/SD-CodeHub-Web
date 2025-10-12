import React from "react";
import TopLeftImg from "../assets/image2.webp"; // top-left image
import LaptopImg from "../assets/image3.webp"; // laptop image
import TopCenterImg from "../assets/image1-2.webp"; // top-center floating image

const Page12 = () => {
  return (
    <section className="relative min-h-screen bg-white w-full">
      {/* Top-left decorative image */}
      <img
        src={TopLeftImg}
        alt="Top Left Decorative"
        className="absolute top-0 left-0 w-40 h-80 md:w-56 md:h-80 object-cover pointer-events-none"
      />

      {/* Top-center floating image */}
      

      {/* Main content */}
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen relative z-10">
        {/* Text section */}
        <div className="flex-1 flex flex-col items-start text-left mt-32 lg:mt-0 px-6 lg:px-12 space-y-6 max-w-lg ms-72">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Innovative Solutions <br />
            for Thriving<br/> Businesses
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            5D CodeHub specializes in crafting customized digital solutions that
            elevate our clients’ brands.
          </p>

          <p className="text-gray-700 text-sm md:text-base tracking-wide">
            Empowering Businesses to Succeed
          </p>

          <div className="flex items-center gap-4">
            <button className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
              Get Started
            </button>
            <button className="flex items-center gap-2 text-gray-800 hover:text-gray-600 transition">
              <span className="w-6 h-6 flex items-center justify-center bg-gray-900 text-white rounded-full text-sm">
                →
              </span>
              Discover More
            </button>
          </div>
        </div>

        {/* Laptop image section */}
        <div className="flex-1 flex justify-center lg:justify-start mt-12 lg:mt-0">
          <img
            src={LaptopImg}
            alt="Laptop mockup"
            className="w-4/5 max-w-md rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Page12;
