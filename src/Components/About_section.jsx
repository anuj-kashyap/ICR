import React from 'react';
import smilling from '../assets/p2.png';

function AboutSection() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Image Section */}
        <div className="relative lg:w-1/2 lg:h-auto overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500">
          <img
            src={smilling}
            alt="Smiling man"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-12 p-6 sm:p-8 lg:p-10 bg-white rounded-lg shadow-xl transform hover:-translate-y-2 transition-transform duration-500">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-4 sm:mb-6">
            About Us
          </h2>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
            Welcome to Insha Carpets and Rugs, your trusted partner in the world of fine rugs and carpets. As a distinguished Manufacturer, Exporter, and Supplier, we specialize in providing exquisite imported carpets, including Irani and Afghani hand-knotted rugs. Owned and led by Mr. Parvej Ahmad, Insha Carpets and Rugs is dedicated to delivering quality and customized solutions to our esteemed clients.
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 bg-blue-900 text-white text-sm sm:text-base lg:text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
