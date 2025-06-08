import React from "react";
import { Icon } from "../snippets/Icon";
import onlineshopping from "../../assets/onlineshopping.png";
import "./Hero.css";

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
      id="home"
      className={`bg-gray-100 h-screen flex flex-col md:flex-row items-center justify-center md:mb-0 mb-36 px-8 md:px-12 md:min-h-screen ${
        alignContent === "left"
          ? "text-left justify-start"
          : "text-center justify-center"
      }`}>
      <div className="container mx-auto animate-[slideInLeft_1s_ease-out]">
        <h1 className="text-4xl font-bold md:mt-0 mt-12">{header}</h1>
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
        <a
          href="#contact"
          className="bg-[#355965] hover:bg-[#2a464f] text-white px-4 py-2 rounded-md transition-colors">
          Get Started
        </a>
      </div>
      <img
        src={onlineshopping}
        alt="onlineshopping"
        className="w-full md:w-1/2 mt-8 md:mt-0 animate-[slideInRight_1s_ease-out]"
      />
    </div>
  );
};
