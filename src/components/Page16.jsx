import React from 'react';
import LaptopImg from '../assets/image17.webp'; // replace with your laptop/contact illustration

const Page16 = () => {
  return (
    <section className="min-h-screen bg-white flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 lg:px-24 py-16">
      
      {/* Left Column: Text + Contact Info */}
      <div className="flex-1 flex flex-col items-start space-y-6 lg:pr-12 text-left">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Let’s Build Something <br className="hidden sm:block" />
          Incredible Together
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-lg leading-relaxed">
          Have a project in mind or want to discuss how SD CodeHub can help your business
          grow? We’d love to hear from you. Get in touch with our expert team today.
        </p>

        {/* Contact Info */}
        <div className="space-y-3 text-gray-700 text-base sm:text-lg">
          <p><span className="font-medium">Email:</span> codehubsd@gmail.com</p>
          <p><span className="font-medium">Phone:</span> +91 99309 94315</p>
          <p><span className="font-medium">Location:</span> Navi Mumbai , Maharastra</p>
        </div>

        {/* Button */}
        <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSdwXjgxgZbFSsouidjZUw9MjPz2KbVdKBVEho5Y2B_LyGFY4Q/viewform?usp=header"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-gray-900 text-white text-sm sm:text-base px-6 py-2.5 rounded-full hover:bg-gray-800 transition-all shadow-md mt-4"
>
  Send a Message
</a>

      </div>

      {/* Right Column: Illustration / Image */}
      <div className="flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0">
        <img
          src={LaptopImg}
          alt="Contact Illustration"
          className="w-4/5 max-w-md rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
};

export default Page16;
