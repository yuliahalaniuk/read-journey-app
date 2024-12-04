import React from "react";
import { FlexBox } from "../../../../atoms/FlexBox";
import { SideBarTitle } from "../../../../atoms/SideBarTitle";
import { TextWithAccent } from "../../../../atoms/Text";
import { CircleImgWrapper } from "../../../../atoms/CircleImgWrapper";
import { SizeTypeEnum } from "../../../../types/global";

const ProgressTab = () => {
  return (
    <FlexBox
      $gap="20px"
      $align="flex-start"
      $padding="0 0 84px"
      $justify="center"
    >
      <SideBarTitle>Progress</SideBarTitle>

      <TextWithAccent $margin={"0 0 50px 0"}>
        Here you will see when and how much you read. To record, click on the
        red button above.
      </TextWithAccent>

      <FlexBox $fillWidth $align="center">
        <CircleImgWrapper $type={SizeTypeEnum.S}>
          <img src={"/images/star.png"} alt={"Star"} width={50} height={70} />
        </CircleImgWrapper>
      </FlexBox>
    </FlexBox>
  );
};

export default ProgressTab;
