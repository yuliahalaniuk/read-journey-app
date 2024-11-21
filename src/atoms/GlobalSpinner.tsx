import React from "react";
import styled from "styled-components";
import { FlexBox } from "./Flex";
import { Text } from "./Text";

export const CircleLoaderSpiner = styled.div<{
  $size?: number;
  $strokeWidth?: number;
}>`
  width: ${(p) => p.$size ?? 60}px;
  height: ${(p) => p.$size ?? 60}px;

  aspect-ratio: 1/1;
  border: ${(p) => p.$strokeWidth ?? 5}px solid ${(p) => p.theme.accentColor};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const GlobalSpinner = () => {
  return (
    <FlexBox $gap={"20px"} $align="center" $justify="center">
      <CircleLoaderSpiner />

      <Text $size={"24px"}>Loading...</Text>
    </FlexBox>
  );
};

export default GlobalSpinner;
