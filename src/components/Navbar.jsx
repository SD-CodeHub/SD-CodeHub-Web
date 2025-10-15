import React, { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"; // replace with your logo path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <nav className="bg-gray-100 backdrop-blur-md w-full fixed top-0 left-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between h-20 relative">

        {/* Left: Logo */}
        <div className="flex-shrink-0 absolute left-6 md:left-12">
          <img src={logo} alt="Logo" className="h-25 w-auto object-contain" />
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex space-x-10 mx-auto">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `text-gray-800 font-medium text-base relative group transition-all 
                 ${isActive ? "text-black font-semibold" : "hover:text-black"}`
              }
            >
              {item.name}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </div>

        {/* Right: Contact Button */}
        <div className="absolute right-6 md:right-12 hidden md:block">
          <NavLink
            to="https://docs.google.com/forms/d/e/1FAIpQLSdwXjgxgZbFSsouidjZUw9MjPz2KbVdKBVEho5Y2B_LyGFY4Q/viewform?usp=header"
            className="bg-gray-900 text-white px-5 py-2 rounded-full font-medium hover:bg-black transition-all duration-300 shadow-sm"
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <HiX className="w-7 h-7" /> : <HiOutlineMenuAlt3 className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-gray-700 font-medium text-lg transition ${
                      isActive ? "text-black font-semibold" : "hover:text-black"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            <li>
              <NavLink
                to="https://docs.google.com/forms/d/e/1FAIpQLSdwXjgxgZbFSsouidjZUw9MjPz2KbVdKBVEho5Y2B_LyGFY4Q/viewform?usp=header"
                onClick={() => setIsOpen(false)}
                className="bg-gray-900 text-white px-6 py-2 rounded-full font-medium hover:bg-black transition-all duration-300"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
