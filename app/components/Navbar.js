"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = ({ input, handleInputField, handleEnterKey }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // Trigger the passed function when Enter is pressed
      handleEnterKey(input); // Pass the input value to the function
    }
  };

  return (
    <div>
      <nav className="bg-black h-20 w-full flex justify-between items-center px-8 shadow-lg fixed">
        {/* Logo */}
        <div className="text-white text-3xl font-extrabold tracking-wider">
          <a href="#">any<span className='text-amber-500 border-b-3'>Search</span></a>
        </div>

        {/* Desktop Input Field */}
        <div className="hidden lg:flex border-l-2 border-r-2 pl-2 pr-4 flex-row items-center m-auto input-field w-full max-w-md rounded-lg shadow-lg">
          <label
            htmlFor="input"
            className="block m-2 w-[50%] text-lg font-semibold text-gray-700"
          >
            Search Image
          </label>
          <input
            type="text"
            id="input"
            onChange={handleInputField}
            onKeyDown={handleKeyDown}
            className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300"
            placeholder="Enter keywords..."
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6">
          <ul className="flex space-x-6">
            <li className="nav-item">
              <Link
                href="/"
                className="text-white text-lg font-semibold hover:text-yellow-300 transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/about"
                className="text-white text-lg font-semibold hover:text-yellow-300 transition-all duration-300"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/services"
                className="text-white text-lg font-semibold hover:text-yellow-300 transition-all duration-300"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/feedback"
                className="text-white text-lg font-semibold hover:text-yellow-300 transition-all duration-300"
              >
                Feedback
              </Link>
            </li>
          </ul>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-3xl focus:outline-none"
          >
            {isMenuOpen ? 'X' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-800 p-4 w-full absolute top-[80px]">
           <div className="input-field w-full max-w-md mb-10 rounded-lg shadow-lg ">
                <label
                  htmlFor="input"
                  className="block text-xl font-semibold text-gray-700 text-center"
                >
                  Search Image
                </label>
                <input
                  type="text"
                  id="input"
                  onChange={handleInputField}
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300"
                  placeholder="Enter keywords..."
                  disabled
                />
              </div>
          <ul className="flex flex-col items-center space-y-4">
            <li className="nav-item">
              <Link
                href="/"
                className="border-b-2 text-white text-lg font-semibold hover:text-yellow-300 transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/about"
                className="border-b-2 text-white text-lg font-semibold hover:text-yellow-300 transition-all duration-300"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/services"
                className="border-b-2 text-white text-lg font-semibold hover:text-yellow-300 transition-all duration-300"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/feedback"
                className="border-b-2 text-white text-lg font-semibold hover:text-yellow-300 transition-all duration-300"
              >
                Feedback
              </Link>
            </li>

            {/* Mobile Search Input */}
          
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
