import React from 'react';
import Logo from '../assets/logo.jpeg'; // replace with your logo

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Section 1: Logo + copyright */}
        <div className="flex flex-col items-start space-y-4">
          <img src={Logo} alt="SD CodeHub Logo" className="w-32 h-auto" />
          <p className="text-gray-400 text-sm">
            © 2025 SD CodeHub, Inc.<br />
            All rights reserved.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="text-gray-500 cursor-pointer">Home</li>
            <li className="text-gray-500 cursor-pointer">About</li>
            <li className=" text-gray-500 cursor-pointer">Services</li>
            <li className="text-gray-500 cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Section 3: Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="text-gray-500 cursor-pointer">About Us</li>
            <li className="text-gray-500 cursor-pointer">Careers</li>
            <li className="text-gray-500 cursor-pointer">Press</li>
            <li className="text-gray-500 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Section 4: Connect */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="mailto:info@sdcodehub.com" className="hover:text-white">
                info@sdcodehub.com
              </a>
            </li>
            <li>
              <a href="https://www.sdcodehub.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                www.sdcodehub.com
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/sdcodehub" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://twitter.com/sdcodehub" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Twitter
              </a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
