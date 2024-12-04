import { IconProps } from "../types/global";

const DelIcon: React.FC<IconProps> = ({
  size = 14,
  color = "#E85050",
  strokeWidth = 2,
  className = "",
  ariaLabel = "Delete icon",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden={ariaLabel ? "false" : "true"}
      aria-label={ariaLabel}
      className={className}
    >
      <path
        d="M1.75 3.5H2.91667H12.25"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0837 3.5V11.6667C11.0837 11.9761 10.9607 12.2728 10.742 12.4916C10.5232 12.7104 10.2264 12.8333 9.91699 12.8333H4.08366C3.77424 12.8333 3.47749 12.7104 3.2587 12.4916C3.03991 12.2728 2.91699 11.9761 2.91699 11.6667V3.5M4.66699 3.5V2.33333C4.66699 2.02392 4.78991 1.72717 5.0087 1.50838C5.22749 1.28958 5.52424 1.16667 5.83366 1.16667H8.16699C8.47641 1.16667 8.77316 1.28958 8.99195 1.50838C9.21074 1.72717 9.33366 2.02392 9.33366 2.33333V3.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.83301 6.41667V9.91667"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.16699 6.41667V9.91667"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DelIcon;
