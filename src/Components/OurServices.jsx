import React from 'react';
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png'
import p6 from '../assets/p6.png'

const ServiceCard = ({ imageSrc, title }) => (
  <div className="relative rounded-lg overflow-hidden  group">
    <div className="relative w-full h-0 pb-[75%]"> 
      <img src={imageSrc} alt={title} className="absolute top-0 left-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-blue-800 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
        <div className="bg-white text-blue-500 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 sm:w-6 sm:h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 bg-blue-900 bg-opacity-70 text-white p-2 sm:p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
      <h3 className="text-sm sm:text-base lg:text-lg font-semibold">{title}</h3>
    </div>
  </div>
);

const OurServices = () => {
  const services = [
    { title: 'Hand Tufted woollen Carpets',image:p1 },
    { title: 'Hand Knotted woolen Carpets',image:p2 },
    { title: 'Flatweaves',image:p3 },
    { title: 'Handloom woolen Carpets',image:p4 },
    { title: 'Kashmiri Silk Carpets',image:p5 },
    { title: 'Wall to Wall Office Carpets',image:p6 },
  ];

  return (
    <div className=" mx-auto px-4 py-8 sm:py-12">
        <div bg></div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-800 mb-6 sm:mb-10 text-center">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} imageSrc={service.image} />
        ))}
      </div>
    </div>
  );
};

export default OurServices;