import { IconProps } from "../types/global";

const DeleteBtmIcon: React.FC<IconProps> = ({
  size = 14,
  color = "#686868",
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
        d="M11.0833 3.50008V11.6668C11.0833 11.9762 10.9604 12.2729 10.7416 12.4917C10.5228 12.7105 10.2261 12.8334 9.91667 12.8334H4.08334C3.77392 12.8334 3.47717 12.7105 3.25838 12.4917C3.03959 12.2729 2.91667 11.9762 2.91667 11.6668V3.50008M4.66667 3.50008V2.33342C4.66667 2.024 4.78959 1.72725 5.00838 1.50846C5.22717 1.28966 5.52392 1.16675 5.83334 1.16675H8.16667C8.47609 1.16675 8.77284 1.28966 8.99163 1.50846C9.21042 1.72725 9.33334 2.024 9.33334 2.33342V3.50008"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.83333 6.41675V9.91675"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.16667 6.41675V9.91675"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DeleteBtmIcon;
