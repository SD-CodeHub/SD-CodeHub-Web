import React from 'react';
import Img1 from '../assets/image11.webp';
import Img2 from '../assets/image12.webp';
import Img3 from '../assets/image13.webp';

const Page14 = () => {
  const sections = [
    {
      img: Img1,
      title: 'Powering Digital Transformation',
      description:
        'Our team of experts is dedicated to helping businesses navigate the digital landscape efficiently.',
      buttonText: 'Explore',
    },
    {
      img: Img2,
      title: 'Driving Business Growth',
      description:
        'From streamlining operations to enhancing customer experiences, we drive results that matter.',
      buttonText: 'Get Started',
    },
    {
      img: Img3,
      title: 'Empowering Businesses to Succeed',
      description:
        'By combining technical expertise with deep industry insight, we empower companies to excel.',
      buttonText: 'Explore',
    },
  ];

  return (
    <section className="bg-white py-12 px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Heading Section */}
        <div className="text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-3 break-words">
            Revolutionizing the Tech<br />Landscape
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed break-words">
            Through our innovative approach<br />and deep industry expertise
          </p>
        </div>

        {/* 3 Box Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-5 sm:p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <img
                src={section.img}
                alt={section.title}
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover mb-4 rounded-full"
              />

              {/* Text */}
              <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-gray-900 mb-2 break-words">
                {section.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 leading-snug break-words">
                {section.description}
              </p>

              {/* Button */}
              <button className="bg-gray-900 text-white text-xs sm:text-sm md:text-base px-4 py-2 sm:px-6 sm:py-2.5 rounded-full hover:bg-gray-800 transition">
                {section.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page14;
