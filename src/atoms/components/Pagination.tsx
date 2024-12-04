import { CircleBtn } from "../Buttons";
import { FlexBox } from "../FlexBox";
import SliderArrow from "../../assets/SliderArrows";
import { useTheme } from "styled-components";

const Pagination = ({
  onPrevClick,
  onNextClick,
  isPrev,
  isNext,
}: {
  onPrevClick?: () => void;
  onNextClick?: () => void;
  isPrev?: boolean;
  isNext?: boolean;
}) => {
  const theme = useTheme();

  return (
    <FlexBox
      $fDirection="row"
      $justify="center"
      style={{ textAlign: "center", width: "max-content" }}
      $gap="16px"
    >
      <CircleBtn onClick={onPrevClick} style={{ gap: "8px" }} disabled={isPrev}>
        <SliderArrow
          direction="left"
          color={isPrev ? theme.border.select : theme.accentColor}
        />
      </CircleBtn>
      <CircleBtn onClick={onNextClick} style={{ gap: "8px" }} disabled={isNext}>
        <SliderArrow
          direction="right"
          color={isNext ? theme.border.select : theme.accentColor}
        />
      </CircleBtn>
    </FlexBox>
  );
};

export default Pagination;
