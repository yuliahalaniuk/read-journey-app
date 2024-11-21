import styled, { css } from "styled-components";
import { FlexBox } from "./Flex";
import { BaseButton } from "./Buttons";
import {
  fadeInBackdrop,
  fadeOutBackdrop,
  scaleInFromCenter,
  scaleOutToCenter,
} from "../theme/animations";

export const CloseBtn = styled(BaseButton)`
  width: 28px;
  height: 28px;
  font-size: 28px;
`;

export const Body = styled(FlexBox)<{
  $sizeType?: "s" | "m";
  $isExiting?: boolean;
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: ${(p) => p.theme.borderRadius.modal};
  width: 100%;
  max-width: ${(p) => (p.$sizeType === "m" ? "500px" : "342px")};
  z-index: 201;
  background-color: ${(p) => p.theme.background.secondary};
  color: ${(p) => p.theme.text.main};
  opacity: 1;

  padding: ${(p) => (p.$sizeType === "m" ? "40px 40px" : "60px 46px")};

  ${CloseBtn} {
    position: absolute;
    top: 16px;
    right: ${(p) => (p.$sizeType === "m" ? "16px" : "12px")};
  }

  ${({ $isExiting, theme }) =>
    $isExiting
      ? css`
          animation: ${scaleOutToCenter} ${theme.timingFnMain};
        `
      : css`
          animation: ${scaleInFromCenter} ${theme.timingFnMain};
        `}
`;

export const Backdrop = styled(FlexBox)<{
  $hasChildren?: boolean;
  $isExiting?: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 200;
  background-color: ${(p) => p.theme.backdropColor};

  ${({ $isExiting, theme }) =>
    $isExiting
      ? css`
          animation: ${fadeOutBackdrop} ${theme.timingFnMain};
        `
      : css`
          animation: ${fadeInBackdrop}${theme.timingFnMain};
        `}

  ${(p) =>
    p.$hasChildren &&
    `align-items: center;
     justify-content: center;
     padding: 20px;`}
`;

const Modal = { Backdrop, Body, CloseBtn };

export default Modal;
