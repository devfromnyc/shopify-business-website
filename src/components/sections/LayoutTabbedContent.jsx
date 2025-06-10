import React, { useState, useEffect, useRef } from "react";
import "./LayoutTabbedContent.css";

const LayoutTabbedContent = () => {
  const [activeLayout, setActiveLayout] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const layoutOptions = [
    {
      id: "four-per-row",
      title: "4 Per Row",
      description: "Maximum density layout for showcasing many items at once",
      gridClasses: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    },
    {
      id: "two-per-row",
      title: "2 Per Row",
      description:
        "Balanced layout providing more detail while maintaining grid structure",
      gridClasses: "grid-cols-1 lg:grid-cols-2",
    },
    {
      id: "stacked",
      title: "Stacked",
      description:
        "Single column layout for maximum focus on individual content",
      gridClasses: "grid-cols-1",
    },
  ];

  // Sample content data with lorem ipsum
  const contentCards = [
    {
      id: 1,
      image: "/src/assets/store-opening.png",
      title: "Premium Store Setup",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      id: 2,
      image: "/src/assets/theme-editor.png",
      title: "Custom Theme Development",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    },
    {
      id: 3,
      image: "/src/assets/shopping-bold.png",
      title: "App Integration Services",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    },
    {
      id: 4,
      image: "/src/assets/rocket.avif",
      title: "Performance Optimization",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis.",
    },
  ];

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

  const handleLayoutChange = (index) => {
    setActiveLayout(index);
    setAnimationKey((prev) => prev + 1);
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

      {/* Content Cards Grid */}
      <div
        key={`grid-${animationKey}`}
        className={`grid ${
          layoutOptions[activeLayout].gridClasses
        } gap-6 max-w-7xl mx-auto w-full ${
          animationKey > 0 ? "animate-[slideInUp_0.8s_ease-out]" : "opacity-0"
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
    </div>
  );
};

export default LayoutTabbedContent;
