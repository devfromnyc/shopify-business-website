import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { contentSections } from "../../utils/tabbedContentData";
import "./TabbedContent.css";

const TabbedContent = ({ textOverImage }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setAnimationKey(1); // Trigger initial animation
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
  }, [isVisible]);

  const handleTabChange = (index) => {
    setActiveTab(index);
    // Increment animation key to trigger re-animation
    setAnimationKey((prev) => prev + 1);
  };

  const textOverlayClasses = textOverImage
    ? "absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center px-4"
    : "";

  const imageSizingClasses = textOverImage
    ? "w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
    : "w-full h-auto lg:h-96 xl:h-[600px] object-scale-down";

  return (
    <div
      ref={sectionRef}
      className="flex flex-col px-8 md:px-12 py-16 bg-gray-50 md:min-h-screen">
      <div className="text-center mb-4 md:mb-8 xl:mt-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-0 md:mb-4">
          The All-In-One Shopify Solution
        </h2>
      </div>

      <div className="tabs-image-fil flex md:flex-row flex-col justify-center mb-6">
        <div className="flex flex-wrap justify-center gap-4 bg-white rounded-lg p-4 md:p-2 shadow-lg">
          {contentSections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => handleTabChange(index)}
              className={`flex flex-col items-center p-4 rounded-lg transition-all duration-300 min-w-[120px] ${
                activeTab === index
                  ? "bg-[#355965] text-white shadow-md"
                  : "bg-transparent text-gray-700 hover:bg-gray-100"
              }`}>
              <span className="text-sm font-semibold text-center">
                {section.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 md:gap-8 items-center relative">
        {/* Image - Fades in */}
        <div className="lg:w-1/2">
          <img
            key={`image-${animationKey}`}
            src={contentSections[activeTab].image}
            alt={contentSections[activeTab].heading}
            className={`${imageSizingClasses} ${
              animationKey > 0 ? "animate-[fadeIn_1s_ease-out]" : "opacity-0"
            }`}
          />
        </div>

        {/* Text Content - Slides in from right */}
        <div
          key={`content-${animationKey}`}
          className={`lg:w-1/2 space-y-6 text-left ${
            animationKey > 0
              ? "animate-[slideInRight_1s_ease-out]"
              : "opacity-0"
          } ${
            textOverImage ? "text-white" : "text-gray-900"
          } ${textOverlayClasses}`}>
          <div>
            <h3 className="text-2xl font-bold">
              {contentSections[activeTab].heading}
            </h3>
          </div>

          <p className="text-lg leading-relaxed max-w-xl">
            {contentSections[activeTab].description}
          </p>

          {contentSections[activeTab].id === "digital" ? (
            <a
              href="#contact"
              className="bg-[#355965] hover:bg-[#2a464f] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              {contentSections[activeTab].ctaText}
            </a>
          ) : (
            <Link
              to="/shopify-learn-more"
              className="bg-[#355965] hover:bg-[#2a464f] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              {contentSections[activeTab].ctaText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabbedContent;
