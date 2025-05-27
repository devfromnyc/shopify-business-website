import React from "react";
import { Icon } from "../snippets/Icon";
import intelligentShopping from "../../assets/intellingent-shopping.png";

export const Hero = ({
  header,
  subheader,
  bullet1Text,
  bullet2Text,
  bullet3Text,
  alignContent,
}) => {
  return (
    <div
      className={`bg-gray-100 h-screen flex items-center justify-center px-12 md:min-h-screen ${
        alignContent === "left"
          ? "text-left justify-start"
          : "text-center justify-center"
      }`}>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold">{header}</h1>
        <p className="text-gray-500 mt-4">{subheader}</p>
        <ul
          className={`flex flex-col items-center gap-4 my-8 ${
            alignContent === "left" ? "items-start" : "items-center"
          }`}>
          <li className="flex items-center gap-2">
            <Icon iconType="checkmark-rounded" />
            <p>{bullet1Text}</p>
          </li>
          <li className="flex items-center gap-2">
            <Icon iconType="checkmark-rounded" />
            <p>{bullet2Text}</p>
          </li>
          <li className="flex items-center gap-2">
            <Icon iconType="checkmark-rounded" />
            <p>{bullet3Text}</p>
          </li>
        </ul>
        <button className="bg-[#96bf48] hover:bg-[#7da63a] text-white px-4 py-2 rounded-md transition-colors">
          Get Started
        </button>
      </div>
      <img
        src={intelligentShopping}
        alt="intelligent shopping"
        className="w-1/2"
      />
    </div>
  );
};
