import React, { useState, useEffect } from "react";
import "./CircularProgress.css";

const CircularProgress = ({
  percentage = 0,
  size = 120,
  strokeWidth = 8,
  color = "#355965",
  backgroundColor = "#e5e7eb",
  showPercentage = true,
  label = "",
  className = "",
  animate = false,
}) => {
  const [progress, setProgress] = useState(0);

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    if (animate) {
      const duration = 1500;
      const steps = 60;
      const increment = percentage / steps;
      const stepDuration = duration / steps;

      let currentProgress = 0;
      const timer = setInterval(() => {
        currentProgress += increment;
        if (currentProgress >= percentage) {
          currentProgress = percentage;
          clearInterval(timer);
        }
        setProgress(currentProgress);
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [animate, percentage]);

  return (
    <div
      className={`circular-progress ${className}`}
      style={{ width: size, height: size }}>
      <svg width={size} height={size} className="circular-progress-svg">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
        />

        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          className="circular-progress-circle"
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
          }}
        />
      </svg>

      {/* Center content */}
      <div className="circular-progress-content">
        {showPercentage && (
          <div className="circular-progress-percentage">
            {Math.round(progress)}%
          </div>
        )}
        {label && <div className="circular-progress-label">{label}</div>}
      </div>
    </div>
  );
};

export default CircularProgress;
