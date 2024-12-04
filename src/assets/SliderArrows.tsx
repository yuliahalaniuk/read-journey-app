import React from "react";
import { IconProps } from "../types/global";

interface SliderArrowProps extends IconProps {
  direction: "left" | "right";
}

const SliderArrow: React.FC<SliderArrowProps> = ({
  direction,
  color = "#F9F9F9",
  ariaLabel = "Slider arrow",
}) => {
  const isLeft = direction === "left";

  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={isLeft ? "M6.5 11L1.5 6L6.5 1" : "M1.5 1L6.5 6L1.5 11"}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SliderArrow;
