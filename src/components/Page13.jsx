import React from 'react';
import Img1 from '../assets/image4.webp';
import Logo from '../assets/logo.Jpeg'; // Replace with your actual logo
import Icon1 from '../assets/image7.webp';
import Icon2 from '../assets/image8.webp';
import Icon3 from '../assets/image9.webp';
import Icon4 from '../assets/image7.webp'; // Reused icon

const Page13 = () => {
  const listItems = [
    { icon: Icon1, text: 'Explore Partnerships' },
    { icon: Icon2, text: 'Discover' },
    { icon: Icon3, text: 'Learn More' },
    { icon: Icon4, text: 'Get in Touch' },
  ];

  return (
    <section className="min-h-screen bg-white flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-12 gap-12">
      
      {/* LEFT SIDE - Logo and Phone aligned at bottom */}
      <div className="w-full lg:w-1/2 flex items-end justify-center gap-6">
        {/* Logo on left side */}
      <img
  src={Logo}
  alt="Company Logo"
  className="w-20 h-20 md:w-30 md:h-30 object-contain rounded-full shadow-md"
/>


        {/* Phone Image on right side */}
        <div className=" rounded-3xl p-4 flex justify-center items-center w-[280px] md:w-[340px]">
          <img
            src={Img1}
            alt="App Mockup"
            className="w-full h-auto object-contain rounded-2xl"
          />
        </div>
      </div>

      {/* RIGHT SIDE - Text + Icons */}
      <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Partnering for Success
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-8 max-w-md">
          At SD CodeHub, we believe that true success is achieved through meaningful
          partnerships and collaboration.
        </p>

        {/* List of items */}
        <ul className="flex flex-col gap-4">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <img src={item.icon} alt="" className="w-8 h-8" />
              <span className="text-gray-800 text-lg font-medium">{item.text}</span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <button className="mt-8 bg-gray-900 text-white px-6 py-2 rounded-full shadow-md hover:bg-gray-800 transition">
          Let's Start
        </button>
      </div>
    </section>
  );
};

export default Page13;
