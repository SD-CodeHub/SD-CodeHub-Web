import React from 'react';
import sampleImage from '../assets/image1.webp'; // replace with your image path

const Page11 = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-7xl w-full">
        
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2">
          <img
            src={sampleImage}
            alt="Sample"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Text + Button */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-black">
           Discover the Power of SD CodeHub
          </h1>
          <p className="text-lg text-gray-700">
            Unlock the full potential of your business with SD CodeHub's cutting-edge digital solutions
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Explore Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page11;
