import styled from "styled-components";
import { FlexBox, Header } from "../../../atoms/FlexBox";
import { BaseBox } from "../../../atoms/BaseBox";

export const Box = styled(Header)<{ $isVisible?: boolean }>`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 16px 0;
  background-color: ${(p) => p.theme.background.mainTransparent};

  justify-content: center;
  align-items: center;

  opacity: ${(p) => (p.$isVisible ? 1 : 0)};
  transition: opacity ${(p) => p.theme.timingFnMain};
  backdrop-filter: blur(3px);
  pointer-events: ${(p) => (p.$isVisible ? "all" : "none")};
  width: 100%;
  max-width: 375px;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    max-width: 704px;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    max-width: 100%;
  }
`;

export const HeaderSt = styled(BaseBox)`
  padding: 20px;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    padding-inline: 16px;
  }
`;


export const ImgContainer = styled(FlexBox)``;
