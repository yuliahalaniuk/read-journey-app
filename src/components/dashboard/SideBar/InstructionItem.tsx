import React from "react";
import { InstructionDataEntity } from "../../../data/instructionsData";
import { FlexBox, FlexLi } from "../../../atoms/Flex";
import styled from "styled-components";

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

export const AvatarBox = styled(FlexBox)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  background: ${(p) => p.theme.accentColor};
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  p {
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: ${(p) => p.theme.text.inverted};
  }
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.text.main};

  span {
    color: ${(p) => p.theme.text.secondary};
  }
`;
export default InstructionItem;
