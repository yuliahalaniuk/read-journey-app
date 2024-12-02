import React from "react";
import { BaseButton } from "../Buttons";
import { FlexBox } from "../Flex";
import SLiderArrows from "../../assets/SliderArrows";

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
        <SLiderArrows.Left />
        Previous
      </BaseButton>
      <BaseButton
        onClick={onNextClick}
        style={{ gap: "8px" }}
        disabled={isNext}
      >
        Next
        <SLiderArrows.Right />
      </BaseButton>
    </FlexBox>
  );
};

export default Pagination;
