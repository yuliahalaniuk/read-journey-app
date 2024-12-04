import { IconProps } from "../types/global";

const RecordNotStartedIcon: React.FC<IconProps> = ({
  color = "#E90516",
  ariaLabel = "Record not started icon",
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
      <circle cx="25" cy="25" r="20" fill={color} />
      <circle cx="25" cy="25" r="24" stroke="#F9F9F9" strokeWidth="2" />
    </svg>
  );
};

export default RecordNotStartedIcon;
