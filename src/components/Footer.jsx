// src/components/Footer.jsx
import React from 'react';
import {  FaCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t-2 text-pink-500 border-rose-200   py-4  h-full sticky  bottom-0 w-full">
      <div className="container mx-auto flex items-center justify-center">


        {/* Copyright, Terms, Privacy */}
        <div className="flex flex-col items-center">
          <div className="flex items-center  text-rose-500">
            <FaCopyright className="mr-2" />
            <span className='font-semibold'>2024 Divueens</span>
          </div>

        </div>


      </div>
    </footer>
  );
};

export default Footer;
