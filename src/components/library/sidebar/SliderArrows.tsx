import SliderArrow from "../../../assets/SliderArrows";
import { ArrowButton } from "./LibrarySideBar.styled";

export const NextArrow = (props: any) => {
  const { onClick, style } = props;
  return (
    <ArrowButton
      className="slick-next"
      onClick={onClick}
      style={{ ...style, right: "-16px" }}
    >
      <SliderArrow direction="right" />
    </ArrowButton>
  );
};

export const PrevArrow = (props: any) => {
  const { onClick, style } = props;
  return (
    <ArrowButton
      className="slick-prev"
      onClick={onClick}
      style={{ ...style, left: "-16px" }}
    >
      <SliderArrow direction="left" />
    </ArrowButton>
  );
};
