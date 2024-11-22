const SliderArrowLeft = () => {
  return (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 11L1.5 6L6.5 1"
        stroke="#F9F9F9"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const SliderArrowRight = () => {
  return (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 1L6.5 6L1.5 11"
        stroke="#F9F9F9"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const SLiderArrows = {
  Left: SliderArrowLeft,
  Right: SliderArrowRight,
};

export default SLiderArrows;
