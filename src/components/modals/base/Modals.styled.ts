import styled, { css } from "styled-components";
import { FlexBox } from "../../../atoms/FlexBox";
import { BaseButton } from "../../../atoms/Buttons";
import { slideInFromRight, slideOutToRight } from "../../../theme/animations";

export const CloseBtn = styled(BaseButton)`
  width: 28px;
  height: 28px;
  font-size: 28px;
`;

export const MenuBody = styled(FlexBox)<{ $isExiting?: boolean }>`
  position: absolute;
  top: 0;
  height: 100%;
  right: 0px;
  z-index: 201;
  max-width: 200px;
  background-color: ${(p) => p.theme.background.secondary};
  color: ${(p) => p.theme.text.main};
  opacity: 1;
  width: 100%;

  padding: 34px 20px 40px;
  align-items: center;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${({ $isExiting, theme }) =>
    $isExiting
      ? css`
          animation: ${slideOutToRight} ${theme.timingFnMain};
        `
      : css`
          animation: ${slideInFromRight} ${theme.timingFnMain};
        `}
`;

export const ModalTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: -0.02em;
  text-align: center;

  color: ${(p) => p.theme.text.main};
  margin-bottom: 10px;
  text-align: center;
`;

export const NameText = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.text.main};
  margin-bottom: 2px;
  text-align: center;
`;

export const SubText = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 117%;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.text.secondary};
  text-align: center;

  margin-bottom: 4px;
`;

export const PagesText = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 120%;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${(p) => p.theme.text.main};
  text-align: center;
`;
