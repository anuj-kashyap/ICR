import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm shadow-black p-4 md:p-6 relative z-50">
      <div className="mx-auto flex items-center justify-between">
        <div className="flex items-center ml-3">
          <img src={logo} alt="logo" className='w-20 h-14' />
        </div>
       
        
        <div className="md:hidden mr-4 z-50">
          <button onClick={toggleMenu} className="relative z-50">
            <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
       
       
        <div className={`
          md:flex md:flex-grow md:justify-end md:mr-56
          fixed top-0 right-0 h-full w-64 bg-white shadow-md md:relative md:top-auto md:right-auto md:w-auto md:shadow-none md:h-auto
          transition-all duration-300 ease-in-out z-40
          ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0
        `}>
          <ul className="text-xl text-black font-semibold flex flex-col md:flex-row md:space-x-12 p-4 md:p-0 pt-16 md:pt-0">
            <li className="py-2 md:py-0 text-right">
              <Link to="/" className="hover:text-blue-900 block" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="py-2 md:py-0 text-right">
              <Link to="/Aboutus" className="hover:text-blue-900 block" onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li className="py-2 md:py-0 text-right">
              <Link to="/Services" className="hover:text-blue-900 block" onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li className="py-2 md:py-0 text-right">
              <Link to="/Contact" className="hover:text-blue-900 block" onClick={closeMenu}>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;