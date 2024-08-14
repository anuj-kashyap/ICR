import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm shadow-black p-4 md:p-6">
      <div className=" mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center ml-3">
          <img src={logo} alt="logo" className='w-20 h-14' />
        </div>

        {/* Centered Navigation Links */}
        <div className="flex-grow flex justify-end mr-56">
          <ul className=" text-xl text-black font-semibold flex space-x-12">
            <li>
              <Link to="/" className=" hover:text-blue-900">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Aboutus" className=" hover:text-blue-900">
                About Us
              </Link>
            </li>
            <li>
              <a href="/Services" className=" hover:text-blue-900">
                Services
              </a>
            </li>
            <li>
              <a href="/Contact" className=" hover:text-blue-900">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* Optional right-side section */}
        {/* <div className="flex items-center">
            <button 
            className='bg-white text-black px-4 py-2 rounded-full hover:bg-blue-600'
            >
                Call us

            </button>
          
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
