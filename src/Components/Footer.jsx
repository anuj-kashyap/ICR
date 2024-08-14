import React from "react";
import gmail from '../assets/gmail.png';
import call from '../assets/call.png';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-9 pb-2">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          <div className="text-center md:text-left">
            <img src={logo} alt="Logo" className="w-20 h-14 mx-auto md:mx-0" />
            <p className="text-gray-400 mt-6">
              At Insha Carpets and Rugs, we blend tradition with innovation to craft carpets that not only adorn your spaces but also reflect timeless elegance. Join us on our journey to elevate your spaces with the luxury and sophistication our carpets bring.
            </p>
          </div>

          <div className="text-center md:text-left lg:ml-16">
            <h4 className="text-2xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold mb-6">Contact Us</h4>
            <div className="flex justify-center md:justify-start items-center mb-4">
              <img src={gmail} alt="Gmail" className="w-6 h-6 mr-2" />
              <a
                href="mailto:inshacarpetsandrugs@gmail.com"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
              >
                inshacarpetsandrugs@gmail.com
              </a>
            </div>
            <div className="flex justify-center md:justify-start items-center mb-4">
              <img src={call} alt="Call" className="w-6 h-6 mr-2" />
              <p className="text-gray-400">
                +91 9172737408 | +91 7977143488
              </p>
            </div>
            <p className="mb-4 text-gray-400">
              <strong>Factory Office:</strong> Laxmanpatti Gyanpur, Bhadohi, UP India (221304)
            </p>
            <p className="mb-4 text-gray-400">
              <strong>Branch Office:</strong> 221, 2nd Floor, Powai Plaza, Hiranandani Powai, Mumbai-400076
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Insha Carpet And Rugs. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
