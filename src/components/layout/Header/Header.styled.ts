import styled from "styled-components";
import { FlexBox } from "../../../atoms/Flex";

export const Box = styled(FlexBox)<{ $isVisible?: boolean }>`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 16px 0;
  background-color: ${(p) => p.theme.background.mainTransparent};

  opacity: ${(p) => (p.$isVisible ? 1 : 0)};
  transition: opacity ${(p) => p.theme.timingFnMain};
  backdrop-filter: blur(3px);
  pointer-events: ${(p) => (p.$isVisible ? "all" : "none")};
  max-width: 375px;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    max-width: 704px;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    max-width: 100%;
  }
`;

export const ImgContainer = styled(FlexBox)``;
