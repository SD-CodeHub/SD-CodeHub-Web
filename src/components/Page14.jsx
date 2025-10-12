import React from 'react';
import Img1 from '../assets/image11.webp';
import Img2 from '../assets/image12.webp';
import Img3 from '../assets/image13.webp';

const Page14 = () => {
  // Data for the 3 divs
  const sections = [
    {
      img: Img1,
      title: 'Powering Digital Transformation',
      description: 'Our team of experts is dedicated to helping businesses navigate the ',
      buttonText: 'Explore',
    },
    {
      img: Img2,
      title: 'Driving Business Growth',
      description: 'From streamlining operations to enhancing customer experiences',
      buttonText: 'Get Started',
    },
    {
      img: Img3,
      title: 'Empowering Businesses to Succeed',
      description: 'By combining technical expertise with a deep understanding of our .',
      buttonText: 'Explore ',
    },
  ];

  return (
    <section className="bg-white py-12 px-4 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition"
          >
            {/* Image on top */}
            <img
              src={section.img}
              alt={section.title}
              className="w-32 h-32 md:w-40 md:h-40 object-cover  mb-4"
            />

            {/* Text */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              {section.title}
            </h3>
            <p className="text-gray-600 mb-4">{section.description}</p>

            {/* Button */}
            <button className="bg-gray-900 text-white px-6 py-2  hover:bg-gray-800 transition">
              {section.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page14;
