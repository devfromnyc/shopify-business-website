import React, { useState, useEffect, useRef } from "react";
import "./LayoutTabbedContent.css";
import MobileCarousel from "./MobileCarousel";
import {
  desktopLayoutOptions,
  mobileLayoutOptions,
  contentCards,
} from "../../utils/layoutData";

const LayoutTabbedContent = () => {
  const [activeLayout, setActiveLayout] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const sectionRef = useRef(null);

  const layoutOptions = isMobile ? mobileLayoutOptions : desktopLayoutOptions;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setAnimationKey(1);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 768;
      setIsMobile(newIsMobile);
      // Reset to first layout option when switching between mobile and desktop
      setActiveLayout(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLayoutChange = (index) => {
    setActiveLayout(index);
    setAnimationKey((prev) => prev + 1);
  };

  const renderContent = () => {
    if (isMobile && layoutOptions[activeLayout].id === "mobile-carousel") {
      return <MobileCarousel items={contentCards} />;
    }

    return (
      <div
        key={`grid-${animationKey}`}
        className={`grid ${
          layoutOptions[activeLayout].gridClasses
        } gap-6 max-w-7xl mx-auto w-full ${
          animationKey > 1 ? "animate-[slideInUp_0.8s_ease-out]" : ""
        }`}>
        {contentCards.map((card) => (
          <div
            key={card.id}
            className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
            {/* Image Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content Container */}
            <div className="p-4 flex flex-col">
              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#355965] transition-colors duration-200">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                {card.description}
              </p>

              {/* Price and Action */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-[#355965]">
                    ${card.price.toFixed(2)}
                  </span>
                  {card.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${card.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                <button
                  className={`w-full px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    card.inStock
                      ? "bg-[#355965] text-white hover:bg-[#2a464f]"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                  disabled={!card.inStock}>
                  {card.inStock ? "Add to Cart" : "Out of Stock"}
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {card.rating} ({card.reviewCount})
                </span>
                <span
                  className={card.inStock ? "text-green-600" : "text-red-600"}>
                  {card.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      ref={sectionRef}
      className="flex flex-col px-8 md:px-12 py-16 bg-gray-50">
      <div className="text-center mb-4 md:mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Flexibility you never knew you needed
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Shopify's customizer is very powerful and allows us to add almost any
          feature you need to extend your theme's capabilities.
          <br />
          <br />
          Toggle between the different layouts below as an example of what
          (endless) possibilities are! Hint: Check mobile view too!
        </p>
      </div>

      {/* Layout Control Tabs */}
      <div className="flex flex-col md:flex-row justify-center mb-8">
        <div className="flex flex-wrap justify-center gap-4 bg-white rounded-lg p-4 md:p-2 shadow-lg">
          {layoutOptions.map((layout, index) => (
            <button
              key={layout.id}
              onClick={() => handleLayoutChange(index)}
              className={`flex flex-col items-center p-4 rounded-lg transition-all duration-300 min-w-[120px] ${
                activeLayout === index
                  ? "bg-[#355965] text-white shadow-md"
                  : "bg-transparent text-gray-700 hover:bg-gray-100"
              }`}>
              <span className="text-sm font-semibold text-center">
                {layout.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Layout Description */}
      <div className="text-center mb-8">
        <p
          key={`description-${animationKey}`}
          className={`text-gray-600 max-w-2xl mx-auto ${
            animationKey > 0 ? "animate-[fadeIn_0.5s_ease-out]" : "opacity-0"
          }`}>
          {layoutOptions[activeLayout].description}
        </p>
      </div>

      {/* Content Display */}
      {renderContent()}
    </div>
  );
};

export default LayoutTabbedContent;
