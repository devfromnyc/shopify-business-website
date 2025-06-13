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
            className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-[#355965] transition-all duration-300 cursor-pointer">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#355965] transition-colors duration-200">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.description}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-[#355965] text-sm font-medium group-hover:text-[#2a464f] transition-colors duration-200">
                  Learn More →
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
          Flexible Layout Options
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Choose the perfect layout for your content display needs
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
