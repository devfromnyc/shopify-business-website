import React, { useState, useEffect, useRef } from "react";
import { ecommerceData } from "../../utils/ecommerceData";
import "./ServicesPills.css";

const ServicesPills = ({ direction }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect observer after first trigger to prevent re-animation
          observer.disconnect();
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before the section is fully visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="services"
      ref={sectionRef}
      className="flex flex-col justify-center items-center px-8 md:px-12 py-16 bg-white md:min-h-screen">
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
          {ecommerceData.map((product, index) => (
            <div
              key={product.id}
              className={`product-pill flex justify-center items-center max-h-16 bg-[#355965]/10 hover:bg-[#355965]/20 text-[#355965] hover:text-[#2a464f] px-6 py-3 rounded-full font-medium text-sm transition-all duration-200 cursor-pointer hover:shadow-md ${
                isVisible ? `service-pill-animate-${index + 1}` : "opacity-0"
              }`}>
              {product.title}
            </div>
          ))}
        </div>
      </div>
      {/* <div className="text-center mt-12">
        <button className="bg-[#355965] hover:bg-[#2a464f] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
          View All Services
        </button>
      </div> */}
    </div>
  );
};

export default ServicesPills;
