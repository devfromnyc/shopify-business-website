import React from "react";
import icon from "../../assets/ecommerce.png";

export const ServiceIcons = ({
  icon1Text,
  icon2Text,
  icon3Text,
  icon4Text,
  paragraphText,
  header,
}) => {
  return (
    <div className="flex flex-col gap-4 px-8 md:px-12 py-8">
      <h2 className="text-2xl font-bold text-left mb-4">{header}</h2>
      <p className="text-gray-500 text-left mb-4">{paragraphText}</p>
      <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-28 py-12">
        <div className="flex flex-col justify-center items-center gap-4">
          <img src={icon} alt="Icon 1" className="w-28 h-28" />
          <p>{icon1Text}</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <img src={icon} alt="Icon 2" className="w-28 h-28" />
          <p>{icon2Text}</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <img src={icon} alt="Icon 3" className="w-28 h-28" />
          <p>{icon3Text}</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <img src={icon} alt="Icon 4" className="w-28 h-28" />
          <p>{icon4Text}</p>
        </div>
      </div>
    </div>
  );
};
