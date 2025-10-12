import React from 'react';
import Img1 from '../assets/image14.webp'; // full left-side image
import Img2 from '../assets/image15.webp'; // overlapping image

const Page15 = () => {
  return (
    <section className="min-h-screen bg-white flex flex-col lg:flex-row px-4 md:px-16 lg:px-24 py-12 relative">
      
      {/* Left Column */}
      <div className="flex-1 relative w-full h-full lg:h-[80vh]">
        {/* Main left image */}
        <img
          src={Img1}
          alt="Main Left"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />

        {/* Overlapping second image */}
        <img
          src={Img2}
          alt="Overlapping"
          className="absolute right-0 bottom-0 w-40 md:w-56 h-40 md:h-56 object-cover rounded-lg shadow-lg transform translate-x-1/4 translate-y-1/4"
        />
      </div>

      {/* Right Column: Text + List + Button */}
      <div className="flex-1 flex flex-col justify-center items-start mt-12 lg:mt-0 lg:ml-12 space-y-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
         Secure and Reliable Payment Solutions
        </h2>
        <li>Streamline your payment processing with SD CodeHub's cutting-edge payment </li>

        {/* List */}
        <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-2">
          <li>Learn More</li>
          <li>Explore Solutions</li>
          <li>Get Started</li>
        </ul>

        {/* Button */}
        <button className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
          Sign Up Now
        </button>
      </div>
    </section>
  );
};

export default Page15;
