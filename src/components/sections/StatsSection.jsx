import React, { useState, useEffect, useRef } from "react";
import CircularProgress from "../snippets/CircularProgress";
import { statsData } from "../../utils/statsData";
import "./StatsSection.css";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
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

  return (
    <section
      ref={sectionRef}
      className="py-16 px-8 md:px-12 bg-gradient-to-br from-slate-50 to-slate-200 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Storefront Optimizations
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We take a practical approach to storefront optimizations. We focus
            on what is most important to your business and what will help you
            grow. There are many different ways to optimize your storefront,
            below are just some examples!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={`stat-item relative flex flex-col items-center text-center p-8 md:p-12 rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-1 overflow-hidden ${
                isVisible ? "animate-border" : ""
              }`}>
              <CircularProgress
                percentage={stat.percentage}
                size={stat.size}
                color={stat.color}
                label={stat.label}
                strokeWidth={10}
                animate={isVisible}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
