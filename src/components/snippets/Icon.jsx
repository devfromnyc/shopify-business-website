import React from "react";
import checkmark from "../../assets/checkmark.svg";

export const Icon = ({
  iconType,
  borderColor = "border-black",
  iconColor = "",
}) => {
  const getColorFilter = (color) => {
    if (color === "text-blue-50") {
      return "brightness(0) saturate(100%) invert(96%) sepia(8%) saturate(1012%) hue-rotate(182deg) brightness(104%) contrast(94%)";
    }
    if (color === "text-white" || color === "text-slate-50") {
      return "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)";
    }
    return "";
  };

  const colorStyle = iconColor ? { filter: getColorFilter(iconColor) } : {};

  return (
    <>
      {iconType === "checkmark" ? (
        <img
          src={checkmark}
          alt="checkmark"
          width="20"
          height="20"
          style={colorStyle}
        />
      ) : (
        <img
          src={checkmark}
          alt="checkmark"
          width="20"
          height="20"
          className={`rounded-full border border-solid ${borderColor} p-1`}
          style={colorStyle}
        />
      )}
    </>
  );
};
