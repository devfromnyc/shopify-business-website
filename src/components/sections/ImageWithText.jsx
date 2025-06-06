import React from "react";

const ImageWithText = ({ image, text, alignContent }) => {
  return (
    <div className="mx-auto py-8 px-8 md:px-12 md:min-h-screen">
      <div
        className={`flex flex-col gap-4 ${
          alignContent === "left"
            ? "flex-row-reverse"
            : alignContent === "vertical"
            ? "flex-col"
            : alignContent === "vertical-reverse"
            ? "flex-col-reverse"
            : "flex-row"
        } items-center justify-between`}>
        <img src={image} alt="Image" className="w-1/2 rounded-lg" />
        <p className="text-black text-4xl text-left max-w-[700px]">{text}</p>
      </div>
    </div>
  );
};

export default ImageWithText;
