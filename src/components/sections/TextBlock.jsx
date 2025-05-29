import React from "react";

const TextBlock = ({ header, text, secondaryText, alignContent }) => {
  return (
    <div className="flex flex-col justify-center items-start mx-auto py-16 px-8 md:px-12 md:min-h-screen">
      <h2 className="text-xl md:text-2xl font-bold text-left mb-4">{header}</h2>
      <div
        className={`flex flex-col justify-start ${
          alignContent === "left" ? "items-start" : "items-center"
        } gap-4 max-w-5xl`}>
        <p className="text-black text-3xl md:text-4xl lg:text-6xl text-left leading-tight">
          {text}
        </p>
        {secondaryText && (
          <p className="text-gray-500 text-3xl md:text-4xl lg:text-6xl text-left leading-tight">
            {secondaryText}
          </p>
        )}
      </div>
    </div>
  );
};

export default TextBlock;
