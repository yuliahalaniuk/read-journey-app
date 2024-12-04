import React, { ReactNode } from "react";
import { FlexBox } from "../FlexBox";
import { TextWithAccent } from "../Text";
import { CircleImgWrapper } from "../CircleImgWrapper";
import { SizeTypeEnum } from "../../types/global";

const TabPlaceholder = ({
  text,
  imgSrc,
  circleSizeType,
}: {
  text?: ReactNode;
  imgSrc?: string;
  size?: number;
  circleSizeType?: SizeTypeEnum;
}) => {
  return (
    <FlexBox $gap="20px" $align="center">
      <CircleImgWrapper $type={circleSizeType}>
        <img src={imgSrc} alt={"placeholder"} />
      </CircleImgWrapper>
      <TextWithAccent
        $primary={true}
        style={{ maxWidth: "200px" }}
        $align="center"
      >
        {text}
      </TextWithAccent>
    </FlexBox>
  );
};

export default TabPlaceholder;
