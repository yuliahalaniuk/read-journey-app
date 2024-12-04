import React from "react";
import { IconProps } from "../types/global";

const SquareIcon: React.FC<IconProps> = ({
  color = "#141414",
  strokeColor = "#F9F9F9",
  ariaLabel = "Square icon",
}) => {
  return (
    <svg
      viewBox="0 0 20 20"
      width={"20"}
      height={"20"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden={ariaLabel ? "false" : "true"}
      aria-label={ariaLabel}
    >
      <rect width="20" height="20" rx="4" fill={strokeColor} />
      <rect x="4" y="4" width="12" height="12" rx="2" fill={color} />
    </svg>
  );
};

export default SquareIcon;
