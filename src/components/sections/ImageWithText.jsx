import React from "react";

const ImageWithText = ({
  image,
  title,
  description,
  imageAlt = "",
  reverse = false,
}) => {
  return (
    <section className="py-16 px-8 md:px-12 bg-white">
      <div
        className={`max-w-6xl mx-auto flex flex-col md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        } items-center gap-12`}>
        <div className="flex-1 w-full">
          <img
            src={image}
            alt={imageAlt || title}
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>
        <div className="flex-1 w-full">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">{title}</h3>
          <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default ImageWithText;
