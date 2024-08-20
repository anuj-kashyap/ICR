import React from "react";

const Product = () => {
  const products = [
    { image: "/assets/p1.png", title: "Handmade Carpet 1" },
    { image: "/assets/p5.png", title: "Handmade Carpet 2" },
    { image: "/assets/p6.png", title: "Handmade Carpet 3" },
    { image: "/assets/p4.png", title: "Handmade Carpet 4" },
    { image: "/assets/p3.png", title: "Handmade Carpet 5" },
    { image: "/assets/p2.png", title: "Handmade Carpet 6" },
  ];

  return (
    <div className="p-8 mt-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
        Our Products (Handmade Carpets):
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <div className="w-full h-64 overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-0 hover:opacity-75 transition-opacity duration-300 rounded-lg flex items-end justify-center">
              <div className="text-white text-center p-4">
                <h3 className="text-lg font-bold mb-2">{product.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
