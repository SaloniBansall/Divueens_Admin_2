// src/components/Footer.jsx
import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-pink-200 text-white py-8 mt-[4rem] absolute bottom-0 w-full">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">
          <img src="/path/to/logo.png" alt="Logo" className="h-12" />
        </div>

        {/* Copyright, Terms, Privacy */}
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-4 text-black">
            <FaCopyright className="mr-2" />
            <span>&copy; 2024 Your Company</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-black hover:text-blue-500">Terms and Conditions</a>
            <a href="#" className="text-black hover:text-blue-500">Privacy Policy</a>
          </div>
        </div>

        {/* Follow Us */}
        <div className="flex items-center">
          <span className="text-black mr-4">Follow Us:</span>
          <a href="#" className="text-black mr-4 hover:text-blue-500">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="#" className="text-black mr-4 hover:text-blue-500">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="#" className="text-black hover:text-blue-500">
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
