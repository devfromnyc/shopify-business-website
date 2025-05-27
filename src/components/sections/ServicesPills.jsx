import React from "react";
import { ecommerceData } from "../../utils/ecommerceData";

const ServicesPills = ({ direction }) => {
  return (
    <div className="flex flex-col justify-center items-center px-12 py-16 bg-white md:min-h-screen">
      <div
        className={`max-w-7xl mx-auto ${
          direction === "row" ? "flex flex-col md:flex-row" : "flex flex-col"
        }`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What we're good at
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our expert team delivers cutting-edge solutions to help your
            business thrive in today's digital landscape.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-xl mx-auto my-0">
          {ecommerceData.map((product) => (
            <div
              key={product.id}
              className="product-pill flex justify-center items-center max-h-16 bg-[#96bf48]/10 hover:bg-[#96bf48]/20 text-[#96bf48] hover:text-[#7da63a] px-6 py-3 rounded-full font-medium text-sm transition-all duration-200 cursor-pointer hover:shadow-md">
              {product.title}
            </div>
          ))}
        </div>
      </div>
      {/* <div className="text-center mt-12">
        <button className="bg-[#96bf48] hover:bg-[#7da63a] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
          View All Services
        </button>
      </div> */}
    </div>
  );
};

export default ServicesPills;
