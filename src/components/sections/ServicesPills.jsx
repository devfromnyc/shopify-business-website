import React from "react";
import { ecommerceData } from "../../utils/ecommerceData";

const ServicesPills = ({ direction }) => {
  return (
    <div className="flex flex-col px-12 py-16 bg-white">
      <div
        className={`max-w-7xl mx-auto ${
          direction === "row" ? "flex flex-col md:flex-row" : "flex flex-col"
        }`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comprehensive Business Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our expert team delivers cutting-edge solutions to help your
            business thrive in today's digital landscape.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {ecommerceData.map((product) => (
            <div
              key={product.id}
              className="product-pill flex justify-center items-center max-h-16 bg-blue-100 hover:bg-blue-200 text-blue-800 hover:text-blue-900 px-6 py-3 rounded-full font-medium text-sm transition-all duration-200 cursor-pointer hover:shadow-md">
              {product.title}
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-12">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
          View All Services
        </button>
      </div>
    </div>
  );
};

export default ServicesPills;
