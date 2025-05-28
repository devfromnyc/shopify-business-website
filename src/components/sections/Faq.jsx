import React, { useState } from "react";

const Faq = ({
  questions,
  layout = "column",
  header,
  paragraphText,
  image,
  imageLayout = "row",
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const layoutClasses =
    layout === "row"
      ? "flex flex-col lg:flex-row gap-8 items-start"
      : "flex flex-col gap-4";

  // If image is present, use TextBlock-like layout
  if (image) {
    const imageLayoutClasses =
      imageLayout === "row-reverse"
        ? "flex flex-col md:flex-row-reverse gap-8 items-center"
        : "flex flex-col md:flex-row gap-8 items-center";

    return (
      <div className="flex flex-col gap-4 px-8 md:px-12 py-8 md:min-h-screen">
        <div className={imageLayoutClasses}>
          <div className="w-full md:w-1/2">
            <img
              src={image}
              alt="FAQ"
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-left mb-4">{header}</h2>
              <p className="text-gray-500 text-left mb-6">{paragraphText}</p>
            </div>

            <div className={layoutClasses}>
              {questions.map((item, index) => (
                <div
                  key={index}
                  className={`${layout === "row" ? "flex-1" : "w-full"}`}>
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full text-left p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex justify-between items-center">
                    <span className="font-semibold text-gray-800">
                      {item.question}
                    </span>
                    <span className="text-xl font-bold text-gray-600 ml-4">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  {openIndex === index && (
                    <div className="mt-2 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                      <p className="text-gray-700 text-left">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Original layout when no image is provided
  if (layout === "row" || layout === "row-reverse") {
    return (
      <div className="flex flex-col gap-4 px-8 md:px-12 py-8 md:min-h-screen">
        <h2 className="text-2xl font-bold text-left mb-4">{header}</h2>
        <p className="text-gray-500 text-left mb-6">{paragraphText}</p>

        <div className={layoutClasses}>
          {questions.map((item, index) => (
            <div
              key={index}
              className={`${layout === "row" ? "flex-1" : "w-full"}`}>
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full text-left p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex justify-between items-center">
                <span className="font-semibold text-gray-800">
                  {item.question}
                </span>
                <span className="text-xl font-bold text-gray-600 ml-4">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="mt-2 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <p className="text-gray-700 text-left">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 px-8 md:px-12 py-8 md:min-h-screen">
      <h2 className="text-2xl font-bold text-left mb-4">{header}</h2>
      <p className="text-gray-500 text-left mb-6">{paragraphText}</p>

      <div className={layoutClasses}>
        {questions.map((item, index) => (
          <div
            key={index}
            className={`${layout === "row" ? "flex-1" : "w-full"}`}>
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full text-left p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex justify-between items-center">
              <span className="font-semibold text-gray-800">
                {item.question}
              </span>
              <span className="text-xl font-bold text-gray-600 ml-4">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="mt-2 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <p className="text-gray-700 text-left">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
