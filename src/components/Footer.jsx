import React from 'react';
import { FaLinkedin, FaTwitter, FaEnvelope, FaGlobe } from 'react-icons/fa';
import Logo from '../assets/logo.png'; // replace with your logo

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-700 pt-16 pb-8 px-6 md:px-16 lg:px-24 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Section 1: Logo + copyright */}
        <div className="flex flex-col items-start space-y-4">
          <img src={Logo} alt="SD CodeHub Logo" className="w-32 h-auto rounded-md" />
          <p className="text-gray-500 text-sm leading-relaxed">
            © {new Date().getFullYear()} <span className="font-semibold text-gray-800">SD CodeHub</span> <br />
            All rights reserved.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            {['Home', 'About', 'Services', 'Blog'].map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-gray-900 hover:translate-x-1 transition-all duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3: Company */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
          <ul className="space-y-2 text-gray-600">
            {['About Us', 'Careers', 'Press', 'Privacy Policy'].map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-gray-900 hover:translate-x-1 transition-all duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Section 4: Connect */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-gray-500" />
              <a href="mailto:info@sdcodehub.com" className="hover:text-gray-900 transition">
                codehubsd@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaGlobe className="text-gray-500" />
              <a
                href="https://www.sdcodehub.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition"
              >
                www.sdcodehub.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaLinkedin className="text-gray-500" />
              <a
                href="https://www.linkedin.com/company/sdcodehub"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition"
              >
                LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaTwitter className="text-gray-500" />
              <a
                href="https://twitter.com/sdcodehub"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
        <p>Designed & Developed by <span className="font-semibold text-gray-800">SD CodeHub</span></p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="#" className="hover:text-gray-900 transition">Terms</a>
          <a href="#" className="hover:text-gray-900 transition">Privacy</a>
          <a href="#" className="hover:text-gray-900 transition">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
