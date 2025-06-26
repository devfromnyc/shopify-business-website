import React, { useState, useEffect, useRef } from "react";
import CircularProgress from "./CircularProgress";
import { statsData } from "../../utils/statsData";

const Stats = ({
  title = "Our Performance Metrics",
  subtitle = "Scroll down to see our impressive statistics come to life",
  className = "",
  stats = statsData,
}) => {
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
    <div
      ref={sectionRef}
      className={`py-16 px-8 md:px-12 bg-gradient-to-br from-slate-50 to-slate-200 min-h-screen flex items-center justify-center ${className}`}>
      <div className="max-w-7xl w-full mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center p-8 md:p-12 rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-1">
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
    </div>
  );
};

export default Stats;
