import React, { useState } from "react";
import { contentSections } from "../../utils/tabbedContentData";

const TabbedContent = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col gap-8 px-12 py-16 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          <span className="font-normal">Reliable</span> and{" "}
          <span className="font-normal">Sustainable</span> Business Solutions
        </h2>
      </div>

      <div className="tabs-image-fil flex justify-center mb-8">
        <div className="flex flex-wrap justify-center gap-4 bg-white rounded-lg p-2 shadow-lg">
          {contentSections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => setActiveTab(index)}
              className={`flex flex-col items-center p-4 rounded-lg transition-all duration-300 min-w-[120px] ${
                activeTab === index
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-transparent text-gray-700 hover:bg-gray-100"
              }`}>
              <img
                src={section.icon}
                alt={section.title}
                className="w-8 h-8 mb-2 object-contain"
              />
              <span className="text-sm font-semibold text-center">
                {section.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="lg:w-1/2">
          <img
            src={contentSections[activeTab].image}
            alt={contentSections[activeTab].heading}
            className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="lg:w-1/2 space-y-6 text-left">
          <div className="flex items-center gap-3">
            <img
              src={contentSections[activeTab].icon}
              alt={contentSections[activeTab].heading}
              className="w-8 h-8 object-contain"
            />
            <h3 className="text-2xl font-bold text-gray-900">
              {contentSections[activeTab].heading}
            </h3>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed">
            {contentSections[activeTab].description}
          </p>

          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
            {contentSections[activeTab].ctaText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabbedContent;
