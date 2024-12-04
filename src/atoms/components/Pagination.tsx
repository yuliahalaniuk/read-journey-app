import { BaseButton } from "../Buttons";
import { FlexBox } from "../Flex";
import SliderArrow from "../../assets/SliderArrows";

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
  return (
    <FlexBox
      $fDirection="row"
      $justify="center"
      style={{ textAlign: "center", marginTop: "20px", width: "100%" }}
      $gap="16px"
    >
      <BaseButton
        onClick={onPrevClick}
        style={{ gap: "8px" }}
        disabled={isPrev}
      >
        <SliderArrow direction="left" />
        Previous
      </BaseButton>
      <BaseButton
        onClick={onNextClick}
        style={{ gap: "8px" }}
        disabled={isNext}
      >
        Next
        <SliderArrow direction="right" />
      </BaseButton>
    </FlexBox>
  );
};

export default Pagination;
