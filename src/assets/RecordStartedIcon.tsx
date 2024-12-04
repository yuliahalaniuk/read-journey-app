import { IconProps } from "../types/global";

const RecordStartedIcon: React.FC<IconProps & { circleColor?: string }> = ({
  color = "#E90516",
  circleColor = "#F9F9F9",
  ariaLabel = "Record started icon",
}) => {
  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="25" cy="25" r="24" stroke={circleColor} strokeWidth="2" />
      <rect x="15" y="15" width="20" height="20" rx="3" fill={color} />
    </svg>
  );
};

export default RecordStartedIcon;
