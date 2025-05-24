import React from "react";

const TextBlock = ({ header, text, secondaryText, alignContent }) => {
  return (
    <div className="mx-auto py-16 px-12">
      <h2 className="text-2xl font-bold text-left mb-4">{header}</h2>
      <div
        className={`flex flex-col justify-start ${
          alignContent === "left" ? "items-start" : "items-center"
        } gap-4 max-w-5xl`}>
        <p className="text-black text-6xl text-left">{text}</p>
        <p className="text-gray-500 text-6xl text-left">{secondaryText}</p>
      </div>
    </div>
  );
};

export default TextBlock;
