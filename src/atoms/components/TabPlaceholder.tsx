import React, { ReactNode } from "react";
import { FlexBox } from "../Flex";
import { TextWithAccent } from "../Text";
import { CircleImgWrapper } from "../CircleImgWrapper";

const TabPlaceholder = ({
  text,
  imgSrc,
  size = 130,
}: {
  text?: ReactNode;
  imgSrc?: string;
  size?: number;
}) => {
  return (
    <FlexBox $gap="20px" $align="center">
      <CircleImgWrapper>
        <img width={size} height={size} src={imgSrc} alt={"placeholder"} />
      </CircleImgWrapper>
      <TextWithAccent $primary={true}>{text}</TextWithAccent>
    </FlexBox>
  );
};

export default TabPlaceholder;
