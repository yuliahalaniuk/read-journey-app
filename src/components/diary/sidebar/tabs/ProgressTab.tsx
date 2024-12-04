import React from "react";
import { FlexBox } from "../../../../atoms/Flex";
import { SideBarTitle } from "../../../../atoms/SideBarTitle";
import { TextWithAccent } from "../../../../atoms/Text";
import { CircleImgWrapper } from "../../../../atoms/CircleImgWrapper";
import { SizeTypeEnum } from "../../../../types/global";

const ProgressTab = () => {
  return (
    <FlexBox $gap="20px" $align="flex-start" style={{ padding: "0 0 84px" }}>
      <SideBarTitle>Progress</SideBarTitle>

      <TextWithAccent $textAlign="left" style={{ marginBottom: "50px" }}>
        Here you will see when and how much you read. To record, click on the
        red button above.
      </TextWithAccent>

      <FlexBox>
        <CircleImgWrapper $type={SizeTypeEnum.S}>
          <img src={"/images/star.png"} alt={"Star"} width={50} height={70} />
        </CircleImgWrapper>
      </FlexBox>
    </FlexBox>
  );
};

export default ProgressTab;
