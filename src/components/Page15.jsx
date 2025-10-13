import React from 'react';
import Img1 from '../assets/image14.webp'; // full left-side image

const Page15 = () => {
  return (
    <section className="min-h-screen bg-white flex flex-col lg:flex-row items-center lg:items-stretch overflow-hidden">
      
      {/* Left Column */}
      <div className="flex-1 relative w-full h-[50vh] lg:h-auto">
        <img
          src={Img1}
          alt="Main Left"
          className="w-full h-full object-cover lg:rounded-r-2xl rounded-none"
        />
      </div>

      {/* Right Column: Text + List + Button */}
      <div className="flex-1 flex flex-col justify-center items-start px-6 sm:px-10 md:px-16 py-12 bg-white space-y-6">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Our Methodology <br className="hidden sm:block" /> 
          for Building Exceptional Software
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-lg leading-relaxed">
          At SD CodeHub, our development process is guided by collaboration, innovation, 
          and precision. We combine cutting-edge technology with creative thinking 
          to deliver scalable and efficient digital solutions tailored to our clients’ goals.
        </p>

        {/* List with modern emojis */}
        <ul className="text-gray-700 text-base md:text-lg space-y-2">
          <li><span className="font-medium">Ideate</span> — We start with your vision and define clear goals.</li>
          <li><span className="font-medium">Design & Develop</span> — Our experts craft seamless, scalable solutions.</li>
          <li><span className="font-medium">Test & Deploy</span> — We ensure quality and launch with confidence.</li>
          <li><span className="font-medium">Support & Grow</span> — Continuous improvement and lasting partnerships.</li>
        </ul>

        {/* Button */}
        <button className="mt-4 bg-gray-900 text-white text-sm sm:text-base px-6 py-2.5 rounded-full hover:bg-gray-800 transition-all shadow-md">
          Learn More About Our Process 
        </button>
      </div>
    </section>
  );
};

export default Page15;
