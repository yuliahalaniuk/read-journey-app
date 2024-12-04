import styled from "styled-components";
import { FlexBox } from "../../../atoms/FlexBox";
import Slider from "react-slick";

export const SliderContainer = styled(FlexBox)`
  max-width: 240px;
  margin: 0 auto;

  @media screen and (min-width: 400px) {
    max-width: 290px;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    max-width: 320px;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    width: 273px;
  }
`;
export const ArrowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  width: 20px;
  height: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:before {
    display: none;
  }

  .slick-next {
    right: 0;
  }

  .slick-prev {
    left: 0;
  }
`;

export const StyledSlider = styled(Slider)`
  .slick-track {
    display: flex;
  }
`;
