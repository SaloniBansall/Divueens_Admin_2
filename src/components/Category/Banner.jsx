import React from 'react';

const Banner = ({ image, title, description, link }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href={link} className="text-blue-500 hover:text-blue-700">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Banner;