import React from 'react';

const Journey = () => {
  return (
    <div className="bg-gray-50  py-12 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Our Journey Section */}
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6 text-center">
            Our Journey (History)
          </h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start">
              <span className="mr-3 text-blue-900 font-bold">•</span>
              <span className="text-gray-700">
                <strong>Since 1995:</strong> Started as MN Carpet Dealer.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-900 font-bold">•</span>
              <span className="text-gray-700">
                <strong>Since 2000:</strong> Transitioned from MN Carpet Dealer to MN Carpet LLP.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-900 font-bold">•</span>
              <span className="text-gray-700">
                <strong>Since 2022:</strong> Embarked on a new chapter as Insha Carpets & Rugs.
              </span>
            </li>
          </ul>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6 text-center">
            Why Choose Insha Carpets and Rugs
          </h2>
          <div className="space-y-4 text-lg">
            <div className="p-4 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105">
              <h3 className="font-semibold text-blue-900 mb-2">Uncompromising Quality</h3>
              <p className="text-gray-700">Impeccable craftsmanship and premium materials.</p>
            </div>
            <div className="p-4 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105">
              <h3 className="font-semibold text-blue-900 mb-2">Personalised Experience</h3>
              <p className="text-gray-700">
                Collaborative approach to bring your vision to life.
              </p>
            </div>
            <div className="p-4 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105">
              <h3 className="font-semibold text-blue-900 mb-2">Timeless Elegance</h3>
              <p className="text-gray-700">
                Rugs that transcend trends, adding sophistication to any space.
              </p>
            </div>
          </div>
        </div>

        {/* Dedication to Handmade Elegance Section */}
        <div className="bg-blue-900 text-white p-8 rounded-lg">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center">
            Our Dedication to Handmade Elegance
          </h2>
          <p className="text-lg leading-relaxed text-center">
            At Insha Carpets and Rugs, we celebrate the art of handmade carpets and Rugs. Our skilled artisans pour their passion and expertise into every creation, ensuring that each piece tells a unique story. From traditional hand-knotted and hand-tufted carpets to intricately crafted flatweaves and handloom wonders, our collection reflects the timeless beauty of true craftsmanship.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Journey;
