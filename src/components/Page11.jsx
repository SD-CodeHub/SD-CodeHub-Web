import React from 'react';
import { useNavigate } from 'react-router-dom';
import sampleImage from '../assets/image1.webp'; // replace with your image path

const Page11 = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white w-full min-h-screen flex items-start justify-center md:pt-0">
      <div className="flex flex-col md:flex-row items-center w-full">

        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 p-4 md:p-10">
          <img
            src={sampleImage}
            alt="Sample"
            className="w-full h-auto md:h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Text + Button */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-6 md:p-16 gap-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
            Discover the Power of SD CodeHub
          </h1>
          <p className="text-base sm:text-lg text-gray-700">
            Unlock the full potential of your business with SD CodeHub's cutting-edge digital solutions.
          </p>
          <button
            onClick={() => navigate('/services')}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Explore Our Services
          </button>
        </div>

      </div>
    </div>
  );
};

export default Page11;
