import { IconProps } from "../types/global";

const ArrowRight: React.FC<IconProps> = ({
  size = 24,
  color = "#E3E3E3",
  strokeWidth = 2,
  className = "",
  ariaLabel = "Arrow pointing right",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden={ariaLabel ? "false" : "true"}
      aria-label={ariaLabel}
      className={className}
    >
      <path
        d="M14 17L19 12L14 7"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 12H5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowRight;
