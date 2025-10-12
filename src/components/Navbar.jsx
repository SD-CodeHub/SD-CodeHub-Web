import React from 'react';
import logo from '../assets/logo.jpeg'; // replace with your logo path

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-20 flex justify-between items-center h-16">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-800 hover:text-black font-medium">
            Home
          </a>
          <a href="#about" className="text-gray-800 hover:text-black font-medium">
            About
          </a>
          <a href="#services" className="text-gray-800 hover:text-black font-medium">
            Services
          </a>
          <a href="#contact" className="text-gray-800 hover:text-black font-medium">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
