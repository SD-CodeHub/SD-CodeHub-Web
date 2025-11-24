import React from 'react';
import { useNavigate } from 'react-router-dom';

const sampleImage =
  'https://static.vecteezy.com/system/resources/previews/054/553/708/non_2x/informatics-and-logistics-solutions-illustration-with-coding-in-a-tech-design-vector.jpg';

const FullScreenTopStartPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen md:h-[80vh] bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Side - Text */}
        <div className="flex flex-col justify-center items-start gap-6">

          <p className="text-sm font-light tracking-widest uppercase text-gray-500">
            The Standard of Digital Excellence
          </p>

          <div className="w-16 h-0.5 bg-yellow-700 opacity-80"></div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            SD CodeHub: <br />
            Mastering the Art of Digital Creation
          </h1>

          <p className="text-lg text-gray-700 max-w-md border-l-4 border-yellow-700 pl-4 italic">
            "Excellence is not an act, but a habit."
            We craft enduring digital solutions built on precision, reliability, and timeless quality.
          </p>

          <button
            onClick={() => navigate('/services')}
            className="bg-gray-900 text-white border-2 border-transparent text-lg font-medium px-10 py-3 mt-4 tracking-wider transition duration-300 hover:bg-white hover:text-gray-900 hover:border-gray-900 shadow-lg rounded-md"
          >
            View Our Services
          </button>
        </div>

        {/* Right Side - Smaller Image */}
       <div className="flex justify-center">
  <div className="w-full max-w-xl">
    <img
      src={sampleImage}
      alt="Digital Showcase"
      className="w-full h-auto rounded-xl object-cover"
    />
  </div>
</div>


      </div>
    </div>
  );
};

export default FullScreenTopStartPage;
