import React from "react";

const FeaturedImages = ({ image, text, alignContent }) => {
  return (
    <div className="mx-auto py-8 px-12">
      <div
        className={`flex gap-4 ${
          alignContent === "left" ? "flex-row-reverse" : "flex-row"
        } items-center justify-between`}>
        <div className="flex flex-col gap-4 relative max-w-1/2">
          <img
            src={image}
            alt="Image"
            className="w-1/2 absolute top-1/2 -translate-y-1/2 -left-16"
          />
          <img src={image} alt="Image" className="w-full max-w-[700px]" />
        </div>
        <p className="text-black text-4xl text-left max-w-[500px]">{text}</p>
      </div>
    </div>
  );
};

export default FeaturedImages;
