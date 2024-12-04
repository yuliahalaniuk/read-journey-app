import { IconProps } from "../types/global";

const CloseIcon: React.FC<IconProps> = ({
  size = 22,
  color = "#F9F9F9",
  strokeWidth = 2,
  className = "",
  ariaLabel = "Close icon",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden={ariaLabel ? "false" : "true"}
      aria-label={ariaLabel}
      className={className}
    >
      <path
        d="M16.5 5.5L5.5 16.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 5.5L16.5 16.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloseIcon;
