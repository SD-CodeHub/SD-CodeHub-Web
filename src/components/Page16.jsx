import React from 'react';
import LaptopImg from '../assets/image17.webp'; // replace with your laptop image

const Page16 = () => {
  return (
    <section className="min-h-screen bg-white flex flex-col lg:flex-row items-center px-4 md:px-16 lg:px-24 py-12">
      
      {/* Left Column: Text + List + Button */}
      <div className="flex-1 flex flex-col items-start space-y-6 lg:pr-12">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
         Powering Digital 
        </h2>
        <p>Unlock the full potential of your business with SD CodeHub's </p>

        {/* List */}
        <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-2">
          <li>Explore Solutions</li>
          <li>Learn More</li>
          <li>Get in Touch</li>
        </ul>

        {/* Button */}
        <button className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
         Start Your Journey
        </button>
      </div>

      {/* Right Column: Laptop Image */}
      <div className="flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0">
        <img
          src={LaptopImg}
          alt="Laptop"
          className="w-4/5 max-w-md rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default Page16;
