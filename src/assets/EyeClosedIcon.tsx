import { IconProps } from "../types/global";

const EyeClosedIcon: React.FC<IconProps> = ({
  size = 20,
  color = "#F9F9F9",
  strokeWidth = 1.3,
  className = "",
  ariaLabel = "Eye closed icon",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden={ariaLabel ? "false" : "true"}
      aria-label={ariaLabel}
      className={className}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M14.9499 14.95C13.5254 16.0358 11.7908 16.6374 9.99992 16.6667C4.16659 16.6667 0.833252 10 0.833252 10C1.86983 8.06825 3.30753 6.38051 5.04992 5.05M8.24992 3.53333C8.82353 3.39907 9.41081 3.33195 9.99992 3.33333C15.8333 3.33333 19.1666 10 19.1666 10C18.6607 10.9463 18.0575 11.8373 17.3666 12.6583M11.7666 11.7667C11.5377 12.0123 11.2617 12.2093 10.955 12.3459C10.6484 12.4826 10.3173 12.556 9.98166 12.562C9.64599 12.5679 9.31256 12.5061 9.00126 12.3804C8.68997 12.2547 8.40719 12.0675 8.16979 11.8301C7.9324 11.5927 7.74525 11.31 7.61951 10.9987C7.49377 10.6874 7.43202 10.3539 7.43795 10.0183C7.44387 9.68258 7.51734 9.35154 7.65398 9.04487C7.79062 8.73821 7.98763 8.46221 8.23325 8.23333"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.833252 0.833344L19.1666 19.1667"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default EyeClosedIcon;
