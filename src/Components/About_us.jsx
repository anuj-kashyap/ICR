import React from 'react';
import smile from '../assets/smiling.png'

const About_us = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-10">
      <div className="flex flex-col gap-4 lg:gap-6 rounded-lg overflow-hidden">
        {/* <h2 className="text-4xl sm:text-5xl lg:text-6xl ml-96 font-bold text-black text-center">Who We Are</h2> */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src={smile}
              alt="Smiling woman"
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
          <div className="w-full space-x-11 md:w-1/2 p-4 sm:p-6">
          <h2 className='text-7xl ml-10 mb-4 font-bold'>who we are</h2>
            <p className="text-gray-700 text-sm sm:text-base">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_us;