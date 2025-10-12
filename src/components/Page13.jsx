import React from 'react';
import Img1 from '../assets/image4.webp';
import LaptopImg from '../assets/image6.webp';
import PhoneImg from '../assets/image10.webp';
import Icon1 from '../assets/image7.webp';
import Icon2 from '../assets/image8.webp';
import Icon3 from '../assets/image9.webp';


const Page13 = () => {
  const listItems = [
    { icon: Icon1, text: 'Explore Partnerships' },
    { icon: Icon2, text: 'Discover' },
    { icon: Icon3, text: 'Learn More' },
    
  ];

  return (
    <section className="min-h-screen bg-white flex flex-col lg:flex-row items-start px-4 md:px-16 lg:px-24 py-12 relative">
      
      {/* Left Column */}
      <div className="flex-1 flex flex-col items-center lg:items-start space-y-6 relative">
        {/* Two stacked images in one box */}
        <div className="relative w-40 h-80 md:w-56 md:h-80">
          <img
            src={Img1}
            alt="Image 1"
            className="absolute top-0 left-0 w-full h-1/2 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Laptop image below the stacked box */}
        <img
          src={LaptopImg}
          alt="Laptop"
          className="w-4/5 max-w-md rounded-lg shadow-lg mt-6"
        />

        {/* Text below laptop */}
        <div className="text-center lg:text-left mt-6 max-w-sm space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Revolutionizing the Tech Landscape
          </h2>
          <p className="text-gray-600 md:text-lg">
            Through our innovative approach and deep industry expertise
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 flex flex-col justify-start items-start relative mt-12 lg:mt-0 lg:ml-12 space-y-6">
        {/* Text at the top */}
        <div className="max-w-lg space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Partnering for Success
          </h2>
          <p className="text-gray-600 md:text-lg leading-relaxed">
            At SD CodeHub, we believe that true success is achieved through meaningful 
          </p>
        </div>

        {/* List + phone div */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full mt-6 gap-6">
          
          {/* Left: list with icons */}
          <ul className="flex-1 flex flex-col space-y-4 text-gray-700 text-base md:text-lg">
            {listItems.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <img src={item.icon} alt="icon" className="w-6 h-6" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          {/* Right: phone image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src={PhoneImg}
              alt="Phone"
              className="w-32 md:w-48 h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page13;
