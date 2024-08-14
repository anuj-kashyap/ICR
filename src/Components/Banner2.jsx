import React from 'react';
// import bg from '../assets/accountant.png';

const Banner2 = () => {
  return (
    <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[300px]">
      {/* <img src={bg} alt="Background" className="absolute inset-0 w-full h-full object-cover" /> */}
      <div className="absolute inset-0 bg-blue-950"></div>
      <div className="relative flex items-center justify-center h-full">
        <h1 className="text-white text-5xl md:text-5xl lg:text-6xl xl:text-7xl">
          Contact Us
        </h1>
      </div>
    </div>
  );
};

export default Banner2;
