import { IconProps } from "../types/global";

const MenuIcon: React.FC<IconProps> = ({
  color = "#F9F9F9",
  ariaLabel = "Menu icon",
}) => {
  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 14H24.5M3.5 7H24.5M10.5 21H24.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MenuIcon;
