import React from "react";
import { ecommerceData } from "../../utils/ecommerceData";

const ProductList = () => {
  return (
    <div className="flex flex-col px-12 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comprehensive Business Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our expert team delivers cutting-edge solutions to help your
            business thrive in today's digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ecommerceData.map((product) => (
            <div
              key={product.id}
              className="product-card group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300 cursor-pointer">
              <div className="flex flex-col h-full">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {product.description}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors duration-200">
                    Learn More →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            View All Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
