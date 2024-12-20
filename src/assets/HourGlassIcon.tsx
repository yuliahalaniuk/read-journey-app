import { IconProps } from "../types/global";

const HourGlassIcon: React.FC<IconProps> = ({
  color = "#000",
  ariaLabel = "Hourglass icon",
}) => {
  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 9.99996L6.43926 7.03268C5.91022 6.59181 5.6457 6.37137 5.45553 6.10116C5.28704 5.86173 5.16191 5.59458 5.08585 5.31186C5 4.99278 5 4.64845 5 3.95979V1.66663M10 9.99996L13.5607 7.03268C14.0898 6.59181 14.3543 6.37137 14.5445 6.10116C14.713 5.86173 14.8381 5.59458 14.9142 5.31186C15 4.99278 15 4.64845 15 3.95979V1.66663M10 9.99996L6.43926 12.9672C5.91022 13.4081 5.6457 13.6285 5.45553 13.8988C5.28704 14.1382 5.16191 14.4053 5.08585 14.6881C5 15.0071 5 15.3515 5 16.0401V18.3333M10 9.99996L13.5607 12.9672C14.0898 13.4081 14.3543 13.6285 14.5445 13.8988C14.713 14.1382 14.8381 14.4053 14.9142 14.6881C15 15.0071 15 15.3515 15 16.0401V18.3333"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33337 1.66663H16.6667M3.33337 18.3333H16.6667"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HourGlassIcon;
