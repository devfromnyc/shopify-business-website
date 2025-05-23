import React from "react";
import { Icon } from "../snippets/Icon";
import ecommerce from "../../assets/ecommerce.png";

export const Hero = ({ header, alignContent }) => {
  return (
    <div
      className={`bg-gray-100 h-screen flex items-center justify-center px-12 ${
        alignContent === "left"
          ? "text-left justify-start"
          : "text-center justify-center"
      }`}>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold">{header}</h1>
        <p className="text-gray-500 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <ul
          className={`flex flex-col items-center gap-4 my-8 ${
            alignContent === "left" ? "items-start" : "items-center"
          }`}>
          <li className="flex items-center gap-2">
            <Icon iconType="checkmark-rounded" />
            <p>100% free</p>
          </li>
          <li className="flex items-center gap-2">
            <Icon iconType="checkmark-rounded" />
            <p>100% free</p>
          </li>
          <li className="flex items-center gap-2">
            <Icon iconType="checkmark-rounded" />
            <p>100% free</p>
          </li>
        </ul>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Get Started
        </button>
      </div>
      <img src={ecommerce} alt="ecommerce" className="w-1/2" />
    </div>
  );
};
