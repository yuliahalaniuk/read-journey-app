import React from "react";
import { InstructionDataEntity } from "../../../../data/instructionsData";
import { FlexLi } from "../../../../atoms/FlexBox";
import { AvatarBox, Text } from "./InstructionsItem.styled";

const InstructionItem = ({ id, text }: InstructionDataEntity) => {
  return (
    <FlexLi $fDirection="row" $gap="20px">
      <AvatarBox>
        <p>{id}</p>
      </AvatarBox>

      <Text>
        {text?.split(":")[0]}: <span> {text?.split(":")[1]}</span>
      </Text>
    </FlexLi>
  );
};

export default InstructionItem;
